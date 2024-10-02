"use client";

import { useEffect } from "react";
import { useHeaderTitle } from "./contexts/HeaderTitleContext";
import UserCard from "./components/UserCard";

export default function Home() {
  const { setTitle } = useHeaderTitle();

  useEffect(() => {
    setTitle("Feed");
  }, [setTitle]);

  const suggestedPosts = [
    {
      firstName: "Emily",
      lastName: "Johnson",
      username: "emilys",
      avatarUrl: "/Avatar.png",
      likeCount: 20,
      shareCount: 24,
      viewCount: 1230,
      tags: ["tag1", "tag2", "tag3"],
    },
    {
      firstName: "Albert Flores Longer",
      lastName: "Name Unlikely But Can Wrap",
      username: "albert",
      avatarUrl: "/Avatar.png",
      likeCount: 20,
      shareCount: 24,
      viewCount: 1230,
      tags: ["tag1", "tag2"],
    },
  ];

  const whoToFollow = [
    {
      firstName: "Emily",
      lastName: "Johnson",
      username: "emilys",
      avatarUrl: "/Avatar.png",
    },
    {
      firstName: "Kathryn Murphy",
      lastName: "Longer Name",
      username: "murph",
      avatarUrl: "/Avatar.png",
    },
    {
      firstName: "Esther",
      lastName: "Howard",
      username: "esther",
      avatarUrl: "/Avatar.png",
    },
    {
      firstName: "Jacob",
      lastName: "Jones",
      username: "jj",
      avatarUrl: "/Avatar.png",
    },
  ];

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
    <section className="flex justify-center bg-contentBase">
      <div className="flex flex-col gap-12 py-8 px-4 max-w-[700px]">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg">Suggested Posts</h2>
          {suggestedPosts.map((post) => (
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
        <div className="flex flex-col gap-4">
          <h2 className="text-lg">Who to follow</h2>
          <div className="flex gap-4 flex-wrap">
            {whoToFollow.map((post) => (
              <UserCard
                key={post.username}
                firstName={post.firstName}
                lastName={post.lastName}
                username={post.username}
                avatarUrl={post.avatarUrl}
                showFollowButton
              />
            ))}
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
