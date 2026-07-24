'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Users, Zap, Clock, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      title: 'Portfolio & Website Services',
      description: 'Custom Next.js portfolios that convert visitors into opportunities.',
      icon: '🌐',
      features: ['Mobile-responsive design', 'Project showcase', 'Blog setup', 'SEO optimization'],
      ctaText: 'View Pricing →',
    },
    {
      title: 'CV & Career Document Services',
      description: 'ATS-optimized CVs with modern design that get past screening systems.',
      icon: '📄',
      features: ['Keyword optimization', 'Multiple versions', 'LinkedIn strategy', 'Cover letters'],
      ctaText: 'View Pricing →',
    },
    {
      title: 'Presentation & Slide Deck Services',
      description: 'Professional presentations with strategic narrative flow and compelling design.',
      icon: '🎯',
      features: ['Custom design', 'Data visualization', 'Speaker notes', 'Delivery coaching'],
      ctaText: 'View Pricing →',
    },
    {
      title: 'LinkedIn Optimization Service',
      description: 'Optimize your professional identity for discoverability and credibility.',
      icon: '💼',
      features: ['Headline rewrite', 'Professional summary', 'Skills optimization', 'Photo + banner'],
      ctaText: 'View Pricing →',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'You Choose Your Service & Tier',
      description: 'Browse our services and pick the tier that fits your budget and needs.',
    },
    {
      number: '02',
      title: 'Fill Out Intake Form',
      description: 'Share your background, target roles, projects, and preferred timeline with us.',
    },
    {
      number: '03',
      title: 'Secure Your Spot',
      description: 'Pay 50% deposit to lock in your project start date and timeline.',
    },
    {
      number: '04',
      title: 'We Build & Iterate',
      description: 'We create your work and you review—revision rounds included per tier.',
    },
    {
      number: '05',
      title: 'Delivery & Support',
      description: 'Final payment, download all files, and get 7-day support for tweaks.',
    },
  ];

  const testimonials = [
    {
      name: 'Ahmed K.',
      role: 'Software Engineer',
      text: 'AETHER transformed my resume completely. Went from 0 interviews to 8 requests in 30 days. The ATS optimization actually works.',
      rating: 5,
    },
    {
      name: 'Saira M.',
      role: 'Data Analyst',
      text: 'My portfolio site looks absolutely professional. Clients thought I spent thousands on it. Worth every rupee.',
      rating: 5,
    },
    {
      name: 'Usman R.',
      role: 'Product Manager (Career Transition)',
      text: 'The LinkedIn strategy and CV rewrite made my career switch believable. Got offers from companies I never thought would consider me.',
      rating: 5,
    },
    {
      name: 'Fatima A.',
      role: 'UX Designer',
      text: 'The presentation deck for my portfolio review was stunning. Clear, strategic, and exactly what I needed.',
      rating: 5,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-gradient-to-r from-aether-deep-teal via-aether-electric-teal to-aether-bright-cyan opacity-10"></div>
        </div>

        <div className="container-aether">
          <div className={`text-center max-w-3xl mx-auto ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="font-display font-bold text-4xl sm:text-5xl mb-6 text-aether-deep-teal">
              We Build Your Complete Professional Identity
            </h1>
            <p className="text-lg text-deep-ink text-opacity-70 mb-8">
              Not templates. Not generic. Custom work built for you. Portfolios, CVs, presentations, LinkedIn—everything you need to stand out and get hired.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="btn btn-primary">
                View Pricing
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link href="/request" className="btn btn-secondary">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-28 bg-sky-white">
        <div className="container-aether">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4 text-aether-deep-teal">
              What We Do
            </h2>
            <p className="text-lg text-deep-ink text-opacity-70 max-w-2xl mx-auto">
              Four core services. One goal: clarify your professional narrative and position you for roles that match your aspirations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`card hover:border-aether-bright-cyan hover:shadow-lg transition-all ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-display font-bold text-xl mb-2 text-aether-deep-teal">
                  {service.title}
                </h3>
                <p className="text-deep-ink text-opacity-70 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex gap-2 items-start text-sm">
                      <CheckCircle2 size={18} className="text-aether-bright-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-deep-ink">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/pricing" className="text-aether-electric-teal font-600 hover:text-aether-bright-cyan transition-colors inline-flex items-center gap-2">
                  {service.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 sm:py-28 bg-aether-electric-teal bg-opacity-5">
        <div className="container-aether">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4 text-aether-deep-teal">
              How AETHER Works
            </h2>
            <p className="text-lg text-deep-ink text-opacity-70 max-w-2xl mx-auto">
              Five simple steps from idea to delivery. Direct, transparent, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 sm:gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className={`relative ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 100}ms` }}>
                {/* Connector line (hidden on mobile/tablet) */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 top-20 w-full h-0.5 bg-gradient-to-r from-aether-electric-teal to-aether-bright-cyan"></div>
                )}

                <div className="relative bg-white rounded-lg border border-aether-electric-teal border-opacity-20 p-6 text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-aether-deep-teal to-aether-electric-teal flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 relative z-10">
                    {step.number}
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2 text-aether-deep-teal">
                    {step.title}
                  </h3>
                  <p className="text-sm text-deep-ink text-opacity-70">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-28 bg-sky-white">
        <div className="container-aether">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4 text-aether-deep-teal">
              What Clients Say
            </h2>
            <p className="text-lg text-deep-ink text-opacity-70 max-w-2xl mx-auto">
              Real results from engineers and professionals who transformed their careers with AETHER.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={`card bg-gradient-to-br from-sky-white to-aether-electric-teal to-opacity-5 hover:shadow-lg transition-all ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-aether-bright-cyan text-aether-bright-cyan" />
                  ))}
                </div>
                <p className="text-deep-ink mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-display font-bold text-aether-deep-teal">{testimonial.name}</p>
                  <p className="text-sm text-deep-ink text-opacity-60">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AETHER Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-r from-aether-deep-teal via-aether-electric-teal to-aether-bright-cyan">
        <div className="container-aether">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={isLoaded ? 'animate-fade-in-up' : 'opacity-0'}>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-sky-white mb-6">
                Why Choose AETHER?
              </h2>
              <ul className="space-y-4">
                {[
                  'Direct collaboration — you work with me, not account managers',
                  'Fast turnaround — 5-7 days standard, rush available',
                  'Revisions included — 1-3 rounds per tier until it\'s right',
                  'ATS-optimized — designed to pass screening systems',
                  'Brand consistency — teal/cyan aesthetic across all work',
                  'Strategic keywords — tailored to your field and target roles',
                ].map((point, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 size={24} className="text-aether-bright-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-sky-white text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`flex flex-col gap-4 ${isLoaded ? 'animate-fade-in-down' : 'opacity-0'}`}>
              <div className="bg-sky-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 border border-sky-white border-opacity-20">
                <Users size={32} className="text-aether-bright-cyan mb-3" />
                <h3 className="font-display font-bold text-lg text-sky-white mb-2">For Everyone</h3>
                <p className="text-sky-white text-opacity-90">Recent grads, career changers, experienced professionals — we tailor work to your story.</p>
              </div>
              <div className="bg-sky-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 border border-sky-white border-opacity-20">
                <Zap size={32} className="text-aether-bright-cyan mb-3" />
                <h3 className="font-display font-bold text-lg text-sky-white mb-2">Fast & Reliable</h3>
                <p className="text-sky-white text-opacity-90">Fixed timelines, direct communication, deliverables you can download and own forever.</p>
              </div>
              <div className="bg-sky-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 border border-sky-white border-opacity-20">
                <Clock size={32} className="text-aether-bright-cyan mb-3" />
                <h3 className="font-display font-bold text-lg text-sky-white mb-2">Post-Delivery Support</h3>
                <p className="text-sky-white text-opacity-90">7-day support window for minor tweaks after delivery. You're never left stranded.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-sky-white">
        <div className="container-aether">
          <div className="bg-gradient-to-br from-aether-deep-teal to-aether-electric-teal rounded-2xl p-12 sm:p-16 text-center overflow-hidden relative">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-aether-bright-cyan rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-aether-sky-cyan rounded-full opacity-20 blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-sky-white mb-4">
                Ready to Elevate Your Professional Presence?
              </h2>
              <p className="text-lg text-sky-white text-opacity-90 max-w-2xl mx-auto mb-8">
                Let's transform your application from invisible to unmissable. Check out our pricing and pick the service that fits your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/pricing" className="btn btn-primary bg-aether-bright-cyan text-aether-deep-teal hover:bg-sky-white">
                  View Pricing
                </Link>
                <Link href="/request" className="btn btn-primary bg-sky-white text-aether-deep-teal hover:bg-aether-bright-cyan">
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
