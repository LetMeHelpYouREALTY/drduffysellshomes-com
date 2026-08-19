/**
 * Domain-to-content mapping
 *
 * Each domain gets localized hero text, SEO, and focus area.
 * The Worker handles RealScout injection globally — no per-site config needed.
 *
 * To add a new domain: add an entry below, push to Vercel, add domain in Vercel dashboard.
 */

export interface DomainConfig {
  /** Display name for the site (used in titles) */
  name: string;
  /** Primary neighborhood or area */
  neighborhood: string;
  /** City */
  city: string;
  /** State abbreviation */
  state: string;
  /** ZIP code(s) */
  zip: string;
  /** SEO meta description */
  description: string;
  /** SEO keywords */
  keywords: string[];
  /** Market focus: luxury, 55plus, family, investment, condo, general */
  focus: 'luxury' | '55plus' | 'family' | 'investment' | 'condo' | 'general' | 'relocation';
  /** Hero headline */
  heroTitle: string;
  /** Hero subtitle */
  heroSubtitle: string;
  /** Local color override (optional hex) */
  accentColor?: string;
}

/** Default config used when hostname isn't mapped */
export const DEFAULT_CONFIG: DomainConfig = {
  name: 'Dr. Duffy Sells Homes',
  neighborhood: 'Las Vegas Valley',
  city: 'Las Vegas',
  state: 'NV',
  zip: '89134',
  description:
    'Sell your Las Vegas home with Dr. Jan Duffy, REALTOR® at Berkshire Hathaway HomeServices Nevada Properties. Neighborhood listing plans for Summerlin, Skye Canyon, Henderson, Centennial Hills, and every major valley community.',
  keywords: [
    'sell home Las Vegas',
    'Las Vegas listing agent',
    'home valuation Las Vegas',
    'Summerlin listing agent',
    'BHHS Nevada Properties',
  ],
  focus: 'general',
  heroTitle: 'Sell Your Las Vegas Home',
  heroSubtitle:
    'A listing plan for your neighborhood — street-level comps, marketing that names the community, and a launch built to get offers.',
};

/**
 * Map of hostname → config overrides.
 * Only the fields you specify will override DEFAULT_CONFIG.
 */
