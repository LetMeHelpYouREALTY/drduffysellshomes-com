'use client';

import { useEffect } from 'react';
import { loadRealScoutScript } from '@/lib/realscoutLoader';

/**
 * RealScout's UMD is large. Wait until a visible widget is near the viewport
 * so it cannot compete with the hero LCP on mobile PageSpeed.
 */
export default function DeferRealScoutScript() {
  useEffect(() => {
    const targets = document.querySelectorAll(
      '.realscout-carousel, realscout-simple-search',
    );
    if (targets.length === 0) return undefined;

    if (window.matchMedia('(min-width: 1024px)').matches) {
      void loadRealScoutScript();
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          void loadRealScoutScript();
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px' },
    );

    targets.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return null;
}
