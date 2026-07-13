import React from 'react';
import Link from 'next/link';
import { createService } from '@/app/actions';

export default function NewServicePage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center space-x-2 text-sm text-neutral-400 mb-6">
        <Link href="/admin" className="hover:text-white transition-colors">← Services</Link>
        <span>/</span>
        <span className="text-white">New Service</span>
      </div>

      <form action={createService} className="bg-black border border-neutral-800 rounded-xl p-8 space-y-6">
        <div>
          <label className="block text-sm font-bold text-neutral-100 mb-2">Title *</label>
          <input
            type="text"
            name="title"
            required
            className="w-full bg-black text-white border border-neutral-700 focus:border-white focus:ring-1 focus:ring-white rounded-lg px-4 py-2.5 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-neutral-100 mb-2">Slug * (used in URL)</label>
          <input
            type="text"
            name="slug"
            required
            className="w-full bg-black text-white border border-neutral-700 focus:border-white focus:ring-1 focus:ring-white rounded-lg px-4 py-2.5 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-neutral-100 mb-2">Description</label>
          <textarea
            name="description"
            rows={5}
            className="w-full bg-black text-white border border-neutral-700 focus:border-white focus:ring-1 focus:ring-white rounded-lg px-4 py-2.5 outline-none transition-all resize-y"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-neutral-100 mb-2">Price range</label>
            <input
              type="text"
              name="priceRange"
              placeholder="e.g. $10 - $20"
              className="w-full bg-black text-white border border-neutral-700 focus:border-white focus:ring-1 focus:ring-white rounded-lg px-4 py-2.5 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-neutral-100 mb-2">Category</label>
            <select
              name="category"
              className="w-full bg-black text-white border border-neutral-700 focus:border-white focus:ring-1 focus:ring-white rounded-lg px-4 py-2.5 outline-none transition-all cursor-pointer"
            >
              <option value="academic">Academic</option>
              <option value="career">Career</option>
              <option value="restaurant">Restaurant</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-neutral-100 mb-2">Status</label>
            <select
              name="status"
              className="w-full bg-black text-white border border-neutral-700 focus:border-white focus:ring-1 focus:ring-white rounded-lg px-4 py-2.5 outline-none transition-all cursor-pointer"
            >
              <option value="Active">Active</option>
              <option value="Draft">Draft</option>
              <option value="Archived">Archived</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-neutral-100 mb-2">Order Index (lower = shows first)</label>
            <input
              type="number"
              name="orderIndex"
              defaultValue={0}
              className="w-full bg-black text-white border border-neutral-700 focus:border-white focus:ring-1 focus:ring-white rounded-lg px-4 py-2.5 outline-none transition-all"
            />
          </div>
        </div>

        <div className="pt-6">
          <button
            type="submit"
            className="bg-black hover:bg-neutral-900 border border-white text-white font-bold py-3 px-8 rounded-lg transition-all"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}