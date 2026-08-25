'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { patientTestimonials } from '@/data/testimonials';
import TestimonialCard from '@/components/TestimonialCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFlip } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-flip';

export default function PatientTestimonialsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // التأكد من حجم الشاشة عند بدء تشغيل المكون
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // 640px هو نقطة التحول لشاشات sm
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-slate-900">
           شهادات المرضى
          </h2>
        </div>
      </div>

      <div className="relative space-y-4 mx-auto w-full max-w-sm sm:max-w-none">
        {/* Side Shadow Overlay Gradients */}
        <div className="hidden sm:block absolute right-0 top-0 bottom-16 w-8 h-full bg-gradient-to-l from-slate-50 via-slate-50/50 to-transparent z-10 pointer-events-none" />
        <div className="hidden sm:block absolute left-0 top-0 bottom-16 w-8 h-full bg-gradient-to-r from-slate-50 via-slate-50/50 to-transparent z-10 pointer-events-none" />

        <Swiper
          // نقوم بإعادة بناء المكون عند تغير نوع الشاشة لضمان تطبيق التأثير بشكل صحيح
          key={isMobile ? 'mobile' : 'desktop'}
          modules={[Autoplay, Pagination, Navigation, EffectFlip]}
          // تطبيق flip على الهاتف و slide على بقية الشاشات
          effect={isMobile ? 'flip' : 'slide'}
          grabCursor={true}
          speed={800}
          flipEffect={{
            slideShadows: false,
            limitRotation: true,
          }}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true, dynamicBullets: false }}
          navigation={{
            prevEl: '.custom-testimonial-prev',
            nextEl: '.custom-testimonial-next',
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="testimonials-swiper !pb-14 !pt-2 px-1"
        >
          {patientTestimonials.map((test) => (
            <SwiperSlide key={test.id} className="!h-auto">
              <TestimonialCard testimonial={test} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-center gap-10 md:gap-20 pt-0 z-20 relative">
          <button
            type="button"
            aria-label="السابق"
            className="custom-testimonial-prev w-10 h-10 rounded-full bg-navy border border-slate-200 shadow-md flex items-center justify-center text-white hover:bg-brand hover:text-slate-900 transition-all cursor-pointer active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="التالي"
            className="custom-testimonial-next w-10 h-10 rounded-full bg-navy border border-slate-200 shadow-md flex items-center justify-center text-white hover:bg-brand hover:text-slate-900 transition-all cursor-pointer active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
