'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';

type Stage = {
  id: string;
  short: string;
  title: string;
  icon: ReactNode;
  intro: string;
  desc: string;
  items?: string[];
  note?: string;
};

const steps: Stage[] = [
  {
    id: '01',
    short: 'Contact',
    title: 'Understanding Your Healthcare Needs',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    intro: 'Every journey begins with understanding your situation.',
    desc: 'During our initial conversation, we take the time to understand your healthcare needs, answer your questions, explain how the process works, and discuss the information required to coordinate the next stage of your journey.',
    items: [
      'Initial discussion',
      'Understanding your healthcare needs',
      'Explanation of the process',
      'Dedicated point of contact'
    ]
  },
  {
    id: '02',
    short: 'Medical Information',
    title: 'Medical Information Coordination',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    intro: 'To coordinate communication with healthcare providers, we organise the relevant medical information available for your case.',
    desc: 'Depending on your circumstances, this may include medical reports, imaging, laboratory results, referral letters, or other supporting documentation. Where required, additional documentation or certified translations may also be coordinated.',
    items: [
      'Medical record organisation',
      'Documentation review for completeness',
      'Translation coordination (when required)',
      'Secure information management'
    ]
  },
  {
    id: '03',
    short: 'Provider Coordination',
    title: 'Coordination with Healthcare Providers',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    intro: 'Once your documentation has been prepared, we coordinate communication with appropriate healthcare providers based on your healthcare needs and preferred destination.',
    desc: 'Healthcare providers may request additional information before sharing consultation availability, administrative requirements, estimated costs, or other relevant information.',
    note: 'Medical advice, diagnosis, treatment recommendations, and clinical decisions are provided exclusively by licensed healthcare professionals.'
  },
  {
    id: '04',
    short: 'Review Options',
    title: 'Reviewing Your Healthcare Options',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    intro: 'Once information is received, we explain the available options, discuss the information provided by healthcare providers, and answer your non-clinical questions.',
    desc: 'This allows you to understand the available pathways before making your own healthcare decisions.',
    items: [
      'Consultation options',
      'Estimated treatment costs (when available)',
      'Expected timelines',
      'Administrative requirements',
      'Travel considerations'
    ]
  },
  {
    id: '05',
    short: 'Journey Planning',
    title: 'Planning Your Healthcare Journey',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    intro: 'After you have selected your preferred healthcare provider, we coordinate the practical arrangements required for your healthcare journey.',
    desc: 'The services required vary from patient to patient and are coordinated according to your individual circumstances.',
    items: [
      'Appointment coordination',
      'Healthcare documentation',
      'Travel guidance',
      'Accommodation guidance (when requested)',
      'Ongoing communication'
    ]
  },
  {
    id: '06',
    short: 'During Your Journey',
    title: 'During Your Healthcare Journey',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    intro: 'Throughout your healthcare journey, Patients First Worldwide continues coordinating the agreed non-clinical aspects of your case.',
    desc: 'Your Patient Journey Coordinator remains your primary point of contact for communication, administrative coordination, and practical support throughout the process.',
    items: [
      'Communication coordination',
      'Appointment updates',
      'Administrative assistance',
      'Family communication (when requested)'
    ]
  },
  {
    id: '07',
    short: 'Follow-Up',
    title: 'After Your Healthcare Visit',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    intro: 'Healthcare journeys do not always end when a consultation or treatment has been completed.',
    desc: 'Where required, we continue coordinating follow-up communication, medical documentation, and future appointments requested by your healthcare provider. The level of coordination depends on your individual healthcare journey and ongoing requirements.'
  }
];

export default function JourneyTimeline() {
  const [active, setActive] = useState(0);
  const activeStep = steps[active];

  return (
    <section id="journey" className="py-20 px-6 max-w-5xl mx-auto scroll-mt-24">
      {/* Horizontal Stepper */}
      <div className="overflow-x-auto pb-2 -mx-6 px-6">
        <ol className="relative flex items-start gap-3 md:gap-0 min-w-max">
          {/* Connecting line */}
          <div className="absolute top-6 left-6 right-6 hidden md:block h-0.5 bg-stone-200" />
          {steps.map((step, i) => {
            const isActive = i === active;
            const isDone = i < active;
            return (
              <li key={step.id} className="relative flex-1">
                <button
                  onClick={() => setActive(i)}
                  className="group flex flex-col items-center text-center px-2 md:px-3 w-full"
                  aria-current={isActive ? 'step' : undefined}
                >
                  <span
                    className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] border-transparent text-midnight scale-110 shadow-lg'
                        : isDone
                        ? 'bg-gradient-to-r from-[#C88A2B]/70 to-[#fCDA7B]/70 border-transparent text-midnight'
                        : 'bg-white border-stone-300 text-stone-400 group-hover:border-[#C5A059] group-hover:text-[#C5A059]'
                    }`}
                  >
                    {step.icon}
                  </span>
                  <span
                    className={`mt-3 text-[10px] font-bold tracking-widest uppercase ${
                      isActive ? 'text-[#C5A059]' : isDone ? 'text-[#172744]' : 'text-stone-400'
                    }`}
                  >
                    Step {step.id}
                  </span>
                  <span
                    className={`mt-1 text-xs md:text-sm font-semibold leading-tight ${
                      isActive ? 'text-[#172744]' : 'text-stone-500'
                    }`}
                  >
                    {step.short}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Active Stage Details */}
      <div key={activeStep.id} className="mt-12 bg-[#F9F6F1] rounded-3xl border border-stone-200/70 shadow-sm p-8 md:p-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-midnight flex items-center justify-center font-serif font-bold text-lg shrink-0 shadow-md">
            {activeStep.id}
          </span>
          <h3 className="text-2xl md:text-3xl font-serif text-[#172744]">{activeStep.title}</h3>
        </div>

        <p className="text-stone-700 font-medium leading-relaxed mb-4">{activeStep.intro}</p>
        <p className="text-stone-600 leading-relaxed">{activeStep.desc}</p>

        {activeStep.items && (
          <div className="mt-8">
            <h4 className="text-[#C5A059] font-bold text-sm uppercase tracking-wider mb-4">
              This stage may include
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {activeStep.items.map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-stone-200/70 flex items-start gap-3 text-sm text-[#172744]">
                  <span className="text-[#C5A059] font-bold shrink-0 mt-0.5">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeStep.note && (
          <div className="mt-8 bg-[#172744] text-white rounded-2xl p-6">
            <p className="text-stone-200 text-sm leading-relaxed">
              <span className="text-[#C5A059] font-bold uppercase tracking-wider text-xs block mb-2">
                Important
              </span>
              {activeStep.note}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
