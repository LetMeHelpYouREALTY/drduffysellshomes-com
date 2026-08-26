import {
  CALENDLY_SCRIPT_SRC,
  CALENDLY_WIDGET_CSS,
} from '@/config/calendly';

export type CalendlyApi = {
  initBadgeWidget: (options: {
    url: string;
    text: string;
    color: string;
    textColor: string;
    branding: boolean;
  }) => void;
  initPopupWidget: (options: { url: string }) => void;
};

type WindowWithCalendly = Window & { Calendly?: CalendlyApi };

let calendlyAssets: Promise<void> | null = null;

export function getCalendly(): CalendlyApi | undefined {
  if (typeof window === 'undefined') return undefined;
  return (window as WindowWithCalendly).Calendly;
}

/**
 * Load Calendly widget CSS + JS once. Iframe embeds do not need this —
 * only the floating badge and popup scheduler do.
 */
export function loadCalendlyAssets(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if (getCalendly()) return Promise.resolve();
  if (calendlyAssets) return calendlyAssets;

  calendlyAssets = new Promise((resolve, reject) => {
    if (!document.getElementById('calendly-widget-stylesheet')) {
      const link = document.createElement('link');
      link.id = 'calendly-widget-stylesheet';
      link.rel = 'stylesheet';
      link.href = CALENDLY_WIDGET_CSS;
      document.head.appendChild(link);
    }

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_SCRIPT_SRC}"]`,
    );
    if (existing) {
      if (getCalendly()) {
        resolve();
        return;
      }
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener(
        'error',
        () => reject(new Error('Calendly script failed to load')),
        { once: true },
      );
      return;
    }

    const script = document.createElement('script');
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Calendly script failed to load'));
    document.body.appendChild(script);
  });

  return calendlyAssets;
}
