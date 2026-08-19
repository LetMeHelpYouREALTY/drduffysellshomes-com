import type { Metadata } from 'next';
import { getDomainConfig } from '@/lib/getDomainConfig';
import { AGENT } from '@/config/agent';
import ContactForm from '@/components/ContactForm';
import { findNeighborhoodForName, getAllNeighborhoods } from '@/config/neighborhoods';
import { getSiteUrl } from '@/lib/siteUrl';
import { buildPageMetadata } from '@/lib/pageMetadata';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHero from '@/components/PageHero';

export async function generateMetadata(): Promise<Metadata> {
  const config = await getDomainConfig();
  const baseUrl = await getSiteUrl();
  const place = findNeighborhoodForName(config.neighborhood)?.name ?? config.neighborhood;
  return buildPageMetadata({
    title: `List Your ${place} Home — Contact ${AGENT.name}`,
    description: `Request a ${place} home valuation or listing appointment. ${AGENT.name}, ${AGENT.brokerage}, ${AGENT.address.full}. Call ${AGENT.phone}. Hours: ${AGENT.hoursDisplay[0].days} ${AGENT.hoursDisplay[0].time}.`,
    path: '/contact',
    baseUrl,
    keywords: [
      `${place} home valuation`,
      `list home ${place}`,
      `contact ${AGENT.name}`,
    ],
  });
}

export const revalidate = 86400;

export default async function ContactPage() {
  const config = await getDomainConfig();
  const place = findNeighborhoodForName(config.neighborhood)?.name ?? config.neighborhood;
  const neighborhoods = getAllNeighborhoods();

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Sell Your Home', href: '/' },
          { name: 'Contact' },
        ]}
      />

      <PageHero
        title={`List Your ${place} Home`}
        subtitle={`Send the address. We return a ${place} CMA and a listing plan — not a valley-wide guess. Call ${AGENT.phone} or use the form.`}
        neighborhood={place}
      />

      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
                Request a {place} listing consultation
              </h2>
              <ContactForm neighborhood={place} />
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-primary-50 rounded-xl p-6">
                <h2 className="font-display font-bold text-primary-900 mb-4">
                  Direct contact
                </h2>
                <div className="space-y-4">
                  <a
                    href={`tel:${AGENT.phoneTel}`}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div>
                      <p className="text-xs text-primary-500">Call</p>
                      <p className="font-semibold text-bhhs-maroon">{AGENT.phone}</p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${AGENT.email}`}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div>
                      <p className="text-xs text-primary-500">Email</p>
                      <p className="font-semibold text-bhhs-maroon text-sm">{AGENT.email}</p>
                    </div>
                  </a>
                  <a
                    href={AGENT.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div>
                      <p className="text-xs text-primary-500">Schedule</p>
                      <p className="font-semibold text-bhhs-maroon">Listing appointment</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-primary-50 rounded-xl p-6">
                <h2 className="font-display font-bold text-primary-900 mb-4">Office</h2>
                <address className="not-italic text-sm text-primary-700 space-y-1 mb-4">
                  <p className="font-semibold">{AGENT.brokerage}</p>
                  <p>{AGENT.address.full}</p>
                </address>
                <div className="space-y-1 text-sm text-primary-600">
                  {AGENT.hoursDisplay.map((h) => (
                    <div key={h.days} className="flex justify-between gap-4">
                      <span>{h.days}</span>
                      <span className="font-medium text-primary-800">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-primary-100">
                <iframe
                  src={AGENT.googleMapsEmbed}
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${AGENT.name} office at ${AGENT.address.full}`}
                />
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="https://maps.google.com/?q=9406+Del+Webb+Blvd+Las+Vegas+NV+89134"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-center"
                >
                  Directions
                </a>
                <a
                  href={AGENT.googleReviews}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-bhhs-cream rounded-xl text-center hover:shadow-md transition-shadow"
                >
                  <p className="font-semibold text-primary-900 text-sm">View Google Reviews</p>
                  <p className="text-xs text-primary-500">Read seller feedback</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="valuation" className="section-padding bg-gradient-to-r from-bhhs-maroon to-primary-900">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            What is your {place} home worth this week?
          </h2>
          <p className="text-lg text-primary-200 mb-8 max-w-xl mx-auto">
            A CMA uses closed {place} sales and the actives buyers will tour this weekend.
            No valley-wide average. Call {AGENT.phone}.
          </p>
          <a href={`tel:${AGENT.phoneTel}`} className="btn-gold text-base px-8 py-4">
            Request free valuation — {AGENT.phone}
          </a>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
            Selling in another Las Vegas neighborhood?
          </h2>
          <div className="flex flex-wrap gap-2">
            {neighborhoods.map((n) => (
              <a
                key={n.slug}
                href={`/neighborhoods/${n.slug}`}
                className="px-3 py-1 text-sm bg-primary-50 text-primary-700 rounded-full border border-primary-100 hover:border-bhhs-maroon"
              >
                {n.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
