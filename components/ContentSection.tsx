'use client';

import { useState } from 'react';
import { trackFAQOpen, trackCalculatorNavigation } from '@/lib/analytics';

interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

export default function ContentSection({ title, children, id }: ContentSectionProps) {
  return (
    <section id={id} className="mt-16">
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 flex items-center gap-3">
        <div className="w-1.5 h-8 bg-gradient-to-b from-orange-500 to-amber-500 rounded-full" />
        {title}
      </h2>
      <div className="text-gray-600 leading-relaxed text-lg space-y-4">
        {children}
      </div>
    </section>
  );
}

export function FAQ({ questions }: { questions: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {questions.map((item, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md">
          <button
            onClick={() => { 
              const opening = openIndex !== index;
              setOpenIndex(opening ? index : null);
              if (opening) trackFAQOpen(item.q, typeof window !== 'undefined' ? window.location.pathname : '/');
            }}
            className="w-full text-left p-5 flex items-center justify-between gap-4"
          >
            <h3 className="text-lg font-bold text-gray-800">{item.q}</h3>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
              openIndex === index ? 'bg-orange-500 text-white rotate-180' : 'bg-gray-100 text-gray-500'
            }`}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          {openIndex === index && (
            <div className="px-5 pb-5 animate-fadeIn">
              <div className="pt-3 border-t border-gray-100">
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function RelatedCalculators({ calculators }: { calculators: { name: string; url: string; emoji: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {calculators.map((calc, index) => (
        <a
          key={index}
          href={calc.url}
          onClick={() => trackCalculatorNavigation(typeof window !== 'undefined' ? window.location.pathname : '/', calc.url)}
          className="group block p-5 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-orange-300 text-center hover:-translate-y-1"
        >
          <div className="text-4xl mb-3 group-hover:scale-110 transition-transform inline-block">{calc.emoji}</div>
          <div className="font-bold text-gray-800 text-sm group-hover:text-orange-600 transition-colors">{calc.name}</div>
          <div className="text-xs text-gray-400 mt-1">Calculator →</div>
        </a>
      ))}
    </div>
  );
}
