'use client';

import { useState } from 'react';

export default function ContactForm({ neighborhood }: { neighborhood: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    void data;

    // Submit to Formspree or your API endpoint
    // For now, just simulate success
    try {
      // Replace with your actual form endpoint:
      // await fetch('https://formspree.io/f/YOUR_FORM_ID', { method: 'POST', body: data });
      await new Promise((r) => setTimeout(r, 1000));
      setSubmitted(true);
      form.reset();
    } catch {
      alert('Something went wrong. Please call us directly.');
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="p-8 bg-green-50 border border-green-200 rounded-xl text-center">
        <div className="text-4xl mb-3">✓</div>
        <h3 className="text-xl font-display font-bold text-green-900 mb-2">
          Message Sent!
        </h3>
        <p className="text-green-700">
          Thank you for reaching out. Dr. Duffy will be in touch within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-green-600 underline hover:no-underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-primary-700 mb-1">
            First Name *
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="block w-full rounded-lg border border-primary-200 bg-white px-4 py-3 text-primary-900 placeholder-primary-400 focus:border-bhhs-maroon focus:ring-1 focus:ring-bhhs-maroon focus:outline-none transition-colors"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-primary-700 mb-1">
            Last Name *
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="block w-full rounded-lg border border-primary-200 bg-white px-4 py-3 text-primary-900 placeholder-primary-400 focus:border-bhhs-maroon focus:ring-1 focus:ring-bhhs-maroon focus:outline-none transition-colors"
            placeholder="Smith"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-1">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="block w-full rounded-lg border border-primary-200 bg-white px-4 py-3 text-primary-900 placeholder-primary-400 focus:border-bhhs-maroon focus:ring-1 focus:ring-bhhs-maroon focus:outline-none transition-colors"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-primary-700 mb-1">
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="block w-full rounded-lg border border-primary-200 bg-white px-4 py-3 text-primary-900 placeholder-primary-400 focus:border-bhhs-maroon focus:ring-1 focus:ring-bhhs-maroon focus:outline-none transition-colors"
            placeholder="(702) 555-1234"
          />
        </div>
      </div>

      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-primary-700 mb-1">
          I&apos;m interested in...
        </label>
        <select
          id="interest"
          name="interest"
          defaultValue="selling"
          className="block w-full rounded-lg border border-primary-200 bg-white px-4 py-3 text-primary-900 focus:border-bhhs-maroon focus:ring-1 focus:ring-bhhs-maroon focus:outline-none transition-colors"
        >
          <option value="selling">Selling my {neighborhood} home</option>
          <option value="valuation">Free {neighborhood} home valuation</option>
          <option value="listing-appointment">Schedule a listing appointment</option>
          <option value="buying">I also need to buy after I sell</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-primary-700 mb-1">
          Property address
        </label>
        <input
          id="address"
          name="address"
          type="text"
          className="block w-full rounded-lg border border-primary-200 bg-white px-4 py-3 text-primary-900 placeholder-primary-400 focus:border-bhhs-maroon focus:ring-1 focus:ring-bhhs-maroon focus:outline-none transition-colors"
          placeholder={`${neighborhood} street address`}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="block w-full rounded-lg border border-primary-200 bg-white px-4 py-3 text-primary-900 placeholder-primary-400 focus:border-bhhs-maroon focus:ring-1 focus:ring-bhhs-maroon focus:outline-none transition-colors resize-y"
          placeholder={`Tell us about your ${neighborhood} home — beds, updates, timeline.`}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? 'Sending...' : 'Request listing plan'}
      </button>

      <p className="text-xs text-primary-400">
        By submitting, you agree to receive communications from Dr. Jan Duffy. We respect your
        privacy and will never share your information.
      </p>
    </form>
  );
}
