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
    alert('Shopping list copied to clipboard! 📋');
  };

  return (
    <div className="mt-8 bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-blue-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          🛒 Shopping List
        </h2>
        <button
          onClick={copyToClipboard}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm"
        >
          📋 Copy
        </button>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => (
          <label
            key={index}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors border border-gray-100"
          >
            <input
              type="checkbox"
              checked={checkedItems.has(index)}
              onChange={() => toggleItem(index)}
              className="w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500 cursor-pointer"
            />
            <span className="text-2xl">{item.emoji}</span>
            <div className="flex-1">
              <span className={`font-semibold ${checkedItems.has(index) ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                {item.name}
              </span>
            </div>
            <span className={`font-bold ${checkedItems.has(index) ? 'line-through text-gray-400' : 'text-orange-600'}`}>
              {item.amount} {item.unit}
            </span>
          </label>
        ))}
      </div>

      <div className="mt-6 p-4 bg-orange-50 rounded-xl border-2 border-orange-200">
        <p className="text-sm text-gray-700">
          💡 <strong>Pro tip:</strong> Buy 10-15% extra for unexpected guests or bigger appetites!
        </p>
      </div>
    </div>
  );
}
