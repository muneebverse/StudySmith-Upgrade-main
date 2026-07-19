import Link from 'next/link';
import { createClient } from '@/lib/supabase-server';
import { redirect } from 'next/navigation';
import { 
  BarChart3, 
  FileText, 
  Briefcase, 
  Settings, 
  LogOut, 
  Plus,
  Inbox,
  Image,
  BookOpen,
  Utensils,
  TrendingUp,
  ChevronRight
} from 'lucide-react';

export default async function AdminDashboard() {
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

  const adminSections = [
    {
      category: 'Core Management',
      items: [
        {
          id: 'leads',
          icon: Inbox,
          label: 'Leads',
          description: 'Incoming service requests',
          href: '/admin/leads',
          color: 'from-aether-electric-teal to-aether-sky-cyan',
          badge: 'Track & Reply',
        },
        {
          id: 'services',
          icon: Briefcase,
          label: 'Services',
          description: 'Manage offerings & pricing',
          href: '/admin/services',
          color: 'from-aether-sky-cyan to-aether-bright-cyan',
          badge: '4 Services',
        },
      ],
    },
    {
      category: 'Content & Portfolio',
      items: [
        {
          id: 'posts',
          icon: FileText,
          label: 'Blog Posts',
          description: 'Write & publish content',
          href: '/admin/posts',
          color: 'from-aether-bright-cyan to-aether-electric-teal',
          badge: 'Blog',
        },
        {
          id: 'portfolio',
          icon: Image,
          label: 'Portfolio',
          description: 'Showcase your projects',
          href: '/admin/portfolio',
          color: 'from-aether-electric-teal to-aether-bright-cyan',
          badge: 'Projects',
        },
        {
          id: 'resources',
          icon: BookOpen,
          label: 'Resources',
          description: 'Course materials & guides',
          href: '/admin/resources',
          color: 'from-aether-deep-teal to-aether-electric-teal',
          badge: 'Learning',
        },
      ],
    },
    {
      category: 'Client Work',
      items: [
        {
          id: 'restaurant',
          icon: Utensils,
          label: 'Restaurant Projects',
          description: 'Client case studies',
          href: '/admin/restaurant-samples',
          color: 'from-aether-sky-cyan to-aether-deep-teal',
          badge: 'Samples',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-white via-aether-electric-teal via-opacity-5 to-aether-bright-cyan to-opacity-5">
      {/* Admin Header */}
      <header className="sticky top-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm border-b border-aether-electric-teal border-opacity-10">
        <div className="container-aether h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-aether-deep-teal to-aether-bright-cyan flex items-center justify-center shadow-lg">
              <Settings size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-aether-deep-teal">AETHER Admin</h1>
              <p className="text-xs text-neutral">Manage your services & content</p>
            </div>
          </div>

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
      <main className="container-aether py-12">
        {/* Welcome Section */}
        <div className="mb-16">
          <div className="flex items-start justify-between mb-2">
            <h2 className="text-4xl font-bold text-aether-deep-teal">Dashboard</h2>
            <div className="text-right">
              <p className="text-sm text-neutral">Welcome back!</p>
              <p className="text-xs text-neutral text-opacity-60">{new Date().toLocaleDateString()}</p>
            </div>
          </div>
          <p className="text-deep-ink text-opacity-70">Manage leads, services, and content from one centralized hub.</p>
        </div>

        {/* Admin Sections by Category */}
        {adminSections.map((section) => (
          <div key={section.category} className="mb-16">
            {/* Section Header */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-aether-deep-teal flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-aether-electric-teal to-aether-bright-cyan rounded-full"></span>
                {section.category}
              </h3>
            </div>

            {/* Section Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.id} href={item.href}>
                    <div className="group h-full cursor-pointer">
                      <div className={`h-full bg-gradient-to-br ${item.color} rounded-2xl p-6 text-white transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1 relative overflow-hidden`}>
                        {/* Background Accent */}
                        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                          <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 space-y-4">
                          <div className="flex items-start justify-between">
                            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Icon size={24} />
                            </div>
                            <span className="text-xs font-semibold bg-white bg-opacity-20 px-2.5 py-1 rounded-full">
                              {item.badge}
                            </span>
                          </div>

                          <div>
                            <h4 className="text-xl font-bold mb-1">{item.label}</h4>
                            <p className="text-sm text-white text-opacity-80">{item.description}</p>
                          </div>

                          <div className="flex items-center gap-2 text-sm font-semibold text-white text-opacity-70 group-hover:text-opacity-100 transition-opacity pt-2">
                            Manage
                            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}

        {/* Quick Actions */}
        <div className="mt-20 pt-12 border-t border-aether-electric-teal border-opacity-10">
          <h3 className="text-lg font-bold text-aether-deep-teal mb-6 flex items-center gap-2">
            <Plus size={20} />
            Quick Actions
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'New Service', href: '/admin/services/new', icon: '➕' },
              { label: 'New Blog Post', href: '/admin/posts/new', icon: '📝' },
              { label: 'New Portfolio', href: '/admin/portfolio/new', icon: '🎨' },
              { label: 'New Resource', href: '/admin/resources/new', icon: '📚' },
              { label: 'New Restaurant Project', href: '/admin/restaurant-samples/new', icon: '🍽️' },
              { label: 'View All Leads', href: '/admin/leads', icon: '📧' },
            ].map((action) => (
              <Link key={action.href} href={action.href}>
                <div className="p-4 bg-white border border-aether-electric-teal border-opacity-20 rounded-lg hover:border-opacity-100 hover:shadow-md transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{action.icon}</span>
                    <span className="font-semibold text-deep-ink text-sm">{action.label}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 pt-12 border-t border-aether-electric-teal border-opacity-10">
          <h3 className="text-lg font-bold text-aether-deep-teal mb-6 flex items-center gap-2">
            <TrendingUp size={20} />
            Overview
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Active Leads', value: '—', icon: '📊', color: 'bg-aether-electric-teal' },
              { label: 'Published Services', value: '4', icon: '✅', color: 'bg-aether-sky-cyan' },
              { label: 'Portfolio Items', value: '—', icon: '🎯', color: 'bg-aether-bright-cyan' },
              { label: 'Total Posts', value: '—', icon: '📰', color: 'bg-aether-deep-teal' },
            ].map((stat) => (
              <div key={stat.label} className={`${stat.color} rounded-xl p-6 text-white`}>
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-xs text-white text-opacity-80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-16 p-6 bg-gradient-to-r from-aether-electric-teal to-aether-sky-cyan rounded-xl text-white">
          <div className="flex items-start gap-4">
            <div className="text-3xl">💡</div>
            <div>
              <h4 className="font-bold mb-2">Pro Tips</h4>
              <ul className="text-sm text-white text-opacity-90 space-y-1">
                <li>• Use the Quick Actions section to create new content fast</li>
                <li>• All changes are saved automatically—no worries!</li>
                <li>• Leads show up here in real-time as clients submit requests</li>
                <li>• Test your forms before going live</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
