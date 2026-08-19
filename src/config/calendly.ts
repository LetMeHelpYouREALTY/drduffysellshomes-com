export const CALENDLY_SCRIPT_SRC =
  'https://assets.calendly.com/assets/external/widget.js';
export const CALENDLY_WIDGET_CSS =
  'https://assets.calendly.com/assets/external/widget.css';
export const CALENDLY_PRIMARY_COLOR = '6a1b4d';
export const CALENDLY_USER = 'https://calendly.com/drjanduffy';

function embedUrl(slug: string): string {
  return `${CALENDLY_USER}/${slug}?hide_gdpr_banner=1&primary_color=${CALENDLY_PRIMARY_COLOR}`;
}

export const CALENDLY_WIDGETS = [
  {
    id: 'listing',
    slug: 'listing-consultation',
    title: 'Listing Consultation',
    duration: '30 min',
    description:
      'Price your home to neighborhood comps and walk the listing plan — photos, launch, and net sheet.',
    url: embedUrl('listing-consultation'),
  },
  {
    id: 'strategy',
    slug: '15min',
    title: 'Free Market Strategy Call',
    duration: '15 min',
    description:
      'A short read on your neighborhood: inventory, timing, and what buyers are touring this week.',
    url: embedUrl('15min'),
  },
  {
    id: 'buyer',
    slug: 'buyer-consultation-30-min',
    title: 'Buyer Consultation',
    duration: '30 min',
    description:
      'Selling and buying in the same move? We map the next home before you list.',
    url: embedUrl('buyer-consultation-30-min'),
  },
] as const;

export type CalendlyWidget = (typeof CALENDLY_WIDGETS)[number];

export const CALENDLY_LISTING_URL = CALENDLY_WIDGETS[0].url;
