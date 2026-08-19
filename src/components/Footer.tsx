import { AGENT } from '@/config/agent';
import type { DomainConfig } from '@/config/domains';
import { NEIGHBORHOODS } from '@/config/neighborhoods';

export default function Footer({ config }: { config: DomainConfig }) {
  const year = new Date().getFullYear();
  const featured = NEIGHBORHOODS.slice(0, 12);

  return (
    <footer className="bg-primary-900 text-primary-200">
      <div className="container-wide mx-auto section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-lg font-display font-bold text-white mb-3">
              {AGENT.name}, REALTOR® — Las Vegas listing agent
            </h2>
            <p className="text-sm text-primary-300 mb-1">{AGENT.title}</p>
            <p className="text-sm text-primary-300 mb-4">
              {AGENT.brokerage}
              <br />
              License: {AGENT.license}
            </p>

            <address className="not-italic text-sm text-primary-300 space-y-1">
              <p>{AGENT.address.full}</p>
              <p>
                <a
                  href={`tel:${AGENT.phoneTel}`}
                  className="text-bhhs-gold hover:text-accent-300 transition-colors font-semibold"
                >
                  {AGENT.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${AGENT.email}`}
                  className="hover:text-white transition-colors"
                >
                  {AGENT.email}
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              How to sell your Las Vegas home
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: `Sell in ${config.neighborhood}`, href: '/' },
                { label: 'All Las Vegas neighborhoods', href: '/neighborhoods' },
                { label: "What's selling now", href: '/listings' },
                { label: 'How we sell', href: '/sell' },
                { label: 'Schedule a listing consultation', href: '#schedule' },
                { label: 'About Dr. Duffy', href: '/about' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Sell by Las Vegas neighborhood
            </h3>
            <ul className="space-y-2 text-sm">
              {featured.map((n) => (
                <li key={n.slug}>
                  <a
                    href={`/neighborhoods/${n.slug}`}
                    className="text-primary-300 hover:text-white transition-colors"
                  >
                    {n.name} homes
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/neighborhoods"
                  className="text-bhhs-gold hover:text-white transition-colors"
                >
                  View all neighborhoods
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Office hours at {AGENT.address.full}
            </h3>
            <ul className="space-y-1 text-sm text-primary-300 mb-6">
              {AGENT.hoursDisplay.map((h) => (
                <li key={h.days}>
                  <span className="text-primary-400">{h.days}:</span>{' '}
                  <span className="text-white">{h.time}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-2">
              <a
                href={`tel:${AGENT.phoneTel}`}
                className="btn-gold text-sm px-4 py-2 text-center"
              >
                Call Now
              </a>
              <a
                href={AGENT.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm px-4 py-2 text-center !text-primary-200 !border-primary-600 hover:!bg-primary-800"
              >
                Google Reviews
              </a>
              <a
                href={AGENT.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm px-4 py-2 text-center !text-primary-200 !border-primary-600 hover:!bg-primary-800"
              >
                Directions
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-800">
        <div className="container-wide mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-400">
            <p>
              &copy; {year} {AGENT.name}. All rights reserved. {AGENT.brokerageShort}.
            </p>
            <p>
              Selling homes in {config.neighborhood} | {config.city}, {config.state}{' '}
              {config.zip}
            </p>
          </div>
          <p className="mt-3 text-xs text-primary-700 text-center sm:text-left">
            Equal Housing Opportunity. All information deemed reliable but not
            guaranteed. Listing data provided by the Greater Las Vegas Association
            of REALTORS® MLS.
          </p>
        </div>
      </div>
    </footer>
  );
}
