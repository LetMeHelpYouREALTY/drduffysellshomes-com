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
    street: '9406 Del Webb Blvd',
    city: 'Las Vegas',
    state: 'NV',
    zip: '89134',
    country: 'US',
    full: '9406 Del Webb Blvd, Las Vegas, NV 89134',
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
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3219.0!2d-115.33!3d36.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDEzJzEyLjAiTiAxMTXCsDE5JzQ4LjAiVw!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',

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
