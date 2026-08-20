'use client';

import React from 'react';
import { BookOpen, Calendar } from 'lucide-react';
import { consultationInfo } from '@/data/services';
import Button from '@/components/Button';

export default function GeneralConsultationsSection() {
  return (
    <section className="text-white bg-navy rounded-3xl p-6 md:p-8 shadow-xl border border-brand/20">
      <div className="space-y-4">
        {/* <div className="inline-flex items-center gap-2 bg-navy border border-brand/30 px-3.5 py-1 rounded-full text-xs font-semibold text-accent-gold">
          <BookOpen className="w-4 h-4" />
          <span>{consultationInfo.subtitle}</span>
        </div> */}

        <h2 className="text-xl md:text-3xl text-brand! font-bold border-b-2 border-brand inline-block pb-2">
          {consultationInfo.title}
        </h2>
        <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
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
