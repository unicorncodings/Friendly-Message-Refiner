
import React from 'react';

interface ErrorDisplayProps {
  message: string;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => (
  <div className="p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-300">
    <p>{message}</p>
  </div>
);