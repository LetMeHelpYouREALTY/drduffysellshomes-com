import type { Metadata } from 'next';
import { getDomainConfig } from '@/lib/getDomainConfig';
import { AGENT } from '@/config/agent';
import ContactForm from '@/components/ContactForm';

export async function generateMetadata(): Promise<Metadata> {
  const config = await getDomainConfig();
  return {
    title: `Contact ${AGENT.name} — ${config.neighborhood} Real Estate`,
    description: `Contact Dr. Jan Duffy for ${config.neighborhood} real estate. Call ${AGENT.phone} or schedule a free consultation.`,
  };
}

export default async function ContactPage() {
  const config = await getDomainConfig();

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-900 to-bhhs-maroon section-padding py-16">
        <div className="container-wide mx-auto text-center">
          <h1 className="text-3xl lg:text-5xl font-display font-bold text-white mb-4">
            Contact {AGENT.name}
          </h1>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">
            Ready to explore {config.neighborhood}? Call, email, or fill out the form below for a
            free, no-obligation consultation.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
                Send a Message
              </h2>
              <ContactForm neighborhood={config.neighborhood} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Direct Contact */}
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="font-display font-bold text-primary-900 mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <a
                    href={`tel:${AGENT.phoneTel}`}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-full bg-bhhs-maroon flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-primary-500">Call Now</p>
                      <p className="font-semibold text-bhhs-maroon">{AGENT.phone}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${AGENT.email}`}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-full bg-bhhs-maroon flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
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
                    <div className="w-10 h-10 rounded-full bg-bhhs-gold flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-primary-500">Schedule Online</p>
                      <p className="font-semibold text-bhhs-maroon">Book a Consultation</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Office Info */}
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="font-display font-bold text-primary-900 mb-4">Office</h3>
                <address className="not-italic text-sm text-primary-700 space-y-1 mb-4">
                  <p className="font-semibold">{AGENT.brokerage}</p>
                  <p>{AGENT.address.full}</p>
                </address>
                <div className="space-y-1 text-sm text-primary-600">
                  {AGENT.hoursDisplay.map((h) => (
                    <div key={h.days} className="flex justify-between">
                      <span>{h.days}</span>
                      <span className="font-medium text-primary-800">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-xl overflow-hidden border border-primary-100">
                <iframe
                  src={AGENT.googleMapsEmbed}
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${AGENT.name} office location`}
                />
              </div>

              {/* Reviews */}
              <a
                href={AGENT.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-bhhs-cream rounded-xl text-center hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-5 h-5 text-bhhs-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-semibold text-primary-900 text-sm">View Google Reviews</p>
                <p className="text-xs text-primary-500">See what our clients say</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Home Valuation CTA */}
      <section id="valuation" className="section-padding bg-gradient-to-r from-bhhs-maroon to-primary-900">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            What&apos;s Your Home Worth?
          </h2>
          <p className="text-lg text-primary-200 mb-8 max-w-xl mx-auto">
            Get a free, no-obligation home valuation for your {config.neighborhood} property.
            Dr. Duffy provides accurate, data-driven market analysis.
          </p>
          <a
            href={`tel:${AGENT.phoneTel}`}
            className="btn-gold text-base px-8 py-4"
          >
            Request Free Valuation — {AGENT.phone}
          </a>
        </div>
      </section>
    </>
  );
}
