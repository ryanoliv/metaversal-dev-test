"use client";

import { useEffect } from "react";
import { useHeaderTitle } from "../contexts/HeaderTitleContext";
import Image from "next/image";
import UserCard from "../components/UserCard";
import LocationIcon from "@svgs/location.svg";
import UserProfileStats from "../components/UserProfileStats";

interface UserProfileProps {
  params: {
    username: string;
  };
}

export default function UserProfile({ params }: UserProfileProps) {
  const { setTitle } = useHeaderTitle();

  useEffect(() => {
    setTitle("Profile");
  }, [setTitle]);

  const { username } = params;

  // Static data
  const userData = {
    username,
    firstName: "Emily",
    lastName: "Johnson",
    avatarUrl: "/Avatar.png",
    location: {
      state: "New York",
      country: "United States",
    },
    department: "Engineering",
    postsCount: 324,
    likesCount: 1532,
  };

  const recentPosts = [
    {
      firstName: "Emily",
      lastName: "Johnson",
      username: "emilys",
      avatarUrl: "/Avatar.png",
      likeCount: 20,
      shareCount: 24,
      viewCount: 1230,
      tags: ["tag1"],
    },
  ];

  return (
    <section className="py-16 px-4 flex justify-center bg-contentBase">
      <div className="max-w-[700px] w-full flex flex-col gap-12">
        <div className="bg-contentSurface shadow rounded-xl">
          <div className="bg-gradient-to-r from-purple-100 to-orange-100 h-16 rounded-t-xl"></div>
          <div className="flex flex-col gap-4 md:flex-row mb-4">
            <div className="flex justify-center -mt-24 md:-mt-8 ml-0 md:ml-4">
              <div className="w-[120px] h-[120px] border-4 border-contentSurface rounded-full shadow-md">
                <Image
                  src={userData.avatarUrl}
                  alt={`${userData.firstName}'s avatar`}
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3 text-center md:text-start mt-4">
                <h2 className="text-xl">
                  {userData.firstName} {userData.lastName}
                </h2>
                <div className="flex flex-col gap-2 items-center md:items-start">
                  <p className="text-base text-textSecondary">
                    @{userData.username}
                  </p>
                  <span className="flex items-center gap-1">
                    <LocationIcon className="text-textLight" />
                    <p className="text-base text-textSecondary">
                      {userData.location.state}, {userData.location.country}
                    </p>
                  </span>
                  <div className="py-1.5 px-3 bg-lightBlue50 rounded-xl">
                    <p className="text-lightBlue700 font-extrabold">
                      {userData.department}
                    </p>
                  </div>
                </div>
              </div>
              <UserProfileStats
                postsCount={userData.postsCount}
                likesCount={userData.likesCount}
              />
            </div>
          </div>
          <div className="p-4 flex justify-center md:justify-start gap-4 border-t border-greyCold50 bg-profile-card-gradient rounded-b-xl">
            <button className="bg-button-gradient-primary text-white100 py-2 px-3.5 rounded-3xl font-extrabold">
              Follow
            </button>
            <button className="py-2 px-3.5 border border-primaryDefault text-primaryDefault rounded-3xl">
              Message
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg">Recent</h2>
          {recentPosts.map((post) => (
            <UserCard
              key={post.username}
              firstName={post.firstName}
              lastName={post.lastName}
              username={post.username}
              avatarUrl={post.avatarUrl}
              variant="detailed"
              likeCount={post.likeCount}
              shareCount={post.shareCount}
              viewCount={post.viewCount}
              tags={post.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
