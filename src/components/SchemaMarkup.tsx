import { AGENT } from '@/config/agent';
import type { DomainConfig } from '@/config/domains';
import { getSiteUrl } from '@/lib/siteUrl';
import { sellerH1 } from '@/lib/headings';

type Breadcrumb = {
  name: string;
  path: string;
};

export default async function SchemaMarkup({
  config,
  pageTitle,
  pageDescription,
  path = '/',
  breadcrumbs = [{ name: 'Sell Your Home', path: '/' }],
  entities = 'business',
}: {
  config: DomainConfig;
  pageTitle?: string;
  pageDescription?: string;
  path?: string;
  breadcrumbs?: Breadcrumb[];
  entities?: 'business' | 'page' | 'all';
}) {
  const baseUrl = await getSiteUrl();
  const pageUrl = path === '/' ? baseUrl : `${baseUrl}${path}`;

  const agentId = `${baseUrl}/#agent`;
  const brokerageId = `${baseUrl}/#brokerage`;
  const websiteId = `${baseUrl}/#website`;

  const services = [
    'Residential Home Listing',
    `${config.neighborhood} Seller Representation`,
    'Comparative Market Analysis',
    'Neighborhood Listing Marketing',
    'Luxury Home Sales',
    '55+ Community Resales',
    'New-Construction Resale Strategy',
    'Probate and Estate Property Sales',
  ];

  const realEstateAgent = {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    '@id': agentId,
    name: AGENT.name,
    alternateName: 'Dr. Jan Duffy REALTOR®',
    description:
      pageDescription ||
      `Listing agent selling homes in ${config.neighborhood} and across the Las Vegas Valley.`,
    url: baseUrl,
    telephone: AGENT.phone,
    email: AGENT.email,
    image: [AGENT.headshotUrl, `${baseUrl}/og/opengraph.jpg`],
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
      { '@type': 'Place', name: 'Summerlin' },
      { '@type': 'Place', name: config.neighborhood },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Home Selling Services',
      itemListElement: services.map((s, i) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s,
          serviceType: 'Real estate listing and seller representation',
          provider: { '@id': agentId },
          areaServed: config.neighborhood,
        },
        position: i + 1,
      })),
    },
    knowsAbout: [
      'Selling homes in Las Vegas neighborhoods',
      'Las Vegas listing strategy',
      config.neighborhood,
      ...(config.keywords || []),
    ],
    slogan: sellerH1(config.neighborhood, config.city),
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

  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId,
    name: config.name,
    url: baseUrl,
    description:
      `Listing agent selling homes in ${config.neighborhood} and across the Las Vegas Valley.`,
    publisher: { '@id': agentId },
    inLanguage: 'en-US',
  };

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle || sellerH1(config.neighborhood, config.city),
    headline: pageTitle || sellerH1(config.neighborhood, config.city),
    description: pageDescription || config.description,
    url: pageUrl,
    isPartOf: { '@id': websiteId },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', 'h3'],
    },
    mainEntity: { '@id': agentId },
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
    dateModified: '2026-08-19',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.path === '/' ? baseUrl : `${baseUrl}${crumb.path}`,
      })),
    },
  };

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': brokerageId,
    name: AGENT.brokerage,
    url: 'https://www.bhhsnv.com/',
    logo: AGENT.logoUrl,
    member: { '@id': agentId },
    address: {
      '@type': 'PostalAddress',
      streetAddress: AGENT.address.street,
      addressLocality: AGENT.address.city,
      addressRegion: AGENT.address.state,
      postalCode: AGENT.address.zip,
      addressCountry: AGENT.address.country,
    },
  };

  const includeBusiness = entities === 'business' || entities === 'all';
  const includePage = entities === 'page' || entities === 'all';

  return (
    <>
      {includeBusiness && (
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
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
          />
        </>
      )}
      {includePage && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
        />
      )}
    </>
  );
}
