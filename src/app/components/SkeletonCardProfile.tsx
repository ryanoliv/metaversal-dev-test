import React from "react";

export default function SkeletonCardProfile() {
  return (
    <div className="bg-contentSurface shadow rounded-xl mb-4">
      <div className="bg-gradient-to-r from-gray-300 to-gray-400 h-16 rounded-t-xl"></div>
      <div className="flex flex-col gap-4 md:flex-row mb-4">
        <div className="flex justify-center -mt-24 md:-mt-8 ml-0 md:ml-4">
          <div className="w-[120px] h-[120px] border-4 border-contentSurface rounded-full bg-gray-300 shadow-md"></div>
        </div>
        <div className="flex flex-col gap-6 flex-1 px-4">
          <div className="flex flex-col gap-3 text-center md:text-start mt-4">
            <div className="h-6 w-32 bg-gray-300 rounded mx-auto md:mx-0"></div>
            <div className="h-4 w-24 bg-gray-300 rounded mt-2 mx-auto md:mx-0"></div>
            <div className="h-4 w-40 bg-gray-300 rounded mt-4 mx-auto md:mx-0"></div>
          </div>
          <div className="flex gap-4 justify-center md:justify-start">
            <div className="h-8 w-20 bg-gray-300 rounded-lg"></div>
            <div className="h-8 w-20 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
