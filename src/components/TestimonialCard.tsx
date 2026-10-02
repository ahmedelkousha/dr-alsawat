"use client";

import React from "react";
import { Star, Quote, MapPin, Calculator, Calendar } from "lucide-react";
import { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-card border border-slate-100 flex flex-col justify-between space-y-4 transition-all relative overflow-hidden h-full">
      {/* Decorative Quote Icon */}
      <Quote className="absolute top-4 left-4 w-12 h-12 text-brand/10 -rotate-12 pointer-events-none" />

      <div className="space-y-3 relative z-10">
        {/* Rating Stars */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < testimonial.rating
                  ? "text-amber-400 fill-amber-400"
                  : "text-slate-200"
              }`}
            />
          ))}
        </div>

        {/* Comment Quote */}
        <p className="text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed italic">
          &quot;{testimonial.comment}&quot;
        </p>
      </div>

      {/* Author Details */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div className="flex flex-row justify-between w-full">
          <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
          <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
            <Calendar className="w-3 h-3 text-brand" />
            <span>{testimonial?.date}</span>
          </div>
        </div>
        
      </div>
      {testimonial.procedure && (<div className="flex flex-col sm:flex-row justify-end items-center gap-2 text-xs text-slate-500">
          <span className="text-xs text-slate-500">زيارة المريض من أجل</span>
          <span className="text-[12px] font-medium bg-[#070e2e]/90 text-brand px-2.5 py-1 rounded-full border border-brand/20">
            {testimonial.procedure}
          </span>
       </div> )}
    </div>
  );
}
