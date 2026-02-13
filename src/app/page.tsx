import { getDomainConfig } from '@/lib/getDomainConfig';
import { AGENT } from '@/config/agent';
import Hero from '@/components/Hero';
import { RealScoutListings } from '@/components/RealScoutWidget';

export default async function HomePage() {
  const config = await getDomainConfig();

  return (
    <>
      <Hero config={config} />

      {/* Features / Why Choose Section */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-900 mb-4">
              Why Work with {AGENT.name}?
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              When it comes to {config.neighborhood} real estate, experience and local knowledge make all the difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🏆',
                title: 'Top 1% REALTOR®',
                desc: `Consistently ranked in the top 1% of Las Vegas REALTORS® with over $500M in career sales. Chairman's Circle award recipient.`,
              },
              {
                icon: '📊',
                title: 'Market Expert',
                desc: `Deep knowledge of ${config.neighborhood} market trends, pricing, and inventory. Data-driven strategies for buyers and sellers.`,
              },
              {
                icon: '🤝',
                title: 'Concierge Service',
                desc: 'From first showing to closing and beyond — personalized service that continues after the sale with our Forever Concierge program.',
              },
              {
                icon: '🔑',
                title: 'Exclusive Access',
                desc: 'Access to off-market listings, pocket listings, and new construction opportunities before they hit the MLS.',
              },
              {
                icon: '🏠',
                title: 'Neighborhood Specialist',
                desc: `${config.neighborhood} is our specialty. Schools, amenities, HOA details, and future development — we know it all.`,
              },
              {
                icon: '💰',
                title: 'Best Negotiator',
                desc: 'PhD in Business Administration and decades of negotiation experience ensure you get the best possible deal.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl border border-primary-100 hover:border-bhhs-gold/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-display font-bold text-primary-900 mb-2 group-hover:text-bhhs-maroon transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-primary-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RealScout Listings Widget Placeholder */}
      <section className="section-padding bg-primary-50">
        <div className="container-wide mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-900 mb-4">
              Featured {config.neighborhood} Homes
            </h2>
            <p className="text-lg text-primary-600">
              Browse the latest listings — updated in real time from the MLS.
            </p>
          </div>
          {/* Worker injects RealScout listing widget into these elements */}
          <RealScoutListings status="active" numResults="6" />
          <div className="mt-8 text-center">
            <a href="/listings" className="btn-primary">
              View All {config.neighborhood} Listings
            </a>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-900 mb-6">
                Meet {AGENT.name}
              </h2>
              <p className="text-lg text-primary-600 leading-relaxed mb-6">
                {AGENT.shortBio}
              </p>
              <ul className="space-y-3 mb-8">
                {AGENT.credentials.slice(0, 4).map((cred) => (
                  <li key={cred} className="flex items-start gap-3 text-primary-700">
                    <svg
                      className="w-5 h-5 text-bhhs-gold mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">{cred}</span>
                  </li>
                ))}
              </ul>
              <a href="/about" className="btn-secondary">
                Learn More About Dr. Duffy
              </a>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-bhhs-cream to-primary-100 overflow-hidden">
                {AGENT.headshotUrl ? (
                  <img
                    src={AGENT.headshotUrl}
                    alt={`${AGENT.name} — ${AGENT.title}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-primary-400">
                    <span className="text-6xl font-display font-bold">JD</span>
                  </div>
                )}
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-bhhs-gold/20 rounded-full -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-bhhs-maroon/10 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="section-padding bg-gradient-to-r from-bhhs-maroon to-primary-900">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
            Ready to Find Your {config.neighborhood} Home?
          </h2>
          <p className="text-lg text-primary-200 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re buying, selling, or just exploring — {AGENT.name} is here to
            help. Schedule a free, no-obligation consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-gold text-base px-8 py-4">
              Schedule Consultation
            </a>
            <a
              href={`tel:${AGENT.phoneTel}`}
              className="btn-secondary !text-white !border-white/30 hover:!bg-white/10 text-base px-8 py-4"
            >
              Call {AGENT.phone}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto">
          <h2 className="text-3xl font-display font-bold text-primary-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {getFAQs(config).map((faq, i) => (
              <details
                key={i}
                className="group border border-primary-100 rounded-lg overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-primary-50 transition-colors">
                  <span className="font-semibold text-primary-900 text-sm pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className="w-5 h-5 text-primary-400 group-open:rotate-180 transition-transform flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-primary-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: getFAQs(config).map((faq) => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                  },
                })),
              }),
            }}
          />
        </div>
      </section>
    </>
  );
}

function getFAQs(config: { neighborhood: string; city: string; state: string }) {
  return [
    {
      question: `What is the average home price in ${config.neighborhood}?`,
      answer: `Home prices in ${config.neighborhood} vary by community, size, and features. Contact Dr. Jan Duffy for a current market analysis specific to the area you're interested in. She provides free, no-obligation market reports.`,
    },
    {
      question: `How do I start searching for homes in ${config.neighborhood}?`,
      answer: `The easiest way is to use the search tool on this website, which connects directly to the MLS for real-time listings. You can also call Dr. Duffy at 702-903-1952 to discuss your needs and get personalized recommendations.`,
    },
    {
      question: 'Do I need a REALTOR® to buy a home?',
      answer:
        'While not legally required, having an experienced REALTOR® like Dr. Jan Duffy ensures you get expert negotiation, market knowledge, access to all listings (including off-market), and guidance through the complex purchase process — all at no additional cost to buyers.',
    },
    {
      question: `What makes ${config.neighborhood} a good place to live?`,
      answer: `${config.neighborhood} in ${config.city}, ${config.state} offers a unique combination of location, amenities, and lifestyle. From top-rated schools to parks, shopping, and dining — it's one of the most desirable areas in the Las Vegas Valley. Ask Dr. Duffy for a detailed neighborhood guide.`,
    },
    {
      question: 'How long does it take to buy a home in Las Vegas?',
      answer:
        'The typical home purchase takes 30-45 days from accepted offer to closing. However, cash purchases can close in as little as 7-14 days. Dr. Duffy helps streamline the process so there are no surprises.',
    },
  ];
}
