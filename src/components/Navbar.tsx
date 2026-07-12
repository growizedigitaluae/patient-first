'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 1. LOWERED z-index to 40 so it doesn't block the Navbar links */}
      <div 
        className="fixed top-0 w-full h-12 z-40" 
        onMouseEnter={() => setIsHovering(true)}
      />

      <nav 
        onMouseLeave={() => setIsHovering(false)}
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-white/10
          ${(isAtTop || isHovering) ? 'translate-y-0' : '-translate-y-full'}
          bg-[#172744]/90 backdrop-blur-lg`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo is now inside a standard Link wrapper */}
          <Link href="/" className="flex items-center z-50">
            <Image 
              src="/logo.png" 
              alt="Patient First Logo" 
              width={150} 
              height={50} 
              className="h-10 w-auto object-contain"
              priority 
            />
          </Link>
          
          {/* Navigation Links and CTA are now inside the Navbar */}
          <div className="flex gap-8 text-white font-medium items-center z-50">
            <Link href="/" className="hover:text-[#C5A059] transition">Home</Link>
            <Link href="/about" className="hover:text-[#C5A059] transition">About Us</Link>
            <Link href="/medical" className="hover:text-[#C5A059] transition">Medical Journey</Link>
            <Link href="/blog" className="hover:text-[#C5A059] transition">Blog</Link>
            <Link href="/contact" className="bg-[#C5A059] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#a8864a] transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}