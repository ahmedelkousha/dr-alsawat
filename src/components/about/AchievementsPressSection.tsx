'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ExternalLink, ChevronRight, ChevronLeft } from 'lucide-react';
import { achievementsData } from '@/data/achievements';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';
import { useResponsive } from '@/hooks/useResponsive';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function AchievementsPressSection() {
  const isMobile = useResponsive();
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section id="achievements" className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900">
            الإنجازات والنشرات الصحفية
          </h2>
        </div>
      </div>

      <div className="relative space-y-4 mx-auto w-full">
        <Swiper
          key={isMobile ? 'mobile' : 'desktop'}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect={isMobile ? 'fade' : 'slide'}
          fadeEffect={{
            crossFade: true,
          }}
          grabCursor={true}
          speed={isMobile ? 1400 : 1500}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: isMobile ? 600 : 800,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true, dynamicBullets: false }}
          navigation={{
            prevEl: '.custom-achievements-prev',
            nextEl: '.custom-achievements-next',
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
          className="achievements-swiper !pb-14 !pt-2 px-1"
        >
          {/* Side Shadow Overlay Gradients */}
          <div className="hidden sm:block absolute right-0 top-0 bottom-16 w-8 h-full bg-gradient-to-l from-slate-50 via-slate-50/40 to-transparent z-10 pointer-events-none" />
          <div className="hidden sm:block absolute left-0 top-0 bottom-16 w-8 h-full bg-gradient-to-r from-slate-50 via-slate-50/50 to-transparent z-10 pointer-events-none" />

          {achievementsData.map((item) => (
            <SwiperSlide key={item.id} className="!h-auto">
              <div className="h-auto pb-0 px-0 shadow-card space-y-0 text-center flex flex-col justify-between hover:shadow-card-hover transition-all">
                <a
                  href={item.articleUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-60 sm:h-66 rounded-t-3xl overflow-hidden cursor-pointer group/img block"
                >
                  <Image
                    src={item.imageUrl || '/images/logo-dark.jpg'}
                    alt={item.title}
                    fill
                    className="object-cover group-hover/img:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1.5 backdrop-blur-[2px]">
                    <ExternalLink className="w-5 h-5 text-accent-gold" />
                    <span>قراءة المقال</span>
                  </div>
                </a>
                <div className="space-y-1 mb-auto h-auto bg-navy py-5 rounded-b-3xl">
                  <h3 className="font-bold text-slate-200! text-base leading-snug px-3">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brand font-semibold">
                    {item.publisher} {item.date && `– ${item.date}`}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-center gap-10 md:gap-20 pt-0 z-20 relative">
          <button
            type="button"
            aria-label="السابق"
            className="custom-achievements-prev w-10 h-10 rounded-full bg-navy border border-slate-200 shadow-md flex items-center justify-center text-white hover:bg-brand hover:text-slate-900 transition-all cursor-pointer active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="التالي"
            className="custom-achievements-next w-10 h-10 rounded-full bg-navy border border-slate-200 shadow-md flex items-center justify-center text-white hover:bg-brand hover:text-slate-900 transition-all cursor-pointer active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
