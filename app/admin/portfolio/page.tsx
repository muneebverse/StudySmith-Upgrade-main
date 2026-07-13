import Link from 'next/link';
import { createClient } from '@/lib/supabase-server';

export default async function PortfolioAdminPage() {
  const supabase = await createClient();

  // Fetch projects from your Supabase 'portfolio' or 'portfolio_projects' table
  const { data: projects, error } = await supabase
    .from('portfolio') // Adjust to match your table name if different
    .select('*')
    .order('order_index', { ascending: true });

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Portfolio Admin</h1>
          <p className="text-sm text-neutral-400 mt-1">Manage your robotics and automation projects</p>
        </div>
        <Link 
          href="/admin/portfolio/new" 
          className="bg-white text-black px-4 py-2 rounded-md font-bold hover:bg-neutral-200 transition-all text-sm"
        >
          + Add New Project
        </Link>
      </div>

      {error && (
        <div className="p-4 mb-6 bg-red-900/20 border border-red-900 text-red-200 rounded-lg text-sm">
          Failed to load projects: {error.message}
        </div>
      )}

      <div className="bg-black border border-neutral-800 rounded-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-neutral-800 bg-neutral-900/50 text-neutral-400 text-xs font-bold uppercase tracking-wider">
              <th className="p-4">Title</th>
              <th className="p-4">Category</th>
              <th className="p-4">Order</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800 text-neutral-200 text-sm">
            {projects && projects.length > 0 ? (
              projects.map((project) => (
                <tr key={project.id} className="hover:bg-neutral-950/50 transition-colors">
                  <td className="p-4 font-medium text-white">{project.title}</td>
                  <td className="p-4 capitalize">{project.category}</td>
                  <td className="p-4">{project.order_index}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                      project.status === 'active' 
                        ? 'bg-green-950/50 text-green-400 border border-green-900' 
                        : 'bg-neutral-800 text-neutral-400 border border-neutral-700'
                    }`}>
                      {project.status || 'active'}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <Link
                      href={`/admin/portfolio/${project.id}`}
                      className="text-neutral-400 hover:text-white transition-colors text-sm font-bold"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-8 text-center text-neutral-500">
                  No projects found. Click "Add New Project" to create your first one.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
