'use client';

import React from 'react';
import {
  Clock,
  Phone,
  MapPin,
  ExternalLink,
  Globe,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { doctorData } from '@/data/doctorData';
import MapEmbed from '@/components/MapEmbed';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';

import AppointmentQuickCard, {
  AppointmentQuickCardProps,
} from '@/components/AppointmentQuickCard';

export default function AppointmentsPage() {
  const quickCardsData: AppointmentQuickCardProps[] = [
    {
      icon: <Clock className="w-6 h-6 text-accent-gold" />,
      title: 'أوقات العمل المتاحة',
      description:
        'نستقبل المراجعين للاستشارات والكشوفات بمجمع تداوي الجراحي كل أحد وثلاثاء من الساعة 5-8 مساءً.',
      buttonText: 'موقع العيادة',
      buttonHref: doctorData.clinicLocationURL,
      buttonIcon: <MapPin className="w-4 h-4 text-slate-900" />,
    },
    {
      icon: <Phone className="w-6 h-6 text-accent-gold" />,
      title: 'الاتصال المباشر للحجز',
      description:
        'اتصل بالمجمع هاتفياً خلال ساعات الدوام للإجابة عن تساؤلاتك وتأكيد حجزك.',
      buttonText: 'اتصل للحجز',
      buttonHref: `tel:${doctorData.phoneRaw}`,
      buttonIcon: <Phone className="w-4 h-4 text-slate-900" />,
    },
    {
      icon: <FaWhatsapp className="w-6 h-6 text-accent-whatsapp" />,
      title: 'حجز فوري عبر الواتساب',
      description:
        'تواصل مع مجمع تداوي الجراحي لااختيار موعدك المناسب للحجز.',
      buttonText: 'تواصل عبر الواتساب',
      buttonHref: doctorData.whatsappUrl,
      buttonIcon: <FaWhatsapp className="w-4 h-4 text-accent-whatsapp" />,
      containerClassName:
        'bg-emerald-700/85 text-white rounded-3xl p-4 shadow-sm border border-brand/10 flex flex-col justify-between space-y-4',
      descriptionClassName: 'text-xs text-slate-200 leading-relaxed',
      buttonClassName: 'bg-white/85 hover:bg-emerald-200',
    },
    {
      icon: <Globe className="w-6 h-6 text-accent-gold" />,
      title: 'حجز إلكتروني مباشر',
      description:
        'حجز موعدك مباشرة عبر البوابة الإلكترونية المعتمدة لمجمع تداوي الجراحي الطبي.',
      buttonText: 'الحجز من خلال موقع مجمع',
      buttonHref: doctorData.bookingUrl,
      buttonIcon: <ExternalLink className="w-4 h-4" />,
    },
  ];

  return (
    <div className="space-y-12 md:space-y-20 pb-16">
      {/* Page Hero Banner */}
      <PageHero
        title="حجز موعد بالعيادة"
        subtitle={`احجز موعد استشارتك مع ${doctorData.name} بسهولة وسرعة من خلال التواصل مع مجمع تداوي الجراحي في الطائف عبر الواتساب، الاتصال، موقع المجمع الرسمي أو زيارة العيادة بالمجمع.`}
        imgURL="/images/appointments-hero.jpeg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
        {/* Working Hours & Quick Action Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
          {quickCardsData.map((card, idx) => (
            <AppointmentQuickCard key={idx} {...card} />
          ))}
        </section>

        {/* Appointment Contact Form & Map Embed */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <ContactForm
              title="طلب موعد إلكتروني"
              subtitle="عبئ البيانات وسيقوم موظفو الاستقبال بمجمع تداوي الجراحي بالطائف بتأكيد حجزك وتحويلك لمحادثة الواتساب المباشرة."
            />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <MapEmbed heightClass="h-[340px]" />
          </div>
        </section>
      </div>
    </div>
  );
}
