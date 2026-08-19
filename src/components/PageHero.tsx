import type { ReactNode } from 'react';
import { RealScoutCarousel } from '@/components/RealScoutWidget';

type PageHeroProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: 'center' | 'left';
  neighborhood: string;
  children?: ReactNode;
};

/**
 * Inner-page hero plus the RealScout listing carousel that sits under it
 * on every route.
 */
export default function PageHero({
  title,
  subtitle,
  eyebrow,
  align = 'center',
  neighborhood,
  children,
}: PageHeroProps) {
  const centered = align === 'center';

  return (
    <>
      <section className="bg-gradient-to-r from-primary-900 to-bhhs-maroon section-padding py-16">
        <div className={`container-wide mx-auto ${centered ? 'text-center' : ''}`}>
          {eyebrow ? (
            <p className="text-bhhs-gold text-sm font-semibold uppercase tracking-wider mb-3">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-3xl lg:text-5xl font-display font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle ? (
            <p
              className={`text-lg text-primary-200 max-w-3xl ${centered ? 'mx-auto' : ''}`}
            >
              {subtitle}
            </p>
          ) : null}
          {children}
        </div>
      </section>
      <RealScoutCarousel neighborhood={neighborhood} />
    </>
  );
}
