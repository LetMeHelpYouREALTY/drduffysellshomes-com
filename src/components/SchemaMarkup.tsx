import { AGENT } from '@/config/agent';
import type { DomainConfig } from '@/config/domains';
import { getSiteUrl } from '@/lib/siteUrl';
import { contentUpdatedIsoDate } from '@/lib/contentFreshness';

type Breadcrumb = {
  name: string;
  path: string;
};

/**
 * JSON-LD aligned to Google Search Central as of Aug 2026:
 * - Person and RealEstateAgent are separate nodes (do not mash Person + LocalBusiness).
 * - RealEstateAgent is the most specific LocalBusiness subtype.
 * - Structured data matches visible NAP; no fake review stars or retired rich-result types.
 * - Speakable / llms.txt / extra AEO markup are not required for AI Overviews or AI Mode.
 */
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

  const personId = `${baseUrl}/#person`;
  const agentId = `${baseUrl}/#agent`;
  const brokerageId = `${baseUrl}/#brokerage`;
  const websiteId = `${baseUrl}/#website`;

  const postalAddress = {
    '@type': 'PostalAddress' as const,
    streetAddress: AGENT.address.street,
    addressLocality: AGENT.address.city,
    addressRegion: AGENT.address.state,
    postalCode: AGENT.address.zip,
    addressCountry: AGENT.address.country,
  };

  const geo = {
    '@type': 'GeoCoordinates' as const,
    latitude: AGENT.geo.latitude,
    longitude: AGENT.geo.longitude,
  };

  const personDescription = `${AGENT.name} is a REALTOR® (Nevada license ${AGENT.license}) with ${AGENT.brokerage}. Listing representation across the Las Vegas Valley. Office: ${AGENT.address.full}.`;

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

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': personId,
    name: AGENT.name,
    alternateName: 'Dr. Jan Duffy REALTOR®',
    description: personDescription,
    url: baseUrl,
    image: AGENT.headshotUrl,
    givenName: 'Jan',
    familyName: 'Duffy',
    honorificPrefix: 'Dr.',
    jobTitle: AGENT.title,
    telephone: AGENT.phone,
    email: AGENT.email,
    address: postalAddress,
    worksFor: { '@id': brokerageId },
    affiliation: { '@id': agentId },
    sameAs: [...Object.values(AGENT.social), AGENT.googleReviews],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Real estate license',
        recognizedBy: {
          '@type': 'GovernmentOrganization',
          name: 'Nevada Real Estate Division',
        },
        identifier: AGENT.license,
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional certification',
        name: 'Certified Luxury Home Marketing Specialist (CLHMS)',
      },
    ],
  };

  const realEstateAgent = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': agentId,
    name: `${AGENT.name}, REALTOR®`,
    description: personDescription,
    url: baseUrl,
    telephone: AGENT.phone,
    email: AGENT.email,
    image: [AGENT.headshotUrl, `${baseUrl}/og/opengraph.jpg`],
    logo: AGENT.logoUrl,
    priceRange: '$$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Wire Transfer',
    address: postalAddress,
    geo,
    hasMap: AGENT.mapsDirectionsUrl,
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
      itemListElement: services.map((serviceName) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: serviceName,
          serviceType: 'Real estate listing and seller representation',
          provider: { '@id': agentId },
          areaServed: config.neighborhood,
        },
      })),
    },
    knowsAbout: [
      'Selling homes in Las Vegas neighborhoods',
      'Las Vegas listing strategy',
      config.neighborhood,
      ...(config.keywords || []),
    ],
    employee: { '@id': personId },
    founder: { '@id': personId },
    parentOrganization: { '@id': brokerageId },
    sameAs: [...Object.values(AGENT.social), AGENT.googleReviews],
  };

  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId,
    name: config.name,
    url: baseUrl,
    description: `Listing agent selling homes in ${config.neighborhood} and across the Las Vegas Valley.`,
    publisher: { '@id': agentId },
    inLanguage: 'en-US',
  };

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    name: pageTitle,
    headline: pageTitle,
    description: pageDescription || config.description,
    url: pageUrl,
    inLanguage: 'en-US',
    isPartOf: { '@id': websiteId },
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
    author: { '@id': personId },
    publisher: { '@id': agentId },
    dateModified: contentUpdatedIsoDate(),
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
    member: { '@id': personId },
    address: postalAddress,
  };

  const includeBusiness = entities === 'business' || entities === 'all';
  const includePage = entities === 'page' || entities === 'all';

  return (
    <>
      {includeBusiness && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
          />
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
      {includePage && pageTitle ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
        />
      ) : null}
    </>
  );
}
