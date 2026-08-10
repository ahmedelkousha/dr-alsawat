"use client";

import React from "react";
import { Phone } from "lucide-react";
import { doctorData } from "@/data/doctorData";
import MapEmbed from "@/components/MapEmbed";
import Button from "@/components/Button";

export default function ClinicLocationFooterBlock() {
  return (
    <section className="text-slate-900 rounded-3xl p-8 md:p-10 shadow-xl space-y-6 border border-brand/20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center border-b border-slate-800 pb-8">
        <div className="space-y-2">
          <span className="text-xs text-accent-gold font-bold">معلومات العيادة</span>
          <p className="text-base font-bold">{doctorData.clinicName}</p>
          <p className="text-xs">{doctorData.clinicAddress}</p>
        </div>

        <div className="space-y-2">
          <span className="text-xs text-accent-gold font-bold">أوقات العمل المتاحة</span>
          <p className="text-base font-bold">{doctorData.workingHours}</p>
          <p className="text-xs">للحجز والتأكيد يرجى الاتصال المسبق</p>
        </div>

        <div className="flex items-center justify-start lg:justify-end gap-3">
          <Button
            href={`tel:${doctorData.phoneRaw}`}
            variant="primary"
            size="md"
            icon={<Phone className="w-4 h-4 text-slate-900" />}
          >
            احجز الموعد
          </Button>
        </div>
      </div>

      <MapEmbed heightClass="h-[320px]" />
    </section>
  );
}
