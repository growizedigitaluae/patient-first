'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const destinations = [
  { 
    id: 1, 
    name: 'UAE', 
    flag: '/flags/uae.png',
    top: '40%', 
    left: '58%', 
    info: 'Advanced multidisciplinary and quaternary care', 
    subtitle: 'Where Patients First Worldwide Was Born',
    description: `The United Arab Emirates is more than the home of Patients First Worldwide—it is the healthcare environment that inspired our vision. Established in Abu Dhabi, our company was built within a healthcare ecosystem recognised for continuous investment in clinical excellence, innovation, patient safety, and internationally benchmarked standards.\n\nThe UAE has developed one of the Middle East's most advanced healthcare systems, bringing together internationally trained physicians, globally accredited hospitals, advanced medical technologies, and patient-centred care models. Through strategic investment and a commitment to quality, the country has become a trusted destination for patients seeking complex, specialised, and highly coordinated care.\n\nWe are proud that Patients First Worldwide was founded in the UAE. The values that define the nation's healthcare sector—excellence, compassion, innovation, transparency, and collaboration—are the same principles that guide every patient journey we coordinate.\n\nOur home base; direct coordination and strong international access.`,
    countryMap: '/uae-map-placeholder.webp',
    landmarkImage: '/uae-landmark-placeholder.webp',
    hospitals: [
      { id: 'burjeel-holdings', name: 'Burjeel Holdings', location: 'Abu Dhabi & Regional', image: '/hospitals/burjeel.webp' },
      { id: 'aster-hospitals', name: 'Aster Hospitals', location: 'Dubai & Sharjah', image: '/hospitals/aster.webp' },
      { id: 'medcare', name: 'Medcare', location: 'Dubai & UAE', image: '/hospitals/medcare.webp' }
    ] 
  },
  { 
    id: 2, 
    name: 'India', 
    flag: '/flags/india.png',
    top: '48%', 
    left: '68%', 
    info: 'Complex high-acuity care, cardiac, oncology, transplant, neuro', 
    subtitle: '',
    description: `India is one of the world’s leading destinations for complex, high-volume, and high-acuity medical care. It combines specialist depth, large clinical teams, internationally accredited hospitals, and established international patient departments.\n\nHealthcare strengths: Cardiac surgery, oncology, organ transplantation, neurosciences, orthopaedics, gastroenterology, and complex surgery.\n\nInternational accessibility: Dedicated international patient centres, multilingual coordinators, medical visa pathways, and extensive regional flight connectivity.`,
    countryMap: '/country-map-india.webp',
    landmarkImage: '/landmark-india.webp',
    hospitals: [
      { id: 'apollo-hospitals', name: 'Apollo Hospitals Group', location: 'Chennai & Pan-India', image: '/hospitals/apollo.webp' },
      { id: 'medanta-medicity', name: 'Medanta – The Medicity', location: 'Gurugram', image: '/hospitals/medanta.webp' },
      { id: 'fortis-healthcare', name: 'Fortis Healthcare', location: 'Pan-India', image: '/hospitals/fortis.webp' }
    ] 
  },
  { 
    id: 3, 
    name: 'Turkey', 
    flag: '/flags/turkey.png',
    top: '35%', 
    left: '52%', 
    info: 'Aesthetic, dental, bariatric, ophthalmology, fertility', 
    subtitle: '',
    description: `Turkey is an established medical tourism destination with particular depth in elective and specialty procedures. It combines internationally accredited hospitals with dedicated international patient centres and strong accessibility from the GCC, Europe, and Central Asia.\n\nHealthcare strengths: Aesthetic and reconstructive care, dental services, bariatric surgery, ophthalmology, IVF, cardiology, and orthopaedics.\n\nInternational accessibility: Strong flight connectivity, multilingual international patient teams, and organised medical tourism services.`,
    countryMap: '/country-map-turkey.webp',
    landmarkImage: '/landmark-turkey.webp',
    hospitals: [
      { id: 'acibadem-healthcare', name: 'Acibadem Healthcare Group', location: 'Istanbul & Turkey', image: '/hospitals/acibadem.webp' },
      { id: 'memorial-healthcare', name: 'Memorial Healthcare Group', location: 'Istanbul, Ankara, Antalya', image: '/hospitals/memorial.webp' },
      { id: 'american-hospital-istanbul', name: 'American Hospital Istanbul', location: 'Istanbul', image: '/hospitals/american-hospital.webp' }
    ] 
  },
  { 
    id: 4, 
    name: 'Saudi Arabia', 
    flag: '/flags/saudi-arabia.png',
    top: '42%', 
    left: '54%', 
    info: 'Regional tertiary and quaternary care', 
    subtitle: '',
    description: `Saudi Arabia is rapidly expanding specialist healthcare capacity through major investment in tertiary and quaternary services. It offers regional proximity, cultural alignment, privacy, and access to recognised public and private institutions.\n\nHealthcare strengths: Oncology, transplantation, cardiovascular care, neurosciences, fertility, neonatal care, and complex tertiary medicine.\n\nInternational accessibility: Regional accessibility, Arabic-speaking services, culturally aligned hospitality, and growing international patient infrastructure.`,
    countryMap: '/country-map-saudi-arabia.webp',
    landmarkImage: '/landmark-saudi-arabia.webp',
    hospitals: [
      { id: 'kfshrc', name: 'King Faisal Specialist Hospital & Research Centre', location: 'Riyadh', image: '/hospitals/kfshrc.webp' },
      { id: 'sulaiman-al-habib', name: 'Dr. Sulaiman Al Habib Medical Group', location: 'Riyadh & Saudi Arabia', image: '/hospitals/al-habib.webp' }
    ] 
  },
  { 
    id: 5, 
    name: 'United States', 
    flag: '/flags/united-states.png',
    top: '30%', 
    left: '20%', 
    info: 'Rare, complex, research-led and trial-based care', 
    subtitle: '',
    description: `The United States offers unmatched depth in rare diseases, complex surgery, clinical research, precision medicine, and specialist-led multidisciplinary care. It is considered when a patient’s condition requires expertise or treatment pathways not readily available elsewhere.\n\nHealthcare strengths: Rare cancers, complex transplantation, precision medicine, advanced diagnostics, clinical trials, and highly specialised surgery.\n\nInternational accessibility: International patient offices, remote second opinions, extensive research programmes, and access to globally recognised specialists.`,
    countryMap: '/country-map-us.webp',
    landmarkImage: '/landmark-us.webp',
    hospitals: [
      { id: 'mayo-clinic', name: 'Mayo Clinic', location: 'Rochester, MN', image: '/hospitals/mayo.webp' },
      { id: 'md-anderson', name: 'MD Anderson Cancer Center', location: 'Houston, TX', image: '/hospitals/md-anderson.webp' },
      { id: 'johns-hopkins', name: 'Johns Hopkins Hospital', location: 'Baltimore, MD', image: '/hospitals/johns-hopkins.webp' }
    ] 
  },
];

