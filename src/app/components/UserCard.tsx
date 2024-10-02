import Image from "next/image";
import { UserCardProps } from "../types/user";
import LikesCount from "./LikesCount";
import SharesCount from "./SharesCount";
import ViewsCount from "./ViewsCount";
import Link from "next/link";
import Button from "./Button";

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
    tags = [],
  } = props;

  return (
    <div
      className={`flex flex-col bg-contentSurface shadow rounded-xl border border-contentBorder ${
        variant === "simple" ? "max-w-[326px]" : ""
      }`}
    >
      <div className="flex flex-col p-4 rounded-t-2xl">
        <div
          className={`flex gap-3 ${variant === "simple" ? "items-center" : ""}`}
        >
          <Link href={`/${username}`}>
            <div>
              <Image
                src={avatarUrl}
                alt={`${firstName}'s avatar`}
                width={40}
                height={40}
                className="rounded-3xl transition-opacity duration-200 ease hover:opacity-50"
              />
            </div>
          </Link>
          <div className="flex flex-1 flex-col gap-3">
            <div className="flex flex-col gap-1 py-1">
              <Link href={`/${username}`}>
                <h3
                  className={`text-base text-textPrimary ${
                    variant === "simple" ? "min-w-[154px]" : ""
                  } hover:underline`}
                >
                  {firstName} {lastName}
                </h3>
              </Link>
              <p className="text-xs text-textSecondary">@{username}</p>
            </div>
            {variant === "detailed" && (
              <>
                <p className="text-sm text-textSecondary">
                  Post body lorem ipsum dolor sit amet consectetur. Sem
                  vestibulum massa lacus interdum enim fringilla.
                </p>
                {tags.length > 0 && (
                  <div className="flex gap-3 text-primaryDefault">
                    {tags.map((tag, index) => (
                      <span key={index} className="text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
          {showFollowButton && <Button variant="secondary">Follow</Button>}
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
