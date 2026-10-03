'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  // Extract all procedures or fallback to single procedure
  const procedures =
    testimonial.procedures && testimonial.procedures.length > 0
      ? testimonial.procedures
      : testimonial.procedure
        ? [testimonial.procedure]
        : [];

  const displayRating =
    testimonial.rating % 1 === 0
      ? testimonial.rating.toString()
      : testimonial.rating.toFixed(2);

  return (
    <div
      data-testid="review-card"
      className="relative bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between gap-4 h-full"
    >
      {/* Header Row: Rating + Verified Patient / Date */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3.5">
        {/* Rating Stars & Score */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.round(testimonial.rating)
                    ? 'fill-amber-400 text-amber-400'
                    : 'text-slate-200 fill-slate-200'
                }`}
              />
            ))}
          </div>
          <span className="font-bold text-sm text-slate-800">
            {displayRating}
          </span>
        </div>

        {/* Verification status & Date */}
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1 font-semibold px-1 py-0.5 text-slate-400">
            تم التحقق منه
          </span>
          {testimonial.date && (
            <>
              <span className="w-1 h-1 rounded-full bg-slate-400 inline-block" />
              <span className="text-slate-400 font-medium">
                {testimonial.date}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Review Comment Body */}
      <div className="py-1">
        <p className="text-slate-700 text-xs sm:text-[15px] leading-relaxed whitespace-pre-line">
          {testimonial.comment}
        </p>
      </div>

      {/* Procedures Tags (Patient seen for:) */}
      {procedures.length > 0 && (
        <div className="relative pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-400 font-medium">
            زيارة المريض من أجل:
          </span>
          <div className="flex flex-wrap items-center gap-1.5 z-2">
            {procedures.map((proc, index) => (
              <span
                key={index}
                className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80 hover:bg-slate-200 transition-colors"
              >
                {proc}
              </span>
            ))}
          </div>
          <a
            href="https://www.doctify.com/en-sa/specialist/abdullah-alsalwat"
            target="_blank"
            title="صفحة الدكتور عبدالله الصواط على Doctify"
            rel="noopener noreferrer"
            className="absolute bottom-1 left-0 w-16 sm:w-20 opacity-60 h-fit z-1"
          >
            <img src="/images/doctify.svg" alt="" />
          </a>
        </div>
      )}
    </div>
  );
}
