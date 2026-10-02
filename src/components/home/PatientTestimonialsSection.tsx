'use client';

import React, { useState, useEffect } from 'react';
import { Loader2, ChevronDown, ChevronUp } from 'lucide-react';
import { patientTestimonials } from '@/data/testimonials';
import TestimonialCard from '@/components/TestimonialCard';
import type { Testimonial } from '@/types';

const INITIAL_VISIBLE_COUNT = 3;

export default function PatientTestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(
    INITIAL_VISIBLE_COUNT
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/reviews')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch reviews');
        return res.json();
      })
      .then((data) => {
        if (
          data.success &&
          Array.isArray(data.testimonials) &&
          data.testimonials.length > 0
        ) {
          setTestimonials(data.testimonials);
        } else {
          setTestimonials(patientTestimonials);
        }
      })
      .catch((err) => {
        console.warn('API error, falling back to static testimonials:', err);
        setTestimonials(patientTestimonials);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prev) => {
      if (prev + 3 > testimonials.length) {
        return testimonials.length;
      }
      return prev + 3;
    });
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  return (
    <section id="reviews" className="space-y-6 scroll-mt-40">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div className="flex items-center gap-3">
          <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-slate-900">
            شهادات المرضى
          </h2>
        </div>
      </div>

      <div className="space-y-6">
        {isLoading ? (
          <div className="flex items-center justify-center py-20 min-h-[220px]">
            <Loader2 className="w-8 h-8 animate-spin text-brand" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5 sm:gap-6">
              {testimonials.slice(0, visibleCount).map((test) => (
                <div key={test.id} className="h-fit">
                  <TestimonialCard testimonial={test} />
                </div>
              ))}
            </div>

            {/* Show More / Show Less Controls */}
            <div className="flex items-center justify-center gap-3 pt-2">
              {visibleCount < testimonials.length ? (
                <button
                  type="button"
                  onClick={handleShowMore}
                  className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand text-navy text-sm font-semibold hover:bg-brand hover:text-slate-900 transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
                >
                  <span className="text-xs absolute top-[120%] left-1/2 -translate-x-1/2 w-full">
                    {' '}
                    {visibleCount} من أصل {testimonials.length}
                  </span>
                  <span>عرض المزيد</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              ) : testimonials.length > INITIAL_VISIBLE_COUNT ? (
                <button
                  type="button"
                  onClick={async () => {
                    await handleShowLess();
                    await document.getElementById('reviews')?.scrollIntoView({
                      behavior: 'smooth',
                    });
                  }}
                  className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full border border-slate-200 bg-white text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
                >
                  <span className="text-xs absolute top-[120%] left-1/2 -translate-x-1/2 w-full">
                    {' '}
                    {visibleCount} من أصل {testimonials.length}
                  </span>

                  <span>عرض أقل</span>
                  <ChevronUp className="w-4 h-4" />
                </button>
              ) : null}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
