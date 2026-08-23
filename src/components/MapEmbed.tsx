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

  // const directMapUrl =
  //   "https://maps.google.com/?q=21.261043,40.4086335";

  return (
    <div className="bg-navy rounded-2xl px-4 py-6 shadow-card border border-slate-100 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-brand flex-shrink-0" />
          <h4 className="font-bold text-slate-300! text-sm md:text-base">{title}</h4>
        </div>
        {/* <a
          href={directMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold text-brand hover:text-brand/80 transition-colors"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>فتح في الخرائط</span>
        </a> */}
      </div>

      <div className={`relative w-full ${heightClass} rounded-xl overflow-hidden bg-slate-100 shadow-inner`}>
        <iframe
          title="Google Map Embed Location"
          src={doctorData.clinicLocationIframe}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full grayscale-[20%] contrast-[105%]"
        />
        {/* Helper badge indicating location */}
        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-2 py-1.5 rounded-lg text-xs font-bold text-slate-800 shadow-md border border-slate-200">
          📍 {doctorData.clinicAddress}
        </div>
      </div>
    </div>
  );
}
