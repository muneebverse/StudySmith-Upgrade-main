import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Resume Optimization',
      icon: '📄',
      description: 'Transform your resume into an ATS-friendly powerhouse.',
      includes: [
        'Complete format optimization',
        'ATS compatibility testing',
        'Keyword research & integration',
        'Impact-driven bullet points',
        'Professional design',
      ],
      price: '$299',
      cta: 'Get Optimized Resume',
    },
    {
      title: 'LinkedIn Pro',
      icon: '🔗',
      description: 'Build a LinkedIn profile that attracts recruiters.',
      includes: [
        'Profile headline optimization',
        'About section rewrite',
        'Experience section enhancement',
        'Skills & endorsements strategy',
        'Recruiter-friendly keywords',
      ],
      price: '$199',
      cta: 'Optimize LinkedIn',
    },
    {
      title: 'Career Strategy Session',
      icon: '💡',
      description: '1-on-1 session to clarify your career direction.',
      includes: [
        '90-minute video consultation',
        'Career assessment',
        'Goal setting & planning',
        'Personal branding strategy',
        'Action plan delivery',
      ],
      price: '$149',
      cta: 'Book Session',
    },
    {
      title: 'Complete Package',
      icon: '⭐',
      description: 'Everything you need to transform your career.',
      includes: [
        'Resume optimization',
        'LinkedIn pro profile',
        'Cover letter templates',
        '2 strategy sessions',
        'Ongoing support (60 days)',
      ],
      price: '$699',
      cta: 'Get Complete Package',
      featured: true,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-aether-indigo text-aether-sky-white py-16 lg:py-24">
        <div className="container-aether text-center">
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">Our Services</h1>
          <p className="text-lg text-aether-sky-white text-opacity-90 max-w-2xl mx-auto">
            Every service designed to elevate your professional presence and clarify your career path.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 section-spacing">
        <div className="container-aether">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`card flex flex-col h-full ${
                  service.featured
                    ? 'md:col-span-2 lg:col-span-1 border-2 border-aether-gold shadow-lg'
                    : ''
                }`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>

                <h3 className="font-display font-bold text-2xl mb-2">{service.title}</h3>
                <p className="text-aether-deep-ink text-opacity-70 mb-6 flex-grow">
                  {service.description}
                </p>

                {service.featured && (
                  <span className="inline-block bg-aether-gold text-aether-deep-ink px-3 py-1 rounded text-xs font-bold mb-4 w-fit">
                    MOST POPULAR
                  </span>
                )}

                <ul className="space-y-3 mb-8">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <Check size={20} className="text-aether-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-aether-deep-ink text-opacity-70">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="text-3xl font-mono font-bold text-aether-indigo mb-4">
                    {service.price}
                  </div>
                  <Link href="/contact" className="btn btn-primary w-full">
                    {service.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-aether-indigo bg-opacity-5 py-24">
        <div className="container-aether">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl mb-4">Our Process</h2>
            <p className="text-lg text-aether-deep-ink text-opacity-70">
              Simple, transparent, and results-focused.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We learn about your background, goals, and current challenges.',
              },
              {
                step: '02',
                title: 'Analysis',
                description: 'Deep dive into your experience and career aspirations.',
              },
              {
                step: '03',
                title: 'Crafting',
                description: 'We create optimized, personalized materials just for you.',
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Get your finalized materials with strategy guidance.',
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-display font-bold text-aether-gold mb-4 opacity-50">
                  {item.step}
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-aether-deep-ink text-opacity-70 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container-aether text-center">
          <h2 className="font-display font-bold text-4xl mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-aether-deep-ink text-opacity-70 max-w-2xl mx-auto mb-8">
            Choose the service that fits your needs and take the first step toward career clarity.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Book Your Service <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
