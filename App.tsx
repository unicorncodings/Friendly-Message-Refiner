
import React, { useState, useCallback } from 'react';
import { refineMessage } from './services/geminiService';
import { Tone } from './types';
import { TONES } from './constants';
import { Header } from './components/Header';
import { ToneSelector } from './components/ToneSelector';
import { MessageInput } from './components/MessageInput';
import { MessageOutput } from './components/MessageOutput';
import { Loader } from './components/Loader';
import { ErrorDisplay } from './components/ErrorDisplay';
import { RefineButton } from './components/RefineButton';

const App: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [outputText, setOutputText] = useState<string>('');
  const [selectedTone, setSelectedTone] = useState<Tone>(TONES[0]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleRefine = useCallback(async () => {
    if (!inputText.trim()) {
      setError('Please enter a message to refine.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setOutputText('');

    try {
      const result = await refineMessage(inputText, selectedTone);
      setOutputText(result);
    } catch (err) {
      setError(
        err instanceof Error
          ? `An error occurred: ${err.message}`
          : 'An unknown error occurred. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  }, [inputText, selectedTone]);

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans flex flex-col items-center p-4 selection:bg-sky-400 selection:text-slate-900">
      <div className="w-full max-w-4xl mx-auto">
        <Header />
        <main className="mt-8">
          <div className="w-full bg-slate-800/50 rounded-xl shadow-2xl shadow-sky-900/20 backdrop-blur-sm border border-slate-700">
            <div className="p-6 md:p-8">
              <h2 className="text-lg font-semibold text-slate-300 mb-4">
                1. Select a Tone
              </h2>
              <ToneSelector
                tones={TONES}
                selectedTone={selectedTone}
                onSelectTone={setSelectedTone}
              />
              <h2 className="text-lg font-semibold text-slate-300 mt-6 mb-4">
                2. Enter Your Message
              </h2>
              <MessageInput value={inputText} onChange={setInputText} />
              <div className="mt-6 flex justify-center">
                <RefineButton onClick={handleRefine} isLoading={isLoading} />
              </div>
            </div>

            {(isLoading || error || outputText) && (
              <div className="border-t border-slate-700 p-6 md:p-8">
                <h2 className="text-lg font-semibold text-slate-300 mb-4">
                  3. Your Refined Message
                </h2>
                {isLoading && <Loader />}
                {error && <ErrorDisplay message={error} />}
                {outputText && !isLoading && <MessageOutput text={outputText} />}
              </div>
            )}
          </div>
        </main>
        <footer className="text-center mt-12 text-slate-500 text-sm">
          <p>
            Powered by AI. Generated messages may require final review.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
