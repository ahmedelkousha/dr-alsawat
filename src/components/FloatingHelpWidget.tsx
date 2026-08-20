'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  HelpCircle,
  X,
  Phone,
  Globe,
  MapPin,
  Clock,
  ExternalLink,
  ChevronLeft,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { doctorData } from '@/data/doctorData';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function FloatingHelpWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Close widget when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        widgetRef.current &&
        !widgetRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={widgetRef} className="fixed bottom-6 right-6 z-50 font-cairo">
      {/* Help Popover Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="absolute bottom-16 right-0 w-[80vw] max-h-[440px] md:max-h-[500px] sm:w-96 bg-white rounded-3xl shadow-2xl border border-brand overflow-hidden text-right"
          >
            {/* Header */}
            <div className="bg-navy text-white md:p-5 p-3 relative overflow-hidden flex items-center justify-between">
              <div className="flex items-center gap-3 z-10">
                <div className="w-10 h-10 rounded-2xl bg-brand/20 border border-brand/40 text-accent-gold flex items-center justify-center">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-white!">
                    مركز المساعدة والتواصل
                  </h3>
                  <p className="text-xs text-slate-300">
                    عيادة د. عبدالله الصواط
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="z-10 p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="إغلاق النافذة"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Communication Details Body */}
            <div className="p-4 space-y-3 bg-slate-50/50">
              {/* Option 1: Direct Online Booking via Tadawi Portal */}
              <a
                href={doctorData.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between md:p-3.5 p-1.5 rounded-2xl bg-white hover:bg-brand/5 border border-slate-200/80 hover:border-brand/70 text-slate-800 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand/10 text-accent-gold flex items-center justify-center">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-sm block">
                      حجز إلكتروني مباشر
                    </span>
                    <span className="text-[11px] text-slate-500">
                      عبر موقع مجمع تداوي الطبي
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-accent-gold" />
              </a>

              {/* Option 2: WhatsApp Consultation */}
              <a
                href={doctorData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between md:p-3.5 p-1.5 rounded-2xl bg-white hover:bg-emerald-50/50 border border-slate-200/80 hover:border-emerald-300 text-slate-800 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <WhatsAppIcon className="w-5 h-5 text-accent-whatsapp" />
                  </div>
                  <div>
                    <span className="font-bold text-sm block">
                      استشارة عبر الواتساب
                    </span>
                    <span className="text-[11px] text-slate-500">
                      تواصل مباشر وتأكيد سريع
                    </span>
                  </div>
                </div>
                <ChevronLeft className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
              </a>

              {/* Option 3: Phone Direct Booking */}
              <a
                href={`tel:${doctorData.phoneRaw}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between md:p-3.5 p-1.5 rounded-2xl bg-white hover:bg-brand/5 border hover:border-brand/70 border-slate-200/80 text-slate-800 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-sm block dir-ltr text-right">
                      {doctorData.phoneDisplay}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      الاتصال هاتفياً للحجز
                    </span>
                  </div>
                </div>
                <ChevronLeft className="w-4 h-4 text-slate-400 group-hover:text-brand transition-colors" />
              </a>

              {/* Option 4: Working Hours & Location Summary */}
              <div className="md:p-3.5 p-1.5 rounded-2xl bg-slate-100 border border-slate-200/60 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2 font-semibold text-slate-800">
                  <Clock className="w-4 h-4 text-brand flex-shrink-0" />
                  <span>أوقات العمل: {doctorData.workingHours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent-gold flex-shrink-0" />
                  <span>{doctorData.clinicAddress}</span>
                </div>
              </div>

              {/* Navigation Link to Contact Page */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex flex-row items-center justify-center gap-0.5 text-center text-xs font-bold text-brand hover:text-brand-700 py-1 transition-colors"
              >
                <span>صفحة التواصل والمعلومات الكاملة</span>
                <ChevronLeft className="w-4 h-4 text-slate-400 group-hover:text-brand transition-colors" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button (FAB) Container with Ping Ring */}
      <div className="relative inline-block">
        {!isOpen && (
          <span className="absolute inset-x-8 inset-y-1 rounded-full bg-brand/60 animate-ping opacity-75 pointer-events-none" />
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="مركز المساعدة والتواصل"
          className={`relative flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 border focus:outline-none ${
            isOpen
              ? 'bg-navy text-white border-brand/50'
              : 'bg-brand hover:bg-brand-900 text-white border-accent-gold/40'
          }`}
        >
          <div className="relative flex items-center justify-center">
            <HelpCircle className={`${isOpen? 'text-brand':'text-white'} w-6 h-6`} />
           
          </div>
          <span className="text-white text-sm font-bold hidden sm:inline">
            {isOpen ? 'إغلاق المساعدة' : 'المساعدة والتواصل'}
          </span>
        </button>
      </div>
    </div>
  );
}
