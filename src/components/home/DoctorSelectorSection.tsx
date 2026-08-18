'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { doctorData } from '@/data/doctorData';
import Button from '@/components/Button';

export default function DoctorSelectorSection() {
  return (
    <section className="bg-white rounded-3xl p-6 md:p-10 shadow-card border border-slate-100">
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
        <span className="text-xs font-bold text-brand uppercase tracking-widest bg-brand/10 px-3 py-1 rounded-full">
          الرعاية الجراحية الموثوقة
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          اختر طبيبك الجراح
        </h2>
        <p className="text-sm text-slate-600">
          عيادتنا متخصصة وتدار بإشراف مباشر من استشاري الجراحة الأكاديمي.
        </p>
      </div>

      <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200/80 flex flex-col md:flex-row items-center gap-6">
        <div className="relative w-28 h-28 rounded-2xl overflow-hidden border-2 border-brand flex-shrink-0 shadow-md">
          <Image
            src="/images/doctor-portrait.png"
            alt={doctorData.name}
            fill
            className="object-cover object-top"
          />
        </div>

        <div className="flex-1 space-y-2 text-center md:text-right">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <h3 className="text-xl font-bold text-slate-900">
              {doctorData.name}
            </h3>
            <span className="text-xs bg-brand/10 text-brand font-bold px-3 py-1 rounded-full w-max mx-auto md:mx-0">
              خبرة استشارية وأكاديمية
            </span>
          </div>
          <p className="text-sm text-brand font-semibold">
            {doctorData.subtitle}
          </p>
          <p className="text-xs text-slate-600 leading-relaxed">
            الزمالة الكورية لجراحات القولون والمستقيم بالمنظار والروبوت، والبورد
            السعودي والأردني بالجراحة العامة.
          </p>
        </div>

        <Button href="/about" variant="primary" size="md">
          عرض السيرة الذاتية
        </Button>
      </div>
    </section>
  );
}
