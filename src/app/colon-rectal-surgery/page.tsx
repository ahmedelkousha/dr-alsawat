import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  Phone,
  ArrowLeft,
  Calendar,
  Activity,
} from 'lucide-react';
import { colonSurgeryData } from '@/data/colonSurgery';
import { doctorData } from '@/data/doctorData';
import ContactForm from '@/components/ContactForm';
import MapEmbed from '@/components/MapEmbed';
import PageHero from '@/components/PageHero';

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
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20">
        {/* Section 1: Indications (ما الحالات التي يجب فيها إجراء جراحة القولون والمستقيم؟) */}
        <section className="bg-white rounded-3xl p-6 md:p-10 shadow-card border border-slate-100 space-y-6">
          <div className="border-r-4 border-brand pr-4 space-y-1">
            <h2 className="text-xl md:text-3xl font-bold text-slate-900">
              {colonSurgeryData.indicationsSection.title}
            </h2>
            <p className="text-sm text-slate-600">
              {colonSurgeryData.indicationsSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {colonSurgeryData.indicationsSection.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 hover:border-brand-300 transition-colors space-y-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" />
                  <h3 className="font-bold text-slate-900 text-base">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pr-7">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Surgery Types (ما هي أنواع جراحات القولون والمستقيم؟) */}
        <section className="bg-navy/95 text-white rounded-3xl p-6 md:p-10 shadow-xl space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl md:text-3xl font-bold text-white! border-r-4 border-accent-gold pr-3">
              {colonSurgeryData.typesSection.title}
            </h2>
            <p className="text-sm text-slate-300">
              {colonSurgeryData.typesSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
            {colonSurgeryData.typesSection.types.map((typeStr, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-4 flex items-center gap-3 text-sm font-bold text-slate-100"
              >
                <span className="w-7 h-7 rounded-full bg-brand text-white text-xs flex items-center justify-center flex-shrink-0 font-extrabold">
                  {index + 1}
                </span>
                <span>{typeStr}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: What is Colectomy? (ما هو استئصال القولون؟) */}
        <section className="bg-white rounded-3xl p-6 md:p-10 shadow-card border border-slate-100 space-y-6">
          <div className="space-y-2 border-r-4 border-brand pr-3">
            <h2 className="text-xl md:text-3xl font-bold text-slate-900">
              {colonSurgeryData.colectomySection.title}
            </h2>
            <p className="text-sm text-slate-600">
              {colonSurgeryData.colectomySection.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {colonSurgeryData.colectomySection.subsections.map((sub, i) => (
              <div
                key={i}
                className="bg-brand-50/50 rounded-2xl p-6 border border-brand-100 space-y-3"
              >
                <h3 className="font-bold text-brand-900 text-lg">
                  {sub.title}
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {sub.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: What is Colostomy? (ما هو فغر القولون؟) */}
        <section className="bg-white rounded-3xl p-6 md:p-10 shadow-card border border-slate-100 space-y-6">
          <div className="space-y-2 border-r-4 border-brand pr-3">
            <h2 className="text-xl md:text-3xl font-bold text-slate-900">
              {colonSurgeryData.colostomySection.title}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {colonSurgeryData.colostomySection.explanation}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {colonSurgeryData.colostomySection.types.map((colType, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-2"
              >
                <h3 className="font-bold text-slate-900 text-base">
                  {colType.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {colType.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Recovery Timeframe (كم تستغرق عملية التعافي من الوقت؟) */}
        <section className="bg-emerald-50/80 rounded-3xl p-6 md:p-8 border border-emerald-200 flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
            <Clock className="w-8 h-8" />
          </div>
          <div className="space-y-2 text-right">
            <h2 className="text-xl font-bold text-emerald-950">
              {colonSurgeryData.recoverySection.title}
            </h2>
            <p className="text-sm font-bold text-emerald-800">
              {colonSurgeryData.recoverySection.durationText}
            </p>
            <p className="text-xs text-emerald-700 leading-relaxed">
              {colonSurgeryData.recoverySection.postOpGuidance}
            </p>
          </div>
        </section>

        {/* Section 6: Post-Discharge & Warning Signs Alert Callout Box */}
        <section className="bg-gradient-to-r from-amber-500/10 via-rose-50 to-amber-50 rounded-3xl p-6 md:p-10 border-2 border-amber-300 shadow-lg space-y-6">
          <div className="flex items-center gap-3 text-amber-900 border-b border-amber-200 pb-4">
            <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 animate-pulse" />
            <div>
              <h2 className="text-xl md:text-2xl font-bold">
                {colonSurgeryData.warningSignsSection.title}
              </h2>
              <p className="text-xs text-amber-800">
                {colonSurgeryData.warningSignsSection.intro}
              </p>
            </div>
          </div>

          {/* Checklist */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {colonSurgeryData.warningSignsSection.checklist.map((warn, i) => (
              <div
                key={i}
                className="bg-white/90 rounded-xl p-3.5 border border-amber-200 flex items-start gap-2.5 text-xs text-slate-800 font-semibold shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-rose-600 mt-1.5 flex-shrink-0" />
                <span>{warn}</span>
              </div>
            ))}
          </div>

          {/* Emergency CTA */}
          <div className="bg-white rounded-2xl p-5 border border-rose-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
            <div className="space-y-1 text-center sm:text-right">
              <span className="text-xs font-bold text-rose-600 uppercase">
                حالة عاجلة؟
              </span>
              <p className="text-sm font-bold text-slate-900">
                {colonSurgeryData.warningSignsSection.emergencyCallout}
              </p>
            </div>

            <a
              href={`tel:${doctorData.phoneRaw}`}
              className="w-full sm:w-auto bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>اتصل بنا بسرعة: {doctorData.phoneDisplay}</span>
            </a>
          </div>
        </section>

        {/* Contact Form & Map Embed */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <ContactForm
              title="ارسل استفسارك حول جراحة القولون والمستقيم"
              subtitle="سأقوم بالتواصل معك وتقديم المشورة الطبية الإكلينيكية المناسبة."
            />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-900 text-white rounded-2xl p-6 shadow-card space-y-3">
              <h3 className="font-bold text-lg border-r-4 border-accent-gold pr-3">
                حجز موعد استشارة القولون
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                أستقبل المراجعين أيام {doctorData.workingHours} بمجمع تداوي الجراحي
                الطبي بالطائف.
              </p>
              <Link
                href="/appointments"
                className="w-full inline-flex items-center justify-center gap-2 bg-accent-gold hover:bg-accent-goldHover text-slate-900 font-bold text-sm py-3 rounded-xl transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>الانتقال لصفحة المواعيد</span>
              </Link>
            </div>

            <MapEmbed heightClass="h-[300px]" />
          </div>
        </section>
      </div>
    </div>
  );
}
