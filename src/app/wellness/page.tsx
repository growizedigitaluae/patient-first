'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function WellnessPage() {
  const [activeTab, setActiveTab] = useState<'annual' | 'founding'>('annual');

  return (
    <div className="min-h-screen bg-ivory flex flex-col justify-between font-sans text-slate-700">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-36 pb-32 px-6 overflow-hidden bg-midnight text-white">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/bg-02.webp" 
            alt="Wellness background" 
            fill 
            className="object-cover opacity-100" 
            priority 
          />
          <div className="absolute inset-0 bg-midnight/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
          <span className="text-metallic font-medium tracking-[0.2em] uppercase text-sm">
            Proactive Longevity & Family Office Care
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-white max-w-4xl leading-tight">
            Patient First <span className="text-metallic">Wellness & Membership</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
            Elevate your healthcare strategy beyond reactive treatment. Secure continuous health monitoring, global specialist oversight, and a dedicated medical family office experience.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link 
              href="#packages" 
              className="bg-metallic text-white px-8 py-4 rounded-full font-semibold hover:bg-champagne transition shadow-lg"
            >
              Explore Membership Tiers
            </Link>
            <Link 
              href="#portal-preview" 
              className="bg-royal hover:bg-midnight text-white border border-metallic/30 px-8 py-4 rounded-full font-semibold transition shadow-md"
            >
              Preview Member Portal
            </Link>
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-metallic font-medium tracking-wider uppercase text-sm">The Wellness Standard</span>
            <h2 className="text-3xl md:text-4xl font-serif text-midnight leading-snug">
              Proactive Health Architecture for You and Your Family
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Traditional healthcare waits for symptoms to appear. At Patient First Worldwide, our wellness memberships are engineered around continuous optimization, early diagnostic screening, and permanent care coordination.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Whether managing multi-generational family health or maintaining peak executive performance, our members receive individualized attention backed by world-class medical networks in Dubai, Europe, and the US.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-5 rounded-2xl border border-royal/10 shadow-sm">
                <h4 className="font-bold text-midnight text-lg mb-1">5+ Year Planning</h4>
                <p className="text-xs text-slate-500">Long-term health milestone mapping.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-royal/10 shadow-sm">
                <h4 className="font-bold text-midnight text-lg mb-1">Global Second Opinions</h4>
                <p className="text-xs text-slate-500">Continuous access to key opinion leaders.</p>
              </div>
            </div>
          </div>
          <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/care.webp" 
              alt="Wellness consultation" 
              fill 
              className="object-cover" 
            />
          </div>
        </div>
      </section>

      {/* --- CORE WELLNESS PILLARS CONTENT SECTION WITH POP HOVER EFFECT --- */}
      <section className="py-24 px-6 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-metallic font-medium tracking-widest uppercase text-sm">Clinical Excellence</span>
            <h2 className="text-3xl md:text-5xl font-serif text-midnight">Core Wellness Pillars</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Our comprehensive medical framework targets the foundational drivers of human longevity, translating cutting-edge clinical science into practical daily health protocols.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Pillar 1 */}
            <div className="bg-ivory p-8 rounded-3xl border border-royal/20 shadow-sm space-y-5 hover:-translate-y-2 hover:shadow-xl hover:border-royal transition-all duration-300 group">
              <div className="w-14 h-14 bg-royal text-white rounded-2xl flex items-center justify-center group-hover:bg-midnight transition-colors shadow-md shadow-royal/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-midnight font-bold">Advanced Biomarkers</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Deep-dive diagnostic analysis tracking metabolic panels, epigenetic clocks, inflammatory indices, and hereditary risk vectors.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-ivory p-8 rounded-3xl border border-royal/20 shadow-sm space-y-5 hover:-translate-y-2 hover:shadow-xl hover:border-royal transition-all duration-300 group">
              <div className="w-14 h-14 bg-royal text-white rounded-2xl flex items-center justify-center group-hover:bg-midnight transition-colors shadow-md shadow-royal/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-midnight font-bold">Sleep & Recovery</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Circadian alignment and autonomic nervous system tracking to optimize restorative sleep architecture and manage chronic stress.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-ivory p-8 rounded-3xl border border-royal/20 shadow-sm space-y-5 hover:-translate-y-2 hover:shadow-xl hover:border-royal transition-all duration-300 group">
              <div className="w-14 h-14 bg-royal text-white rounded-2xl flex items-center justify-center group-hover:bg-midnight transition-colors shadow-md shadow-royal/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-midnight font-bold">Cellular Longevity</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Targeted therapeutic interventions supporting mitochondrial health, metabolic flexibility, and biological age reduction.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-ivory p-8 rounded-3xl border border-royal/20 shadow-sm space-y-5 hover:-translate-y-2 hover:shadow-xl hover:border-royal transition-all duration-300 group">
              <div className="w-14 h-14 bg-royal text-white rounded-2xl flex items-center justify-center group-hover:bg-midnight transition-colors shadow-md shadow-royal/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-midnight font-bold">Nutritional Engineering</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Personalized macronutrient design, continuous glucose monitoring integration, and precision supplement regimens.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- MEMBERSHIP PACKAGES SECTION WITH POP HOVER EFFECT --- */}
      <section id="packages" className="py-24 px-6 bg-ivory text-midnight relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-metallic font-medium tracking-widest uppercase text-sm">Future Tiers</span>
            <h2 className="text-3xl md:text-5xl font-serif text-midnight">Membership Packages</h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm">
              Choose the level of clinical oversight and concierge coordination tailored to your personal or corporate requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Silver Tier */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 flex flex-col justify-between shadow-xl relative hover:-translate-y-2 hover:shadow-2xl hover:border-royal transition-all duration-300">
              <div>
                <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Essential</div>
                <h3 className="text-2xl font-serif text-midnight mb-4">Silver</h3>
                <p className="text-slate-600 text-sm mb-6">Designed for individuals seeking reliable guidance and foundational health coordination.</p>
                
                <ul className="space-y-3 text-sm text-slate-600 mb-8 border-t border-slate-200 pt-6">
                  <li className="flex items-center gap-2"><span className="text-metallic font-bold">✓</span> Annual health audit & planning</li>
                  <li className="flex items-center gap-2"><span className="text-metallic font-bold">✓</span> Secure digital record archiving</li>
                  <li className="flex items-center gap-2"><span className="text-metallic font-bold">✓</span> Priority telemedicine routing</li>
                  <li className="flex items-center gap-2"><span className="text-metallic font-bold">✓</span> 24/7 advocate helpline access</li>
                </ul>
              </div>
              <Link 
                href="/contact" 
                className="w-full text-center bg-royal hover:bg-midnight text-white py-3.5 rounded-xl font-semibold transition shadow-md"
              >
                Inquire Silver Tier
              </Link>
            </div>

            {/* Gold Tier - Featured */}
            <div className="bg-white rounded-3xl p-8 border-2 border-metallic flex flex-col justify-between shadow-2xl relative transform md:-translate-y-4 hover:-translate-y-6 hover:shadow-2xl hover:border-royal transition-all duration-300">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-metallic text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full shadow-md">
                Most Popular
              </div>
              <div>
                <div className="text-metallic text-xs font-bold uppercase tracking-wider mb-2">Advanced</div>
                <h3 className="text-2xl font-serif text-midnight mb-4">Gold</h3>
                <p className="text-slate-600 text-sm mb-6">Comprehensive multi-disciplinary screening and priority international care management.</p>
                
                <ul className="space-y-3 text-sm text-slate-600 mb-8 border-t border-slate-200 pt-6">
                  <li className="flex items-center gap-2"><span className="text-metallic font-bold">✓</span> Everything in Silver Tier</li>
                  <li className="flex items-center gap-2"><span className="text-metallic font-bold">✓</span> Full executive diagnostic screening coordination</li>
                  <li className="flex items-center gap-2"><span className="text-metallic font-bold">✓</span> Bi-annual global second opinion reviews</li>
                  <li className="flex items-center gap-2"><span className="text-metallic font-bold">✓</span> Dedicated senior care coordinator</li>
                  <li className="flex items-center gap-2"><span className="text-metallic font-bold">✓</span> Coverage for spouse & dependents included</li>
                </ul>
              </div>
              <Link 
                href="/contact" 
                className="w-full text-center bg-metallic hover:bg-champagne text-white py-3.5 rounded-xl font-semibold transition shadow-lg"
              >
                Inquire Gold Tier
              </Link>
            </div>

            {/* Platinum Tier */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 flex flex-col justify-between shadow-xl relative hover:-translate-y-2 hover:shadow-2xl hover:border-royal transition-all duration-300">
              <div>
                <div className="text-royal text-xs font-bold uppercase tracking-wider mb-2">Ultra-VIP</div>
                <h3 className="text-2xl font-serif text-midnight mb-4">Platinum</h3>
                <p className="text-slate-600 text-sm mb-6">Absolute bespoke medical management, private physician access, and global emergency response.</p>
                
                <ul className="space-y-3 text-sm text-slate-600 mb-8 border-t border-slate-200 pt-6">
                  <li className="flex items-center gap-2"><span className="text-metallic font-bold">✓</span> Dedicated Medical Director</li>
                  <li className="flex items-center gap-2"><span className="text-metallic font-bold">✓</span> Custom genome & biomarker tracking</li>
                  <li className="flex items-center gap-2"><span className="text-metallic font-bold">✓</span> Private jet & bedside transfer logistics</li>
                  <li className="flex items-center gap-2"><span className="text-metallic font-bold">✓</span> Zero liability private confidentiality shield</li>
                </ul>
              </div>
              <Link 
                href="/contact" 
                className="w-full text-center bg-royal hover:bg-midnight text-white py-3.5 rounded-xl font-semibold transition shadow-md"
              >
                Inquire Platinum Tier
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* --- MEMBERSHIP AREA PREVIEW (LIGHT IVORY BACKGROUND) --- */}
      <section id="portal-preview" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-ivory rounded-3xl p-10 md:p-16 border border-slate-200/85 shadow-xl grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="bg-royal/10 text-royal font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
              Coming Soon
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-midnight">
              The Member Portal & Healthcare Activity Hub
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We are building a state-of-the-art secure member portal. Soon, active members will be able to log in directly to upload medical histories, monitor upcoming consultations, track diagnostic results, and communicate securely with their dedicated care team.
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-metallic/20 text-metallic flex items-center justify-center font-bold text-xs mt-1">1</div>
                <div>
                  <h4 className="font-bold text-midnight">Secure Document Vault</h4>
                  <p className="text-sm text-slate-500">Upload and encrypt diagnostic reports, scans, and past lab results.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-metallic/20 text-metallic flex items-center justify-center font-bold text-xs mt-1">2</div>
                <div>
                  <h4 className="font-bold text-midnight">Real-Time Activity Monitor</h4>
                  <p className="text-sm text-slate-500">Track milestones, upcoming specialist reviews, and travel logistics in one view.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-metallic/20 text-metallic flex items-center justify-center font-bold text-xs mt-1">3</div>
                <div>
                  <h4 className="font-bold text-midnight">Direct Coordinator Chat</h4>
                  <p className="text-sm text-slate-500">Direct encrypted line to your personal medical advocate 24/7.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md flex flex-col justify-center items-center text-center space-y-6">
            <div className="w-20 h-20 bg-royal rounded-2xl flex items-center justify-center text-metallic shadow-lg">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-midnight mb-2">Member Portal Access</h3>
              <p className="text-slate-500 text-sm max-w-xs">
                Portal login and registration features are currently under development for founding members.
              </p>
            </div>
            <Link 
              href="/contact" 
              className="bg-royal hover:bg-midnight text-white px-8 py-3 rounded-xl font-semibold transition text-sm shadow-md"
            >
              Request Early Portal Access
            </Link>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 px-6 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-metallic font-medium tracking-wider uppercase text-sm">Common Inquiries</span>
            <h2 className="text-3xl md:text-4xl font-serif text-midnight mt-2">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What is the difference between a standard membership and traditional insurance?",
                a: "Patient First Wellness memberships are not insurance. We act as your private medical family office and advocate. We coordinate care, match you with global specialists, manage records, and ensure clinical excellence without insurance red tape."
              },
              {
                q: "When will the member login area be officially launched?",
                a: "The portal beta is scheduled for rollout later this year, giving founding members immediate access to their secure document vault and activity trackers."
              },
              {
                q: "Can I upgrade my membership package later?",
                a: "Yes, you can seamlessly upgrade from Silver to Gold or Platinum tiers at any time through your coordinator."
              },
              {
                q: "Is my personal health data kept confidential?",
                a: "Absolute privacy is our core promise. All records are stored under strict data sovereignty and privacy standards by default."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-ivory p-8 rounded-2xl shadow-sm border border-slate-200/60">
                <h3 className="font-serif font-bold text-midnight text-lg mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BOTTOM CTA (LIGHT BACKGROUND WITH BRAND CTA) --- */}
      <section className="py-24 px-6 bg-slate-100 text-midnight text-center border-t border-slate-200">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-3xl md:text-4xl font-serif text-midnight">Take Control of Your Longevity Today.</h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm">
            Speak directly with our care directors to reserve your membership tier and prepare for our upcoming digital portal release.
          </p>
          <div className="pt-4">
            <Link 
              href="/contact" 
              className="inline-block bg-metallic text-white px-10 py-4 rounded-full font-semibold hover:bg-champagne transition shadow-lg"
            >
              Book Your Free Consultation
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}