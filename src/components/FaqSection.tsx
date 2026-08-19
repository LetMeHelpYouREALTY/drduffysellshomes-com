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
        <div className="space-y-6">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="border border-primary-100 rounded-lg p-5"
            >
              <h3 className="font-display font-bold text-primary-900 text-lg mb-3">
                {faq.question}
              </h3>
              <p className="text-sm text-primary-600 leading-relaxed">{faq.answer}</p>
            </article>
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
