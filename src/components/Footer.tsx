"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { doctorData } from "@/data/doctorData";
import { Send, CheckCircle2, Twitter, Instagram, MapPin, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-navy-950/95 text-slate-300 pt-16 pb-8 border-t border-brand/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Logo & Short Intro Tagline */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-50 h-18 overflow-hidden transition-transform group-hover:scale-105">
                <Image
                  src="/images/logo.png"
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
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href={doctorData.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-all text-[#1DA1F2]"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={doctorData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-[#e1306c] hover:text-white transition-all text-[#e1306c]"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: "عنا" Quick Links */}
          <div className="space-y-4">
            <h3 className="text-brand! font-bold text-base border-r-4 border-accent-gold pr-3">
              عنا
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-accent-gold transition-colors">
                  نبذة تعريفية ومؤهلات
                </Link>
              </li>
              <li>
                <Link href="/about#achievements" className="hover:text-accent-gold transition-colors">
                  الإنجازات والنشريات الطبية
                </Link>
              </li>
              <li>
                <Link href="/about#media" className="hover:text-accent-gold transition-colors">
                  اللقاءات والمشاركات
                </Link>
              </li>
              <li>
                <Link href="/appointments" className="hover:text-accent-gold transition-colors">
                  حجز المواعيد والاستشارات
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent-gold transition-colors">
                  موقع العيادة والتواصل
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: "الجراحات" Quick Links */}
          <div className="space-y-4">
            <h3 className="text-brand! font-bold text-base border-r-4 border-accent-gold pr-3">
              التخصصات والجراحات
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/colon-rectal-surgery" className="hover:text-accent-gold transition-colors">
                  جراحات القولون والمستقيم
                </Link>
              </li>
              <li>
                <Link href="/anal-surgery/pilonidal-sinus" className="hover:text-accent-gold transition-colors">
                  الناسور العصعصي (كيس الشعر)
                </Link>
              </li>
              <li>
                <Link href="/anal-surgery/anal-fissure" className="hover:text-accent-gold transition-colors">
                  الشرخ الشرجي
                </Link>
              </li>
              <li>
                <Link href="/anal-surgery/anal-fistula" className="hover:text-accent-gold transition-colors">
                  النواسير الشرجية
                </Link>
              </li>
              <li>
                <Link href="/anal-surgery/hemorrhoids" className="hover:text-accent-gold transition-colors">
                  البواسير الشرجية بالليزر
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Signup + Contact Snippet */}
          <div className="space-y-4">
            <h3 className="text-brand! font-bold text-base border-r-4 border-accent-gold pr-3">
              النشرة الطبية والاشتراك
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              اشترك للحصول على أحدث النصائح والتوعية الطبية حول صحة القولون والجهاز الهضمي.
            </p>

            {subscribed ? (
              <div className="bg-brand/10 border border-brand/40 rounded-xl p-3 flex items-center gap-2 text-brand text-xs">
                <CheckCircle2 className="w-5 h-5 text-accent-gold flex-shrink-0" />
                <span>شكراً لاشتراكك! سيوصلك كل جديد قريباً.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="بريدك الإلكتروني"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-900 border border-slate-800 text-white text-xs rounded-xl px-3 py-2.5 flex-1 focus:outline-none focus:border-brand"
                />
                <button
                  type="submit"
                  className="bg-brand hover:bg-brand/90 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1"
                >
                  <span>الإشتراك</span>
                  <Send className="w-3.5 h-3.5 scale-x-[-1]" />
                </button>
              </form>
            )}

            <div className="pt-2 space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent-gold" />
                <span>{doctorData.clinicAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-accent-gold" />
                <span>هاتف: {doctorData.phoneDisplay}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Credit Line */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} عيادة د. عبدالله الصواط. جميع الحقوق محفوظة.</p>
          <p className="text-slate-400">
            مجمع تداوي الجراحي الطبي بالطائف – استشاري الجراحة العامة والقولون والمستقيم
          </p>
        </div>
      </div>
    </footer>
  );
}
