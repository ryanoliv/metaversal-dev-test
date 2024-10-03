export default function SkeletonCard() {
  return (
    <>
      <div className="flex flex-col bg-contentSurface shadow rounded-xl border border-contentBorder p-4 gap-4 animate-pulse">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          <div className="flex-1">
            <div className="w-1/2 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-1/4 h-3 bg-gray-300 rounded"></div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <div className="w-full h-4 bg-gray-300 rounded"></div>
          <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
        </div>
        <div className="flex gap-2 mt-4">
          <div className="w-12 h-4 bg-gray-300 rounded"></div>
          <div className="w-12 h-4 bg-gray-300 rounded"></div>
          <div className="w-12 h-4 bg-gray-300 rounded"></div>
        </div>
        <div className="flex gap-6 mt-4 border-t border-contentBorder pt-4">
          <div className="w-8 h-4 bg-gray-300 rounded"></div>
          <div className="w-8 h-4 bg-gray-300 rounded"></div>
          <div className="w-8 h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
    </>
  );
}
