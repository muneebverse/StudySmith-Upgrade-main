'use server';

import { createClient } from '@/lib/supabase-server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

type PortfolioCategory = 'robotics' | 'automation' | 'other';

function parseTechTags(raw: string): string[] {
  return raw
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean);
}

function getFields(formData: FormData) {
  return {
    title: String(formData.get('title') ?? '').trim(),
    description: String(formData.get('description') ?? '').trim(),
    tech_tags: parseTechTags(String(formData.get('tech_tags') ?? '')),
    image_url: String(formData.get('image_url') ?? '').trim() || null,
    project_url: String(formData.get('project_url') ?? '').trim() || null,
    category: (formData.get('category') as PortfolioCategory) || 'other',
    order_index: Number(formData.get('order_index') ?? 0),
    status: String(formData.get('status') ?? 'active'),
  };
}

export async function createPortfolioProject(formData: FormData) {
  const supabase = await createClient();
  const fields = getFields(formData);

  if (!fields.title) {
    throw new Error('Title is required');
  }

  const { error } = await supabase.from('portfolio_projects').insert(fields);

  if (error) {
    throw new Error(`Failed to create project: ${error.message}`);
  }

  revalidatePath('/admin/portfolio');
  redirect('/admin/portfolio');
}

export async function updatePortfolioProject(id: string, formData: FormData) {
  const supabase = await createClient();
  const fields = getFields(formData);

  if (!fields.title) {
    throw new Error('Title is required');
  }

  const { error } = await supabase
    .from('portfolio_projects')
    .update(fields)
    .eq('id', id);

  if (error) {
    throw new Error(`Failed to update project: ${error.message}`);
  }

  revalidatePath('/admin/portfolio');
  redirect('/admin/portfolio');
}

export async function deletePortfolioProject(id: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from('portfolio_projects')
    .delete()
    .eq('id', id);

  if (error) {
    throw new Error(`Failed to delete project: ${error.message}`);
  }

  revalidatePath('/admin/portfolio');
}