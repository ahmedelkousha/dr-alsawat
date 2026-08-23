'use client';

import React from 'react';
import { useTypingEffect, UseTypingEffectOptions } from '@/hooks/useTypingEffect';

interface TypingParagraphProps extends UseTypingEffectOptions {
  className?: string;
  cursorColor?: string;
  showCursor?: boolean;
}

export default function TypingParagraph({
  text,
  words,
  loop = false,
  typeSpeed = 30,
  deleteSpeed = 20,
  delaySpeed = 2000,
  startOnView = true,
  viewOffsetPx = 80,
  className = 'text-xs sm:text-sm text-slate-600 leading-relaxed',
  cursorColor = 'bg-brand',
  showCursor = false,
}: TypingParagraphProps) {
  const { displayedText, isFinished, containerRef } = useTypingEffect({
    text,
    words,
    loop,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
    startOnView,
    viewOffsetPx,
  });

  return (
    <p ref={containerRef} className={className}>
      {displayedText}
      {showCursor && !isFinished && (
        <span
          className={`inline-block w-1.5 h-4 mr-1 ${cursorColor} animate-pulse align-middle`}
        />
      )}
    </p>
  );
}
