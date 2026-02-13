import type { Metadata } from 'next';
import './globals.css';
import { getDomainConfig } from '@/lib/getDomainConfig';
import { AGENT } from '@/config/agent';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SchemaMarkup from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  const config = await getDomainConfig();

  return {
    title: {
      default: `${config.name} | ${AGENT.name}, REALTOR®`,
      template: `%s | ${config.name}`,
    },
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: AGENT.name }],
    openGraph: {
      type: 'website',
      locale: 'en_US',
      title: `${config.name} — ${AGENT.name}`,
      description: config.description,
      siteName: config.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${config.name} — ${AGENT.name}`,
      description: config.description,
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
      canonical: '/',
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
        {/* Preconnect to critical third-party origins */}
        <link rel="preconnect" href="https://imagedelivery.net" />
        <link rel="dns-prefetch" href="https://em.realscout.com" />
        <link rel="dns-prefetch" href="https://www.realscout.com" />
        <SchemaMarkup config={config} />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header config={config} />
        <main className="flex-1">{children}</main>
        <Footer config={config} />
      </body>
    </html>
  );
}
