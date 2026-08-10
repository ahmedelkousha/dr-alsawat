"use client";

import React from "react";
import { MapPin, Navigation } from "lucide-react";
import { doctorData } from "@/data/doctorData";

interface MapEmbedProps {
  title?: string;
  heightClass?: string;
}

export default function MapEmbed({
  title = "موقع عيادة د. عبدالله الصواط (مجمع تداوي الجراحي)",
  heightClass = "h-[380px]",
}: MapEmbedProps) {
  // Placeholder iframe URL for Taif Tadawi Medical Complex (clearly marked placeholder embed)
  const placeholderMapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118942.53127814986!2d40.3541620025219!3d21.285816916538356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e9894e6c99c8f1%3A0x6b4fb6c1f7bd89cb!2sTaif%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa";

  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-card border border-slate-100 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-brand flex-shrink-0" />
          <h4 className="font-bold text-slate-900 text-base md:text-base">{title}</h4>
        </div>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold text-brand hover:text-brand/80 transition-colors"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>فتح في الخرائط</span>
        </a>
      </div>

      <div className={`relative w-full ${heightClass} rounded-xl overflow-hidden bg-slate-100 shadow-inner`}>
        <iframe
          title="Google Map Embed Location"
          src={placeholderMapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full grayscale-[20%] contrast-[105%]"
        />
        {/* Helper badge indicating location */}
        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-slate-800 shadow-md border border-slate-200">
          📍 {doctorData.clinicAddress}
        </div>
      </div>
    </div>
  );
}
