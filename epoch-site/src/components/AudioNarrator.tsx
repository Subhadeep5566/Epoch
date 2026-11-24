/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  FastForward, 
  Sparkles,
  Headphones,
  Maximize2,
  X
} from 'lucide-react';

interface AudioNarratorProps {
  title: string;
  authorOrCurator?: string;
  narrativeText: string;
  onClose?: () => void;
}

export const AudioNarrator: React.FC<AudioNarratorProps> = ({
  title,
  authorOrCurator = 'EPOCH Curatorial Narration Service',
  narrativeText,
  onClose
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [progress, setProgress] = useState<number>(0);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState<number>(0);

  // Split text into sentences for synchronized closed captions
  const sentences = React.useMemo(() => {
    return narrativeText
      .split(/(?<=[.?!])\s+/)
      .filter(s => s.trim().length > 0);
  }, [narrativeText]);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported in this browser environment.');
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.pause();
      setIsPlaying(false);
    } else {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        setIsPlaying(true);
      } else {
        window.speechSynthesis.cancel();

        // Speak remaining sentences from currentSentenceIndex
        const remainingText = sentences.slice(currentSentenceIndex).join(' ');
        const utterance = new SpeechSynthesisUtterance(remainingText || narrativeText);
        utterance.rate = playbackSpeed;
        utterance.pitch = 0.95; // slightly deep documentary timbre

        // Try to pick an English voice with good timbre
        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('David') || v.name.includes('Daniel')));
        if (preferredVoice) utterance.voice = preferredVoice;

        utterance.onboundary = (event) => {
          if (event.name === 'sentence' || event.charIndex !== undefined) {
            // Estimate sentence progress
            const ratio = event.charIndex / (remainingText.length || 1);
            const relativeIdx = Math.min(
              Math.floor(ratio * sentences.slice(currentSentenceIndex).length),
              sentences.slice(currentSentenceIndex).length - 1
            );
            const globalIdx = currentSentenceIndex + Math.max(0, relativeIdx);
            setCurrentSentenceIndex(globalIdx);
            setProgress(Math.round(((globalIdx + 1) / sentences.length) * 100));
          }
        };

        utterance.onend = () => {
          setIsPlaying(false);
          setProgress(100);
          setCurrentSentenceIndex(sentences.length - 1);
        };

        utterance.onerror = () => {
          setIsPlaying(false);
        };

        utteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
        setIsPlaying(true);
      }
    }
  };

  const handleReset = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setProgress(0);
    setCurrentSentenceIndex(0);
  };

  const handleSpeedChange = (newSpeed: number) => {
    setPlaybackSpeed(newSpeed);
    if (isPlaying) {
      handlePlayPause();
      setTimeout(handlePlayPause, 100);
    }
  };

  return (
    <div className="border border-white/20 bg-[#121410] p-5 shadow-2xl relative">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Headphones className="w-4 h-4 text-[#D7FF00]" />
          <span className="font-mono text-[10px] text-[#D7FF00] uppercase tracking-widest font-bold">
            ARCHIVAL AUDIO NARRATOR
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] text-neutral-400">
            {progress}% COMPLETE
          </span>
          {onClose && (
            <button onClick={onClose} className="text-neutral-400 hover:text-white p-1">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-oswald text-xl text-white uppercase tracking-tight mb-1 truncate">
        {title}
      </h3>
      <span className="font-mono text-[10px] text-neutral-400 block mb-4">
        {authorOrCurator}
      </span>

      {/* Progress Track */}
      <div className="w-full bg-[#090A08] h-1.5 border border-white/10 mb-4 overflow-hidden">
        <div 
          className="bg-[#D7FF00] h-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Synchronized Closed Caption Box */}
      <div className="p-3 bg-[#090A08] border border-white/10 min-h-[60px] flex items-center mb-4">
        <p className="font-serif italic text-xs text-neutral-200 leading-relaxed">
          "{sentences[currentSentenceIndex] || sentences[0] || 'Audio narration ready.'}"
        </p>
      </div>

      {/* Controls Bar */}
      <div className="flex items-center justify-between gap-4 font-mono text-xs">
        
        {/* Play/Pause & Reset */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePlayPause}
            className="flex items-center gap-2 bg-[#D7FF00] hover:bg-[#c5ec00] text-[#090A08] px-4 py-2 font-bold uppercase transition-colors cursor-pointer"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Listen</span>
              </>
            )}
          </button>

          <button
            onClick={handleReset}
            className="p-2 border border-white/15 text-neutral-300 hover:text-[#D7FF00] transition-colors cursor-pointer"
            title="Restart Audio"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Speed Selector */}
        <div className="flex items-center gap-1">
          <span className="text-[10px] text-neutral-500 uppercase mr-1">Speed:</span>
          {[0.75, 1.0, 1.25, 1.5].map(speed => (
            <button
              key={speed}
              onClick={() => handleSpeedChange(speed)}
              className={`px-1.5 py-0.5 text-[10px] border transition-colors cursor-pointer ${
                playbackSpeed === speed
                  ? 'border-[#D7FF00] text-[#D7FF00] bg-[#D7FF00]/10 font-bold'
                  : 'border-white/10 text-neutral-400 hover:text-white'
              }`}
            >
              {speed}x
            </button>
          ))}
        </div>

      </div>

    </div>
  );
};
