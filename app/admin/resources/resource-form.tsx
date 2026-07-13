'use client'

import { useState } from 'react'

type ResourceData = {
  title: string
  drive_link: string
  resource_type: string
  category: string | null
  status: string
  order_index: number
}

export default function ResourceForm({
  initialData,
  onSubmit,
}: {
  initialData?: Partial<ResourceData>
  onSubmit: (data: ResourceData) => Promise<{ error?: string }>
}) {
  const [title, setTitle] = useState(initialData?.title || '')
  const [driveLink, setDriveLink] = useState(initialData?.drive_link || '')
  const [resourceType, setResourceType] = useState(initialData?.resource_type || 'course_link')
  const [category, setCategory] = useState(initialData?.category || '')
  const [status, setStatus] = useState(initialData?.status || 'active')
  const [orderIndex, setOrderIndex] = useState(initialData?.order_index ?? 0)
  const [error, setError] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError(null)

    const result = await onSubmit({
      title,
      drive_link: driveLink,
      resource_type: resourceType,
      category: category || null,
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
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Drive link</label>
        <input
          value={driveLink}
          onChange={(e) => setDriveLink(e.target.value)}
          required
          placeholder="https://drive.google.com/..."
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Type</label>
        <select
          value={resourceType}
          onChange={(e) => setResourceType(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
        >
          <option value="course_link">Course link</option>
          <option value="guide">Guide</option>
          <option value="template">Template</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Category (optional)</label>
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
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
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
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