export const DOMAIN_MAP: Record<string, Partial<DomainConfig>> = {
  // ── Neighborhoods & Communities ──────────────────────────────────

  'arcadiahomeslasvegas.com': {
    name: 'Arcadia Homes Las Vegas',
    neighborhood: 'Arcadia',
    description: 'Homes for sale in the Arcadia community of Las Vegas. New construction, resale homes, and neighborhood info.',
    keywords: ['Arcadia Las Vegas', 'Arcadia homes', 'Las Vegas new construction'],
    focus: 'family',
    heroTitle: 'Arcadia Homes for Sale',
    heroSubtitle: 'Discover modern living in one of Las Vegas\' newest master-planned communities.',
  },

  'centennialhillshomesforsale.com': {
    name: 'Centennial Hills Homes',
    neighborhood: 'Centennial Hills',
    description: 'Homes for sale in Centennial Hills, Las Vegas. Parks, US-95 access, and northwest listing comps.',
    keywords: ['Centennial Hills', 'Centennial Hills homes', 'North Las Vegas homes'],
    focus: 'family',
    heroTitle: 'Sell Your Centennial Hills Home',
    heroSubtitle: 'Northwest Las Vegas listings priced to the tract — parks, US-95 access, and same-plan comps.',
  },

  'consenzaestates.com': {
    name: 'Consenza Estates',
    neighborhood: 'Consenza Estates',
    description: 'Luxury homes in Consenza Estates, Las Vegas. Gated community with premium amenities.',
    keywords: ['Consenza Estates', 'luxury homes Las Vegas', 'gated community'],
    focus: 'luxury',
    heroTitle: 'Consenza Estates Luxury Living',
    heroSubtitle: 'Exclusive gated community with stunning desert views and premium amenities.',
  },

  'craigranchvegashomes.com': {
    name: 'Craig Ranch Homes',
    neighborhood: 'Craig Ranch',
    city: 'North Las Vegas',
    zip: '89081',
    description: 'Homes for sale in Craig Ranch, North Las Vegas. Parks, trails, and community living.',
    keywords: ['Craig Ranch', 'North Las Vegas homes', 'Craig Ranch Park'],
    focus: 'family',
    heroTitle: 'Craig Ranch Homes for Sale',
    heroSubtitle: 'Active lifestyle community with parks, trails, and neighborhood amenities in North Las Vegas.',
  },

  'eaglehillshomes.com': {
    name: 'Eagle Hills Homes',
    neighborhood: 'Eagle Hills',
    description: 'Homes for sale in Eagle Hills, Las Vegas. Established community with mountain views.',
    keywords: ['Eagle Hills', 'Eagle Hills homes', 'Las Vegas homes'],
    focus: 'family',
    heroTitle: 'Eagle Hills Homes for Sale',
    heroSubtitle: 'Established neighborhood with mountain views and easy access to the Las Vegas Strip.',
  },

  'emersonestateshomes.com': {
    name: 'Emerson Estates Homes',
    neighborhood: 'Emerson Estates',
    description: 'Luxury homes in Emerson Estates. Spacious lots and custom homes in Las Vegas.',
    keywords: ['Emerson Estates', 'custom homes Las Vegas', 'luxury estates'],
    focus: 'luxury',
    heroTitle: 'Emerson Estates Homes',
    heroSubtitle: 'Custom luxury homes on spacious lots in one of Las Vegas\' premier neighborhoods.',
  },

  'heritagestonebridge.com': {
    name: 'Heritage at Stonebridge',
    neighborhood: 'Stonebridge',
    city: 'Summerlin',
    zip: '89135',
    description: 'Homes for sale in Heritage at Stonebridge, Summerlin. Premium gated community near Red Rock.',
    keywords: ['Heritage Stonebridge', 'Summerlin homes', 'gated community Summerlin'],
    focus: 'luxury',
    heroTitle: 'Heritage at Stonebridge',
    heroSubtitle: 'Premium gated living in the heart of Summerlin with Red Rock Canyon views.',
  },

  'logcabinranchhomes.com': {
    name: 'Log Cabin Ranch Homes',
    neighborhood: 'Log Cabin Ranch',
    description: 'Homes for sale in Log Cabin Ranch. Equestrian-friendly properties in Las Vegas.',
    keywords: ['Log Cabin Ranch', 'horse property Las Vegas', 'equestrian homes'],
    focus: 'family',
    heroTitle: 'Log Cabin Ranch Homes',
    heroSubtitle: 'Spacious lots and equestrian-friendly properties in Las Vegas\' horse country.',
  },

  'lonemountainhomesforsale.com': {
    name: 'Lone Mountain Homes',
    neighborhood: 'Lone Mountain',
    zip: '89129',
    description: 'Homes for sale near Lone Mountain in Las Vegas. Mountain views, hiking trails, and family neighborhoods.',
    keywords: ['Lone Mountain', 'Lone Mountain homes', 'Las Vegas mountain homes'],
    focus: 'family',
    heroTitle: 'Lone Mountain Homes for Sale',
    heroSubtitle: 'Mountain living in northwest Las Vegas — trails, views, and tract-level listing comps.',
  },

  'mountainedgehomes.com': {
    name: 'Mountain Edge Homes',
    neighborhood: 'Mountain Edge',
    description: 'Homes for sale in Mountain Edge, Las Vegas. Modern homes with mountain views.',
    keywords: ['Mountain Edge', 'Mountain Edge homes', 'Las Vegas mountain views'],
    focus: 'family',
    heroTitle: 'Mountain Edge Homes for Sale',
    heroSubtitle: 'Modern desert living with stunning mountain views in Southwest Las Vegas.',
  },

  'reverencesummerlinhomes.com': {
    name: 'Reverence Summerlin',
    neighborhood: 'Reverence',
    city: 'Summerlin',
    zip: '89135',
    description: 'Luxury homes in Reverence, Summerlin. Guard-gated community with resort amenities.',
    keywords: ['Reverence Summerlin', 'luxury Summerlin', 'guard gated homes'],
    focus: 'luxury',
    heroTitle: 'Reverence — Summerlin\'s Premier Address',
    heroSubtitle: 'Guard-gated luxury with world-class amenities and panoramic Strip views.',
  },

  'shawoodhomes.com': {
    name: 'Shawood Homes',
    neighborhood: 'Shawood',
    description: 'Homes for sale in Shawood, Las Vegas. Growing community with new construction.',
    keywords: ['Shawood', 'Shawood homes', 'Las Vegas new homes'],
    focus: 'family',
    heroTitle: 'Shawood Homes for Sale',
    heroSubtitle: 'New construction and resale homes in one of Las Vegas\' growing communities.',
  },

  'skyecanyonhomesforsale.com': {
    name: 'Skye Canyon Homes',
    neighborhood: 'Skye Canyon',
    zip: '89166',
    description: 'Homes for sale in Skye Canyon, Las Vegas. Master-planned community with parks, pools, and trails.',
    keywords: ['Skye Canyon', 'Skye Canyon homes', 'Northwest Las Vegas'],
    focus: 'family',
    heroTitle: 'Skye Canyon Homes for Sale',
    heroSubtitle: 'Active lifestyle community with Skye Center, parks, pools, and desert trails.',
  },

  'skyecanyonrealtor.com': {
    name: 'Skye Canyon Real Estate',
    neighborhood: 'Skye Canyon',
    zip: '89166',
    description: 'Your Skye Canyon REALTOR® — Dr. Jan Duffy. Expert in Skye Canyon homes, new construction, and resale.',
    keywords: ['Skye Canyon realtor', 'Skye Canyon real estate agent', 'buy home Skye Canyon'],
    focus: 'family',
    heroTitle: 'Your Skye Canyon Real Estate Expert',
    heroSubtitle: 'Dr. Jan Duffy — the neighborhood specialist you can trust for Skye Canyon homes.',
  },

  'skyesummithomes.com': {
    name: 'Skye Summit Homes',
    neighborhood: 'Skye Summit',
    zip: '89166',
    description: 'Luxury homes in Skye Summit, the premier enclave of Skye Canyon. Guard-gated with Strip views.',
    keywords: ['Skye Summit', 'luxury Skye Canyon', 'guard gated Las Vegas'],
    focus: 'luxury',
    heroTitle: 'Skye Summit — Elevated Living',
    heroSubtitle: 'The crown jewel of Skye Canyon: guard-gated luxury with panoramic desert and Strip views.',
  },

  'sunstonelasvegashomes.com': {
    name: 'Sunstone Las Vegas',
    neighborhood: 'Sunstone',
    description: 'Homes for sale in Sunstone, Las Vegas. Active adult and family communities.',
    keywords: ['Sunstone Las Vegas', 'Sunstone homes', 'Las Vegas communities'],
    focus: 'general',
    heroTitle: 'Sunstone Las Vegas Homes',
    heroSubtitle: 'Discover vibrant community living in Sunstone — homes for every stage of life.',
  },

  'theridgessummerlinhomes.com': {
    name: 'The Ridges Summerlin',
    neighborhood: 'The Ridges',
    city: 'Summerlin',
    zip: '89135',
    description: 'Ultra-luxury homes in The Ridges, Summerlin. Las Vegas\' most exclusive guard-gated community.',
    keywords: ['The Ridges Summerlin', 'luxury homes Summerlin', 'ultra luxury Las Vegas'],
    focus: 'luxury',
    heroTitle: 'The Ridges — Summerlin Ultra-Luxury',
    heroSubtitle: 'Las Vegas\' most exclusive address. Custom estates with Red Rock Canyon views.',
    accentColor: '#c9a84c',
  },

  'tournamenthillshomes.com': {
    name: 'Tournament Hills Homes',
    neighborhood: 'Tournament Hills',
    city: 'Summerlin',
    zip: '89134',
    description: 'Luxury homes in Tournament Hills, Summerlin. Golf course community near TPC Las Vegas.',
    keywords: ['Tournament Hills', 'golf course homes', 'Summerlin luxury'],
    focus: 'luxury',
    heroTitle: 'Tournament Hills — Golf Course Living',
    heroSubtitle: 'Prestigious homes along the TPC Las Vegas golf course in Summerlin.',
  },

  'trilogysunstonehomes.com': {
    name: 'Trilogy at Sunstone',
    neighborhood: 'Trilogy at Sunstone',
    city: 'North Las Vegas',
    zip: '89084',
    description: 'Homes for sale in Trilogy at Sunstone — a 55+ resort community in North Las Vegas.',
    keywords: ['Trilogy Sunstone', '55+ community', 'active adult Las Vegas'],
    focus: '55plus',
    heroTitle: 'Trilogy at Sunstone — 55+ Resort Living',
    heroSubtitle: 'Resort-style 55+ community with golf, pools, fitness center, and social clubs.',
  },

  'waterfallhomesnorthlasvegas.com': {
    name: 'Waterfall Homes',
    neighborhood: 'Waterfall',
    city: 'North Las Vegas',
    description: 'Homes for sale in Waterfall community, North Las Vegas. New construction and family homes.',
    keywords: ['Waterfall North Las Vegas', 'new homes North Las Vegas'],
    focus: 'family',
    heroTitle: 'Waterfall Homes for Sale',
    heroSubtitle: 'New construction and family homes in North Las Vegas\' Waterfall community.',
  },

  'westsummerlinhomes.com': {
    name: 'West Summerlin Homes',
    neighborhood: 'West Summerlin',
    city: 'Summerlin',
    zip: '89135',
    description: 'Homes for sale in West Summerlin. Near Red Rock Canyon with luxury and family homes.',
    keywords: ['West Summerlin', 'Summerlin homes', 'Red Rock homes'],
    focus: 'general',
    heroTitle: 'West Summerlin Homes for Sale',
    heroSubtitle: 'Premium homes near Red Rock Canyon — luxury estates to family neighborhoods.',
  },

  // ── Brand & Agent Domains ────────────────────────────────────────

  'askberkshirehomes.com': {
    name: 'Ask Berkshire Homes',
    neighborhood: 'Las Vegas Valley',
    description: 'Ask Berkshire — your direct line to homes across the Las Vegas Valley with Dr. Jan Duffy, BHHS.',
    keywords: ['Berkshire Hathaway homes', 'BHHS Las Vegas', 'ask Berkshire'],
    focus: 'general',
    heroTitle: 'Ask Berkshire — Las Vegas Homes',
    heroSubtitle: 'Direct access to every listing in the Las Vegas Valley through Berkshire Hathaway HomeServices.',
  },

  'askdrjanduffy.com': {
    name: 'Ask Dr. Jan Duffy',
    neighborhood: 'Las Vegas Valley',
    description: 'Have a real estate question? Ask Dr. Jan Duffy — expert REALTOR® serving the Las Vegas Valley.',
    keywords: ['Dr Jan Duffy', 'Las Vegas realtor', 'ask a realtor'],
    focus: 'general',
    heroTitle: 'Ask Dr. Jan Duffy',
    heroSubtitle: 'Your real estate questions answered by a trusted Las Vegas expert with 20+ years of experience.',
  },

  'calldrboyle.com': {
    name: 'Call Dr. Boyle',
    neighborhood: 'Las Vegas Valley',
    description: 'Call Dr. Boyle for Las Vegas real estate expertise. Homes, condos, and investments.',
    keywords: ['Dr Boyle', 'Las Vegas real estate', 'call realtor'],
    focus: 'general',
    heroTitle: 'Call Dr. Boyle — Las Vegas Real Estate',
    heroSubtitle: 'Expert real estate guidance across the Las Vegas Valley. Call today for a free consultation.',
  },

  'drduffyforeverconcierge.com': {
    name: 'Dr. Duffy Forever Concierge',
    neighborhood: 'Las Vegas Valley',
    description: 'Dr. Duffy\'s Forever Concierge service — lifetime support for Las Vegas homeowners.',
    keywords: ['concierge real estate', 'Dr Duffy', 'homeowner support Las Vegas'],
    focus: 'general',
    heroTitle: 'Forever Concierge Service',
    heroSubtitle: 'Lifetime support for homeowners. From purchase to maintenance — Dr. Duffy has you covered.',
  },

  'drduffysellshomes.com': {
    name: 'Dr. Duffy Sells Homes',
    neighborhood: 'Las Vegas Valley',
    description:
      'Sell your home in Summerlin, Skye Canyon, Centennial Hills, Henderson, Southern Highlands, and every Las Vegas neighborhood. Dr. Jan Duffy lists to the buyers already searching your community.',
    keywords: [
      'sell home Las Vegas',
      'listing agent Las Vegas',
      'Dr Duffy sells homes',
      'Las Vegas neighborhood listing agent',
    ],
    focus: 'general',
    heroTitle: 'Sell Your Las Vegas Neighborhood Home',
    heroSubtitle:
      'One listing plan per community. Comps, photos, and ads built for the neighborhood buyers already filter for.',
  },

  'heritagestoneridgevalue.com': {
    name: 'Heritage Stoneridge Value',
    neighborhood: 'Stoneridge',
    city: 'Summerlin',
    description: 'What\'s your Heritage Stoneridge home worth? Free home valuation by Dr. Jan Duffy.',
    keywords: ['Heritage Stoneridge', 'home value Summerlin', 'free home valuation'],
    focus: 'luxury',
    heroTitle: 'Your Heritage Stoneridge Home Value',
    heroSubtitle: 'Get a free, no-obligation home valuation from the Summerlin neighborhood expert.',
  },

  'letmehelpyourealtor.com': {
    name: 'Let Me Help You — Realtor',
    neighborhood: 'Las Vegas Valley',
    description: 'Let me help you find your dream home in Las Vegas. Dr. Jan Duffy, REALTOR®.',
    keywords: ['Las Vegas realtor', 'help buying home', 'real estate help'],
    focus: 'general',
    heroTitle: 'Let Me Help You Find Home',
    heroSubtitle: 'Whether buying, selling, or investing — Dr. Jan Duffy is here to guide you every step.',
  },

  // ── Search & Listings Domains ────────────────────────────────────

  'searchforaffordablehomes.com': {
    name: 'Search for Affordable Homes',
    neighborhood: 'Las Vegas Valley',
    description: 'Search affordable homes for sale in Las Vegas. Budget-friendly options starting under $300K.',
    keywords: ['affordable homes Las Vegas', 'cheap homes for sale', 'first time buyer Las Vegas'],
    focus: 'family',
    heroTitle: 'Affordable Las Vegas Homes',
    heroSubtitle: 'Quality homes that fit your budget. First-time buyer programs and down payment assistance available.',
  },

  'searchforhomesinsummerlin.com': {
    name: 'Search Homes in Summerlin',
    neighborhood: 'Summerlin',
    city: 'Summerlin',
    zip: '89135',
    description: 'Search all homes for sale in Summerlin, Las Vegas. From luxury estates to family neighborhoods.',
    keywords: ['Summerlin homes', 'homes for sale Summerlin', 'Summerlin real estate'],
    focus: 'general',
    heroTitle: 'Summerlin Homes for Sale',
    heroSubtitle: 'Las Vegas\' premier master-planned community. Search every listing in Summerlin.',
  },

  'searchforhomeslasvegas.com': {
    name: 'Search Homes Las Vegas',
    neighborhood: 'Las Vegas Valley',
    description: 'Search every home for sale in Las Vegas. Updated listings, market data, and expert guidance.',
    keywords: ['Las Vegas homes for sale', 'search Las Vegas homes', 'MLS Las Vegas'],
    focus: 'general',
    heroTitle: 'Search Las Vegas Homes',
    heroSubtitle: 'Every listing. Updated in real time. Your complete Las Vegas home search starts here.',
  },

  'openhouseupdate.com': {
    name: 'Open House Update',
    neighborhood: 'Las Vegas Valley',
    description: 'This weekend\'s open houses in Las Vegas. Updated listings with times, photos, and directions.',
    keywords: ['open houses Las Vegas', 'Las Vegas open house', 'weekend open houses'],
    focus: 'general',
    heroTitle: 'Las Vegas Open Houses',
    heroSubtitle: 'Find this weekend\'s open houses across the Las Vegas Valley. Updated every Thursday.',
  },

  'openhouseupdates.com': {
    name: 'Open House Updates',
    neighborhood: 'Las Vegas Valley',
    description: 'Weekly open house updates for Las Vegas homes. Never miss a showing.',
    keywords: ['open houses', 'Las Vegas open house schedule', 'home showings'],
    focus: 'general',
    heroTitle: 'Las Vegas Open House Schedule',
    heroSubtitle: 'Weekly open house listings across the Las Vegas Valley. Sign up for alerts.',
  },

  'openhousemarketplace.com': {
    name: 'Open House Marketplace',
    neighborhood: 'Las Vegas Valley',
    description: 'Your marketplace for Las Vegas open houses. Browse, save, and schedule tours.',
    keywords: ['open house marketplace', 'Las Vegas homes', 'schedule home tour'],
    focus: 'general',
    heroTitle: 'Open House Marketplace',
    heroSubtitle: 'Browse and schedule tours for open houses across the Las Vegas Valley.',
  },

  // ── Specialty Domains ─────────────────────────────────────────────

  'opportunityzonespecialist.com': {
    name: 'Opportunity Zone Specialist',
    neighborhood: 'Las Vegas Valley',
    description: 'Las Vegas Opportunity Zone real estate specialist. Tax-advantaged investment properties.',
    keywords: ['opportunity zone', 'tax advantage real estate', 'Las Vegas investment'],
    focus: 'investment',
    heroTitle: 'Las Vegas Opportunity Zones',
    heroSubtitle: 'Tax-advantaged investment properties in federally designated Opportunity Zones.',
  },

  'opportunityzonespecialists.com': {
    name: 'Opportunity Zone Specialists',
    neighborhood: 'Las Vegas Valley',
    description: 'Opportunity Zone investment specialists in Las Vegas. Maximize tax benefits with the right property.',
    keywords: ['opportunity zone specialist', 'qualified opportunity fund', 'Las Vegas OZ'],
    focus: 'investment',
    heroTitle: 'Opportunity Zone Investment Experts',
    heroSubtitle: 'Navigate Opportunity Zone regulations and find the best tax-advantaged investments in Las Vegas.',
  },

  'speedycashhomeoffers.com': {
    name: 'Speedy Cash Home Offers',
    neighborhood: 'Las Vegas Valley',
    description: 'Get a fast cash offer on your Las Vegas home. Close in as little as 7 days.',
    keywords: ['cash offer home', 'sell home fast Las Vegas', 'cash buyer Las Vegas'],
    focus: 'general',
    heroTitle: 'Fast Cash Offer for Your Home',
    heroSubtitle: 'Get a competitive cash offer in 24 hours. Close on your timeline — as fast as 7 days.',
  },

  'probaterealestatesales.com': {
    name: 'Probate Real Estate Sales',
    neighborhood: 'Las Vegas Valley',
    description: 'Probate real estate specialist in Las Vegas. Compassionate guidance through probate property sales.',
    keywords: ['probate real estate', 'sell inherited property', 'Las Vegas probate sale'],
    focus: 'general',
    heroTitle: 'Probate Real Estate Specialist',
    heroSubtitle: 'Compassionate, expert guidance through the probate property sale process in Las Vegas.',
  },

  'realestatetalkwithdrduffy.com': {
    name: 'Real Estate Talk with Dr. Duffy',
    neighborhood: 'Las Vegas Valley',
    description: 'Real estate insights, market updates, and expert advice from Dr. Jan Duffy.',
    keywords: ['real estate podcast', 'Las Vegas market update', 'Dr Duffy real estate'],
    focus: 'general',
    heroTitle: 'Real Estate Talk with Dr. Duffy',
    heroSubtitle: 'Market insights, buying tips, and Las Vegas real estate wisdom from a 20-year veteran.',
  },

  'realtimetouring.com': {
    name: 'Real Time Touring',
    neighborhood: 'Las Vegas Valley',
    description: 'Real-time virtual and in-person home tours in Las Vegas. Schedule your tour today.',
    keywords: ['virtual home tour', 'Las Vegas home tour', 'schedule showing'],
    focus: 'general',
    heroTitle: 'Real-Time Home Tours',
    heroSubtitle: 'Virtual and in-person home tours across Las Vegas. See homes on your schedule.',
  },

  // ── Relocation & Lifestyle ────────────────────────────────────────

  'lasvegasfamilyhomes.com': {
    name: 'Las Vegas Family Homes',
    neighborhood: 'Las Vegas Valley',
    description: 'Sell a home in Las Vegas with square footage, lot, and commute as the listing story — not a generic valley flyer.',
    keywords: ['family homes Las Vegas', 'best schools Las Vegas', 'family neighborhoods'],
    focus: 'family',
    heroTitle: 'Las Vegas Family Homes',
    heroSubtitle: 'The best neighborhoods for families — top schools, parks, and safe communities.',
  },

  'lasvegasmultigenhomes.com': {
    name: 'Las Vegas Multi-Gen Homes',
    neighborhood: 'Las Vegas Valley',
    description: 'Multi-generational homes in Las Vegas. Casitas, guest suites, and dual-master floor plans.',
    keywords: ['multigenerational homes', 'casita Las Vegas', 'dual master homes'],
    focus: 'family',
    heroTitle: 'Multi-Generational Las Vegas Homes',
    heroSubtitle: 'Homes designed for extended families — casitas, guest suites, and dual-master floor plans.',
  },

  'mesaskyeview.com': {
    name: 'Mesa Skye View',
    neighborhood: 'Mesa',
    description: 'Homes with stunning mesa and mountain views in Las Vegas. Elevated desert living.',
    keywords: ['mesa view homes', 'Las Vegas mountain view', 'desert homes'],
    focus: 'luxury',
    heroTitle: 'Mesa Skye View Homes',
    heroSubtitle: 'Elevated desert living with panoramic mesa and mountain views.',
  },

  'vegashomeagents.com': {
    name: 'Vegas Home Agents',
    neighborhood: 'Las Vegas Valley',
    description: 'Top Las Vegas home agents. Dr. Jan Duffy and team — your trusted Vegas real estate experts.',
    keywords: ['Las Vegas real estate agent', 'top realtor Las Vegas', 'Vegas home agents'],
    focus: 'general',
    heroTitle: 'Your Trusted Vegas Home Agents',
    heroSubtitle: 'Dr. Jan Duffy and team — Las Vegas\' most trusted real estate professionals.',
  },

  'vegasluxuryaddress.com': {
    name: 'Vegas Luxury Address',
    neighborhood: 'Las Vegas Valley',
    description: 'Luxury homes and estates in Las Vegas. Guard-gated communities, Strip views, and custom builds.',
    keywords: ['luxury homes Las Vegas', 'Las Vegas estates', 'guard gated homes'],
    focus: 'luxury',
    heroTitle: 'Las Vegas Luxury Addresses',
    heroSubtitle: 'The finest guard-gated communities, custom estates, and high-rise penthouses in Las Vegas.',
    accentColor: '#c9a84c',
  },

  'vegasvalleyhomesforsale.com': {
    name: 'Vegas Valley Homes',
    neighborhood: 'Las Vegas Valley',
    description: 'Search all homes for sale across the Las Vegas Valley. Henderson, Summerlin, North Las Vegas, and more.',
    keywords: ['Las Vegas Valley homes', 'homes for sale Vegas', 'Henderson homes'],
    focus: 'general',
    heroTitle: 'Vegas Valley Homes for Sale',
    heroSubtitle: 'Every community. Every price range. Your complete Las Vegas Valley home search.',
  },

  'zoomintohomes.com': {
    name: 'Zoom Into Homes',
    neighborhood: 'Las Vegas Valley',
    description: 'Zoom into Las Vegas homes — virtual tours, 3D walkthroughs, and video showings.',
    keywords: ['virtual tour homes', 'zoom home tour', 'Las Vegas video showing'],
    focus: 'general',
    heroTitle: 'Zoom Into Your Next Home',
    heroSubtitle: 'Virtual tours, video walkthroughs, and live Zoom showings for Las Vegas homes.',
  },

  // ── Note: Non-real-estate domains (stickman*, samaritan*, etc.) ──
  // These are intentionally NOT mapped. They will get the DEFAULT_CONFIG
  // which shows the generic Las Vegas real estate template.
  // If you want them to show different content, add entries above.
};
