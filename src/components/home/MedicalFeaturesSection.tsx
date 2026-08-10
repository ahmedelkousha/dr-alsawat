"use client";

import React from "react";
import { medicalFeatures } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

export default function MedicalFeaturesSection() {
  return (
    <section className="space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          مجموعة واسعة من الخدمات الطبية
        </h2>
        <p className="text-sm text-slate-600">
          نلتزم بتوفير أقصى درجات الرعاية والسلامة الطبية من خلال بيئة مجهزة بالكامل.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {medicalFeatures.map((feature) => (
          <ServiceCard key={feature.id} service={feature} />
        ))}
      </div>
    </section>
  );
}
