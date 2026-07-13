import Link from 'next/link';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for recent graduates or career changers.',
      price: '$199',
      period: 'one-time',
      features: [
        'Resume optimization',
        'ATS compatibility check',
        'Basic formatting',
        'Email support',
        'Valid for 1 year',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Professional',
      description: 'Best for active job seekers who want maximum impact.',
      price: '$499',
      period: 'one-time',
      featured: true,
      features: [
        'Resume optimization',
        'LinkedIn profile setup',
        'Cover letter template',
        'ATS compatibility testing',
        '1 strategy session',
        'Priority email support',
        'Valid for 2 years',
      ],
      cta: 'Get Professional',
    },
    {
      name: 'Executive',
      description: 'For senior professionals seeking premium positioning.',
      price: '$899',
      period: 'one-time',
      features: [
        'Complete professional rebrand',
        'Resume optimization',
        'LinkedIn executive profile',
        'Cover letter suite (5)',
        'Portfolio guidance',
        '3 strategy sessions',
        'Phone support included',
        'Valid for 3 years',
      ],
      cta: 'Get Executive',
    },
  ];

  const addOns = [
    { name: 'Cover Letter Rewrite', price: '$99' },
    { name: 'Portfolio Review', price: '$149' },
    { name: 'Mock Interview Session', price: '$199' },
    { name: 'Personal Branding Session', price: '$149' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-aether-indigo text-aether-sky-white py-16 lg:py-24">
        <div className="container-aether text-center">
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Transparent Pricing
          </h1>
          <p className="text-lg text-aether-sky-white text-opacity-90 max-w-2xl mx-auto">
            No hidden fees. No long contracts. Just results-focused, premium service.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 section-spacing">
        <div className="container-aether">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`card flex flex-col h-full ${
                  plan.featured ? 'md:scale-105 border-2 border-aether-gold shadow-lg' : ''
                }`}
              >
                {plan.featured && (
                  <span className="inline-block bg-aether-gold text-aether-deep-ink px-3 py-1 rounded text-xs font-bold mb-4 w-fit">
                    BEST VALUE
                  </span>
                )}

                <h3 className="font-display font-bold text-2xl mb-2">{plan.name}</h3>
                <p className="text-aether-deep-ink text-opacity-70 text-sm mb-6">
                  {plan.description}
                </p>

                <div className="mb-8">
                  <span className="text-4xl font-mono font-bold text-aether-indigo">
                    {plan.price}
                  </span>
                  <p className="text-sm text-aether-deep-ink text-opacity-70 mt-1">
                    {plan.period}
                  </p>
                </div>

                <Link href="/contact" className="btn btn-primary w-full mb-8">
                  {plan.cta}
                </Link>

                <div className="space-y-3 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <Check
                        size={20}
                        className="text-aether-success flex-shrink-0 mt-0.5"
                      />
                      <span className="text-sm text-aether-deep-ink text-opacity-70">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="mt-16 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-aether-indigo border-opacity-20">
                  <th className="text-left py-4 px-4 font-display font-bold">Feature</th>
                  <th className="text-center py-4 px-4 font-display font-bold">
                    Starter
                  </th>
                  <th className="text-center py-4 px-4 font-display font-bold bg-aether-gold bg-opacity-10">
                    Professional
                  </th>
                  <th className="text-center py-4 px-4 font-display font-bold">
                    Executive
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Resume Optimization', starter: true, pro: true, exec: true },
                  {
                    feature: 'LinkedIn Optimization',
                    starter: false,
                    pro: true,
                    exec: true,
                  },
                  {
                    feature: 'Strategy Sessions',
                    starter: false,
                    pro: 1,
                    exec: 3,
                  },
                  {
                    feature: 'Cover Letter Support',
                    starter: false,
                    pro: 1,
                    exec: 5,
                  },
                  {
                    feature: 'Priority Support',
                    starter: false,
                    pro: true,
                    exec: true,
                  },
                ].map((item, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-aether-indigo border-opacity-10 hover:bg-aether-indigo hover:bg-opacity-2"
                  >
                    <td className="py-4 px-4 font-500">{item.feature}</td>
                    <td className="text-center py-4 px-4">
                      {item.starter === true ? (
                        <Check size={20} className="inline text-aether-success" />
                      ) : item.starter ? (
                        item.starter
                      ) : (
                        '—'
                      )}
                    </td>
                    <td className="text-center py-4 px-4 bg-aether-gold bg-opacity-5">
                      {item.pro === true ? (
                        <Check size={20} className="inline text-aether-success" />
                      ) : item.pro ? (
                        item.pro
                      ) : (
                        '—'
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {item.exec === true ? (
                        <Check size={20} className="inline text-aether-success" />
                      ) : item.exec ? (
                        item.exec
                      ) : (
                        '—'
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="bg-aether-indigo bg-opacity-5 py-24">
        <div className="container-aether">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl mb-4">Add-Ons & Extras</h2>
            <p className="text-lg text-aether-deep-ink text-opacity-70">
              Customize your package with these additional services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, idx) => (
              <div key={idx} className="card text-center">
                <h3 className="font-display font-bold mb-4">{addon.name}</h3>
                <p className="text-2xl font-mono font-bold text-aether-indigo mb-4">
                  {addon.price}
                </p>
                <Link href="/contact" className="btn btn-secondary text-sm">
                  Add to Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 section-spacing">
        <div className="container-aether">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl mb-4">Pricing FAQ</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'Do you offer refunds?',
                a: 'Yes. If you\'re not satisfied with your materials within 30 days, we\'ll revise them at no charge or provide a full refund.',
              },
              {
                q: 'Can I upgrade my plan?',
                a: 'Absolutely. Upgrade anytime and pay only the difference. We\'ll add the additional services immediately.',
              },
              {
                q: 'Are there payment plans available?',
                a: 'Yes. For plans over $500, we offer 3-month interest-free payment plans. Contact us to set up.',
              },
              {
                q: 'What if I need additional revisions?',
                a: 'All plans include unlimited revisions within 30 days. After that, additional revisions are $50 each.',
              },
            ].map((item, idx) => (
              <div key={idx} className="card">
                <h3 className="font-display font-bold text-lg mb-2 text-aether-indigo">
                  {item.q}
                </h3>
                <p className="text-aether-deep-ink text-opacity-70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container-aether">
          <div className="bg-aether-deep-ink text-aether-sky-white rounded-expansive p-12 text-center">
            <h2 className="font-display font-bold text-4xl mb-4">
              Ready to Invest in Your Career?
            </h2>
            <p className="text-lg text-aether-sky-white text-opacity-80 max-w-2xl mx-auto mb-8">
              Choose your plan and let's elevate your professional brand.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary bg-aether-gold text-aether-deep-ink hover:bg-white"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
