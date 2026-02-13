import { AGENT } from '@/config/agent';
import type { DomainConfig } from '@/config/domains';
import { RealScoutSearch } from '@/components/RealScoutWidget';

export default function Hero({ config }: { config: DomainConfig }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-bhhs-maroon">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative container-wide mx-auto section-padding py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <p className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-bhhs-gold uppercase bg-white/10 rounded-full mb-6">
              {config.neighborhood} &bull; {config.city}, {config.state}
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white leading-tight mb-6">
              {config.heroTitle}
            </h1>

            <p className="text-lg sm:text-xl text-primary-200 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              {config.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/listings" className="btn-gold text-base px-8 py-4">
                Search Homes
              </a>
              <a
                href={`tel:${AGENT.phoneTel}`}
                className="btn-secondary !text-white !border-white/30 hover:!bg-white/10 text-base px-8 py-4"
              >
                Call {AGENT.phone}
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-primary-300">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-bhhs-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Top 1% REALTOR®</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-bhhs-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span>20+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-bhhs-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M1 2.75A.75.75 0 011.75 2h16.5a.75.75 0 010 1.5H18v8.75A2.75 2.75 0 0115.25 15h-1.072l.798 3.06a.75.75 0 01-1.452.38L13.41 18H6.59l-.114.44a.75.75 0 01-1.452-.38L5.822 15H4.75A2.75 2.75 0 012 12.25V3.5h-.25A.75.75 0 011 2.75z" clipRule="evenodd" />
                </svg>
                <span>$500M+ Sold</span>
              </div>
            </div>
          </div>

          {/* RealScout Search Widget Placeholder */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-xl font-display font-bold text-white mb-4">
                Quick Property Search
              </h2>
              <p className="text-primary-300 text-sm mb-6">
                Powered by RealScout — search every listing in {config.neighborhood}.
              </p>
              {/* 
                The Worker injects RealScout widgets automatically.
                This div acts as a visual placeholder.
              */}
              <div className="space-y-4">
                <RealScoutSearch />
              </div>
              <a
                href="/listings"
                className="block mt-6 text-center text-sm text-bhhs-gold hover:text-accent-300 transition-colors"
              >
                Advanced Search &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
