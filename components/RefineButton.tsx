
import React from 'react';
import { SparklesIcon } from './icons';

interface RefineButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

export const RefineButton: React.FC<RefineButtonProps> = ({ onClick, isLoading }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold text-white bg-sky-600 rounded-full shadow-lg hover:bg-sky-500 disabled:bg-sky-800 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-sky-500"
    >
      {isLoading ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Refining...
        </>
      ) : (
        <>
          <SparklesIcon className="w-5 h-5" />
          Refine Message
        </>
      )}
    </button>
  );
};
