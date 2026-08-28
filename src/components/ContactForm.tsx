'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import Button from '@/components/Button';
import { doctorData } from '@/data/doctorData';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
}

export default function ContactForm({
  title = 'ارسل استفسارك لـ د. عبدالله الصواط',
  subtitle = 'سيتم استقبال استفسارك وتحويلك لمحادثة الواتساب مع د. عبدالله الصواط لتنسيق زيارتك للعيادة.',
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // Client-side validation
    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        type: 'error',
        message:
          'يرجى ملء جميع الحقول المطلوبة (الاسم الكامل، رقم الهاتف، وتفاصيل الاستفسار).',
      });
      setLoading(false);
      return;
    }

    try {
      const messageText = `السلام عليكم ورحمة الله وبركاته،

أرغب في الاستفسار وتنسيق موعد لعيادة د. عبدالله الصواط:

• الاسم الكامل: ${formData.name.trim()}
• رقم الجوال: ${formData.phone.trim()}${formData.email.trim() ? `\n• البريد الإلكتروني: ${formData.email.trim()}` : ''}

• تفاصيل الاستفسار:
${formData.message.trim()}`;

      const encodedText = encodeURIComponent(messageText);
      const targetWhatsAppNumber = doctorData.whatsappNumber || '966535479054';
      const whatsappUrl = `https://wa.me/${targetWhatsAppNumber}?text=${encodedText}`;

      // Open WhatsApp link with prefilled message
      window.open(whatsappUrl, '_blank');

      setStatus({
        type: 'success',
        message:
          'تم تجهيز الاستفسار وتحويلك لمحادثة الواتساب مع د. عبدالله الصواط بنجاح!',
      });

      // Clear form
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus({
        type: 'error',
        message:
          'حدث خطأ أثناء فتح الواتساب. يرجى استخدام أرقام التواصل المباشرة.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-slate-100">
      <div className="mb-6 space-y-2">
        <h3
          className={`text-lg sm:text-2xl font-bold text-slate-900 border-r-4 border-accent-whatsapp pr-3`}
        >
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {status && (
        <div
          className={`p-4 rounded-xl mb-6 flex items-start gap-3 text-sm ${
            status.type === 'success'
              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
              : 'bg-rose-50 text-rose-800 border border-rose-200'
          }`}
        >
          {status.type === 'success' ? (
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
            <label
              htmlFor="name"
              className="block text-xs font-bold text-slate-700 mb-1.5"
            >
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
              className="w-full bg-slate-50 border border-slate-200 rounded-lg sm:px-4 sm:py-2.5 px-1.5 py-1.5 text-slate-800 text-sm focus:outline-none focus:ring-1 focus:ring-brand focus:bg-white transition-all"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-bold text-slate-700 mb-1.5"
            >
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
              className="w-full bg-slate-50 border border-slate-200 rounded-lg sm:px-4 sm:py-2.5 px-1.5 py-1.5 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all dir-ltr text-right"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            البريد الإلكتروني (اختياري)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@domain.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg sm:px-4 sm:py-2.5 px-1.5 py-1.5 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            تفاصيل الاستفسار أو الحالة <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="اكتب استفسارك أو تفاصيل حالتك لتنسيق الموعد..."
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg sm:px-4 sm:py-2.5 px-1.5 py-1.5 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all resize-y"
          />
        </div>

        <Button
          type="submit"
          variant="whatsapp"
          size="sm"
          fullWidth
          loading={loading}
          icon={<FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />}
          iconPosition="right"
        >
          {loading
            ? 'جاري التحويل للواتساب...'
            : 'إرسال عبر الواتساب'}
        </Button>
      </form>
    </div>
  );
}
