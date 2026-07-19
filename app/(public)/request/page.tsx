'use client';

import { useState } from 'react';
import RequestForm from '@/components/RequestForm';
import { CheckCircle2 } from 'lucide-react';

export default function RequestPage() {
  const [orderId, setOrderId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!orderId) return;
    await navigator.clipboard.writeText(orderId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-sky-white flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white border border-aether-electric-teal border-opacity-10 rounded-expansive p-8 shadow-subtle">
        {orderId ? (
          <div className="text-center space-y-6 py-4">
            <div className="w-16 h-16 bg-sky-white border border-aether-electric-teal border-opacity-20 rounded-full flex items-center justify-center mx-auto text-aether-success">
              <CheckCircle2 size={32} />
            </div>
            <div className="space-y-2">
              <h1 className="font-display font-bold text-2xl text-aether-deep-teal">Request Received!</h1>
              <p className="text-deep-ink text-opacity-70 text-sm">Save this tracking code to check your order status anytime.</p>
            </div>
            <div className="bg-sky-white border border-aether-electric-teal border-opacity-15 rounded-tight p-4 flex items-center justify-between font-mono text-lg text-deep-ink">
              <span className="font-bold tracking-wider">{orderId}</span>
              <button onClick={handleCopy} className="text-xs font-semibold bg-aether-electric-teal hover:bg-aether-deep-teal text-sky-white px-3 py-1.5 rounded-tight transition-all min-h-[36px] touch-manipulation">
                {copied ? 'Copied' : 'Copy Code'}
              </button>
            </div>
            <a href={`/track?order_id=${orderId}`} className="btn btn-primary w-full min-h-[48px] touch-manipulation">Track Order Status</a>
          </div>
        ) : (
          <>
            <h1 className="font-display font-bold text-2xl text-aether-deep-teal mb-1">Request Service Build</h1>
            <p className="text-deep-ink text-opacity-70 text-sm mb-6">Tell us what you need — we'll follow up shortly.</p>
            <RequestForm onSuccess={setOrderId} />
          </>
        )}
      </div>
    </div>
  );
}
