'use client';

import { useState, useRef } from 'react';
import { partyTypes } from '@/lib/foodData';
import { trackCalculate, trackPartyTypeSelect, trackGuestAdjust, trackDurationChange, trackTimeToFirstCalc } from '@/lib/analytics';

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
  const [hasCalculated, setHasCalculated] = useState(false);
  const pageLoadTime = useRef(Date.now());

  const handleCalculate = () => {
    if (!hasCalculated) {
      const secondsToFirst = Math.round((Date.now() - pageLoadTime.current) / 1000);
      trackTimeToFirstCalc(secondsToFirst, window.location.pathname);
      setHasCalculated(true);
    }
    trackCalculate({
      adults,
      kids,
      totalGuests: adults + kids,
      partyType,
      duration,
      page: window.location.pathname,
    });
    onCalculate(adults, kids, partyType, duration);
  };

  const adjustValue = (current: number, delta: number, min: number = 0, max: number = 200) => {
    return Math.max(min, Math.min(max, current + delta));
  };

  const partyTypeEmojis: Record<string, string> = {
    casual: '🎈',
    bbq: '🔥',
    formal: '🥂',
    cocktail: '🍸',
    kids: '🎂',
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-orange-100">
      {/* Calculator Header */}
      <div className="bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 px-6 md:px-8 py-5">
        <h2 className="text-white font-bold text-lg flex items-center gap-2">
          <span className="bg-white/20 rounded-lg p-1.5 text-sm">🧮</span>
          Enter Your Party Details
        </h2>
      </div>

      <div className="p-6 md:p-8 space-y-8">
        {/* Guest Count Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Adults */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-5 border border-orange-100">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-600 uppercase tracking-wide mb-4">
              <span className="text-lg">👤</span> Adults
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setAdults(adjustValue(adults, -1))}
                className="w-11 h-11 rounded-xl bg-white text-orange-600 font-bold text-xl hover:bg-orange-100 transition-all active:scale-90 shadow-sm border border-orange-200 flex items-center justify-center"
              >
                −
              </button>
              <div className="flex-1 text-center">
                <input
                  type="number"
                  value={adults}
                  onChange={(e) => setAdults(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full text-4xl font-extrabold text-center text-gray-800 bg-transparent outline-none"
                />
              </div>
              <button
                onClick={() => setAdults(adjustValue(adults, 1))}
                className="w-11 h-11 rounded-xl bg-orange-500 text-white font-bold text-xl hover:bg-orange-600 transition-all active:scale-90 shadow-sm flex items-center justify-center"
              >
                +
              </button>
            </div>
            {/* Quick presets */}
            <div className="flex gap-2 mt-3 justify-center">
              {[10, 20, 30, 50].map(n => (
                <button key={n} onClick={() => { setAdults(n); trackGuestAdjust('adults', n, 'preset'); }}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${adults === n ? 'bg-orange-500 text-white' : 'bg-white text-gray-500 hover:text-orange-600 border border-gray-200'}`}>
                  {n}
                </button>
              ))}
            </div>
          </div>

          {/* Kids */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-100">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-600 uppercase tracking-wide mb-4">
              <span className="text-lg">👶</span> Kids
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setKids(adjustValue(kids, -1))}
                className="w-11 h-11 rounded-xl bg-white text-green-600 font-bold text-xl hover:bg-green-100 transition-all active:scale-90 shadow-sm border border-green-200 flex items-center justify-center"
              >
                −
              </button>
              <div className="flex-1 text-center">
                <input
                  type="number"
                  value={kids}
                  onChange={(e) => setKids(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full text-4xl font-extrabold text-center text-gray-800 bg-transparent outline-none"
                />
              </div>
              <button
                onClick={() => setKids(adjustValue(kids, 1))}
                className="w-11 h-11 rounded-xl bg-green-500 text-white font-bold text-xl hover:bg-green-600 transition-all active:scale-90 shadow-sm flex items-center justify-center"
              >
                +
              </button>
            </div>
            <div className="flex gap-2 mt-3 justify-center">
              {[0, 5, 10, 15].map(n => (
                <button key={n} onClick={() => { setKids(n); trackGuestAdjust('kids', n, 'preset'); }}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${kids === n ? 'bg-green-500 text-white' : 'bg-white text-gray-500 hover:text-green-600 border border-gray-200'}`}>
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Party Type */}
        {showPartyTypeSelector && (
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-gray-600 uppercase tracking-wide mb-3">
              <span className="text-lg">🎉</span> Party Type
            </label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {partyTypes.map((pt) => (
                <button
                  key={pt.id}
                  onClick={() => { setPartyType(pt.id); trackPartyTypeSelect(pt.id); }}
                  className={`relative p-4 rounded-xl text-center transition-all border-2 ${
                    partyType === pt.id
                      ? 'border-orange-500 bg-orange-50 shadow-md scale-[1.02]'
                      : 'border-gray-200 bg-white hover:border-orange-300 hover:shadow-sm'
                  }`}
                >
                  <div className="text-2xl mb-1">{partyTypeEmojis[pt.id] || '🎈'}</div>
                  <div className={`text-sm font-bold ${partyType === pt.id ? 'text-orange-700' : 'text-gray-700'}`}>
                    {pt.name}
                  </div>
                  {partyType === pt.id && (
                    <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-[10px] leading-none text-white">
                      ✓
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Duration */}
        <div>
          <label className="flex items-center justify-between text-sm font-bold text-gray-600 uppercase tracking-wide mb-3">
            <span className="flex items-center gap-2"><span className="text-lg">⏱️</span> Duration</span>
            <span className="text-2xl font-extrabold text-orange-600 normal-case tracking-normal">{duration}h</span>
          </label>
          <input
            type="range"
            min="1"
            max="8"
            value={duration}
            onChange={(e) => { const v = parseInt(e.target.value); setDuration(v); trackDurationChange(v); }}
            className="w-full h-2 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium px-1">
            <span>1 hour</span>
            <span>4 hours</span>
            <span>8 hours</span>
          </div>
        </div>

        {/* Total Guests Badge */}
        <div className="flex items-center justify-center gap-3 py-3 bg-gray-50 rounded-xl">
          <span className="text-gray-500 text-sm font-medium">Total Guests:</span>
          <span className="text-3xl font-extrabold text-gray-800">{adults + kids}</span>
          <span className="text-gray-400 text-sm">({adults} adults + {kids} kids)</span>
        </div>

        {/* Calculate Button */}
        <button
          onClick={handleCalculate}
          className="w-full py-5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold text-xl rounded-2xl hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg hover:shadow-xl active:scale-[0.98] relative overflow-hidden group"
        >
          Calculate Food Needed 🎉
        </button>
      </div>
    </div>
  );
}
