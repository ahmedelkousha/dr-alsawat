'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  Phone,
  MessageCircle,
  CheckCircle2,
  AlertTriangle,
  Send,
  Loader2,
  MapPin,
  ShieldCheck,
  ExternalLink,
  Globe,
} from 'lucide-react';
import Button from '@/components/Button';
import { doctorData } from '@/data/doctorData';
import MapEmbed from '@/components/MapEmbed';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import PageHero from '@/components/PageHero';

import AppointmentQuickCard, {
  AppointmentQuickCardProps,
} from '@/components/AppointmentQuickCard';

export default function AppointmentsPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredDay: 'الأحد',
    preferredTime: '6:00 مساءً - 7:00 مساءً',
    reason: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate booking POST
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const quickCardsData: AppointmentQuickCardProps[] = [
    {
      icon: <Clock className="w-6 h-6 text-accent-gold" />,
      title: 'أوقات العمل المتاحة',
      description:
        'نستقبل المراجعين للاستشارات والكشوفات بمجمع تداوي الجراحي كل أحد وثلاثاء من الساعة 6-8 مساءً.',
      buttonText: 'موقع العيادة',
      buttonHref: doctorData.clinicLocationURL,
      buttonIcon: <MapPin className="w-4 h-4 text-slate-900" />,
    },
    {
      icon: <Phone className="w-6 h-6 text-accent-gold" />,
      title: 'الاتصال المباشر للحجز',
      description:
        'اتصل بالمجمع هاتفياً خلال ساعات الدوام للإجابة عن تساؤلاتك وتأكيد حجزك.',
      buttonText: 'اتصل للحجز',
      buttonHref: `tel:${doctorData.phoneRaw}`,
      buttonIcon: <Phone className="w-4 h-4 text-slate-900" />,
    },
    {
      icon: <WhatsAppIcon className="w-6 h-6 text-accent-whatsapp" />,
      title: 'حجز فوري عبر الواتساب',
      description:
        'تواصل مباشر مع مجمع تداوي الجراحي لاختيار موعدك المناسب للحجز.',
      buttonText: 'تواصل عبر الواتساب',
      buttonHref: doctorData.whatsappUrl,
      buttonIcon: <WhatsAppIcon className="w-4 h-4 text-accent-whatsapp" />,
      containerClassName:
        'bg-emerald-700/85 text-white rounded-3xl p-4 shadow-sm border border-brand/10 flex flex-col justify-between space-y-4',
      descriptionClassName: 'text-xs text-slate-200 leading-relaxed',
      buttonClassName: 'bg-white/85 hover:bg-emerald-200',
    },
    {
      icon: <Globe className="w-6 h-6 text-accent-gold" />,
      title: 'حجز إلكتروني مباشر',
      description:
        'حجز موعدك مباشرة عبر البوابة الإلكترونية المعتمدة لمجمع تداوي الجراحي الطبي.',
      buttonText: 'الحجز من خلال موقع مجمع',
      buttonHref: doctorData.bookingUrl,
      buttonIcon: <ExternalLink className="w-4 h-4" />,
    },
  ];

  return (
    <div className="space-y-12 md:space-y-20 pb-16">
      {/* Page Hero Banner */}
      <PageHero
        title="حجز موعد بالعيادة"
        subtitle={`احجز موعد استشارتك مع ${doctorData.name} بسهولة وسرعة من خلال التواصل مع مجمع تداوي الجراحي في الطائف عبر الواتساب، الاتصال، موقع المجمع الرسمي أو زيارة العيادة بالمجمع.`}
        imgURL='/images/appointments-hero.jpeg'
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
        {/* Working Hours & Quick Action Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
          {quickCardsData.map((card, idx) => (
            <AppointmentQuickCard key={idx} {...card} />
          ))}
        </section>

        {/* Appointment Form & Reassurance Box */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 shadow-card border border-slate-100 space-y-6">
            <div className="space-y-2 border-r-4 border-brand-500 pr-3">
              <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-slate-900">
                نموذج طلب موعد إلكتروني
              </h2>
              <p className="text-xs text-slate-600">
                عبئ البيانات وسيقوم فريق العيادة بالاتصال بك لتأكيد الموعد
                النهائي.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-emerald-900">
                  تم استلام طلبك بنجاح!
                </h3>
                <p className="text-xs text-emerald-800">
                  سيتواصل معك فريق مجمع تداوي الجراحي قريباً لتأكيد اليوم والوقت
                  المحدد.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-brand-600 text-white text-xs font-bold px-4 py-2 rounded-lg mt-2"
                >
                  إرسال طلب آخر
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      الاسم الكامل <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="اسم المريض"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      رقم الجوال <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="05XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 dir-ltr text-right"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      اليوم المفضل
                    </label>
                    <select
                      value={formData.preferredDay}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preferredDay: e.target.value,
                        })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    >
                      <option value="الأحد">
                        الأحد (6:00 مساءً - 8:00 مساءً)
                      </option>
                      <option value="الثلاثاء">
                        الثلاثاء (6:00 مساءً - 8:00 مساءً)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      الوقت المفضل
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preferredTime: e.target.value,
                        })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    >
                      <option value="6:00 مساءً - 7:00 مساءً">
                        6:00 مساءً - 7:00 مساءً
                      </option>
                      <option value="7:00 مساءً - 8:00 مساءً">
                        7:00 مساءً - 8:00 مساءً
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    سبب الزيارة أو الحالة المرضية
                  </label>
                  <textarea
                    rows={3}
                    placeholder="مثال: استشارة بواسير، فحص القولون، مراجعة بعد الجراحة..."
                    value={formData.reason}
                    onChange={(e) =>
                      setFormData({ ...formData, reason: e.target.value })
                    }
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent-gold hover:bg-accent-goldHover text-slate-900 font-bold text-base py-3.5 rounded-xl shadow transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>جاري إرسال الطلب...</span>
                    </>
                  ) : (
                    <>
                      <span>تأكيد طلب الموعد</span>
                      <Send className="w-4 h-4 -rotate-90" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          
          <div className="lg:col-span-5 space-y-6">
            {/* <div className="bg-rose-50 border border-rose-200 rounded-3xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-rose-800 font-bold text-base">
                <AlertTriangle className="w-5 h-5 text-rose-600" />
                <span>حالات الطوارئ والآلام الحادة</span>
              </div>
              <p className="text-xs text-rose-900 leading-relaxed">
                في حال وجود ألم حاد غير محتمل، أو نزيف شديد متواصل، يرجى التوجه
                فوراً إلى قسم الطوارئ بمجمع تداوي الجراحي أو الاتصال المباشر
                برقم العيادة.
              </p>
              <a
                href={`tel:${doctorData.phoneRaw}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 hover:text-rose-900"
              >
                <span>اتصل بطوارئ العيادة: {doctorData.phoneDisplay}</span>
              </a>
            </div> */}

            {/* Quality Reassurance */}
            {/* <div className="bg-white rounded-3xl p-6 shadow-card border border-slate-100 space-y-3">
              <div className="flex items-center gap-2 text-brand-700 font-bold">
                <ShieldCheck className="w-5 h-5 text-brand-600" />
                <span>خصوصية ورعاية فائقة</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                جميع بياناتك ومعلوماتك الطبية تحظى بأعلى مستويات الخصوصية
                والسرية التامة وفق المعايير الطبية المعتمدة.
              </p>
            </div> */}

            <MapEmbed heightClass="h-[280px]" />
          </div>
        </section>
      </div>
    </div>
  );
}
