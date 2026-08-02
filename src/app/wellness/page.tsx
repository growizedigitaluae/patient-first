'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function WellnessPage() {
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
            Patients First Membership
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-white max-w-4xl leading-tight">
            Personalised Healthcare <span className="text-metallic">Support Membership</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
            Stay connected with ongoing healthcare coordination, personalised support, and easier access to trusted healthcare services whenever you need them.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link 
              href="#packages" 
              className="bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight px-8 py-4 rounded-full font-semibold hover:opacity-95 transition-all shadow-lg"
            >
              View Membership Options
            </Link>
            <Link 
              href="#portal-preview" 
              className="border-2 border-[#C5A059] text-[#C5A059] hover:bg-gradient-to-r hover:from-[#C88A2B] hover:to-[#fCDA7B] hover:text-midnight px-8 py-4 rounded-full font-semibold transition-all shadow-md"
            >
              Preview Member Portal
            </Link>
          </div>
        </div>
      </section>

      {/* --- MEMBERSHIP BENEFITS SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-metallic font-medium tracking-wider uppercase text-sm">Membership Benefits</span>
            <h2 className="text-3xl md:text-4xl font-serif text-midnight leading-snug">
              Supporting Your Healthcare Journey
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Our membership programme is designed for individuals and families who would like ongoing support navigating their healthcare journey. Members benefit from dedicated coordination, personalised assistance, and access to a trusted healthcare network whenever healthcare needs arise.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-5 rounded-2xl border border-royal/10 shadow-sm">
                <h4 className="font-bold text-midnight text-lg mb-1">Ongoing Healthcare Support</h4>
                <p className="text-xs text-slate-500">Dedicated coordination and patient support whenever healthcare needs arise.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-royal/10 shadow-sm">
                <h4 className="font-bold text-midnight text-lg mb-1">Second Opinion Coordination</h4>
                <p className="text-xs text-slate-500">Support coordinating additional specialist opinions when requested.</p>
              </div>
            </div>
          </div>
          <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/care.webp" 
              alt="Patient support" 
              fill 
              className="object-cover" 
            />
          </div>
        </div>
      </section>

      {/* --- MEMBERSHIP INCLUDES SECTION --- */}
      <section className="py-24 px-6 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-metallic font-medium tracking-widest uppercase text-sm">Membership Includes</span>
            <h2 className="text-3xl md:text-5xl font-serif text-midnight">What Your Membership Provides</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Every membership is built around the support patients and families need most—organisation, coordination, and a trusted team by your side.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Benefit 1 */}
            <div className="bg-ivory p-8 rounded-3xl border border-royal/20 shadow-sm space-y-5 hover:-translate-y-2 hover:shadow-xl hover:border-royal transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md shadow-royal/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-midnight font-bold">Dedicated Patient Coordinator</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                One point of contact for your healthcare journey.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-ivory p-8 rounded-3xl border border-royal/20 shadow-sm space-y-5 hover:-translate-y-2 hover:shadow-xl hover:border-royal transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md shadow-royal/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-midnight font-bold">Healthcare Coordination</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Support with appointments, medical records, and communication.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-ivory p-8 rounded-3xl border border-royal/20 shadow-sm space-y-5 hover:-translate-y-2 hover:shadow-xl hover:border-royal transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md shadow-royal/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-midnight font-bold">Global Healthcare Network</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Helping connect members with trusted healthcare providers.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-ivory p-8 rounded-3xl border border-royal/20 shadow-sm space-y-5 hover:-translate-y-2 hover:shadow-xl hover:border-royal transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md shadow-royal/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-midnight font-bold">Family Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Helping coordinate healthcare for loved ones when needed.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-ivory p-8 rounded-3xl border border-royal/20 shadow-sm space-y-5 hover:-translate-y-2 hover:shadow-xl hover:border-royal transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md shadow-royal/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-midnight font-bold">Medical Record Organisation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Secure assistance organising healthcare documentation.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-ivory p-8 rounded-3xl border border-royal/20 shadow-sm space-y-5 hover:-translate-y-2 hover:shadow-xl hover:border-royal transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md shadow-royal/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-midnight font-bold">Travel Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Coordination for healthcare-related travel where required.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- MEMBERSHIP PACKAGES SECTION --- */}
      <section id="packages" className="py-24 px-6 bg-ivory text-midnight relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-metallic font-medium tracking-widest uppercase text-sm">Membership Tiers</span>
            <h2 className="text-3xl md:text-5xl font-serif text-midnight">Membership Packages</h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm">
              Choose the level of ongoing support tailored to you and your family throughout your healthcare journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Silver Tier */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 flex flex-col justify-between shadow-xl relative hover:-translate-y-2 hover:shadow-2xl hover:border-royal transition-all duration-300">
              <div>
                <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Essential</div>
                <h3 className="text-2xl font-serif text-midnight mb-4">Silver</h3>
                <p className="text-slate-600 text-sm mb-6">Designed for individuals seeking reliable guidance and foundational healthcare coordination.</p>
                
                <ul className="space-y-3 text-sm text-slate-600 mb-8 border-t border-slate-200 pt-6">
                  <li className="flex items-start gap-2"><span className="text-metallic font-bold mt-0.5">✓</span> Annual healthcare review meeting</li>
                  <li className="flex items-start gap-2"><span className="text-metallic font-bold mt-0.5">✓</span> Secure digital record archiving</li>
                  <li className="flex items-start gap-2"><span className="text-metallic font-bold mt-0.5">✓</span> Support with teleconsultation coordination</li>
                  <li className="flex items-start gap-2"><span className="text-metallic font-bold mt-0.5">✓</span> Priority support during business hours</li>
                </ul>
              </div>
              <Link 
                href="/contact" 
                className="w-full text-center bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight py-3.5 rounded-full font-semibold transition shadow-lg hover:opacity-95"
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
                <p className="text-slate-600 text-sm mb-6">Comprehensive coordination and priority support for individuals and families.</p>
                
                <ul className="space-y-3 text-sm text-slate-600 mb-8 border-t border-slate-200 pt-6">
                  <li className="flex items-start gap-2"><span className="text-metallic font-bold mt-0.5">✓</span> Everything in Silver Tier</li>
                  <li className="flex items-start gap-2"><span className="text-metallic font-bold mt-0.5">✓</span> Coordination of executive health screening programmes offered by participating healthcare providers</li>
                  <li className="flex items-start gap-2"><span className="text-metallic font-bold mt-0.5">✓</span> Support coordinating additional specialist opinions when requested</li>
                  <li className="flex items-start gap-2"><span className="text-metallic font-bold mt-0.5">✓</span> Dedicated Patient Journey Coordinator</li>
                  <li className="flex items-start gap-2"><span className="text-metallic font-bold mt-0.5">✓</span> Coverage for spouse & dependents included</li>
                </ul>
              </div>
              <Link 
                href="/contact" 
                className="w-full text-center bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight py-3.5 rounded-full font-semibold transition shadow-lg hover:opacity-95"
              >
                Inquire Gold Tier
              </Link>
            </div>

            {/* Platinum Tier */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 flex flex-col justify-between shadow-xl relative hover:-translate-y-2 hover:shadow-2xl hover:border-royal transition-all duration-300">
              <div>
                <div className="text-royal text-xs font-bold uppercase tracking-wider mb-2">Premium</div>
                <h3 className="text-2xl font-serif text-midnight mb-4">Platinum</h3>
                <p className="text-slate-600 text-sm mb-6">A fully personalised membership for individuals and families requiring ongoing coordination and priority support.</p>
                
                <ul className="space-y-3 text-sm text-slate-600 mb-8 border-t border-slate-200 pt-6">
                  <li className="flex items-start gap-2"><span className="text-metallic font-bold mt-0.5">✓</span> Dedicated Relationship Manager</li>
                  <li className="flex items-start gap-2"><span className="text-metallic font-bold mt-0.5">✓</span> Priority healthcare coordination</li>
                  <li className="flex items-start gap-2"><span className="text-metallic font-bold mt-0.5">✓</span> International travel coordination</li>
                  <li className="flex items-start gap-2"><span className="text-metallic font-bold mt-0.5">✓</span> Hospital admission coordination</li>
                  <li className="flex items-start gap-2"><span className="text-metallic font-bold mt-0.5">✓</span> Family support</li>
                  <li className="flex items-start gap-2"><span className="text-metallic font-bold mt-0.5">✓</span> VIP non-clinical assistance</li>
                </ul>
              </div>
              <Link 
                href="/contact" 
                className="w-full text-center bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight py-3.5 rounded-full font-semibold transition shadow-lg hover:opacity-95"
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
              We are building a secure member portal where members can store healthcare documents, track appointments, manage travel plans, and communicate with their Patient Journey Coordinator.
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-metallic/20 text-metallic flex items-center justify-center font-bold text-xs mt-1">1</div>
                <div>
                  <h4 className="font-bold text-midnight">Secure Document Vault</h4>
                  <p className="text-sm text-slate-500">Store healthcare documents, reports, scans, and past results in one organised place.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-metallic/20 text-metallic flex items-center justify-center font-bold text-xs mt-1">2</div>
                <div>
                  <h4 className="font-bold text-midnight">Appointments & Travel</h4>
                  <p className="text-sm text-slate-500">Track appointments, milestones, and healthcare-related travel plans in one view.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-metallic/20 text-metallic flex items-center justify-center font-bold text-xs mt-1">3</div>
                <div>
                  <h4 className="font-bold text-midnight">Coordinator Communication</h4>
                  <p className="text-sm text-slate-500">Communicate securely with your Patient Journey Coordinator whenever you need support.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md flex flex-col justify-center items-center text-center space-y-6">
            <div className="w-20 h-20 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-midnight mb-2">Member Portal Access</h3>
              <p className="text-slate-500 text-sm max-w-xs">
                Portal login and registration features are currently under development for members.
              </p>
            </div>
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight px-8 py-3 rounded-full font-semibold transition text-sm shadow-lg hover:opacity-95"
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
                q: "What is the difference between a membership and health insurance?",
                a: "Membership provides ongoing patient support and healthcare coordination. It does not replace health insurance or medical care provided by licensed healthcare professionals."
              },
              {
                q: "When will the member login area be officially launched?",
                a: "The portal beta is scheduled for rollout later this year, giving members early access to their secure document vault and activity trackers."
              },
              {
                q: "Can I upgrade my membership package later?",
                a: "Yes, you can upgrade from Silver to Gold or Platinum tiers at any time through your coordinator."
              },
              {
                q: "Is my personal health data kept confidential?",
                a: "We handle personal information in accordance with applicable privacy and data protection requirements."
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
          <h2 className="text-3xl md:text-4xl font-serif text-midnight">Ready to Become a Member?</h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm">
            Speak with our Membership Team to understand which level of support is right for you and your family.
          </p>
          <div className="pt-4">
            <Link 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight px-10 py-4 rounded-full font-semibold hover:opacity-95 transition-all shadow-lg"
            >
              Speak with Our Membership Team
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}
