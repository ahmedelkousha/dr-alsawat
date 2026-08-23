import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  Phone,
  Calendar,
} from 'lucide-react';
import { colonSurgeryData } from '@/data/colonSurgery';
import { doctorData } from '@/data/doctorData';
import ContactForm from '@/components/ContactForm';
import MapEmbed from '@/components/MapEmbed';
import PageHero from '@/components/PageHero';
import Button from '@/components/Button';
import { specialtyOverview } from '@/data/services';

export const metadata: Metadata = {
  title: 'جراحات القولون والمستقيم | د. عبدالله الصواط',
  description:
    'دليل طبي متكامل حول جراحات القولون والمستقيم، أنواع الاستئصال، فغر القولون، وفترات التعافي برعاية استشارية متخصصة.',
};

export default function ColonRectalSurgeryPage() {
  return (
    <div className="space-y-12 md:space-y-20 pb-16">
      {/* Page Hero Banner */}
      <PageHero
        title={colonSurgeryData.hero.title}
        subtitle={colonSurgeryData.hero.subtitle}
        imgURL={colonSurgeryData.hero.img}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20">
        {/* Section 1: Indications (ما الحالات التي يجب فيها إجراء جراحة القولون والمستقيم؟) */}
        <section className="bg-white rounded-3xl p-6 md:p-10 shadow-card border border-slate-100 space-y-6">
          <div className=" space-y-2">
            <h2 className="text-lg sm:text-xl md:text-3xl border-r-4 border-brand pr-3 font-bold text-slate-900">
              {colonSurgeryData.indicationsSection.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              {colonSurgeryData.indicationsSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4 pt-2">
            {colonSurgeryData.indicationsSection.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl py-3 px-2 border border-slate-200/80 hover:border-brand-300 transition-colors space-y-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-brand flex-shrink-0" />
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pr-7">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Surgery Types (ما هي أنواع جراحات القولون والمستقيم؟) */}
        <section className="bg-navy text-white rounded-3xl p-6 md:p-10 shadow-xl space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-white! border-r-4 border-accent-gold pr-3">
              {colonSurgeryData.typesSection.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              {colonSurgeryData.typesSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
            {colonSurgeryData.typesSection.types.map((typeStr, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl py-3 px-2 flex items-center gap-3 text-sm font-medium text-slate-100"
              >
                <span className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-brand text-white text-xs flex items-center justify-center flex-shrink-0 font-extrabold">
                  {index + 1}
                </span>
                <span className="text-xs sm:text-sm">{typeStr}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: What is Colectomy? (ما هو استئصال القولون؟) */}
        <section className="bg-white rounded-3xl p-6 md:p-10 shadow-card border border-slate-100 space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-slate-900 border-r-4 border-brand pr-3">
              {colonSurgeryData.colectomySection.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              {colonSurgeryData.colectomySection.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {colonSurgeryData.colectomySection.subsections.map((sub, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-2xl py-3 px-2 border border-slate-200/80 hover:border-brand-300 transition-colors space-y-2"
              >
                <h3 className="inline-flex gap-2 font-bold text-slate-900 text-sm sm:text-base">
                  <span className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-brand text-white flex items-center justify-center flex-shrink-0 font-extrabold">
                    {i + 1}
                  </span>{' '}
                  {sub.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pr-7">
                  {sub.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: What is Colostomy? (ما هو فغر القولون؟) */}
        <section className="bg-white rounded-3xl p-6 md:p-10 shadow-card border border-slate-100 space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-slate-900 pr-3 border-r-4 border-brand">
              {colonSurgeryData.colostomySection.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {colonSurgeryData.colostomySection.explanation}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {colonSurgeryData.colostomySection.types.map((colType, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-2xl py-3 px-2 border border-slate-200/80 hover:border-brand-300 transition-colors space-y-2"
              >
                <h3 className="inline-flex gap-2 font-bold text-slate-900 text-sm sm:text-base">
                  <span className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-brand text-white text-xs flex items-center justify-center flex-shrink-0 font-extrabold">
                    {i + 1}
                  </span>{' '}
                  {colType.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pr-7">
                  {colType.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Recovery Timeframe (كم تستغرق عملية التعافي من الوقت؟) */}
        <section className="bg-emerald-50/80 rounded-3xl p-6 md:p-8 border border-emerald-200 flex flex-row items-start gap-3">
          <div className="rounded-2xl flex items-center justify-center flex-shrink-0">
            <Clock className="w-8 h-8 text-emerald-700" />
          </div>
          <div className="space-y-2 text-right">
            <h2 className="text-[0.9rem] sm:text-xl font-bold text-emerald-950">
              {colonSurgeryData.recoverySection.title}
            </h2>
            <p className="text-[0.6rem] sm:text-sm font-bold text-emerald-800">
              {colonSurgeryData.recoverySection.durationText}
            </p>
            <p className="text-[0.55rem] sm:text-xs text-emerald-700 leading-relaxed">
              {colonSurgeryData.recoverySection.postOpGuidance}
            </p>
          </div>
        </section>

        {/* Section 6: Post-Discharge & Warning Signs Alert Callout Box */}
        <section className="bg-amber-50 rounded-3xl p-6 md:p-10 border-2 border-amber-300 shadow-lg space-y-6">
          <div className="flex items-center gap-3 text-amber-900 border-b border-amber-200 pb-4">
            <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 animate-bounce" />
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl md:text-3xl font-bold">
                {colonSurgeryData.warningSignsSection.title}
              </h2>
              <p className="text-xs sm:text-sm text-amber-800">
                {colonSurgeryData.warningSignsSection.intro}
              </p>
            </div>
          </div>

          {/* Checklist */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {colonSurgeryData.warningSignsSection.checklist.map((warn, i) => (
              <div
                key={i}
                className="bg-white/90 rounded-xl py-3 px-2 border border-amber-200 flex items-start gap-2.5 text-xs text-slate-800 font-semibold shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-rose-600 mt-1.5 flex-shrink-0" />
                <span>{warn}</span>
              </div>
            ))}
          </div>

          {/* Emergency CTA */}
          <div className="bg-white rounded-2xl py-3 px-2 border border-rose-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
            <div className="space-y-1 text-center sm:text-right">
              {/* <span className="text-xs font-bold text-rose-600 uppercase">
                حالة عاجلة؟
              </span> */}
              <p className="text-[0.6rem] sm:text-sm font-bold text-slate-900">
                {colonSurgeryData.warningSignsSection.emergencyCallout}
              </p>
            </div>

            <Button
              size="sm"
              icon={<Phone className="w-4 h-4" />}
              href={`tel:${doctorData.phoneRaw}`}
              className="bg-rose-600 hover:bg-rose-700 text-white text-nowrap"
            >
              اتصل بنا بسرعة
            </Button>
          </div>
        </section>

        {/* Contact Form & Map Embed */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <ContactForm
              title="ارسل استفسارك حول جراحة القولون والمستقيم"
              subtitle="سيتم التواصل معك من قبل التجمع وتقديم المشورة الطبية الإكلينيكية المناسبة."
            />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white text-white rounded-2xl p-6 shadow-sm space-y-3">
              <h3 className="font-bold text-lg border-r-4 border-accent-gold pr-3">
                حجز موعد استشارة القولون
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                تستفبل العيادة المراجعين أيام {doctorData.workingHours} بمجمع
                تداوي الجراحي الطبي بالطائف.
              </p>
              <Button
                href="/appointments"
                size="sm"
                fullWidth
                className="text-slate-900"
                icon={<Calendar className="w-4 h-4" />}
              >
                الانتقال لصفحة الحجز
              </Button>
            </div>

            <MapEmbed heightClass="h-[300px]" />
          </div>
        </section>
      </div>
    </div>
  );
}
