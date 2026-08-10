"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Calendar, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { doctorData } from "@/data/doctorData";
import Button from "@/components/Button";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [analDropdownOpen, setAnalDropdownOpen] = useState(false);
  const [mobileAnalOpen, setMobileAnalOpen] = useState(false);

  // Close mobile drawer when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const analSurgeryChildren = [
    { title: "الناسور العصعصي", href: "/anal-surgery/pilonidal-sinus" },
    { title: "الشرخ الشرجي", href: "/anal-surgery/anal-fissure" },
    { title: "النواسير الشرجية", href: "/anal-surgery/anal-fistula" },
    { title: "البواسير الشرجية", href: "/anal-surgery/hemorrhoids" },
  ];

  const isAnalActive = pathname.startsWith("/anal-surgery");
  return (
    <>
      {/* 1. Top Section: Prominent Logo Banner */}
      <div className={`${pathname === '/' ? 'block' : 'hidden'} bg-white py-4 md:py-6 border-b border-slate-100 flex items-center justify-center`}>
        <Link href="/" className="group focus:outline-none inline-block">
          <div className="relative w-64 sm:w-80 md:w-[380px] h-16 sm:h-20 md:h-16 overflow-hidden transition-transform group-hover:scale-105">
            <Image
              src="/images/logo.png"
              alt={doctorData.name}
              fill
              className="object-contain object-center"
              priority
            />
          </div>
        </Link>
      </div>

      {/* 2. Sticky Navigation Header Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 md:py-3">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 mx-auto">
              <Link
                href="/"
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  pathname === "/"
                    ? "text-brand bg-brand/10 font-bold border-b-2 border-brand"
                    : "text-slate-700 hover:text-brand hover:bg-slate-50"
                }`}
              >
                الصفحة الرئيسية
              </Link>

              <Link
                href="/about"
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  pathname === "/about"
                    ? "text-brand bg-brand/10 font-bold border-b-2 border-brand"
                    : "text-slate-700 hover:text-brand hover:bg-slate-50"
                }`}
              >
                نبذة تعريفية
              </Link>

              <Link
                href="/colon-rectal-surgery"
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  pathname === "/colon-rectal-surgery"
                    ? "text-brand bg-brand/10 font-bold border-b-2 border-brand"
                    : "text-slate-700 hover:text-brand hover:bg-slate-50"
                }`}
              >
                جراحات القولون والمستقيم
              </Link>

              {/* Dropdown parent: Anal Region Surgeries */}
              <div
                className="relative"
                onMouseEnter={() => setAnalDropdownOpen(true)}
                onMouseLeave={() => setAnalDropdownOpen(false)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isAnalActive
                      ? "text-brand bg-brand/10 font-bold border-b-2 border-brand"
                      : "text-slate-700 hover:text-brand hover:bg-slate-50"
                  }`}
                >
                  <span>جراحات المنطقة الشرجية</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      analDropdownOpen ? "rotate-180 text-brand" : ""
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
                        {analSurgeryChildren.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-2.5 text-sm transition-colors ${
                              pathname === child.href
                                ? "bg-brand/10 text-brand font-bold border-r-4 border-brand"
                                : "text-slate-700 hover:bg-slate-50 hover:text-brand"
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

              <Link
                href="/appointments"
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  pathname === "/appointments"
                    ? "text-brand bg-brand/10 font-bold border-b-2 border-brand"
                    : "text-slate-700 hover:text-brand hover:bg-slate-50"
                }`}
              >
                المواعيد
              </Link>

              <Link
                href="/contact"
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  pathname === "/contact"
                    ? "text-brand bg-brand/10 font-bold border-b-2 border-brand"
                    : "text-slate-700 hover:text-brand hover:bg-slate-50"
                }`}
              >
                اتصل بنا
              </Link>
            </nav>

            {/* Header Action Button (Desktop) */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                href="/appointments"
                variant="primary"
                size="md"
                icon={<Calendar className="w-4 h-4 text-slate-900" />}
              >
                احجز موعداً
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center justify-between w-full lg:hidden">
              <a
                href={`tel:${doctorData.phoneRaw}`}
                className="p-2 rounded-lg bg-brand/10 text-brand hover:bg-brand/20 transition-colors flex items-center gap-1 text-xs font-bold"
                aria-label="Call Doctor"
              >
                <Phone className="w-4 h-4" />
                <span>اتصال للحجز</span>
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none flex items-center gap-1.5"
                aria-label="Toggle Navigation Menu"
              >
                <span className="text-xs font-bold">القائمة</span>
                {mobileMenuOpen ? <X className="w-6 h-6 text-brand" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* RTL Mobile Drawer Menu with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop Fade */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer Content Slide in from Right */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 280 }}
              className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-white shadow-2xl z-50 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                {/* Drawer Header */}
                <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-navy-950 text-white">
                  <div className="relative w-44 h-12">
                    <Image
                      src="/images/logo.png"
                      alt={doctorData.name}
                      fill
                      className="object-contain object-right"
                    />
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Drawer Links */}
                <nav className="p-4 space-y-1">
                  <Link
                    href="/"
                    className={`block px-4 py-3 rounded-lg font-semibold text-base transition-colors ${
                      pathname === "/"
                        ? "bg-brand/10 text-brand font-bold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    الصفحة الرئيسية
                  </Link>

                  <Link
                    href="/about"
                    className={`block px-4 py-3 rounded-lg font-semibold text-base transition-colors ${
                      pathname === "/about"
                        ? "bg-brand/10 text-brand font-bold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    نبذة تعريفية
                  </Link>

                  <Link
                    href="/colon-rectal-surgery"
                    className={`block px-4 py-3 rounded-lg font-semibold text-base transition-colors ${
                      pathname === "/colon-rectal-surgery"
                        ? "bg-brand/10 text-brand font-bold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    جراحات القولون والمستقيم
                  </Link>

                  {/* Mobile Accordion for Anal Region Surgeries */}
                  <div className="space-y-1">
                    <button
                      onClick={() => setMobileAnalOpen(!mobileAnalOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-semibold text-base text-slate-700 hover:bg-slate-50"
                    >
                      <span>جراحات المنطقة الشرجية</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          mobileAnalOpen ? "rotate-180 text-brand" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {mobileAnalOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pr-4 space-y-1 border-r-2 border-brand/30 mr-4 overflow-hidden"
                        >
                          {analSurgeryChildren.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                                pathname === child.href
                                  ? "bg-brand/10 text-brand font-bold"
                                  : "text-slate-600 hover:bg-slate-50 hover:text-brand"
                              }`}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    href="/appointments"
                    className={`block px-4 py-3 rounded-lg font-semibold text-base transition-colors ${
                      pathname === "/appointments"
                        ? "bg-brand/10 text-brand font-bold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    المواعيد
                  </Link>

                  <Link
                    href="/contact"
                    className={`block px-4 py-3 rounded-lg font-semibold text-base transition-colors ${
                      pathname === "/contact"
                        ? "bg-brand/10 text-brand font-bold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    اتصل بنا
                  </Link>
                </nav>
              </div>

              {/* Mobile Drawer Footer CTA */}
              <div className="p-4 border-t border-slate-100 space-y-2 bg-slate-50">
                <Button
                  href="/appointments"
                  variant="primary"
                  fullWidth
                  icon={<Calendar className="w-4 h-4 text-slate-900" />}
                >
                  حجز موعد عيادة
                </Button>
                <Button
                  href={doctorData.whatsappUrl}
                  variant="whatsapp"
                  fullWidth
                  target="_blank"
                >
                  استشارة واتساب عاجلة
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
