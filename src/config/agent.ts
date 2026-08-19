/**
 * Agent configuration — Dr. Jan Duffy
 * Shared across all domains. NAP must match Google Business Profile exactly.
 */
export const AGENT = {
  name: 'Dr. Jan Duffy',
  fullName: 'Dr. Jan Duffy, PhD',
  title: 'REALTOR® | Luxury Home Specialist',
  license: 'S.0197614.LLC',
  brokerage: 'Berkshire Hathaway HomeServices Nevada Properties',
  brokerageShort: 'BHHS Nevada Properties',

  // NAP — must match GBP exactly
  phone: '702-903-1952',
  phoneTel: '+17029031952',
  email: 'DrJanDuffy@gmail.com',
  address: {
    street: '5550 Painted Mirage Rd Ste 140A',
    city: 'Las Vegas',
    state: 'NV',
    zip: '89149',
    country: 'US',
    full: '5550 Painted Mirage Rd Ste 140A, Las Vegas, NV 89149',
  },
  // OpenStreetMap Nominatim, building 5550 Painted Mirage Road (way 582155954), 2026-08-19
  geo: {
    latitude: 36.261827,
    longitude: -115.254987,
  },

  // Hours — match GBP
  hours: 'Mo-Fr 09:00-17:00, Sa 10:00-14:00',
  hoursDisplay: [
    { days: 'Monday - Friday', time: '9:00 AM - 5:00 PM' },
    { days: 'Saturday', time: '10:00 AM - 2:00 PM' },
    { days: 'Sunday', time: 'By Appointment' },
  ],

  // Links
  calendly: 'https://calendly.com/drjanduffy/listing-consultation',
  realscoutAgentId: 'drjanduffy',
  googleReviews: 'https://g.page/r/CYmVqofF2JYBEAI/review',
  mapsDirectionsUrl:
    'https://maps.google.com/?q=5550+Painted+Mirage+Rd+Ste+140A,+Las+Vegas,+NV+89149',
  googleMapsEmbed:
    'https://www.google.com/maps?q=5550+Painted+Mirage+Rd+Ste+140A,+Las+Vegas,+NV+89149&output=embed',

  // Social
  social: {
    facebook: 'https://www.facebook.com/DrJanDuffy',
    instagram: 'https://www.instagram.com/drjanduffy/',
    linkedin: 'https://www.linkedin.com/in/drjanduffy/',
    youtube: 'https://www.youtube.com/@drjanduffy',
  },

  // Cloudflare Images
  headshotUrl:
    'https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/branding-headshots-dr-jan-duffy-2026/public',
  logoUrl:
    'https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/branding-bhhs-logo/public',

  // Bio
  shortBio:
    'With over 20 years of experience in the Las Vegas luxury real estate market, Dr. Jan Duffy brings unmatched expertise, market knowledge, and personalized service to every client.',
  credentials: [
    'PhD Researcher',
    'Certified Luxury Home Marketing Specialist (CLHMS)',
    'Over $500M in career sales',
    'Top 1% of Las Vegas REALTORS®',
    'Berkshire Hathaway HomeServices Chairman\'s Circle',
  ],
} as const;
