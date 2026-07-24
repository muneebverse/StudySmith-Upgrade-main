'use client';

import { useState } from 'react';
import { AlertCircle, CheckCircle2, Loader } from 'lucide-react';

const SERVICE_OPTIONS = [
  'Portfolio & Website',
  'CV & Career Documents',
  'Presentations & Slide Decks',
  'LinkedIn Optimization',
  'Other',
];

export default function RequestForm({
  prefillService,
  prefillNote,
  onSuccess,
}: {
  prefillService?: string;
  prefillNote?: string;
  onSuccess: (orderId: string) => void;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [service, setService] = useState(prefillService || '');
  const [instructions, setInstructions] = useState(prefillNote || '');
  const [desiredDate, setDesiredDate] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleDesiredDateChange(value: string) {
    setDesiredDate(value);
    setIsUrgent(
      value ? (new Date(value).getTime() - Date.now()) / (1000 * 60 * 60 * 24) <= 5 : false
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('whatsapp', whatsapp);
    formData.append('service_interested', service);
    formData.append('instructions', instructions);
    formData.append('desired_date', desiredDate);
    files.forEach((f) => formData.append('files', f));

    try {
      const res = await fetch('/api/leads', { method: 'POST', body: formData });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        setLoading(false);
        return;
      }
      onSuccess(data.order_id);
    } catch {
      setError('Network error. Please check your connection and try again.');
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Error Alert */}
      {error && (
        <div className="flex gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
          <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      {/* Name & Email Row */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-deep-ink mb-2">Your Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., James"
            className="w-full px-4 py-2.5 rounded-lg border border-aether-electric-teal border-opacity-20 bg-sky-white text-deep-ink placeholder-neutral focus:border-opacity-100 focus:border-aether-bright-cyan transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-deep-ink mb-2">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-2.5 rounded-lg border border-aether-electric-teal border-opacity-20 bg-sky-white text-deep-ink placeholder-neutral focus:border-opacity-100 focus:border-aether-bright-cyan transition-all"
          />
        </div>
      </div>

      {/* WhatsApp */}
      <div>
        <label className="block text-sm font-semibold text-deep-ink mb-2">WhatsApp Number</label>
        <input
          type="tel"
          required
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          placeholder="+92 3XX XXXXXXX"
          className="w-full px-4 py-2.5 rounded-lg border border-aether-electric-teal border-opacity-20 bg-sky-white text-deep-ink placeholder-neutral focus:border-opacity-100 focus:border-aether-bright-cyan transition-all"
        />
      </div>

      {/* Service Selection */}
      <div>
        <label className="block text-sm font-semibold text-deep-ink mb-2">Service</label>
        <select
          required
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-aether-electric-teal border-opacity-20 bg-sky-white text-deep-ink focus:border-opacity-100 focus:border-aether-bright-cyan transition-all"
        >
          <option value="">Select a service</option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Instructions */}
      <div>
        <label className="block text-sm font-semibold text-deep-ink mb-2">Scope & Details</label>
        <textarea
          rows={4}
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Tell us what you need. The more detail, the better."
          className="w-full px-4 py-2.5 rounded-lg border border-aether-electric-teal border-opacity-20 bg-sky-white text-deep-ink placeholder-neutral focus:border-opacity-100 focus:border-aether-bright-cyan transition-all resize-none"
        />
      </div>

      {/* File Upload */}
      <div>
        <label className="block text-sm font-semibold text-deep-ink mb-2">Attach Files (Optional)</label>
        <div className="relative">
          <input
            type="file"
            multiple
            onChange={(e) => setFiles(Array.from(e.target.files || []))}
            className="w-full px-4 py-2.5 rounded-lg border border-aether-electric-teal border-opacity-20 bg-sky-white text-sm text-deep-ink file:mr-3 file:px-3 file:py-1.5 file:rounded-md file:bg-aether-electric-teal file:text-white file:font-semibold file:cursor-pointer hover:file:bg-aether-deep-teal transition-all"
          />
        </div>
        {files.length > 0 && (
          <p className="mt-2 text-sm text-aether-electric-teal font-medium flex items-center gap-1">
            <CheckCircle2 size={16} /> {files.length} file(s) selected
          </p>
        )}
      </div>

      {/* Desired Date */}
      <div>
        <label className="block text-sm font-semibold text-deep-ink mb-2">When do you need this?</label>
        <input
          type="date"
          required
          value={desiredDate}
          onChange={(e) => handleDesiredDateChange(e.target.value)}
          min={new Date().toISOString().split('T')[0]}
          className="w-full px-4 py-2.5 rounded-lg border border-aether-electric-teal border-opacity-20 bg-sky-white text-deep-ink focus:border-opacity-100 focus:border-aether-bright-cyan transition-all"
        />
        {isUrgent && (
          <p className="mt-2 text-xs text-aether-alert flex items-center gap-1 font-medium">
            ⚡ Rush request (within 5 days) — a rush fee may apply
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 px-4 bg-gradient-to-r from-aether-electric-teal to-aether-bright-cyan hover:from-aether-deep-teal hover:to-aether-electric-teal text-white font-bold rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-2 min-h-[48px]"
      >
        {loading ? (
          <>
            <Loader size={18} className="animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Request'
        )}
      </button>

      {/* Trust Line */}
      <p className="text-xs text-center text-neutral">
        We'll review your request and follow up within 24 hours. Always.
      </p>
    </form>
  );
}
