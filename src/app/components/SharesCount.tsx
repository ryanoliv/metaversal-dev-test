import SharesIcon from "@svgs/shares.svg";

interface SharesData {
  shareCount: number;
}

export default function SharesCount({ shareCount }: SharesData) {
  return (
    <span className="flex items-center gap-1 text-sm text-textSecondary">
      <SharesIcon className="text-textLight" /> {shareCount}
    </span>
  );
}
