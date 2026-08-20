'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  ChevronLeft,
  Clock,
  Phone,
  Award,
  BookOpen,
  ArrowLeft,
  Newspaper,
  Heart,
} from 'lucide-react';
import { doctorData } from '@/data/doctorData';

export default function HeroSection() {
  return (
    <section className="relative bg-navy/95 text-white overflow-hidden pt-8 pb-16 md:py-24 max-w-[110rem]">
      {/* Decorative backdrop elements */}
      {/* <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center px-4 sm:px-6 lg:px-8 py-2.5 md:py-1.5">
          {/* Right in RTL: Doctor Info & Intro */}
          <div className="lg:col-span-7 space-y-6 text-right order-2 lg:order-1">
            <div className="hidden items-center gap-2 bg-navy border border-brand/30 px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold text-accent-gold backdrop-blur-md lg:inline-flex">
              <Award className="w-4 h-4" />
              <span>مجمع تداوي الجراحي الطبي بالطائف</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="font-light text-slate-300 block text-xl sm:text-3xl mb-1">
                الاستشاري
              </span>
              <span className="text-2xl text-white bg-clip-text text-transparent bg-gradient-to-l from-white via-slate-100 to-brand/80">
                {doctorData.name}
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
              {doctorData.subtitle}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/appointments"
                className="inline-flex items-center gap-2.5 bg-brand hover:bg-brand/90 text-white font-bold text-sm px-7 py-3 rounded-2xl border border-brand shadow-lg hover:shadow-brand/30 transition-all transform hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>المواعيد</span>
              </Link>

              <a
                href="#services-overview"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-7 py-3 rounded-2xl border border-white/20 backdrop-blur-md transition-all"
              >
                <span>إكتشف أكثر</span>
                <ChevronLeft className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Left in RTL: Doctor Portrait Photo */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-72 sm:w-80 md:w-96 aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/images/doctor-portrait.png"
                alt={doctorData.name}
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-lg border border-white/40 shadow-lg text-slate-900 text-center">
                <p className="font-bold text-sm text-slate-900">
                  {doctorData.name}
                </p>
                <p className="text-xs text-brand font-semibold">
                  {doctorData.universityTitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
