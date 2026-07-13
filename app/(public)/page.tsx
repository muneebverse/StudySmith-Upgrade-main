import Link from 'next/link';
import { ArrowRight, CheckCircle2, Zap, Users, TrendingUp } from 'lucide-react';
import Faq from '@/components/Faq';

export default function Home() {
  const benefits = [
    {
      icon: <CheckCircle2 className="text-aether-gold" size={32} />,
      title: 'ATS Optimized',
      description: 'Perfectly formatted to pass applicant tracking systems and reach hiring managers.',
    },
    {
      icon: <Zap className="text-aether-gold" size={32} />,
      title: 'Career Clarity',
      description: 'Crystal-clear messaging that positions you for the roles you actually want.',
    },
    {
      icon: <Users className="text-aether-gold" size={32} />,
      title: 'Human-Centered',
      description: 'Crafted by professionals who understand what hiring managers seek.',
    },
    {
      icon: <TrendingUp className="text-aether-gold" size={32} />,
      title: 'Results-Driven',
      description: 'Get more interviews, better conversations, and the job offers you deserve.',
    },
  ];

  const faqs = [
    {
      id: '1',
      question: 'How does AETHER differ from other resume services?',
      answer: 'AETHER combines ATS expertise with human-centered design. We optimize for both algorithm and human reader, ensuring your resume gets past automated systems and resonates with hiring teams. Our tagline "Elevate to Clarity" isn\'t just marketing—it\'s our methodology. We strip away noise and amplify your value.',
    },
    {
      id: '2',
      question: 'What if I\'m a recent graduate or changing careers?',
      answer: 'AETHER specializes in positioning career transitions and early-stage careers. We translate your skills, projects, and potential into language that hiring managers understand. Even without years of experience, we can make your profile compelling.',
    },
    {
      id: '3',
      question: 'How long does the process take?',
      answer: 'Standard optimization takes 5-7 business days. Rush processing is available. We maintain direct communication throughout, so you\'re never left wondering about progress.',
    },
    {
      id: '4',
      question: 'Do you guarantee job offers?',
      answer: 'No service can guarantee job offers—that depends on many factors beyond your resume. However, we guarantee improved interview request rates or your money back. Most clients see 30-50% more interviews within 60 days.',
    },
    {
      id: '5',
      question: 'Can you help with LinkedIn, cover letters, and portfolios?',
      answer: 'Yes! AETHER offers complete professional branding. We optimize LinkedIn profiles, craft tailored cover letters, and build portfolio strategies. Everything works together to create a cohesive professional identity.',
    },
    {
      id: '6',
      question: 'What\'s included in the pricing?',
      answer: 'Each tier includes resume optimization, format adjustment, ATS compatibility testing, and a strategy session. Premium tiers add LinkedIn optimization, cover letter writing, and ongoing support. See our pricing page for full details.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-aether-indigo text-aether-sky-white py-24 lg:py-32">
        <div className="container-aether">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Elevate to Clarity
              </h1>
              <p className="text-lg text-aether-sky-white text-opacity-90 mb-8 max-w-lg leading-relaxed">
                Transform your professional application from invisible to unmissable. Your resume is your first impression. Let's make it count.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services" className="btn btn-primary bg-aether-gold text-aether-deep-ink hover:bg-white">
                  Get Started
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link href="/about" className="btn btn-secondary border-aether-sky-white text-aether-sky-white hover:text-aether-deep-ink">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="hidden lg:block">
              <div className="bg-gradient-to-br from-aether-gold to-aether-indigo rounded-expansive p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-aether-sky-white rounded-full mb-6">
                    <span className="text-aether-indigo font-display font-bold text-4xl">A</span>
                  </div>
                  <p className="text-aether-sky-white text-lg font-display font-bold">AETHER</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 section-spacing">
        <div className="container-aether">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl mb-4">Why Choose AETHER?</h2>
            <p className="text-lg text-aether-deep-ink text-opacity-70 max-w-2xl mx-auto">
              We don't just update your resume. We clarify your professional narrative and position you for the roles that match your aspirations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="card bg-white hover:shadow-card">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="font-display font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-aether-deep-ink text-opacity-70 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-aether-indigo bg-opacity-5 py-24">
        <div className="container-aether">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl mb-4">Our Services</h2>
            <p className="text-lg text-aether-deep-ink text-opacity-70 max-w-2xl mx-auto">
              Everything you need to stand out and get hired.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Resume Optimization',
                description: 'Complete rewrite with ATS compatibility, keyword optimization, and impact-driven bullet points.',
              },
              {
                title: 'LinkedIn Branding',
                description: 'Profile optimization, headline crafting, and professional positioning for recruiter visibility.',
              },
              {
                title: 'Career Strategy',
                description: 'One-on-one sessions to clarify your career goals and align your professional brand.',
              },
            ].map((service, idx) => (
              <div key={idx} className="card bg-white">
                <h3 className="font-display font-bold text-xl mb-3 text-aether-indigo">
                  {service.title}
                </h3>
                <p className="text-aether-deep-ink text-opacity-70 mb-4">
                  {service.description}
                </p>
                <Link href="/services" className="text-aether-indigo font-500 hover:text-aether-gold transition-colors inline-flex items-center gap-2">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn btn-primary">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container-aether">
          <div className="bg-aether-deep-ink text-aether-sky-white rounded-expansive p-12 text-center">
            <h2 className="font-display font-bold text-4xl mb-4">Ready to Transform Your Career?</h2>
            <p className="text-lg text-aether-sky-white text-opacity-80 max-w-2xl mx-auto mb-8">
              Your next opportunity is waiting. Let's make sure your application gets you there.
            </p>
            <Link href="/contact" className="btn btn-primary bg-aether-gold text-aether-deep-ink hover:bg-white">
              Start Your Journey Today
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 section-spacing">
        <div className="container-aether">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-aether-deep-ink text-opacity-70">
              Have questions? We've got answers.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Faq faqs={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
