import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <footer className="bg-stone-900 text-stone-300 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/logo.png" 
                alt="Patient First Worldwide Logo" 
                width={180} 
                height={60} 
                className="h-12 w-auto object-contain"
                style={{ filter: "brightness(0) invert(1)" }} 
              />
            </Link>
            <p className="max-w-sm leading-relaxed">
              Your dedicated companion in medical excellence. We stand by your side from the first consultation until full recovery, ensuring peace of mind at every step.
            </p>
          </div>

          {/* Main Navigation Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/medical" className="hover:text-white transition">Medical Journey</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <p className="text-sm">24/7 Dedicated Care</p>
            <a href="mailto:care@patientfirstworldwide.com" className="block text-white font-medium mt-2 hover:underline">
              care@patientfirstworldwide.com
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
          <p>© {new Date().getFullYear()} Patient First Worldwide. All rights reserved.</p>
          
          <p className="mt-4 md:mt-0">
            Powered by{' '}
            <Link 
              href="https://www.gro-wize.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#C5A059] hover:text-white transition"
            >
              Growize
            </Link>
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
<a
  href="https://wa.me/971566960486" // Replace with your actual number
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 w-14 h-14 z-[100] hover:scale-110 transition-transform"
>
  <Image 
    src="/whatsapp.png" 
    alt="WhatsApp Chat" 
    width={60} 
    height={60}
    className="w-full h-full object-contain"
  />
</a>
    </>
  );
}