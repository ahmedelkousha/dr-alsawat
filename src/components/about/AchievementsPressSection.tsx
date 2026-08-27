import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { achievementsData } from '@/data/achievements';

export default function AchievementsPressSection() {
  return (
    <section id="achievements" className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2">
          {/* <Award className="w-6 h-6 text-brand-600" /> */}
          <h2 className="text-xl md:text-3xl font-bold text-slate-900">
            الإنجازات والنشرات الصحفية
          </h2>
        </div>
        {/* <span className="text-xs text-slate-500 font-medium">
          مشاركات وتغطيات
        </span> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievementsData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-5 shadow-card border border-slate-100 space-y-4 flex flex-col justify-between hover:shadow-card-hover transition-all"
          >
            <div className="space-y-3">
              <div className="relative w-full h-40 rounded-xl overflow-hidden bg-slate-800">
                <Image
                  src={item.imageUrl || '/images/logo-dark.jpg'}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-[11px] font-bold bg-brand-50 text-brand px-2.5 py-1 rounded-md">
                {item.publisher} {item.date && `• ${item.date}`}
              </span>
              <h3 className="font-bold text-slate-900 text-base leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.summary}
              </p>
            </div>

            <a
              href={item.articleUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-brand/80 pt-2 border-t border-slate-100"
            >
              <span>لقراءة المقال اضغط هنا</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
