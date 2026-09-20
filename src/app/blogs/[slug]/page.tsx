import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ChevronLeft, ShieldCheck } from 'lucide-react';
import { getBlogBySlug } from '@/lib/blogService';
import { getOptimizedImageUrl } from '@/lib/cloudinary';
import { doctorData } from '@/data/doctorData';
import TableOfContents from '@/components/blog/TableOfContents';
import RelatedServiceCard from '@/components/blog/RelatedServiceCard';

export const revalidate = 60; // ISR fallback every 60 seconds

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const post = await getBlogBySlug(decodedSlug);

  if (!post) {
    return {
      title: 'المقال غير موجود | د. عبدالله الصواط',
      description: 'عفواً، لم نتمكن من العثور على المقال المطلوب.',
    };
  }

  const title = post.metaTitle || `${post.title} | ${doctorData.name}`;
  const description = post.metaDescription || post.excerpt;
  const canonicalUrl = `https://dralsawat.com/blogs/${encodeURIComponent(post.slug)}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'article',
      publishedTime: post.publishedAt || post.createdAt,
      modifiedTime: post.updatedAt,
      authors: [doctorData.name],
      images: [
        {
          url: post.coverImage || '/images/og-image.png',
          width: 1200,
          height: 630,
          alt: post.coverImageAlt || post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [post.coverImage || '/images/og-image.png'],
    },
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const post = await getBlogBySlug(decodedSlug);

  if (!post || (!post.isPublished && process.env.NODE_ENV === 'production')) {
    notFound();
  }

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('ar-SA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  const postUrl = `https://dralsawat.com/blogs/${encodeURIComponent(post.slug)}`;

  // Medical Schema.org structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: post.title,
    description: post.excerpt,
    url: postUrl,
    image: post.coverImage,
    datePublished: post.publishedAt || post.createdAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Physician',
      name: doctorData.name,
      jobTitle: doctorData.title,
      url: 'https://dralsawat.com',
    },
    reviewedBy: {
      '@type': 'Physician',
      name: doctorData.name,
      jobTitle: doctorData.title,
    },
    publisher: {
      '@type': 'MedicalOrganization',
      name: doctorData.clinicName,
      logo: {
        '@type': 'ImageObject',
        url: 'https://dralsawat.com/images/logo.webp',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
  };

  return (
    <article className="min-h-screen pt-28 sm:pt-36 pb-20 bg-slate-50">
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="مسار التنقل"
          className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium"
        >
          <Link href="/" className="hover:text-brand transition-colors">
            الرئيسية
          </Link>
          <ChevronLeft className="w-4 h-4 text-slate-400" />
          <Link href="/blogs" className="hover:text-brand transition-colors">
            المدونة
          </Link>
          <ChevronLeft className="w-4 h-4 text-slate-400" />
          <span className="text-slate-800 font-semibold truncate max-w-xs sm:max-w-md">
            {post.title}
          </span>
        </nav>

        <div className="flex flex-col lg:flex-row sm:gap-4 h-auto">
          {/* Article Header */}
          <header className="space-y-4 bg-white rounded-3xl p-6 sm:p-10 shadow-card border border-slate-100 h-auto">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 text-xs font-bold rounded-full bg-brand/10 text-brand border border-brand/20">
                {post.category}
              </span>
              {post.readingTime && (
                <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-brand" />
                  {post.readingTime} دقيقة قراءة
                </span>
              )}
              {formattedDate && (
                <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
                  <Calendar className="w-3.5 h-3.5 text-brand" />
                  {formattedDate}
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              {post.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {post.excerpt}
            </p>

            {/* Author Badge & Medical Review Notice */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden relative border-2 border-brand shrink-0">
                  <Image
                    src="/images/alsawat-pic.jpeg"
                    alt={doctorData.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{doctorData.name}</span>
                    <ShieldCheck className="w-4 h-4 text-brand" />
                  </div>
                  <div className="text-xs text-slate-500">
                    استشاري جراحة القولون والمستقيم
                  </div>
                </div>
              </div>

              {/* Social Share Buttons */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 ml-1">
                  مشاركة:
                </span>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`${post.title}\n${postUrl}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-accent-whatsapp/10 text-accent-whatsapp hover:bg-accent-whatsapp hover:text-white transition-colors text-xs font-bold flex items-center gap-1"
                  title="مشاركة عبر واتساب"
                >
                  واتساب
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(postUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-900 hover:text-white transition-colors text-xs font-bold"
                  title="مشاركة عبر X"
                >
                  منصة X
                </a>
              </div>
            </div>
          </header>

          {/* Cover Image */}
          {post.coverImage && (
            <div className="relative rounded-3xl overflow-hidden shadow-card border border-slate-100 bg-slate-100 aspect-1200/630">
              <Image
                src={getOptimizedImageUrl(post.coverImage, { width: 1200 })}
                alt={post.coverImageAlt || post.title}
                priority
                width={1200}
                height={630}
                className="object-cover h-full"
              />
            </div>
          )}
        </div>

        {/* Article Body Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-card border border-slate-100">
          {/* Table of Contents */}
          <TableOfContents htmlContent={post.content} />

          {/* Rendered HTML Content */}
          <div
            className="prose prose-slate max-w-none text-slate-700 text-base sm:text-lg leading-relaxed space-y-4
              [&_h2]:text-xl sm:[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:pt-6 [&_h2]:pb-2 [&_h2]:border-b [&_h2]:border-slate-100 [&_h2]:scroll-mt-28 sm:[&_h2]:scroll-mt-36
              [&_h3]:text-lg sm:[&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-slate-800 [&_h3]:pt-4 [&_h3]:scroll-mt-28 sm:[&_h3]:scroll-mt-36
              [&_p]:leading-loose [&_p]:text-slate-700
              [&_ul]:list-disc [&_ul]:pr-6 [&_ul]:space-y-2
              [&_ol]:list-decimal [&_ol]:pr-6 [&_ol]:space-y-2
              [&_li]:text-slate-700
              [&_blockquote]:border-r-4 [&_blockquote]:border-brand [&_blockquote]:bg-slate-50 [&_blockquote]:p-4 [&_blockquote]:rounded-l-xl [&_blockquote]:font-medium [&_blockquote]:italic
              [&_img]:rounded-2xl [&_img]:my-6 [&_img]:shadow-sm [&_img]:w-full
              [&_a]:text-brand [&_a]:underline [&_a]:font-semibold hover:[&_a]:text-accent-goldHover"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="pt-8 mt-8 border-t border-slate-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-400 ml-1">
                الكلمات الدلالية:
              </span>
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Contextual Surgical Consultation Card */}
        <RelatedServiceCard
          relatedServiceSlug={post.relatedServiceSlug}
          category={post.category}
        />
      </div>
    </article>
  );
}
