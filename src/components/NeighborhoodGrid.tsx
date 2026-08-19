import type { Neighborhood } from '@/config/neighborhoods';

export default function NeighborhoodGrid({
  neighborhoods,
  heading,
  intro,
}: {
  neighborhoods: Neighborhood[];
  heading: string;
  intro: string;
}) {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-900 mb-4">
            {heading}
          </h2>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">{intro}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {neighborhoods.map((n) => (
            <a
              key={n.slug}
              href={`/neighborhoods/${n.slug}`}
              className="block p-6 rounded-xl border border-primary-100 hover:border-bhhs-gold/40 hover:shadow-lg transition-all group"
            >
              <p className="text-xs uppercase tracking-wider text-bhhs-maroon font-semibold mb-2">
                {n.city}, NV {n.zip}
              </p>
              <h3 className="text-xl font-display font-bold text-primary-900 mb-2 group-hover:text-bhhs-maroon transition-colors">
                Sell Your {n.name} Home
              </h3>
              <p className="text-sm text-primary-600 leading-relaxed mb-4">{n.subhead}</p>
              <span className="text-sm font-semibold text-bhhs-maroon">
                {n.name} listing plan &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
