'use client';

import React, { useState, useEffect } from 'react';
import { Loader2, ChevronDown, ChevronUp, Star, ExternalLink } from 'lucide-react';
import { patientTestimonials } from '@/data/testimonials';
import TestimonialCard from '@/components/TestimonialCard';
import type { Testimonial } from '@/types';

const INITIAL_VISIBLE_COUNT = 2;

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
      if (prev + 2 > testimonials.length) {
        return testimonials.length;
      }
      return prev + 2;
    });
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  return (
    <section id="reviews" className="scroll-mt-40">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Sticky Left / Right Column: "شهادات المرضى" */}
        <div className="md:col-span-5 md:sticky md:top-50 self-start space-y-6">
          {/* Header Title */}
          <div className="border-b border-slate-200 pb-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              شهادات المرضى
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
              تجارب حقيقية وتقييمات من مراجعي الدكتور عبد الله الصواط بعد العمليات الجراحية والاستشارات عبر منصة Doctify الطبية.
            </p>
          </div>

          {/* Doctify Rating Card */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-black text-navy">4.95</span>
                  <span className="text-slate-400 text-sm font-semibold">/ 5</span>
                </div>
                <div className="flex items-center gap-1 text-amber-400 mt-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <a
                href="https://www.doctify.com/en-sa/specialist/abdullah-alsalwat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-end"
                title="صفحة الدكتور على Doctify"
              >
                <span className="text-[11px] sm:text-[12px] text-slate-400">تقييم موثق عبر</span>
                <img src="/images/doctify.svg" alt="doctify" className='w-20 sm:w-30' />
                
              </a>
            </div>

            <div className="text-xs text-slate-500 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span>نسبة رضا المرضى</span>
              <span className="font-bold text-emerald-600 text-sm">99%</span>
            </div>

            {testimonials.length > 0 && (
              <div className="text-xs text-slate-500 flex items-center justify-between">
                <span>إجمالي التقييمات المعروضة</span>
                <span className="font-bold text-slate-800">{testimonials.length} تقييم</span>
              </div>
            )}

            <a
              href="https://www.doctify.com/en-sa/specialist/abdullah-alsalwat/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full gap-1 py-2.5 px-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-medium text-slate-700 transition-colors mt-2"
            >
              <span>عرض جميع التقييمات على Doctify</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Scrollable Column: Reviews List */}
        <div className="md:col-span-7 space-y-5">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20 min-h-[260px] bg-white rounded-2xl border border-slate-200/80">
              <Loader2 className="w-8 h-8 animate-spin text-brand mb-2" />
              <span className="text-xs text-slate-500 font-medium">جاري تحميل شهادات المرضى...</span>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-4 sm:gap-5">
                {testimonials.slice(0, visibleCount).map((test) => (
                  <div key={test.id}>
                    <TestimonialCard testimonial={test} />
                  </div>
                ))}
              </div>

              {/* Show More / Show Less Controls */}
              <div className="flex flex-col items-center justify-center gap-2 pt-4">
                {visibleCount < testimonials.length ? (
                  <button
                    type="button"
                    onClick={handleShowMore}
                    className="inline-flex items-center gap-2 px-3 py-2.5 sm:px-4 sm:py-3 rounded-full bg-brand text-navy text-xs sm:text-sm font-bold hover:bg-brand/90 transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
                  >
                    <span>عرض المزيد من التقييمات</span>
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
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-slate-200 bg-white text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
                  >
                    <span>عرض أقل</span>
                    <ChevronUp className="w-4 h-4" />
                  </button>
                ) : null}

                <span className="text-xs text-slate-400">
                  عرض {Math.min(visibleCount, testimonials.length)} من أصل {testimonials.length} تقييم
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
