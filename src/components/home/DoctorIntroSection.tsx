'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle2,
  Award,
  ArrowLeft,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { doctorData } from '@/data/doctorData';
import Button from '@/components/Button';
import TypingParagraph from '@/components/TypingParagraph';

export default function DoctorIntroSection() {
  return (
    <section className="bg-white rounded-3xl p-6 pb-0 md:p-10 md:pb-0 lg:p-12 lg:pb-0 shadow-card border border-slate-100 overflow-hidden relative">
      {/* Background Subtle Accent Glow */}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Right in RTL: Doctor Portrait Photo Card */}
        <div className="lg:col-span-5 flex justify-center order-2 lg:order-2">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none">
            <div className="relative overflow-hidden  bg-white">
              <Image
                src="/images/alsawat-pic.webp"
                alt={doctorData.name}
                width={683}
                height={941}
                className="aspect-4/5 object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>

        {/* Left in RTL: Doctor Introduction Text Box */}
        <div className="lg:col-span-7 space-y-6 text-right order-1 lg:order-1">
          <div className="space-y-3">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
              تعرّف على <span className="text-brand">{doctorData.name}</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base font-bold text-slate-700 leading-relaxed">
              {doctorData.subtitle}
            </p>
          </div>

          <TypingParagraph text={doctorData.doctorBioSummary} viewOffsetPx={90} />

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Button
              className="border border-brand"
              href="/appointments"
              variant="primary"
              size="sm"
              icon={<Calendar className="w-4 h-4" />}
            >
              حجز موعد استشارة
            </Button>

            <Button
              href="/about"
              size='sm'
              icon={<ArrowLeft className="w-4 h-4" />}
              className="text-slate-700 hover:bg-slate-200 flex-row-reverse bg-slate-100"
            >
             عرض السيرة الذاتية الكاملة
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
