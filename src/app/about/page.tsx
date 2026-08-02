'use client';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Share2 } from 'lucide-react';
// Make sure this import line includes all the icons used below

export default function AboutPage() {
  return (
    <main className="bg-stone-50">
      {/* Hero Section */}
      {/* Removed py-24, using min-h set to ensure full height */}
      <section className="relative px-6 min-h-[80vh] flex items-center bg-[#172744] overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/about-hero-bg.webp" 
            alt="Hero Background" 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-[#172744]/80 z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 w-full">
          {/* Content Side */}
          <div className="flex-1 space-y-6 text-white pt-32">
            <span className="text-[#C5A059] font-bold tracking-widest uppercase text-sm">
              About Patient First Worldwide
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif leading-tight">
              Your Trusted Companion Through <span className="text-[#C5A059]">Every Step of Your Medical Journey</span>
            </h1>
            <p className="text-lg text-stone-200 leading-relaxed max-w-lg">
              At Patient First Worldwide, we believe exceptional healthcare extends beyond medical treatment. It is about feeling understood, supported, and cared for throughout every stage of your journey.
            </p>
            <div className="pt-4">
              <Link 
                href="/contact" 
                className="inline-block bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight px-8 py-3 rounded-full font-semibold hover:opacity-95 transition-all shadow-lg"
              >
                Connect With Our Team
              </Link>
            </div>
          </div>

          {/* Clean Image Side - Aligned to bottom edge */}
          {/* h-full and absolute bottom-0 stretches the container to the edge */}
          <div className="flex-1 w-full h-[50vh] md:h-[80vh] relative self-end">
            <Image 
              src="/about-hero.webp" 
              alt="Medical Team" 
              fill 
              className="object-contain object-bottom" 
              priority
            />
          </div>
        </div>
      </section>

      {/* Story & Mission Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm font-bold tracking-widest text-[#C5A059] uppercase mb-4">Our Story</h2>
          <h3 className="text-4xl font-serif text-[#172744] mb-6">Because Every Patient Deserves Someone by Their Side</h3>
          <p className="text-stone-600 mb-6 leading-relaxed">
            Seeking medical care can be one of life&apos;s most challenging experiences. While healthcare providers focus on clinical care, we focus on the human experience.
          </p>
          <p className="text-[#172744] font-semibold italic">
            &ldquo;No patient should ever feel alone during their medical journey.&rdquo;
          </p>
        </div>
        {/* Right Side: Mission & Vision Cards */}
  <div className="space-y-6">
    {/* Mission Card */}
    <div className="bg-[#172744] p-8 rounded-3xl text-white">
      <h3 className="text-sm font-bold tracking-widest text-[#C5A059] uppercase mb-3">Our Mission</h3>
      <p className="font-serif italic leading-snug">
        &ldquo;Putting Patients Before Everything Else: We transform complex healthcare journeys into experiences built on trust, comfort, and confidence.&rdquo;
      </p>
    </div>

    {/* Vision Card */}
    <div className="bg-[#172744] p-8 rounded-3xl text-white">
      <h3 className="text-sm font-bold tracking-widest text-[#C5A059] uppercase mb-3">Our Vision</h3>
      <p className="font-serif italic leading-snug">
        &ldquo;Redefining the Global Patient Experience: We envision a future where accessing healthcare across borders feels as comfortable as receiving care close to home.&rdquo;
      </p>
    </div>
  </div>
      </section>

     {/* Our Values Section - Styled as "Why Choose Us" */}
<section className="py-24 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-serif text-[#172744] text-center mb-16">
      The Principles That Guide Us
    </h2>
    
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {[
        { 
          icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>, 
          title: "Compassion", 
          text: "Empathy and genuine care in every interaction." 
        },
        { 
          icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, 
          title: "Integrity", 
          text: "Transparent, honest, and patient-first decisions." 
        },
        { 
          icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>, 
          title: "Excellence", 
          text: "Professionalism and continuous improvement." 
        },
        { 
          icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>, 
          title: "Respect", 
          text: "Dignity and privacy for every individual." 
        },
        { 
          icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>, 
          title: "Partnership", 
          text: "Collaborative approach for best outcomes." 
        }
      ].map((item, i) => (
        <div key={i} className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition text-center flex flex-col items-center group">
          <div className="w-16 h-16 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight rounded-full flex items-center justify-center mb-6 shadow-md transition-transform group-hover:scale-110">
            {item.icon}
          </div>
          <h4 className="text-[#172744] font-bold mb-3">{item.title}</h4>
          <p className="text-stone-500 text-sm leading-relaxed">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* What Makes Us Different Section */}
<section className="py-24 px-6 max-w-5xl mx-auto text-center">
  <h2 className="text-sm font-bold tracking-widest text-[#C5A059] uppercase mb-4">What Makes Us Different</h2>
  <h3 className="text-4xl font-serif text-[#172744] mb-8">More Than Healthcare Coordination</h3>
  
  <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
    <p>Many organizations focus on arranging appointments or connecting patients with healthcare providers.</p>
    <p className="text-2xl font-serif text-[#172744] italic">At Patient First Worldwide, we focus on something much deeper.</p>
    <p className="font-bold text-[#172744]">We focus on the patient experience.</p>
    <p>
      From your initial consultation until your recovery, our team remains actively involved in your journey—helping you understand your options, 
      coordinating each stage of care, answering your questions, and providing reassurance whenever you need it.
    </p>
    <p className="text-[#C5A059] font-medium pt-4">
      We believe outstanding healthcare should always be accompanied by outstanding human support.
    </p>
  </div>
</section>

{/* CEO Profile Section */}
<section className="py-24 px-6 bg-white">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
    
    {/* Profile Image */}
    <div className="relative w-full md:w-1/3 aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
      <Image 
        src="/ceo-profile.webp" 
        alt="Akhdiya Mirzokarimova" 
        fill 
        className="object-cover"
      />
    </div>

    {/* Profile Content */}
    <div className="flex-1 space-y-8">
      <div>
        <h2 className="text-sm font-bold tracking-widest text-[#C5A059] uppercase mb-2">Our Founder</h2>
        <h3 className="text-4xl font-serif text-[#172744]">Akhdiya Mirzokarimova</h3>
        <p className="text-[#172744] font-medium text-lg mt-1">Senior Marketing Manager & Patient Journey Coordinator</p>
      </div>

      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          With a distinguished career in senior marketing management, Akhdiya Mirzokarimova has spent years mastering the art of building trust and delivering excellence. However, her true calling lies beyond the boardroom.
        </p>
        <p>
          Driven by a deep-seated passion for human connection, she founded this organization to bridge the gap between complex medical systems and the individuals who need them most. Her mission is to ensure that no patient ever feels like &ldquo;just another case.&rdquo;
        </p>
      </div>

      {/* CEO Message */}
      <div className="bg-[#F9F6F1] p-8 rounded-2xl border-l-4 border-[#C5A059]">
        <p className="font-serif italic text-[#172744] text-xl mb-4">
          &ldquo;I believe that healthcare is not just a service—it is a promise of dignity, comfort, and unwavering support. My commitment is to ensure that when you are at your most vulnerable, you have a partner who truly cares.&rdquo;
        </p>
      </div>

     {/* Social Links */}
<div className="flex gap-6 pt-4">
  <Link 
    href="https://linkedin.com/in/yourprofile" 
  target="_blank" 
  className="flex items-center gap-2 text-[#172744] hover:text-[#C5A059] transition font-semibold"
>
    <Share2 size={20} /> 
  LinkedIn
  </Link>
  
  <Link 
    href="https://wa.me/971566960486" 
    target="_blank" 
    className="flex items-center gap-2 text-[#172744] hover:text-[#C5A059] transition font-semibold"
  >
    <MessageCircle size={20} />
    WhatsApp
  </Link>
</div>
    </div>
  </div>
</section>

{/* Our Approach Section */}
<section className="relative py-24 px-6 min-h-[60vh] flex items-center bg-fixed bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('/care.webp')" }}>
  {/* Blue Overlay */}
  <div className="absolute inset-0 bg-[#172744]/90 z-0" />

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
    <h2 className="text-sm font-bold tracking-widest text-[#C5A059] uppercase mb-4">Our Approach</h2>
    <h3 className="text-4xl md:text-5xl font-serif mb-10">Personalized Care, Every Step of the Way</h3>
    
    <div className="space-y-6 text-lg md:text-xl text-stone-200 leading-relaxed font-light">
      <p>Every patient&apos;s healthcare journey is unique. That is why we never believe in one-size-fits-all solutions.</p>
      <p>
        We take the time to understand your medical needs, personal preferences, cultural considerations, 
        and family concerns before developing a personalized care plan tailored specifically to your circumstances.
      </p>
      <p className="pt-4 text-white font-medium italic">
        From treatment planning and care coordination to recovery support and ongoing communication, 
        we remain committed to making your experience as smooth, comfortable, and stress-free as possible.
      </p>
    </div>
  </div>
</section>
    
      {/* Global Network & Promise Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-serif text-[#172744] mb-8">Connecting You with Trusted Medical Excellence</h2>
        <p className="max-w-3xl mx-auto text-stone-600 mb-12">
          Our hospital-neutral approach allows us to identify solutions that best align with your unique medical needs. Finding the right care, for the right patient, at the right time.
        </p>
        <div className="bg-[#172744] text-white p-16 rounded-3xl">
          <h3 className="text-2xl font-serif mb-6 text-[#C5A059]">Our Promise</h3>
          <p className="text-xl italic">
            &ldquo;Your journey becomes our responsibility. Your wellbeing becomes our priority. And your health will always come first.&rdquo;
          </p>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 px-6 bg-[#F9F7F2]">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-5xl font-serif text-[#172744] mb-6">
      Begin Your Healthcare Journey with Confidence
    </h2>

    <p className="text-lg text-gray-600 leading-8 mb-4">
      Whether you&apos;re exploring treatment options, seeking a trusted second opinion,
      or looking for compassionate guidance throughout your healthcare journey,
      <span className="font-semibold text-[#172744]"> Patient First Worldwide</span> is
      here to stand beside you.
    </p>

    <p className="text-lg text-gray-600 leading-8 mb-10">
      From the moment you come under our care, our dedicated team provides
      personalized support, clear communication, and unwavering commitment—
      ensuring you and your loved ones feel informed, comfortable, and confident
      every step of the way.
    </p>

    <Link
      href="/contact"
      className="inline-flex items-center justify-center bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight px-10 py-4 rounded-full font-semibold text-lg hover:opacity-95 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      Talk to Our Team
    </Link>
  </div>
</section>
    </main>
  );
}