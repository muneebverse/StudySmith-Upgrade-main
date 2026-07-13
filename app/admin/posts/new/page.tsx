import React from 'react';
import Link from 'next/link';
import { createPost } from '@/app/actions';

export default function NewPostPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center space-x-2 text-sm text-neutral-450 mb-6">
        <Link href="/admin" className="hover:text-white transition-colors">← Posts</Link>
        <span>/</span>
        <span className="text-white">New Post</span>
      </div>

      <form action={createPost} className="bg-black border border-neutral-850 rounded-xl p-8 space-y-6">
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
          <label className="block text-sm font-bold text-neutral-100 mb-2">Slug</label>
          <input
            type="text"
            name="slug"
            required
            className="w-full bg-black text-white border border-neutral-700 focus:border-white focus:ring-1 focus:ring-white rounded-lg px-4 py-2.5 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-neutral-100 mb-2">Excerpt</label>
          <textarea
            name="excerpt"
            rows={2}
            className="w-full bg-black text-white border border-neutral-700 focus:border-white focus:ring-1 focus:ring-white rounded-lg px-4 py-2.5 outline-none transition-all resize-y"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-neutral-100 mb-2">Cover Image URL</label>
          <input
            type="url"
            name="coverImageUrl"
            required
            className="w-full bg-black text-white border border-neutral-700 focus:border-white focus:ring-1 focus:ring-white rounded-lg px-4 py-2.5 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-neutral-100 mb-2">Content</label>
          <div className="border border-neutral-700 rounded-lg overflow-hidden focus-within:border-white transition-all">
            <div className="flex items-center space-x-3 px-3 py-2 bg-neutral-950 border-b border-neutral-800 text-xs font-mono text-neutral-400">
              <span className="cursor-default">B</span>
              <span className="cursor-default">I</span>
              <span className="cursor-default">H2</span>
              <span className="cursor-default">List</span>
              <span className="cursor-default">Image</span>
            </div>
            <textarea
              name="content"
              required
              rows={8}
              className="w-full bg-black text-white p-4 outline-none resize-y"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-neutral-100 mb-2">Meta Title (SEO)</label>
            <input
              type="text"
              name="metaTitle"
              required
              className="w-full bg-black text-white border border-neutral-700 focus:border-white focus:ring-1 focus:ring-white rounded-lg px-4 py-2.5 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-neutral-100 mb-2">Meta Description (SEO)</label>
            <input
              type="text"
              name="metaDescription"
              required
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