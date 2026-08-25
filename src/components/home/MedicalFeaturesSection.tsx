'use client';

import React from 'react';
import { medicalFeatures } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';

export default function MedicalFeaturesSection() {
  return (
    <section className="space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-slate-900 border-b-0 border-brand inline-block pb-2">
          معايير الرعاية والخدمات في عيادتي
        </h2>
        {/* <p className="text-xs sm:text-sm text-slate-600">
          ألتزم بأعلى معايير الدقة والشفافية الطبية لضمان سلامة ورضا كافة مرضاي.
        </p> */}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
        {medicalFeatures.map((feature) => (
          <ServiceCard key={feature.id} service={feature} />
        ))}
      </div>
    </section>
  );
}
