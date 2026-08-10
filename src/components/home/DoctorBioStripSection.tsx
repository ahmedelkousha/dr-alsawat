"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { doctorData } from "@/data/doctorData";

export default function DoctorBioStripSection() {
  return (
    <section className="bg-slate-100/80 rounded-3xl p-6 md:p-10 border border-slate-200 flex flex-col md:flex-row items-center gap-8">
      <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg border-2 border-white">
        <Image
          src="/images/doctor-portrait.png"
          alt={doctorData.name}
          fill
          className="object-cover object-top"
        />
      </div>

      <div className="space-y-3 text-center md:text-right">
        <span className="text-xs font-bold text-brand bg-brand/10 px-3 py-1 rounded-full">
          عن الاستشاري
        </span>
        <h2 className="text-2xl font-bold text-slate-900">
          {doctorData.name} – {doctorData.universityTitle}
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
          {doctorData.doctorBioSummary}
        </p>
        <div className="pt-2">
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:text-brand/80"
          >
            <span>قراءة المؤهلات والخبرات الكاملة</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
