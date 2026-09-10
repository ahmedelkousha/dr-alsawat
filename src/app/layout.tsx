import type { Metadata, Viewport } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import './globals.css';
import QueryProvider from '@/components/providers/QueryProvider';
import ConditionalLayout from '@/components/ConditionalLayout';
import { doctorData } from '@/data/doctorData';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://dralsawat.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: `${doctorData.name} | ${doctorData.title}`,
    template: `%s | ${doctorData.name}`,
  },
  description: doctorData.subtitle,
  keywords: [
    'دكتور عبدالله الصواط',
    'استشاري قولون ومستقيم بالطائف',
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
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1024,
        height: 576,
        alt: `${doctorData.name} - ${doctorData.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${doctorData.name} | ${doctorData.title}`,
    description: doctorData.subtitle,
    images: ['/images/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="ar" dir="rtl">
      {gtmId && <GoogleTagManager gtmId={gtmId} />}
      <body className="font-cairo flex flex-col justify-between bg-slate-50 text-slate-800 antialiased min-h-screen">
        <QueryProvider>
          <ConditionalLayout>{children}</ConditionalLayout>
        </QueryProvider>
      </body>
    </html>
  );
}
