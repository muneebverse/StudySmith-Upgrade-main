import React from 'react';
import Link from 'next/link';
import { createRestaurantProject } from '@/app/actions';

export default function NewRestaurantProjectPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center space-x-2 text-sm text-neutral-400 mb-6">
        <Link href="/admin" className="hover:text-white transition-colors">
          ← Restaurant Projects
        </Link>
        <span>/</span>
        <span className="text-white">New Project</span>
      </div>

      <form action={createRestaurantProject} className="bg-black border border-neutral-800 rounded-xl p-8 space-y-6">
        <div>
          <label className="block text-sm font-bold text-neutral-100 mb-2">Title (restaurant name)</label>
          <input
            type="text"
            name="restaurantName"
            required
            className="w-full bg-black text-white border border-neutral-700 focus:border-white focus:ring-1 focus:ring-white rounded-lg px-4 py-2.5 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-neutral-100 mb-2">Screenshot URL (comma-separated if multiple)</label>
          <input
            type="text"
            name="screenshotUrls"
            required
            placeholder="e.g. https://image1.com, https://image2.com"
            className="w-full bg-black text-white border border-neutral-700 focus:border-white focus:ring-1 focus:ring-white rounded-lg px-4 py-2.5 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-neutral-100 mb-2">Live URL (optional — leave blank if sold/offline)</label>
          <input
            type="url"
            name="liveUrl"
            className="w-full bg-black text-white border border-neutral-700 focus:border-white focus:ring-1 focus:ring-white rounded-lg px-4 py-2.5 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-neutral-100 mb-2">Caption / summary</label>
          <textarea
            name="summary"
            rows={4}
            required
            className="w-full bg-black text-white border border-neutral-700 focus:border-white focus:ring-1 focus:ring-white rounded-lg px-4 py-2.5 outline-none transition-all resize-y"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-neutral-100 mb-2">Order</label>
            <input
              type="number"
              name="orderIndex"
              defaultValue={0}
              className="w-full bg-black text-white border border-neutral-700 focus:border-white focus:ring-1 focus:ring-white rounded-lg px-4 py-2.5 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-neutral-100 mb-2">Status</label>
            <select
              name="status"
              className="w-full bg-black text-white border border-neutral-700 focus:border-white focus:ring-1 focus:ring-white rounded-lg px-4 py-2.5 outline-none transition-all cursor-pointer"
            >
              <option value="showcase">Showcase</option>
              <option value="sold">Sold</option>
            </select>
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