import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { doctorData } from '@/data/doctorData';
import ContactForm from '@/components/ContactForm';
import MapEmbed from '@/components/MapEmbed';

export default function AboutContactBlockSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-7">
        <ContactForm />
      </div>

      <div className="lg:col-span-5 space-y-6">
        <div className="bg-navy/95 text-white rounded-2xl p-6 shadow-card space-y-4">
          <h3 className="text-white! text-xl font-bold border-r-4 border-accent-gold pr-3">
            معلومات الاتصال المباشر
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent-gold flex-shrink-0 mt-1" />
              <div>
                <span className="font-bold block">العنوان:</span>
                <span className="text-slate-300 text-xs">
                  {doctorData.clinicAddress}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-accent-gold flex-shrink-0 mt-1" />
              <div>
                <span className="font-bold block">الهاتف للحجز:</span>
                <a
                  href={`tel:${doctorData.phoneRaw}`}
                  className="text-slate-300 text-xs dir-ltr block text-right hover:text-accent-gold"
                >
                  {doctorData.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-accent-gold flex-shrink-0 mt-1" />
              <div>
                <span className="font-bold block">البريد الإلكتروني:</span>
                <a
                  href={`mailto:${doctorData.email}`}
                  className="text-slate-300 text-xs hover:text-accent-gold"
                >
                  {doctorData.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <MapEmbed heightClass="h-[300px]" />
      </div>
    </section>
  );
}
