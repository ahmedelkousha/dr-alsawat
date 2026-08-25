'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpLeft, Menu, X } from 'lucide-react';
import { doctorData } from '@/data/doctorData';

export default function DoctorThomasHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-[#dce5ea] text-[#2d4552] rounded-3xl overflow-hidden font-cairo shadow-sm border border-slate-300/70 relative">
      {/* 1. Header Bar matching reference screenshot top navigation */}
      <header className="relative z-20 max-w-7xl mx-auto px-6 pt-6 pb-2">
        <div className="flex items-center justify-between border-b border-slate-300/50 pb-4">
          {/* Logo / Brand Name */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-extrabold text-xl sm:text-2xl text-[#1e323e] tracking-tight">
              د. عبدالله الصواط
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-[#3b5766]">
            <Link
              href="/"
              className="text-[#1e323e] font-extrabold hover:text-[#1e323e]"
            >
              الرئيسية
            </Link>
            <Link
              href="/about"
              className="hover:text-[#1e323e] transition-colors"
            >
              نبذة عن الدكتور
            </Link>
            <Link
              href="/colon-rectal-surgery"
              className="hover:text-[#1e323e] transition-colors"
            >
              الخدمات والجراحات
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#1e323e] transition-colors"
            >
              تواصل معنا
            </Link>
          </nav>

          {/* Top Contact Me Pill Button with Arrow Badge */}
          <div className="hidden sm:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#2d4552] hover:bg-[#1e323e] text-white text-xs font-bold px-5 py-2 rounded-full shadow transition-all group"
            >
              <span>تواصل معنا</span>
              <span className="w-5 h-5 rounded-full bg-[#3b5766] group-hover:bg-[#4b6a78] flex items-center justify-center transition-colors">
                <ArrowUpLeft className="w-3 h-3 text-white" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#2d4552]"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200 shadow-xl space-y-3 font-bold text-[#2d4552]">
            <Link
              href="/"
              className="block py-2 px-3 hover:bg-slate-100 rounded-lg"
            >
              الرئيسية
            </Link>
            <Link
              href="/about"
              className="block py-2 px-3 hover:bg-slate-100 rounded-lg"
            >
              نبذة عن الدكتور
            </Link>
            <Link
              href="/colon-rectal-surgery"
              className="block py-2 px-3 hover:bg-slate-100 rounded-lg"
            >
              الخدمات والجراحات
            </Link>
            <Link
              href="/contact"
              className="block py-2 px-3 hover:bg-slate-100 rounded-lg"
            >
              تواصل معنا
            </Link>
          </div>
        )}
      </header>

      {/* 2. Main Hero Layout matching reference screenshot visual composition */}
      <section className="relative min-h-[500px] md:min-h-[580px] flex items-center justify-center px-6 py-12 md:py-16 overflow-hidden">
        {/* Giant Translucent Watermark Background Text: "د. عبدالله الصواط" */}
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
          <span className="text-[75px] sm:text-[130px] md:text-[170px] lg:text-[210px] font-black text-[#3b5766]/15 tracking-tighter whitespace-nowrap leading-none">
            د. عبدالله الصواط
          </span>
        </div>

        <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Right Column in RTL: Book Appointment Button */}
          <div className="lg:col-span-3 text-right order-2 lg:order-1 flex lg:flex-col justify-start items-start gap-4">
            <Link
              href="/appointments"
              className="inline-flex items-center gap-3 bg-[#2d4552] hover:bg-[#1e323e] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 group"
            >
              <span>حجز موعد</span>
              <span className="w-6 h-6 rounded-full bg-[#3b5766] group-hover:bg-[#4b6a78] flex items-center justify-center transition-colors">
                <ArrowUpLeft className="w-3.5 h-3.5 text-white" />
              </span>
            </Link>
          </div>

          {/* Center Column: Cutout / Portrait Doctor Image */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
            <div className="relative w-72 sm:w-88 md:w-[380px] aspect-[4/5] flex items-end justify-center">
              {/* Soft Radial Glow behind doctor */}
              <div className="absolute inset-0 bg-white/40 rounded-full blur-2xl transform scale-90 pointer-events-none" />

              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl border-2 border-white/80">
                <Image
                  src="/images/doctor-portrait.png"
                  alt={doctorData.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e323e]/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 right-3 left-3 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-slate-100 text-center">
                  <p className="font-extrabold text-sm text-[#1e323e]">
                    {doctorData.name}
                  </p>
                  <p className="text-[11px] text-[#5b7a8a] font-bold">
                    {doctorData.title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Left Column in RTL: Credentials & Stats Cards */}
          <div className="lg:col-span-3 text-right space-y-6 order-3">
            {/* Qualifications / Medical Degree Badges */}
            <div className="space-y-1">
              <span className="text-xs font-extrabold text-[#3b5766] uppercase tracking-wider block">
                المؤهلات والزمالات
              </span>
              <p className="text-sm font-bold text-[#1e323e] leading-snug">
                MBBS, FCPS (Medicine)
              </p>
              <p className="text-xs text-[#5b7a8a] font-semibold">
                الزمالة الكورية بالمنظار الجراحي والروبوت
              </p>
            </div>

            {/* Key Stat Pills matching reference bottom right */}
            <div className="flex items-center gap-6 pt-2 border-t border-slate-300/60">
              <div>
                <span className="text-2xl sm:text-3xl font-black text-[#1e323e] block">
                  +10k
                </span>
                <span className="text-xs font-bold text-[#5b7a8a]">
                  المرضى المعتمدون
                </span>
              </div>
              <div className="w-px h-8 bg-slate-300/80" />
              <div>
                <span className="text-2xl sm:text-3xl font-black text-[#1e323e] block">
                  +10
                </span>
                <span className="text-xs font-bold text-[#5b7a8a]">
                  سنوات الخبرة
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
