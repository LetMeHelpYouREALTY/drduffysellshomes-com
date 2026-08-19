'use client';

import { useEffect } from 'react';
import { CALENDLY_LISTING_URL } from '@/config/calendly';

type CalendlyApi = {
  initBadgeWidget: (options: {
    url: string;
    text: string;
    color: string;
    textColor: string;
    branding: boolean;
  }) => void;
  initPopupWidget: (options: { url: string }) => void;
};

function getCalendly(): CalendlyApi | undefined {
  if (typeof window === 'undefined') return undefined;
  return (window as Window & { Calendly?: CalendlyApi }).Calendly;
}

/**
 * Calendly pop-up badge (floating button) on every page.
 */
export default function CalendlyBadge() {
  useEffect(() => {
    const start = Date.now();
    const timer = window.setInterval(() => {
      if (document.querySelector('.calendly-badge-widget')) {
        window.clearInterval(timer);
        return;
      }
      const calendly = getCalendly();
      if (calendly) {
        calendly.initBadgeWidget({
          url: CALENDLY_LISTING_URL,
          text: 'Schedule with Dr. Duffy',
          color: '#6a1b4d',
          textColor: '#ffffff',
          branding: true,
        });
        window.clearInterval(timer);
        return;
      }
      if (Date.now() - start > 15000) {
        window.clearInterval(timer);
      }
    }, 250);

    return () => window.clearInterval(timer);
  }, []);

  return null;
}

export function openCalendlyPopup(url: string = CALENDLY_LISTING_URL): void {
  const calendly = getCalendly();
  if (calendly) {
    calendly.initPopupWidget({ url });
    return;
  }
  window.open(url, '_blank', 'noopener,noreferrer');
}
