import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft, BookOpen } from 'lucide-react';
import type { BlogPost } from '@/types';
import { getOptimizedImageUrl } from '@/lib/cloudinary';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('ar-SA', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : '';

  const optimizedImage = post.coverImage
    ? getOptimizedImageUrl(post.coverImage, { width: 600 })
    : '/images/og-image.png';

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover border border-slate-100 hover:border-brand/30 transition-all duration-300 flex flex-col h-full">
      {/* Cover Image Container */}
      <Link
        href={`/blogs/${post.slug}`}
        className="relative block h-52 sm:h-56 w-full overflow-hidden bg-slate-100"
      >
        <Image
          src={optimizedImage}
          alt={post.coverImageAlt || post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />

        {/* Category Pill */}
        <span className="absolute top-3 right-3 z-10 px-3 py-1 text-xs font-bold rounded-full bg-white/90 backdrop-blur-md text-navy shadow-sm">
          {post.category}
        </span>
      </Link>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          {/* Metadata Row */}
          <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
            {formattedDate && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-brand" />
                {formattedDate}
              </span>
            )}
            {post.readingTime && (
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-brand" />
                {post.readingTime} دقيقة قراءة
              </span>
            )}
          </div>

          {/* Title */}
          <Link href={`/blogs/${post.slug}`}>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-brand transition-colors line-clamp-2 leading-snug">
              {post.title}
            </h3>
          </Link>

          {/* Excerpt */}
          <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Bottom CTA & Author */}
        <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-navy" />
            د. عبدالله الصواط
          </span>

          <Link
            href={`/blogs/${post.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-brand group-hover:text-accent-goldHover transition-colors"
          >
            <span>اقرأ المقال</span>
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
