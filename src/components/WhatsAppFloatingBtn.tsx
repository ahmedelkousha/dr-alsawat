"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { doctorData } from "@/data/doctorData";

export default function WhatsAppFloatingBtn() {
  return (
    <a
      href={doctorData.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر الواتساب"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-accent-whatsapp hover:bg-accent-whatsappDark text-white px-4 py-3 rounded-full shadow-floating transition-all duration-300 hover:scale-105 group"
    >
      <FaWhatsapp className="w-6 h-6 animate-pulse" />
      <span className="text-sm font-bold hidden md:inline">استشارة واتساب</span>
    </a>
  );
}
