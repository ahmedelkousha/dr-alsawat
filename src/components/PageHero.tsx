import { doctorData } from '@/data/doctorData';
import React from 'react';

export interface PageHeroProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  badge?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  imgURL?: string;
}

export default function PageHero({
  title,
  subtitle,
  badge,
  children,
  className = '',
  imgURL,
}: PageHeroProps) {
  return (
    <section
      style={imgURL ? { backgroundImage: `url(${imgURL})` } : undefined} className={`bg-cover bg-navy bg-center text-white pt-34 pb-20 md:pt-40 md:pb-30 relative overflow-hidden ${className}`}
    >
      <div className="bg-black/60 absolute inset-0"></div>
      {/* <img className='absolute inset-0 object-cover object-bottom' src='images/rectal-5-2.png' alt="" /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right space-y-4">
        {badge && <div>{badge}</div>}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white!">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
