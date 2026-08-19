import type { Metadata } from 'next';
import { AGENT } from '@/config/agent';
import { OG_IMAGE_ALT, socialShareImages } from '@/lib/siteHost';

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  baseUrl: string;
  keywords?: string[];
};

export function buildPageMetadata({
  title,
  description,
  path,
  baseUrl,
  keywords = [],
}: PageMetaInput): Metadata {
  const origin = baseUrl.replace(/\/+$/, '');
  const url = path === '/' ? origin : `${origin}${path}`;
  const { ogImage, twitterImage } = socialShareImages(origin);

  return {
    metadataBase: new URL(origin),
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      title,
      description,
      siteName: 'Dr. Duffy Sells Homes',
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [twitterImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'geo.region': 'US-NV',
      'geo.placename': AGENT.address.city,
      'geo.position': '36.22;-115.33',
      ICBM: '36.22, -115.33',
      'og:image:alt': OG_IMAGE_ALT,
      'twitter:image:alt': OG_IMAGE_ALT,
    },
  };
}
