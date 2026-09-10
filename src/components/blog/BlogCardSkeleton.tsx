import React from 'react';

export default function BlogCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full animate-pulse">
      {/* Image Skeleton */}
      <div className="h-48 sm:h-52 bg-slate-200 w-full" />

      {/* Content Skeleton */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* Category & Date */}
          <div className="flex items-center justify-between">
            <div className="h-5 w-24 bg-slate-200 rounded-full" />
            <div className="h-4 w-16 bg-slate-100 rounded" />
          </div>

          {/* Title */}
          <div className="space-y-2 pt-1">
            <div className="h-5 bg-slate-200 rounded w-5/6" />
            <div className="h-5 bg-slate-200 rounded w-3/4" />
          </div>

          {/* Excerpt */}
          <div className="space-y-1.5 pt-2">
            <div className="h-3.5 bg-slate-100 rounded w-full" />
            <div className="h-3.5 bg-slate-100 rounded w-11/12" />
            <div className="h-3.5 bg-slate-100 rounded w-4/6" />
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="h-4 w-20 bg-slate-200 rounded" />
          <div className="h-4 w-16 bg-slate-100 rounded" />
        </div>
      </div>
    </div>
  );
}
