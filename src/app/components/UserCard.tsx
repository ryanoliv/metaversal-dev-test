import Image from "next/image";
import { UserCardProps } from "../types/user";
import LikesCount from "./LikesCount";
import SharesCount from "./SharesCount";
import ViewsCount from "./ViewsCount";

export default function UserCard(props: UserCardProps) {
  const {
    firstName,
    lastName,
    username,
    avatarUrl,
    variant = "simple",
    showFollowButton = false,
    likeCount,
    shareCount,
    viewCount,
  } = props;

  return (
    <div
      className={`flex flex-col bg-content/surface shadow rounded-2xl border border-content/border ${
        variant === "simple" ? "max-w-[326px]" : ""
      }`}
    >
      <div className="flex flex-col p-4 rounded-t-2xl">
        <div
          className={`flex gap-3 ${variant === "simple" ? "items-center" : ""}`}
        >
          <div>
            <Image
              src={avatarUrl}
              alt={`${firstName}'s avatar`}
              width={40}
              height={40}
              className="rounded-3xl"
            />
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <div className="flex flex-col gap-1 py-1">
              <h3
                className={`text-base text-text/text-primary ${
                  variant === "simple" ? "min-w-[154px]" : ""
                }`}
              >
                {firstName} {lastName}
              </h3>
              <p className="text-xs text-text/text-secondary">@{username}</p>
            </div>
            {variant === "detailed" && (
              <>
                <p className="text-sm text-text/text-secondary">
                  Post body lorem ipsum dolor sit amet consectetur. Sem
                  vestibulum massa lacus interdum enim fringilla.
                </p>
                <div className="flex gap-3 text-primary/default">
                  <span className="text-xs">#tag1</span>
                  <span className="text-xs">#tag2</span>
                  <span className="text-xs">#tag3</span>
                </div>
              </>
            )}
          </div>
          {showFollowButton && (
            <button className="py-2 px-3.5 border text-primary/default border-primary/default rounded-3xl">
              Follow
            </button>
          )}
        </div>
      </div>
      {variant === "detailed" && (
        <div className="flex gap-6 p-4 border-t rounded-b-2xl">
          <LikesCount likeCount={likeCount || 0} />
          <SharesCount shareCount={shareCount || 0} />
          <ViewsCount viewCount={viewCount || 0} />
        </div>
      )}
    </div>
  );
}
