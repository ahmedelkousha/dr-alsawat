import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import DoctorSelectorSection from '@/components/home/DoctorSelectorSection';
import SpecialtyOverviewSection from '@/components/home/SpecialtyOverviewSection';
import GeneralConsultationsSection from '@/components/home/GeneralConsultationsSection';
import MedicalFeaturesSection from '@/components/home/MedicalFeaturesSection';
import WorkingHoursWidgetSection from '@/components/home/WorkingHoursWidgetSection';
import DoctorBioStripSection from '@/components/home/DoctorBioStripSection';
import MedicalNewsSection from '@/components/home/MedicalNewsSection';
import PatientTestimonialsSection from '@/components/home/PatientTestimonialsSection';
import ClinicLocationFooterBlock from '@/components/home/ClinicLocationFooterBlock';
import { EmergencyBanner, WhatsAppBanner } from '@/components/CTASection';
import NewHero from '@/components/home/NewHero';

export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-20 pb-16">
      {/* 1. Split Hero Section with Integrated Booking Request Card */}
      <NewHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        {/* 2. Emergency Booking Banner */}
        <EmergencyBanner />

        {/* 3. Doctor Selector Strip */}
        <DoctorSelectorSection />

        {/* 4. Specialty Overview */}
        <SpecialtyOverviewSection />

        {/* 5. General Consultations Section */}
        <GeneralConsultationsSection />

        {/* 6. Medical Features Section */}
        <MedicalFeaturesSection />

        {/* 7. Working Hours Widget */}
        <WorkingHoursWidgetSection />

        {/* 8. WhatsApp Consultation CTA Banner */}
        <WhatsAppBanner />

        {/* 9. Doctor Bio Strip */}
        <DoctorBioStripSection />

        {/* 10. Medical News Section */}
        <MedicalNewsSection />

        {/* 11. Patient Testimonials */}
        <PatientTestimonialsSection />

        {/* 12. Location & Map Embed Block */}
        <ClinicLocationFooterBlock />
      </div>
    </div>
  );
}
