"use client";

import { useEffect, useRef } from "react";
import { useHeaderTitle } from "./contexts/HeaderTitleContext";
import useFetchUsers from "./hooks/useFetchUsers";
import useFetchPosts from "./hooks/useFetchPosts";
import useFetchSuggestedPosts from "./hooks/useFetchSuggestedPosts";
import { Post } from "./types/post";
import UserCard from "./components/UserCard";
import SkeletonCard from "./components/SkeletonCard";
import SkeletonCardSimplified from "./components/SkeletonCardSimplified";
import ErrorCard from "./components/ErrorCard";

export default function Home() {
  const { setTitle, setShowBackArrow } = useHeaderTitle();
  const observer = useRef<IntersectionObserver | null>(null);

  // Using separate hooks for fetching users and posts and suggested posts
  const {
    allUsers,
    loading: usersLoading,
    error: usersError,
  } = useFetchUsers();
  const {
    allPosts,
    fetchMorePosts,
    loading: postsLoading,
    loadingMore,
    error: postsError,
  } = useFetchPosts(5);
  const {
    suggestedPosts,
    loading: suggestedPostsLoading,
    error: suggestedPostsError,
  } = useFetchSuggestedPosts(2);

  // Unified loading and error states
  const loading = usersLoading || postsLoading || suggestedPostsLoading;
  const error = usersError || postsError || suggestedPostsError;

  useEffect(() => {
    setTitle("Feed");
    setShowBackArrow(false);
  }, [setTitle, setShowBackArrow]);

  // Intersection Observer to trigger fetchMorePosts when reaching the bottom of the feed
  const lastPostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (loading || loadingMore) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchMorePosts(); // Fetch more posts when the last post is in view
      }
    });

    if (lastPostRef.current) {
      observer.current.observe(lastPostRef.current);
    }
  }, [loading, loadingMore, fetchMorePosts]);

  // Prepare "Suggested Posts" and "Who to Follow" data after fetching
  // const suggestedPosts =
  //   !loading && !error
  //     ? [...allPosts]
  //         .sort((a, b) => b.reactions.likes - a.reactions.likes)
  //         .filter((post, index, self) => {
  //           // Only keep posts that are unique
  //           return index === self.findIndex((p) => p.id === post.id);
  //         })
  //         .slice(0, 2)
  //     : [];

  const usersToFollow =
    !loading && !error
      ? allUsers
          .map((user) => ({
            ...user,
            postCount: allPosts.filter((post) => post.userId === user.id)
              .length,
          }))
          .sort((a, b) => b.postCount - a.postCount)
          .slice(0, 4)
      : [];

  return (
    <section className="flex justify-center bg-contentBase">
      <div className="flex flex-col gap-12 py-8 px-4 w-full max-w-[700px]">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg">Suggested Posts</h2>
          {suggestedPostsLoading ? (
            [...Array(2)].map((_, index) => <SkeletonCard key={index} />)
          ) : suggestedPostsError ? (
            <ErrorCard title="Error loading posts" />
          ) : (
            suggestedPosts.map((post: Post, index) => {
              let user = allUsers.find((user) => user.id === post.userId);

              // Provide fallback user data if user is not found
              const fallbackUser = {
                id: Number(`${post.id}${index}`),
                firstName: "Unknown",
                lastName: "User",
                username: "unknown",
                avatarUrl: "/Avatar.png",
              };

              if (!user) {
                console.error(`User not found for post with ID: ${post.id}`);
                user = fallbackUser;
              }

              return (
                <UserCard
                  key={post.id}
                  user={user}
                  post={post}
                  variant="detailed"
                />
              );
            })
          )}
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg">Who to follow</h2>
          <div className="flex gap-4 flex-wrap">
            {loading ? (
              [...Array(4)].map((_, index) => (
                <SkeletonCardSimplified key={index} />
              ))
            ) : error ? (
              <ErrorCard title="Error loading users" />
            ) : (
              usersToFollow.map((user) => (
                <UserCard key={user.id} user={user} showFollowButton />
              ))
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg">Recent</h2>
          {loading ? (
            [...Array(5)].map((_, index) => <SkeletonCard key={index} />)
          ) : error ? (
            <ErrorCard title="Error loading posts" />
          ) : (
            allPosts.map((post, index) => {
              const user = allUsers.find((user) => user.id === post.userId);

              // Provide fallback user data if user is not found
              const fallbackUser = {
                id: Number(`${post.id}${index}`),
                firstName: "Unknown",
                lastName: "User",
                username: "unknown",
                avatarUrl: "/Avatar.png",
              };

              return (
                <UserCard
                  key={post.id}
                  user={user || fallbackUser}
                  post={post}
                  variant="detailed"
                  ref={index === allPosts.length - 1 ? lastPostRef : null}
                />
              );
            })
          )}
          {loadingMore && (
            <div className="flex justify-center py-4">
              <div className="loader"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
