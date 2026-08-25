import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Home, Calendar, SearchX, ArrowLeft } from 'lucide-react';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: '404 - الصفحة غير موجودة | د. عبدالله الصواط',
  description: 'عفواً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.',
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-26 md:py-44">
      <div className="max-w-2xl w-full text-center space-y-8 bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-slate-100 relative overflow-hidden">
        {/* Decorative Top Gold Border */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-navy via-brand to-accent-gold" />

        {/* Simple Medical 404 Badge & Icon */}
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-brand/10 text-brand border border-brand/20">
            <SearchX className="w-10 h-10 sm:w-12 sm:h-12 animate-bounce" />
          </div>
          {/* <div className="inline-block px-3 py-1 bg-navy text-accent-gold text-xs font-bold rounded-full">
            خطأ 404
          </div> */}
        </div>

        {/* Heading & Simple Text */}
        <div className="space-y-2 max-w-lg mx-auto">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900">
            الصفحة غير موجودة
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            عفواً، الصفحة التي تحاول الوصول إليها غير موجودة أو قد تم نقلها. يمكنك العودة للصفحة الرئيسية أو الانتقال لحجز موعد.
          </p>
        </div>

        {/* Action Buttons matching site theme */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button
            href="/"
            size="sm"
            variant="navy"
            icon={<Home className="w-4 h-4 text-accent-gold" />}
          >
            الصفحة الرئيسية
          </Button>

          <Button
            href="/appointments"
            size="sm"
            variant="primary"
            icon={<Calendar className="w-4 h-4" />}
          >
            حجز موعد
          </Button>
        </div>

        {/* Simple Navigation Links */}
        <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-600">
          <Link href="/about" className="hover:text-brand transition-colors bg-slate-100 text-navy p-3 rounded-xl">
            نبذة عن الدكتور
          </Link>
          {/* <span className="text-slate-300">•</span> */}
          <Link href="/colon-surgery" className="hover:text-brand transition-colors bg-slate-100 text-navy p-3 rounded-xl">
            جراحات القولون
          </Link>
          {/* <span className="text-slate-300">•</span> */}
          <Link href="/rectal-surgery" className="hover:text-brand transition-colors bg-slate-100 text-navy p-3 rounded-xl">
            جراحات المستقيم
          </Link>
          {/* <span className="text-slate-300">•</span> */}
          <Link href="/contact" className="hover:text-brand transition-colors bg-slate-100 text-navy p-3 rounded-xl">
            تواصل معنا
          </Link>
        </div>
      </div>
    </div>
  );
}
