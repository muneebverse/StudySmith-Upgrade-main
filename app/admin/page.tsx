// app/admin/page.tsx
import Link from 'next/link';
import { createClient } from '@/lib/supabase-server';
import { redirect } from 'next/navigation';

export default async function AdminDashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // If the user is not logged in, redirect them to the admin login page
  if (!user) {
    redirect('/admin/login');
  }

  // Handle signing out securely via Next.js Server Actions
  async function handleSignOut() {
    'use server';
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect('/admin/login');
  }

  const liveSection = (name: string, href: string, description: string) => (
    <Link
      key={name}
      href={href}
      className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-black transition-colors"
    >
      <h2 className="font-semibold mb-1">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </Link>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-900">AETHER Admin</h1>
        <form action={handleSignOut}>
          <button className="text-sm text-gray-600 hover:text-black">
            Sign out
          </button>
        </form>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {liveSection('Leads', '/admin/leads', 'View and manage incoming requests')}
          {liveSection('Services', '/admin/services', 'Manage your service offerings')}
          {liveSection('Posts', '/admin/posts', 'Write and publish blog posts')}
          {liveSection('Restaurant Projects', '/admin/restaurant-samples', 'Manage restaurant website showcase')}
          {liveSection('Resources', '/admin/resources', 'Manage course links and guides')}
          {liveSection('Portfolio', '/admin/portfolio', 'Manage robotics & personal projects')}
        </div>
      </main>
    </div>
  );
}