import { AGENT } from '@/config/agent';
import type { DomainConfig } from '@/config/domains';
import { headers } from 'next/headers';

export default async function SchemaMarkup({ config }: { config: DomainConfig }) {
  const headersList = await headers();
  const host = headersList.get('x-forwarded-host') || headersList.get('host') || 'localhost';
  const baseUrl = `https://${host.split(':')[0]}`;

  // Stable @id URIs for entity anchoring (AI search relies on these)
  const agentId = `${baseUrl}/#agent`;
  const brokerageId = `${baseUrl}/#brokerage`;
  const websiteId = `${baseUrl}/#website`;

  // Services based on site focus
  const servicesByFocus: Record<string, string[]> = {
    luxury: [
      'Luxury Home Sales',
      'Guard-Gated Community Specialist',
      'Custom Home Consultation',
      'High-Net-Worth Relocation',
      'Luxury Home Marketing',
    ],
    '55plus': [
      'Active Adult Community Specialist',
      '55+ Home Sales',
      'Retirement Relocation Services',
      'Downsizing Consultation',
      'Sun City & Del Webb Expert',
    ],
    family: [
      'Family Home Sales',
      'School District Guidance',
      'First-Time Buyer Assistance',
      'New Construction Specialist',
      'Neighborhood Consultation',
    ],
    investment: [
      'Investment Property Analysis',
      'Opportunity Zone Specialist',
      'Cap Rate Analysis',
      'Cash Flow Property Sourcing',
      'Portfolio Growth Strategy',
    ],
    condo: [
      'High-Rise Condo Sales',
      'Strip-View Condos',
      'HOA Analysis',
      'Short-Term Rental Guidance',
      'Condo Market Analysis',
    ],
    general: [
      'Residential Home Sales',
      'Buyer Representation',
      'Seller Representation',
      'Market Analysis',
      'Relocation Services',
    ],
    relocation: [
      'Interstate Relocation Services',
      'California-to-Vegas Relocation',
      'Corporate Relocation',
      'Area Tours & Orientation',
      'Community Matching',
    ],
  };

  const services = servicesByFocus[config.focus] || servicesByFocus.general;

  // RealEstateAgent entity (primary)
  const realEstateAgent = {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    '@id': agentId,
    name: AGENT.name,
    alternateName: 'Dr. Jan Duffy REALTOR®',
    description: config.description,
    url: baseUrl,
    telephone: AGENT.phone,
    email: AGENT.email,
    image: AGENT.headshotUrl,
    logo: AGENT.logoUrl,
    priceRange: '$$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Wire Transfer',
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
    areaServed: [
      {
        '@type': 'City',
        name: config.city || 'Las Vegas',
        containedInPlace: { '@type': 'State', name: 'Nevada' },
      },
      { '@type': 'City', name: 'Henderson' },
      { '@type': 'City', name: 'North Las Vegas' },
      { '@type': 'City', name: 'Summerlin' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services',
      itemListElement: services.map((s, i) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s,
          provider: { '@id': agentId },
        },
        position: i + 1,
      })),
    },
    knowsAbout: [
      'Las Vegas Real Estate',
      'Luxury Homes',
      'New Construction',
      '55+ Communities',
      'Investment Properties',
      config.neighborhood,
      ...(config.keywords || []),
    ],
    memberOf: {
      '@type': 'Organization',
      '@id': brokerageId,
      name: AGENT.brokerage,
    },
    sameAs: Object.values(AGENT.social),
    hasCredential: AGENT.credentials.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: c,
    })),
  };

  // WebSite entity (for sitelinks search)
  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId,
    name: config.name,
    url: baseUrl,
    description: config.description,
    publisher: { '@id': agentId },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/listings?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  // WebPage entity (current page)
  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: config.name,
    description: config.description,
    url: baseUrl,
    isPartOf: { '@id': websiteId },
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
    author: { '@id': agentId },
    dateModified: new Date().toISOString().split('T')[0],
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: baseUrl,
        },
      ],
    },
  };

  // Organization (Brokerage)
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': brokerageId,
    name: AGENT.brokerage,
    url: 'https://www.bfrelo.com/agent/dr-jan-duffy',
    logo: AGENT.logoUrl,
    member: { '@id': agentId },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgent) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
    </>
  );
}
