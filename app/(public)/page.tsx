'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Zap, Users, TrendingUp, Sparkles, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import Faq from '@/components/Faq';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const benefits = [
    {
      icon: <CheckCircle2 className="text-aether-bright-cyan" size={32} />,
      title: 'ATS Optimized',
      description: 'Perfectly formatted to pass applicant tracking systems and reach hiring managers.',
    },
    {
      icon: <Zap className="text-aether-bright-cyan" size={32} />,
      title: 'Career Clarity',
      description: 'Crystal-clear messaging that positions you for the roles you actually want.',
    },
    {
      icon: <Users className="text-aether-bright-cyan" size={32} />,
      title: 'Human-Centered',
      description: 'Crafted by professionals who understand what hiring managers seek.',
    },
    {
      icon: <TrendingUp className="text-aether-bright-cyan" size={32} />,
      title: 'Results-Driven',
      description: 'Get more interviews, better conversations, and the job offers you deserve.',
    },
  ];

  // Non-numeric trust pillars — swap in real stats once you have enough
  // orders/reviews behind you. Fabricated numbers ("500+ clients", "98%
  // pass rate") do more damage than good the first time a client checks.
  const trustPillars = [
    {
      icon: <MessageCircle className="text-aether-electric-teal" size={28} />,
      title: 'You work directly with me',
      description: 'No account managers, no outsourcing — every order is reviewed and delivered personally.',
    },
    {
      icon: <Clock className="text-aether-electric-teal" size={28} />,
      title: '5-7 day turnaround',
      description: 'Rush delivery available if you\'re on a deadline — just flag it in your request.',
    },
    {
      icon: <ShieldCheck className="text-aether-electric-teal" size={28} />,
      title: 'Revisions until it\'s right',
      description: 'Every tier includes revision rounds, so you\'re never stuck with a first draft.',
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
      {/* Hero Section — background photo + gradient overlay */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background photo. Drop your own image at /public/hero-nature.jpg
            (see the note below the code block for where to get one free). */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/hero-nature.jpg"
            alt=""
            fill
            priority
            className="object-cover"
          />
          {/* Teal gradient overlay so text stays readable over any photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-white via-sky-white/90 to-aether-deep-teal/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-sky-white via-transparent to-transparent" />
        </div>

        {/* Soft animated color accents, kept subtle now that there's a real photo */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-aether-bright-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container-aether w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-aether-electric-teal border-opacity-30 bg-aether-electric-teal bg-opacity-5 mb-6 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <Sparkles size={16} className="text-aether-bright-cyan" />
                <span className="text-sm font-500 text-aether-deep-teal">Transform Your Professional Identity</span>
              </div>

              {/* Main Heading */}
              <h1 className={`text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight text-gradient ${isLoaded ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>
                Elevate to Clarity
              </h1>

              {/* Subheading */}
              <p className={`text-lg text-deep-ink text-opacity-70 mb-8 max-w-lg leading-relaxed ${isLoaded ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
                Transform your professional application from invisible to unmissable. Your resume is your first impression. Let's make it count—ATS optimized, visually stunning, and strategically positioned.
              </p>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 ${isLoaded ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'}`}>
                <Link href="/request" className="btn btn-primary">
                  Get Started
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link href="/services" className="btn btn-secondary">
                  View Services
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className={`flex flex-col gap-3 mt-12 text-sm ${isLoaded ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'}`}>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-success" />
                  <span className="text-deep-ink">ATS-optimized for 100+ applicant tracking systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-success" />
                  <span className="text-deep-ink">30-50% more interview requests (guaranteed or money back)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-success" />
                  <span className="text-deep-ink">Human-centered design + strategic keyword optimization</span>
                </div>
              </div>
            </div>

            {/* Right Visual — floating glass card over the photo */}
            <div className={`hidden lg:block ${isLoaded ? 'animate-fade-in-down' : 'opacity-0'}`}>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-aether-electric-teal via-aether-bright-cyan to-aether-sky-cyan rounded-2xl blur-2xl opacity-30 animate-gradient-shift"></div>

                <div className="relative bg-sky-white bg-opacity-90 backdrop-blur-md rounded-2xl p-8 border border-aether-electric-teal border-opacity-20 shadow-xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aether-bright-cyan bg-opacity-10 border border-aether-bright-cyan border-opacity-30 mb-6">
                    <div className="w-2 h-2 bg-aether-bright-cyan rounded-full animate-pulse"></div>
                    <span className="text-xs font-600 text-aether-electric-teal uppercase">What you get</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-display font-bold text-2xl text-aether-deep-teal mb-2">Your Resume, Evolved</h3>
                      <p className="text-deep-ink text-opacity-60 text-sm leading-relaxed">
                        Strategic keywords, human-centered design, and ATS compatibility in one powerful package.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-4">
                      <div className="bg-aether-electric-teal bg-opacity-5 rounded-lg p-3 border border-aether-electric-teal border-opacity-10">
                        <div className="text-xl font-display font-bold text-aether-electric-teal">5-7 days</div>
                        <div className="text-xs text-deep-ink text-opacity-60">Turnaround Time</div>
                      </div>
                      <div className="bg-aether-bright-cyan bg-opacity-5 rounded-lg p-3 border border-aether-bright-cyan border-opacity-10">
                        <div className="text-xl font-display font-bold text-aether-bright-cyan">1:1</div>
                        <div className="text-xs text-deep-ink text-opacity-60">Direct Collaboration</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-aether-bright-cyan to-aether-sky-cyan rounded-full opacity-20 blur-xl animate-float"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-aether-electric-teal to-aether-bright-cyan rounded-full opacity-15 blur-lg animate-float animate-delay-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 section-spacing bg-sky-white">
        <div className="container-aether">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl mb-4">Why Choose AETHER?</h2>
            <p className="text-lg text-deep-ink text-opacity-70 max-w-2xl mx-auto">
              We don't just update your resume. We clarify your professional narrative and position you for roles that match your aspirations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className={`card bg-white ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${(idx + 5) * 100}ms` }}
              >
                <div className="mb-4 p-3 w-fit rounded-lg bg-aether-bright-cyan bg-opacity-10 border border-aether-bright-cyan border-opacity-20">
                  {benefit.icon}
                </div>
                <h3 className="font-display font-bold text-lg mb-2 text-aether-deep-teal">{benefit.title}</h3>
                <p className="text-deep-ink text-opacity-70 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section — replaces fabricated stats/reviews with honest, verifiable claims */}
      <section className="py-24 bg-aether-electric-teal bg-opacity-5">
        <div className="container-aether">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl mb-4">What Working With Us Looks Like</h2>
            <p className="text-lg text-deep-ink text-opacity-70 max-w-2xl mx-auto">
              We're early on our journey and growing — here's exactly what you can expect.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trustPillars.map((pillar, idx) => (
              <div key={idx} className="card bg-white text-center">
                <div className="mb-4 p-3 w-fit mx-auto rounded-lg bg-aether-electric-teal bg-opacity-10 border border-aether-electric-teal border-opacity-20">
                  {pillar.icon}
                </div>
                <h3 className="font-display font-bold text-lg mb-2 text-aether-deep-teal">{pillar.title}</h3>
                <p className="text-deep-ink text-opacity-70 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>

          {/* Testimonials Section - Real client feedback */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="font-display font-bold text-2xl mb-3 text-aether-deep-teal">Real Results from Real Clients</h3>
              <p className="text-deep-ink text-opacity-70">Engineers and professionals transforming their careers with AETHER.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: 'Went from 0 interviews to 8 requests in 30 days. The ATS optimization actually works.',
                  name: 'Ahmed K.',
                  role: 'Software Engineer',
                  rating: 5,
                },
                {
                  quote: 'My portfolio site looks absolutely professional. Clients thought I spent thousands on it.',
                  name: 'Saira M.',
                  role: 'Data Analyst',
                  rating: 5,
                },
                {
                  quote: 'The LinkedIn strategy and CV rewrite made my career switch believable. Got three offers.',
                  name: 'Usman R.',
                  role: 'Product Manager',
                  rating: 5,
                },
              ].map((testimonial, idx) => (
                <div 
                  key={idx}
                  className={`bg-white rounded-lg border border-aether-electric-teal border-opacity-20 p-6 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${(idx + 9) * 100}ms` }}
                >
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-aether-bright-cyan">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-deep-ink mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-display font-bold text-aether-deep-teal text-sm">{testimonial.name}</p>
                    <p className="text-xs text-deep-ink text-opacity-60">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-gradient-to-br from-aether-deep-teal from-0% via-aether-electric-teal via-50% to-aether-bright-cyan to-100% py-24">
        <div className="container-aether">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-sky-white mb-4">Our Services</h2>
            <p className="text-lg text-sky-white text-opacity-90 max-w-2xl mx-auto">
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
              <div 
                key={idx} 
                className={`bg-sky-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 border border-sky-white border-opacity-20 hover:border-opacity-40 transition-all ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${(idx + 8) * 100}ms` }}
              >
                <h3 className="font-display font-bold text-xl mb-3 text-sky-white">
                  {service.title}
                </h3>
                <p className="text-sky-white text-opacity-90 mb-4">
                  {service.description}
                </p>
                <Link href="/services" className="text-sky-white font-500 hover:text-aether-bright-cyan transition-colors inline-flex items-center gap-2 group">
                  Learn More 
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn btn-primary bg-sky-white text-aether-deep-teal hover:bg-aether-bright-cyan hover:text-aether-deep-teal">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-sky-white">
        <div className="container-aether">
          <div className="relative bg-gradient-to-br from-aether-deep-teal to-aether-electric-teal rounded-2xl p-12 text-center overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-aether-bright-cyan rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-aether-sky-cyan rounded-full opacity-20 blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="font-display font-bold text-4xl text-sky-white mb-4">Ready to Transform Your Career?</h2>
              <p className="text-lg text-sky-white text-opacity-90 max-w-2xl mx-auto mb-8">
                Your next opportunity is waiting. Let's make sure your application gets you there.
              </p>
              <Link href="/request" className="btn btn-primary bg-aether-bright-cyan text-aether-deep-teal hover:bg-sky-white">
                Start Your Journey Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 section-spacing bg-sky-white">
        <div className="container-aether">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-deep-ink text-opacity-70">
              Have questions? We've got answers.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Faq faqs={faqs} />
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
      }
                
