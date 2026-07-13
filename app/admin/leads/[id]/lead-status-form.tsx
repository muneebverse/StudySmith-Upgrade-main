'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LeadStatusForm({
  currentStatus,
  onUpdate,
}: {
  currentStatus: string
  onUpdate: (status: string) => Promise<{ error?: string }>
}) {
  const [status, setStatus] = useState(currentStatus)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError(null)

    const result = await onUpdate(status)

    if (result.error) {
      setError(result.error)
      setSaving(false)
      return
    }

    router.refresh()
    setSaving(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
          {error}
        </p>
      )}

      <div>
        <label className="block text-sm font-medium mb-1">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
        >
          <option value="received">Received</option>
          <option value="in_progress">In progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={saving}
        className="bg-black text-white rounded px-4 py-2 text-sm font-medium disabled:opacity-50"
      >
        {saving ? 'Updating...' : 'Update status'}
      </button>
    </form>
  )
}