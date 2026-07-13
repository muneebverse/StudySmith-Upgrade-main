'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'resume',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (integrate with your backend)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: 'resume', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-aether-indigo text-aether-sky-white py-16 lg:py-24">
        <div className="container-aether text-center">
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-aether-sky-white text-opacity-90 max-w-2xl mx-auto">
            Ready to elevate your career? Let's talk about your goals and how AETHER can help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 section-spacing">
        <div className="container-aether">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display font-bold text-2xl mb-8">Contact Information</h2>
              </div>

              {[
                {
                  icon: <Mail size={24} className="text-aether-gold" />,
                  label: 'Email',
                  value: 'hello@aether.com',
                  href: 'mailto:hello@aether.com',
                },
                {
                  icon: <Phone size={24} className="text-aether-gold" />,
                  label: 'Phone',
                  value: '+1 (555) 123-4567',
                  href: 'tel:+15551234567',
                },
                {
                  icon: <MapPin size={24} className="text-aether-gold" />,
                  label: 'Location',
                  value: 'San Francisco, CA',
                  href: null,
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-aether-deep-ink text-opacity-70 text-sm mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-600 text-aether-indigo hover:text-aether-gold transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-600 text-aether-indigo">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Response Time */}
              <div className="card bg-aether-indigo bg-opacity-10 border-aether-indigo">
                <p className="text-sm text-aether-deep-ink text-opacity-70 mb-2">
                  <span className="font-600">Response Time:</span> Usually within 24 hours
                </p>
                <p className="text-sm text-aether-deep-ink text-opacity-70">
                  We read every message and respond personally to every inquiry.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card bg-white">
                <h2 className="font-display font-bold text-2xl mb-8">Send us a Message</h2>

                {submitted ? (
                  <div className="bg-aether-success bg-opacity-10 border border-aether-success rounded p-6 text-center">
                    <h3 className="font-display font-bold text-lg text-aether-success mb-2">
                      Thank You!
                    </h3>
                    <p className="text-aether-deep-ink text-opacity-70">
                      Your message has been received. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-600 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-aether-indigo border-opacity-20 rounded focus:outline-none focus:border-aether-indigo focus:border-opacity-100 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-600 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-aether-indigo border-opacity-20 rounded focus:outline-none focus:border-aether-indigo focus:border-opacity-100 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-600 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-aether-indigo border-opacity-20 rounded focus:outline-none focus:border-aether-indigo focus:border-opacity-100 transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-600 mb-2">
                        I'm Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-aether-indigo border-opacity-20 rounded focus:outline-none focus:border-aether-indigo focus:border-opacity-100 transition-colors"
                      >
                        <option value="resume">Resume Optimization</option>
                        <option value="linkedin">LinkedIn Branding</option>
                        <option value="strategy">Career Strategy Session</option>
                        <option value="complete">Complete Package</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-600 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-aether-indigo border-opacity-20 rounded focus:outline-none focus:border-aether-indigo focus:border-opacity-100 transition-colors resize-none"
                        placeholder="Tell us about your career goals and what you're looking for..."
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="btn btn-primary w-full bg-aether-indigo text-aether-sky-white hover:bg-opacity-90"
                    >
                      Send Message
                    </button>

                    <p className="text-xs text-aether-deep-ink text-opacity-50">
                      We respect your privacy. Your information will never be shared.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-aether-indigo bg-opacity-5 py-24">
        <div className="container-aether">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl mb-4">Quick Answers</h2>
            <p className="text-lg text-aether-deep-ink text-opacity-70">
              Common questions about working with AETHER.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                q: 'How quickly can you start?',
                a: 'We typically begin within 24 hours of purchase. Rush options available for expedited turnaround.',
              },
              {
                q: 'What if I\'m not ready to decide yet?',
                a: 'No pressure. Schedule a free 15-minute consultation to explore your options without commitment.',
              },
              {
                q: 'Can I upgrade or add services later?',
                a: 'Absolutely. Add services anytime and pay only the difference. We\'ll integrate seamlessly.',
              },
              {
                q: 'Do you work with international candidates?',
                a: 'Yes! We work with professionals worldwide and adapt our services for different markets.',
              },
            ].map((item, idx) => (
              <div key={idx} className="card bg-white">
                <h3 className="font-display font-bold text-lg mb-2 text-aether-indigo">
                  {item.q}
                </h3>
                <p className="text-aether-deep-ink text-opacity-70 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
