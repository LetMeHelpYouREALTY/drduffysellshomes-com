'use client';

import { useState } from 'react';
import { AGENT } from '@/config/agent';

type CalendlyEmbedProps = {
  url: string;
  title: string;
};

/**
 * Calendly iframe is click-to-load so mobile PageSpeed does not fetch three
 * 700px calendars during FCP/LCP. The link still works without JavaScript.
 */
export default function CalendlyEmbed({ url, title }: CalendlyEmbedProps) {
  const [showCalendar, setShowCalendar] = useState(false);

  if (showCalendar) {
    return (
      <iframe
        src={url}
        title={`${title} with ${AGENT.name}`}
        className="w-full min-h-[700px] rounded-xl border border-primary-100"
        width={400}
        height={700}
      />
    );
  }

  return (
    <div className="flex min-h-[220px] flex-col items-center justify-center rounded-xl border border-primary-100 bg-bhhs-cream px-4 py-8 text-center">
      <p className="mb-4 text-sm text-primary-700">
        Tap to open this calendar and pick a time with {AGENT.name}.
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
        onClick={(event) => {
          event.preventDefault();
          setShowCalendar(true);
        }}
      >
        Open {title}
      </a>
    </div>
  );
}
