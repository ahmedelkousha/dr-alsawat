"use client";

import React from "react";
import { Star, Quote, MapPin } from "lucide-react";
import { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-card border border-slate-100 flex flex-col justify-between space-y-4 hover:shadow-card-hover transition-all relative overflow-hidden">
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
        <p className="text-slate-700 text-sm md:text-base leading-relaxed italic">
          &quot;{testimonial.comment}&quot;
        </p>
      </div>

      {/* Author Details */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div>
          <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
          <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
            <MapPin className="w-3 h-3 text-brand" />
            <span>{testimonial.location}</span>
          </div>
        </div>
        {testimonial.procedure && (
          <span className="text-[11px] font-semibold bg-brand/10 text-brand px-2.5 py-1 rounded-full border border-brand/20">
            {testimonial.procedure}
          </span>
        )}
      </div>
    </div>
  );
}
