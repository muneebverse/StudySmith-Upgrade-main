'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-aether-sky-white border-b border-aether-electric-teal border-opacity-10">
      <div className="container-aether flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logos/aether-logo-icon.png"
            alt="AETHER Logo"
            width={40}
            height={40}
            className="w-10 h-10"
            priority
          />
          <span className="font-display font-bold text-lg hidden sm:inline text-aether-deep-teal">AETHER</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-aether-electric-teal hover:text-aether-bright-cyan font-body text-sm font-500 transition-colors">
            Services
          </Link>
          <Link href="/pricing" className="text-aether-electric-teal hover:text-aether-bright-cyan font-body text-sm font-500 transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="text-aether-electric-teal hover:text-aether-bright-cyan font-body text-sm font-500 transition-colors">
            About
          </Link>
          <Link href="/blog" className="text-aether-electric-teal hover:text-aether-bright-cyan font-body text-sm font-500 transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-aether-electric-teal hover:text-aether-bright-cyan transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-aether-sky-white border-t border-aether-electric-teal border-opacity-10 px-6 py-4 space-y-4">
          <Link href="/services" className="block text-aether-electric-teal hover:text-aether-bright-cyan transition-colors">
            Services
          </Link>
          <Link href="/pricing" className="block text-aether-electric-teal hover:text-aether-bright-cyan transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="block text-aether-electric-teal hover:text-aether-bright-cyan transition-colors">
            About
          </Link>
          <Link href="/blog" className="block text-aether-electric-teal hover:text-aether-bright-cyan transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="btn btn-primary w-full">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
