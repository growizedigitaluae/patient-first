import Link from 'next/link';
import JourneyTimeline from './JourneyTimeline';

export const metadata = {
  title: 'Your Healthcare Journey | Patients First Worldwide',
  description: 'A clear, structured process to help you understand what to expect when coordinating healthcare through Patients First Worldwide.',
};

export default function MedicalJourneyPage() {
  return (
    <main className="bg-white text-[#172744]">
      {/* Hero Section */}
      <section className="relative py-32 px-6 min-h-[70vh] flex items-center justify-center bg-fixed bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('/journey.webp')" }}>
        <div className="absolute inset-0 bg-[#172744]/80 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-sm font-bold tracking-widest text-[#C5A059] uppercase mb-6">
            Your Healthcare Journey
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-8 leading-tight">
            Your Journey Starts Here
          </h2>
          <p className="text-xl text-stone-200 mb-6 font-light max-w-2xl mx-auto">
            Knowing what happens next can make all the difference.
          </p>
          <p className="text-stone-300 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Navigating healthcare can involve many decisions, questions, and practical arrangements. At Patients First Worldwide, we&apos;ve created a clear and structured process to help you understand what to expect from the moment you contact us. Every journey is managed with professionalism, transparency, and respect, ensuring you remain informed throughout each stage of the process.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#journey" className="bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight px-8 py-4 rounded-full font-semibold hover:opacity-95 transition-all shadow-lg">
              Start Your Journey
            </a>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-serif mb-6">How Your Healthcare Journey Works</h3>
        <p className="text-stone-600 leading-relaxed">
          Every patient&apos;s circumstances are different. The journey below outlines the typical stages involved when coordinating healthcare through Patients First Worldwide.
        </p>
      </section>

      {/* Interactive Timeline */}
      <JourneyTimeline />

      {/* Understanding the Process Section */}
      <section className="py-20 px-6 bg-[#F9F6F1] text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-serif mb-6 text-[#172744]">Understanding the Process</h3>
          <p className="text-stone-600 leading-relaxed mb-6">
            Every healthcare journey is different. The number of steps, timeframes, documentation requirements, and coordination activities may vary depending on your medical circumstances, the healthcare provider, the country of treatment, and the services requested.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Our role is to help coordinate the non-clinical aspects of your healthcare journey while keeping you informed throughout the process.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 text-center">
        <h3 className="text-3xl font-serif mb-6">Ready to Take the First Step?</h3>
        <p className="text-stone-600 max-w-2xl mx-auto mb-10">
          Whether you are seeking a consultation, a second opinion, or planning treatment locally or internationally, our team is ready to help you understand the next steps.
        </p>
        <Link href="/contact" className="inline-block bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight px-10 py-4 rounded-full font-semibold hover:opacity-95 transition-all shadow-lg">
          Speak With Our Team
        </Link>
      </section>
    </main>
  );
}
