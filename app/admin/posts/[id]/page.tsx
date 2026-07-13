import Link from 'next/link'
import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import PostForm from '../post-form'

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const { data: post } = await supabase.from('posts').select('*').eq('id', id).single()

  if (!post) redirect('/admin/posts')

  async function updatePost(data: any) {
    'use server'
    const supabase = await createClient()

    const published_at =
      data.status === 'published' && !post!.published_at
        ? new Date().toISOString()
        : post!.published_at

    const { error } = await supabase
      .from('posts')
      .update({ ...data, published_at, updated_at: new Date().toISOString() })
      .eq('id', id)

    if (error) return { error: error.message }
    return {}
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
        <Link href="/admin/posts" className="text-sm text-gray-600 hover:text-black">← Posts</Link>
        <h1 className="text-lg font-semibold">Edit Post</h1>
      </header>
      <main className="max-w-2xl mx-auto px-6 py-8">
        <PostForm initialData={post} onSubmit={updatePost} />
      </main>
    </div>
  )
}