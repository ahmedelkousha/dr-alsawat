"use client";

import React, { useState } from "react";
import Link from "next/link";
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
} from "lucide-react";
import { doctorData } from "@/data/doctorData";
import MapEmbed from "@/components/MapEmbed";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function AppointmentsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredDay: "الأحد",
    preferredTime: "6:00 مساءً - 7:00 مساءً",
    reason: "",
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

  return (
    <div className="space-y-12 md:space-y-20 pb-16">
      {/* Page Hero Banner */}
      <section className="bg-navy-950/95 text-white py-14 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right space-y-4">
          <div className="inline-block bg-accent-gold/20 text-accent-gold text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-accent-gold/30">
            {/* <Calendar className="w-4 h-4 text-accent-gold" /> */}
            <span>حجز المواعيد والاستشارات</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white!">حجز موعد بالعيادة</h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            احجز موعد استشارتك مع {doctorData.name} بسهولة وسرعة عبر الواتساب المباشر، الاتصال، أو النموذج الإلكتروني.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
        {/* Working Hours & Quick Action Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Working Hours */}
          <div className="bg-white rounded-3xl p-6 shadow-card border border-slate-100 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-brand/20 text-brand flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">أوقات العمل المتاحة</h3>
            <p className="text-brand-700 font-bold text-base">{doctorData.workingHours}</p>
            <p className="text-xs text-slate-500 leading-relaxed">
              تتاح الاستشارات والكشوفات الطبية بمجمع تداوي الجراحي الطبي بالطائف.
            </p>
          </div>

          {/* Card 2: WhatsApp Quick Booking CTA */}
          <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white rounded-3xl p-6 shadow-card space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                <WhatsAppIcon className="w-6 h-6 text-accent-whatsapp" />
              </div>
              <h3 className="font-bold text-lg">حجز فوري عبر الواتساب</h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                تواصل مباشر مع منسق العيادة لاختيار أنسب وقت وتأكيد الموعد فوراً.
              </p>
            </div>
            <a
              href={doctorData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-sm py-3 rounded-xl shadow transition-colors text-center inline-flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-accent-whatsapp" />
              <span>احجز عبر الواتساب الان</span>
            </a>
          </div>

          {/* Card 3: Click-to-Call */}
          <div className="bg-navy-950/95 text-white rounded-3xl p-6 shadow-card space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-accent-gold" />
              </div>
              <h3 className="text-white! font-bold text-lg">الاتصال المباشر بالحجز</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                اتصل بنا هاتفياً خلال ساعات الدوام للإجابة عن تساؤلاتك وتأكيد حجزك.
              </p>
            </div>
            <a
              href={`tel:${doctorData.phoneRaw}`}
              className="w-full bg-accent-gold hover:bg-accent-goldHover text-slate-900 font-bold text-sm py-3 rounded-xl shadow transition-colors text-center inline-flex items-center justify-center gap-2 dir-ltr"
            >
              <Phone className="w-4 h-4" />
              <span>للحجز: {doctorData.phoneDisplay}</span>
            </a>
          </div>
        </section>

        {/* Appointment Form & Reassurance Box */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 shadow-card border border-slate-100 space-y-6">
            <div className="space-y-2 border-r-4 border-brand-500 pr-3">
              <h2 className="text-2xl font-bold text-slate-900">نموذج طلب موعد إلكتروني</h2>
              <p className="text-xs text-slate-600">
                عبئ البيانات وسيقوم فريق العيادة بالاتصال بك لتأكيد الموعد النهائي.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-emerald-900">تم استلام طلبك بنجاح!</h3>
                <p className="text-xs text-emerald-800">
                  سيتواصل معك فريق مجمع تداوي الجراحي قريباً لتأكيد اليوم والوقت المحدد.
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
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, preferredDay: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    >
                      <option value="الأحد">الأحد (6:00 مساءً - 8:00 مساءً)</option>
                      <option value="الثلاثاء">الثلاثاء (6:00 مساءً - 8:00 مساءً)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      الوقت المفضل
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    >
                      <option value="6:00 مساءً - 7:00 مساءً">6:00 مساءً - 7:00 مساءً</option>
                      <option value="7:00 مساءً - 8:00 مساءً">7:00 مساءً - 8:00 مساءً</option>
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
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-base py-3.5 rounded-xl shadow transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>جاري إرسال الطلب...</span>
                    </>
                  ) : (
                    <>
                      <span>تأكيد طلب الموعد</span>
                      <Send className="w-4 h-4 rotate-180" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Reassurance Copy & Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* Emergency Reassurance */}
            <div className="bg-rose-50 border border-rose-200 rounded-3xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-rose-800 font-bold text-base">
                <AlertTriangle className="w-5 h-5 text-rose-600" />
                <span>حالات الطوارئ والآلام الحادة</span>
              </div>
              <p className="text-xs text-rose-900 leading-relaxed">
                في حال وجود ألم حاد غير محتمل، أو نزيف شديد متواصل، يرجى التوجه فوراً إلى قسم الطوارئ بمجمع تداوي الجراحي أو الاتصال المباشر برقم العيادة.
              </p>
              <a
                href={`tel:${doctorData.phoneRaw}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 hover:text-rose-900"
              >
                <span>اتصل بطوارئ العيادة: {doctorData.phoneDisplay}</span>
              </a>
            </div>

            {/* Quality Reassurance */}
            <div className="bg-white rounded-3xl p-6 shadow-card border border-slate-100 space-y-3">
              <div className="flex items-center gap-2 text-brand-700 font-bold">
                <ShieldCheck className="w-5 h-5 text-brand-600" />
                <span>خصوصية ورعاية فائقة</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                جميع بياناتك ومعلوماتك الطبية تحظى بأعلى مستويات الخصوصية والسرية التامة وفق المعايير الطبية المعتمدة.
              </p>
            </div>

            <MapEmbed heightClass="h-[280px]" />
          </div>
        </section>
      </div>
    </div>
  );
}
