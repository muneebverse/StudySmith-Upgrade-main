'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

type Service = {
  id?: string
  title: string
  slug: string
  description: string | null
  price_range: string | null
  category: string | null
  status: string
  order_index: number
}

export default function ServiceForm({
  initialData,
  onSubmit,
  onDelete,
}: {
  initialData?: Service
  onSubmit: (data: Omit<Service, 'id'>) => Promise<{ error?: string }>
  onDelete?: () => Promise<void>
}) {
  const router = useRouter()
  const [title, setTitle] = useState(initialData?.title || '')
  const [slug, setSlug] = useState(initialData?.slug || '')
  const [description, setDescription] = useState(initialData?.description || '')
  const [priceRange, setPriceRange] = useState(initialData?.price_range || '')
  const [category, setCategory] = useState(initialData?.category || 'academic')
  const [status, setStatus] = useState(initialData?.status || 'active')
  const [orderIndex, setOrderIndex] = useState(initialData?.order_index ?? 0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Auto-generate slug from title if the slug field hasn't been manually touched
  const [slugTouched, setSlugTouched] = useState(!!initialData)

  function handleTitleChange(value: string) {
    setTitle(value)
    if (!slugTouched) {
      setSlug(
        value
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-')
      )
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const result = await onSubmit({
      title,
      slug,
      description: description || null,
      price_range: priceRange || null,
      category,
      status,
      order_index: orderIndex,
    })

    setLoading(false)

    if (result.error) {
      setError(result.error)
      return
    }

    router.push('/admin/services')
    router.refresh()
  }

  async function handleDelete() {
    if (!onDelete) return
    if (!confirm('Delete this service? This cannot be undone.')) return
    setLoading(true)
    await onDelete()
    router.push('/admin/services')
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-6">
      {error && (
        <p className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
          {error}
        </p>
      )}

      <label className="block mb-4">
        <span className="block text-sm font-medium mb-1">Title *</span>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
        />
      </label>

      <label className="block mb-4">
        <span className="block text-sm font-medium mb-1">
          Slug * <span className="text-gray-400">(used in the URL)</span>
        </span>
        <input
          type="text"
          required
          value={slug}
          onChange={(e) => {
            setSlug(e.target.value)
            setSlugTouched(true)
          }}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm font-mono"
        />
      </label>

      <label className="block mb-4">
        <span className="block text-sm font-medium mb-1">Description</span>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
        />
      </label>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <label className="block">
          <span className="block text-sm font-medium mb-1">Price range</span>
          <input
            type="text"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            placeholder="e.g. PKR 1500-3000"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          />
        </label>

        <label className="block">
          <span className="block text-sm font-medium mb-1">Category</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          >
            <option value="academic">Academic</option>
            <option value="career">Career</option>
            <option value="restaurant">Restaurant</option>
          </select>
        </label>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <label className="block">
          <span className="block text-sm font-medium mb-1">Status</span>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </label>

        <label className="block">
          <span className="block text-sm font-medium mb-1">
            Order <span className="text-gray-400">(lower = shows first)</span>
          </span>
          <input
            type="number"
            value={orderIndex}
            onChange={(e) => setOrderIndex(Number(e.target.value))}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          />
        </label>
      </div>

      <div className="flex justify-between items-center">
        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white rounded px-4 py-2 text-sm font-medium disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Save'}
        </button>

        {onDelete && (
          <button
            type="button"
            onClick={handleDelete}
            disabled={loading}
            className="text-sm text-red-600 hover:underline"
          >
            Delete service
          </button>
        )}
      </div>
    </form>
  )
}