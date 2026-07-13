import React from 'react';
import Link from 'next/link';
import { createPortfolioProject } from '@/app/actions';

export default function NewPortfolioPage() {
  return (
    <div className="max-w-3xl mx-auto text-neutral-200">
      <div className="flex items-center space-x-2 text-sm text-neutral-455 mb-6">
        <Link href="/admin" className="hover:text-white transition-colors">← Portfolio</Link>
        <span>/</span>
        <span className="text-white">New Project</span>
      </div>

      <form action={createPortfolioProject} className="bg-black border border-neutral-850 rounded-xl p-8 space-y-6">
        <div>
          <label className="block text-sm font-bold text-neutral-100 mb-2">Title</label>
          <input
            type="text"
            name="title"
            required
            className="w-full bg-black text-white border border-neutral-700 focus:border-white focus:ring-1 focus:ring-white rounded-lg px-4 py-2.5 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-neutral-100 mb-2">Description</label>
          <textarea
            name="description"
            rows={5}
            required
            className="w-full bg-black text-white border border-neutral-700 focus:border-white focus:ring-1 focus:ring-white rounded-lg px-4 py-2.5 outline-none transition-all resize-y"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-neutral-100 mb-2">Tech tags (comma-separated)</label>
          <input
            type="text"
            name="techTags"
            placeholder="Arduino, Python, ROS"
            className="w-full bg-black text-white border border-neutral-700 focus:border-white focus:ring-1 focus:ring-white rounded-lg px-4 py-2.5 placeholder-neutral-600 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-neutral-100 mb-2">Image URL</label>
          <input
            type="url"
            name="imageUrl"
            required
            className="w-full bg-black text-white border border-neutral-700 focus:border-white focus:ring-1 focus:ring-white rounded-lg px-4 py-2.5 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-neutral-100 mb-2">Project URL (optional)</label>
          <input
            type="url"
            name="projectUrl"
            className="w-full bg-black text-white border border-neutral-700 focus:border-white focus:ring-1 focus:ring-white rounded-lg px-4 py-2.5 outline-none transition-all"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-bold text-neutral-100 mb-2">Category</label>
            <select
              name="category"
              className="w-full bg-black text-white border border-neutral-700 focus:border-white focus:ring-1 focus:ring-white rounded-lg px-4 py-2.5 outline-none transition-all cursor-pointer"
            >
              <option value="Robotics">Robotics</option>
              <option value="Personal">Personal</option>
            </select>
          </div>
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
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="pt-6">
          <button
            type="submit"
            className="bg-black hover:bg-neutral-900 border border-white text-white font-bold py-3 px-8 rounded-lg transition-all"
          >
            Create project
          </button>
        </div>
      </form>
    </div>
  );
}