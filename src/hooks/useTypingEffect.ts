'use client';

import { useState, useEffect, useRef } from 'react';

export interface UseTypingEffectOptions {
  text?: string;
  words?: string[];
  loop?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
  startOnView?: boolean;
  viewOffsetPx?: number; // Pixel offset inward from bottom of viewport (e.g. 80px)
}

export function useTypingEffect({
  text,
  words,
  loop = false,
  typeSpeed = 35,
  deleteSpeed = 20,
  delaySpeed = 2000,
  startOnView = true,
  viewOffsetPx = 50,
}: UseTypingEffectOptions) {
  const strings = words && words.length > 0 ? words : text ? [text] : [];

  const containerRef = useRef<HTMLParagraphElement | HTMLDivElement | any>(null);
  const [isInView, setIsInView] = useState(!startOnView);

  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // IntersectionObserver to trigger typing when scrolled viewOffsetPx into view
  useEffect(() => {
    if (!startOnView || !containerRef.current) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: `0px 0px -${viewOffsetPx}px 0px`,
        threshold: 0.1,
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [startOnView, viewOffsetPx]);

  useEffect(() => {
    if (!isInView || strings.length === 0 || isFinished) return;

    const currentWord = strings[wordIndex % strings.length];

    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, typeSpeed);
      } else {
        if (strings.length === 1 && !loop) {
          setIsFinished(true);
          return;
        }
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delaySpeed);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        const nextIndex = wordIndex + 1;
        if (nextIndex >= strings.length && !loop) {
          setIsFinished(true);
        } else {
          setWordIndex(nextIndex);
        }
      }
    }

    return () => clearTimeout(timer);
  }, [
    isInView,
    displayedText,
    isDeleting,
    wordIndex,
    strings,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
    loop,
    isFinished,
  ]);

  return { displayedText, isDeleting, isFinished, containerRef };
}
