'use client';

import React, { useState, useEffect, Suspense, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';

interface TrackingData {
  status: string;
  updated_at: string;
  service_interested?: string | null;
}

const STATUS_LABELS: Record<string, { label: string; bg: string; text: string; border: string }> = {
  received: { 
    label: 'Received', 
    bg: 'bg-neutral-100', 
    text: 'text-neutral-700', 
    border: 'border-neutral-300' 
  },
  in_progress: { 
    label: 'In Progress', 
    bg: 'bg-amber-50', 
    text: 'text-amber-700', 
    border: 'border-amber-300' 
  },
  completed: { 
    label: 'Completed', 
    bg: 'bg-emerald-50', 
    text: 'text-emerald-700', 
    border: 'border-emerald-300' 
  },
};

function TrackingContent() {
  const searchParams = useSearchParams();
  const [orderId, setOrderId] = useState(searchParams.get('order_id') || '');
  const [result, setResult] = useState<TrackingData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  // Wrapped in useCallback to prevent infinite render loops and comply with lint checks
  const fetchStatus = useCallback(async (id: string) => {
    if (!id.trim()) return;
    setLoading(true);
    setError(null);
    setSearched(true);

    try {
      const res = await fetch(`/api/track?order_id=${encodeURIComponent(id.trim())}`);
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'No matching record found.');
        setResult(null);
      } else {
        setResult(data);
      }
    } catch {
      setError('Network error. Please try again.');
      setResult(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchStatus(orderId);
  };

  // Auto-lookup if order_id is present in the URL on mount
  useEffect(() => {
    const initialId = searchParams.get('order_id');
    if (initialId) {
      setOrderId(initialId);
      fetchStatus(initialId);
    }
  }, [searchParams, fetchStatus]);

  const statusInfo = result ? STATUS_LABELS[result.status] : null;

  return (
    <div className="max-w-md w-full bg-white border border-aether-electric-teal/10 rounded-xl p-8 space-y-6 shadow-sm">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-aether-deep-teal mb-2">Track Order Status</h1>
        <p className="text-deep-ink/70 text-sm">
          Enter your unique tracking code below to inspect your order's production status.
        </p>
      </div>

      <form onSubmit={handleSearch} className="space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            required
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="e.g. SS-7M8WGB"
            className="flex-1 bg-sky-white text-deep-ink placeholder-deep-ink/30 font-mono tracking-wider border border-aether-electric-teal/10 focus:border-aether-electric-teal focus:ring-1 focus:ring-aether-electric-teal rounded-lg px-4 py-2.5 outline-none transition-all uppercase text-sm"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-aether-electric-teal hover:bg-aether-deep-teal hover:border-t hover:border-t-aether-bright-cyan text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-150 disabled:opacity-50 text-sm border-t border-transparent"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5 text-center">
          {error}
        </p>
      )}

      {searched && !loading && result && statusInfo && (
        <div className="border-t border-aether-electric-teal/10 pt-6 space-y-4">
          <div className="bg-sky-white border border-aether-electric-teal/10 rounded-lg p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-deep-ink/60 font-semibold tracking-wider uppercase">Order Reference</span>
              <span className="font-mono text-deep-ink text-sm font-semibold uppercase">{orderId}</span>
            </div>

            {result.service_interested && (
              <div className="flex items-center justify-between border-t border-neutral-100 pt-3">
                <span className="text-xs text-deep-ink/60 font-semibold tracking-wider uppercase">Service</span>
                <span className="text-deep-ink text-sm font-medium">{result.service_interested}</span>
              </div>
            )}
            
            <div className="flex items-center justify-between border-t border-neutral-100 pt-3">
              <span className="text-xs text-deep-ink/60 font-semibold tracking-wider uppercase">Status</span>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${statusInfo.bg} ${statusInfo.text} ${statusInfo.border}`}>
                {statusInfo.label}
              </span>
            </div>

            <div className="flex items-center justify-between border-t border-neutral-100 pt-3">
              <span className="text-xs text-deep-ink/60 font-semibold tracking-wider uppercase">Last Updated</span>
              <span className="text-deep-ink/80 text-sm">
                {new Date(result.updated_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function TrackingPage() {
  return (
    <div className="min-h-screen bg-sky-white flex items-center justify-center p-6 font-sans">
      <Suspense fallback={
        <div className="max-w-md w-full bg-white border border-aether-electric-teal/10 rounded-xl p-8 text-center text-deep-ink/70">
          Loading tracker...
        </div>
      }>
        <TrackingContent />
      </Suspense>
    </div>
  );
}
