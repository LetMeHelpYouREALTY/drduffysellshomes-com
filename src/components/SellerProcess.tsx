import { AGENT } from '@/config/agent';

const STEPS = [
  {
    title: 'Neighborhood CMA',
    desc: 'Closed sales on your street and plan — not a valley average — before we talk list price.',
  },
  {
    title: 'Punch-list & photos',
    desc: 'We rank repairs by return, then shoot the home so buyers touring this weekend pick yours.',
  },
  {
    title: 'MLS + neighborhood ads',
    desc: 'Remarks name your community, amenities, and commute. Ads target people already searching that ZIP.',
  },
  {
    title: 'Offers & closing',
    desc: 'We negotiate inspection and credits with the same comps we used to list, then manage the file to recordation.',
  },
] as const;

export default function SellerProcess({ neighborhood }: { neighborhood: string }) {
  return (
    <section className="section-padding bg-primary-50">
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-900 mb-4">
            How We Sell Homes in {neighborhood}
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Four steps. One listing plan. Built for {neighborhood} buyers already watching the MLS.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, index) => (
            <div
              key={step.title}
              className="p-6 rounded-xl bg-white border border-primary-100"
            >
              <p className="text-sm font-bold text-bhhs-gold mb-2">Step {index + 1}</p>
              <h3 className="text-lg font-display font-bold text-primary-900 mb-2">
                {step.title}
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
      </div>
    </section>
  );
}
