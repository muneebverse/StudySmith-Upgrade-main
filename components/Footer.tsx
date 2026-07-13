import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-aether-deep-teal text-aether-sky-white mt-24">
      <div className="container-aether py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logos/aether-logo-icon.png"
                alt="AETHER Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="font-display font-bold text-lg">AETHER</span>
            </div>
            <p className="text-aether-sky-white text-opacity-70 text-sm">
              Elevate your edge
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold mb-4 text-aether-bright-cyan">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-aether-sky-white hover:text-aether-bright-cyan transition-colors">
                  Resume Optimization
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-aether-sky-white hover:text-aether-bright-cyan transition-colors">
                  ATS Optimization
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-aether-sky-white hover:text-aether-bright-cyan transition-colors">
                  LinkedIn Branding
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold mb-4 text-aether-bright-cyan">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-aether-sky-white hover:text-aether-bright-cyan transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-aether-sky-white hover:text-aether-bright-cyan transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-aether-sky-white hover:text-aether-bright-cyan transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold mb-4 text-aether-bright-cyan">Connect</h4>
            <div className="flex gap-4">
              <a
                href="mailto:hello@aether.com"
                className="text-aether-sky-white hover:text-aether-bright-cyan transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-aether-sky-white hover:text-aether-bright-cyan transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-aether-sky-white hover:text-aether-bright-cyan transition-colors"
                aria-label="Github"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-aether-bright-cyan border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-aether-sky-white text-opacity-70">
            <p>&copy; {currentYear} AETHER. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-aether-bright-cyan transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-aether-bright-cyan transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}