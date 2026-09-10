'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, FilterX, ChevronRight, ChevronLeft } from 'lucide-react';
import type { BlogPost } from '@/types';
import { BLOG_CATEGORIES } from '@/types';
import { usePublishedBlogs } from '@/hooks/useBlogs';
import BlogCard from './BlogCard';
import BlogCardSkeleton from './BlogCardSkeleton';
import Button from '../Button';

interface BlogListingClientProps {
  initialBlogs: BlogPost[];
}

const POSTS_PER_PAGE = 9;

export default function BlogListingClient({
  initialBlogs,
}: BlogListingClientProps) {
  const { data: blogs = initialBlogs, isLoading } =
    usePublishedBlogs(initialBlogs);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const listTopRef = useRef<HTMLDivElement>(null);

  // Reset page to 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((post) => {
      const matchesCategory =
        selectedCategory === 'all' || post.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags?.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [blogs, selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE);

  const paginatedBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredBlogs.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredBlogs, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    listTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div ref={listTopRef} className="scroll-mt-32 md:scroll-mt-40 space-y-10">
      {/* Filters Bar: Search & Category Chips */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-100 space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث في المقالات الطبية، الأعراض، أو طرق العلاج..."
            className="w-full pr-12 pl-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all text-slate-800 placeholder-slate-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-semibold"
            >
              مسح
            </button>
          )}
        </div>

        {/* Categories Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <Button
            size="sm"
            variant={selectedCategory === 'all' ? 'gold' : 'ghost'}
            onClick={() => setSelectedCategory('all')}
            className={
              selectedCategory === 'all'
                ? ''
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-navy'
            }
          >
            جميع المقالات ({blogs.length})
          </Button>

          {BLOG_CATEGORIES.map((cat) => {
            const count = blogs.filter((b) => b.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <Button
                key={cat}
                size="sm"
                variant={isSelected ? 'gold' : 'ghost'}
                onClick={() => setSelectedCategory(cat)}
                className={
                  isSelected
                    ? ''
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-navy'
                }
              >
                {cat} {count > 0 && `(${count})`}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Grid of Posts */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <BlogCardSkeleton key={i} />
          ))}
        </div>
      ) : paginatedBlogs.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {paginatedBlogs.map((post) => (
              <BlogCard key={post.id || post.slug} post={post} />
            ))}
          </div>

          {/* Numbered Pagination Controls */}
          {totalPages > 1 && (
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
              {/* Counter summary */}
              <div className="text-xs sm:text-sm text-slate-500 font-medium">
                عرض{' '}
                <span className="font-bold text-slate-800">
                  {(currentPage - 1) * POSTS_PER_PAGE + 1}
                </span>{' '}
                -{' '}
                <span className="font-bold text-slate-800">
                  {Math.min(currentPage * POSTS_PER_PAGE, filteredBlogs.length)}
                </span>{' '}
                من أصل{' '}
                <span className="font-bold text-slate-800">
                  {filteredBlogs.length}
                </span>{' '}
                مقال
              </div>

              {/* Page Buttons */}
              <div className="flex items-center gap-1.5" dir="rtl">
                {/* Previous Page Button */}
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 bg-slate-100 disabled:opacity-40"
                  title="الصفحة السابقة"
                  icon={<ChevronRight className="w-4 h-4 ml-1" />}
                  iconPosition='left'
                >
                  <span>السابق</span>
                </Button>

                {/* Numbered Pages */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => {
                    const isCurrent = page === currentPage;
                    return (
                      <Button
                        key={page}
                        size="sm"
                        variant={isCurrent ? 'gold' : 'ghost'}
                        onClick={() => handlePageChange(page)}
                        className={`min-w-9 h-9 p-0 font-bold ${
                          isCurrent
                            ? 'shadow-sm'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {page}
                      </Button>
                    );
                  }
                )}

                {/* Next Page Button */}
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 bg-slate-100 disabled:opacity-40"
                  title="الصفحة التالية"
                  icon={<ChevronLeft className="w-4 h-4 mr-1" />}
                  iconPosition='right'
                >
                  <span>التالي</span>
                </Button>
              </div>
            </div>
          )}
        </>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 bg-white rounded-3xl border border-slate-100 shadow-sm max-w-xl mx-auto space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mx-auto">
            <FilterX className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-800">
            لم نتمكن من العثور على مقالات مطابقة
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            جرب البحث بكلمات مختلفة أو إزالة فلتر التصنيف لعرض المقالات المتاحة.
          </p>
          {(searchQuery || selectedCategory !== 'all') && (
            <Button
              size="sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              variant="gold"
            >
              عرض كل المقالات
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
