// hooks/useIsMobile.ts
'use client';

import { useState, useEffect } from 'react';

export function useResponsive(breakpoint: number = 640): boolean {
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsResponsive(window.innerWidth <= breakpoint);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  return isResponsive;
}