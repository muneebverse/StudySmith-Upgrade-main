'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export default function Faq({ faqs }: { faqs: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <div key={faq.id} className="card">
          <button
            onClick={() => toggle(faq.id)}
            className="w-full flex justify-between items-center gap-4 text-left"
            aria-expanded={openId === faq.id}
          >
            <h3 className="font-display font-bold text-lg text-aether-deep-ink">
              {faq.question}
            </h3>
            <ChevronDown
              size={24}
              className={`text-aether-indigo transition-transform flex-shrink-0 ${
                openId === faq.id ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openId === faq.id && (
            <p className="mt-4 text-aether-deep-ink text-opacity-70 leading-relaxed">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
