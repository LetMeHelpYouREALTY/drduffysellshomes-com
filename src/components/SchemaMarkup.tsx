import { AGENT } from '@/config/agent';
import type { DomainConfig } from '@/config/domains';

export default function SchemaMarkup({ config }: { config: DomainConfig }) {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: AGENT.name,
    description: config.description,
    url: `https://${config.name.toLowerCase().replace(/\s+/g, '')}`,
    telephone: AGENT.phone,
    email: AGENT.email,
    image: AGENT.headshotUrl,
    logo: AGENT.logoUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: AGENT.address.street,
      addressLocality: AGENT.address.city,
      addressRegion: AGENT.address.state,
      postalCode: AGENT.address.zip,
      addressCountry: AGENT.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.22,
      longitude: -115.33,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '14:00',
      },
    ],
    areaServed: {
      '@type': 'City',
      name: config.city || 'Las Vegas',
      containedInPlace: {
        '@type': 'State',
        name: 'Nevada',
      },
    },
    memberOf: {
      '@type': 'Organization',
      name: AGENT.brokerage,
    },
    sameAs: Object.values(AGENT.social),
    priceRange: '$$$',
    hasCredential: AGENT.credentials.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: c,
    })),
  };

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: config.name,
    description: config.description,
    about: {
      '@type': 'Place',
      name: config.neighborhood,
      address: {
        '@type': 'PostalAddress',
        addressLocality: config.city,
        addressRegion: config.state,
        postalCode: config.zip,
      },
    },
    author: {
      '@type': 'Person',
      name: AGENT.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
    </>
  );
}
