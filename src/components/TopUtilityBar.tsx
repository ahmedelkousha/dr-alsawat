'use client';

import React from 'react';
import { Clock, Phone, Mail, MapPin, Twitter, Instagram } from 'lucide-react';
import { doctorData } from '@/data/doctorData';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function TopUtilityBar() {
  return (
    <div className="bg-navy-secondary text-slate-200 text-xs md:text-sm py-2.5 px-4 block rounded-t-[12px]">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-3">
        {/* Right side in RTL: Working Hours & Clinic Name */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-6">
          <div className="flex items-center gap-1.5 text-slate-300 font-medium">
            <Clock className="w-4 h-4 text-primary" />
            <span className='sm:text-xs text-[0.65rem]'>{doctorData.workingHours}</span>
          </div>
          <div className="hidden xl:flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{doctorData.clinicName}</span>
          </div>
        </div>

        {/* Left side in RTL: Phone, Email, Socials */}
        <div className="flex items-center gap-4 lg:gap-6">
          <a
            href={`tel:${doctorData.phoneRaw}`}
            className="hidden items-center gap-1.5 hover:text-accent-gold transition-colors font-medium dir-ltr sm:flex"
            title="اتصل بنا للحجز"
          >
            <Phone className="w-3.5 h-3.5 text-primary" />
            <span>للحجز: {doctorData.phoneDisplay}</span>
          </a>

          <a
            href={`mailto:${doctorData.email}`}
            className="hidden md:flex items-center gap-1.5 hover:text-accent-gold transition-colors text-slate-300"
          >
            <Mail className="w-3.5 h-3.5 text-primary" />
            <span>{doctorData.email}</span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-2 border-r border-slate-800 pr-3 mr-1">
            <a
              href={doctorData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full bg-accent-whatsapp/20 hover:bg-accent-whatsapp text-accent-whatsapp hover:text-white transition-all flex items-center justify-center"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={doctorData.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full bg-slate-900 hover:bg-[#1DA1F2] text-slate-300 hover:text-white transition-all flex items-center justify-center"
              aria-label="Twitter"
            >
              <Twitter className="w-3 h-3" />
            </a>
            <a
              href={doctorData.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full bg-slate-900 hover:bg-[#e1306c] text-slate-300 hover:text-white transition-all flex items-center justify-center"
              aria-label="Instagram"
            >
              <Instagram className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
