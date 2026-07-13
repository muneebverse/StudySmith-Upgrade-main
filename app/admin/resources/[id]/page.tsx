import Link from 'next/link'
import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import ResourceForm from '../resource-form'

export default async function EditResourcePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const { data: resource } = await supabase.from('resources').select('*').eq('id', id).single()

  if (!resource) redirect('/admin/resources')

  async function updateResource(data: {
    title: string
    drive_link: string
    resource_type: string
    category: string | null
    status: string
    order_index: number
  }) {
    'use server'
    const supabase = await createClient()
    const { error } = await supabase.from('resources').update(data).eq('id', id)
    if (error) return { error: error.message }
    return {}
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
        <Link href="/admin/resources" className="text-sm text-gray-600 hover:text-black">← Resources</Link>
        <h1 className="text-lg font-semibold">Edit Resource</h1>
      </header>
      <main className="max-w-2xl mx-auto px-6 py-8">
        <ResourceForm initialData={resource} onSubmit={updateResource} />
      </main>
    </div>
  )
}