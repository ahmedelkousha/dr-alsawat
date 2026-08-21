import React from 'react';

export interface PageHeroProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  badge?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export default function PageHero({
  title,
  subtitle,
  badge,
  children,
  className = '',
}: PageHeroProps) {
  return (
    <section
      className={`bg-navy text-white pt-34 pb-20 md:pt-40 md:pb-26 relative overflow-hidden ${className}`}
    >
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
