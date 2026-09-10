'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import FloatingHelpWidget from '@/components/FloatingHelpWidget';

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard');

  if (isDashboard) {
    return <main className="min-h-screen bg-slate-50">{children}</main>;
  }

  return (
    <>
      <div className="rounded-full">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
      <BackToTop />
      <FloatingHelpWidget />
    </>
  );
}
