"use client";

import { useEffect } from "react";
import { useHeaderTitle } from "../contexts/HeaderTitleContext";
import useFetchUsers from "../hooks/useFetchUsers";
import useFetchUserPosts from "../hooks/useFetchUsersPosts";
import { Post } from "../types/post";
import Image from "next/image";
import UserCard from "../components/UserCard";
import LocationIcon from "@svgs/location.svg";
import UserProfileStats from "../components/UserProfileStats";
import Button from "../components/Button";
import SkeletonCard from "../components/SkeletonCard";
import ErrorCard from "../components/ErrorCard";
import SkeletonCardProfile from "../components/SkeletonCardProfile";

interface UserProfileProps {
  params: {
    username: string;
  };
}

export default function UserProfile({ params }: UserProfileProps) {
  const { setTitle, setShowBackArrow } = useHeaderTitle();
  const {
    allUsers,
    loading: usersLoading,
    error: usersError,
  } = useFetchUsers();

  const { username } = params;

  // Find the user from the fetched users list
  const user = allUsers.find((user) => user.username === username);

  // Fetch posts for the specific user if found
  const {
    userPosts,
    loading: postsLoading,
    error: postsError,
  } = useFetchUserPosts({
    userId: user?.id,
  });

  // Unified loading and error states
  const loading = usersLoading || postsLoading;
  const error = usersError || postsError;

  // Calculate total likes on user's posts
  const totalLikes =
    userPosts?.reduce((acc, post) => acc + post.reactions.likes, 0) || 0;

  useEffect(() => {
    setTitle("Profile");
    setShowBackArrow(true);

    return () => {
      setShowBackArrow(false);
    };
  }, [setTitle, setShowBackArrow]);

  if (loading) {
    return (
      <section className="py-16 px-4 flex justify-center bg-contentBase min-h-screen">
        <div className="max-w-[700px] w-full flex flex-col gap-12">
          <SkeletonCardProfile />
          <div className="flex flex-col gap-4">
            <h2 className="text-lg">Recent</h2>
            {[...Array(1)].map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !user) {
    return (
      <section className="py-16 px-4 flex justify-center bg-contentBase">
        <div className="max-w-[700px] w-full flex flex-col gap-12">
          <ErrorCard title="User not found" />
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 flex justify-center bg-contentBase">
      <div className="max-w-[700px] w-full flex flex-col gap-12">
        <div className="bg-contentSurface shadow rounded-xl">
          <div className="bg-gradient-to-r from-purple-100 to-orange-100 h-16 rounded-t-xl"></div>
          <div className="flex flex-col gap-4 md:flex-row mb-4">
            <div className="flex justify-center -mt-24 md:-mt-8 ml-0 md:ml-4">
              <div className="w-[120px] h-[120px] border-4 border-contentSurface rounded-full shadow-md">
                <Image
                  src={user.avatarUrl || "/Avatar.png"}
                  alt={`${user.firstName} ${user.lastName}'s avatar`}
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3 text-center md:text-start mt-4">
                <h2 className="text-xl">
                  {user.firstName} {user.lastName}
                </h2>
                <div className="flex flex-col gap-2 items-center md:items-start">
                  <p className="text-base text-textSecondary">
                    @{user.username}
                  </p>
                  <span className="flex items-center gap-1">
                    <LocationIcon className="text-textLight" />
                    <p className="text-base text-textSecondary">
                      {user.address?.state}, {user.address?.country}
                    </p>
                  </span>
                  <div className="py-1.5 px-3 bg-lightBlue50 rounded-xl">
                    <p className="text-lightBlue700 font-extrabold">
                      {user.company?.department}
                    </p>
                  </div>
                </div>
              </div>
              <UserProfileStats
                postsCount={userPosts.length}
                likesCount={totalLikes}
              />
            </div>
          </div>
          <div className="p-4 flex justify-center md:justify-start gap-4 border-t border-greyCold50 bg-profile-card-gradient rounded-b-xl">
            <Button variant="primary">Follow</Button>
            <Button variant="secondary">Message</Button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-lg">Recent</h2>
          {userPosts.length === 0 ? (
            <p>No recent posts available</p>
          ) : (
            userPosts.map((post: Post) => (
              <UserCard
                key={post.id}
                user={user}
                post={post}
                variant="detailed"
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
