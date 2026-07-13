import Link from 'next/link'
import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import SampleForm from '../sample-form'

export default async function EditRestaurantSamplePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const { data: sample } = await supabase.from('service_samples').select('*').eq('id', id).single()

  if (!sample) redirect('/admin/restaurant-samples')

  async function updateSample(data: {
    title: string
    image_url: string | null
    live_url: string | null
    caption: string | null
    status: string
    order_index: number
  }) {
    'use server'
    const supabase = await createClient()
    const { error } = await supabase.from('service_samples').update(data).eq('id', id)
    if (error) return { error: error.message }
    return {}
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
        <Link href="/admin/restaurant-samples" className="text-sm text-gray-600 hover:text-black">← Restaurant Projects</Link>
        <h1 className="text-lg font-semibold">Edit Project</h1>
      </header>
      <main className="max-w-2xl mx-auto px-6 py-8">
        <SampleForm initialData={sample} onSubmit={updateSample} />
      </main>
    </div>
  )
}