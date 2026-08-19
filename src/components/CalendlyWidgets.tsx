import { AGENT } from '@/config/agent';
import { CALENDLY_WIDGETS } from '@/config/calendly';

/**
 * All three Calendly event widgets — listing, market strategy, buyer.
 * Iframes so Next.js server components do not need React state.
 */
export default function CalendlyWidgets() {
  return (
    <section
      id="schedule"
      className="section-padding bg-bhhs-cream border-t border-primary-100"
    >
      <div className="container-wide mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-wider text-bhhs-maroon font-semibold mb-2">
            Book a time
          </p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-900 mb-3">
            Schedule with {AGENT.name}
          </h2>
          <p className="text-primary-600 max-w-2xl mx-auto">
            No contact form. Pick a listing consultation, a 15-minute market strategy call, or a
            buyer consult. Call {AGENT.phone} if you need a time that is not on the calendar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CALENDLY_WIDGETS.map((widget) => (
            <div key={widget.id} id={widget.id} className="bg-white rounded-2xl border border-primary-100 p-4 sm:p-5">
              <h3 className="text-xl font-display font-bold text-primary-900 mb-1">
                {widget.title}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-bhhs-maroon mb-3">
                {widget.duration}
              </p>
              <p className="text-sm text-primary-600 mb-4 leading-relaxed">
                {widget.description}
              </p>
              <iframe
                src={widget.url}
                title={`${widget.title} with ${AGENT.name}`}
                className="w-full min-h-[700px] rounded-xl border border-primary-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
