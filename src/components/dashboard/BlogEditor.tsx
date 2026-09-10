'use client';

import React, { useState, useEffect } from 'react';
import {
  Save,
  ArrowRight,
  ChevronDown,
  Globe,
  Sparkles,
  Layers,
  AlertCircle,
  CheckCircle2,
  Loader2,
  Upload
} from 'lucide-react';
import type { BlogPost } from '@/types';
import { BLOG_CATEGORIES } from '@/types';
import { slugify } from '@/lib/blogService';
import { useCreateBlog, useUpdateBlog } from '@/hooks/useBlogs';
import ImageUploader from './ImageUploader';
import TipTapEditor from './TipTapEditor';
import { doctorData } from '@/data/doctorData';

interface BlogEditorProps {
  initialData?: BlogPost | null;
  onClose: () => void;
}

const SURGICAL_SERVICES = [
  { slug: '', label: 'بدون خدمة مرتبطة (استشارة عامة)' },
  { slug: 'hemorrhoids', label: 'جراحة البواسير بالليزر' },
  { slug: 'anal-fissure', label: 'علاج الشرخ الشرجي' },
  { slug: 'anal-fistula', label: 'علاج النواسير الشرجية' },
  { slug: 'pilonidal-sinus', label: 'الناسور العصعصي' },
  { slug: 'colon-surgery', label: 'جراحات القولون بالمنظار' },
  { slug: 'rectal-surgery', label: 'جراحات المستقيم المتخصصة' },
];

