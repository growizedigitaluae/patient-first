import Link from 'next/link';
import Image from 'next/image';

const specialties = [
  {
    title: "Orthopaedics & Spine",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    desc: "Support for patients seeking specialist assessment and treatment for bone, joint, spine, muscle, ligament, tendon, and sports-related conditions. We help coordinate access to experienced orthopaedic and spine specialists based on your individual healthcare needs."
  },
  {
    title: "Cardiology & Cardiac Surgery",
    img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    desc: "Support for patients seeking specialist care for heart and cardiovascular conditions, including diagnostic assessments, medical management, and cardiac procedures provided by licensed healthcare professionals."
  },
  {
    title: "Oncology & Haematology",
    img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
    desc: "Helping patients navigate access to specialist cancer and blood disorder services, including multidisciplinary treatment programmes and second opinion opportunities where available."
  },
  {
    title: "Neurology & Neurosurgery",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
    desc: "Supporting patients seeking specialist care for conditions affecting the brain, spine, and nervous system by facilitating access to experienced healthcare providers."
  },
  {
    title: "Women's Health & Fertility",
    img: "https://images.unsplash.com/photo-1584516150905-cbf41ea4175e?auto=format&fit=crop&w=800&q=80",
    desc: "Supporting women seeking specialist care across reproductive health, fertility, pregnancy, and gynaecological services by helping coordinate their healthcare journey."
  },
  {
    title: "Paediatrics",
    img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    desc: "Supporting families seeking specialist healthcare services for infants, children, and adolescents across a wide range of paediatric specialties."
  },
  {
    title: "Ophthalmology",
    img: "https://images.unsplash.com/photo-1579684453423-f843f9ef3010?auto=format&fit=crop&w=800&q=80",
    desc: "Helping patients access specialist eye care services for medical, surgical, and vision-related conditions."
  },
  {
    title: "Urology & Nephrology",
    img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
    desc: "Supporting patients seeking specialist assessment and treatment for urinary tract, kidney, and male reproductive health conditions."
  },
  {
    title: "Gastroenterology",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    desc: "Helping patients navigate specialist care for digestive health, liver, pancreas, and gastrointestinal conditions."
  },
  {
    title: "Transplantation",
    img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    desc: "Supporting patients who are exploring transplant services by facilitating communication and coordination with appropriate transplant centres where suitable. Eligibility, assessments, and all clinical decisions remain the responsibility of the treating healthcare providers."
  },
  {
    title: "Rehabilitation",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    desc: "Helping patients coordinate access to rehabilitation services following illness, injury, or surgery according to recommendations from their treating healthcare team."
  },
  {
    title: "Dentistry",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    desc: "Supporting access to general, restorative, surgical, and specialist dental services through our healthcare network."
  },
  {
    title: "Bariatrics",
    img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
    desc: "Helping patients explore specialist services related to obesity management and bariatric surgery provided by licensed healthcare professionals."
  },
  {
    title: "Plastic Surgery",
    img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
    desc: "Supporting patients seeking reconstructive or aesthetic surgical consultations with appropriately qualified healthcare providers."
  },
  {
    title: "Executive Health Screening",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    desc: "Helping individuals coordinate comprehensive health screening programmes offered by participating healthcare providers."
  },
  {
    title: "Rare Diseases",
    img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
    desc: "Supporting patients with rare or complex medical conditions by helping coordinate access to appropriate specialist healthcare providers and multidisciplinary services where available."
  }
];

export const metadata = {
  title: 'Medical Specialties We Support | Patient First Worldwide',
  description: 'Patients First Worldwide helps patients navigate access to healthcare providers across a broad range of medical specialties through independent patient support and healthcare coordination.',
};

export default function MedicalSpecialtiesPage() {
  return (
    <main className="min-h-screen bg-[#F9FAFB]">
      {/* --- HERO SECTION WITH NAVY BLUE OVERLAY & FLUSH TOP --- */}
      <section className="relative pt-36 pb-48 px-6 overflow-hidden bg-[#001128] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-01.webp"
            alt="Medical background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#001128]/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="text-[#C5A059] font-medium tracking-[0.2em] uppercase text-sm">
              Our Global Healthcare Network
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white leading-tight">
              Medical Specialties <span className="text-[#C5A059]">We Support.</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Whether you&apos;re seeking a second opinion, specialist care, or treatment closer to home or abroad, Patients First Worldwide helps you navigate your healthcare journey by connecting you with appropriate healthcare providers across a wide range of medical specialties.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed max-w-lg border-l-2 border-[#C5A059] pl-4">
              Medical advice, diagnosis, and treatment are provided exclusively by licensed healthcare professionals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight px-8 py-4 rounded-full font-semibold hover:opacity-95 transition-all shadow-lg"
            >
              Speak with Our Team
            </Link>
          </div>
          <div className="flex-[1.15] w-full h-[480px] relative">
            <Image
              src="/hero.webp"
              alt="Healthcare coordination across multiple specialties"
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
            Healthcare Coordination Across Multiple Specialties
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#172744] mb-4">
            Medical Specialties
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-base">
            Patients First Worldwide helps patients navigate access to healthcare providers across a broad range of medical specialties. We support the non-clinical aspects of the healthcare journey, including communication, coordination, and patient support. All medical advice, diagnoses, treatment recommendations, and clinical decisions are provided solely by licensed healthcare professionals.
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
                  className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight py-3.5 px-6 rounded-full font-semibold hover:opacity-95 transition-all shadow-md"
                >
                  Speak with Our Team
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Our Role */}
        <div className="bg-[#172744] text-white p-8 md:p-10 rounded-2xl text-center shadow-inner max-w-4xl mx-auto">
          <h3 className="text-[#C5A059] font-semibold tracking-[0.15em] uppercase text-xs mb-3">
            Our Role
          </h3>
          <p className="text-gray-300 font-medium text-sm md:text-base leading-relaxed tracking-wide">
            Patients First Worldwide is an independent patient support and healthcare coordination company. We help patients navigate the healthcare journey by facilitating communication and coordinating non-clinical services. Medical advice, diagnosis, treatment recommendations, and clinical care are provided exclusively by licensed healthcare professionals.
          </p>
        </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="py-20 px-6 bg-[#172744] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-3xl md:text-4xl font-serif">Let&apos;s Start with a Conversation</h2>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto">
            Tell us about your healthcare needs, and our team will help you understand the next steps.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm text-gray-300">
            {["Dedicated Patient Journey Coordinator", "Clear Communication", "Healthcare Coordination", "Support for Patients & Families", "Privacy & Confidentiality", "Independent Patient Support"].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2">
                <span className="text-[#C5A059]">✓</span> {item}
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10">
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight px-10 py-4 rounded-full font-semibold hover:opacity-95 transition-all shadow-lg"
            >
              Speak with Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
