import React from 'react';
import Link from 'next/link';
import { Calendar, MessageCircle, ShieldCheck, ArrowLeft } from 'lucide-react';
import { doctorData } from '@/data/doctorData';
import Button from '@/components/Button';

interface RelatedServiceCardProps {
  relatedServiceSlug?: string;
  category?: string;
}

const SERVICE_LINKS: Record<string, { title: string; href: string }> = {
  hemorrhoids: {
    title: 'علاج البواسير الشرجية بالليزر',
    href: '/anal-surgery/hemorrhoids',
  },
  'anal-fissure': {
    title: 'علاج الشرخ الشرجي',
    href: '/anal-surgery/anal-fissure',
  },
  'anal-fistula': {
    title: 'علاج النواسير الشرجية',
    href: '/anal-surgery/anal-fistula',
  },
  'pilonidal-sinus': {
    title: 'علاج الناسور العصعصي بالليزر',
    href: '/anal-surgery/pilonidal-sinus',
  },
  'colon-surgery': {
    title: 'جراحات القولون المتقدمة بالمنظار',
    href: '/colon-surgery',
  },
  'rectal-surgery': {
    title: 'جراحات المستقيم المتخصصة',
    href: '/rectal-surgery',
  },
};

export default function RelatedServiceCard({
  relatedServiceSlug,
  category,
}: RelatedServiceCardProps) {
  const service = relatedServiceSlug ? SERVICE_LINKS[relatedServiceSlug] : null;

  return (
    <div className="my-10 bg-navy text-white rounded-3xl p-6 shadow-floating relative overflow-hidden border border-brand/20">
      

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-right">
          {/* <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand/10 text-accent-gold text-xs font-bold border border-brand/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>رعاية جراحية متخصصة ومتقدمة</span>
          </div> */}

          <h3 className="text-base sm:text-xl font-bold text-slate-300!">
            {service
              ? `هل تعاني من أعراض مشابهة؟ احجز استشارتك في ${service.title}`
              : 'هل تحتاج إلى استشارة جراحية دقيقة من د. عبدالله الصواط؟'}
          </h3>

          <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
            نقدم أحدث التقنيات طفيفة التوغل واستخدام الليزر والجراحة بالمنظار لضمان التعافي السريع وبأقل درجات الألم.
          </p>

          {service && (
            <div className="pt-2">
              <Link
                href={service.href}
                className="inline-flex items-center gap-1 text-xs text-accent-gold hover:underline font-semibold"
              >
                <span>تعرف على تفاصيل الإجراء الجراحي</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto shrink-0">
          <Button
            href="/appointments"
            variant="primary"
            target='_blank'
            size="sm"
            icon={<Calendar className="w-4 h-4" />}
            className="w-full md:w-auto justify-center"
          >
            حجز موعد بالعيادة
          </Button>

          <Button
            href={doctorData.whatsappUrl}
            target="_blank"
            variant="whatsapp"
            size="sm"
            icon={<MessageCircle className="w-4 h-4" />}
            className="w-full md:w-auto justify-center"
          >
            استشارة واتساب
          </Button>
        </div>
      </div>
    </div>
  );
}
