import { AGENT } from '@/config/agent';

export default function SellerCta({
  neighborhood,
  heading,
  body,
}: {
  neighborhood: string;
  heading?: string;
  body?: string;
}) {
  return (
    <section className="section-padding bg-gradient-to-r from-bhhs-maroon to-primary-900">
      <div className="container-narrow mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
          {heading || `Ready to Sell Your ${neighborhood} Home?`}
        </h2>
        <p className="text-lg text-primary-200 mb-8 max-w-2xl mx-auto">
          {body ||
            `Get a current ${neighborhood} market analysis and a listing plan for your address. Call ${AGENT.name} at ${AGENT.phone}.`}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#schedule" className="btn-gold text-base px-8 py-4">
            Schedule a listing consultation
          </a>
          <a
            href={`tel:${AGENT.phoneTel}`}
            className="btn-secondary !text-white !border-white/30 hover:!bg-white/10 text-base px-8 py-4"
          >
            Call {AGENT.phone}
          </a>
        </div>
        <p className="mt-6 text-sm text-primary-300">
          {AGENT.brokerage} · {AGENT.address.full}
        </p>
      </div>
    </section>
  );
}
