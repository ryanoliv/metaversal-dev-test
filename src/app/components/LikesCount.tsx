import LikesIcon from "@svgs/likes.svg";

interface LikesData {
  likeCount: number;
}

export default function LikesCount({ likeCount }: LikesData) {
  return (
    <span className="flex items-center gap-1 text-sm text-text/text-secondary">
      <LikesIcon className="text-text/text-light" /> {likeCount}
    </span>
  );
}
