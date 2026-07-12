import Link from 'next/link';

export const metadata = {
  title: 'Contact Patient First Worldwide | Personalized Healthcare Support',
  description: 'Get in touch with Patient First Worldwide to discuss your healthcare needs. Our compassionate care team is ready to guide you through every step of your medical journey with personalized support and trusted expertise.',
};

export default function ContactPage() {
  return (
    <main className="bg-white text-[#172744]">
      {/* Hero Section */}
      <section className="relative py-32 px-6 min-h-[60vh] flex items-center justify-center bg-fixed bg-center bg-cover bg-no-repeat" 
  style={{ backgroundImage: "url('/contact-hero-image.webp')" }} // Update this filename
>
  {/* Dark Overlay for contrast */}
  <div className="absolute inset-0 bg-[#172744]/80 z-0" />

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
    <h1 className="text-sm font-bold tracking-widest text-[#C5A059] uppercase mb-6">
      Contact Us
    </h1>
    <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">
      Let's Begin Your Healthcare Journey Together
    </h2>
    <p className="text-xl text-stone-200 mb-12 font-light max-w-2xl mx-auto">
      Whether you're exploring treatment options or seeking compassionate support, our dedicated care team is here to help.
    </p>
    
    <Link href="#contact-form" className="bg-[#C5A059] hover:bg-[#a8864a] text-white px-8 py-4 rounded-full font-semibold transition">
      Talk to Our Care Team
    </Link>
  </div>
</section>

      {/* Contact Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-3xl font-serif mb-6">How Can We Help You?</h3>
          <p className="text-stone-600 mb-8">Choose the method that is most convenient for you. Our team is committed to responding promptly.</p>
          
          <div className="space-y-6">
            <ContactInfo title="Office Location" desc="Dubai, United Arab Emirates" />
            <ContactInfo title="Phone" desc="+971 56 696 0486 (Business Hours)" />
            <ContactInfo title="WhatsApp" desc="Speak directly with a coordinator for quick assistance." />
            <ContactInfo title="Email" desc="info@patientfirstworldwide.com" />
            <ContactInfo title="Working Hours" desc="Mon–Fri: 9:00 AM – 6:00 PM (GST)" />
          </div>
        </div>

        {/* Contact Form */}
        <div id="contact-form" className="bg-[#172744] p-8 rounded-3xl text-white">
          <h3 className="text-2xl font-serif mb-6">Request a Personalized Consultation</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-4 rounded-xl bg-white/10 border border-white/20" />
            <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl bg-white/10 border border-white/20" />
            <input type="tel" placeholder="Phone Number" className="w-full p-4 rounded-xl bg-white/10 border border-white/20" />
            <textarea placeholder="How Can We Help You?" className="w-full p-4 rounded-xl bg-white/10 border border-white/20 h-32" />
            <label className="flex items-center gap-2 text-sm text-stone-300">
              <input type="checkbox" /> I agree to be contacted regarding my enquiry.
            </label>
            <button className="w-full bg-[#C5A059] py-4 rounded-full font-semibold hover:bg-[#a8864a] transition">
              Request Consultation
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-[#F9F6F1]">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-serif text-center mb-12">Frequently Asked Questions</h3>
          <div className="space-y-6">
            <FAQItem q="How quickly will someone contact me?" a="Our team aims to respond within one business day. Urgent requests receive priority." />
            <FAQItem q="Is my medical information kept confidential?" a="Absolutely. Your data is handled with the highest level of privacy." />
            <FAQItem q="Can my family contact you on my behalf?" a="Yes, we are happy to communicate with authorized representatives." />
            <FAQItem q="Is there any obligation after contacting you?" a="No. Your initial consultation is a discovery step with no obligation." />
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactInfo({ title, desc }: { title: string, desc: string }) {
  return (
    <div>
      <h4 className="font-bold text-[#172744]">{title}</h4>
      <p className="text-stone-600">{desc}</p>
    </div>
  );
}

function FAQItem({ q, a }: { q: string, a: string }) {
  return (
    <div className="border-b border-stone-200 pb-6">
      <h4 className="font-bold mb-2">{q}</h4>
      <p className="text-stone-600 text-sm">{a}</p>
    </div>
  );
}