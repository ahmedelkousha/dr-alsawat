'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronRight, ChevronLeft, ZoomIn, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { awardsData } from '@/data/achievements';
import { AwardItem } from '@/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFlip, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';
import { useResponsive } from "@/hooks/useResponsive";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function AwardsGallerySection() {
  const isMobile = useResponsive();
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);
  const swiperRef = useRef<SwiperClass | null>(null);

  
  // Escape key closes the lightbox
  useEffect(() => {
    if (!selectedAward) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedAward(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedAward]);

  // Pause autoplay while the lightbox is open, resume when it closes
  useEffect(() => {
    if (!swiperRef.current) return;

    if (selectedAward) {
      swiperRef.current.autoplay.stop();
    } else {
      swiperRef.current.autoplay.start();
    }
  }, [selectedAward]);

  // Lock background scroll while the lightbox is open
  useEffect(() => {
    document.body.style.overflow = selectedAward ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedAward]);

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900">
            التكريم وشهادات التميز
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
            crossFade:true,
          }}
          grabCursor={true}
          speed={isMobile? 1800:1400}
          flipEffect={{
            slideShadows: false,
            limitRotation: true,
          }}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: isMobile ? 600 : 800,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true, dynamicBullets: false }}
          navigation={{
            prevEl: '.custom-awards-prev',
            nextEl: '.custom-awards-next',
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
          {/* Side Shadow Overlay Gradients */}
          <div className="hidden sm:block absolute right-0 top-0 bottom-16 w-8 h-full bg-gradient-to-l from-slate-50 via-slate-50/40 to-transparent z-10 pointer-events-none" />
          <div className="hidden sm:block absolute left-0 top-0 bottom-16 w-8 h-full bg-gradient-to-r from-slate-50 via-slate-50/50 to-transparent z-10 pointer-events-none" />

          {awardsData.map((award) => (
            <SwiperSlide key={award.id} className="!h-auto">
              <div className="bg-navy rounded-2xl pb-0 px-0 shadow-card border border-slate-100 space-y-0 text-center h-full flex flex-col justify-between hover:shadow-card-hover transition-all">
                <div
                  className="relative w-full h-80 sm:h-66 rounded-xl overflow-hidden bg-slate-900 cursor-pointer group/img"
                  onClick={() => setSelectedAward(award)}
                >
                  <Image
                    src={award.imageUrl}
                    alt={award.title}
                    fill
                    className="object-cover group-hover/img:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1.5 backdrop-blur-[2px]">
                    <ZoomIn className="w-5 h-5 text-accent-gold" />
                    <span>تكبير الصورة</span>
                  </div>
                </div>
                <div className="space-y-1 mb-auto bg-navy py-5 rounded-b-3xl">
                  <h3 className="font-bold text-slate-200! text-base leading-snug">
                    {award.title}
                  </h3>
                  <p className="text-xs text-brand font-semibold">
                    {award.organization} – {award.year}
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
            className="custom-awards-prev w-10 h-10 rounded-full bg-navy border border-slate-200 shadow-md flex items-center justify-center text-white hover:bg-brand hover:text-slate-900 transition-all cursor-pointer active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="التالي"
            className="custom-awards-next w-10 h-10 rounded-full bg-navy border border-slate-200 shadow-md flex items-center justify-center text-white hover:bg-brand hover:text-slate-900 transition-all cursor-pointer active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Enlarged Image Lightbox Modal */}
      <AnimatePresence>
        {selectedAward && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/50 backdrop-blur-xs"
            onClick={() => setSelectedAward(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl flex flex-col text-right"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedAward(null)}
                className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-rose-600 transition-colors shadow-lg cursor-pointer"
                aria-label="إغلاق"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image View */}
              <div className="relative w-full h-[60vh] sm:h-[70vh] bg-slate-900 flex items-center justify-center">
                <Image
                  src={selectedAward.imageUrl}
                  alt={selectedAward.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Modal Footer Info */}
              <div className="p-5 bg-white space-y-1 border-t border-slate-100">
                <h3 className="font-extrabold text-slate-900 text-base md:text-lg">
                  {selectedAward.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand font-bold">
                  {selectedAward.organization} – {selectedAward.year}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}