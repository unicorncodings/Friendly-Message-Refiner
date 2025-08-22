
import React from 'react';

interface MessageInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const MessageInput: React.FC<MessageInputProps> = ({ value, onChange }) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Type or paste your message here... (e.g., 'sorry for the delay, fix will be deployed soon' or 'delay ekata sorry, fix eka danawa ikmanata')"
      className="w-full h-36 p-4 bg-slate-900/70 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none transition duration-200 resize-none"
    />
  );
};
