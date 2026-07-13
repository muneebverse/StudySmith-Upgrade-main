// app/admin/leads/page.tsx
import Link from 'next/link';
import { createClient } from '@/lib/supabase-server';

// Ensure this page always fetches fresh database entries on every visit
export const revalidate = 0;

export default async function LeadsPage() {
  const supabase = await createClient();

  const { data: leads, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
        <Link href="/admin" className="text-sm text-gray-600 hover:text-black">← Dashboard</Link>
        <h1 className="text-lg font-semibold">Leads</h1>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2 mb-4">
            Failed to load leads: {error.message}
          </p>
        )}

        {leads && leads.length === 0 && (
          <p className="text-sm text-gray-500">No leads yet.</p>
        )}

        {leads && leads.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 font-medium">Order ID</th>
                  <th className="text-left px-4 py-3 font-medium">Name</th>
                  <th className="text-left px-4 py-3 font-medium">Service</th>
                  <th className="text-left px-4 py-3 font-medium">Status</th>
                  <th className="text-left px-4 py-3 font-medium">Received</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {leads.map((l) => (
                  <tr key={l.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                    <td className="px-4 py-3 font-mono text-xs">{l.order_id}</td>
                    <td className="px-4 py-3 font-medium">{l.name}</td>
                    <td className="px-4 py-3 text-gray-600">{l.service_interested}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-medium px-2 py-1 rounded ${
                        l.status === 'completed' ? 'bg-green-100 text-green-800'
                        : l.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                      }`}>
                        {l.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500">
                      {new Date(l.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Link href={`/admin/leads/${l.id}`} className="text-sm font-medium hover:underline">View</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}