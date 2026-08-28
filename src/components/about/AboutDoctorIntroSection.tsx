import React from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { doctorData } from '@/data/doctorData';
import Button from '@/components/Button';
import TypingCredentialsList from '@/components/TypingCredentialsList';

export default function AboutDoctorIntroSection() {
  return (
    <section className="bg-white rounded-3xl pb-10 px-4 pt-4 lg:p-12 lg:py-14 shadow-card border border-slate-100 overflow-hidden relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Right in RTL: Doctor Portrait Photo Card */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none">
            <div className="relative overflow-hidden bg-white">
              <div className="lg:hidden absolute bottom-0 h-20 lg:h-24 w-full bg-gradient-to-b from-transparent via-white/10 to-white" />
              <Image
                src="/images/alsawat-pic.jpeg"
                alt={doctorData.name}
                width={683}
                height={941}
                className="aspect-4/5 object-cover object-top rounded-3xl"
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

          <TypingCredentialsList credentials={doctorData.credentials} />

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
              icon={<FaWhatsapp className="w-4 h-4 text-emerald-400" />}
              href={doctorData.whatsappUrl}
              size="sm"
              target="_blank"
              className="text-slate-100 bg-emerald-700 hover:bg-emerald-600"
            >
              الحجز عبر واتساب
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
