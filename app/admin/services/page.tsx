// app/admin/services/page.tsx
import Link from 'next/link'
import { createClient } from '@/lib/supabase-server'

export default async function ServicesPage() {
  const supabase = await createClient()

  const { data: services, error } = await supabase
    .from('services')
    .select('*')
    .order('order_index', { ascending: true })

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin" className="text-sm text-gray-600 hover:text-black">
            ← Dashboard
          </Link>
          <h1 className="text-lg font-semibold">Services</h1>
        </div>
        <Link
          href="/admin/services/new"
          className="bg-black text-white rounded px-4 py-2 text-sm font-medium"
        >
          + New Service
        </Link>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2 mb-4">
            Failed to load services: {error.message}
          </p>
        )}

        {services && services.length === 0 && (
          <p className="text-sm text-gray-500">
            No services yet. Click &quot;New Service&quot; to add your first one.
          </p>
        )}

        {services && services.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 font-medium">Title</th>
                  <th className="text-left px-4 py-3 font-medium">Category</th>
                  <th className="text-left px-4 py-3 font-medium">Price range</th>
                  <th className="text-left px-4 py-3 font-medium">Status</th>
                  <th className="text-left px-4 py-3 font-medium">Order</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {services.map((s) => (
                  <tr
                    key={s.id}
                    className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
                  >
                    <td className="px-4 py-3 font-medium">{s.title}</td>
                    <td className="px-4 py-3 text-gray-600">{s.category || '—'}</td>
                    <td className="px-4 py-3 text-gray-600">{s.price_range || '—'}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded ${
                          s.status?.toLowerCase() === 'active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {s.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500">{s.order_index}</td>
                    <td className="px-4 py-3 text-right">
                      <Link
                        href={`/admin/services/${s.id}`}
                        className="text-sm font-medium hover:underline"
                      >
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
