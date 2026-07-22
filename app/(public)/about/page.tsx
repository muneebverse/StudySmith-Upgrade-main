import Link from 'next/link';
import Image from 'next/image';
import { Award, Target, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Target size={32} className="text-aether-bright-cyan" />,
      title: 'Clarity First',
      description:
        'We strip away noise and focus on what truly matters: your unique value and career direction.',
    },
    {
      icon: <Award size={32} className="text-aether-bright-cyan" />,
      title: 'Excellence Always',
      description:
        'Every resume, every profile, every session is crafted with meticulous attention to detail and impact.',
    },
    {
      icon: <Heart size={32} className="text-aether-bright-cyan" />,
      title: 'Human-Centered',
      description:
        'Behind every client is a person with dreams. We honor that by treating your career like our own.',
    },
  ];

  return (
    <>
      {/* Hero Section — with background photo */}
      <section className="relative text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/hero-nature.jpg" alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-aether-deep-teal/90 to-aether-electric-teal/80" />
        </div>
        <div className="container-aether text-center">
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            About AETHER
          </h1>
          <p className="text-lg text-white text-opacity-90 max-w-2xl mx-auto">
            We believe in the power of clarity. When you know who you are and what you want,
            the right opportunities follow.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 section-spacing">
        <div className="container-aether">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl mb-6">Our Story</h2>
              <p className="text-aether-deep-ink text-opacity-70 mb-4 leading-relaxed">
                AETHER was born from a simple observation: talented people were getting rejected
                before hiring managers ever saw their true value. Their resumes didn't pass ATS
                systems. Their LinkedIn profiles were invisible. Their professional narrative was
                unclear.
              </p>
              <p className="text-aether-deep-ink text-opacity-70 mb-4 leading-relaxed">
                We realized the problem wasn't the people—it was their positioning. So we built
                AETHER: a service that combines ATS expertise, strategic thinking, and human
                insight to transform professional applications.
              </p>
              <p className="text-aether-deep-ink text-opacity-70 leading-relaxed">
                We're just getting started, and every order gets the same thing: direct,
                hands-on attention rather than a template pulled off a shelf. This is our
                mission: to elevate your professional presence and clarify your path forward.
              </p>
            </div>

            {/* What you can count on, instead of unverified stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { stat: 'Direct', label: '1:1 with your specialist' },
                { stat: '5-7d', label: 'Standard turnaround' },
                { stat: 'ATS', label: 'Tested before delivery' },
                { stat: '100%', label: 'Revisions until you\'re happy' },
              ].map((item, idx) => (
                <div key={idx} className="card bg-gradient-to-br from-aether-electric-teal to-aether-bright-cyan text-white text-center">
                  <p className="text-3xl font-display font-bold mb-2">{item.stat}</p>
                  <p className="text-sm font-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-aether-electric-teal bg-opacity-5 py-24">
        <div className="container-aether">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl mb-4">Our Values</h2>
            <p className="text-lg text-aether-deep-ink text-opacity-70">
              These principles guide every decision we make and every client we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="card bg-white">
                <div className="mb-4">{value.icon}</div>
                <h3 className="font-display font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-aether-deep-ink text-opacity-70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section — honest, single-founder framing */}
      <section className="py-24 section-spacing">
        <div className="container-aether">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl mb-4">Who's Behind AETHER</h2>
            <p className="text-lg text-aether-deep-ink text-opacity-70 max-w-2xl mx-auto">
              AETHER is founded and run by a mechanical engineering student who understands
              exactly what it's like to be on the other side of a job application — because
              I'm applying for internships and roles myself.
            </p>
          </div>

          <div className="max-w-xl mx-auto card text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-aether-electric-teal to-aether-bright-cyan rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-aether-sky-white font-display font-bold text-2xl">A</span>
            </div>
            <h3 className="font-display font-bold text-xl mb-1">Founder & Career Strategist</h3>
            <p className="text-aether-bright-cyan text-sm font-600 mb-4">Every order, personally reviewed</p>
            <p className="text-aether-deep-ink text-opacity-70 text-sm">
              No account managers, no outsourcing to a team you'll never meet. When you work
              with AETHER, you work directly with the person building your resume, portfolio,
              or presentation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-aether-deep-ink text-aether-sky-white py-24">
        <div className="container-aether text-center">
          <h2 className="font-display font-bold text-4xl mb-6">Our Mission</h2>
          <p className="text-lg text-aether-sky-white text-opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
            To transform how professionals present themselves to the world. We empower people to
            gain clarity about their careers, position themselves compellingly, and achieve the
            roles and opportunities they truly deserve. Every resume we optimize, every profile
            we enhance, every person we help is a step toward a world where talent is seen,
            valued, and rewarded.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container-aether text-center">
          <h2 className="font-display font-bold text-4xl mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-aether-deep-ink text-opacity-70 max-w-2xl mx-auto mb-8">
            Let's clarify your path and elevate your career together.
          </p>
          <Link href="/request" className="btn btn-primary">
            Start Your Journey
          </Link>
        </div>
      </section>
    </>
  );
                }
              
