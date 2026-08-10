import React from "react";
import { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Twitter,
  Instagram,
  Globe,
} from "lucide-react";
import { doctorData } from "@/data/doctorData";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";

export const metadata: Metadata = {
  title: "اتصل بنا | د. عبدالله الصواط",
  description: "معلومات الاتصال، موقع مجمع تداوي الجراحي الطبي بالطائف، وأرقام التواصل المباشرة مع عيادة د. عبدالله الصواط.",
};

export default function ContactPage() {
  return (
    <div className="space-y-12 md:space-y-20 pb-16">
      {/* Page Hero Banner */}
      <section className="bg-navy-950/95 text-white py-14 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right space-y-4">
          <div className="inline-block bg-accent-gold/20 text-accent-gold text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-accent-gold/30">
            {/* <Globe className="w-4 h-4 text-accent-gold" /> */}
            <span>التواصل والموقع</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white!">اتصل بنا</h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            نسعد بالتواصل معكم والإجابة على كافة استفساراتكم عبر قنوات التواصل المتعددة أو زيارة العيادة بمجمع تداوي الجراحي بالطائف.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
        {/* Contact Info Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Address Card */}
          <div className="bg-white rounded-3xl p-6 shadow-card border border-slate-100 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">عنوان العيادة</h3>
            <p className="text-sm text-slate-700 font-semibold">{doctorData.clinicName}</p>
            <p className="text-xs text-brand leading-relaxed">{doctorData.clinicAddress}</p>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-3xl p-6 shadow-card border border-slate-100 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">أرقام التواصل والحجز</h3>
            <a
              href={`tel:${doctorData.phoneRaw}`}
              className="text-brand-700 font-bold text-lg dir-ltr block text-right hover:text-brand-900 transition-colors"
            >
              للحجز: {doctorData.phoneDisplay}
            </a>
            <p className="text-xs text-brand">متاح خلال ساعات عمل العيادة</p>
          </div>

          {/* Email & Hours Card */}
          <div className="bg-white rounded-3xl p-6 shadow-card border border-slate-100 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">البريد وساعات العمل</h3>
            <a
              href={`mailto:${doctorData.email}`}
              className="text-xs font-semibold text-slate-700 hover:text-brand-600 block"
            >
              {doctorData.email}
            </a>
            <div className="flex items-center gap-1.5 text-xs text-brand font-bold pt-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{doctorData.workingHours}</span>
            </div>
          </div>
        </section>

        {/* Form + Map & Social Links */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <ContactForm
              title="ارسل رسالة مباشرة للعيادة"
              subtitle="يسعدنا استقبال استفساراتك وسيقوم الفريق الطبي بالمتابعة معك."
            />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-navy-900 text-white rounded-3xl p-6 md:p-8 shadow-card space-y-4">
              <h3 className="text-white! text-xl font-bold border-r-4 border-accent-gold pr-3">
                تابعنا على قنوات التواصل
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                لمتابعة أحدث التوعيات والنصائح الطبية من الاستشاري د. عبدالله الصواط:
              </p>

              <div className="flex flex-col gap-3 pt-2">
                <a
                  href={doctorData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-accent-whatsapp/20 hover:bg-accent-whatsapp text-white p-3 rounded-xl transition-all border border-accent-whatsapp/30"
                >
                  <MessageCircle className="w-5 h-5 text-accent-whatsapp hover:text-white" />
                  <span className="text-sm font-bold">محادثة الواتساب المباشرة</span>
                </a>

                <a
                  href={doctorData.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-slate-800 hover:bg-brand-500 text-white p-3 rounded-xl transition-all border border-slate-700"
                >
                  <Twitter className="w-5 h-5" />
                  <span className="text-sm font-bold">منصة تويتر / X</span>
                </a>

                <a
                  href={doctorData.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-slate-800 hover:bg-pink-600 text-white p-3 rounded-xl transition-all border border-slate-700"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm font-bold">إنستغرام العيادة</span>
                </a>
              </div>
            </div>

            <MapEmbed heightClass="h-[320px]" />
          </div>
        </section>
      </div>
    </div>
  );
}
