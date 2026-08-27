import React from 'react';
import { Metadata } from 'next';
import AboutDoctorIntroSection from '@/components/about/AboutDoctorIntroSection';
import MediaAppearancesSection from '@/components/home/MediaAppearancesSection';
import AwardsGallerySection from '@/components/about/AwardsGallerySection';
import MedicalFeaturesSection from '@/components/home/MedicalFeaturesSection';
import AchievementsPressSection from '@/components/about/AchievementsPressSection';
import PatientTestimonialsSection from '@/components/home/PatientTestimonialsSection';
import AboutContactBlockSection from '@/components/about/AboutContactBlockSection';
import AboutTaglineCtaSection from '@/components/about/AboutTaglineCtaSection';

export const metadata: Metadata = {
  title: 'نبذة تعريفية | د. عبدالله الصواط',
  description:
    'المؤهلات والإنجازات الأكاديمية والمهنية للاستشاري د. عبدالله الصواط، رئيس قسم الجراحة بجامعة الطائف والزميل الكوري لجراحة القولون والمستقيم.',
};

export default function AboutPage() {
  return (
    <div className="space-y-12 md:space-y-20 pb-16">
      <div className="max-w-7xl mx-auto pt-24 md:pt-34 px-4 sm:px-6 lg:px-8 lg:py-34 space-y-16 md:space-y-24">
        {/* Doctor Introduction & Credentials */}
        <AboutDoctorIntroSection />

        {/* Media & TV Appearances */}
        <MediaAppearancesSection />

        {/* Recognition & Awards */}
        <AwardsGallerySection />

        {/* Care Standards & Medical Features */}
        <MedicalFeaturesSection />

        {/* Achievements & Press Mentions */}
        <AchievementsPressSection />

        {/* Patient Testimonials */}
        <PatientTestimonialsSection />

        {/* Contact Form & Information */}
        <AboutContactBlockSection />

        {/* Closing Tagline CTA */}
        <AboutTaglineCtaSection />
      </div>
    </div>
  );
}
