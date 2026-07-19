'use client';

import Link from 'next/link';
import { Globe, FileText, Presentation } from 'lucide-react';
import { LinkedinIcon } from '@/components/icons/BrandIcons';
import { useRequestModal } from '@/contexts/RequestModalContext';

const SERVICE_CATEGORIES = [
  { icon: Globe, title: 'Portfolio & Websites', description: 'Custom Next.js portfolio sites that convert visitors into opportunities.', startingAt: '5,999 PKR', anchor: '/pricing#portfolio', category: 'Portfolio & Website' },
  { icon: FileText, title: 'CV & Career Documents', description: 'ATS-optimized resumes that get past screening systems and in front of hiring managers.', startingAt: '1,999 PKR', anchor: '/pricing#cv', category: 'CV & Career Documents' },
  { icon: Presentation, title: 'Presentations', description: 'Professional slide decks with strategic narrative flow and modern design.', startingAt: '999 PKR', anchor: '/pricing#presentations', category: 'Presentation / Slide Deck' },
  { icon: LinkedinIcon, title: 'LinkedIn Optimization', description: 'Profile rewrites that boost discoverability and recruiter visibility.', startingAt: '1,499 PKR', anchor: '/pricing#linkedin', category: 'LinkedIn Optimization' },
];

const WORKFLOW = [
  { step: '01', title: 'Choose Your Service', description: 'Pick a service and tier that fits your budget and needs.' },
  { step: '02', title: 'Fill the Request Form', description: 'Tell us about your background, goals, and timeline.' },
  { step: '03', title: 'Secure Your Spot', description: 'Pay a 50% deposit — we lock in your project and start date.' },
  { step: '04', title: 'We Build + Iterate', description: 'You review, give feedback, and we refine until it\'s right.' },
  { step: '05', title: 'Delivery', description: 'Final approval, remaining payment, and full delivery — plus a 7-day support window.' },
];

export default function Services() {
  const { openModal } = useRequestModal();

  return (
    <>
      <section className="bg-aether-deep-teal text-sky-white py-16 lg:py-20">
        <div className="container-aether text-center">
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">Our Services</h1>
          <p className="text-lg text-sky-white text-opacity-90 max-w-2xl mx-auto">
            Complete digital presence for engineers — portfolios, CVs, presentations, and LinkedIn.
          </p>
        </div>
      </section>

      {/* Icon overview row */}
      <section className="py-16 bg-sky-white">
        <div className="container-aether">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_CATEGORIES.map((s) => (
              <div key={s.title} className="card text-center flex flex-col items-center">
                <div className="mb-4 p-4 rounded-full bg-aether-bright-cyan bg-opacity-10 border border-aether-bright-cyan border-opacity-20">
                  <s.icon className="text-aether-electric-teal" size={28} />
                </div>
                <h3 className="font-display font-bold text-lg mb-2 text-aether-deep-teal">{s.title}</h3>
                <p className="text-sm text-deep-ink text-opacity-70 mb-4 flex-grow">{s.description}</p>
                <p className="text-sm font-semibold text-aether-electric-teal mb-4">Starting at {s.startingAt}</p>
                <div className="flex gap-2 w-full">
                  <Link href={s.anchor} className="btn btn-secondary flex-1 text-xs min-h-[44px] touch-manipulation">View Plans</Link>
                  <button onClick={() => openModal(s.category)} className="btn btn-primary flex-1 text-xs min-h-[44px] touch-manipulation">Get Started</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-aether-electric-teal bg-opacity-5 py-24">
        <div className="container-aether">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl mb-4 text-aether-deep-teal">How AETHER Works</h2>
            <p className="text-lg text-deep-ink text-opacity-70">Simple, transparent, results-focused.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {WORKFLOW.map((w) => (
              <div key={w.step} className="text-center">
                <div className="text-4xl font-display font-bold text-aether-bright-cyan mb-3 opacity-60">{w.step}</div>
                <h3 className="font-display font-bold text-lg mb-2 text-aether-deep-teal">{w.title}</h3>
                <p className="text-deep-ink text-opacity-70 text-sm">{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-sky-white">
        <div className="container-aether">
          <div className="bg-aether-electric-teal bg-opacity-5 border border-aether-electric-teal border-opacity-20 rounded-expansive p-6 text-center">
            <p className="text-sm text-deep-ink text-opacity-70">
              🌍 <strong className="text-aether-deep-teal">International clients:</strong> Payment methods coming soon — see full pricing and bundles on our <Link href="/pricing" className="text-aether-electric-teal underline font-semibold">Pricing page</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
