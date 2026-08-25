'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2, TextCursor } from 'lucide-react';
import { useTypingEffect } from '@/hooks/useTypingEffect';

interface TypingCredentialsListProps {
  credentials: string[];
  typingSpeed?: number;
}

function SequentialCredentialItem({
  text,
  typingSpeed,
  onComplete,
}: {
  text: string;
  typingSpeed: number;
  onComplete: () => void;
}) {
  const { displayedText, isFinished, containerRef } = useTypingEffect({
    text,
    typeSpeed: typingSpeed,
    loop: false,
    startOnView: true,
  });

  useEffect(() => {
    if (isFinished) {
      onComplete();
    }
  }, [isFinished, onComplete]);

  if (displayedText.length === 0 && !isFinished) {
    return <span ref={containerRef} className="inline-block" />;
  }

  return (
    <li className="flex items-start gap-3 text-slate-700 text-xs md:text-base font-medium border-r-0 border-brand pr-0">
      <TextCursor className="w-4 h-4 md:w-5 md:h-5 text-brand flex-shrink-0 mt-0.5 animate-spin duration-300" />
      <span ref={containerRef}>{displayedText}</span>
    </li>
  );
}

export default function TypingCredentialsList({
  credentials,
  typingSpeed = 30,
}: TypingCredentialsListProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ul className="space-y-3.5">
      {credentials.map((cred, index) => {
        if (index > activeIndex) return null;

        if (index < activeIndex) {
          return (
            <li
              key={index}
              className="flex items-start gap-3 text-slate-700 text-xs md:text-base font-medium border-r-3 border-brand pr-2"
            >
              {/* <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-brand flex-shrink-0 mt-0.5" /> */}
              <span>{cred}</span>
            </li>
          );
        }

        return (
          <SequentialCredentialItem
            key={index}
            text={cred}
            typingSpeed={typingSpeed}
            onComplete={() => setActiveIndex((prev) => prev + 1)}
          />
        );
      })}
    </ul>
  );
}
