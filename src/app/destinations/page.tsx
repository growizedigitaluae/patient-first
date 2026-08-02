'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Provider = {
  id: string;
  name: string;
  image: string;
};

type Destination = {
  id: number;
  name: string;
  label: string;
  flag: string;
  top: string;
  left: string;
  labelLeft: string;
  why: string;
  services: string[];
  languages: string[];
  providers: Provider[];
};

const destinations: Destination[] = [
  {
    id: 1,
    name: 'United Arab Emirates',
    label: 'UAE',
    flag: '/flags/uae.png',
    top: '40.1%',
    left: '59.7%',
    labelLeft: '62.5%',
    why: 'The UAE is recognised for its modern healthcare infrastructure, internationally accredited hospitals, and multicultural medical workforce. It is a preferred destination for patients seeking advanced healthcare services within the GCC and beyond.',
    services: [
      'Orthopaedics & Spine',
      'Cardiology',
      'Oncology',
      'Women\u2019s Health & Fertility',
      'Neurology',
      'Paediatrics'
    ],
    languages: ['Arabic', 'English'],
    providers: [
      { id: 'burjeel-holdings', name: 'Burjeel Holdings', image: '/hospitals/burjeel.webp' },
      { id: 'aster-hospitals', name: 'Aster Hospitals', image: '/hospitals/aster.webp' },
      { id: 'medcare', name: 'Medcare', image: '/hospitals/medcare.webp' }
    ]
  },
  {
    id: 2,
    name: 'India',
    label: 'India',
    flag: '/flags/india.png',
    top: '45.8%',
    left: '66.1%',
    labelLeft: '66.1%',
    why: 'India is recognised for its depth of specialist medical expertise, high-volume experience in complex procedures, and internationally accredited hospitals. It offers comprehensive healthcare options across a wide range of medical specialties.',
    services: [
      'Cardiology & Cardiac Surgery',
      'Oncology',
      'Orthopaedics',
      'Transplantation',
      'Neurology & Neurosurgery',
      'Gastroenterology'
    ],
    languages: ['English', 'Hindi', 'Many regional languages'],
    providers: [
      { id: 'apollo-hospitals', name: 'Apollo Hospitals Group', image: '/hospitals/apollo.webp' },
      { id: 'medanta-medicity', name: 'Medanta \u2013 The Medicity', image: '/hospitals/emdanta.webp' },
      { id: 'fortis-healthcare', name: 'Fortis Healthcare', image: '/hospitals/fortis.webp' }
    ]
  },
  {
    id: 3,
    name: 'Turkey',
    label: 'Turkey',
    flag: '/flags/turkey.png',
    top: '30.5%',
    left: '54.1%',
    labelLeft: '54.1%',
    why: 'Turkey has established itself as a widely recognised healthcare destination with internationally accredited hospitals and strong connectivity from Europe, the GCC, and Central Asia. It is known for high volumes of elective and specialist procedures.',
    services: [
      'Aesthetic & Reconstructive Surgery',
      'Dentistry',
      'Bariatrics',
      'Ophthalmology',
      'Women\u2019s Health & Fertility',
      'Cardiology'
    ],
    languages: ['Turkish', 'English', 'Arabic'],
    providers: [
      { id: 'acibadem-healthcare', name: 'Acibadem Healthcare Group', image: '/hospitals/acibadem.webp' },
      { id: 'memorial-healthcare', name: 'Memorial Healthcare Group', image: '/hospitals/memorial.webp' },
      { id: 'american-hospital-istanbul', name: 'American Hospital Istanbul', image: '/hospitals/american-hospital.webp' }
    ]
  },
  {
    id: 4,
    name: 'Saudi Arabia',
    label: 'Saudi Arabia',
    flag: '/flags/saudi-arabia.png',
    top: '40.2%',
    left: '56.8%',
    labelLeft: '53.5%',
    why: 'Saudi Arabia is rapidly expanding specialist healthcare capacity with major investment in tertiary and quaternary services. It offers regional proximity, cultural alignment, and access to recognised public and private institutions.',
    services: [
      'Oncology',
      'Transplantation',
      'Cardiovascular Care',
      'Neurosciences',
      'Fertility',
      'Neonatal Care'
    ],
    languages: ['Arabic', 'English'],
    providers: [
      { id: 'kfshrc', name: 'King Faisal Specialist Hospital & Research Centre', image: '/hospitals/kfshrc.webp' },
      { id: 'sulaiman-al-habib', name: 'Dr. Sulaiman Al Habib Medical Group', image: '/hospitals/al-habib.webp' }
    ]
  },
  {
    id: 5,
    name: 'United States',
    label: 'USA',
    flag: '/flags/united-states.png',
    top: '28.1%',
    left: '19.2%',
    labelLeft: '19.2%',
    why: 'The United States offers specialist depth in rare and complex conditions, clinical research, and precision medicine. It is often considered when a patient\u2019s condition requires expertise or treatment pathways not readily available elsewhere.',
    services: [
      'Rare Diseases',
      'Complex Oncology',
      'Cardiology',
      'Neurology & Neurosurgery',
      'Orthopaedics',
      'Paediatric Specialties'
    ],
    languages: ['English'],
    providers: [
      { id: 'mayo-clinic', name: 'Mayo Clinic', image: '/hospitals/mayo.webp' },
      { id: 'md-anderson', name: 'MD Anderson Cancer Center', image: '/hospitals/md-anderson.webp' },
      { id: 'johns-hopkins', name: 'Johns Hopkins Hospital', image: '/hospitals/johns-hopkins.webp' }
    ]
  }
];

