import Image from 'next/image';
import Link from 'next/link';

const Icons = {
  clock: () => <svg className="w-8 h-8 text-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  heart: () => <svg className="w-8 h-8 text-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
  shield: () => <svg className="w-8 h-8 text-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  users: () => <svg className="w-8 h-8 text-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  lock: () => <svg className="w-8 h-8 text-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
};

export default function Home() {
  return (
    <main className="bg-ivory">
      {/* --- HERO SECTION --- */}
      <section className="relative py-20 px-6 overflow-hidden pb-40">
        <div className="absolute inset-0 z-0">
          <Image src="/bg-01.webp" alt="Hospital room" fill className="object-cover opacity-[0.25]" priority />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="text-metallic font-medium tracking-wider uppercase text-sm">Compassionate Care</span>
            <h1 className="text-5xl md:text-6xl font-serif text-midnight leading-tight">
              Your Dedicated Medical Companion, <span className="text-metallic">From the First Moment.</span>
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed max-w-lg">
              You don't have to navigate your medical journey alone. From the moment you reach out, a professional advocate is by your side to manage your care and support you every step of the way.
            </p>
            <Link href="/contact" className="inline-flex items-center bg-metallic text-white px-8 py-4 rounded-full font-semibold hover:bg-champagne transition shadow-lg">
              Connect With Your Advocate
            </Link>
          </div>
          <div className="flex-[1.15] w-full h-[550px] relative">
            <Image src="/hero.webp" alt="Medical professional" fill className="object-contain scale-110" priority />
          </div>
        </div>
      </section>

      {/* --- FLOATING TRUST BAR --- */}
      <section className="relative z-30 -mt-24 px-6 max-w-7xl mx-auto">
        <div className="bg-royal p-12 rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { 
              title: "Available 24/7", 
              desc: "Round-the-clock support to ensure you are never alone, no matter the time.", 
              icon: (
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              )
            },
            { 
              title: "Patient-Centered", 
              desc: "Your journey is uniquely yours, with care plans designed around your needs.", 
              icon: (
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              ) 
            },
            { 
              title: "Trusted Partners", 
              desc: "Access to a global network of vetted, world-class medical specialists.", 
              icon: (
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              ) 
            },
            { 
              title: "Dedicated Coordinator", 
              desc: "A single point of contact to manage every detail of your medical experience.", 
              icon: (
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              ) 
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className="group flex flex-col items-center text-center p-4 transition-all duration-300 hover:bg-white/5 rounded-2xl"
            >
              <div className="w-20 h-20 bg-metallic rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              
              <h3 className="text-white font-serif text-xl mb-3">{item.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-[200px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/*--- ABOUT US ---*/}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-metallic font-medium tracking-wider uppercase text-sm">About Us</span>
            <h2 className="text-4xl font-serif text-midnight">Because Healing Needs More Than Great Medicine</h2>
            <p className="text-slate-600 leading-relaxed">
              Medical treatment can feel overwhelming, especially when you're far from home. At Patient First Worldwide, we believe every patient deserves not only excellent healthcare but also genuine compassion, guidance, and reassurance throughout the journey.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our dedicated team becomes your trusted companion, coordinating every stage of your care while making sure you and your family feel informed, supported, and confident from beginning to end.
            </p>
          </div>
          <div className="h-[400px] bg-slate-200 rounded-3xl relative overflow-hidden">
            <Image src="/about-us.webp" alt="Compassionate Care" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* --- HOW WE SUPPORT YOU --- */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/support-background.webp')" }}
        >
          <div className="absolute inset-0 bg-midnight/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-white text-center mb-16">How We Support You</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "We Listen First", desc: "Share your health needs with a dedicated professional." },
              { step: "02", title: "We Coordinate Care", desc: "Your advocate maps out your medical plan immediately." },
              { step: "03", title: "We Stay By Your Side", desc: "You have a constant partner until you are fully recovered." }
            ].map((item, i) => (
              <div 
                key={i} 
                className="bg-metallic/15 backdrop-blur-md border border-metallic/30 p-8 rounded-3xl shadow-xl transition-transform hover:-translate-y-2 duration-300"
              >
                <div className="w-12 h-12 bg-metallic text-white rounded-full flex items-center justify-center font-bold mb-6 text-xl">
                  {item.step}
                </div>
                <h3 className="font-bold text-white text-xl mb-3">{item.title}</h3>
                <p className="text-slate-100 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CORE PROMISE --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif text-midnight text-center mb-16">We Stay With You Every Step</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Before Treatment", 
              img: "/before.webp", 
              details: ["Initial medical evaluation", "Hospital selection guidance", "Telemedicine setup", "Travel arrangements"] 
            },
            { 
              title: "During Treatment", 
              img: "/during.webp", 
              details: ["In-person advocacy", "Real-time interpretation", "Daily progress updates", "Family coordination"] 
            },
            { 
              title: "After Treatment", 
              img: "/after.webp", 
              details: ["Recovery plan support", "Follow-up scheduling", "Medication management", "Final documentation"] 
            }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="relative h-64 w-full">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-royal/70 flex items-center justify-center p-6 text-center">
                  <h3 className="text-2xl font-bold text-white font-serif">{item.title}</h3>
                </div>
              </div>

              <div className="p-8 flex-1">
                <ul className="space-y-4">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                      <span className="text-metallic font-bold">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- OUR SERVICES --- */}
      <section className="py-24 px-6 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-metallic font-medium tracking-wider uppercase text-sm">Our Standard</span>
            <h2 className="text-4xl font-serif text-midnight mt-2">How Patient First Is Different?</h2>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
            <div className="grid grid-cols-4 bg-slate-50 border-b border-slate-100">
              <div className="p-8"></div>
              <div className="p-8 bg-royal text-white text-center">
                <span className="text-champagne text-[10px] font-bold uppercase tracking-widest block mb-2">Our Standard</span>
                <h3 className="font-serif text-xl">Patient First</h3>
                <p className="text-slate-300 text-xs mt-1">Medical Family Office</p>
              </div>
              <div className="p-8 text-center text-midnight font-bold flex items-center justify-center">Hospital VIP</div>
              <div className="p-8 text-center text-midnight font-bold flex items-center justify-center">Medical Agencies</div>
            </div>

            {[
              { feat: "Physician-Agnostic Curation", pFirst: "Best 3 world-class experts, any hospital", hVip: "Own staff only", mAgencies: "Volume-driven networks" },
              { feat: "Zero Clinical Liability", pFirst: "Coordination only — physicians bear liability", hVip: "Hospital bears liability", mAgencies: "Facilitator model" },
              { feat: "No Record Creation", pFirst: "Your data stays private by default", hVip: "Mandatory reporting", mAgencies: "Partial — depends on partner" },
              { feat: "Global Access", pFirst: "Germany, Israel, South Korea, USA & more", hVip: "Dubai only", mAgencies: "Volume tourism only" },
              { feat: "24/7 Multilingual Advocacy", pFirst: "AR, EN, RU — always-on dedicated navigator", hVip: "Business hours", mAgencies: "Case manager only" }
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-4 border-b border-slate-100 items-center hover:bg-slate-50/50 transition">
                <div className="p-8 font-semibold text-midnight">{row.feat}</div>
                
                <div className="p-8 bg-royal/5 flex flex-col items-center text-center border-x border-royal/10 h-full justify-center">
                  <div className="w-8 h-8 bg-metallic rounded-full flex items-center justify-center text-white mb-3 shadow-md">✓</div>
                  <p className="text-midnight text-sm font-medium">{row.pFirst}</p>
                </div>

                <div className="p-8 text-slate-500 text-sm text-center border-r border-slate-100">{row.hVip}</div>
                <div className="p-8 text-slate-500 text-sm text-center">{row.mAgencies}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-midnight">Why Choose Patient First Worldwide?</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { title: "Elite Matchmaking", desc: "Access to world-class specialists globally.", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
            { title: "24/7 Advocacy", desc: "Always-on personal support team.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
            { title: "Privacy First", desc: "Your data stays private by default.", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
            { title: "No Liability", desc: "Coordination-only, transparent model.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
            { title: "Global Access", desc: "Expertise across multiple borders.", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
            { title: "Legacy Strategy", desc: "5+ year health planning.", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
              <div className="mb-6">
                <svg className="w-12 h-12 text-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
              </div>
              <h3 className="font-bold text-midnight mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- TESTIMONIALS & GOOGLE REVIEWS SECTION --- */}
      <section className="py-24 px-6 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-metallic font-medium tracking-wider uppercase text-sm">Patient Stories</span>
            <h2 className="text-4xl font-serif text-midnight mt-2">Trusted by Families Worldwide</h2>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto">Read what our patients and their families have to say about their care journeys, managed seamlessly by our dedicated team.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Having a dedicated coordinator made all the difference when traveling abroad for specialized treatment. We never felt lost or alone.",
                name: "A. Al-Mansoor",
                location: "Dubai, UAE",
                rating: 5
              },
              {
                quote: "The level of professionalism, discretion, and medical insight provided is truly unmatched. They handled every detail from start to finish.",
                name: "Elena Rostova",
                location: "Moscow, Russia",
                rating: 5
              },
              {
                quote: "From the first evaluation to post-treatment recovery support, Patient First Worldwide gave us absolute peace of mind during a stressful time.",
                name: "David & Sarah Miller",
                location: "London, UK",
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-md border border-slate-100 flex flex-col justify-between">
                <div>
                  <div className="flex text-champagne mb-4">
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <span key={idx}>★</span>
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                </div>
                <div>
                  <h4 className="font-bold text-midnight">{testimonial.name}</h4>
                  <p className="text-xs text-slate-400">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Google Reviews Placeholder Banner */}
          <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-royal rounded-full flex items-center justify-center text-white font-bold text-xl">G</div>
              <div>
                <h4 className="font-bold text-midnight">Google Reviews Integration Ready</h4>
                <p className="text-xs text-slate-500">Live feed widget container prepared for real-time Google business rating integration.</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-ivory px-4 py-2 rounded-xl border border-slate-200">
              <span className="text-metallic font-bold">4.9 / 5.0</span>
              <span className="text-xs text-slate-600 font-medium">Verified Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- LATEST BLOG POSTS SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-metallic font-medium tracking-wider uppercase text-sm">Our Insights</span>
            <h2 className="text-4xl font-serif text-midnight mt-2">Latest From Our Journal</h2>
          </div>
          <Link href="/blog" className="text-midnight font-semibold hover:text-metallic transition flex items-center gap-2">
            View All Articles →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Navigating International Healthcare: What to Expect When Traveling Abroad",
              excerpt: "Discover essential steps and tips for preparing your medical records, logistics, and family support when seeking specialized care overseas.",
              date: "July 15, 2026",
              category: "Medical Travel",
              img: "/blog-1.webp"
            },
            {
              title: "The Role of a Medical Advocate in Complex Treatment Planning",
              excerpt: "Learn how a dedicated coordinator minimizes clinical friction, protects patient data privacy, and ensures clear communication with world-class specialists.",
              date: "July 10, 2026",
              category: "Patient Advocacy",
              img: "/blog-2.webp"
            },
            {
              title: "Understanding Second Opinions: Why Second Expert Eyes Matter",
              excerpt: "Explore how securing a multidisciplinary second opinion can validate your diagnosis and open doors to advanced therapeutic pathways.",
              date: "July 02, 2026",
              category: "Clinical Excellence",
              img: "/blog-3.webp"
            }
          ].map((post, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="relative h-52 w-full bg-slate-100">
                <Image src={post.img} alt={post.title} fill className="object-cover" />
                <span className="absolute top-4 left-4 bg-royal text-white text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-bold">
                  {post.category}
                </span>
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <p className="text-xs text-slate-400 mb-2">{post.date}</p>
                  <h3 className="font-serif font-bold text-midnight text-xl mb-3 leading-snug">{post.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{post.excerpt}</p>
                </div>
                <Link href="/blog" className="text-metallic font-semibold text-sm hover:underline inline-flex items-center gap-1">
                  Read Full Article →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
       {/* --- BOTTOM CTA --- */}
      <section className="py-24 px-6 bg-midnight text-white text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl font-serif">Your Health Comes First. Always.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            {["Dedicated Care Coordinator", "Transparent Communication", "Personalized Guidance", "Confidential Support", "Continuous Follow-Up", "Compassionate Care"].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2">
                <span className="text-metallic">✓</span> {item}
              </div>
            ))}
          </div>
          
          <div className="pt-12 border-t border-white/10">
            <h3 className="text-2xl font-serif mb-6">Ready to Begin Your Journey?</h3>
            <Link href="/contact" className="inline-block bg-metallic text-white px-10 py-4 rounded-full font-semibold hover:bg-champagne transition shadow-lg">
              Book Your Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* --- ABOUT US SNAPSHOT SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-metallic font-medium tracking-wider uppercase text-sm">About Us</span>
            <h2 className="text-4xl font-serif text-midnight">Because Healing Needs More Than Great Medicine</h2>
            <p className="text-slate-600 leading-relaxed">
              Medical treatment can feel overwhelming, especially when you're far from home. At Patient First Worldwide, we believe every patient deserves not only excellent healthcare but also genuine compassion, guidance, and reassurance throughout the journey.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our dedicated team becomes your trusted companion, coordinating every stage of your care while making sure you and your family feel informed, supported, and confident from beginning to end.
            </p>
            <div className="pt-2">
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 bg-royal text-white px-8 py-4 rounded-full font-semibold hover:bg-metallic transition shadow-lg"
              >
                Read More About Us →
              </Link>
            </div>
          </div>
          <div className="h-[400px] bg-slate-200 rounded-3xl relative overflow-hidden shadow-xl">
            <Image src="/care.webp" alt="Compassionate Care Team" fill className="object-cover" />
          </div>
        </div>
      </section>

     
    </main>
  );
}