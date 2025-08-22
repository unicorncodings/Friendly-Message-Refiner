
import React from 'react';
import { SparklesIcon } from './icons.tsx';

export const Header: React.FC = () => (
  <header className="text-center">
    <div className="flex items-center justify-center gap-3">
      <SparklesIcon className="w-8 h-8 text-sky-400" />
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 to-cyan-300 text-transparent bg-clip-text">
        Friendly Message Refiner
      </h1>
    </div>
    <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
      Instantly transform your rough notes in English, Sinhala, or Singlish into polished, customer-ready messages.
    </p>
  </header>
);