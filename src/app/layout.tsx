import type { Metadata, Viewport } from "next";
import "./globals.css";
import TopUtilityBar from "@/components/TopUtilityBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppFloatingBtn from "@/components/WhatsAppFloatingBtn";
import { doctorData } from "@/data/doctorData";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: `${doctorData.name} | ${doctorData.title}`,
    template: `%s | ${doctorData.name}`,
  },
  description: doctorData.subtitle,
  keywords: [
    "دكتور عبدالله الصواط",
    "استشاري قولون ومستقيم بالطائف",
    "جراحة عامة الطائف",
    "علاج البواسير بالليزر",
    "الناسور العصعصي",
    "الشرخ الشرجي",
    "مجمع تداوي الجراحي",
  ],
  openGraph: {
    title: `${doctorData.name} | ${doctorData.title}`,
    description: doctorData.subtitle,
    url: "https://dralsawat-saudi.vercel.app",
    siteName: doctorData.name,
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1024,
        height: 576,
        alt: `${doctorData.name} - ${doctorData.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${doctorData.name} | ${doctorData.title}`,
    description: doctorData.subtitle,
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-cairo min-h-screen flex flex-col justify-between bg-slate-50 text-slate-800 antialiased">
        <div>
          <TopUtilityBar />
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
        <BackToTop />
        <WhatsAppFloatingBtn />
      </body>
    </html>
  );
}
