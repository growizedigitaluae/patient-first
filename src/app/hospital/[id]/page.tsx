'use client';
import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const hospitalData: Record<string, {
  name: string;
  location: string;
  country: string;
  image: string;
  profile: string;
  strengths: string[];
  recognition: string;
  patientAccess: string;
}> = {
  'burjeel-holdings': {
    name: 'Burjeel Holdings',
    location: 'Abu Dhabi & Regional',
    country: 'UAE',
    image: '/hospitals/burjeel.webp',
    profile: 'Large UAE healthcare group with hospitals and medical centres across the region.',
    strengths: ['Oncology', 'Cardiac and vascular surgery', 'Orthopaedics', 'Transplant', 'Bone marrow transplant', 'Complex multi-system care'],
    recognition: 'Multiple internationally accredited facilities and advanced specialised centres.',
    patientAccess: 'Dedicated international patient coordination, multilingual support, and broad specialist network.'
  },
  'aster-hospitals': {
    name: 'Aster Hospitals',
    location: 'Dubai & Sharjah',
    country: 'UAE',
    image: '/hospitals/aster.webp',
    profile: 'Multi-specialty hospital network across Dubai and Sharjah.',
    strengths: ['Cardiology', 'Orthopaedics', 'Neurology', 'Gastroenterology', 'Maternity', 'Broad multi-specialty services'],
    recognition: 'Internationally accredited facilities and strong regional healthcare presence.',
    patientAccess: 'International patient services, multilingual coordinators, and support with travel-related coordination.'
  },
  'medcare': {
    name: 'Medcare',
    location: 'Dubai & UAE',
    country: 'UAE',
    image: '/hospitals/medcare.webp',
    profile: 'Premium multi-specialty hospital brand within Aster DM Healthcare.',
    strengths: ['Orthopaedics', 'Spine surgery', 'Cardiology', 'Maternity', 'General multi-specialty care'],
    recognition: 'Recognised centres of excellence and accredited facilities.',
    patientAccess: 'Integrated referral pathways across a wider regional network.'
  },
  'apollo-hospitals': {
    name: 'Apollo Hospitals Group',
    location: 'Chennai & Pan-India',
    country: 'India',
    image: '/hospitals/apollo.webp',
    profile: 'Major integrated multi-specialty hospital network with leading centres across India.',
    strengths: ['Cardiology', 'Oncology', 'Proton therapy', 'Organ transplantation', 'Neurology', 'Orthopaedics'],
    recognition: 'Multiple internationally accredited hospitals and recognised specialist programmes.',
    patientAccess: 'International patient teams, multilingual coordination, and medical travel support.'
  },
  'medanta-medicity': {
    name: 'Medanta – The Medicity',
    location: 'Gurugram',
    country: 'India',
    image: '/hospitals/emdanta.webp',
    profile: 'Multi-super-specialty institute in Gurugram.',
    strengths: ['Cardiology', 'Oncology', 'Neurology', 'Orthopaedics', 'Gastroenterology', 'Liver and kidney transplantation'],
    recognition: 'International and national accreditation with research-led treatment programmes.',
    patientAccess: 'Dedicated international patient services and coordinated telemedicine follow-up.'
  },
  'fortis-healthcare': {
    name: 'Fortis Healthcare',
    location: 'Pan-India',
    country: 'India',
    image: '/hospitals/fortis.webp',
    profile: 'Pan-India hospital network across major cities.',
    strengths: ['Cardiac sciences', 'Oncology', 'Neurosciences', 'Orthopaedics', 'Renal sciences', 'Transplantation'],
    recognition: 'Accredited facilities across the network.',
    patientAccess: 'Established international patient coordination across multiple locations.'
  },
  'acibadem-healthcare': {
    name: 'Acibadem Healthcare Group',
    location: 'Istanbul & Turkey',
    country: 'Turkey',
    image: '/hospitals/acibadem.webp',
    profile: 'Large private hospital group with facilities across Turkey.',
    strengths: ['Oncology', 'Organ transplantation', 'Robotic surgery', 'Cardiology', 'IVF', 'Fertility care'],
    recognition: 'Extensive international accreditation and strong global recognition.',
    patientAccess: 'Dedicated international patient centres with multilingual coordination.'
  },
  'memorial-healthcare': {
    name: 'Memorial Healthcare Group',
    location: 'Istanbul, Ankara, Antalya',
    country: 'Turkey',
    image: '/hospitals/memorial.webp',
    profile: 'Major private hospital group across Istanbul, Ankara, and Antalya.',
    strengths: ['Cardiology', 'Oncology', 'IVF', 'Orthopaedics', 'Robotic surgery'],
    recognition: 'Internationally accredited facilities and recognised specialist programmes.',
    patientAccess: 'International patient departments supporting care across several cities.'
  },
  'american-hospital-istanbul': {
    name: 'American Hospital Istanbul',
    location: 'Istanbul',
    country: 'Turkey',
    image: '/hospitals/american-hospital.webp',
    profile: 'Prestigious long-established hospital in Istanbul.',
    strengths: ['Cardiology', 'Oncology', 'Comprehensive multi-specialty care'],
    recognition: 'Long-standing reputation for clinical quality and international standards.',
    patientAccess: 'Established international patient services in a central Istanbul location.'
  },
  'kfshrc': {
    name: 'King Faisal Specialist Hospital & Research Centre',
    location: 'Riyadh',
    country: 'Saudi Arabia',
    image: '/hospitals/kfshrc.webp',
    profile: 'Leading tertiary and quaternary referral institution.',
    strengths: ['Oncology', 'Organ transplantation', 'Cardiovascular disease', 'Neurosciences', 'Genetic diseases'],
    recognition: 'Internationally recognised for research and specialist care.',
    patientAccess: 'Dedicated international patient services for complex regional referrals.'
  },
  'sulaiman-al-habib': {
    name: 'Dr. Sulaiman Al Habib Medical Group',
    location: 'Riyadh & Saudi Arabia',
    country: 'Saudi Arabia',
    image: '/hospitals/al-habib.webp',
    profile: 'Major private healthcare network across Saudi Arabia.',
    strengths: ['Cardiac care', 'Orthopaedics', 'Sports medicine', 'Fertility', 'Reproductive medicine', 'Neonatal intensive care'],
    recognition: 'Internationally accredited facilities and advanced digital systems.',
    patientAccess: 'Integrated records and coordinated access across multiple branches.'
  },
  'mayo-clinic': {
    name: 'Mayo Clinic',
    location: 'Rochester, MN',
    country: 'United States',
    image: '/hospitals/mayo.webp',
    profile: 'Multi-campus academic medical centre organised around multidisciplinary team medicine.',
    strengths: ['Complex diagnostics', 'Cardiology', 'Oncology', 'Orthopaedics', 'Broad specialty care'],
    recognition: 'Consistently recognised among the world’s leading hospitals.',
    patientAccess: 'International patient centre and remote second-opinion pathways.'
  },
  'md-anderson': {
    name: 'MD Anderson Cancer Center',
    location: 'Houston, TX',
    country: 'United States',
    image: '/hospitals/md-anderson.webp',
    profile: 'Major dedicated cancer centre in Houston.',
    strengths: ['Comprehensive oncology', 'Precision medicine', 'Large clinical trial programmes'],
    recognition: 'Globally recognised for cancer care and research.',
    patientAccess: 'International patient office coordinating consultations and treatment planning.'
  },
  'johns-hopkins': {
    name: 'Johns Hopkins Hospital',
    location: 'Baltimore, MD',
    country: 'United States',
    image: '/hospitals/johns-hopkins.webp',
    profile: 'Globally renowned academic medical centre and research institution.',
    strengths: ['Neurology', 'Neurosurgery', 'Cardiology', 'Oncology', 'Rare disease diagnosis'],
    recognition: 'Long-standing international reputation across multiple specialties.',
    patientAccess: 'Established international patient services for patients travelling worldwide.'
  }
};

