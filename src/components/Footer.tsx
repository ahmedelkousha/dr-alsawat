'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { doctorData } from '@/data/doctorData';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  MapPin,
  Phone,
  Loader2,
} from 'lucide-react';
import { FaInstagram, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubscribed(true);
        setEmail('');
      } else {
        setError(data.message || 'حدث خطأ أثناء الاشتراك');
      }
    } catch (err) {
      console.error('Subscription error:', err);
      setError('حدث خطأ في الاتصال بالخادم');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-navy text-slate-300 pt-16 pb-8 border-t border-brand/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-300/10">
          {/* Column 1: Logo & Short Intro Tagline */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <div className="relative w-50 h-18">
                <Image
                  src="/images/logo-dark.png"
                  alt={doctorData.name}
                  fill
                  className="object-contain object-right"
                />
              </div>
            </Link>

            <div className="space-y-1">
              {/* <h4 className="text-xs font-bold text-accent-gold uppercase tracking-wider">
                {doctorData.taglineHeader}
              </h4> */}
              <p className="text-sm text-slate-400 leading-relaxed">
                {doctorData.taglineContent}
              </p>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={doctorData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-accent-whatsapp hover:text-white transition-all text-accent-whatsapp"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href={doctorData.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-black hover:text-white transition-all text-white"
                aria-label="X"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a
                href={doctorData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-[#e1306c] hover:text-white transition-all text-[#e1306c]"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: "عنا" Quick Links */}
          <div className="space-y-4">
            <h3 className="text-accent-gold! font-bold text-base border-r-4 border-accent-gold pr-3">
              عن {doctorData.name}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent-gold transition-colors"
                >
                  نبذة تعريفية ومؤهلات
                </Link>
              </li>
              <li>
                <Link
                  href="/about#achievements"
                  className="hover:text-accent-gold transition-colors"
                >
                  الإنجازات والنشريات الطبية
                </Link>
              </li>
              <li>
                <Link
                  href="/about#media"
                  className="hover:text-accent-gold transition-colors"
                >
                  اللقاءات والمشاركات
                </Link>
              </li>
              <li>
                <Link
                  href="/appointments"
                  className="hover:text-accent-gold transition-colors"
                >
                  حجز المواعيد والاستشارات
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent-gold transition-colors"
                >
                  موقع العيادة والتواصل
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: "الجراحات" Quick Links */}
          <div className="space-y-4">
            <h3 className="text-accent-gold! font-bold text-base border-r-4 border-accent-gold pr-3">
              التخصصات والجراحات
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/colon-surgery"
                  className="hover:text-accent-gold transition-colors"
                >
                  جراحات القولون
                </Link>
              </li>
              <li>
                <Link
                  href="/rectal-surgery"
                  className="hover:text-accent-gold transition-colors"
                >
                  جراحات المستقيم
                </Link>
              </li>
              <li>
                <Link
                  href="/anal-surgery/pilonidal-sinus"
                  className="hover:text-accent-gold transition-colors"
                >
                  الناسور العصعصي (كيس الشعر)
                </Link>
              </li>
              <li>
                <Link
                  href="/anal-surgery/anal-fissure"
                  className="hover:text-accent-gold transition-colors"
                >
                  الشرخ الشرجي
                </Link>
              </li>
              <li>
                <Link
                  href="/anal-surgery/anal-fistula"
                  className="hover:text-accent-gold transition-colors"
                >
                  النواسير الشرجية
                </Link>
              </li>
              <li>
                <Link
                  href="/anal-surgery/hemorrhoids"
                  className="hover:text-accent-gold transition-colors"
                >
                  البواسير الشرجية بالليزر
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Signup + Contact Snippet */}
          <div className="space-y-4">
            <h3 className="text-accent-gold! font-bold text-base border-r-4 border-accent-gold pr-3">
              نشرتي الطبية
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              اشترك لتصلك أحدث نصائحي وتوعياتي الطبية حول صحة القولون والجهاز
              الهضمي.
            </p>

            {subscribed ? (
              <div className="bg-brand/10 border border-brand/40 rounded-xl p-3 flex items-center gap-2 text-brand text-xs">
                <CheckCircle2 className="w-5 h-5 text-accent-gold flex-shrink-0" />
                <span>شكراً لاشتراكك! سيوصلك كل جديد قريباً.</span>
              </div>
            ) : (
              <>
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="بريدك الإلكتروني"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError(null);
                    }}
                    className="bg-slate-900 border border-slate-800 text-white text-xs rounded-xl px-3 py-2.5 flex-1 focus:outline-none focus:border-brand"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-accent-gold hover:bg-accent-goldHover disabled:opacity-50 text-slate-900 text-xs font-bold px-4 py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer min-w-[85px]"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <span>الإشتراك</span>
                        <Send className="w-3.5 h-3.5 scale-x-[-1]" />
                      </>
                    )}
                  </button>
                </form>

                {error && (
                  <div className="flex items-center gap-2 text-xs text-red-400 pt-1">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}
              </>
            )}

            <div className="pt-2 space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent-gold" />
                <span>{doctorData.clinicAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent-gold" />
                <span>هاتف: {doctorData.phoneDisplay}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Credit Line */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © {new Date().getFullYear()} عيادة د. عبدالله الصواط. جميع الحقوق
            محفوظة.
          </p>
          {/* <p className="text-slate-400">
            مجمع تداوي الجراحي الطبي بالطائف – استشاري الجراحة العامة والقولون
            والمستقيم
          </p> */}
        </div>
      </div>
    </footer>
  );
}