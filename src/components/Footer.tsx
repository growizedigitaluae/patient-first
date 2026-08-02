import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <footer className="bg-midnight text-slate-300 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/logo.png" 
                alt="Patient First Worldwide Logo" 
                width={180} 
                height={60} 
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="max-w-sm leading-relaxed text-slate-400 text-sm">
              Patients First Worldwide is an independent patient support and healthcare coordination company. We help patients navigate their healthcare journey by facilitating communication and coordinating non-clinical services with healthcare providers. Medical advice, diagnosis, treatment, and clinical decisions are provided exclusively by licensed healthcare professionals.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-white font-serif text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-metallic transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-metallic transition">About Us</Link></li>
              <li><Link href="/medical" className="hover:text-metallic transition">Medical Journey</Link></li>
              <li><Link href="/blog" className="hover:text-metallic transition">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-serif text-lg mb-4">Contact</h3>
            <p className="text-sm text-slate-300">24/7 Dedicated Care</p>
            <a href="mailto:info@patientfirstworldwide.com" className="block text-white font-medium mt-2 hover:text-metallic transition">
              info@patientfirstworldwide.com
            </a>
            <a href="tel:+971566960486" className="block text-white font-medium mt-1 hover:text-metallic transition">
              +971 56 696 0486
            </a>
          </div>

          {/* Trust Column */}
          <div>
            <h3 className="text-white font-serif text-lg mb-4">Trust</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="hover:text-metallic transition">Privacy Commitment</Link></li>
              <li><Link href="/destinations" className="hover:text-metallic transition">Partner Hospitals</Link></li>
              <li><Link href="/department" className="hover:text-metallic transition">Departments</Link></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Patient First Worldwide. All rights reserved.</p>
          
          <p className="mt-4 md:mt-0">
            Powered by{' '}
            <Link 
              href="https://www.gro-wize.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-metallic hover:text-white transition font-medium"
            >
              Growize
            </Link>
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/971566960486"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 z-[100] hover:scale-110 transition-transform shadow-xl"
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