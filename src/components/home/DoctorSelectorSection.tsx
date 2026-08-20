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

export default function DoctorSelectorSection() {
  return (
    <section className="bg-white rounded-3xl p-6 pb-0 md:p-10 md:pb-0 lg:p-12 lg:pb-0 shadow-card border border-slate-100 overflow-hidden relative">
      {/* Background Subtle Accent Glow */}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Right in RTL: Doctor Portrait Photo Card */}
        <div className="lg:col-span-5 flex justify-center order-2 lg:order-2">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none">
            <div className="relative overflow-hidden  bg-white">
              <Image
                src="/images/alsawat-pic.png"
                alt={doctorData.name}
                width={683}
                height={941}
                className="aspect-4/5 object-cover object-top"
                priority
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/5 to-transparent pointer-events-none" /> */}

              {/* Doctor Name & Title overlay inside photo card */}
              {/* <div className="absolute bottom-4 right-4 left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-lg text-right space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-base md:text-lg text-slate-900">
                    {doctorData.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 bg-brand/10 text-brand text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    <Award className="w-3.5 h-3.5" />
                    استشاري
                  </span>
                </div>
                <p className="text-xs text-brand font-bold">
                  {doctorData.universityTitle}
                </p>
              </div> */}
            </div>
          </div>
        </div>

        {/* Left in RTL: Doctor Introduction Text Box */}
        <div className="lg:col-span-7 space-y-6 text-right order-1 lg:order-1">
          <div className="space-y-3">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
              تعرّف على <span className="text-brand">{doctorData.name}</span>
            </h2>

            <p className="text-sm sm:text-base font-bold text-slate-700 leading-relaxed">
              {doctorData.subtitle}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {doctorData.doctorBioSummary}
          </p>

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

            <Link
              href="/about"
              className="inline-flex items-center text-xs sm:text-sm font-bold text-slate-700 hover:text-brand bg-slate-100 hover:bg-brand/10 border border-slate-200 transition-all px-5 py-2.5 rounded-xl gap-2 sm:text-base"
            >
              <span>عرض السيرة الذاتية الكاملة</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
