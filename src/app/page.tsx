import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-ivory">
     {/* --- HERO SECTION --- */}
<section className="relative pt-32 pb-40 px-6 overflow-hidden">
  <div className="absolute inset-0 z-0">
    <Image src="/bg-01.webp" alt="Hospital room" fill className="object-cover opacity-[0.25]" priority />
  </div>
  <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    <div className="flex-1 space-y-6">
      <span className="text-[#0C1424] font-medium tracking-wider uppercase text-sm">Compassionate Care</span>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-midnight leading-tight">
         Because Every Patient <span className="text-metallic">Deserves Someone by Their Side.</span>
      </h1>
      <p className="text-lg text-slate-700 leading-relaxed max-w-lg">
        A medical journey can feel overwhelming, but you should never have to face it alone. From your very first conversation with us, we stand beside you—helping you understand your options, coordinating every step of your care, and supporting both you and your loved ones throughout the journey.
      </p>
      <Link href="/contact" className="inline-flex items-center bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight px-8 py-4 rounded-full font-semibold hover:opacity-95 transition-all shadow-lg">
        Speak with Our Team
      </Link>
    </div>
    <div className="flex-[1.15] w-full h-[380px] sm:h-[450px] md:h-[550px] relative">
      <Image src="/hero-01.webp" alt="Medical professional" fill className="object-contain scale-110" priority />
    </div>
  </div>
</section>
      {/* --- FLOATING TRUST BAR --- */}