export default function HospitalDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const hospital = hospitalData[resolvedParams.id];

  if (!hospital) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F9F6F1] pb-24">
      {/* Header Banner */}
      <section className="relative h-[280px] w-full flex items-center justify-center text-center px-6 overflow-hidden bg-[#172744] pt-16">
        <div className="absolute inset-0 opacity-20">
          <Image src={hospital.image} alt={hospital.name} fill className="object-cover" />
        </div>
        <div className="relative z-10 text-white max-w-3xl">
          <span className="text-[#C5A059] uppercase tracking-widest text-xs font-bold mb-2 block">{hospital.country} Network</span>
          <h1 className="text-3xl md:text-5xl font-serif mb-3">{hospital.name}</h1>
          <p className="text-stone-300 text-sm md:text-base flex items-center justify-center gap-1">
            📍 {hospital.location}
          </p>
        </div>
      </section>

      {/* Main Details Section */}
      <section className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-[#172744]/10 space-y-8">
          
          {/* Profile Overview */}
          <div>
            <h3 className="text-xl font-serif text-[#172744] mb-2">Institution Profile</h3>
            <p className="text-stone-600 text-base leading-relaxed">{hospital.profile}</p>
          </div>

          {/* Clinical Strengths */}
          <div>
            <h3 className="text-xl font-serif text-[#172744] mb-3">Clinical Strengths</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {hospital.strengths.map((strength, index) => (
                <div key={index} className="flex items-start gap-2 bg-[#F9F6F1] p-3 rounded-xl border border-stone-200/60">
                  <span className="text-[#C5A059] font-bold">✓</span>
                  <span className="text-stone-700 text-sm font-medium">{strength}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recognition & Accreditation */}
          <div>
            <h3 className="text-xl font-serif text-[#172744] mb-2">Recognition & Accreditation</h3>
            <p className="text-stone-600 text-base leading-relaxed">{hospital.recognition}</p>
          </div>

          {/* International Patient Access */}
          <div>
            <h3 className="text-xl font-serif text-[#172744] mb-2">International Patient Access</h3>
            <p className="text-stone-600 text-base leading-relaxed">{hospital.patientAccess}</p>
          </div>

          {/* Actions */}
          <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <Link 
              href="/destinations" 
              className="text-[#172744] font-semibold text-sm hover:underline"
            >
              ← Back to Global Destinations
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight font-medium px-8 py-3.5 rounded-full shadow-lg transition text-center hover:opacity-95"
            >
              Coordinate Care at this Hospital
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}