import type { Metadata } from 'next';
import { getDomainConfig } from '@/lib/getDomainConfig';
import { AGENT } from '@/config/agent';

export async function generateMetadata(): Promise<Metadata> {
  const config = await getDomainConfig();
  return {
    title: `About ${AGENT.name} — ${config.neighborhood} Real Estate Expert`,
    description: `${AGENT.shortBio} Serving ${config.neighborhood}, ${config.city}, ${config.state}.`,
  };
}

export default async function AboutPage() {
  const config = await getDomainConfig();

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary-900 to-bhhs-maroon section-padding py-16">
        <div className="container-wide mx-auto text-center">
          <h1 className="text-3xl lg:text-5xl font-display font-bold text-white mb-4">
            About {AGENT.name}
          </h1>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">
            Your trusted {config.neighborhood} real estate expert with over 20 years of experience.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Photo */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-bhhs-cream to-primary-100 overflow-hidden mb-6">
                  {AGENT.headshotUrl ? (
                    <img
                      src={AGENT.headshotUrl}
                      alt={`${AGENT.name} — ${AGENT.title}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-8xl font-display font-bold text-primary-300">JD</span>
                    </div>
                  )}
                </div>
                <div className="bg-primary-50 rounded-xl p-6">
                  <h3 className="font-display font-bold text-primary-900 mb-3">Contact Info</h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="text-primary-500">Phone:</span>{' '}
                      <a href={`tel:${AGENT.phoneTel}`} className="text-bhhs-maroon font-semibold">
                        {AGENT.phone}
                      </a>
                    </p>
                    <p>
                      <span className="text-primary-500">Email:</span>{' '}
                      <a href={`mailto:${AGENT.email}`} className="text-bhhs-maroon">
                        {AGENT.email}
                      </a>
                    </p>
                    <p>
                      <span className="text-primary-500">Office:</span>{' '}
                      <span className="text-primary-700">{AGENT.address.full}</span>
                    </p>
                    <p>
                      <span className="text-primary-500">License:</span>{' '}
                      <span className="text-primary-700">{AGENT.license}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
                {AGENT.fullName}
              </h2>
              <p className="text-sm text-bhhs-maroon font-semibold mb-6">
                {AGENT.title} | {AGENT.brokerage}
              </p>

              <div className="prose prose-lg max-w-none text-primary-700 space-y-4">
                <p>{AGENT.shortBio}</p>
                <p>
                  Specializing in {config.neighborhood} and the greater {config.city} area,
                  Dr. Duffy combines academic rigor with real-world expertise to deliver
                  exceptional results for every client. Whether you&apos;re a first-time
                  buyer, luxury home seeker, or seasoned investor, she provides the
                  data-driven insights and personalized attention you deserve.
                </p>
                <p>
                  As a member of Berkshire Hathaway HomeServices — one of the most trusted
                  names in real estate — Dr. Duffy has access to a global network of
                  resources, marketing tools, and buyer connections that independent agents
                  simply can&apos;t match.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-10">
                <h3 className="text-xl font-display font-bold text-primary-900 mb-4">
                  Credentials & Achievements
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {AGENT.credentials.map((cred) => (
                    <div
                      key={cred}
                      className="flex items-start gap-3 p-3 rounded-lg bg-bhhs-cream"
                    >
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
                      <span className="text-sm text-primary-800">{cred}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Areas */}
              <div className="mt-10">
                <h3 className="text-xl font-display font-bold text-primary-900 mb-4">
                  Service Areas
                </h3>
                <p className="text-primary-600 mb-4">
                  Dr. Duffy serves the entire Las Vegas Valley, with deep expertise in:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    config.neighborhood,
                    'Summerlin',
                    'Henderson',
                    'North Las Vegas',
                    'Lone Mountain',
                    'Skye Canyon',
                    'The Ridges',
                    'Spanish Trail',
                    'Southern Highlands',
                    'Green Valley',
                  ].map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 text-sm bg-primary-50 text-primary-700 rounded-full border border-primary-100"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 p-8 bg-gradient-to-r from-bhhs-maroon to-primary-800 rounded-2xl text-center">
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  Ready to Get Started?
                </h3>
                <p className="text-primary-200 mb-6">
                  Schedule a free consultation with Dr. Duffy today.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="/contact" className="btn-gold">
                    Schedule Consultation
                  </a>
                  <a
                    href={`tel:${AGENT.phoneTel}`}
                    className="btn-secondary !text-white !border-white/30 hover:!bg-white/10"
                  >
                    Call {AGENT.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
