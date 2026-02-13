import { AGENT } from '@/config/agent';
import type { DomainConfig } from '@/config/domains';

export default function Footer({ config }: { config: DomainConfig }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-primary-200">
      {/* Main Footer */}
      <div className="container-wide mx-auto section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Agent Info + NAP */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-display font-bold text-white mb-3">
              {AGENT.name}
            </h3>
            <p className="text-sm text-primary-300 mb-1">{AGENT.title}</p>
            <p className="text-sm text-primary-300 mb-4">
              {AGENT.brokerage}
              <br />
              License: {AGENT.license}
            </p>

            {/* NAP — must match GBP */}
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

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Search Homes', href: '/listings' },
                { label: 'About Dr. Duffy', href: '/about' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'Home Valuation', href: '/contact#valuation' },
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

          {/* Hours + Actions */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Office Hours
            </h4>
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
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <div className="container-wide mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-400">
            <p>
              &copy; {year} {AGENT.name}. All rights reserved. Powered by{' '}
              {AGENT.brokerageShort}.
            </p>
            <p>
              {config.neighborhood} real estate | {config.city}, {config.state}{' '}
              {config.zip}
            </p>
          </div>
          <p className="mt-3 text-xs text-primary-500 text-center sm:text-left">
            Equal Housing Opportunity. All information deemed reliable but not
            guaranteed. Listing data provided by the Greater Las Vegas Association
            of REALTORS® MLS.
          </p>
        </div>
      </div>
    </footer>
  );
}
