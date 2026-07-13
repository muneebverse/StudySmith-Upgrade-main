import React from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-neutral-800">
      <header className="border-b border-neutral-900 bg-black/90 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-semibold text-lg tracking-tight text-neutral-100">StudySmith Admin</span>
          <button className="text-sm text-neutral-400 hover:text-white transition-colors">
            Sign out
          </button>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-6 py-10">{children}</main>
    </div>
  );
}