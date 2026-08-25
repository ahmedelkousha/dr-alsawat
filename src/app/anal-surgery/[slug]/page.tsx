import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { AlertCircle, Clock, Phone, Calendar } from 'lucide-react';
import { analSurgeriesData } from '@/data/analSurgeries';
import { doctorData } from '@/data/doctorData';
import ContactForm from '@/components/ContactForm';
import MapEmbed from '@/components/MapEmbed';
import Button from '@/components/Button';
import PageHero from '@/components/PageHero';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return [
    { slug: 'pilonidal-sinus' },
    { slug: 'anal-fissure' },
    { slug: 'anal-fistula' },
    { slug: 'hemorrhoids' },
  ];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = analSurgeriesData[slug];
  if (!data) return { title: 'الصفحة غير موجودة' };

  return {
    title: `${data.title} (${data.subtitle}) | د. عبدالله الصواط`,
    description: data.description,
  };
}

export default async function AnalSurgerySlugPage({ params }: PageProps) {
  const { slug } = await params;
  const data = analSurgeriesData[slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="space-y-12 md:space-y-20 pb-16">
      {/* Page Hero Banner */}
      <PageHero
        title={
          <span className="flex flex-col sm:flex-row sm:items-baseline gap-2">
            <span>{data.title}</span>
            <span className="text-xl md:text-2xl text-accent-gold font-light">
              ({data.subtitle})
            </span>
          </span>
        }
        subtitle={data.description}
        imgURL={data.img}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
        {/* Section 1: تعريف الحالة (What is this condition) */}
        <section className="bg-white rounded-3xl p-6 md:p-10 shadow-card border border-slate-100 space-y-4">
          <div className="border-r-4 border-brand pr-3">
            {/* <span className="text-xs font-bold text-brand uppercase tracking-widest">
              التشخيص والفهم
            </span> */}
            <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-slate-900 mt-1">
              تعريف حالة {data.title}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
            {data.whatIsIt}
          </p>
        </section>

        {/* Section 2: الأعراض والأسباب (Symptoms & Causes) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Symptoms */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-card border border-slate-100 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 border-r-4 border-rose-500 pr-3">
              أبرز الأعراض المصاحبة
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              {data.symptomsAndCauses.symptoms.map((symptom, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-rose-500 mt-2 flex-shrink-0 animate-pulse" />
                  <span className="font-semibold">{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Causes */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-card border border-slate-100 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 border-r-4 border-amber-500 pr-3">
              الأسباب والعوامل المؤدية
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              {data.symptomsAndCauses.causes.map((cause, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0 animate-pulse" />
                  <span className="font-semibold">{cause}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 3: خيارات العلاج الجراحي (Surgical Treatment Options) */}
        <section className="bg-gradient-to-br from-navy to-navy text-white rounded-3xl p-6 md:p-10 shadow-xl space-y-6 border border-brand/20">
          <div className="space-y-2 border-r-4 border-accent-gold pr-3">
            {/* <span className="text-xs font-bold text-accent-gold uppercase tracking-wider">
              الخيارات والتقنيات المتاحة
            </span> */}
            <h2 className="text-white! text-lg sm:text-xl md:text-3xl font-bold">
              خيارات العلاج الجراحي لـ {data.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.treatmentOptions.map((opt, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 flex items-start gap-3 text-xs sm:text-sm font-semibold text-slate-100"
              >
                {/* <Stethoscope className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" /> */}
                <span className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-brand text-white flex items-center justify-center flex-shrink-0 font-extrabold">
                  {i + 1}
                </span>
                <span className="text-xs sm:text-sm">{opt}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: التعافي بعد الجراحة (Post-op Recovery) */}
        <section className="bg-emerald-50 rounded-3xl p-6 md:p-8 border border-emerald-200 space-y-2">
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-emerald-700" />
            <h3 className="text-[0.9rem] sm:text-xl font-bold text-emerald-950">
              التعافي والرعاية بعد الجراحة
            </h3>
          </div>
          <p className="text-[0.7rem] sm:text-xs md:text-base text-emerald-900 leading-relaxed pr-11 font-medium">
            {data.postOpRecovery}
          </p>
        </section>

        {/* Section 5: متى تتصل بالطبيب (Warning Signs / When to call) */}
        <section className="bg-rose-50 rounded-3xl p-6 md:p-8 border border-rose-200 space-y-4">
          <div className="flex items-center gap-3 text-rose-900 border-b border-rose-200 pb-3">
            <AlertCircle className="w-6 h-6 text-rose-600 animate-bounce" />
            <h3 className="text-base sm:text-lg font-bold">
              متى تتصل بالطبيب؟ (علامات التحذير)
            </h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm text-slate-800">
            {data.warningSigns.map((sign, idx) => (
              <li
                key={idx}
                className="bg-white p-3 text-xs sm:text-sm rounded-xl border border-rose-100 font-semibold flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-rose-600 flex-shrink-0" />
                <span>{sign}</span>
              </li>
            ))}
          </ul>

          <Button
            size="sm"
            className="bg-rose-600 hover:bg-rose-700 text-white"
            href={`tel:${doctorData.phoneRaw}`}
            icon={<Phone className="w-4 h-4" />}
          >
            استفسار طارئ؟ اتصل بنا
          </Button>
        </section>

        {/* Navigation to other anal surgery pages */}
        <section className="bg-white rounded-3xl p-6 border border-slate-200 space-y-4">
          <h4 className="font-bold text-slate-900 text-base">
            استكشف باقي جراحات المنطقة الشرجية:
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <Link
              href="/anal-surgery/pilonidal-sinus"
              className={`border border-slate-300 p-3 rounded-xl font-bold text-center transition-all ${
                slug === 'pilonidal-sinus'
                  ? 'bg-accent-gold text-slate-900/70 border-brand'
                  : 'bg-slate-50 text-slate-700 hover:bg-brand'
              }`}
            >
              الناسور العصعصي
            </Link>
            <Link
              href="/anal-surgery/anal-fissure"
              className={`p-3 rounded-xl border border-slate-300 font-bold text-center transition-all ${
                slug === 'anal-fissure'
                  ? 'bg-brand text-slate-700 border-brand'
                  : 'bg-slate-50 text-slate-700 hover:bg-brand'
              }`}
            >
              الشرخ الشرجي
            </Link>
            <Link
              href="/anal-surgery/anal-fistula"
              className={`p-3 rounded-xl border border-slate-300 font-bold text-center transition-all ${
                slug === 'anal-fistula'
                  ? 'bg-brand text-slate-700 border-brand'
                  : 'bg-slate-50 text-slate-700 hover:bg-brand'
              }`}
            >
              النواسير الشرجية
            </Link>
            <Link
              href="/anal-surgery/hemorrhoids"
              className={`p-3 rounded-xl border border-slate-300 font-bold text-center transition-all ${
                slug === 'hemorrhoids'
                  ? 'bg-brand text-slate-700 border-brand'
                  : 'bg-slate-50 text-slate-700 hover:bg-brand'
              }`}
            >
              البواسير الشرجية
            </Link>
          </div>
        </section>

        {/* Contact Form & Map Embed */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <ContactForm
              title={`ارسل استفسارك بخصوص ${data.title}`}
              subtitle="سيتم استقبال استفسارك من قِبل الفريق الطبي بمجمع تداوي الجراحي الطبي وتنسيق زيارتك للعيادة."
            />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white text-white rounded-2xl p-6 shadow-sm space-y-3">
              <h3 className="font-bold text-lg border-r-4 border-accent-gold pr-3">
                حجز موعد استشارة
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

            <MapEmbed heightClass="h-[280px]" />
          </div>
        </section>
      </div>
    </div>
  );
}
