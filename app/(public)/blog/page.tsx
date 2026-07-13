import Link from 'next/link';
import { CalendarDays, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      id: '1',
      title: 'The ATS Secret: How to Write a Resume That Passes Automated Screening',
      excerpt:
        'Most resumes never reach human eyes. Learn the exact strategies to ensure yours gets through ATS systems and lands on hiring manager desks.',
      author: 'James Chen',
      date: 'July 10, 2024',
      readTime: '8 min read',
      category: 'Resume Tips',
      featured: true,
    },
    {
      id: '2',
      title: '5 LinkedIn Profile Mistakes Costing You Opportunities',
      excerpt:
        'Your LinkedIn profile is your digital storefront. Discover the most common mistakes professionals make and how to fix them immediately.',
      author: 'Maria Rodriguez',
      date: 'July 8, 2024',
      readTime: '6 min read',
      category: 'LinkedIn Strategy',
    },
    {
      id: '3',
      title: 'Career Transitions: How to Reframe Your Experience for New Industries',
      excerpt:
        'Changing careers? Learn how to translate your skills in ways that resonate with hiring managers in your target industry.',
      author: 'Sarah Mitchell',
      date: 'July 5, 2024',
      readTime: '10 min read',
      category: 'Career Strategy',
    },
    {
      id: '4',
      title: 'The Power of Quantified Achievements on Your Resume',
      excerpt:
        "Numbers tell the story hiring managers want to hear. Here's how to find and highlight your quantifiable wins.",
      author: 'James Chen',
      date: 'June 28, 2024',
      readTime: '7 min read',
      category: 'Resume Tips',
    },
    {
      id: '5',
      title: 'Why Your Cover Letter Matters (And How to Make It Count)',
      excerpt:
        "Cover letters aren't dead—they're just often done wrong. Learn how to write one that actually gets you noticed.",
      author: 'Sarah Mitchell',
      date: 'June 25, 2024',
      readTime: '9 min read',
      category: 'Applications',
    },
    {
      id: '6',
      title: 'Salary Negotiation: How to Confidently Ask for What You Deserve',
      excerpt:
        "Getting the offer is great. Now learn how to negotiate confidently and land the salary you've earned.",
      author: 'Maria Rodriguez',
      date: 'June 20, 2024',
      readTime: '11 min read',
      category: 'Career Strategy',
    },
  ];

  const categories = ['All', 'Resume Tips', 'LinkedIn Strategy', 'Career Strategy', 'Applications'];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-aether-indigo text-aether-sky-white py-16 lg:py-24">
        <div className="container-aether text-center">
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            AETHER Blog
          </h1>
          <p className="text-lg text-aether-sky-white text-opacity-90 max-w-2xl mx-auto">
            Expert insights, career strategies, and practical tips to elevate your professional journey.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 section-spacing">
        <div className="container-aether">
          <div className="card bg-gradient-to-br from-aether-indigo to-aether-gold text-white p-12">
            <span className="inline-block bg-aether-gold text-aether-deep-ink px-3 py-1 rounded text-xs font-bold mb-4">
              FEATURED
            </span>
            <h2 className="font-display font-bold text-4xl mb-4">
              {posts[0].title}
            </h2>
            <p className="text-lg text-aether-sky-white text-opacity-90 mb-6">
              {posts[0].excerpt}
            </p>
            <div className="flex flex-wrap gap-4 items-center mb-6 text-sm">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{posts[0].author}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays size={16} />
                <span>{posts[0].date}</span>
              </div>
              <span>{posts[0].readTime}</span>
            </div>
            <Link
              href={`/blog/${posts[0].id}`}
              className="inline-flex items-center gap-2 bg-aether-sky-white text-aether-indigo px-6 py-3 rounded font-bold hover:bg-aether-gold transition-colors"
            >
              Read Article <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-aether-indigo border-opacity-10">
        <div className="container-aether">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded text-sm font-600 transition-all ${
                  idx === 0
                    ? 'bg-aether-indigo text-aether-sky-white'
                    : 'bg-aether-indigo bg-opacity-10 text-aether-indigo hover:bg-opacity-20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24">
        <div className="container-aether">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <article key={post.id} className="card bg-white flex flex-col h-full hover:shadow-card">
                <div className="mb-4">
                  <span className="inline-block bg-aether-indigo bg-opacity-10 text-aether-indigo px-3 py-1 rounded text-xs font-bold">
                    {post.category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl mb-3 leading-tight">
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-aether-deep-ink hover:text-aether-indigo transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>

                <p className="text-aether-deep-ink text-opacity-70 text-sm mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-4 items-center text-xs text-aether-deep-ink text-opacity-60 mb-4 pt-4 border-t border-aether-indigo border-opacity-10">
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarDays size={14} />
                    <span>{post.date}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-aether-indigo font-600 hover:text-aether-gold transition-colors"
                >
                  Read Article <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-aether-indigo text-aether-sky-white py-16">
        <div className="container-aether text-center max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-3xl mb-4">
            Never Miss Career Insights
          </h2>
          <p className="text-aether-sky-white text-opacity-90 mb-6">
            Get our latest articles and exclusive career tips delivered to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded text-aether-deep-ink"
              required
            />
            <button
              type="submit"
              className="btn btn-primary bg-aether-gold text-aether-deep-ink hover:bg-white"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-aether-sky-white text-opacity-70 mt-4">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>
    </>
  );
}