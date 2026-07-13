import { createClient } from '@/lib/supabase-server';
import { notFound } from 'next/navigation';
import PortfolioForm from '../portfolio-form';
import { updatePortfolioProject } from '../actions';

export default async function EditPortfolioProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: project, error } = await supabase
    .from('portfolio_projects')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !project) {
    notFound();
  }

  const updateWithId = updatePortfolioProject.bind(null, id);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-xl font-semibold mb-6">Edit Portfolio Project</h1>
      <PortfolioForm project={project} action={updateWithId} />
    </div>
  );
}