"use client";

import React from "react";
import { Siren, ArrowLeft, Calendar } from "lucide-react";
import { doctorData } from "@/data/doctorData";
import Button from "@/components/Button";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export function EmergencyBanner() {
  return (
    <div className="bg-gradient-to-r from-red-700 via-red-600 to-rose-700 text-white rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden my-8">
      {/* Background glow circle */}
      <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-right">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center flex-shrink-0 animate-pulse">
            <Siren className="w-8 h-8 text-white" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl md:text-2xl font-bold">
              {doctorData.emergencyBanner.title}
            </h3>
            <p className="text-sm md:text-base text-rose-100">
              {doctorData.emergencyBanner.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <Button
            href="/appointments"
            variant="gold"
            size="lg"
            fullWidth
            className="md:w-auto text-slate-900"
            icon={<Calendar className="w-5 h-5 text-slate-900" />}
          >
            {doctorData.emergencyBanner.ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
}

export function WhatsAppBanner() {
  return (
    <div className=" bg-navy text-white rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden my-8">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-right">
          <div className="w-14 h-14 rounded-2xl bg-accent-whatsapp/20 backdrop-blur-md flex items-center justify-center flex-shrink-0">
            <WhatsAppIcon className="w-8 h-8 text-accent-whatsapp" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg md:text-2xl font-bold text-slate-300!">
              {doctorData.whatsappBanner.title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-slate-300">
              {doctorData.whatsappBanner.subtitle}
            </p>
          </div>
        </div>

        <div className="w-full md:w-auto">
          <Button
            href={doctorData.whatsappUrl}
            target="_blank"
            variant="gold"
            size="md"
            fullWidth
            className="md:w-auto text-slate-900 bg-accent-whatsapp hover:bg-accent-whatsapp/80"
            icon={<WhatsAppIcon className="w-5 h-5" />}
            iconPosition="left"
          >
            <span className="flex items-center gap-2">
              <span>{doctorData.whatsappBanner.ctaText}</span>
              <ArrowLeft className="w-4 h-4" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
