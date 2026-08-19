import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import { getDomainConfig } from '@/lib/getDomainConfig';
import { getSiteUrl } from '@/lib/siteUrl';
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#6a1b4d',
};

export async function generateMetadata(): Promise<Metadata> {
  const config = await getDomainConfig();
  const baseUrl = await getSiteUrl();
  const neighborhood = findNeighborhoodForName(config.neighborhood);
  const hero = getSellerHero(config, neighborhood);
  const titleDefault = `${hero.title} | ${AGENT.name}, REALTOR®`;
  const description =
    neighborhood?.intro ??
    `Sell your home in ${config.neighborhood} with ${AGENT.name}. Neighborhood comps, listing marketing, and seller representation across the Las Vegas Valley. ${AGENT.address.full}. Call ${AGENT.phone}.`;

  const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;
  const bingVerification = process.env.BING_SITE_VERIFICATION;

  return {
    metadataBase: new URL(baseUrl.startsWith('http') ? baseUrl : `https://${baseUrl}`),
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
      url: baseUrl,
      title: titleDefault,
      description,
      siteName: config.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: titleDefault,
      description,
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
      canonical: baseUrl,
    },
    other: {
      'geo.region': 'US-NV',
      'geo.placename': 'Las Vegas',
      'geo.position': '36.22;-115.33',
      ICBM: '36.22, -115.33',
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
        <link rel="preconnect" href="https://em.realscout.com" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://em.realscout.com" />
        <link rel="dns-prefetch" href="https://www.realscout.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="stylesheet" href={CALENDLY_WIDGET_CSS} />
        <SchemaMarkup config={config} />
      </head>
      <body className="min-h-screen flex flex-col">
        <Script
          id="realscout-web-components"
          src={REALSCOUT_SCRIPT_SRC}
          type="module"
          strategy="afterInteractive"
        />
        <Script
          id="calendly-widget"
          src={CALENDLY_SCRIPT_SRC}
          strategy="afterInteractive"
        />
        <CalendlyBadge />
        <NapBar />
        <Header config={config} />
        <main className="flex-1">{children}</main>
        <Footer config={config} />
      </body>
    </html>
  );
}