const assistWith = [
  'Healthcare provider coordination',
  'Appointment coordination',
  'Medical record coordination',
  'Travel guidance (when required)',
  'Patient support throughout the healthcare journey'
];

export default function DestinationPage() {
  const [selected, setSelected] = useState<Destination | null>(null);
  const [activeTab, setActiveTab] = useState(destinations[0].name);

  return (
    <main className="min-h-screen bg-[#F9F6F1]">
      
      {/* Hero Section */}
      <section className="relative h-[360px] w-full flex items-center justify-center text-center px-6 overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-destination.webp" alt="Our Global Healthcare Network" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#172744]/75" />
        </div>
        <div className="relative z-10 text-white max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-3">Our Global Healthcare Network</h1>
          <p className="text-stone-200 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Explore healthcare options across our international network of trusted healthcare providers. Every country offers different strengths, healthcare systems, and patient experiences. Patients First Worldwide helps you navigate these options with personalised support and healthcare coordination.
          </p>
          <p className="text-stone-300 text-xs md:text-sm italic mt-4 max-w-2xl mx-auto">
            Patients First Worldwide is an independent patient support and healthcare coordination company. We do not provide medical advice, diagnosis, or treatment. All clinical decisions remain the responsibility of licensed healthcare professionals.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full pb-16 relative">
        <div className="relative w-full aspect-[1920/900] bg-white overflow-hidden">
          <Image src="/destination-map.webp" alt="World Map" fill className="object-cover" />
          
          {destinations.map((dest) => (
            <div key={dest.id}>
              <div
                className="absolute z-10 cursor-pointer"
                style={{ top: dest.top, left: dest.left }}
                onClick={() => setSelected(dest)}
                role="button"
                aria-label={`View ${dest.name} healthcare providers`}
              >
                <div className="w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full hover:bg-[#C5A059]/30 transition-colors" />
              </div>
              
              <div
                className="absolute z-10 cursor-pointer -translate-x-1/2 mt-1.5 hover:scale-105 transition-transform"
                style={{ top: dest.top, left: dest.labelLeft }}
                onClick={() => setSelected(dest)}
                role="button"
                aria-label={`View ${dest.name} healthcare providers`}
              >
                <div className="flex items-center gap-1.5 bg-white rounded-full border border-[#172744]/15 shadow-md px-3 py-1 whitespace-nowrap hover:border-[#C5A059]">
                  <div className="relative w-4 h-3 rounded-[2px] overflow-hidden border border-stone-300 flex-shrink-0">
                    <Image src={dest.flag} alt={`${dest.name} flag`} fill className="object-cover" />
                  </div>
                  <span className="text-xs font-semibold text-[#172744]">{dest.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Healthcare Providers in Our Network Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-3xl shadow-lg border border-[#172744]/10 p-6 md:p-12">
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl font-serif text-[#172744] mb-3">Healthcare Providers in Our Network</h2>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              Patients First Worldwide collaborates with selected healthcare providers across multiple countries to support patients in navigating their healthcare journey.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {destinations.map((dest) => (
              <button
                key={dest.id}
                onClick={() => setActiveTab(dest.name)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium transition ${activeTab === dest.name ? 'bg-[#172744] text-white' : 'bg-white text-[#172744] border border-[#172744]/10 hover:border-[#C5A059]'}`}
              >
                <div className="relative w-5 h-3.5 rounded overflow-hidden border border-stone-300">
                  <Image src={dest.flag} alt={`${dest.name} flag`} fill className="object-cover" />
                </div>
                {dest.name}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {destinations.find(d => d.name === activeTab)?.providers.map((p, i) => (
              <div key={i} className="bg-[#F9F6F1] rounded-2xl p-6 flex flex-col items-center justify-center gap-4 border border-[#172744]/10 hover:shadow-md transition">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-white border border-stone-200">
                  <Image 
                    src={p.image} 
                    alt={p.name} 
                    fill 
                    sizes="80px"
                    className="object-cover" 
                  />
                </div>
                <p className="font-bold text-[#172744] text-sm text-center leading-snug">{p.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20 px-6 border-t border-[#172744]/10 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#172744] mb-6">
            Let&apos;s Start with a Conversation
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Tell us about your healthcare needs, and our team will help you understand the next steps and explore healthcare options that may be right for you.
          </p>
          
          <div className="mb-14">
            <Link 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight font-medium px-8 py-3.5 rounded-full shadow-lg transition text-base hover:opacity-95"
            >
              Speak with Our Team
            </Link>
          </div>

          {/* Medical Team Graphic */}
          <div className="relative w-full flex justify-center items-end pt-4">
            <div className="relative w-full max-w-4xl h-[280px] md:h-[350px]">
              <Image 
                src="/appointment.webp" 
                alt="Virtual appointment" 
                fill 
                className="object-contain object-bottom" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Country Popup Modal */}
      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#172744]/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 md:p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl">
            <button 
              onClick={() => setSelected(null)} 
              className="absolute top-4 right-4 md:top-6 md:right-6 text-stone-400 hover:text-[#172744] text-2xl z-10"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-7 rounded overflow-hidden shadow-sm border border-stone-200">
                <Image src={selected.flag} alt={`${selected.name} flag`} fill className="object-cover" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif text-[#172744]">{selected.name}</h2>
            </div>

            <div className="space-y-8">
              {/* Why patients choose */}
              <div>
                <h3 className="text-lg font-serif text-[#172744] mb-2">
                  Why patients choose the {selected.name}
                </h3>
                <p className="text-stone-600 text-sm md:text-base leading-relaxed">{selected.why}</p>
              </div>

              {/* Commonly sought services */}
              <div>
                <h3 className="text-lg font-serif text-[#172744] mb-3">
                  Commonly Sought Healthcare Services
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selected.services.map((service, i) => (
                    <span key={i} className="bg-[#F9F6F1] border border-[#172744]/10 text-[#172744] text-sm px-4 py-2 rounded-full">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-lg font-serif text-[#172744] mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {selected.languages.map((lang, i) => (
                    <span key={i} className="bg-[#172744]/5 text-[#172744] text-sm px-4 py-2 rounded-full font-medium">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Healthcare providers */}
              <div>
                <h3 className="text-lg font-serif text-[#172744] mb-3">
                  Healthcare Providers in Our Network
                </h3>
                <div className="flex flex-wrap gap-4">
                  {selected.providers.map((p, i) => (
                    <div key={i} className="flex items-center gap-3 bg-[#F9F6F1] border border-[#172744]/10 rounded-xl px-4 py-3">
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white border border-stone-200 shrink-0">
                        <Image src={p.image} alt={p.name} fill sizes="40px" className="object-cover" />
                      </div>
                      <span className="text-sm font-semibold text-[#172744]">{p.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What PFW can assist with */}
              <div className="bg-[#172744] text-white rounded-2xl p-6 md:p-8">
                <h3 className="text-lg font-serif mb-4">Patients First Worldwide Can Assist With</h3>
                <ul className="space-y-3">
                  {assistWith.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-stone-200">
                      <span className="text-[#C5A059] font-bold shrink-0 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link 
              href="/contact"
              className="w-full bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight py-3.5 rounded-full font-semibold transition text-base md:text-lg shadow-lg mt-8 inline-flex items-center justify-center hover:opacity-95"
            >
              Speak with Our Team
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
