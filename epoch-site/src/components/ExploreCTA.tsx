import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

interface ExploreCTAProps {
  onBeginJourney: () => void;
}

export const ExploreCTA: React.FC<ExploreCTAProps> = ({ onBeginJourney }) => {
  return (
    <section id="archive" className="bg-[#090A08] py-28 px-6 lg:px-12 border-b border-white/10 scroll-mt-20 relative z-20 overflow-hidden">
      
      {/* Background Subtle Archival Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#D7FF00_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-5xl mx-auto bg-[#121410] border border-white/20 p-10 sm:p-16 relative z-10 text-center flex flex-col items-center gap-8 shadow-2xl">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D7FF00] uppercase tracking-widest bg-[#090A08] px-3.5 py-1.5 border border-white/15">
          <Compass className="w-4 h-4 text-[#D7FF00]" />
          <span>EPOCH GLOBAL ARCHIVE EXPLORER</span>
        </div>

        <h2 className="font-oswald text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight max-w-3xl leading-tight">
          THE PAST IS <br />
          <span className="text-[#D7FF00]">OUR FOUNDATION.</span>
        </h2>

        <p className="font-manrope text-neutral-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
          Every civilization left a story. Every generation challenged the limits of knowledge. Explore the complete digital archive to discover how humanity became what it is today.
        </p>

        <button
          onClick={onBeginJourney}
          className="flex items-center gap-3 bg-[#D7FF00] text-[#090A08] px-9 py-4 font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-all cursor-pointer shadow-xl hover:scale-105"
        >
          <span>Begin Your Archival Journey</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
