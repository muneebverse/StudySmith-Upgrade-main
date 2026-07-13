'use client';

type PortfolioProject = {
  id?: string;
  title?: string;
  description?: string;
  tech_tags?: string[];
  image_url?: string | null;
  project_url?: string | null;
  category?: 'robotics' | 'automation' | 'other';
  order_index?: number;
  status?: string;
};

export default function PortfolioForm({
  project,
  action,
}: {
  project?: PortfolioProject;
  action: (formData: FormData) => Promise<void>;
}) {
  return (
    <form action={action} className="space-y-5 max-w-xl">
      <div>
        <label className="block text-sm font-medium mb-1 text-neutral-200">Title</label>
        <input
          name="title"
          defaultValue={project?.title}
          required
          className="w-full bg-black text-white border border-neutral-800 rounded-md px-3 py-2 outline-none focus:border-white transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-neutral-200">Description</label>
        <textarea
          name="description"
          defaultValue={project?.description}
          rows={4}
          className="w-full bg-black text-white border border-neutral-800 rounded-md px-3 py-2 outline-none focus:border-white transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-neutral-200">
          Tech tags (comma-separated)
        </label>
        <input
          name="tech_tags"
          defaultValue={project?.tech_tags?.join(', ')}
          placeholder="Arduino, Python, ROS"
          className="w-full bg-black text-white border border-neutral-800 rounded-md px-3 py-2 outline-none focus:border-white transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-neutral-200">Image URL</label>
        <input
          name="image_url"
          defaultValue={project?.image_url ?? ''}
          className="w-full bg-black text-white border border-neutral-800 rounded-md px-3 py-2 outline-none focus:border-white transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-neutral-200">
          Project URL (optional)
        </label>
        <input
          name="project_url"
          defaultValue={project?.project_url ?? ''}
          className="w-full bg-black text-white border border-neutral-800 rounded-md px-3 py-2 outline-none focus:border-white transition-all"
        />
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1 text-neutral-200">Category</label>
          <select
            name="category"
            defaultValue={project?.category ?? 'robotics'}
            className="w-full bg-black text-white border border-neutral-800 rounded-md px-3 py-2 outline-none focus:border-white transition-all cursor-pointer"
          >
            <option value="robotics">Robotics</option>
            <option value="automation">Automation</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="w-32">
          <label className="block text-sm font-medium mb-1 text-neutral-200">Order</label>
          <input
            type="number"
            name="order_index"
            defaultValue={project?.order_index ?? 0}
            className="w-full bg-black text-white border border-neutral-800 rounded-md px-3 py-2 outline-none focus:border-white transition-all"
          />
        </div>

        <div className="w-40">
          <label className="block text-sm font-medium mb-1 text-neutral-200">Status</label>
          <select
            name="status"
            defaultValue={project?.status ?? 'active'}
            className="w-full bg-black text-white border border-neutral-800 rounded-md px-3 py-2 outline-none focus:border-white transition-all cursor-pointer"
          >
            <option value="active">Active</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="bg-white text-black px-6 py-2.5 rounded-md font-bold hover:bg-neutral-200 transition-all"
      >
        {project?.id ? 'Save changes' : 'Create project'}
      </button>
    </form>
  );
}
