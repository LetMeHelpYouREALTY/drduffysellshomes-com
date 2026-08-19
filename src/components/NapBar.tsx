import { AGENT } from '@/config/agent';

export default function NapBar() {
  return (
    <div className="bg-primary-900 text-primary-200 text-xs sm:text-sm">
      <div className="container-wide mx-auto px-4 sm:px-6 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <p>
          {AGENT.name} · {AGENT.brokerage} · {AGENT.address.full}
        </p>
        <p>
          <a href={`tel:${AGENT.phoneTel}`} className="text-bhhs-gold font-semibold">
            {AGENT.phone}
          </a>
          {' · '}
          <a href={`mailto:${AGENT.email}`} className="hover:text-white">
            {AGENT.email}
          </a>
        </p>
      </div>
    </div>
  );
}
