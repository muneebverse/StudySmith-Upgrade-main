'use client';
import { Check } from 'lucide-react';
import { formatPrice } from '@/lib/currency';
import { useCurrency } from '@/lib/CurrencyContext';
import { useRequestModal } from '@/contexts/RequestModalContext';

export default function PricingTierCard({
  name, pricePKR, badge, features, serviceCategory,
}: { name: string; pricePKR: number; badge?: string; features: string[]; serviceCategory: string }) {
  const { currency } = useCurrency();
  const { openModal } = useRequestModal();
  const featured = !!badge;

  return (
    <div className={`card flex flex-col h-full transition-all duration-300 ${featured ? 'border-2 border-aether-bright-cyan shadow-2xl ring-2 ring-aether-bright-cyan ring-opacity-20' : ''}`}>
      {badge && (
        <span className="inline-block bg-aether-bright-cyan text-aether-deep-teal px-3 py-1 rounded-tight text-xs font-bold mb-3 w-fit">
          {badge}
        </span>
      )}
      <h3 className="font-display font-bold text-xl mb-2 text-aether-deep-teal">{name}</h3>
      <div className="text-3xl font-mono font-bold text-aether-electric-teal mb-6">
        {formatPrice(pricePKR, currency)}
      </div>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((f, i) => (
          <li key={i} className="flex gap-3 items-start text-sm text-deep-ink text-opacity-70">
            <Check size={18} className="text-aether-success flex-shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>
      <button
        onClick={() => openModal(serviceCategory, `Interested in the ${name} tier.`)}
        className="btn btn-primary w-full min-h-[48px] touch-manipulation active:scale-[0.98] transition-transform"
      >
        Request {name}
      </button>
    </div>
  );
}
