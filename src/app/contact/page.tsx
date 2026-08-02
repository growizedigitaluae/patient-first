import Link from 'next/link';

export const metadata = {
  title: 'Contact Patient First Worldwide | Personalized Healthcare Support',
  description: 'Get in touch with Patient First Worldwide to discuss your healthcare needs. Our compassionate care team is ready to guide you through every step of your medical journey with personalized support and trusted expertise.',
};

const infoItems = [
  {
    icon: '◎',
    title: 'Office Location',
    content: 'Dubai, United Arab Emirates',
  },
  {
    icon: '☎',
    title: 'Phone',
    content: (
      <a href="tel:+971566960486" className="text-sm text-stone-600 hover:text-[#C5A059] transition">
        +971 56 696 0486
      </a>
    ),
    fine: 'Business hours below. Outside these hours, leave a message and we\u2019ll return your call the next business day.',
  },
  {
    icon: '✆',
    title: 'WhatsApp',
    content: 'Speak directly with a coordinator for quick, general questions.',
    fine: 'For your privacy, please don\u2019t send medical records, test results, or sensitive health details over WhatsApp. Your coordinator will move to a secure channel for anything personal.',
  },
  {
    icon: '✉',
    title: 'Email',
    content: (
      <a href="mailto:info@patientfirstworldwide.com" className="text-sm text-stone-600 hover:text-[#C5A059] transition">
        info@patientfirstworldwide.com
      </a>
    ),
    fine: 'Please avoid sending sensitive medical documents by email until a secure link has been shared with you.',
  },
  {
    icon: '⏱',
    title: 'Working Hours',
    content: 'Mon\u2013Fri: 9:00 AM \u2013 6:00 PM (GST)',
  },
];

