import React from 'react';
import Link from 'next/link';
import { createPaper } from '@/app/actions';

export default function NewPaperPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin" className="text-sm text-gray-600 hover:text-black">
            ← Dashboard
          </Link>
          <h1 className="text-lg font-semibold">New Paper</h1>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-8">
        <form action={createPaper} className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              name="title"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Course Code</label>
            <input
              type="text"
              name="courseCode"
              required
              placeholder="e.g. CSC101"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-black"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Semester</label>
              <input
                type="text"
                name="semester"
                required
                placeholder="e.g. Fall 2025"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
              <input
                type="text"
                name="department"
                required
                placeholder="e.g. Computer Science"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-black"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">File Storage URL</label>
            <input
              type="url"
              name="fileUrl"
              required
              placeholder="e.g. https://supabase.storage.url/file.pdf"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-black"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="bg-black text-white rounded px-4 py-2 text-sm font-medium hover:bg-neutral-800 transition-colors"
            >
              Save Paper
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}