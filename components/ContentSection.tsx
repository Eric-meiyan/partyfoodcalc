interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

export default function ContentSection({ title, children, id }: ContentSectionProps) {
  return (
    <section id={id} className="mt-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-orange-400 pb-3">
        {title}
      </h2>
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export function FAQ({ questions }: { questions: { q: string; a: string }[] }) {
  return (
    <div className="space-y-6">
      {questions.map((item, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-400">
          <h3 className="text-xl font-bold text-gray-800 mb-3">{item.q}</h3>
          <p className="text-gray-700 leading-relaxed">{item.a}</p>
        </div>
      ))}
    </div>
  );
}

export function RelatedCalculators({ calculators }: { calculators: { name: string; url: string; emoji: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {calculators.map((calc, index) => (
        <a
          key={index}
          href={calc.url}
          className="block p-4 bg-gradient-to-br from-orange-50 to-green-50 rounded-xl shadow-md hover:shadow-xl transition-all border-2 border-orange-100 hover:border-orange-300 text-center"
        >
          <div className="text-4xl mb-2">{calc.emoji}</div>
          <div className="font-semibold text-gray-800 text-sm">{calc.name}</div>
        </a>
      ))}
    </div>
  );
}
