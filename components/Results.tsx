'use client';

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

  return (
    <div className="mt-8 animate-fadeIn">
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-xl p-6 md:p-8 border-2 border-green-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            📊 Your Party Food Plan
          </h2>
          <div className="text-right">
            <p className="text-sm text-gray-600">Total Guests</p>
            <p className="text-3xl font-bold text-orange-600">{totalGuests}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {results.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex items-start gap-3">
                <div className="text-4xl">{item.emoji}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>
                  <p className="text-2xl font-bold text-orange-600 mt-1">
                    {item.amount} {item.unit}
                  </p>
                  {item.details && (
                    <p className="text-sm text-gray-600 mt-1">{item.details}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {onGenerateShoppingList && (
          <div className="flex gap-4">
            <button
              onClick={onGenerateShoppingList}
              className="flex-1 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors shadow-md"
            >
              📝 Generate Shopping List
            </button>
            <button
              onClick={() => window.print()}
              className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-md"
            >
              🖨️ Print
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
