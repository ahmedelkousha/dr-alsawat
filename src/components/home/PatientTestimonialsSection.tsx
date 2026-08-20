"use client";

import React from "react";
import { Heart } from "lucide-react";
import { patientTestimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/TestimonialCard";

export default function PatientTestimonialsSection() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2">
          {/* <Heart className="w-6 h-6 text-rose-500 fill-rose-500" /> */}
          <h2 className="text-xl md:text-3xl font-bold text-slate-900">ماذا يقول المرضى</h2>
        </div>
        {/* <span className="text-xs bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-bold">
          تقييمات موثوقة
        </span> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {patientTestimonials.slice(0, 3).map((test) => (
          <TestimonialCard key={test.id} testimonial={test} />
        ))}
      </div>
    </section>
  );
}
