import React from 'react';
import { doctorData } from '@/data/doctorData';
import Button from '@/components/Button';

export default function AboutTaglineCtaSection() {
  return (
    <section className="bg-navy rounded-3xl p-8 md:p-10 shadow-xl text-center space-y-4">
      <span className="text-xs font-bold text-accent-gold uppercase tracking-widest">
        {doctorData.taglineHeader}
      </span>
      <h2 className="text-sm sm:text-base md:text-lg font-bold max-w-3xl mx-auto text-slate-300!">
        {doctorData.taglineContent}
      </h2>
      <div className="pt-2 flex justify-center gap-4">
        <Button size='sm' href="/appointments">حجز موعد استشارة</Button>
      </div>
    </section>
  );
}