const destinationOverviewList = [
  {
    country: 'United Arab Emirates',
    flag: '/flags/uae.png',
    knownFor: 'Advanced multidisciplinary and quaternary care',
    patientAccess: 'Our home base; direct coordination and strong international access'
  },
  {
    country: 'India',
    flag: '/flags/india.png',
    knownFor: 'Complex high-acuity care, cardiac, oncology, transplant, neuro',
    patientAccess: 'Deep specialist capacity and established international patient services'
  },
  {
    country: 'Turkey',
    flag: '/flags/turkey.png',
    knownFor: 'Aesthetic, dental, bariatric, ophthalmology, fertility',
    patientAccess: 'High procedure volumes and dedicated medical tourism infrastructure'
  },
  {
    country: 'Saudi Arabia',
    flag: '/flags/saudi-arabia.png',
    knownFor: 'Regional tertiary and quaternary care',
    patientAccess: 'Cultural alignment, privacy, and rapidly expanding specialist services'
  },
  {
    country: 'United States',
    flag: '/flags/united-states.png',
    knownFor: 'Rare, complex, research-led and trial-based care',
    patientAccess: 'Global specialist depth, remote opinions, and advanced research access'
  }
];

export default function DestinationPage() {
  const [selected, setSelected] = useState<typeof destinations[0] | null>(null);
  const [activeTab, setActiveTab] = useState(destinations[0].name);

  return (
    <main className="min-h-screen bg-[#F9F6F1]">
      
      {/* Hero Section */}
      <section className="relative h-[320px] w-full flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-destination.webp" alt="Global Medical Destinations" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#172744]/75" />
        </div>
        <div className="relative z-10 text-white max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif mb-3">Global Medical Destinations</h1>
          <p className="text-stone-200 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            No single country is the right destination for every patient. Our network allows us to coordinate options across healthcare systems with different clinical strengths, accessibility, cultural environments, and patient experiences.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-6xl mx-auto px-6 pb-16 mt-[30px] relative">
        <div className="relative w-full aspect-[2/1] bg-white rounded-3xl shadow-lg p-4 border border-[#172744]/10">
          <Image src="/world-map.svg" alt="World Map" fill className="object-contain opacity-60" />
          
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="absolute z-10 cursor-pointer group"
              style={{ top: dest.top, left: dest.left }}
              onClick={() => setSelected(dest)}
            >
              <div className="relative w-8 h-8 -translate-x-1/2 -translate-y-full hover:scale-110 transition-transform">
                <Image src="/pin.png" alt={dest.name} fill className="object-contain" />
              </div>
              
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white p-3 rounded-xl shadow-2xl border border-[#172744]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 min-w-[130px] hover:bg-stone-50">
                <div className="relative w-5 h-4 rounded overflow-hidden flex-shrink-0 border border-stone-200">
                  <Image src={dest.flag} alt={`${dest.name} flag`} fill className="object-cover" />
                </div>
                <span className="text-sm font-bold text-[#172744] whitespace-nowrap">{dest.name}</span>
                <span className="bg-[#C5A059] text-white text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-bold ml-auto">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hospital Tabs Section */}
      <section id="hospital-section" className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-serif text-[#172744] mb-8 text-center">Partner Hospitals by Destination</h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
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

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
          {destinations.find(d => d.name === activeTab)?.hospitals.map((h, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-[#172744]/10 hover:shadow-md transition flex flex-col justify-between group">
              <div>
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl bg-stone-100 border border-stone-200/50">
                  <Image 
                    src={h.image} 
                    alt={h.name} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <h4 className="font-bold text-[#172744] text-lg mb-1">{h.name}</h4>
                <p className="text-sm text-stone-500 mb-6 flex items-center gap-1">📍 {h.location}</p>
              </div>
              
              <Link href={`/hospital/${h.id}`} className="block w-full text-center border border-[#172744] text-[#172744] py-2.5 rounded-xl text-sm font-semibold hover:bg-[#172744] hover:text-white transition">
                View Hospital Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Healthcare Destinations Comparison Section */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-3xl shadow-lg border border-[#172744]/10 p-6 md:p-10 overflow-hidden">
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl font-serif text-[#172744] mb-3">Healthcare Destinations Overview</h2>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              No single country is the right destination for every patient. Our network allows us to coordinate options across healthcare systems with different clinical strengths, accessibility, cultural environments, and patient experiences.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#172744]/15 bg-[#172744]/5">
                  <th className="py-4 px-4 font-serif text-[#172744] text-sm md:text-base">Destination</th>
                  <th className="py-4 px-4 font-serif text-[#172744] text-sm md:text-base">Known for</th>
                  <th className="py-4 px-4 font-serif text-[#172744] text-sm md:text-base">Patient access</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200/60 text-sm md:text-base">
                {destinationOverviewList.map((item, index) => (
                  <tr key={index} className="hover:bg-stone-50/80 transition-colors">
                    <td className="py-4 px-4 font-medium text-[#172744] flex items-center gap-3">
                      <div className="relative w-6 h-4 rounded overflow-hidden flex-shrink-0 border border-stone-200">
                        <Image src={item.flag} alt={`${item.country} flag`} fill className="object-cover" />
                      </div>
                      <span className="whitespace-nowrap">{item.country}</span>
                    </td>
                    <td className="py-4 px-4 text-stone-600 leading-relaxed">{item.knownFor}</td>
                    <td className="py-4 px-4 text-stone-600 leading-relaxed">{item.patientAccess}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Schedule Appointment Section */}
      <section className="bg-white py-20 px-6 border-t border-[#172744]/10 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#172744] mb-6">
            Schedule a virtual or in-person appointment today
          </h2>
          
          <div className="mb-14">
            <Link 
              href="/contact" 
              className="inline-block bg-[#3498db] hover:bg-[#2980b9] text-white font-medium px-8 py-3.5 rounded-xl shadow-md transition text-base"
            >
              Make Appointment
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

      {/* Responsive Popup Modal */}
      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#172744]/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 md:p-8 w-full max-w-6xl max-h-[90vh] overflow-y-auto relative shadow-2xl flex flex-col justify-between">
            <button 
              onClick={() => setSelected(null)} 
              className="absolute top-4 right-4 md:top-6 md:right-6 text-stone-400 hover:text-[#172744] text-2xl z-10"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2 gap-6 items-start mb-6">
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative w-8 h-6 rounded overflow-hidden shadow-sm border border-stone-200">
                    <Image src={selected.flag} alt={`${selected.name} flag`} fill className="object-cover" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif text-[#172744]">{selected.name}</h2>
                </div>

                {selected.subtitle && (
                  <h3 className="text-base font-medium text-[#C5A059] mb-3">{selected.subtitle}</h3>
                )}
                
                <div className="text-stone-600 space-y-3 text-sm md:text-base leading-relaxed whitespace-pre-line max-h-[42vh] overflow-y-auto pr-2">
                  {selected.description}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="relative w-full aspect-[16/9] bg-stone-100 rounded-xl overflow-hidden border border-stone-200 shadow-sm flex items-center justify-center">
                  <Image 
                    src={selected.countryMap} 
                    alt={`${selected.name} Map`} 
                    fill 
                    className="object-cover" 
                  />
                  <span className="absolute bottom-2 left-2 bg-white/90 text-[11px] px-2 py-0.5 rounded font-semibold text-[#172744] shadow-sm">Country Map</span>
                </div>

                <div className="relative w-full aspect-[16/9] bg-stone-100 rounded-xl overflow-hidden border border-stone-200 shadow-sm flex items-center justify-center">
                  <Image 
                    src={selected.landmarkImage} 
                    alt={`${selected.name} Landmark`} 
                    fill 
                    className="object-cover" 
                  />
                  <span className="absolute bottom-2 left-2 bg-white/90 text-[11px] px-2 py-0.5 rounded font-semibold text-[#172744] shadow-sm">Healthcare Ecosystem</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => {
                setActiveTab(selected.name);
                setSelected(null);
                document.getElementById('hospital-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-[#C5A059] text-white py-3.5 rounded-full font-semibold hover:bg-[#172744] transition text-base md:text-lg shadow-md mt-auto"
            >
              Find Hospitals in {selected.name}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}