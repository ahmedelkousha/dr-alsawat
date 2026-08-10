"use client";

import React from "react";
import { Newspaper } from "lucide-react";
import { newsItemsData } from "@/data/news";

export default function MedicalNewsSection() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2">
          <Newspaper className="w-6 h-6 text-brand" />
          <h2 className="text-2xl font-bold text-slate-900">أحدث الأخبار الطبية</h2>
        </div>
        <span className="text-xs bg-slate-200 text-slate-700 px-3 py-1 rounded-full font-bold">
          قريباً...
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newsItemsData.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-2xl p-6 shadow-card border border-slate-100 opacity-90 hover:opacity-100 transition-all space-y-3"
          >
            <span className="text-xs font-bold bg-brand/10 text-brand px-2.5 py-1 rounded-md">
              {news.category}
            </span>
            <h3 className="font-bold text-slate-900 text-base">{news.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{news.excerpt}</p>
            <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
              <span>{news.date}</span>
              <span className="text-brand font-semibold">متاح قريباً</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
