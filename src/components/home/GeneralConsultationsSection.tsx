"use client";

import React from "react";
import { BookOpen, Calendar } from "lucide-react";
import { consultationInfo } from "@/data/services";
import Button from "@/components/Button";

export default function GeneralConsultationsSection() {
  return (
    <section className="text-white rounded-3xl p-8 md:p-12 shadow-xl border border-brand/20">
      <div className="max-w-3xl space-y-4">
        {/* <div className="inline-flex items-center gap-2 bg-navy-900 border border-brand/30 px-3.5 py-1 rounded-full text-xs font-semibold text-accent-gold">
          <BookOpen className="w-4 h-4" />
          <span>{consultationInfo.subtitle}</span>
        </div> */}

        <h2 className="text-2xl md:text-3xl font-bold">{consultationInfo.title}</h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          {consultationInfo.description}
        </p>

        <div className="pt-4">
          <Button
            href="/appointments"
            variant="gold"
            size="md"
            icon={<Calendar className="w-4 h-4 text-slate-900" />}
          >
            حجز موعد استشارة جديدة
          </Button>
        </div>
      </div>
    </section>
  );
}
