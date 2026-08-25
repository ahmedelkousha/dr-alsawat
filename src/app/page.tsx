import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import DoctorSelectorSection from '@/components/home/DoctorSelectorSection';
import SpecialtyOverviewSection from '@/components/home/SpecialtyOverviewSection';
import GeneralConsultationsSection from '@/components/home/GeneralConsultationsSection';
import { mediaAppearancesData } from '@/data/achievements';
import PatientTestimonialsSection from '@/components/home/PatientTestimonialsSection';
import ClinicLocationFooterBlock from '@/components/home/ClinicLocationFooterBlock';
import { EmergencyBanner, WhatsAppBanner } from '@/components/CTASection';
import NewHero from '@/components/home/NewHero';
import { Video } from 'lucide-react';
import MedicalFeaturesSection from '@/components/home/MedicalFeaturesSection';

export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-20 pb-16">
      {/* 1. Split Hero Section with Integrated Booking Request Card */}
      <NewHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        {/* 2. Emergency Booking Banner */}
        {/* <EmergencyBanner /> */}

        {/* 3. Doctor Selector Strip */}
        <DoctorSelectorSection />

        {/* 4. Specialty Overview */}
        <SpecialtyOverviewSection />

        {/* 5. General Consultations Section */}
        <GeneralConsultationsSection />

        {/* اللقاءات (Media Appearances) */}
        <section id="media" className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2">
              {/* <Video className="w-6 h-6 text-brand-600" /> */}
              <h2 className="text-xl md:text-3xl font-bold text-slate-900">
                اللقاءات والمشاركات التلفزيونية
              </h2>
            </div>
            {/* <span className="text-xs text-slate-500 font-medium">
              ميديا وفيديو
            </span> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-navy px-5 md:py-16 py-14 rounded-3xl">
            {mediaAppearancesData.map((media) => (
              <div
                key={media.id}
                className="bg-white rounded-2xl p-6 shadow-card border border-slate-100 space-y-4"
              >
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-900 shadow-md">
                  {media.embedUrl ? (
                    <iframe
                      src={media.embedUrl}
                      title={media.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white">
                      <Video className="w-12 h-12 text-brand-400 animate-pulse" />
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs text-brand font-bold mb-1">
                    <span>{media.event}</span>
                    <span>{media.year}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">
                    {media.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Working Hours Widget */}
        {/* <WorkingHoursWidgetSection /> */}

        {/* 8. WhatsApp Consultation CTA Banner */}
        <WhatsAppBanner />

        {/* 9. Doctor Bio Strip */}
        {/* <DoctorBioStripSection /> */}

        {/* 10. Medical News Section */}
        {/* <MedicalNewsSection /> */}

        {/* 11. Patient Testimonials */}
        <PatientTestimonialsSection />

        <MedicalFeaturesSection />

        {/* 12. Location & Map Embed Block */}
        <ClinicLocationFooterBlock />
      </div>
    </div>
  );
}
