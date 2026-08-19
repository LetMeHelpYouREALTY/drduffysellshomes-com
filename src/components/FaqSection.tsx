type Faq = {
  question: string;
  answer: string;
};

export default function FaqSection({
  heading,
  faqs,
}: {
  heading: string;
  faqs: Faq[];
}) {
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow mx-auto">
        <h2 className="text-3xl font-display font-bold text-primary-900 mb-8 text-center">
          {heading}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border border-primary-100 rounded-lg overflow-hidden"
            >
              <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-primary-50 transition-colors">
                <span className="font-semibold text-primary-900 text-sm pr-4">
                  {faq.question}
                </span>
                <svg
                  className="w-5 h-5 text-primary-400 group-open:rotate-180 transition-transform flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-sm text-primary-600 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
