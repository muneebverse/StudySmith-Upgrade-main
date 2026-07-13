import Link from 'next/link'
import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import LeadStatusForm from './lead-status-form'

export default async function LeadDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const { data: lead } = await supabase.from('leads').select('*').eq('id', id).single()

  if (!lead) redirect('/admin/leads')

  async function updateStatus(status: string) {
    'use server'
    const supabase = await createClient()
    const { error } = await supabase
      .from('leads')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', id)
    if (error) return { error: error.message }
    return {}
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
        <Link href="/admin/leads" className="text-sm text-gray-600 hover:text-black">← Leads</Link>
        <h1 className="text-lg font-semibold">Order {lead.order_id}</h1>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-8 space-y-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-3">
          <div>
            <span className="text-xs text-gray-500 uppercase">Name</span>
            <p className="text-sm font-medium">{lead.name}</p>
          </div>
          <div>
            <span className="text-xs text-gray-500 uppercase">Contact</span>
            <p className="text-sm font-medium">{lead.contact}</p>
          </div>
          <div>
            <span className="text-xs text-gray-500 uppercase">Service</span>
            <p className="text-sm font-medium">{lead.service_interested}</p>
          </div>
          <div>
            <span className="text-xs text-gray-500 uppercase">Message</span>
            <p className="text-sm text-gray-700 whitespace-pre-wrap">{lead.message || '—'}</p>
          </div>
          <div>
            <span className="text-xs text-gray-500 uppercase">Received</span>
            <p className="text-sm font-medium">{new Date(lead.created_at).toLocaleString()}</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <LeadStatusForm currentStatus={lead.status} onUpdate={updateStatus} />
        </div>
      </main>
    </div>
  )
}