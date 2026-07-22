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
      <div 
        className="fixed top-0 w-full h-12 z-40" 
        onMouseEnter={() => setIsHovering(true)}
      />

      <nav 
        onMouseLeave={() => setIsHovering(false)}
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-white/10
          ${(isAtTop || isHovering) ? 'translate-y-0' : '-translate-y-full'}
          bg-royal/90 backdrop-blur-lg`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
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
          
          {/* Updated Navigation Links */}
          <div className="flex gap-8 text-white font-medium items-center z-50">
            <Link href="/" className="hover:text-metallic transition">Home</Link>
            <Link href="/department" className="hover:text-metallic transition">Department</Link>
            <Link href="/wellness" className="hover:text-metallic transition">Wellness</Link>
            <Link href="/destination" className="hover:text-metallic transition">Destination</Link>
            <Link href="/medical" className="hover:text-metallic transition">Medical Journey</Link>
            
            {/* Updated CTA */}
            <Link href="/contact" className="bg-metallic text-white px-6 py-2 rounded-full font-semibold hover:bg-champagne transition ml-4 shadow-lg">
              Book your free consult
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}