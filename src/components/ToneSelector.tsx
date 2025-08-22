
import React from 'react';
import { Tone } from '../types.ts';

interface ToneSelectorProps {
  tones: Tone[];
  selectedTone: Tone;
  onSelectTone: (tone: Tone) => void;
}

export const ToneSelector: React.FC<ToneSelectorProps> = ({
  tones,
  selectedTone,
  onSelectTone,
}) => {
  return (
    <div className="flex flex-wrap gap-2 md:gap-3">
      {tones.map((tone) => (
        <button
          key={tone}
          onClick={() => onSelectTone(tone)}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-sky-500 ${
            selectedTone === tone
              ? 'bg-sky-500 text-white shadow-md'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          {tone}
        </button>
      ))}
    </div>
  );
};