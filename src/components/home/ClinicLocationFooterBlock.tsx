"use client";

import React from "react";
import { Phone } from "lucide-react";
import { doctorData } from "@/data/doctorData";
import MapEmbed from "@/components/MapEmbed";
import Button from "@/components/Button";

export default function ClinicLocationFooterBlock() {
  return (
    <section className="text-slate-900 rounded-3xl p-4 md:p-8 shadow-xl space-y-6 border border-brand/20 bg-navy">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center border-b border-slate-800 pb-8">
        <div className="space-y-2">
          <span className="text-xs text-accent-gold font-bold">موقع عيادتي</span>
          <p className="text-base font-bold text-slate-200">{doctorData.clinicName}</p>
          <p className="text-xs text-slate-300">{doctorData.clinicAddress}</p>
        </div>

        <div className="space-y-2">
          <span className="text-xs text-accent-gold font-bold">أوقات العمل المتاحة</span>
          <p className="text-base font-bold text-slate-200">{doctorData.workingHours}</p>
          <p className="text-xs text-slate-300">للحجز والتأكيد يرجى الاتصال المسبق</p>
        </div>

        <div className="flex flex-wrap items-center justify-start lg:justify-end gap-3">
          <Button
            href={doctorData.bookingUrl}
            target="_blank"
            variant="gold"
            size="sm"
          >
            حجز عبر موقع المجمع
          </Button>
          <Button
            href={`tel:${doctorData.phoneRaw}`}
            variant="primary"
            size="sm"
            icon={<Phone className="w-4 h-4 text-slate-900" />}
          >
            اتصال للحجز
          </Button>
        </div>
      </div>

      <MapEmbed heightClass="h-[250px] md:h-[320px]" />
    </section>
  );
}
