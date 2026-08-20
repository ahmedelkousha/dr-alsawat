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
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.2632932861693!2d40.4086335!3d21.261043000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e98eb82bbdb16b%3A0x40874d68021c207c!2sMedications%20new%20surgical%20center!5e0!3m2!1sen!2seg!4v1787102797490!5m2!1sen!2seg";

  // const directMapUrl =
  //   "https://maps.google.com/?q=21.261043,40.4086335";

  return (
    <div className="bg-white rounded-2xl p-2 md:p-4 shadow-card border border-slate-100 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-brand flex-shrink-0" />
          <h4 className="font-bold text-slate-900 text-sm md:text-base">{title}</h4>
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
          src={mapEmbedUrl}
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
