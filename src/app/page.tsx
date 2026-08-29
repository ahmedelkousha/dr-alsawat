import React from 'react';
import { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import DoctorIntroSection from '@/components/home/DoctorIntroSection';
import SpecialtyOverviewSection from '@/components/home/SpecialtyOverviewSection';
import GeneralConsultationsSection from '@/components/home/GeneralConsultationsSection';
import MediaAppearancesSection from '@/components/home/MediaAppearancesSection';
import WhatsAppBannerSection from '@/components/home/WhatsAppBannerSection';
import PatientTestimonialsSection from '@/components/home/PatientTestimonialsSection';
import MedicalFeaturesSection from '@/components/home/MedicalFeaturesSection';
import ClinicLocationFooterBlock from '@/components/home/ClinicLocationFooterBlock';
import AwardsGallerySection from '@/components/about/AwardsGallerySection';
import { doctorData } from '@/data/doctorData';
import MedicalNewsSection from '@/components/home/MedicalNewsSection';

export const metadata: Metadata = {
  title: `${doctorData.name} | ${doctorData.title}`,

  description: doctorData.subtitle,
  keywords: [
    'دكتور عبدالله الصواط',
    'استشاري قولون ومستقيم بالطائف',
    'رئيس قسم الجراحة بجامعة الطائف',
    'جراحة عامة الطائف',
    'علاج البواسير بالليزر',
    'الناسور العصعصي',
    'الشرخ الشرجي',
    'مجمع تداوي الجراحي',
  ],
  openGraph: {
    title: `${doctorData.name} | ${doctorData.title}`,
    description: doctorData.subtitle,
    url: 'https://dralsawat.com',
    siteName: doctorData.name,
    images: ['/images/og-image.png'],
  },
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Surgeon',
    medicalSpecialty: 'Colorectal Surgery',
    name: doctorData.name,
    jobTitle: doctorData.title,
    description: doctorData.doctorBioSummary,
    url: 'https://dralsawat.com',
    image: 'https://dralsawat.com/images/alsawat-pic.jpeg',
    telephone: doctorData.drNumber,
    worksFor: {
      '@type': 'MedicalOrganization',
      name: doctorData.clinicName,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'الطائف',
      addressCountry: 'SA',
      streetAddress: doctorData.clinicAddress,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday', 'Tuesday'],
        opens: '17:00',
        closes: '20:00',
      },
    ],
  };

  return (
    <div className="space-y-12 md:space-y-20 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Split Hero Section with Integrated Booking Request Card */}
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        {/* 2. Doctor Selector Strip */}
        <DoctorIntroSection />

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
