import { createClient } from '@/lib/supabase-server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Settings, LogOut } from 'lucide-react';

export const metadata = {
  title: 'Admin | AETHER',
  description: 'AETHER Admin Dashboard',
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/admin/login');
  }

  async function handleSignOut() {
    'use server';
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect('/admin/login');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-white via-aether-electric-teal via-opacity-5 to-aether-bright-cyan to-opacity-5">
      {/* Admin Header */}
      <header className="sticky top-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm border-b border-aether-electric-teal border-opacity-10">
        <div className="container-aether h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/admin" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-aether-deep-teal to-aether-bright-cyan flex items-center justify-center shadow-lg">
              <Settings size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-aether-deep-teal">AETHER Admin</h1>
              <p className="text-xs text-neutral">Control Center</p>
            </div>
          </Link>

          {/* Sign Out */}
          <form action={handleSignOut}>
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-deep-ink hover:text-aether-electric-teal transition-colors rounded-lg hover:bg-aether-electric-teal hover:bg-opacity-10"
            >
              <LogOut size={16} />
              Sign Out
            </button>
          </form>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-64px)]">
        {children}
      </main>
    </div>
  );
}
