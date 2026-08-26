'use client';

import { useEffect } from 'react';
import { CALENDLY_LISTING_URL } from '@/config/calendly';
import { getCalendly, loadCalendlyAssets } from '@/lib/calendlyLoader';

/**
 * Calendly pop-up badge. Widget JS waits for a real user gesture so it
 * cannot steal mobile FCP/LCP on PageSpeed / Search Console lab tests.
 */
export default function CalendlyBadge() {
  useEffect(() => {
    let cancelled = false;

    const startBadge = () => {
      window.removeEventListener('pointerdown', startBadge);
      window.removeEventListener('keydown', startBadge);
      void loadCalendlyAssets()
        .then(() => {
          if (cancelled) return;
          if (document.querySelector('.calendly-badge-widget')) return;
          const calendly = getCalendly();
          calendly?.initBadgeWidget({
            url: CALENDLY_LISTING_URL,
            text: 'Schedule with Dr. Duffy',
            color: '#6a1b4d',
            textColor: '#ffffff',
            branding: true,
          });
        })
        .catch(() => {
          // Badge is optional; header Schedule still opens Calendly.
        });
    };

    window.addEventListener('pointerdown', startBadge, { once: true, passive: true });
    window.addEventListener('keydown', startBadge, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener('pointerdown', startBadge);
      window.removeEventListener('keydown', startBadge);
    };
  }, []);

  return null;
}

export function openCalendlyPopup(url: string = CALENDLY_LISTING_URL): void {
  void loadCalendlyAssets()
    .then(() => {
      const calendly = getCalendly();
      if (calendly) {
        calendly.initPopupWidget({ url });
        return;
      }
      window.open(url, '_blank', 'noopener,noreferrer');
    })
    .catch(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
    });
}
