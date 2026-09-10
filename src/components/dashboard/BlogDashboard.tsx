'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Plus,
  Edit,
  Trash2,
  ExternalLink,
  Eye,
  EyeOff,
  Search,
  BookOpen,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Loader2,
  RefreshCw,
  ChevronDown,
} from 'lucide-react';
import type { BlogPost } from '@/types';
import { useAllBlogs, useDeleteBlog, useUpdateBlog } from '@/hooks/useBlogs';
import BlogEditor from './BlogEditor';
import { getOptimizedImageUrl } from '@/lib/cloudinary';

export default function BlogDashboard() {
  const { data: blogs = [], isLoading, refetch, isFetching } = useAllBlogs();
  const deleteBlogMutation = useDeleteBlog();
  const updateBlogMutation = useUpdateBlog();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState<BlogPost | null>(null);

  // Filter blogs
  const filteredBlogs = blogs.filter((b) => {
    const matchesCategory =
      selectedCategory === 'all' || b.category === selectedCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesQuery =
      !q ||
      b.title.toLowerCase().includes(q) ||
      b.slug.toLowerCase().includes(q) ||
      b.excerpt.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  // Stats
  const totalCount = blogs.length;
  const publishedCount = blogs.filter((b) => b.isPublished).length;
  const draftCount = totalCount - publishedCount;

  // Toggle publish
  const handleTogglePublish = async (blog: BlogPost) => {
    if (!blog.id) return;
    await updateBlogMutation.mutateAsync({
      id: blog.id,
      data: {
        isPublished: !blog.isPublished,
        publishedAt: !blog.isPublished ? new Date().toISOString() : blog.publishedAt,
      },
    });
  };

  // Confirm delete
  const handleDelete = async () => {
    if (!blogToDelete?.id) return;
    await deleteBlogMutation.mutateAsync({
      id: blogToDelete.id,
      slug: blogToDelete.slug,
    });
    setBlogToDelete(null);
  };

  // If in editor mode
  if (isCreating || editingBlog) {
    return (
      <BlogEditor
        initialData={editingBlog}
        onClose={() => {
          setIsCreating(false);
          setEditingBlog(null);
        }}
      />
    );
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Header & Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
            إدارة المقالات والمدونة
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            إضافة وتعديل مقالات د. عبدالله الصواط، وتحسين السيو.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => refetch()}
            disabled={isFetching}
            className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors"
            title="تحديث القائمة"
          >
            <RefreshCw
              className={`w-4 h-4 ${isFetching ? 'animate-spin text-brand' : ''}`}
            />
          </button>

          <button
            onClick={() => setIsCreating(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand hover:bg-accent-goldHover text-slate-950 text-xs sm:text-sm font-bold shadow-sm transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>كتابة مقال جديد</span>
          </button>
        </div>
      </div>

      {/* Stats Counters */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-500">
              إجمالي المقالات
            </div>
            <div className="text-2xl font-black text-slate-900 mt-1">
              {totalCount}
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-navy/5 text-navy flex items-center justify-center">
            <BookOpen className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-500">
              المقالات المنشورة
            </div>
            <div className="text-2xl font-black text-emerald-600 mt-1">
              {publishedCount}
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-500">المسودات</div>
            <div className="text-2xl font-black text-amber-600 mt-1">
              {draftCount}
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="البحث بالعنوان، الكلمات الدلالية، أو الرابط..."
            className="w-full pr-10 pl-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-brand focus:outline-none"
          />
        </div>

        <div className="relative w-full sm:w-56">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full appearance-none pr-3 pl-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:ring-2 focus:ring-brand focus:outline-none cursor-pointer"
          >
            <option value="all">جميع التصنيفات</option>
            <option value="جراحات الشرج والليزر">جراحات الشرج والليزر</option>
            <option value="جراحات القولون والمستقيم">
              جراحات القولون والمستقيم
            </option>
            <option value="أورام الجهاز الهضمي والمنظار">
              أورام الجهاز الهضمي والمنظار
            </option>
            <option value="نصائح طبية ووقائية">نصائح طبية ووقائية</option>
            <option value="أحدث التقنيات الجراحية">أحدث التقنيات الجراحية</option>
          </select>
          <ChevronDown className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        </div>
      </div>

      {/* Blog Articles Table / Cards */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {isLoading ? (
          <div className="p-12 text-center text-slate-500 flex flex-col items-center justify-center space-y-3">
            <Loader2 className="w-8 h-8 animate-spin text-brand" />
            <span className="text-xs font-semibold">
              جاري تحميل المقالات من قاعدة البيانات...
            </span>
          </div>
        ) : filteredBlogs.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-600 font-bold">
                  <th className="py-3.5 px-4">المقال</th>
                  <th className="py-3.5 px-4 hidden md:table-cell">التصنيف</th>
                  <th className="py-3.5 px-4 text-center">الحالة</th>
                  <th className="py-3.5 px-4 hidden sm:table-cell">تاريخ الإنشاء</th>
                  <th className="py-3.5 px-4 text-center">إجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredBlogs.map((blog) => {
                  const dateStr = blog.createdAt
                    ? new Date(blog.createdAt).toLocaleDateString('ar-SA', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })
                    : '—';

                  const thumbUrl = blog.coverImage
                    ? getOptimizedImageUrl(blog.coverImage, { width: 120 })
                    : '/images/alsawat-pic.jpeg';

                  return (
                    <tr
                      key={blog.id || blog.slug}
                      className="hover:bg-slate-50/60 transition-colors"
                    >
                      {/* Image & Title */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                            <Image
                              src={thumbUrl}
                              alt={blog.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="space-y-0.5">
                            <div className="font-bold text-slate-900 line-clamp-1 max-w-xs sm:max-w-md">
                              {blog.title}
                            </div>
                            <div className="text-[11px] text-slate-400 font-mono line-clamp-1" dir="ltr">
                              /blogs/{blog.slug}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Category */}
                      <td className="py-3 px-4 hidden md:table-cell">
                        <span className="inline-block px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-semibold">
                          {blog.category}
                        </span>
                      </td>

                      {/* Status Toggle Badge */}
                      <td className="py-3 px-4 text-center">
                        <button
                          type="button"
                          onClick={() => handleTogglePublish(blog)}
                          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold transition-colors ${
                            blog.isPublished
                              ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                              : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
                          }`}
                          title="اضغط لتغيير حالة النشر"
                        >
                          {blog.isPublished ? (
                            <>
                              <Eye className="w-3.5 h-3.5" />
                              <span>منشور</span>
                            </>
                          ) : (
                            <>
                              <EyeOff className="w-3.5 h-3.5" />
                              <span>مسودة</span>
                            </>
                          )}
                        </button>
                      </td>

                      {/* Date */}
                      <td className="py-3 px-4 hidden sm:table-cell text-slate-500 text-xs">
                        {dateStr}
                      </td>

                      {/* Actions */}
                      <td className="py-3 px-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          {/* Live Link */}
                          {
                            <Link
                              href={`/blogs/${blog.slug}`}
                              target="_blank"
                              className="p-2 text-slate-400 hover:text-navy rounded-lg hover:bg-slate-100 transition-colors"
                              title="عرض المقال على الموقع"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </Link>
                          }

                          {/* Edit Button */}
                          <button
                            type="button"
                            onClick={() => setEditingBlog(blog)}
                            className="p-2 text-slate-500 hover:text-brand rounded-lg hover:bg-slate-100 transition-colors"
                            title="تعديل المقال"
                          >
                            <Edit className="w-4 h-4" />
                          </button>

                          {/* Delete Button */}
                          <button
                            type="button"
                            onClick={() => setBlogToDelete(blog)}
                            className="p-2 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                            title="حذف المقال"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-16 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mx-auto">
              <BookOpen className="w-7 h-7" />
            </div>
            <h3 className="text-base font-bold text-slate-800">
              لا توجد مقالات مضافة حتى الآن
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              ابدأ بإضافة أول مقال طبي وتثقيفي لعيادة د. عبدالله الصواط لتعزيز الظهور في محركات البحث.
            </p>
            <button
              onClick={() => setIsCreating(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-navy text-accent-gold text-xs font-bold hover:bg-navy-secondary transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>إضافة أول مقال</span>
            </button>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {blogToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 space-y-5 text-center">
            <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-900">
                هل أنت متأكد من حذف هذا المقال؟
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                سيتم حذف مقال{' '}
                <span className="font-bold text-slate-700">
                  &ldquo;{blogToDelete.title}&rdquo;
                </span>{' '}
                نهائياً من قاعدة البيانات.
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setBlogToDelete(null)}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-100 transition-colors"
              >
                إلغاء
              </button>

              <button
                type="button"
                onClick={handleDelete}
                disabled={deleteBlogMutation.isPending}
                className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors shadow-sm disabled:opacity-50"
              >
                {deleteBlogMutation.isPending ? 'جاري الحذف...' : 'تأكيد الحذف'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
