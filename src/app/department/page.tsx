'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MedicalSpecialtiesPage() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const specialties = [
    {
      title: "Orthopaedics & Spine",
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      desc: "The medical field of orthopedics, also known as orthopedic surgery, focuses on musculoskeletal injuries and illnesses. The musculoskeletal system allows you to move, work, and be active. It constitutes your bones, joints, ligaments, tendons, muscles, and nerves. Our Orthopaedic Surgeons today treat patients of all ages, from babies with clubfeet to young athletes needing arthroscopic surgery to elderly patients with arthritis."
    },
    {
      title: "Cardiology & Cardiac Surgery",
      img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      desc: "Cardiology is a branch of medicine that treats the disorders of the heart and the cardiovascular system. Cardiology incorporates the medical diagnosis and treatment of congenital heart defects, heart failure, valvular heart disease, coronary artery disease, and electrophysiology."
    },
    {
      title: "Oncology & Haematology",
      img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      desc: "Oncology is the medical specialty focused on the prevention, diagnosis, and treatment of cancer and related conditions. It involves the management of various types of cancers using a multidisciplinary approach that may include chemotherapy, radiation therapy, immunotherapy, targeted therapy, and surgical care."
    },
    {
      title: "Neurology & Neurosurgery",
      img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
      desc: "Neurology and neurosurgery focus on the prevention, diagnosis, and surgical or medical treatment of disorders and injuries involving the nervous system, including the brain, spinal cord, peripheral nerves, and extra-cranial cerebrovascular system."
    },
    {
      title: "Women’s Health & Fertility",
      img: "https://images.unsplash.com/photo-1584516150905-cbf41ea4175e?auto=format&fit=crop&w=800&q=80",
      desc: "Dedicated to comprehensive reproductive health, fertility solutions, obstetrics, and gynaecological care, providing advanced medical interventions and personalized support tailored to every stage of a woman's life."
    },
    {
      title: "Paediatrics & Neonatology",
      img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      desc: "Specialized medical care focused on the physical, emotional, and social health of infants, children, and adolescents, including critical intensive care for newborn neonates with complex medical needs."
    },
    {
      title: "Ophthalmology",
      img: "https://images.unsplash.com/photo-1579684453423-f843f9ef3010?auto=format&fit=crop&w=800&q=80",
      desc: "Comprehensive medical and surgical eye care, addressing disorders of the visual system, retina, cornea, glaucoma, and advanced laser or microsurgical vision correction procedures."
    },
    {
      title: "Urology & Nephrology",
      img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      desc: "Focusing on the medical management and surgical treatment of urinary tract diseases, kidney disorders, stone management, dialysis support, and urological oncology."
    },
    {
      title: "Gastroenterology & Hepatology",
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      desc: "Specializing in the digestive system and its disorders, covering conditions of the stomach, intestines, liver, gallbladder, and pancreas with advanced endoscopic and therapeutic interventions."
    },
    {
      title: "Transplantation",
      img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      desc: "Coordinating complex multi-organ transplant procedures with world-class surgical teams, ensuring rigorous pre-transplant evaluations and comprehensive post-operative recovery management."
    },
    {
      title: "Rehabilitation & Recovery",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      desc: "Multidisciplinary physical and cognitive rehabilitation programs designed to restore optimal function, mobility, and independence following major surgeries, trauma, or strokes."
    },
    {
      title: "Dentistry & Oral Surgery",
      img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
      desc: "Advanced dental care, restorative treatments, maxillofacial surgery, and dental implantology performed by leading dental specialists using state-of-the-art technology."
    },
    {
      title: "Bariatric & Metabolic Care",
      img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
      desc: "Comprehensive weight management solutions, metabolic evaluations, and advanced bariatric surgical procedures designed to improve long-term health and wellness."
    },
    {
      title: "Aesthetic & Reconstructive Surgery",
      img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
      desc: "Specialized plastic, reconstructive, and aesthetic procedures aimed at restoring form and function after trauma or illness, alongside personalized cosmetic enhancements."
    },
    {
      title: "Executive Health Screening",
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      desc: "Comprehensive, multi-day preventative health assessments and diagnostic screenings tailored for executives and individuals seeking a deep understanding of their health profile."
    },
    {
      title: "Rare & Complex Conditions",
      img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      desc: "Multidisciplinary clinical coordination for rare, undiagnosed, or highly complex medical cases, connecting patients with global key opinion leaders and specialized research centers."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col justify-between font-sans">
      
      {/* --- DYNAMIC TOP NAVBAR TRIGGER ZONE --- */}
      <div 
        className="fixed top-0 w-full h-12 z-40" 
        onMouseEnter={() => setIsHovering(true)}
      />

      {/* --- NAVBAR --- */}
      <nav 
        onMouseLeave={() => setIsHovering(false)}
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-white/10
          ${(isAtTop || isHovering) ? 'translate-y-0' : '-translate-y-full'}
          bg-[#172744]/90 backdrop-blur-lg`}
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
          
          {/* Navigation Links */}
          <div className="flex gap-8 text-white font-medium items-center z-50">
            <Link href="/" className="hover:text-[#C5A059] transition">Home</Link>
            <Link href="/department" className="hover:text-[#C5A059] transition">Department</Link>
            <Link href="/wellness" className="hover:text-[#C5A059] transition">Wellness</Link>
            <Link href="/destination" className="hover:text-[#C5A059] transition">Destination</Link>
            <Link href="/medical" className="hover:text-[#C5A059] transition">Medical Journey</Link>
            
            {/* CTA */}
            <Link href="/contact" className="bg-[#C5A059] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#a8864a] transition ml-4">
              Book your free consult
            </Link>
          </div>
        </div>
      </nav>

      {/* --- MAIN PAGE CONTENT (Zero top padding to eliminate gap) --- */}
      <main className="flex-grow">
        
        {/* --- HERO SECTION WITH NAVY BLUE OVERLAY & FLUSH TOP --- */}
        <section className="relative pt-32 pb-48 px-6 overflow-hidden bg-[#001128] text-white">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/bg-01.webp" 
              alt="Medical background" 
              fill 
              className="object-cover" 
              priority 
            />
            {/* Dark Navy Blue (#001128) Overlay */}
            <div className="absolute inset-0 bg-[#001128]/75" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <span className="text-[#C5A059] font-medium tracking-[0.2em] uppercase text-sm">
                Our Medical Network
              </span>
              <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight">
                Medical Specialties <span className="text-[#C5A059]">We Coordinate.</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Explore our comprehensive global network of world-class medical disciplines. We seamlessly connect you with top-tier specialists while ensuring your care journey is managed with absolute precision.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-[#C5A059] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#a8864a] transition shadow-lg"
              >
                Book your free consult
              </Link>
            </div>
            <div className="flex-[1.15] w-full h-[480px] relative">
              <Image 
                src="/hero.webp" 
                alt="Medical specialists coordination" 
                fill 
                className="object-contain scale-105" 
                priority 
              />
            </div>
          </div>
        </section>

        {/* --- OVERLAPPING DESCRIPTION & CARDS GRID --- */}
        <section className="relative z-30 -mt-28 px-6 max-w-7xl mx-auto pb-24">
          
          {/* Overlapping Intro Card */}
          <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 p-10 md:p-14 text-center max-w-4xl mx-auto mb-16">
            <span className="text-[#C5A059] font-semibold tracking-[0.15em] uppercase text-xs block mb-3">
              Comprehensive Coverage
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#172744] mb-4">
              Medical Specialties We Coordinate
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-base">
              Patients First Worldwide supports access across a broad range of medical specialties. Final diagnosis, treatment recommendations, and clinical decisions are made exclusively by licensed healthcare professionals.
            </p>
          </div>

          {/* 16 Specialties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {specialties.map((spec, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
                <div>
                  <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-6">
                    <Image 
                      src={spec.img} 
                      alt={spec.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#172744] mb-3">{spec.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{spec.desc}</p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center gap-2 w-full bg-[#C5A059] text-white py-3.5 px-6 rounded-xl font-semibold hover:bg-[#a8864a] transition shadow-sm"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer Banner */}
          <div className="bg-[#172744] text-white p-6 rounded-2xl text-center shadow-inner max-w-3xl mx-auto">
            <p className="text-gray-300 font-medium text-sm tracking-wide">
              We coordinate access. Licensed physicians diagnose, recommend, and treat.
            </p>
          </div>
        </section>

        {/* --- BOTTOM CTA --- */}
        <section className="py-20 px-6 bg-[#172744] text-white text-center">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-3xl md:text-4xl font-serif">Your Health Comes First. Always.</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm text-gray-300">
              {["Dedicated Care Coordinator", "Transparent Communication", "Personalized Guidance", "Confidential Support", "Continuous Follow-Up", "Compassionate Care"].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-2">
                  <span className="text-[#C5A059]">✓</span> {item}
                </div>
              ))}
            </div>
            
            <div className="pt-8 border-t border-white/10">
              <h3 className="text-xl font-serif mb-6 text-gray-200">Ready to Begin Your Journey?</h3>
              <Link 
                href="/contact" 
                className="inline-block bg-[#C5A059] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#a8864a] transition shadow-lg"
              >
                Book Your Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0f1a2e] text-gray-400 py-10 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div>
            <p className="font-serif text-white text-lg font-bold mb-1">Patient First Worldwide</p>
            <p>&copy; {new Date().getFullYear()} Patient First Worldwide. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
            <Link href="/contact" className="hover:text-white transition">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}