import Link from 'next/link';

export const metadata = {
  title: 'Your Medical Journey | Compassionate Care Every Step of the Way',
  description: 'Discover how Patient First Worldwide supports you throughout every stage of your medical journey. From your first consultation to recovery and ongoing follow-up, our dedicated care team is by your side every step of the way.',
};

export default function MedicalJourneyPage() {
  const steps = [
    { id: "01", title: "Share Your Medical Needs", desc: "Everything begins with your story. We take the time to understand your health concerns, history, and goals.", items: ["Confidential consultation", "Personalized guidance", "Initial care assessment", "Dedicated point of contact"] },
    { id: "02", title: "Initial Consultation", desc: "One of our experienced care coordinators will schedule a detailed conversation to discuss your needs.", items: ["Personal care coordinator", "Healthcare guidance", "Clear explanation of next steps", "Answers to all your questions"] },
    { id: "03", title: "Medical Record Review", desc: "We carefully review your records to prepare for the next stage of your healthcare journey.", items: ["Secure document review", "Comprehensive medical assessment", "Confidential record management"] },
    { id: "04", title: "Specialist & Hospital Matching", desc: "We identify experienced specialists and internationally recognized healthcare providers best suited to your case.", items: ["Personalized specialist recommendations", "Carefully matched healthcare providers", "Transparent guidance", "Patient-first approach"] },
    { id: "05", title: "Personalized Treatment Plan", desc: "We coordinate a treatment plan organized around your specific healthcare needs.", items: ["Customized treatment roadmap", "Appointment scheduling assistance", "Ongoing communication", "Personalized planning"] },
    { id: "06", title: "Arrival and Welcome", desc: "Our team welcomes you and ensures your transition into care is smooth and comfortable.", items: ["Warm welcome and orientation", "Assistance with local coordination", "Dedicated patient support", "Immediate access to your care coordinator"] },
    { id: "07", title: "Continuous Patient Support", desc: "Our coordinators remain by your side, providing regular communication and answering concerns.", items: ["Dedicated patient coordinator", "Ongoing communication", "Emotional reassurance", "Personalized assistance"] },
    { id: "08", title: "Treatment & Care Coordination", desc: "We coordinate appointments and ensure every stage of your treatment progresses smoothly.", items: ["Care coordination", "Appointment management", "Communication support", "Continuous guidance"] },
    { id: "09", title: "Recovery Assistance", desc: "We continue supporting you as you regain your strength and confidence.", items: ["Recovery guidance", "Ongoing communication", "Patient wellbeing support", "Family updates when appropriate"] },
    { id: "10", title: "Returning Home", desc: "Before your departure, we ensure you have the information and documentation for follow-up care.", items: ["Medical documentation guidance", "Discharge coordination", "Continued support plan", "Clear recovery instructions"] },
    { id: "11", title: "Ongoing Follow-Up", desc: "We continue checking on your progress and coordinating follow-up care as your recovery continues.", items: ["Follow-up coordination", "Continued communication", "Ongoing patient support", "Long-term care guidance"] },
  ];

  return (
    <main className="bg-white text-[#172744]">
      {/* Hero Section */}
     <section className="relative py-32 px-6 min-h-[70vh] flex items-center justify-center bg-fixed bg-center bg-cover bg-no-repeat" 
  style={{ backgroundImage: "url('/journey.webp')" }} // Change this to your actual filename
>
  {/* Dark Overlay to ensure text readability */}
  <div className="absolute inset-0 bg-[#172744]/80 z-0" />

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
    <h1 className="text-sm font-bold tracking-widest text-[#C5A059] uppercase mb-6">
      Your Journey. Our Commitment.
    </h1>
    <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">
      From Your First Conversation to Your Recovery, You're Never Alone.
    </h2>
    <p className="text-xl text-stone-200 mb-12 font-light max-w-2xl mx-auto">
      Every healthcare journey is unique, and so is the support you deserve. We are here to navigate every stage with you.
    </p>
    
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Link href="/contact" className="bg-[#C5A059] hover:bg-[#a8864a] text-white px-8 py-4 rounded-full font-semibold transition">
        Start Your Journey Today
      </Link>
    </div>
  </div>
</section>
      {/* Intro Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-serif mb-8">Every Journey Begins With a Conversation</h3>
        <p className="text-stone-600 mb-8 leading-relaxed">Seeking medical treatment can feel overwhelming. Our role is simple: We listen. We understand. We guide. Every recommendation we make begins with understanding you—not just your diagnosis.</p>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="relative border-l-2 border-stone-200 ml-3 md:ml-6 space-y-16">
          {steps.map((step) => (
            <div key={step.id} className="relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#C5A059]" />
              <h4 className="text-[#C5A059] font-bold tracking-wider text-sm mb-2">STEP {step.id}</h4>
              <h5 className="text-2xl font-serif mb-4">{step.title}</h5>
              <p className="text-stone-600 mb-6">{step.desc}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {step.items.map((item, idx) => (
                  <div key={idx} className="bg-[#F9F6F1] p-4 rounded-lg text-sm text-[#172744] border border-stone-100">{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-20 px-6 bg-[#F9F6F1] text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-serif mb-6">You Will Never Walk This Journey Alone</h3>
          <p className="text-stone-600 leading-relaxed mb-8">That is the promise of Patient First Worldwide. From your first enquiry until your complete recovery, we stand beside you with personalized support, professional guidance, and unwavering commitment.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 text-center">
        <h3 className="text-3xl font-serif mb-8">Ready to Take the First Step?</h3>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact" className="bg-[#C5A059] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#a8864a] transition">Start Your Journey Today</Link>
          <Link href="/contact" className="border border-[#172744] text-[#172744] px-8 py-3 rounded-full font-semibold hover:bg-stone-100 transition">Talk to Our Care Team</Link>
        </div>
      </section>
    </main>
  );
}