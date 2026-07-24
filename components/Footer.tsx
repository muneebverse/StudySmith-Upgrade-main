import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import { InstagramIcon, TiktokIcon, LinkedinIcon, WhatsappIcon } from './icons/BrandIcons';
import { SOCIAL_LINKS } from '@/lib/social-links';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const connectLinks = [
    { href: SOCIAL_LINKS.email.url, label: SOCIAL_LINKS.email.label, icon: <Mail size={20} /> },
    { href: SOCIAL_LINKS.instagram.url, label: SOCIAL_LINKS.instagram.label, icon: <InstagramIcon size={20} /> },
    { href: SOCIAL_LINKS.tiktok.url, label: SOCIAL_LINKS.tiktok.label, icon: <TiktokIcon size={20} /> },
    { href: SOCIAL_LINKS.whatsapp.url, label: SOCIAL_LINKS.whatsapp.label, icon: <WhatsappIcon size={20} /> },
    { href: SOCIAL_LINKS.linkedin.url, label: SOCIAL_LINKS.linkedin.label, icon: <LinkedinIcon size={20} /> },
  ];

  return (
    <footer className="bg-gradient-to-b from-aether-deep-teal to-aether-deep-teal bg-opacity-95 text-sky-white">
      <div className="container-aether py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              {/* Transparent-background icon logo — reads cleanly on the teal footer */}
              <Image
                src="/logos/aether-logo-icon.png"
                alt="AETHER Logo"
                width={40}
                height={40}
                className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0"
              />
              <span className="font-display font-bold text-lg">AETHER</span>
            </div>
            <p className="text-sky-white text-opacity-70 text-sm leading-relaxed max-w-xs">
              Complete digital presence for engineers — portfolios, CVs, presentations, and LinkedIn.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold mb-4 text-aether-bright-cyan text-sm sm:text-base">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-sky-white text-opacity-70 hover:text-aether-bright-cyan transition-colors duration-200">
                  Portfolio & Website
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sky-white text-opacity-70 hover:text-aether-bright-cyan transition-colors duration-200">
                  CV & Career Docs
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sky-white text-opacity-70 hover:text-aether-bright-cyan transition-colors duration-200">
                  Presentations
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sky-white text-opacity-70 hover:text-aether-bright-cyan transition-colors duration-200">
                  LinkedIn Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold mb-4 text-aether-bright-cyan text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-sky-white text-opacity-70 hover:text-aether-bright-cyan transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sky-white text-opacity-70 hover:text-aether-bright-cyan transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sky-white text-opacity-70 hover:text-aether-bright-cyan transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/request" className="text-sky-white text-opacity-70 hover:text-aether-bright-cyan transition-colors duration-200">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link href="/track" className="text-sky-white text-opacity-70 hover:text-aether-bright-cyan transition-colors duration-200">
                  Track Your Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect — pulled from lib/social-links.ts, update links there */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-display font-bold mb-4 text-aether-bright-cyan text-sm sm:text-base">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {connectLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-2.5 rounded-lg bg-aether-electric-teal bg-opacity-20 text-aether-bright-cyan hover:bg-opacity-30 hover:text-sky-white transition-all duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
                  aria-label={link.label}
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-aether-bright-cyan border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-sky-white text-opacity-70 text-center md:text-left">
            <p>&copy; {currentYear} AETHER. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-aether-bright-cyan transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-aether-bright-cyan transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
