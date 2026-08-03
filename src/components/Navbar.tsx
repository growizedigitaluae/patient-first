'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/department', label: 'Department' },
  { href: '/wellness', label: 'Wellness' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/medical', label: 'Medical Journey' },
];

const ctaClass =
  'bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight rounded-full font-semibold hover:opacity-95 transition-all shadow-lg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-royal/90 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <Image
            src="/logo.png"
            alt="Patient First Logo"
            width={150}
            height={50}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-8 text-white font-medium items-center">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-metallic transition">
              {link.label}
            </Link>
          ))}

          {/* Golden CTA */}
          <Link href="/contact" className={`${ctaClass} px-6 py-2 ml-4`}>
            Speak with Our Team
          </Link>
        </div>

        {/* Hamburger Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="lg:hidden flex flex-col items-center justify-center w-11 h-11 rounded-full border border-[#C5A059]/50 text-[#D4B26B]"
        >
          <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current mt-1.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current mt-1.5 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${menuOpen ? 'max-h-[80vh] opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="px-6 pb-8 pt-2 flex flex-col gap-1 text-white font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl hover:bg-white/10 hover:text-metallic transition"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className={`${ctaClass} mt-3 px-6 py-3.5 text-center`}
          >
            Speak with Our Team
          </Link>
        </div>
      </div>
    </nav>
  );
}
