import React from 'react';
import NewHero from '@/components/home/NewHero';
import DoctorSelectorSection from '@/components/home/DoctorSelectorSection';
import SpecialtyOverviewSection from '@/components/home/SpecialtyOverviewSection';
import GeneralConsultationsSection from '@/components/home/GeneralConsultationsSection';
import MediaAppearancesSection from '@/components/home/MediaAppearancesSection';
import WhatsAppBannerSection from '@/components/home/WhatsAppBannerSection';
import PatientTestimonialsSection from '@/components/home/PatientTestimonialsSection';
import MedicalFeaturesSection from '@/components/home/MedicalFeaturesSection';
import ClinicLocationFooterBlock from '@/components/home/ClinicLocationFooterBlock';
import AwardsGallerySection from '@/components/about/AwardsGallerySection';

export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-20 pb-16">
      {/* 1. Split Hero Section with Integrated Booking Request Card */}
      <NewHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        {/* 2. Doctor Selector Strip */}
        <DoctorSelectorSection />

        {/* 3. Specialty Overview */}
        <SpecialtyOverviewSection />

        {/* 4. General Consultations Section */}
        <GeneralConsultationsSection />

        {/* 5. Media & TV Appearances */}
        <MediaAppearancesSection />

        {/* 6. Awards Gallery */}
        <AwardsGallerySection />

        {/* 7. WhatsApp Consultation CTA Banner */}
        <WhatsAppBannerSection />

        {/* 8. Patient Testimonials */}
        <PatientTestimonialsSection />

        {/* 8. Care Standards & Medical Features */}
        <MedicalFeaturesSection />

        {/* 9. Location & Map Embed Block */}
        <ClinicLocationFooterBlock />
      </div>
    </div>
  );
}
