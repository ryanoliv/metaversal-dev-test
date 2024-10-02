interface UserProfileStatsProps {
  postsCount: number;
  likesCount: number;
}

export default function UserProfileStats({
  postsCount,
  likesCount,
}: UserProfileStatsProps) {
  return (
    <div className="flex gap-6 justify-center md:justify-start">
      <div className="flex flex-col items-center md:items-start gap-1">
        <h2 className="text-lg">{postsCount}</h2>
        <span className="text-xs uppercase text-textLight">Posts</span>
      </div>
      <div className="flex flex-col items-center md:items-start gap-1">
        <h2 className="text-lg">{likesCount}</h2>
        <span className="text-xs uppercase text-textLight">Likes</span>
      </div>
    </div>
  );
}
