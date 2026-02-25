'use client';

import { trackGenerateShoppingList, trackPrint } from '@/lib/analytics';

interface ResultItem {
  name: string;
  emoji: string;
  amount: number;
  unit: string;
  details?: string;
}

interface ResultsProps {
  results: ResultItem[];
  totalGuests: number;
  onGenerateShoppingList?: () => void;
}

export default function Results({ results, totalGuests, onGenerateShoppingList }: ResultsProps) {
  if (results.length === 0) return null;

  const proteins = results.filter(r => ['Chicken Wings', 'Pizza', 'Burgers', 'Hot Dogs', 'Pulled Pork'].includes(r.name));
  const sides = results.filter(r => ['Coleslaw', 'Potato Salad', 'Baked Beans'].includes(r.name));
  const drinks = results.filter(r => ['Water', 'Soda', 'Beer'].includes(r.name));

  const renderGroup = (title: string, icon: string, items: ResultItem[], color: string) => {
    if (items.length === 0) return null;
    const colorMap: Record<string, string> = {
      orange: 'from-orange-500 to-amber-500',
      green: 'from-green-500 to-emerald-500',
      blue: 'from-blue-500 to-cyan-500',
    };
    return (
      <div>
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${colorMap[color]} text-white text-sm font-bold mb-4`}>
          <span>{icon}</span> {title}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all border border-gray-100 group hover:border-orange-200"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">{item.emoji}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wide">{item.name}</h3>
                  <p className="text-3xl font-extrabold text-gray-900 mt-1 leading-tight">
                    {item.amount} <span className="text-lg font-bold text-gray-400">{item.unit}</span>
                  </p>
                  {item.details && (
                    <p className="text-xs text-gray-500 mt-1.5 bg-gray-50 inline-block px-2 py-0.5 rounded-full">{item.details}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="mt-10 animate-slideUp">
      <div className="bg-gradient-to-br from-gray-50 to-orange-50/30 rounded-3xl shadow-2xl p-6 md:p-8 border border-orange-100/50">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Your Party Food Plan
            </h2>
            <p className="text-gray-500 mt-1">Here&apos;s what you need for <strong className="text-orange-600">{totalGuests} guests</strong></p>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-sm border border-gray-100">
            <div className="text-center">
              <p className="text-3xl font-extrabold text-orange-600">{totalGuests}</p>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Guests</p>
            </div>
          </div>
        </div>

        {/* Result Groups */}
        <div className="space-y-8">
          {renderGroup('Main Dishes', '🍖', proteins, 'orange')}
          {renderGroup('Side Dishes', '🥗', sides, 'green')}
          {renderGroup('Beverages', '🥤', drinks, 'blue')}
        </div>

        {/* Trust Badge */}
        <div className="mt-8 p-4 bg-white rounded-2xl border border-gray-200 flex items-start gap-3">
          <span className="text-2xl flex-shrink-0">📏</span>
          <div className="text-sm text-gray-500">
            <strong className="text-gray-700">How we calculate:</strong> Our portions are based on industry-standard catering guidelines used by professional event planners. We adjust for party type, duration, and guest mix (adults eat more than kids). We recommend buying 10-15% extra for bigger appetites.
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-gray-200">
          {onGenerateShoppingList && (
            <button
              onClick={() => { trackGenerateShoppingList(results.length); onGenerateShoppingList?.(); }}
              className="flex-1 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
            >
              📝 Generate Shopping List
            </button>
          )}
          <button
            onClick={() => { trackPrint('results'); window.print(); }}
            className="px-8 py-4 bg-white text-gray-700 font-bold rounded-2xl hover:bg-gray-50 transition-all shadow-sm border-2 border-gray-200 hover:border-gray-300 flex items-center justify-center gap-2"
          >
            🖨️ Print
          </button>
        </div>
      </div>
    </div>
  );
}
