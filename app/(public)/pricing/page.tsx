'use client';

import PricingTierCard from '@/components/PricingTierCard';
import CurrencyToggle from '@/components/CurrencyToggle';
import { formatPrice } from '@/lib/currency';
import { useCurrency } from '@/lib/CurrencyContext';
import { useRequestModal } from '@/contexts/RequestModalContext';

const PORTFOLIO_TIERS = [
  { name: 'Launch', price: 5999, badge: undefined, features: ['4-page portfolio (projects, about, contact)', '3-5 project showcase', 'Mobile-responsive', '1 revision', 'Timeline: 7-14 days'] },
  { name: 'Amplify', price: 9999, badge: 'MOST POPULAR', features: ['Everything in Launch', 'Testimonials + blog setup', 'SEO basics', '2 revisions', 'Timeline: 14-21 days'] },
  { name: 'Dominate', price: 17999, badge: undefined, features: ['Everything in Amplify', '3-5 blog posts written', 'Advanced SEO + analytics + email capture', '3 revisions', 'Timeline: 21-28 days'] },
];

const CV_TIERS = [
  { name: 'Get Noticed', price: 1999, badge: undefined, features: ['1-page ATS-optimized CV', 'Keyword audit', 'Modern design, PDF + DOCX', '1 revision', 'Timeline: 3-5 days'] },
  { name: 'Stand Out', price: 4999, badge: 'MOST POPULAR', features: ['Everything in Get Noticed', '3 tailored versions', 'Advanced keywords + LinkedIn headline', '2 revisions', 'Timeline: 4-6 days'] },
  { name: 'Own It', price: 7999, badge: undefined, features: ['Everything in Stand Out', 'Visual CV summary + cover letter template', '15 company leads + full LinkedIn strategy', '3 revisions', 'Timeline: 5-7 days'] },
];

const PRESENTATION_TIERS = [
  { name: 'Impress', price: 999, badge: undefined, features: ['5-10 slides', 'Content + design included', 'Modern template-based design', '1 revision', 'Timeline: 3-5 days'] },
  { name: 'Captivate', price: 2999, badge: 'MOST POPULAR', features: ['10-15 slides', 'Advanced design + data visualization', 'Speaker notes included', '2 revisions', 'Timeline: 3-5 days'] },
  { name: 'Command', price: 3999, badge: undefined, features: ['15-20 slides', 'Luxury design + animations', 'Delivery coaching included', '3 revisions', 'Timeline: 3-5 days'] },
];

const BUNDLES = [
  { name: 'Startup Bundle', price: 6999, save: 999, includes: 'Launch Portfolio + Get Noticed CV' },
  { name: 'Professional Bundle', price: 13999, save: 1998, includes: 'Amplify Portfolio + Stand Out CV' },
  { name: 'Complete Presence Bundle', price: 24999, save: 7994, includes: 'Dominate Portfolio + Own It CV + LinkedIn' },
  { name: 'All-In Bundle', price: 28999, save: 10494, includes: 'Dominate Portfolio + Own It CV + Command Presentation + LinkedIn' },
];

function TierSection({ id, title, tiers, category }: { id: string; title: string; tiers: typeof PORTFOLIO_TIERS; category: string }) {
  return (
    <div id={id} className="scroll-mt-24">
      <h2 className="font-display font-bold text-3xl mb-8 text-aether-deep-teal text-center">{title}</h2>
      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {tiers.map((t) => (
          <PricingTierCard key={t.name} name={t.name} pricePKR={t.price} badge={t.badge} features={t.features} serviceCategory={category} />
        ))}
      </div>
    </div>
  );
}

export default function Pricing() {
  const { currency } = useCurrency();
  const { openModal } = useRequestModal();

  return (
    <>
      <section className="bg-aether-deep-teal text-sky-white py-16 lg:py-20">
        <div className="container-aether text-center">
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">Transparent Pricing</h1>
          <p className="text-lg text-sky-white text-opacity-90 max-w-2xl mx-auto mb-6">
            No hidden fees. Choose your service, pick a tier, get started.
          </p>
          <CurrencyToggle />
        </div>
      </section>

      <section className="py-24 section-spacing">
        <div className="container-aether">
          <TierSection id="portfolio" title="Portfolio & Website" tiers={PORTFOLIO_TIERS} category="Portfolio & Website" />
          <TierSection id="cv" title="CV & Career Documents" tiers={CV_TIERS} category="CV & Career Documents" />
          <TierSection id="presentations" title="Presentations & Slide Decks" tiers={PRESENTATION_TIERS} category="Presentation / Slide Deck" />

          <div id="linkedin" className="scroll-mt-24 mb-24">
            <h2 className="font-display font-bold text-3xl mb-8 text-aether-deep-teal text-center">LinkedIn Optimization</h2>
            <div className="max-w-md mx-auto">
              <PricingTierCard
                name="Complete Profile Optimization"
                pricePKR={1499}
                features={['Headline + summary rewrite', 'Experience section restructure', 'Skills optimization', 'Photo + banner alignment', 'Timeline: 2-3 days']}
                serviceCategory="LinkedIn Optimization"
              />
            </div>
          </div>

          {/* Bundles */}
          <div className="mb-16">
            <h2 className="font-display font-bold text-3xl mb-8 text-aether-deep-teal text-center">Smart Bundles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {BUNDLES.map((b) => (
                <div key={b.name} className="card text-center flex flex-col">
                  <h3 className="font-display font-bold text-lg mb-2 text-aether-deep-teal">{b.name}</h3>
                  <div className="text-2xl font-mono font-bold text-aether-electric-teal mb-1">{formatPrice(b.price, currency)}</div>
                  <p className="text-xs text-aether-success font-semibold mb-4">Save {formatPrice(b.save, currency)}</p>
                  <p className="text-sm text-deep-ink text-opacity-70 mb-6 flex-grow">{b.includes}</p>
                  <button onClick={() => openModal('Other', `Interested in the ${b.name}.`)} className="btn btn-secondary w-full min-h-[44px] touch-manipulation">
                    Get This Bundle
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* International clients banner */}
          <div className="bg-aether-electric-teal bg-opacity-5 border border-aether-electric-teal border-opacity-20 rounded-expansive p-6 text-center">
            <p className="text-sm text-deep-ink text-opacity-70">
              🌍 <strong className="text-aether-deep-teal">International clients:</strong> Payment methods (PayPal, Fiverr, Upwork) coming soon. Local clients can pay via Bank Transfer, JazzCash, or Easypaisa.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
