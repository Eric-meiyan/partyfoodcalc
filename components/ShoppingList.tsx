'use client';

import { useState } from 'react';

interface ShoppingItem {
  name: string;
  emoji: string;
  amount: number;
  unit: string;
  checked?: boolean;
}

interface ShoppingListProps {
  items: ShoppingItem[];
}

export default function ShoppingList({ items }: ShoppingListProps) {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const [copied, setCopied] = useState(false);

  const toggleItem = (index: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedItems(newChecked);
  };

  const copyToClipboard = () => {
    const text = items
      .map(item => `${item.emoji} ${item.name}: ${item.amount} ${item.unit}`)
      .join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const checkedCount = checkedItems.size;
  const progress = items.length > 0 ? (checkedCount / items.length) * 100 : 0;

  return (
    <div className="mt-8 animate-scaleIn print-friendly">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 md:px-8 py-5">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              🛒 Shopping List
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={copyToClipboard}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                  copied 
                    ? 'bg-green-400 text-white' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {copied ? '✓ Copied!' : '📋 Copy All'}
              </button>
              <button
                onClick={() => window.print()}
                className="px-4 py-2 bg-white/20 text-white rounded-xl text-sm font-bold hover:bg-white/30 transition-all"
              >
                🖨️ Print
              </button>
            </div>
          </div>
          {/* Progress bar */}
          <div className="mt-3">
            <div className="flex items-center justify-between text-xs text-white/80 mb-1">
              <span>{checkedCount} of {items.length} items checked</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div
                className="bg-white rounded-full h-2 transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Items */}
        <div className="p-4 md:p-6 space-y-2">
          {items.map((item, index) => (
            <label
              key={index}
              className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all border-2 ${
                checkedItems.has(index)
                  ? 'bg-green-50 border-green-200'
                  : 'bg-white border-gray-100 hover:border-orange-200 hover:bg-orange-50/30'
              }`}
            >
              <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all flex-shrink-0 ${
                checkedItems.has(index)
                  ? 'bg-green-500 border-green-500'
                  : 'border-gray-300'
              }`}>
                {checkedItems.has(index) && (
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
                <input
                  type="checkbox"
                  checked={checkedItems.has(index)}
                  onChange={() => toggleItem(index)}
                  className="sr-only"
                />
              </div>
              <span className="text-2xl flex-shrink-0">{item.emoji}</span>
              <div className="flex-1 min-w-0">
                <span className={`font-semibold text-base ${checkedItems.has(index) ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                  {item.name}
                </span>
              </div>
              <span className={`font-extrabold text-lg whitespace-nowrap ${checkedItems.has(index) ? 'line-through text-gray-400' : 'text-orange-600'}`}>
                {item.amount} {item.unit}
              </span>
            </label>
          ))}
        </div>

        {/* Footer tip */}
        <div className="mx-4 md:mx-6 mb-4 md:mb-6 p-4 bg-amber-50 rounded-2xl border border-amber-200">
          <p className="text-sm text-amber-800 flex items-start gap-2">
            <span className="text-lg flex-shrink-0">💡</span>
            <span><strong>Pro tip:</strong> Buy 10-15% extra for unexpected guests. Better to have leftovers than run out!</span>
          </p>
        </div>
      </div>
    </div>
  );
}
