'use client';

import React from 'react';
import Button from '@/components/Button';

export interface AppointmentQuickCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  buttonIcon?: React.ReactNode;
  containerClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
  buttonClassName?: string;
}

export default function AppointmentQuickCard({
  icon,
  title,
  subtitle,
  description,
  buttonText,
  buttonHref,
  buttonIcon,
  containerClassName = 'bg-white rounded-2xl sm:p-6 p-3 shadow-sm space-y-2 flex flex-col justify-between border border-brand/10',
  titleClassName = 'font-bold text-sm sm:text-lg text-slate-900',
  subtitleClassName = 'text-slate-700 font-bold text-sm',
  descriptionClassName = 'text-xs text-slate-500 leading-relaxed',
  buttonClassName,
}: AppointmentQuickCardProps) {
  return (
    <div className={containerClassName}>
      <div className="space-y-0 flex flex-row items-start gap-2">
        <div className="w-12 shrink-0 h-12 rounded-2xl bg-accent-gold/20 flex items-center justify-center">
          {icon}
        </div>
        <div className="space-y-1">
          <h3 className={titleClassName}>{title}</h3>
          {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
          <p className={descriptionClassName}>{description}</p>
        </div>
      </div>

      <Button
        href={buttonHref}
        icon={buttonIcon}
        fullWidth
        size="sm"
        className={buttonClassName}
      >
        {buttonText}
      </Button>
    </div>
  );
}
