import React from 'react';

const BlogSkeleton = () => {
  return (
    <div className="animate-pulse px-8 sm:px-16 xl:px-32 mt-20">
      {/* Title Section */}
      <div className="text-center mb-8">
        <div className="h-5 bg-gray-300 rounded w-1/3 mx-auto mb-3"></div>
        <div className="h-10 sm:h-14 bg-gray-300 rounded w-2/3 mx-auto mb-3"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4 mx-auto mb-5"></div>
        <div className="h-6 bg-gray-300 rounded w-24 mx-auto"></div>
      </div>

      {/* Image Placeholder */}
      <div className="max-w-5xl mx-auto mb-10">
        <div className="w-full aspect-video bg-gray-300 rounded-2xl"></div>
      </div>

      {/* Description */}
      <div className="max-w-3xl mx-auto space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-4 bg-gray-300 rounded w-full"></div>
        ))}
      </div>

      {/* Comments */}
      <div className="mt-14 max-w-3xl mx-auto">
        <div className="h-5 w-1/4 bg-gray-300 rounded mb-6"></div>
        {[...Array(2)].map((_, i) => (
          <div key={i} className="p-4 border border-gray-200 bg-gray-100 rounded-lg mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <div className="h-4 w-24 bg-gray-300 rounded"></div>
            </div>
            <div className="h-3 w-5/6 bg-gray-300 rounded mb-1"></div>
            <div className="h-3 w-3/4 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>

      {/* Comment Form */}
      <div className="max-w-3xl mx-auto mt-12 space-y-4">
        <div className="h-5 w-1/3 bg-gray-300 rounded mb-2"></div>
        <div className="h-10 w-full bg-gray-200 rounded"></div>
        <div className="h-48 w-full bg-gray-200 rounded"></div>
        <div className="h-10 w-24 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
