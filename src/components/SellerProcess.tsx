import { AGENT } from '@/config/agent';
import { PROCESS_STEP_H3, howWeSellH2 } from '@/lib/headings';

export default function SellerProcess({ neighborhood }: { neighborhood: string }) {
  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howWeSellH2(neighborhood),
    description: `The listing process ${AGENT.name} uses to sell a home in ${neighborhood}, Las Vegas, NV.`,
    supply: [
      { '@type': 'HowToSupply', name: 'Current comparative market analysis' },
      { '@type': 'HowToSupply', name: 'MLS listing and neighborhood marketing' },
    ],
    step: PROCESS_STEP_H3.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.desc,
    })),
  };

  return (
    <section className="section-padding bg-primary-50">
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-900 mb-4">
            {howWeSellH2(neighborhood)}
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Four steps. One listing plan. Built for {neighborhood} buyers already watching the MLS.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEP_H3.map((step, index) => (
            <div
              key={step.name}
              className="p-6 rounded-xl bg-white border border-primary-100"
            >
              <p className="text-sm font-bold text-bhhs-gold mb-2">Step {index + 1}</p>
              <h3 className="text-lg font-display font-bold text-primary-900 mb-2">
                {step.name}
              </h3>
              <p className="text-sm text-primary-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-primary-500 mt-8">
          {AGENT.name} · {AGENT.brokerage} · {AGENT.address.full} ·{' '}
          <a href={`tel:${AGENT.phoneTel}`} className="text-bhhs-maroon font-semibold">
            {AGENT.phone}
          </a>
        </p>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}
        />
      </div>
    </section>
  );
}
