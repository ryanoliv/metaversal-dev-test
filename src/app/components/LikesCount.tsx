import LikesIcon from "@svgs/likes.svg";

interface LikesData {
  likeCount: number;
}

export default function LikesCount({ likeCount }: LikesData) {
  return (
    <span className="flex items-center gap-1 text-sm text-textSecondary">
      <LikesIcon className="text-textLight" /> {likeCount}
    </span>
  );
}
