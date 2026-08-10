import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import {
  AlertCircle,
  Clock,
  Phone,
  Stethoscope,
  Calendar,
  Sparkles,
} from "lucide-react";
import { analSurgeriesData } from "@/data/analSurgeries";
import { doctorData } from "@/data/doctorData";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return [
    { slug: "pilonidal-sinus" },
    { slug: "anal-fissure" },
    { slug: "anal-fistula" },
    { slug: "hemorrhoids" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = analSurgeriesData[slug];
  if (!data) return { title: "الصفحة غير موجودة" };

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
      <section className="bg-navy-950/95 text-white py-14 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right space-y-4">
          <div className="inline-block bg-accent-gold/20 text-accent-gold text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-accent-gold/30">
            {/* <Stethoscope className="w-4 h-4 text-accent-gold" /> */}
            <span>جراحات المنطقة الشرجية المتقدمة</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white! flex flex-col sm:flex-row sm:items-baseline gap-2">
            <span>{data.title}</span>
            <span className="text-xl md:text-2xl text-accent-gold font-light">({data.subtitle})</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {data.description}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
        {/* Section 1: تعريف الحالة (What is this condition) */}
        <section className="bg-white rounded-3xl p-6 md:p-10 shadow-card border border-slate-100 space-y-4">
          <div className="border-r-4 border-brand pr-3">
            <span className="text-xs font-bold text-brand uppercase tracking-widest">
              التشخيص والفهم
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
              تعريف حالة {data.title}
            </h2>
          </div>
          <p className="text-base md:text-lg text-slate-700 leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
            {data.whatIsIt}
          </p>
        </section>

        {/* Section 2: الأعراض والأسباب (Symptoms & Causes) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Symptoms */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-card border border-slate-100 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 border-r-4 border-rose-500 pr-3">
              أبرز الأعراض المصاحبة
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              {data.symptomsAndCauses.symptoms.map((symptom, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                  <span className="font-semibold">{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Causes */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-card border border-slate-100 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 border-r-4 border-amber-500 pr-3">
              الأسباب والعوامل المؤدية
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              {data.symptomsAndCauses.causes.map((cause, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  <span className="font-semibold">{cause}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 3: خيارات العلاج الجراحي (Surgical Treatment Options) */}
        <section className="bg-gradient-to-br from-navy-950 to-navy-900 text-white rounded-3xl p-6 md:p-10 shadow-xl space-y-6 border border-brand/20">
          <div className="space-y-2 border-r-4 border-accent-gold pr-3">
            <span className="text-xs font-bold text-accent-gold uppercase tracking-wider">
              الخيارات والتقنيات المتاحة
            </span>
            <h2 className="text-white! text-2xl md:text-3xl font-bold">خيارات العلاج الجراحي لـ {data.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.treatmentOptions.map((opt, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 flex items-start gap-3 text-sm font-semibold text-slate-100"
              >
                {/* <Stethoscope className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" /> */}
                <span>{opt}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: التعافي بعد الجراحة (Post-op Recovery) */}
        <section className="bg-emerald-50 rounded-3xl p-6 md:p-8 border border-emerald-200 space-y-3">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-emerald-700" />
            <h3 className="text-xl font-bold text-emerald-950">التعافي والرعاية بعد الجراحة</h3>
          </div>
          <p className="text-sm md:text-base text-emerald-900 leading-relaxed pr-9 font-medium">
            {data.postOpRecovery}
          </p>
        </section>

        {/* Section 5: متى تتصل بالطبيب (Warning Signs / When to call) */}
        <section className="bg-rose-50 rounded-3xl p-6 md:p-8 border border-rose-200 space-y-4">
          <div className="flex items-center gap-3 text-rose-900 border-b border-rose-200 pb-3">
            <AlertCircle className="w-6 h-6 text-rose-600" />
            <h3 className="text-xl font-bold">متى تتصل بالطبيب؟ (علامات التحذير)</h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm text-slate-800">
            {data.warningSigns.map((sign, idx) => (
              <li key={idx} className="bg-white p-3 rounded-xl border border-rose-100 font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-600 flex-shrink-0" />
                <span>{sign}</span>
              </li>
            ))}
          </ul>

          <div className="pt-2 text-center md:text-right">
            <a
              href={`tel:${doctorData.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>للاستفسار الطارئ: {doctorData.phoneDisplay}</span>
            </a>
          </div>
        </section>

        {/* Navigation to other anal surgery pages */}
        <section className="bg-slate-100 rounded-3xl p-6 border border-slate-200 space-y-4">
          <h4 className="font-bold text-slate-900 text-base">استكشف باقي جراحات المنطقة الشرجية:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <Link
              href="/anal-surgery/pilonidal-sinus"
              className={`p-3 rounded-xl border font-bold text-center transition-all ${
                slug === "pilonidal-sinus"
                  ? "bg-brand text-white border-brand"
                  : "bg-white text-slate-700 hover:bg-brand/10"
              }`}
            >
              الناسور العصعصي
            </Link>
            <Link
              href="/anal-surgery/anal-fissure"
              className={`p-3 rounded-xl border font-bold text-center transition-all ${
                slug === "anal-fissure"
                  ? "bg-brand text-white border-brand"
                  : "bg-white text-slate-700 hover:bg-brand/10"
              }`}
            >
              الشرخ الشرجي
            </Link>
            <Link
              href="/anal-surgery/anal-fistula"
              className={`p-3 rounded-xl border font-bold text-center transition-all ${
                slug === "anal-fistula"
                  ? "bg-brand text-white border-brand"
                  : "bg-white text-slate-700 hover:bg-brand/10"
              }`}
            >
              النواسير الشرجية
            </Link>
            <Link
              href="/anal-surgery/hemorrhoids"
              className={`p-3 rounded-xl border font-bold text-center transition-all ${
                slug === "hemorrhoids"
                  ? "bg-brand text-white border-brand"
                  : "bg-white text-slate-700 hover:bg-brand/10"
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
              subtitle="سنقوم بالتواصل معك بخصوص الخيارات العلاجية والجراحية المناسبة."
            />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-navy-950 text-white rounded-2xl p-6 shadow-card space-y-3 border border-brand/20">
              <h3 className="font-bold text-lg border-r-4 border-accent-gold pr-3">
                حجز موعد عيادة جراحية
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                مواعيد العيادة: {doctorData.workingHours} بمجمع تداوي الجراحي الطبي بالطائف.
              </p>
              <Link
                href="/appointments"
                className="w-full inline-flex items-center justify-center gap-2 bg-accent-gold hover:bg-brand text-slate-900 hover:text-white font-bold text-sm py-3 rounded-xl transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>حجز موعد بالعيادة</span>
              </Link>
            </div>

            <MapEmbed heightClass="h-[280px]" />
          </div>
        </section>
      </div>
    </div>
  );
}