export default function ContactPage() {
  return (
    <main className="bg-white text-[#172744]">
      {/* Hero Section */}
      <section className="relative py-32 px-6 min-h-[60vh] flex items-center justify-center bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/contact-hero-image.webp')" }}
      >
        <div className="absolute inset-0 bg-[#172744]/80 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-sm font-bold tracking-widest text-[#C5A059] uppercase mb-6">
            Contact Us
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-8 leading-tight">
            Let&apos;s Begin Your Healthcare Journey Together
          </h2>
          <p className="text-xl text-stone-200 mb-12 font-light max-w-2xl mx-auto">
            Whether you&apos;re exploring treatment options or seeking compassionate support, our team is here to help.
          </p>

          <Link href="#contact-form" className="bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight px-8 py-4 rounded-full font-semibold hover:opacity-95 transition-all shadow-lg">
            Speak with Our Team
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-8">
            <span className="text-metallic font-medium tracking-wider uppercase text-sm">We&apos;re here for you</span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#172744] mt-3 mb-4">
              How Can We Help You?
            </h2>
            <p className="text-stone-600 text-base leading-relaxed">
              Reach us however feels easiest — a call, a message, or a form. A real member of your care team will get back to you personally, usually within one business day.
            </p>
          </div>

          {/* Emergency Note */}
          <div className="mt-6 mb-14 p-5 bg-[#C5A059]/10 border-l-4 border-[#C5A059] text-sm text-[#172744] rounded-r-lg max-w-3xl leading-relaxed">
            <b>If this is a medical emergency,</b> please call your local emergency number or go to the nearest emergency room right away. This page is for enquiries and consultations only and is not monitored for urgent medical situations.
          </div>

          <div className="grid md:grid-cols-[1fr_1.25fr] gap-12 items-start">
            {/* Info List */}
            <div>
              {infoItems.map((item, i) => (
                <div key={i} className="flex gap-5 py-6 border-b border-[#172744]/10 first:pt-0">
                  <div className="w-10 h-10 rounded-full border-[1.5px] border-[#C5A059] text-[#C5A059] flex items-center justify-center text-lg flex-none">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#172744] mb-1">{item.title}</h4>
                    {item.content}
                    {item.fine && (
                      <p className="text-xs text-stone-400 mt-2 leading-relaxed max-w-xs">{item.fine}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div id="contact-form" className="bg-white border border-[#172744]/10 rounded-2xl shadow-lg p-8 md:p-12">
              <h3 className="text-2xl font-serif text-[#172744] mb-2">Request a Personalized Consultation</h3>
              <p className="text-sm text-stone-600 mb-8 leading-relaxed">
                Tell us a little about your situation. There&apos;s no obligation — this simply starts a conversation with someone who can help.
              </p>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-stone-600 tracking-wide">Full Name *</label>
                    <input type="text" placeholder="Your name" className="w-full px-4 py-3 bg-[#FCFAF6] border border-[#172744]/20 rounded-lg text-sm placeholder:text-stone-400 focus:outline-none focus:border-[#C5A059]" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-stone-600 tracking-wide">Phone Number *</label>
                    <input type="tel" placeholder="Best number to reach you" className="w-full px-4 py-3 bg-[#FCFAF6] border border-[#172744]/20 rounded-lg text-sm placeholder:text-stone-400 focus:outline-none focus:border-[#C5A059]" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-stone-600 tracking-wide">Email *</label>
                    <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 bg-[#FCFAF6] border border-[#172744]/20 rounded-lg text-sm placeholder:text-stone-400 focus:outline-none focus:border-[#C5A059]" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-stone-600 tracking-wide">Preferred Contact Method</label>
                    <input type="text" placeholder="Phone, WhatsApp, or Email" className="w-full px-4 py-3 bg-[#FCFAF6] border border-[#172744]/20 rounded-lg text-sm placeholder:text-stone-400 focus:outline-none focus:border-[#C5A059]" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-stone-600 tracking-wide">How can we help? (optional)</label>
                  <textarea
                    placeholder="Share as much or as little as you're comfortable with — no medical detail is required to get started."
                    className="w-full px-4 py-3 bg-[#FCFAF6] border border-[#172744]/20 rounded-lg text-sm placeholder:text-stone-400 focus:outline-none focus:border-[#C5A059] min-h-[110px] resize-y"
                  />
                  <span className="text-xs text-stone-400">
                    Please don&apos;t include sensitive medical details in this field; a coordinator will ask for anything needed through a secure channel.
                  </span>
                </div>

                <label className="flex gap-3 items-start p-4 bg-[#F9F6F1] rounded-lg cursor-pointer">
                  <input type="checkbox" className="mt-1 accent-[#C5A059]" />
                  <p className="text-xs text-stone-600 leading-relaxed">
                    I agree to Patient First Worldwide contacting me about my enquiry using the details provided, and I&apos;ve read the{' '}
                    <Link href="/privacy" className="text-[#C5A059] underline hover:opacity-80">Privacy Policy</Link>
                    , which explains how my information is stored and protected. I understand I can withdraw this consent at any time by contacting{' '}
                    <a href="mailto:info@patientfirstworldwide.com" className="text-[#C5A059] underline hover:opacity-80">info@patientfirstworldwide.com</a>. *
                  </p>
                </label>

                <button className="w-full sm:w-auto bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight px-10 py-4 rounded-full font-semibold hover:opacity-95 transition-all shadow-lg">
                  Request Consultation
                </button>

                <p className="text-[11px] text-stone-400 leading-relaxed max-w-md">
                  Submitting this form does not create a doctor-patient relationship and is not a request for medical advice or treatment. Your information is used solely to respond to your enquiry and is handled in accordance with applicable data protection law and our Privacy Policy. Required fields are marked *.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-[#F9F6F1]">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-serif text-center mb-12">Frequently Asked Questions</h3>
          <div className="space-y-6">
            <FAQItem q="How quickly will someone contact me?" a="Our team aims to respond within one business day. Urgent requests receive priority." />
            <FAQItem q="Is my medical information kept confidential?" a="Your data is handled with the highest level of privacy and in accordance with applicable data protection requirements." />
            <FAQItem q="Can my family contact you on my behalf?" a="Yes, we are happy to communicate with authorized representatives." />
            <FAQItem q="Is there any obligation after contacting you?" a="No. Your initial conversation is a discovery step with no obligation." />
          </div>
        </div>
      </section>
    </main>
  );
}

function FAQItem({ q, a }: { q: string, a: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-[#172744]/10">
      <h4 className="font-bold mb-2">{q}</h4>
      <p className="text-stone-600 text-sm">{a}</p>
    </div>
  );
}
