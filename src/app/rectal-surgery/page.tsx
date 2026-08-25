import React from 'react';
import { Metadata } from 'next';
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  Phone,
  Calendar,
} from 'lucide-react';
import { rectalSurgeryContent } from '@/data/rectalSurgery';
import { doctorData } from '@/data/doctorData';
import ContactForm from '@/components/ContactForm';
import MapEmbed from '@/components/MapEmbed';
import PageHero from '@/components/PageHero';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'جراحات المستقيم المتخصصة والروبوتية | د. عبدالله الصواط',
  description:
    'دليل طبي متكامل حول جراحات المستقيم بالروبوت والمنظار، استئصال أورام المستقيم الحافظة للعضلات، وعلاج هبوط المستقيم.',
};

export default function RectalSurgeryPage() {
  return (
    <div className="space-y-12 md:space-y-20 pb-16">
      {/* Page Hero Banner */}
      <PageHero
        title={rectalSurgeryContent.hero.title}
        subtitle={rectalSurgeryContent.hero.subtitle}
        imgURL={rectalSurgeryContent.hero.img}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20">
        {/* Section 1: Indications (دواعي جراحة المستقيم) */}
        <section className="bg-white rounded-3xl p-6 md:p-10 shadow-card border border-slate-100 space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl md:text-3xl border-r-4 border-brand pr-3 font-bold text-slate-900">
              {rectalSurgeryContent.indicationsSection.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              {rectalSurgeryContent.indicationsSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {rectalSurgeryContent.indicationsSection.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl py-3.5 px-4 border border-slate-200/80 hover:border-brand-300 transition-colors space-y-2"
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

        {/* Section 2: Types of Rectal Surgeries (أنواع جراحات المستقيم) */}
        <section className="bg-navy text-white rounded-3xl p-6 md:p-10 shadow-xl space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-white! border-r-4 border-accent-gold pr-3">
              {rectalSurgeryContent.typesSection.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              {rectalSurgeryContent.typesSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
            {rectalSurgeryContent.typesSection.types.map((typeStr, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl py-3 px-4 flex items-center gap-3 text-sm font-medium text-slate-100"
              >
                <span className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-brand text-white text-xs flex items-center justify-center flex-shrink-0 font-extrabold">
                  {index + 1}
                </span>
                <span className="text-xs sm:text-sm">{typeStr}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Specialty Detail (الجراحة الروبوتية وتثبيت هبوط المستقيم) */}
        <section className="bg-white rounded-3xl p-6 md:p-10 shadow-card border border-slate-100 space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-slate-900 border-r-4 border-brand pr-3">
              {rectalSurgeryContent.specialtyDetailSection.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              {rectalSurgeryContent.specialtyDetailSection.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rectalSurgeryContent.specialtyDetailSection.subsections.map((sub, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-2xl py-4 px-4 border border-slate-200/80 hover:border-brand-300 transition-colors space-y-2"
              >
                <h3 className="inline-flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                  <span className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-brand text-white flex items-center justify-center flex-shrink-0 font-extrabold text-xs">
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

        {/* Section 4: Recovery Timeframe (فترة التعافي) */}
        <section className="bg-emerald-50/80 rounded-3xl p-6 md:p-8 border border-emerald-200 flex flex-row items-start gap-3">
          <div className="rounded-2xl flex items-center justify-center flex-shrink-0">
            <Clock className="w-8 h-8 text-emerald-700" />
          </div>
          <div className="space-y-2 text-right">
            <h2 className="text-[0.9rem] sm:text-xl font-bold text-emerald-950">
              {rectalSurgeryContent.recoverySection.title}
            </h2>
            <p className="text-[0.6rem] sm:text-sm font-bold text-emerald-800">
              {rectalSurgeryContent.recoverySection.durationText}
            </p>
            <p className="text-[0.55rem] sm:text-xs text-emerald-700 leading-relaxed">
              {rectalSurgeryContent.recoverySection.postOpGuidance}
            </p>
          </div>
        </section>

        {/* Section 5: Warning Signs Alert */}
        <section className="bg-amber-50 rounded-3xl p-6 md:p-10 border-2 border-amber-300 shadow-lg space-y-6">
          <div className="flex items-center gap-3 text-amber-900 border-b border-amber-200 pb-4">
            <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 animate-bounce" />
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl md:text-3xl font-bold">
                {rectalSurgeryContent.warningSignsSection.title}
              </h2>
              <p className="text-xs sm:text-sm text-amber-800">
                {rectalSurgeryContent.warningSignsSection.intro}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {rectalSurgeryContent.warningSignsSection.checklist.map((warn, i) => (
              <div
                key={i}
                className="bg-white/90 rounded-xl py-3 px-3 border border-amber-200 flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-rose-600 mt-1.5 flex-shrink-0" />
                <span>{warn}</span>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl py-3 px-4 border border-rose-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
            <div className="space-y-1 text-center sm:text-right">
              <p className="text-[0.6rem] sm:text-sm font-bold text-slate-900">
                {rectalSurgeryContent.warningSignsSection.emergencyCallout}
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
              title="ارسل استفسارك حول جراحات المستقيم"
              subtitle="سيتم استقبال استفسارك مباشرة من قِبل الفريق الطبي بمجمع تداوي الجراحي الطبي وتنسيق موعدك مع د. عبدالله الصواط."
            />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white text-slate-900 rounded-2xl p-6 shadow-card border border-slate-100 space-y-3">
              <h3 className="font-bold text-lg border-r-4 border-accent-gold pr-3">
                حجز موعد استشارة المستقيم
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                تستقبل العيادة المراجعين أيام {doctorData.workingHours} بمجمع
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