<section className="relative z-30 -mt-24 px-6 max-w-7xl mx-auto">
  <div className="bg-royal p-12 rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-4 gap-8">
    {[
      { 
        title: "Personalised Guidance", 
        desc: "Every healthcare journey is different. We listen first, understand your priorities, and help coordinate the next steps with clarity, care, and confidence.", 
        icon: (
          <svg className="w-10 h-10 text-midnight" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
        )
      },
      { 
        title: "Patients Always Come First", 
        desc: "Your wellbeing, peace of mind, and informed decision-making are at the heart of everything we do because every patient deserves to feel heard, supported, and respected.", 
        icon: (
          <svg className="w-10 h-10 text-midnight" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        ) 
      },
      { 
        title: "Trusted Healthcare Connections", 
        desc: "We connect patients with carefully selected healthcare providers and experienced medical professionals, helping you make informed decisions with confidence.", 
        icon: (
          <svg className="w-10 h-10 text-midnight" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
        ) 
      },
      { 
        title: "Your Dedicated Patient Companion", 
        desc: "From your first enquiry until your healthcare journey is complete, you'll have a dedicated coordinator by your side to facilitate communication, organise the process, and support you every step of the way.", 
        icon: (
          <svg className="w-10 h-10 text-midnight" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        ) 
      }
    ].map((item, i) => (
      <div 
        key={i} 
        className="group flex flex-col items-center text-center p-4 transition-all duration-300 hover:bg-white/5 rounded-2xl"
      >
        <div className="w-20 h-20 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
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
    <div className="space-y-5">
      <span className="text-[#0C1424] font-medium tracking-wider uppercase text-sm">About Us</span>
      <h2 className="text-3xl md:text-4xl font-serif text-midnight leading-tight">
        Putting Patients First, Every Step of the Journey
      </h2>
      <p className="text-slate-600 leading-relaxed text-sm md:text-base">
        At Patients First Worldwide, we believe that behind every patient is a life, a family, and a future. Accessing healthcare can be complex, whether you&apos;re seeking treatment close to home or abroad. No one should have to navigate that journey alone.
      </p>
      <p className="text-slate-600 leading-relaxed text-sm md:text-base">
        We exist to make the healthcare journey more informed, organised, and less overwhelming. As your trusted patient support and healthcare coordination partner, we help you navigate the process by facilitating communication, coordinating logistics, and connecting you with appropriate healthcare providers based on your individual needs and preferences.
      </p>
      <p className="text-slate-600 leading-relaxed text-sm md:text-base">
        From your first enquiry to the completion of your healthcare journey, we are committed to providing compassionate support, clear communication, and personalised guidance, so you can make informed decisions with confidence while focusing on what matters most—your health and the people who matter to you.
      </p>
      <p className="text-slate-500 text-xs md:text-sm leading-relaxed italic border-l-2 border-metallic pl-4 pt-1">
        Patients First Worldwide does not provide medical advice, medical diagnoses, or medical treatment. All clinical decisions, recommendations, and treatments are provided solely by licensed healthcare professionals and healthcare providers.
      </p>
    </div>
    <div className="h-[320px] sm:h-[520px] bg-slate-200 rounded-3xl relative overflow-hidden shadow-xl">
      <Image src="/about-us-2.webp" alt="Compassionate Care" fill className="object-cover" />
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
        { 
          step: "01", 
          title: "Tell Us Your Story", 
          desc: "Every patient is unique. We take the time to listen, understand your situation, and learn what matters most to you." 
        },
        { 
          step: "02", 
          title: "Together, We Plan the Journey", 
          desc: "Your dedicated Patient Care Coordinator helps coordinate appointments, medical information, and communication, making the process simpler and less overwhelming." 
        },
        { 
          step: "03", 
          title: "Support Every Step of the Way", 
          desc: "We're here to help you navigate your healthcare journey with confidence, clarity, and compassionate support from beginning to end." 
        }
      ].map((item, i) => (
        <div 
          key={i} 
          className="bg-[#0C1424] border border-white/10 p-8 rounded-3xl shadow-xl transition-transform hover:-translate-y-2 duration-300"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight rounded-full flex items-center justify-center font-bold mb-6 text-xl shadow-md">
            {item.step}
          </div>
          <h3 className="font-bold text-white text-xl mb-3">{item.title}</h3>
          <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* --- CORE PROMISE --- */}
<section className="py-24 px-6 max-w-7xl mx-auto">
  <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
    <h2 className="text-3xl md:text-4xl font-serif text-midnight">
      Supporting You Throughout Your Healthcare Journey
    </h2>
    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
      From your first enquiry to the completion of your healthcare journey, we&apos;re here to provide personalised support, coordination, and clear communication—helping make every step more organised and less overwhelming.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">
    {[
      { 
        title: "Before Your Healthcare Journey", 
        img: "/before.webp", 
        details: [
          "Understanding your healthcare needs and preferences",
          "Connecting you with appropriate healthcare providers",
          "Assistance with appointment coordination",
          "Medical record and document coordination",
          "Teleconsultation coordination (where available)",
          "Travel and accommodation assistance (if required)"
        ] 
      },
      { 
        title: "During Your Healthcare Journey", 
        img: "/during.webp", 
        details: [
          "Dedicated Patient Journey Coordinator",
          "Appointment and schedule coordination",
          "Communication support between you and your healthcare provider",
          "Language interpretation coordination (when required)",
          "Support for accompanying family members",
          "Assistance with non-clinical logistics"
        ] 
      },
      { 
        title: "After Your Healthcare Journey", 
        img: "/after.webp", 
        details: [
          "Follow-up appointment coordination",
          "Ongoing communication support with your healthcare provider",
          "Medical documentation assistance",
          "Continuity of care coordination",
          "Guidance on the next administrative steps",
          "Continued patient support as needed"
        ] 
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
              <li key={idx} className="flex items-start gap-3 text-slate-600 border-b border-slate-100 pb-4 last:border-0 last:pb-0 text-sm">
                <span className="text-metallic font-bold shrink-0 mt-0.5">✓</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
</section>

    {/* --- OUR DIFFERENCE --- */}
<section className="py-24 px-6 bg-ivory">
  <div className="max-w-7xl mx-auto">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="text-metallic font-medium tracking-wider uppercase text-sm">Our Difference</span>
      <h2 className="text-4xl font-serif text-midnight mt-2">Why Choose Patients First Worldwide</h2>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {[
        {
          title: "Patient-Centred Support",
          desc: "Every healthcare journey begins with understanding your individual needs, preferences, and priorities."
        },
        {
          title: "Independent Healthcare Navigation",
          desc: "We help you explore appropriate healthcare providers and treatment destinations based on your unique circumstances, empowering you to make informed decisions."
        },
        {
          title: "Dedicated Patient Journey Coordinator",
          desc: "One dedicated point of contact to support communication, coordinate logistics, and guide you throughout your healthcare journey."
        },
        {
          title: "Global Healthcare Network",
          desc: "Access to an international network of healthcare providers and medical institutions across multiple countries."
        },
        {
          title: "Personalised Coordination",
          desc: "Support with appointments, medical records, travel arrangements, and other non-clinical aspects of your healthcare journey."
        },
        {
          title: "Privacy & Confidentiality",
          desc: "We handle your personal information with the highest level of confidentiality and in accordance with applicable data protection requirements."
        },
        {
          title: "Transparent Communication",
          desc: "Clear, timely communication so you and your family remain informed throughout the coordination process."
        },
        {
          title: "Independent & Patient-Focused",
          desc: "Our priority is helping you navigate your healthcare journey with confidence, clarity, and compassion."
        }
      ].map((item, i) => (
        <div 
          key={i} 
          className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex items-start gap-5 transition-all duration-300 hover:shadow-2xl"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight rounded-full flex items-center justify-center font-bold shrink-0 shadow-md mt-1">
            ✓
          </div>
          <div>
            <h3 className="font-serif text-xl text-midnight mb-2">{item.title}</h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Highlighted Legal Notice */}
    <div className="mt-16 max-w-4xl mx-auto bg-slate-50 border-l-4 border-[#C88A2B] border-y border-r border-slate-200/80 p-6 md:p-8 rounded-2xl shadow-sm">
      <h4 className="font-serif text-midnight font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
        <span className="text-[#C88A2B]">⚠️</span> Important Legal Notice
      </h4>
      <p className="text-slate-700 text-xs md:text-sm leading-relaxed">
        Patients First Worldwide is an independent patient support and healthcare coordination company. We do not provide medical advice, medical diagnoses, or medical treatment. Clinical decisions, treatment recommendations, and medical care remain the sole responsibility of licensed healthcare professionals and healthcare providers chosen by the patient.
      </p>
    </div>
  </div>
</section>

    {/* --- WHY CHOOSE US --- */}
<section className="py-24 px-6 bg-[#0C1424] relative overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
      <span className="text-[#C88A2B] font-medium tracking-wider uppercase text-sm">Our Core Values</span>
      <h2 className="text-3xl md:text-4xl font-serif text-white">Why Choose Patient First Worldwide?</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { 
          title: "Humanity First", 
          desc: "Because every patient deserves to be treated with dignity and compassion.", 
          icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
        },
        { 
          title: "Partnership", 
          desc: "Working alongside you throughout your healthcare journey.", 
          icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
        },
        { 
          title: "Accessibility", 
          desc: "Helping connect patients with healthcare opportunities across borders.", 
          icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
        },
        { 
          title: "Transparency", 
          desc: "Clear communication. Honest expectations. No unnecessary complexity.", 
          icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
        },
        { 
          title: "Trust", 
          desc: "Protecting your privacy and acting with professionalism and integrity.", 
          icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
        },
        { 
          title: "Excellence", 
          desc: "Striving to deliver an exceptional patient experience in every interaction.", 
          icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" 
        }
      ].map((item, i) => (
        <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center group">
          <div className="w-16 h-16 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
            </svg>
          </div>
          <h3 className="font-serif text-xl text-midnight mb-3">{item.title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* --- SUPPORTING YOU BEYOND HEALTHCARE --- */}
<section className="py-24 px-6 bg-slate-50/50">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-12 gap-12 items-center">
      
      {/* Left Column: Checklist Grid */}
      <div className="md:col-span-7 space-y-8">
        <div>
          <span className="text-metallic font-medium tracking-wider uppercase text-sm">Patient Care & Support</span>
          <h2 className="text-3xl md:text-4xl font-serif text-midnight mt-2">
            Supporting You Beyond Healthcare
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Understanding Your Needs",
            "Helping You Explore Your Options",
            "Coordinating the Journey",
            "Keeping You Informed",
            "Supporting You & Your Family",
            "Respecting Your Privacy"
          ].map((item, i) => (
            <div 
              key={i} 
              className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 transition-all duration-300 hover:shadow-md"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight rounded-full flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                ✓
              </div>
              <span className="font-medium text-midnight text-sm md:text-base">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Interactive Conversation CTA Card */}
      <div className="md:col-span-5">
        <div className="bg-[#0C1424] text-white p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden border border-white/10 flex flex-col justify-between space-y-8">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#C88A2B]/20 to-transparent rounded-bl-full pointer-events-none" />
          
          <div className="space-y-4 relative z-10">
            <span className="text-[#C88A2B] text-xs font-bold uppercase tracking-widest block">Get in Touch</span>
            <h3 className="text-2xl md:text-3xl font-serif leading-tight">
              Every Journey Begins with a Conversation
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Our team is here to understand your needs, answer your questions, and help you explore the next steps of your healthcare journey.
            </p>
          </div>

          <div className="relative z-10 pt-2">
            <Link 
              href="/contact" 
              className="w-full bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight px-8 py-4 rounded-full font-semibold hover:opacity-95 transition-all shadow-lg inline-flex items-center justify-center text-center"
            >
              Speak with Our Team
            </Link>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="py-24 px-6 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-metallic font-medium tracking-wider uppercase text-sm">Patient Testimonials</span>
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
                quote: "From the first evaluation to post-treatment recovery support, Patients First Worldwide gave us absolute peace of mind during a stressful time.",
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
                  <p className="text-slate-600 italic mb-6 leading-relaxed">“{testimonial.quote}”</p>
                </div>
                <div>
                  <h4 className="font-bold text-midnight">{testimonial.name}</h4>
                  <p className="text-xs text-slate-400">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GOOGLE REVIEWS SECTION --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-metallic font-medium tracking-wider uppercase text-sm">Google Reviews</span>
            <h2 className="text-4xl font-serif text-midnight mt-2">Rated by Our Patients on Google</h2>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto">Don&apos;t just take our word for it — hear what patients and families have shared about their experience working with our team.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Rating Summary Card */}
            <div className="bg-ivory rounded-3xl p-10 border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md border border-slate-200 mb-4">
                <span className="text-3xl font-bold text-[#4285F4]">G</span>
              </div>
              <p className="font-serif text-5xl text-midnight">4.9</p>
              <div className="flex text-champagne text-2xl mt-3 mb-2">
                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <p className="text-sm text-slate-500">Based on verified Google reviews</p>
            </div>

            {/* Review Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  quote: "Excellent support throughout my entire treatment journey. The team kept me informed at every stage and made everything so simple.",
                  name: "Sara H.",
                  date: "2 weeks ago",
                  rating: 5
                },
                {
                  quote: "Professional, responsive, and genuinely caring. They coordinated everything perfectly and I always felt in safe hands.",
                  name: "Mohammed A.",
                  date: "1 month ago",
                  rating: 5
                },
                {
                  quote: "They made coordinating international treatment for my father completely stress-free. Truly patient-first in every sense.",
                  name: "Priya K.",
                  date: "1 month ago",
                  rating: 5
                },
                {
                  quote: "Clear communication and constant support from start to finish. I highly recommend their services to anyone seeking care abroad.",
                  name: "James T.",
                  date: "2 months ago",
                  rating: 5
                }
              ].map((review, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex text-champagne mb-3">
                      {[...Array(review.rating)].map((_, idx) => <span key={idx}>★</span>)}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">“{review.quote}”</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-600">— {review.name}</p>
                    <p className="text-xs text-slate-400">{review.date} · Google review</p>
                  </div>
                </div>
              ))}
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
              title: "The Role of a Patient Journey Coordinator in Complex Healthcare Coordination",
              excerpt: "Learn how a dedicated coordinator helps organise communication, protects patient data privacy, and ensures clear communication with healthcare providers.",
              date: "July 10, 2026",
              category: "Patient Support",
              img: "/blog-2.webp"
            },
            {
              title: "Understanding Second Opinions: Why a Second Opinion Can Help",
              excerpt: "Explore how a second opinion can help you understand your options and make more informed healthcare decisions with confidence.",
              date: "July 02, 2026",
              category: "Patient Guidance",
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
          <h2 className="text-3xl font-serif">Let&apos;s Start with a Conversation</h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm">
            Tell us about your healthcare needs, and our team will help you understand the next steps.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            {["Dedicated Patient Journey Coordinator", "Clear Communication", "Healthcare Coordination", "Support for Patients & Families", "Privacy & Confidentiality", "Independent Patient Support"].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2">
                <span className="text-metallic">✓</span> {item}
              </div>
            ))}
          </div>
          
          <div className="pt-12 border-t border-white/10">
            <Link href="/contact" className="inline-block bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight px-10 py-4 rounded-full font-semibold hover:opacity-95 transition-all shadow-lg">
              Speak with Our Team
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
              Medical treatment can feel overwhelming, especially when you&apos;re far from home. At Patient First Worldwide, we believe every patient deserves not only excellent healthcare but also genuine compassion, guidance, and reassurance throughout the journey.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our dedicated team becomes your trusted companion, coordinating every stage of your care while making sure you and your family feel informed, supported, and confident from beginning to end.
            </p>
            <div className="pt-2">
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight px-8 py-4 rounded-full font-semibold hover:opacity-95 transition-all shadow-lg"
              >
                Read More About Us →
              </Link>
            </div>
          </div>
          <div className="h-[300px] sm:h-[400px] bg-slate-200 rounded-3xl relative overflow-hidden shadow-xl">
            <Image src="/care.webp" alt="Compassionate Care Team" fill className="object-cover" />
          </div>
        </div>
      </section>

     
    </main>
  );
}