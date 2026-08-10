"use client";

import React from "react";
import { Clock } from "lucide-react";
import { doctorData } from "@/data/doctorData";
import Button from "@/components/Button";

export default function WorkingHoursWidgetSection() {
  return (
    <section className="bg-white rounded-3xl p-6 md:p-8 shadow-card border border-brand/20 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center flex-shrink-0">
          <Clock className="w-7 h-7" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">ساعات العمل والعيادة</h3>
          <p className="text-sm text-brand font-bold">{doctorData.workingHours}</p>
          <p className="text-xs text-slate-500">{doctorData.clinicName}</p>
        </div>
      </div>

      <Button href="/appointments" variant="primary" size="md">
        احجز الموعد الآن
      </Button>
    </section>
  );
}
