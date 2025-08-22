
import React, { useState } from 'react';
import { CopyIcon, CheckIcon } from './icons.tsx';

interface MessageOutputProps {
  text: string;
}

export const MessageOutput: React.FC<MessageOutputProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative p-4 bg-slate-900/70 border border-slate-700 rounded-lg">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 bg-slate-700 hover:bg-slate-600 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
        aria-label="Copy to clipboard"
      >
        {copied ? (
          <CheckIcon className="w-5 h-5 text-green-400" />
        ) : (
          <CopyIcon className="w-5 h-5 text-slate-400" />
        )}
      </button>
      <p className="text-slate-200 whitespace-pre-wrap pr-8">{text}</p>
    </div>
  );
};