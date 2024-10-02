import ViewsIcon from "@svgs/views.svg";

interface ViewsData {
  viewCount: number;
}

export default function ViewsCount({ viewCount }: ViewsData) {
  return (
    <span className="flex items-center gap-1 text-sm text-textSecondary">
      <ViewsIcon className="text-textLight" /> {viewCount}
    </span>
  );
}
