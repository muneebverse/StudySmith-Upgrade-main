import Link from 'next/link'
import { createClient } from '@/lib/supabase-server'

export default async function RestaurantSamplesPage() {
  const supabase = await createClient()

  const { data: samples, error } = await supabase
    .from('service_samples')
    .select('*')
    .eq('category', 'restaurant')
    .order('order_index', { ascending: true })

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin" className="text-sm text-gray-600 hover:text-black">← Dashboard</Link>
          <h1 className="text-lg font-semibold">Restaurant Projects</h1>
        </div>
        <Link href="/admin/restaurant-samples/new" className="bg-black text-white rounded px-4 py-2 text-sm font-medium">
          + New Project
        </Link>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2 mb-4">
            Failed to load projects: {error.message}
          </p>
        )}

        {samples && samples.length === 0 && (
          <p className="text-sm text-gray-500">No restaurant projects yet. Click &quot;New Project&quot; to add one.</p>
        )}

        {samples && samples.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 font-medium">Title</th>
                  <th className="text-left px-4 py-3 font-medium">Live URL</th>
                  <th className="text-left px-4 py-3 font-medium">Status</th>
                  <th className="text-left px-4 py-3 font-medium">Order</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {samples.map((s) => (
                  <tr key={s.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">{s.title}</td>
                    <td className="px-4 py-3 text-gray-600">
                      {s.live_url ? (
                        <a href={s.live_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {s.live_url}
                        </a>
                      ) : '—'}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-medium px-2 py-1 rounded ${
                        s.status === 'sold' ? 'bg-blue-100 text-blue-800'
                        : s.status === 'active' ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                      }`}>
                        {s.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500">{s.order_index}</td>
                    <td className="px-4 py-3 text-right">
                      <Link href={`/admin/restaurant-samples/${s.id}`} className="text-sm font-medium hover:underline">
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  )
}