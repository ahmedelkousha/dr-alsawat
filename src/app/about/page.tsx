import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  CheckCircle2,
  ExternalLink,
  Video,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  HeartHandshake,
  Activity,
  UserCheck,
  LucideIcon,
} from 'lucide-react';
import { doctorData } from '@/data/doctorData';
import {
  achievementsData,
  mediaAppearancesData,
  awardsData,
} from '@/data/achievements';
import Button from '@/components/Button';
import { medicalFeatures } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';
import ContactForm from '@/components/ContactForm';
import MapEmbed from '@/components/MapEmbed';
import PageHero from '@/components/PageHero';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import MedicalFeaturesSection from '@/components/home/MedicalFeaturesSection';

export const metadata: Metadata = {
  title: 'نبذة تعريفية | د. عبدالله الصواط',
  description:
    'المؤهلات والإنجازات الأكاديمية والمهنية للاستشاري د. عبدالله الصواط، أستاذ الجراحة المساعد بجامعة الطائف والزميل الكوري لجراحة القولون والمستقيم.',
};

const pillarIcons: Record<string, LucideIcon> = {
  ShieldCheck,
  HeartHandshake,
  Activity,
  UserCheck,
};

export default function AboutPage() {
  return (
    <div className="space-y-12 md:space-y-20 pb-16">
      {/* Hero Strip */}
      <PageHero
        title={doctorData.name}
        subtitle={doctorData.credentials[1] + ' و ' + doctorData.credentials[4]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        {/* Credentials List & Portrait */}
        <section className="bg-white rounded-3xl p-6 pb-10 md:p-10 lg:p-12 lg:pb-0 shadow-card border border-slate-100 overflow-hidden relative">
          {/* Background Subtle Accent Glow */}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Right in RTL: Doctor Portrait Photo Card */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none">
                <div className="relative overflow-hidden  bg-white">
                  <div className="lg:hidden absolute bottom-0 h-20 lg:h-24 w-full bg-gradient-to-b from-transparent via-white/10 to-white " />
                  <Image
                    src="/images/alsawat-pic.png"
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
            <div className="lg:col-span-7 space-y-6 text-right order-2 lg:order-1">
              <div className="space-y-3">
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                  تعرّف على{' '}
                  <span className="text-brand">{doctorData.name}</span>
                </h2>

                <p className="text-xs sm:text-sm font-bold text-slate-700 leading-relaxed">
                  {doctorData.subtitle}
                </p>
              </div>

              <ul className="space-y-3.5">
                {doctorData.credentials.map((cred, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-slate-700 text-xs md:text-base font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-brand flex-shrink-0" />
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>

              {/* <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {doctorData.doctorBioSummary}
              </p> */}

              {/* Action CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  className="border border-brand p-2.5"
                  href={`tel:${doctorData.phoneRaw}`}
                  variant="primary"
                  size="sm"
                  icon={<Phone className="w-4 h-4" />}
                >
                  اتصال لحجز موعد استشارة
                </Button>

                <Button
                  icon={<WhatsAppIcon className="w-4 h-4 text-emerald-400" />}
                  href={doctorData.whatsappUrl}
                  size='sm'
                  className="text-slate-100 bg-emerald-700 hover:bg-emerald-600"
                >
               الحجز عبر واتساب
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="bg-white rounded-3xl p-6 md:p-12 shadow-card border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 md:w-80 aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border border-brand">
              <Image
                src="/images/alsawat-pic.png"
                alt={doctorData.name}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold text-brand uppercase tracking-widest bg-brand-50">
                المؤهلات والشهادات العلمية
              </span>
              <h2 className="text-xl md:text-3xl font-bold text-slate-900 mt-2">
                سيرة علمية ومهنية حافلة
              </h2>
            </div>

            <ul className="space-y-3.5">
              {doctorData.credentials.map((cred, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-slate-700 text-base md:text-lg font-medium"
                >
                  <CheckCircle2 className="w-6 h-6 text-brand flex-shrink-0 mt-0.5" />
                  <span>{cred}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
              {doctorData.doctorBioSummary}
            </p>
          </div>
        </section> */}

        {/* 4 Value Pillars Cards */}
        {/* <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-xl md:text-3xl font-bold text-slate-900">
              ركائز وقيم رعايتي الطبية
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              ألتزم بأعلى المعايير الأخلاقية والمهنية لضمان راحة وسلامة كل مريض.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
            {doctorData.valuePillars.map((pillar, idx) => {
              const IconComp = pillarIcons[pillar.icon] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-4 md:p-6 shadow-card border border-slate-100 space-y-3 hover:shadow-card-hover group duration-300 transition-all"
                >
                  <div className="bg-navy w-14 h-14 rounded-2xl text-brand group-hover:bg-brand group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900 group-hover:text-brand transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section> */}

        {/* 6-Tile Medical Features */}
        {/* <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-xl md:text-3xl font-bold text-slate-900">
              معايير الرعاية والخدمات في عيادتي
            </h2>
            <p className="text-sm text-slate-600">
              ألتزم بأعلى معايير الدقة والشفافية الطبية لضمان سلامة ورضا كافة
              مرضاي.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {medicalFeatures.map((feature) => (
              <ServiceCard key={feature.id} service={feature} />
            ))}
          </div>
        </section> */}

        <MedicalFeaturesSection />

        {/* الإنجازات (Achievements / Press Mentions) */}
        <section id="achievements" className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2">
              {/* <Award className="w-6 h-6 text-brand-600" /> */}
              <h2 className="text-xl md:text-3xl font-bold text-slate-900">
                الإنجازات والنشرات الصحفية
              </h2>
            </div>
            {/* <span className="text-xs text-slate-500 font-medium">
              مشاركات وتغطيات
            </span> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievementsData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 shadow-card border border-slate-100 space-y-4 flex flex-col justify-between hover:shadow-card-hover transition-all"
              >
                <div className="space-y-3">
                  <div className="relative w-full h-40 rounded-xl overflow-hidden bg-slate-800">
                    <Image
                      src={item.imageUrl || '/images/logo-dark.jpg'}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-[11px] font-bold bg-brand-50 text-brand px-2.5 py-1 rounded-md">
                    {item.publisher} {item.date && `• ${item.date}`}
                  </span>
                  <h3 className="font-bold text-slate-900 text-base leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <a
                  href={item.articleUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-brand/80 pt-2 border-t border-slate-100"
                >
                  <span>لقراءة المقال اضغط هنا</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* اللقاءات (Media Appearances) */}
        <section id="media" className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2">
              {/* <Video className="w-6 h-6 text-brand-600" /> */}
              <h2 className="text-xl md:text-3xl font-bold text-slate-900">
                اللقاءات والمشاركات التلفزيونية
              </h2>
            </div>
            {/* <span className="text-xs text-slate-500 font-medium">
              ميديا وفيديو
            </span> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaAppearancesData.map((media) => (
              <div
                key={media.id}
                className="bg-white rounded-2xl p-6 shadow-card border border-slate-100 space-y-4"
              >
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-900 shadow-md">
                  {media.embedUrl ? (
                    <iframe
                      src={media.embedUrl}
                      title={media.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white">
                      <Video className="w-12 h-12 text-brand-400 animate-pulse" />
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs text-brand font-bold mb-1">
                    <span>{media.event}</span>
                    <span>{media.year}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">
                    {media.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* التكريم (Recognition / Awards Gallery) */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2">
              {/* <Sparkles className="w-6 h-6 text-accent-gold" /> */}
              <h2 className="text-xl md:text-3xl font-bold text-slate-900">
                التكريم وشهادات التميز
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awardsData.map((award) => (
              <div
                key={award.id}
                className="bg-white rounded-2xl p-5 shadow-card border border-slate-100 space-y-3 text-center"
              >
                <div className="relative w-full h-48 rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src={award.imageUrl}
                    alt={award.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  {award.title}
                </h3>
                <p className="text-xs text-brand font-semibold">
                  {award.organization} – {award.year}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form & Contact Cards */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-navy/95 text-white rounded-2xl p-6 shadow-card space-y-4">
              <h3 className="text-white! text-xl font-bold border-r-4 border-accent-gold pr-3">
                معلومات الاتصال المباشر
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent-gold flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold block">العنوان:</span>
                    <span className="text-slate-300 text-xs">
                      {doctorData.clinicAddress}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent-gold flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold block">الهاتف للحجز:</span>
                    <a
                      href={`tel:${doctorData.phoneRaw}`}
                      className="text-slate-300 text-xs dir-ltr block text-right hover:text-accent-gold"
                    >
                      {doctorData.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent-gold flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold block">البريد الإلكتروني:</span>
                    <a
                      href={`mailto:${doctorData.email}`}
                      className="text-slate-300 text-xs hover:text-accent-gold"
                    >
                      {doctorData.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <MapEmbed heightClass="h-[300px]" />
          </div>
        </section>

        {/* "بكلمات قصيرة" Closing CTA Strip */}
        <section className="bg-navy rounded-3xl p-8 md:p-10 shadow-xl text-center space-y-4">
          <span className="text-xs font-bold text-accent-gold uppercase tracking-widest">
            {doctorData.taglineHeader}
          </span>
          <h2 className="text-sm sm:text-base md:text-lg font-bold max-w-3xl mx-auto text-slate-300!">
            {doctorData.taglineContent}
          </h2>
          <div className="pt-2 flex justify-center gap-4">
            <Button
              href="/appointments"
            >
              حجز موعد استشارة
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
