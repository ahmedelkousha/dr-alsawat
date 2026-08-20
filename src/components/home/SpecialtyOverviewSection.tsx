'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { specialtyOverview } from '@/data/services';

export default function SpecialtyOverviewSection() {
  return (
    <section id="services-overview" className="space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <h2 className="text-xl md:text-3xl font-bold text-slate-900 border-b-2 border-brand inline-block pb-2">
          تخصصاتي الجراحية الدقيقة
        </h2>
        <p className="text-xs sm:text-sm text-slate-600">
          تقييم إكلينيكي وتدخلات جراحية متقدمة بالمنظار والجراحة طفيفة التوغل.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {specialtyOverview.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover border border-slate-200 flex flex-col justify-between transition-all group hover:-translate-y-1 duration-300"
          >
            <div>
              {item.image && (
                <div className="relative w-full h-70 md:h-58 overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-3 right-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-brand font-bold text-base flex items-center justify-center shadow-md">
                    {item.id === 'colon-surgeries'
                      ? '01'
                      : item.id === 'rectal-surgeries'
                        ? '02'
                        : '03'}
                  </div>
                </div>
              )}

              <div className="p-6 md:p-8 space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 group-hover:text-brand transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Sublinks for Anal Region if available */}
                {item.subLinks && (
                  <div className="pt-2 space-y-2">
                    <p className="text-xs font-bold text-slate-800">
                      الأقسام التابعة:
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {item.subLinks.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="bg-slate-50 hover:bg-brand/10 text-slate-700 hover:text-brand p-2 rounded-lg border border-slate-100 font-medium transition-colors text-center"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="px-6 md:px-8 pb-6 pt-0">
              <Link
                href={item.link}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:text-brand/80 transition-colors"
              >
                <span>{item.linkText}</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
