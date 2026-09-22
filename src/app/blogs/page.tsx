import React from 'react';
import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import BlogListingClient from '@/components/blog/BlogListingClient';
import { getPublishedBlogs } from '@/lib/blogService';
import { doctorData } from '@/data/doctorData';

export const revalidate = 60; // ISR fallback every 60 seconds

export const metadata: Metadata = {
  title: `المدونة الطبية والجراحية | ${doctorData.name}`,
  description:
    'مقالات طبية وإرشادات صحية موثوقة في جراحة القولون والمستقيم وعلاج أمراض الشرج بالليزر بقلم د. عبدالله الصواط.',
  alternates: {
    canonical: 'https://www.dralsawat.com/blogs',
  },
  openGraph: {
    title: `المدونة الطبية | ${doctorData.name}`,
    description:
      'مقالات طبية وإرشادات صحية موثوقة في جراحة القولون والمستقيم وعلاج أمراض الشرج بالليزر.',
    url: 'https://www.dralsawat.com/blogs',
    siteName: doctorData.name,
    images: ['/images/og-image.png'],
  },
};

export default async function BlogsPage() {
  const blogs = await getPublishedBlogs();

  return (
    <div className="space-y-12 pb-20">
      <PageHero
        title="المدونة الطبية والمقالات"
        subtitle="معلومات طبية موثوقة ومقالات إرشادية حول جراحات القولون والمستقيم وأحدث تقنيات الليزر وجراحة المناظير."
        imgURL="/images/blogs-hero.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogListingClient initialBlogs={blogs} />
      </div>
    </div>
  );
}
