import { AGENT } from '@/config/agent';

export default function NotFound() {
  return (
    <section className="section-padding min-h-[60vh] flex items-center">
      <div className="container-narrow mx-auto text-center">
        <p className="text-6xl font-display font-bold text-primary-200 mb-4">404</p>
        <h1 className="text-2xl font-display font-bold text-primary-900 mb-4">
          Page not found
        </h1>
        <p className="text-primary-600 mb-8 max-w-md mx-auto">
          That URL is not a selling page on this site. Use a Las Vegas neighborhood page or
          call {AGENT.name} at {AGENT.phone}.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/" className="btn-primary">
            Sell your home
          </a>
          <a href="/neighborhoods" className="btn-secondary">
            Las Vegas neighborhoods
          </a>
          <a href={`tel:${AGENT.phoneTel}`} className="btn-gold">
            Call {AGENT.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
