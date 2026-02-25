'use client';

import { useState } from 'react';
import { partyTypes } from '@/lib/foodData';

interface CalculatorProps {
  onCalculate: (adults: number, kids: number, partyType: string, duration: number) => void;
  defaultPartyType?: string;
  showPartyTypeSelector?: boolean;
}

export default function Calculator({ 
  onCalculate, 
  defaultPartyType = 'casual',
  showPartyTypeSelector = true 
}: CalculatorProps) {
  const [adults, setAdults] = useState(10);
  const [kids, setKids] = useState(0);
  const [partyType, setPartyType] = useState(defaultPartyType);
  const [duration, setDuration] = useState(3);

  const handleCalculate = () => {
    onCalculate(adults, kids, partyType, duration);
  };

  const adjustValue = (current: number, delta: number, min: number = 0, max: number = 200) => {
    return Math.max(min, Math.min(max, current + delta));
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-orange-100">
      <div className="space-y-6">
        {/* Adults */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Number of Adults
          </label>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setAdults(adjustValue(adults, -5))}
              className="w-12 h-12 rounded-full bg-orange-500 text-white font-bold text-xl hover:bg-orange-600 transition-all active:scale-95 shadow-md"
            >
              -
            </button>
            <div className="flex-1 text-center">
              <input
                type="number"
                value={adults}
                onChange={(e) => setAdults(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full text-3xl font-bold text-center text-gray-800 border-b-2 border-orange-200 focus:border-orange-500 outline-none pb-1"
              />
            </div>
            <button
              onClick={() => setAdults(adjustValue(adults, 5))}
              className="w-12 h-12 rounded-full bg-orange-500 text-white font-bold text-xl hover:bg-orange-600 transition-all active:scale-95 shadow-md"
            >
              +
            </button>
          </div>
        </div>

        {/* Kids */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Number of Kids
          </label>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setKids(adjustValue(kids, -5))}
              className="w-12 h-12 rounded-full bg-green-500 text-white font-bold text-xl hover:bg-green-600 transition-all active:scale-95 shadow-md"
            >
              -
            </button>
            <div className="flex-1 text-center">
              <input
                type="number"
                value={kids}
                onChange={(e) => setKids(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full text-3xl font-bold text-center text-gray-800 border-b-2 border-green-200 focus:border-green-500 outline-none pb-1"
              />
            </div>
            <button
              onClick={() => setKids(adjustValue(kids, 5))}
              className="w-12 h-12 rounded-full bg-green-500 text-white font-bold text-xl hover:bg-green-600 transition-all active:scale-95 shadow-md"
            >
              +
            </button>
          </div>
        </div>

        {/* Party Type */}
        {showPartyTypeSelector && (
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Party Type
            </label>
            <select
              value={partyType}
              onChange={(e) => setPartyType(e.target.value)}
              className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-orange-500 outline-none transition-colors bg-white"
            >
              {partyTypes.map((pt) => (
                <option key={pt.id} value={pt.id}>
                  {pt.name} — {pt.description}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Duration */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Duration: {duration} hours
          </label>
          <input
            type="range"
            min="1"
            max="8"
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value))}
            className="w-full h-3 bg-orange-100 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1h</span>
            <span>8h</span>
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={handleCalculate}
          className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl active:scale-98"
        >
          Calculate Food Needed 🎉
        </button>
      </div>
    </div>
  );
}
