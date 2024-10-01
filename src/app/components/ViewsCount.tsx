import ViewsIcon from "@svgs/views.svg";

interface ViewsData {
  viewCount: number;
}

export default function ViewsCount({ viewCount }: ViewsData) {
  return (
    <span className="flex items-center gap-1 text-sm text-text/text-secondary">
      <ViewsIcon className="text-text/text-light" /> {viewCount}
    </span>
  );
}
