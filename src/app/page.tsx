"use client";

import { useEffect } from "react";
import { useHeaderTitle } from "./contexts/HeaderTitleContext";
import useFetchUsersAndPosts from "./hooks/useFetchUsersAndPosts";
import UserCard from "./components/UserCard";
import SkeletonCard from "./components/SkeletonCard";
import SkeletonCardSimplified from "./components/SkeletonCardSimplified";
import ErrorCard from "./components/ErrorCard";

export default function Home() {
  const { setTitle, setShowBackArrow } = useHeaderTitle();
  const { allPosts, allUsers, loading, error } = useFetchUsersAndPosts();

  useEffect(() => {
    setTitle("Feed");
    setShowBackArrow(false);
  }, [setTitle, setShowBackArrow]);

  // Prepare "Suggested Posts" and "Who to Follow" data after fetching
  const suggestedPosts =
    !loading && !error
      ? [...allPosts]
          .sort((a, b) => b.reactions.likes - a.reactions.likes)
          .filter((post) => allUsers.some((user) => user.id === post.userId))
          .slice(0, 2)
      : [];

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
          {loading ? (
            [...Array(2)].map((_, index) => <SkeletonCard key={index} />)
          ) : error ? (
            <ErrorCard title="Error loading posts" />
          ) : (
            suggestedPosts.map((post) => {
              const user = allUsers.find((user) => user.id === post.userId);

              if (!user) {
                return null;
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
            allPosts.map((post) => {
              const user = allUsers.find((user) => user.id === post.userId);

              if (!user) {
                return null;
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
      </div>
    </section>
  );
}