export default function BlogEditor({ initialData, onClose }: BlogEditorProps) {
  const createBlogMutation = useCreateBlog();
  const updateBlogMutation = useUpdateBlog();

  const isEditing = Boolean(initialData?.id);

  const [title, setTitle] = useState(initialData?.title || '');
  const [slug, setSlug] = useState(initialData?.slug || '');
  const [isSlugManuallyEdited, setIsSlugManuallyEdited] = useState(isEditing);
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [coverImage, setCoverImage] = useState(initialData?.coverImage || '');
  const [coverImageAlt, setCoverImageAlt] = useState(
    initialData?.coverImageAlt || ''
  );
  const [category, setCategory] = useState<string>(
    initialData?.category || BLOG_CATEGORIES[0]
  );
  const [relatedServiceSlug, setRelatedServiceSlug] = useState<string>(
    initialData?.relatedServiceSlug || ''
  );
  const [tagsInput, setTagsInput] = useState(
    initialData?.tags?.join(', ') || ''
  );
  const [metaTitle, setMetaTitle] = useState(initialData?.metaTitle || '');
  const [metaDescription, setMetaDescription] = useState(
    initialData?.metaDescription || ''
  );
  const [isPublished, setIsPublished] = useState(
    initialData?.isPublished ?? true
  );

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Auto-generate slug from title if not manually changed
  useEffect(() => {
    if (!isSlugManuallyEdited && title) {
      setSlug(slugify(title));
    }
  }, [title, isSlugManuallyEdited]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!title.trim()) {
      setError('يرجى إدخال عنوان المقال');
      return;
    }
    if (!slug.trim()) {
      setError('يرجى إدخال رابط URL للمقال');
      return;
    }
    if (!excerpt.trim()) {
      setError('يرجى إدخال نبذة مختصرة عن المقال');
      return;
    }
    if (!content.trim() || content === '<p></p>') {
      setError('يرجى كتابة محتوى المقال');
      return;
    }

    const tags = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    try {
      if (isEditing && initialData?.id) {
        await updateBlogMutation.mutateAsync({
          id: initialData.id,
          data: {
            title,
            slug,
            excerpt,
            content,
            coverImage,
            coverImageAlt: coverImageAlt || title,
            category,
            relatedServiceSlug,
            tags,
            metaTitle: metaTitle || `${title} | ${doctorData.name}`,
            metaDescription: metaDescription || excerpt,
            isPublished,
          },
        });
        setSuccess('تم تحديث المقال بنجاح!');
      } else {
        await createBlogMutation.mutateAsync({
          title,
          slug,
          excerpt,
          content,
          coverImage,
          coverImageAlt: coverImageAlt || title,
          category,
          relatedServiceSlug,
          tags,
          author: doctorData.name,
          publishedAt: isPublished ? new Date().toISOString() : null,
          isPublished,
          metaTitle: metaTitle || `${title} | ${doctorData.name}`,
          metaDescription: metaDescription || excerpt,
        });
        setSuccess('تم نشر المقال بنجاح!');
      }

      setTimeout(() => {
        onClose();
      }, 1200);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'حدث خطأ أثناء حفظ المقال.');
    }
  };

  const isSubmitting =
    createBlogMutation.isPending || updateBlogMutation.isPending;

  // SEO Preview computations
  const effectiveMetaTitle =
    metaTitle ||
    (title ? `${title} | ${doctorData.name}` : 'عنوان المقال في جوجل');
  const effectiveMetaDescription =
    metaDescription ||
    excerpt ||
    'هنا سيظهر وصف المقال المختصر في محركات البحث جوجل ومنصات التواصل الاجتماعي...';

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-7xl mx-auto pb-16">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-brand transition-colors mb-1"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة إلى لوحة المقالات</span>
          </button>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            {isEditing ? 'تعديل المقال الطبي' : 'إنشاء مقال طبي جديد'}
          </h2>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-100 transition-colors"
          >
            إلغاء
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-brand hover:bg-accent-goldHover text-slate-950 text-xs font-bold shadow-sm transition-all disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>جاري الحفظ...</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>{isEditing ? 'تحديث المقال' : 'حفظ ونشر المقال'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Status Alerts */}
      {error && (
        <div className="flex items-center gap-2 p-4 rounded-xl bg-red-50 text-red-700 text-xs sm:text-sm font-semibold border border-red-200">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{error}</span>
        </div>
      )}
      {success && (
        <div className="flex items-center gap-2 p-4 rounded-xl bg-emerald-50 text-emerald-700 text-xs sm:text-sm font-semibold border border-emerald-200">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>{success}</span>
        </div>
      )}

      {/* Main Grid: Content Form (Left) & Sidebar (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area (2 Cols) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-800 mb-1.5">
                عنوان المقال <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="مثال: أحدث تقنيات علاج البواسير الشرجية بالليزر بدون ألم"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-base font-bold focus:ring-2 focus:ring-brand focus:bg-white focus:outline-none"
              />
            </div>

            {/* Slug URL */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">
                رابط المقال (URL Slug)
              </label>
              <div
                className="flex items-center bg-slate-50 border border-slate-200 rounded-xl overflow-hidden px-3 text-xs text-slate-500"
                dir="ltr"
              >
                <span className="text-slate-400 select-none">
                  dralsawat.com/blogs/
                </span>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => {
                    setSlug(e.target.value);
                    setIsSlugManuallyEdited(true);
                  }}
                  className="w-full py-2.5 px-1 bg-transparent font-mono text-slate-800 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Excerpt */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-2">
            <label className="block text-sm font-bold text-slate-800">
              نبذة مختصرة <span className="text-red-500">*</span>
            </label>
            <p className="text-xs text-slate-500">
              تظهر هذه النبذة في بطاقة المقال في قائمة المدونة وكوصف افتراضي في
              محركات البحث.
            </p>
            <textarea
              rows={3}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="اكتب فقرة ملخصة وجذابة تشرح ما سيتعلمه المريض من المقال..."
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand focus:bg-white focus:outline-none leading-relaxed"
            />
          </div>

          {/* Cover Image Uploader */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <ImageUploader
              value={coverImage}
              onChange={setCoverImage}
              altValue={coverImageAlt}
              onAltChange={setCoverImageAlt}
            />
          </div>

          {/* TipTap Rich Editor */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-2">
            <label className="block text-sm font-bold text-slate-800">
              محتوى المقال الطبي <span className="text-red-500">*</span>
            </label>
            <p className="text-xs text-slate-500">
              استخدم شريط التنسيق لإضافة عناوين فرعية (H2, H3)، قوائم، ونصوص
              بارزة.
            </p>
            <TipTapEditor content={content} onChange={setContent} />
          </div>
        </div>

        {/* Sidebar Settings & SEO (1 Col) */}
        <div className="space-y-6">
          {/* Publication Status Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Upload className="w-4 h-4 text-brand" />
              <span>حالة النشر</span>
            </h3>

            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div>
                <div className="text-xs font-bold text-slate-800">
                  {isPublished ? 'منشور للعامة' : 'مسودة خاصة'}
                </div>
                <div className="text-[11px] text-slate-500">
                  {isPublished
                    ? 'سيظهر المقال فوراً على الموقع ومحركات البحث'
                    : 'لن يظهر المقال للمرضى إلا بعد النشر'}
                </div>
              </div>

              <input
                type="checkbox"
                checked={isPublished}
                onChange={(e) => setIsPublished(e.target.checked)}
                className="w-5 h-5 accent-brand rounded cursor-pointer"
              />
            </div>
          </div>

          {/* Category & Service Link Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Layers className="w-4 h-4 text-navy" />
              <span>التصنيف والخدمة المرتبطة</span>
            </h3>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">
                التصنيف الطبي:
              </label>
              <div className="relative">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full appearance-none pr-3.5 pl-9 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-brand focus:outline-none cursor-pointer"
                >
                  {BLOG_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">
                ربط المقال بإجراء جراحي (عرض بطاقة الحجز):
              </label>
              <div className="relative">
                <select
                  value={relatedServiceSlug}
                  onChange={(e) => setRelatedServiceSlug(e.target.value)}
                  className="w-full appearance-none pr-3.5 pl-9 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-brand focus:outline-none cursor-pointer"
                >
                  {SURGICAL_SERVICES.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">
                الكلمات الدلالية (Tags - مفصولة بفواصل):
              </label>
              <input
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder="بواسير, ليزر, جراحة الشرج, الطائف"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-brand focus:outline-none"
              />
            </div>
          </div>

          {/* SEO Metadata & Live SERP Preview Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Globe className="w-4 h-4 text-emerald-600" />
              <span>تحسين محركات البحث (SEO)</span>
            </h3>

            {/* Meta Title */}
            <div>
              <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                <span className="font-semibold">عنوان SEO (Meta Title):</span>
                <span
                  className={`${
                    metaTitle.length > 60
                      ? 'text-red-500 font-bold'
                      : 'text-slate-400'
                  }`}
                >
                  {metaTitle.length}/60
                </span>
              </div>
              <input
                type="text"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                placeholder={title || 'العنوان المخصص لمحركات البحث'}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-brand focus:outline-none"
              />
            </div>

            {/* Meta Description */}
            <div>
              <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                <span className="font-semibold">
                  وصف SEO (Meta Description):
                </span>
                <span
                  className={`${
                    metaDescription.length > 160
                      ? 'text-red-500 font-bold'
                      : 'text-slate-400'
                  }`}
                >
                  {metaDescription.length}/160
                </span>
              </div>
              <textarea
                rows={3}
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                placeholder={excerpt || 'الوصف المخصص لمحركات البحث'}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-brand focus:outline-none leading-relaxed"
              />
            </div>

            {/* Live Google SERP Card Preview */}
            <div className="pt-3 border-t border-slate-100 space-y-1.5">
              <span className="text-[11px] font-bold text-slate-400 block">
                معاينة نتيجة البحث في Google:
              </span>
              <div
                className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1 text-right"
                dir="rtl"
              >
                <div
                  className="text-[11px] text-slate-500 flex items-center gap-1 truncate"
                  dir="ltr"
                >
                  <span>dralsawat.com › blogs › {slug || 'article-slug'}</span>
                </div>
                <div className="text-sm font-semibold text-blue-700 hover:underline cursor-pointer truncate">
                  {effectiveMetaTitle}
                </div>
                <div className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {effectiveMetaDescription}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
