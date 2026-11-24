import React from 'react';

export const HistoryStats: React.FC = () => {
  return (
    <section id="stats" className="bg-[#090A08] py-28 px-6 lg:px-12 border-b border-white/10 scroll-mt-20 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs tracking-widest text-[#D7FF00] uppercase block mb-2">
            // 02. SCALE & SCOPE
          </span>
          <h2 className="font-oswald text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
            THE SCALE OF <span className="text-[#D7FF00]">HUMAN HISTORY.</span>
          </h2>
        </div>

        {/* Asymmetric 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: 300,000+ Years */}
          <div className="md:col-span-7 bg-[#121410] border border-white/15 p-8 sm:p-12 flex flex-col justify-between relative group hover:border-[#D7FF00]/50 transition-colors">
            <div className="absolute top-6 right-6 font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
              EST. TIMEFRAME
            </div>
            <div>
              <span className="font-oswald text-6xl sm:text-8xl lg:text-9xl font-bold text-[#D7FF00] tracking-tight block mb-4 leading-none">
                300K+
              </span>
              <h3 className="font-oswald text-2xl sm:text-3xl text-white uppercase tracking-wider">
                Years of Human History
              </h3>
            </div>
            <p className="font-manrope text-sm text-neutral-400 mt-6 max-w-md leading-relaxed font-light">
              From early Homo sapiens in the African Rift Valley through the Agricultural Revolution to the interplanetary age.
            </p>
          </div>

          {/* Card 2: 7 Continents */}
          <div className="md:col-span-5 bg-[#121410] border border-white/15 p-8 sm:p-12 flex flex-col justify-between relative group hover:border-[#D7FF00]/50 transition-colors">
            <div className="absolute top-6 right-6 font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
              GLOBAL SPAN
            </div>
            <div>
              <span className="font-oswald text-6xl sm:text-8xl lg:text-9xl font-bold text-white group-hover:text-[#D7FF00] transition-colors tracking-tight block mb-4 leading-none">
                7
              </span>
              <h3 className="font-oswald text-2xl sm:text-3xl text-white uppercase tracking-wider">
                Inhabited Continents
              </h3>
            </div>
            <p className="font-manrope text-sm text-neutral-400 mt-6 leading-relaxed font-light">
              Diverse societies flourishing across every major geographical expanse on Earth.
            </p>
          </div>

          {/* Card 3: Thousands Civilizations */}
          <div className="md:col-span-5 bg-[#121410] border border-white/15 p-8 sm:p-12 flex flex-col justify-between relative group hover:border-[#D7FF00]/50 transition-colors">
            <div className="absolute top-6 right-6 font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
              HERITAGE
            </div>
            <div>
              <span className="font-oswald text-5xl sm:text-7xl font-bold text-white group-hover:text-[#D7FF00] transition-colors tracking-tight block mb-4 leading-none">
                THOUSANDS
              </span>
              <h3 className="font-oswald text-2xl sm:text-3xl text-white uppercase tracking-wider">
                Civilizations & Cultures
              </h3>
            </div>
            <p className="font-manrope text-sm text-neutral-400 mt-6 leading-relaxed font-light">
              Languages, writing systems, legal codes, monuments, and philosophies forged across epochs.
            </p>
          </div>

          {/* Card 4: One Shared Story */}
          <div className="md:col-span-7 bg-[#121410] border border-white/15 p-8 sm:p-12 flex flex-col justify-between relative group hover:border-[#D7FF00]/50 transition-colors">
            <div className="absolute top-6 right-6 font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
              UNITY
            </div>
            <div>
              <span className="font-oswald text-6xl sm:text-8xl lg:text-9xl font-bold text-[#D7FF00] tracking-tight block mb-4 leading-none">
                ONE
              </span>
              <h3 className="font-oswald text-2xl sm:text-3xl text-white uppercase tracking-wider">
                Shared Human Story
              </h3>
            </div>
            <p className="font-manrope text-sm text-neutral-400 mt-6 max-w-md leading-relaxed font-light">
              Connected by migration, maritime trade, artistic expression, and our enduring quest to understand existence.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
