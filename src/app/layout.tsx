import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import { getDomainConfig } from '@/lib/getDomainConfig';
import { getPublicSiteUrl, socialShareImages } from '@/lib/siteUrl';
import { contentUpdatedAt } from '@/lib/contentFreshness';
import { AGENT } from '@/config/agent';
import { findNeighborhoodForName } from '@/config/neighborhoods';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NapBar from '@/components/NapBar';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getSellerHero } from '@/lib/sellerCopy';
import { REALSCOUT_SCRIPT_SRC } from '@/components/RealScoutWidget';
import CalendlyBadge from '@/components/CalendlyBadge';
import { CALENDLY_SCRIPT_SRC, CALENDLY_WIDGET_CSS } from '@/config/calendly';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#6a1b4d',
};

export async function generateMetadata(): Promise<Metadata> {
  const config = await getDomainConfig();
  const siteUrl = getPublicSiteUrl();
  const neighborhood = findNeighborhoodForName(config.neighborhood);
  const hero = getSellerHero(config, neighborhood);
  const titleDefault = hero.title;
  const description =
    neighborhood?.intro ??
    `Sell your home in ${config.neighborhood} with ${AGENT.name}. Neighborhood comps, listing marketing, and seller representation across the Las Vegas Valley. ${AGENT.address.full}. Call ${AGENT.phone}.`;

  const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;
  const bingVerification = process.env.BING_SITE_VERIFICATION;
  const { ogImage, twitterImage } = socialShareImages(siteUrl);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: titleDefault,
      template: `%s | ${config.name}`,
    },
    description,
    keywords: [
      `sell home ${config.neighborhood}`,
      `${config.neighborhood} listing agent`,
      'Las Vegas home selling',
      'Las Vegas listing agent',
      ...(config.keywords || []),
    ],
    authors: [{ name: AGENT.name }],
    creator: AGENT.name,
    publisher: AGENT.brokerage,
    category: 'real estate',
    applicationName: config.name,
    verification: {
      ...(googleVerification ? { google: googleVerification } : {}),
      ...(bingVerification ? { other: { 'msvalidate.01': bingVerification } } : {}),
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteUrl,
      title: titleDefault,
      description,
      siteName: config.name,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: titleDefault,
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
    alternates: {
      canonical: siteUrl,
      types: {
        'text/plain': `${siteUrl}/llms.txt`,
      },
    },
    other: {
      'geo.region': 'US-NV',
      'geo.placename': AGENT.address.city,
      'geo.position': `${AGENT.geo.latitude};${AGENT.geo.longitude}`,
      ICBM: `${AGENT.geo.latitude}, ${AGENT.geo.longitude}`,
      'og:image:alt': ogImage.alt,
      'twitter:image:alt': twitterImage.alt,
      'og:updated_time': contentUpdatedAt().toISOString(),
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const config = await getDomainConfig();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://imagedelivery.net" />
        <link rel="dns-prefetch" href="https://em.realscout.com" />
        <link rel="dns-prefetch" href="https://www.realscout.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM content map" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLM full briefing" />
        <SchemaMarkup config={config} />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Third-party assets wait until idle so they cannot block FCP/LCP. */}
        <Script
          id="realscout-web-components"
          src={REALSCOUT_SCRIPT_SRC}
          type="module"
          strategy="lazyOnload"
        />
        <Script id="calendly-widget-css" strategy="lazyOnload">
          {`(function(){if(document.getElementById('calendly-widget-stylesheet'))return;var l=document.createElement('link');l.id='calendly-widget-stylesheet';l.rel='stylesheet';l.href=${JSON.stringify(CALENDLY_WIDGET_CSS)};document.head.appendChild(l);})();`}
        </Script>
        <Script
          id="calendly-widget"
          src={CALENDLY_SCRIPT_SRC}
          strategy="lazyOnload"
        />
        <CalendlyBadge />
        <NapBar />
        <Header config={config} />
        <main className="flex-1">{children}</main>
        <Footer config={config} />
        <SpeedInsights />
      </body>
    </html>
  );
}
