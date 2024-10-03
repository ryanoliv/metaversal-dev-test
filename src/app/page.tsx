"use client";

import { useEffect, useState } from "react";
import { useHeaderTitle } from "./contexts/HeaderTitleContext";
import UserCard from "./components/UserCard";
import { User } from "./types/user";
import { Post } from "./types/post";
import SkeletonCard from "./components/SkeletonCard";
import SkeletonCardSimplified from "./components/SkeletonCardSimplified";

export default function Home() {
  const { setTitle, setShowBackArrow } = useHeaderTitle();

  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [usersToFollow, setUsersToFollow] = useState<User[]>([]);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [suggestedPosts, setSuggestedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setTitle("Feed");
    setShowBackArrow(false);
  }, [setTitle, setShowBackArrow]);

  useEffect(() => {
    async function fetchUsersAndPosts() {
      try {
        setLoading(true);
        const [usersRes, postsRes] = await Promise.all([
          fetch("https://dummyjson.com/users"),
          fetch("https://dummyjson.com/posts"),
        ]);

        if (!usersRes.ok || !postsRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const usersData = await usersRes.json();
        const postsData = await postsRes.json();

        // Store all users and posts in their original order for use in different sections
        setAllUsers(usersData.users);
        setAllPosts(postsData.posts);

        // Sort the posts by likes in descending order for "Suggested Posts"
        const sortedPosts = [...postsData.posts].sort(
          (a: Post, b: Post) => b.reactions.likes - a.reactions.likes
        );

        // Filter posts that have matching users and select top 2 for "Suggested Posts"
        const topTwoPosts = sortedPosts
          .filter((post: Post) =>
            usersData.users.some((user: User) => user.id === post.userId)
          )
          .slice(0, 2);

        setSuggestedPosts(topTwoPosts);

        // Create a map of post counts for each user
        const userPostCountMap: Record<number, number> = postsData.posts.reduce(
          (acc: Record<number, number>, post: Post) => {
            acc[post.userId] = (acc[post.userId] || 0) + 1; // Increase count for the userId
            return acc;
          },
          {}
        );

        // Attach postCount to each user and create a new list of users with the post count
        const usersWithPostCount = usersData.users.map((user: User) => ({
          ...user,
          postCount: userPostCountMap[user.id] || 0, // Get the count from the map, default to 0
        }));

        // Sort the users by post count in descending order and take the top 4 for "Who to follow"
        const sortedUsersByPosts = usersWithPostCount
          .sort(
            (
              a: User & { postCount: number },
              b: User & { postCount: number }
            ) => b.postCount - a.postCount
          )
          .slice(0, 4);

        setUsersToFollow(sortedUsersByPosts);
      } catch (err: unknown) {
        setError(
          err instanceof Error ? err.message : "An unexpected error occured"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchUsersAndPosts();
  }, []);

  if (loading) {
    return (
      <section className="flex justify-center bg-contentBase">
        <div className="flex flex-col gap-12 py-8 px-4 max-w-[700px]">
          <div className="flex flex-col gap-4">
            <h2 className="text-lg">Suggested Posts</h2>
            {[...Array(2)].map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg">Who to follow</h2>
            <div className="flex gap-4 flex-wrap">
              {[...Array(4)].map((_, index) => (
                <SkeletonCardSimplified key={index} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg">Recent</h2>
            {[...Array(5)].map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="flex justify-center bg-contentBase">
      <div className="flex flex-col gap-12 py-8 px-4 max-w-[700px]">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg">Suggested Posts</h2>
          {suggestedPosts.map((post) => {
            const user = allUsers.find((user) => user.id === post.userId);

            if (!user) {
              return null;
            }

            return (
              <UserCard
                key={post.id}
                user={{
                  id: user.id,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  username: user.username,
                  avatarUrl: "/Avatar.png",
                }}
                post={post}
                variant="detailed"
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg">Who to follow</h2>
          <div className="flex gap-4 flex-wrap">
            {usersToFollow.map((user) => (
              <UserCard
                key={user.id}
                user={{
                  id: user.id,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  username: user.username,
                  avatarUrl: "/Avatar.png",
                }}
                showFollowButton
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg">Recent</h2>
          {allPosts.map((post) => {
            const user = allUsers.find((user) => user.id === post.userId);

            if (!user) {
              return null;
            }

            return (
              <UserCard
                key={post.id}
                user={{
                  id: user.id,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  username: user.username,
                  avatarUrl: "/Avatar.png",
                }}
                post={post}
                variant="detailed"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
