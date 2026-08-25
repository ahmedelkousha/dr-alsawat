'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, Calendar, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { doctorData } from '@/data/doctorData';
import Button from '@/components/Button';
import TopUtilityBar from './TopUtilityBar';

export interface NavItem {
  title: string;
  href: string;
  children?: { title: string; href: string }[];
}

export const navItems: NavItem[] = [
  { title: 'الصفحة الرئيسية', href: '/' },
  { title: 'نبذة تعريفية', href: '/about' },
  { title: 'جراحات القولون', href: '/colon-surgery' },
  { title: 'جراحات المستقيم', href: '/rectal-surgery' },
  {
    title: 'جراحات المنطقة الشرجية',
    href: '/anal-surgery',
    children: [
      { title: 'الناسور العصعصي', href: '/anal-surgery/pilonidal-sinus' },
      { title: 'الشرخ الشرجي', href: '/anal-surgery/anal-fissure' },
      { title: 'النواسير الشرجية', href: '/anal-surgery/anal-fistula' },
      { title: 'البواسير الشرجية', href: '/anal-surgery/hemorrhoids' },
    ],
  },
  { title: 'الحجز', href: '/appointments' },
  { title: 'تواصل معنا', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [analDropdownOpen, setAnalDropdownOpen] = useState(false);
  const [mobileAnalOpen, setMobileAnalOpen] = useState(false);

  // Close mobile drawer when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isAnalActive = pathname.startsWith('/anal-surgery');
  const isHomePage = pathname === '/';

  return (
    <div className="fixed top-5 md:top-8 inset-x-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-50">
      {isHomePage && <TopUtilityBar />}
      {/* Sticky Navigation Header Bar */}
      <header
        className={`z-40 bg-white/95 backdrop-blur-md shadow-sm ${isHomePage ? 'rounded-b-[12px]' : 'rounded-xl'}`}
      >
        <div className="max-w-[110rem] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 md:py-1.5">
          <div className="flex xl:flex-row flex-row-reverse items-center justify-between">
            {/* Logo */}
            <Link href="/" className="focus:outline-none inline-block">
              <div className="relative w-34 sm:w-46 md:w-57.5 h-10 sm:h-12 md:h-16 overflow-hidden">
                <Image
                  src="/images/logo.webp"
                  alt={doctorData.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation from Array */}
            <nav className="hidden xl:flex items-center gap-1 xl:gap-2 mx-auto">
              {navItems.map((item) => {
                if (item.children) {
                  return (
                    <div
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => setAnalDropdownOpen(true)}
                      onMouseLeave={() => setAnalDropdownOpen(false)}
                    >
                      <button
                        type="button"
                        className={`relative flex items-center gap-1 px-2 py-2 rounded-lg text-xs 2xl:text-sm font-semibold transition-colors ${
                          isAnalActive
                            ? 'text-brand'
                            : 'text-slate-700 hover:text-brand hover:bg-slate-50/60'
                        }`}
                      >
                        {isAnalActive && (
                          <motion.div
                            layoutId="activeHeaderNav"
                            className="absolute inset-0 bg-brand/10 rounded-lg border-b-2 border-brand"
                            transition={{
                              type: 'spring',
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}
                        <span className="relative z-10">{item.title}</span>
                        <ChevronDown
                          className={`relative z-10 w-4 h-4 transition-transform duration-200 ${
                            analDropdownOpen ? 'rotate-180 text-brand' : ''
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {analDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full right-0 w-60 pt-2 z-50"
                          >
                            <div className="bg-white rounded-xl shadow-xl border border-brand/20 py-2 overflow-hidden">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={`block px-4 py-2.5 text-sm transition-colors ${
                                    pathname === child.href
                                      ? 'bg-brand/10 text-brand border-r-4 border-brand'
                                      : 'text-slate-700 hover:bg-slate-50 hover:text-brand'
                                  }`}
                                >
                                  {child.title}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-2 py-2 rounded-lg text-xs 2xl:text-sm font-semibold transition-colors ${
                      isActive
                        ? 'text-brand'
                        : 'text-slate-700 hover:text-brand hover:bg-slate-50/60'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeHeaderNav"
                        className="absolute inset-0 bg-brand/10 rounded-lg border-b-2 border-brand"
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.title}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="flex flex-row-reverse xl:flex-row gap-3">
              {/* Header Action Button (Desktop) */}
              <div className="flex items-center gap-3">
                <Button
                  className="2xl:text-sm text-xs hidden sm:inline-flex bg-[#09153f]"
                  href="/appointments"
                  variant="navy"
                  size="md"
                  icon={<Calendar className="w-4 h-4 text-gold" />}
                >
                  احجز موعداً
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex items-center justify-end w-fit xl:hidden">
                {/* <a
                href={`tel:${doctorData.phoneRaw}`}
                className="p-2 rounded-lg bg-brand/10 text-brand hover:bg-brand/20 transition-colors flex items-center gap-1 text-xs font-bold"
                aria-label="Call Doctor"
              >
                <Phone className="w-4 h-4" />
                <span>اتصال للحجز</span>
              </a> */}

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none flex items-center gap-1.5"
                  aria-label="Toggle Navigation Menu"
                >
                  <span className="text-xs font-bold">القائمة</span>
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6 text-brand" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* RTL Mobile Drawer Menu with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 xl:hidden">
            {/* Backdrop Fade */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-navy/70 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer Content Slide in from Right */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 280 }}
              className="fixed inset-y-0 right-0 w-[70vw] sm:w-[40vw] bg-white shadow-2xl z-50 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                {/* Drawer Header */}
                <div className="p-4 border-b border-slate-100 flex flex-row-reverse items-center justify-between bg-navy text-white">
                  <div className="relative w-44 h-12">
                    <Image
                      src="/images/logo.webp"
                      alt={doctorData.name}
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Drawer Links from Array */}
                <nav className="p-4 space-y-1">
                  {navItems.map((item) => {
                    if (item.children) {
                      return (
                        <div key={item.href} className="space-y-1">
                          <button
                            onClick={() => setMobileAnalOpen(!mobileAnalOpen)}
                            className={`${isAnalActive ? 'bg-brand/10! text-brand!' : 'text-slate-600! hover:bg-slate-50! hover:text-brand!'} w-full flex items-center justify-between px-4 py-3 rounded-lg font-semibold text-base text-slate-700 hover:bg-slate-50`}
                          >
                            <span>{item.title}</span>
                            <ChevronDown
                              className={`w-5 h-5 transition-transform ${
                                mobileAnalOpen ? 'rotate-180 text-brand' : ''
                              }`}
                            />
                          </button>

                          <AnimatePresence>
                            {mobileAnalOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="pr-4 space-y-1 border-r-2 border-brand/30 mr-4 overflow-hidden"
                              >
                                {item.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                                      pathname === child.href
                                        ? 'bg-brand/10 text-brand'
                                        : 'text-slate-600 hover:bg-slate-50 hover:text-brand'
                                    }`}
                                  >
                                    {child.title}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-3 rounded-lg font-semibold text-base transition-colors ${
                          pathname === item.href
                            ? 'bg-brand/10 text-brand'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {item.title}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Mobile Drawer Footer CTA */}
              <div className="p-4 border-t border-slate-100 space-y-2 bg-slate-50">
                <Button
                  href="/appointments"
                  variant="navy"
                  fullWidth
                  icon={<Calendar className="w-4 h-4 text-brand" />}
                >
                  حجز موعد عيادة
                </Button>
                <Button
                  href={doctorData.whatsappUrl}
                  variant="whatsapp"
                  fullWidth
                  target="_blank"
                >
                  استشارة عبر الواتساب
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
