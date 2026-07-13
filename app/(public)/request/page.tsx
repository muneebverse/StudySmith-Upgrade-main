'use client';

import React, { useState } from 'react';

export default function RequestPage() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          contact,
          service_interested: service,
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        setLoading(false);
        return;
      }

      setOrderId(data.order_id);
    } catch {
      setError('Network error. Please check your connection and try again.');
    }

    setLoading(false);
  }

  const handleCopy = async () => {
    if (!orderId) return;
    try {
      await navigator.clipboard.writeText(orderId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy token:', err);
    }
  };

  // Success state matching light/brand-themed layouts
  if (orderId) {
    return (
      <div className="min-h-screen bg-sky-white flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full bg-white border border-aether-electric-teal/10 rounded-xl p-8 space-y-6 text-center shadow-sm">
          <div className="w-16 h-16 bg-sky-white border border-aether-electric-teal/20 rounded-full flex items-center justify-center mx-auto text-[#10B981]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-aether-deep-teal">Request Received!</h1>
            <p className="text-deep-ink/70 text-sm">
              Please copy and save your unique tracking code below to check your order status later.
            </p>
          </div>

          <div className="bg-sky-white border border-aether-electric-teal/15 rounded-lg p-4 flex items-center justify-between font-mono text-lg text-deep-ink">
            <span className="font-bold tracking-wider">{orderId}</span>
            <button
              onClick={handleCopy}
              className="text-xs font-sans font-semibold bg-aether-electric-teal hover:bg-aether-deep-teal text-white px-3 py-1.5 rounded transition-all"
            >
              {copied ? 'Copied' : 'Copy Code'}
            </button>
          </div>

          <div className="pt-2">
            <a
              href={`/track?order_id=${orderId}`}
              className="block w-full text-center bg-aether-electric-teal hover:bg-aether-deep-teal hover:border-t hover:border-t-aether-bright-cyan text-white text-sm font-semibold py-2.5 rounded-lg transition-all"
            >
              Track Order Status
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sky-white flex items-center justify-center p-6 font-sans text-deep-ink">
      <div className="max-w-xl w-full bg-white border border-aether-electric-teal/10 rounded-xl p-8 space-y-6 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-aether-deep-teal mb-2">Request Service Build</h1>
          <p className="text-deep-ink/70 text-sm">
            Select an offering from the options below and provide your contact details to get started.
          </p>
        </div>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-deep-ink mb-2">Your Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Muneeb"
              className="w-full bg-sky-white text-deep-ink placeholder-deep-ink/30 border border-aether-electric-teal/10 focus:border-aether-electric-teal focus:ring-1 focus:ring-aether-electric-teal rounded-lg px-4 py-2.5 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-deep-ink mb-2">Contact Method (Email / WhatsApp)</label>
            <input
              type="text"
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="e.g., contact@example.com or phone"
              className="w-full bg-sky-white text-deep-ink placeholder-deep-ink/30 border border-aether-electric-teal/10 focus:border-aether-electric-teal focus:ring-1 focus:ring-aether-electric-teal rounded-lg px-4 py-2.5 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-deep-ink mb-2">Select Service Line</label>
            <select
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-sky-white text-deep-ink border border-aether-electric-teal/10 focus:border-aether-electric-teal focus:ring-1 focus:ring-aether-electric-teal rounded-lg px-4 py-2.5 outline-none transition-all cursor-pointer"
            >
              <option value="">Select one</option>
              <option value="Presentations">Presentations</option>
              <option value="ATS CVs & Career Strategy">ATS CVs & Career Strategy</option>
              <option value="Portfolio Building">Portfolio Building</option>
              <option value="Restaurant Websites">Restaurant Websites</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-deep-ink mb-2">Scope & Project Details</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder="Please describe details of your request here..."
              className="w-full bg-sky-white text-deep-ink placeholder-deep-ink/30 border border-aether-electric-teal/10 focus:border-aether-electric-teal focus:ring-1 focus:ring-aether-electric-teal rounded-lg px-4 py-2.5 outline-none transition-all resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-aether-electric-teal hover:bg-aether-deep-teal hover:border-t hover:border-t-aether-bright-cyan text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Submit Project Inquiry'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
