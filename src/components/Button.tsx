'use client';

import React from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'ghost'
    | 'gold'
    | 'whatsapp'
    | 'emergency'
    | 'navy';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  icon,
  iconPosition = 'left',
  loading = false,
  fullWidth = false,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-bold transition-all duration-200 focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer';

  const sizeStyles = {
    sm: 'px-3.5 py-2.5 text-xs rounded-lg gap-1.5 sm:text-sm',
    md: 'px-5 py-2.5 text-sm rounded-xl gap-2 sm:text-base',
    lg: 'px-7 py-3.5 md:py-4 text-base rounded-2xl gap-2.5 text-base sm:text-lg',
  };

  const variantStyles = {
    primary:
      'bg-accent-gold hover:bg-accent-goldHover text-slate-900 shadow-md active:scale-[0.98]',
    secondary:
      'bg-navy hover:bg-navy text-white shadow-md border border-brand/20 active:scale-[0.98]',
    outline:
      'border border-brand/40 text-brand hover:bg-brand/10 hover:border-brand active:scale-[0.98]',
    ghost:
      'text-slate-700 hover:text-brand hover:bg-slate-100/80 active:scale-[0.98]',
    gold: 'bg-accent-gold hover:bg-accent-goldHover text-slate-900 shadow-md font-bold active:scale-[0.98]',
    whatsapp:
      'bg-accent-whatsapp hover:bg-accent-whatsappDark text-white shadow-md active:scale-[0.98]',
    emergency:
      'bg-rose-600 hover:bg-rose-700 text-white shadow-md active:scale-[0.98]',
    navy: 'bg-[#070e2e] hover:bg-[#0c184d] text-brand shadow-md active:scale-[0.98]',
  };

  const combinedClasses = twMerge(
    clsx(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      fullWidth && 'w-full',
      className
    )
  );

  const content = (
    <>
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin flex-shrink-0" />
      ) : (
        icon &&
        iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {!loading && icon && iconPosition === 'right' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </>
  );

  if (href) {
    const isExternal =
      href.startsWith('http') ||
      href.startsWith('tel:') ||
      href.startsWith('mailto:');
    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled || loading}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}
