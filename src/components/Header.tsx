'use client';

import { useState } from 'react';
import { AGENT } from '@/config/agent';
import type { DomainConfig } from '@/config/domains';

export default function Header({ config }: { config: DomainConfig }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Sell', href: '/' },
    { label: 'Neighborhoods', href: '/neighborhoods' },
    { label: "What's Selling", href: '/listings' },
    { label: 'How We Sell', href: '/sell' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary-100 shadow-sm">
      <div className="container-wide mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-bhhs-maroon flex items-center justify-center text-white font-display text-lg font-bold">
              JD
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-primary-900 group-hover:text-bhhs-maroon transition-colors">
                {config.name}
              </p>
              <p className="text-xs text-primary-500">Sells {config.neighborhood} Homes</p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-6" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-primary-700 hover:text-bhhs-maroon transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${AGENT.phoneTel}`}
              className="text-sm font-semibold text-primary-700 hover:text-bhhs-maroon transition-colors"
            >
              {AGENT.phone}
            </a>
            <a href="/contact#valuation" className="btn-primary text-sm px-4 py-2">
              Get Home Value
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-primary-700"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden py-4 border-t border-primary-100">
            <nav className="flex flex-col gap-3" aria-label="Mobile">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-base font-medium text-primary-700 hover:bg-primary-50 rounded-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-3 border-t border-primary-100">
                <a
                  href={`tel:${AGENT.phoneTel}`}
                  className="block text-base font-semibold text-bhhs-maroon mb-3"
                >
                  Call: {AGENT.phone}
                </a>
                <a href="/contact#valuation" className="btn-primary w-full text-center">
                  Get Home Value
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
