"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import Button from "@/components/Button";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
}

export default function ContactForm({
  title = "ارسل لنا رسالتك",
  subtitle = "تواصل مباشر مع عيادة د. عبدالله الصواط وسيقوم فريقنا بالرد عليك بأسرع وقت.",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // Client-side quick check
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setStatus({
        type: "error",
        message: "يرجى ملء جميع الحقول المطلوبة (الاسم الكامل، رقم الهاتف، والرسالة).",
      });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          type: "success",
          message: data.message || "تم إرسال رسالتك بنجاح! سنتم المتابعة معك قريباً.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.message || "حدث خطأ أثناء إرسال النموذج. يرجى المحاولة لاحقاً.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "عذراً، تعذر الاتصال بالخادم. يرجى التحقق من الاتصال والمحاولة مجدداً.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-slate-100">
      <div className="mb-6 space-y-2">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 border-r-4 border-brand pr-3">
          {title}
        </h3>
        {subtitle && <p className="text-sm text-slate-600">{subtitle}</p>}
      </div>

      {status && (
        <div
          className={`p-4 rounded-xl mb-6 flex items-start gap-3 text-sm ${
            status.type === "success"
              ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
              : "bg-rose-50 text-rose-800 border border-rose-200"
          }`}
        >
          {status.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
          )}
          <span>{status.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-xs font-bold text-slate-700 mb-1.5">
              الاسم الكامل <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="مثال: عبدالله محمد"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1.5">
              رقم الهاتف / الجوال <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="05XXXXXXXX"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all dir-ltr text-right"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1.5">
            البريد الإلكتروني (اختياري)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@domain.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1.5">
            تفاصيل الاستفسار أو السبب <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="اكتب استفسارك الطبي أو تفاصيل حالتك باختصار..."
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all resize-y"
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          loading={loading}
          icon={<Send className="w-4 h-4 scale-x-[-1]" />}
          iconPosition="right"
        >
          {loading ? "جاري الإرسال..." : "إرسال الرسالة"}
        </Button>
      </form>
    </div>
  );
}
