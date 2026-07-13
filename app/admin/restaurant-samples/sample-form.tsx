'use client'

import { useState } from 'react'

type SampleData = {
  title: string
  image_url: string | null
  live_url: string | null
  caption: string | null
  status: string
  order_index: number
}

export default function SampleForm({
  initialData,
  onSubmit,
}: {
  initialData?: Partial<SampleData>
  onSubmit: (data: SampleData) => Promise<{ error?: string }>
}) {
  const [title, setTitle] = useState(initialData?.title || '')
  const [imageUrl, setImageUrl] = useState(initialData?.image_url || '')
  const [liveUrl, setLiveUrl] = useState(initialData?.live_url || '')
  const [caption, setCaption] = useState(initialData?.caption || '')
  const [status, setStatus] = useState(initialData?.status || 'showcase')
  const [orderIndex, setOrderIndex] = useState(initialData?.order_index ?? 0)
  const [error, setError] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError(null)

    const result = await onSubmit({
      title,
      image_url: imageUrl || null,
      live_url: liveUrl || null,
      caption: caption || null,
      status,
      order_index: orderIndex,
    })

    if (result.error) {
      setError(result.error)
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">{error}</p>
      )}

      <div>
        <label className="block text-sm font-medium mb-1">Title (restaurant name)</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Screenshot URL</label>
        <input
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="https://..."
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Live URL (optional — leave blank if sold/offline)</label>
        <input
          value={liveUrl}
          onChange={(e) => setLiveUrl(e.target.value)}
          placeholder="https://..."
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Caption / summary</label>
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          rows={2}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Order</label>
        <input
          type="number"
          value={orderIndex}
          onChange={(e) => setOrderIndex(Number(e.target.value))}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
        >
          <option value="showcase">Showcase</option>
          <option value="active">Active (currently live/maintained)</option>
          <option value="sold">Sold</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={saving}
        className="bg-black text-white rounded px-4 py-2 text-sm font-medium disabled:opacity-50"
      >
        {saving ? 'Saving...' : 'Save'}
      </button>
    </form>
  )
}