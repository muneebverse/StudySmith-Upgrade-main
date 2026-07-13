// app/admin/services/[id]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase-server'
import ServiceForm from '../service-form'

export default async function EditServicePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createClient()

  const { data: service, error } = await supabase
    .from('services')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !service) {
    notFound()
  }

  async function updateService(data: {
    title: string
    slug: string
    description: string | null
    price_range: string | null
    category: string | null
    status: string
    order_index: number
  }) {
    'use server'
    const supabase = await createClient()

    const { error } = await supabase
      .from('services')
      .update(data)
      .eq('id', id)

    if (error) {
      return { error: error.message }
    }

    return {}
  }

  async function deleteService() {
    'use server'
    const supabase = await createClient()
    await supabase.from('services').delete().eq('id', id)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
        <Link href="/admin/services" className="text-sm text-gray-600 hover:text-black">
          ← Services
        </Link>
        <h1 className="text-lg font-semibold">Edit Service</h1>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-8">
        <ServiceForm
          initialData={service}
          onSubmit={updateService}
          onDelete={deleteService}
        />
      </main>
    </div>
  )
}