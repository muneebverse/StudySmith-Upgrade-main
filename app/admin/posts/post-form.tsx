'use client';

import { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';

type PostData = {
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image_url: string | null;
  meta_title: string | null;
  meta_description: string | null;
  status: string;
};

export default function PostForm({
  initialData,
  onSubmit,
}: {
  initialData?: Partial<PostData>;
  onSubmit: (data: PostData) => Promise<{ error?: string }>;
}) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [slug, setSlug] = useState(initialData?.slug || '');
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || '');
  const [coverImageUrl, setCoverImageUrl] = useState(initialData?.cover_image_url || '');
  const [metaTitle, setMetaTitle] = useState(initialData?.meta_title || '');
  const [metaDescription, setMetaDescription] = useState(initialData?.meta_description || '');
  const [status, setStatus] = useState(initialData?.status || 'draft');
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: initialData?.content || '',
    immediatelyRender: false,
  });

  function slugify(text: string) {
    return text.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
  }

  function handleTitleChange(value: string) {
    setTitle(value);
    if (!initialData?.slug) setSlug(slugify(value));
  }

  function addImage() {
    const url = window.prompt('Image URL:');
    if (url) editor?.chain().focus().setImage({ src: url }).run();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);

    const result = await onSubmit({
      title,
      slug,
      excerpt: excerpt || null,
      content: editor?.getHTML() || '',
      cover_image_url: coverImageUrl || null,
      meta_title: metaTitle || null,
      meta_description: metaDescription || null,
      status,
    });

    if (result.error) {
      setError(result.error);
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-deep-ink">
      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">{error}</p>
      )}

      <div>
        <label className="block text-sm font-semibold mb-2">Title</label>
        <input
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          required
          className="w-full bg-sky-white text-deep-ink placeholder-deep-ink/30 border border-aether-electric-teal/10 focus:border-aether-electric-teal focus:ring-1 focus:ring-aether-electric-teal rounded-lg px-4 py-2.5 outline-none transition-all text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Slug</label>
        <input
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          required
          className="w-full bg-sky-white text-deep-ink placeholder-deep-ink/30 border border-aether-electric-teal/10 focus:border-aether-electric-teal focus:ring-1 focus:ring-aether-electric-teal rounded-lg px-4 py-2.5 outline-none transition-all font-mono text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Excerpt</label>
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          rows={2}
          className="w-full bg-sky-white text-deep-ink placeholder-deep-ink/30 border border-aether-electric-teal/10 focus:border-aether-electric-teal focus:ring-1 focus:ring-aether-electric-teal rounded-lg px-4 py-2.5 outline-none transition-all text-sm resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Cover image URL</label>
        <input
          value={coverImageUrl}
          onChange={(e) => setCoverImageUrl(e.target.value)}
          placeholder="https://..."
          className="w-full bg-sky-white text-deep-ink placeholder-deep-ink/30 border border-aether-electric-teal/10 focus:border-aether-electric-teal focus:ring-1 focus:ring-aether-electric-teal rounded-lg px-4 py-2.5 outline-none transition-all text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Content</label>
        <div className="border border-aether-electric-teal/10 rounded-lg overflow-hidden bg-sky-white">
          <div className="flex gap-2 border-b border-aether-electric-teal/10 px-3 py-2 bg-sky-white/50">
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleBold().run()}
              className="text-xs px-2.5 py-1 hover:bg-aether-electric-teal/10 hover:text-aether-deep-teal rounded font-bold transition-colors"
            >
              B
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleItalic().run()}
              className="text-xs px-2.5 py-1 hover:bg-aether-electric-teal/10 hover:text-aether-deep-teal rounded italic transition-colors"
            >
              I
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
              className="text-xs px-2.5 py-1 hover:bg-aether-electric-teal/10 hover:text-aether-deep-teal rounded transition-colors font-semibold"
            >
              H2
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleBulletList().run()}
              className="text-xs px-2.5 py-1 hover:bg-aether-electric-teal/10 hover:text-aether-deep-teal rounded transition-colors"
            >
              List
            </button>
            <button
              type="button"
              onClick={addImage}
              className="text-xs px-2.5 py-1 hover:bg-aether-electric-teal/10 hover:text-aether-deep-teal rounded transition-colors"
            >
              Image
            </button>
          </div>
          <EditorContent
            editor={editor}
            className="prose prose-sm max-w-none px-4 py-3 min-h-[300px] bg-white outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Meta title (SEO)</label>
        <input
          value={metaTitle}
          onChange={(e) => setMetaTitle(e.target.value)}
          className="w-full bg-sky-white text-deep-ink placeholder-deep-ink/30 border border-aether-electric-teal/10 focus:border-aether-electric-teal focus:ring-1 focus:ring-aether-electric-teal rounded-lg px-4 py-2.5 outline-none transition-all text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Meta description (SEO)</label>
        <textarea
          value={metaDescription}
          onChange={(e) => setMetaDescription(e.target.value)}
          rows={2}
          className="w-full bg-sky-white text-deep-ink placeholder-deep-ink/30 border border-aether-electric-teal/10 focus:border-aether-electric-teal focus:ring-1 focus:ring-aether-electric-teal rounded-lg px-4 py-2.5 outline-none transition-all text-sm resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full bg-sky-white text-deep-ink border border-aether-electric-teal/10 focus:border-aether-electric-teal focus:ring-1 focus:ring-aether-electric-teal rounded-lg px-4 py-2.5 outline-none transition-all cursor-pointer text-sm"
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={saving}
        className="w-full sm:w-auto bg-aether-electric-teal hover:bg-aether-deep-teal hover:border-t hover:border-t-aether-bright-cyan text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 text-sm border-t border-transparent"
      >
        {saving ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
}
