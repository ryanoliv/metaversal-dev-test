export default function SkeletonCardSimplified() {
  return (
    <div className="flex items-center bg-contentSurface shadow rounded-xl border border-contentBorder p-4 gap-3 animate-pulse max-w-[326px]">
      <div className="w-10 h-10 rounded-full bg-gray-300"></div>
      <div className="flex-1">
        <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
        <div className="w-1/4 h-3 bg-gray-300 rounded mt-2"></div>
      </div>
      <div className="w-16 h-8 bg-gray-300 rounded-md"></div>
    </div>
  );
}
