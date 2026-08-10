"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { specialtyOverview } from "@/data/services";

export default function SpecialtyOverviewSection() {
  return (
    <section id="services-overview" className="space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 border-b-2 border-brand inline-block pb-2">
          التخصصات والجراحات الرئيسية
        </h2>
        <p className="text-sm text-slate-600">
          خدمات علاجية متطورة تشمل التشخيص الدقيق والتدخل الجراحي طفيف التوغل.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {specialtyOverview.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-card hover:shadow-card-hover border border-slate-100 flex flex-col justify-between transition-all group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center font-bold text-lg group-hover:bg-brand group-hover:text-white transition-colors">
                {item.id === "colon-surgeries" ? "01" : item.id === "rectal-surgeries" ? "02" : "03"}
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                <span className="text-xs text-brand font-semibold">{item.subtitle}</span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>

              {/* Sublinks for Anal Region if available */}
              {item.subLinks && (
                <div className="pt-2 space-y-2">
                  <p className="text-xs font-bold text-slate-800">الأقسام التابعة:</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {item.subLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="bg-slate-50 hover:bg-brand/10 text-slate-700 hover:text-brand p-2 rounded-lg border border-slate-100 font-medium transition-colors text-center"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-6">
              <Link
                href={item.link}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:text-brand/80 transition-colors"
              >
                <span>{item.linkText}</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
