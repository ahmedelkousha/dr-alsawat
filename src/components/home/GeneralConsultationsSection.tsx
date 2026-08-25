'use client';

import React from 'react';
import { BookOpen, Calendar } from 'lucide-react';
import { consultationInfo } from '@/data/services';
import Button from '@/components/Button';

export default function GeneralConsultationsSection() {
  return (
    <section className="text-white bg-navy rounded-3xl p-6 sm:pt-20 sm:pb-20 md:p-8 md:pt-30 md:pb-30 shadow-xl border border-brand/20 relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster='/poster.png'
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20 rounded-3xl pointer-events-none"
        src="/videos/colon-vid.mp4"
      />
      <div className="space-y-4 relative z-10">
        {/* <div className="inline-flex items-center gap-2 bg-navy border border-brand/30 px-3.5 py-1 rounded-full text-xs font-semibold text-accent-gold">
          <BookOpen className="w-4 h-4" />
          <span>{consultationInfo.subtitle}</span>
        </div> */}

        <h2 className="text-lg sm:text-xl md:text-3xl text-brand! font-bold border-b-2 border-brand inline-block pb-2">
          {consultationInfo.title}
        </h2>
        <p className="text-slate-300 text-[0.7rem] md:text-sm leading-relaxed">
          {consultationInfo.description}
        </p>

        <div className="pt-4">
          <Button
            href="/appointments"
            variant="gold"
            size="sm"
            icon={<Calendar className="w-4 h-4 text-slate-900" />}
          >
            حجز موعد استشارة جديدة
          </Button>
        </div>
      </div>
    </section>
  );
}
