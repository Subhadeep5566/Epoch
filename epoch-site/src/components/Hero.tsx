import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

interface HeroProps {
  onExploreTimeline: () => void;
  onExploreCivilizations: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreTimeline, onExploreCivilizations }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center bg-[#090A08] border-b border-white/10 overflow-hidden px-6 lg:px-12 py-16">
      {/* Background grid lines & crosshair marks */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white/20" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-white/20" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-white/20" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-white/20" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#D7FF00] uppercase">
            <span className="w-2 h-2 bg-[#D7FF00] rounded-full animate-pulse" />
            <span>A JOURNEY THROUGH HUMAN HISTORY</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-oswald text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white uppercase leading-[0.95]">
            THE <span className="text-[#D7FF00]">STORY</span><br />
            OF <span className="text-[#D7FF00]">HUMANITY.</span>
          </h1>

          {/* Subtitle */}
          <p className="font-manrope text-lg text-neutral-400 max-w-xl font-light leading-relaxed">
            From the first human footsteps to the complex global civilization we have built. Explore millennia of knowledge, culture, empire, and evolution.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onExploreTimeline}
              className="flex items-center gap-3 bg-[#D7FF00] text-[#090A08] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
            >
              <span>Explore The Timeline</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onExploreCivilizations}
              className="flex items-center gap-3 bg-transparent border border-white/20 text-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider hover:border-[#D7FF00] hover:text-[#D7FF00] transition-colors cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              <span>Civilization Archive</span>
            </button>
          </div>

          {/* Metadata statistics snippet */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 w-full max-w-lg mt-4 font-mono text-xs text-neutral-400">
            <div>
              <span className="block font-oswald text-2xl text-white">300K+</span>
              <span>Years Documented</span>
            </div>
            <div>
              <span className="block font-oswald text-2xl text-white">100+</span>
              <span>Civilizations</span>
            </div>
            <div>
              <span className="block font-oswald text-2xl text-white">7</span>
              <span>Continents</span>
            </div>
          </div>
        </div>

        {/* Right Column: Dramatic Image */}
        <div className="lg:col-span-5 relative">
          <div className="relative group border border-white/15 p-2 bg-[#121410]">
            <div className="absolute -top-3 -left-3 font-mono text-[10px] text-[#D7FF00] bg-[#090A08] px-2 py-0.5 border border-white/20 z-20">
              ARCHIVE // REF 01-ORIGINS
            </div>
            <div className="overflow-hidden aspect-[4/3] lg:aspect-[3/4]">
              <img
                src="/src/assets/images/hero_ancient_history_1795464676030.jpg"
                alt="Ancient human origin and megalithic architecture"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 font-mono text-[10px] text-neutral-400 bg-[#090A08] px-2 py-0.5 border border-white/20 z-25">
              MEGALITHIC ERA // C. 3000 BCE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
