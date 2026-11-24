import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';

interface EditorialFeatureProps {
  onDiscoverOrigins: () => void;
}

export const EditorialFeature: React.FC<EditorialFeatureProps> = ({ onDiscoverOrigins }) => {
  return (
    <section id="origins" className="bg-[#090A08] py-28 px-6 lg:px-12 border-b border-white/10 scroll-mt-20 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Editorial Image & Archival Frame */}
        <div className="lg:col-span-6 relative">
          <div className="border border-white/15 p-2 bg-[#121410] shadow-2xl">
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border border-white/10">
              <div className="absolute top-4 left-4 z-20 font-mono text-[10px] text-[#D7FF00] bg-[#090A08]/90 px-3 py-1 border border-white/20">
                PALEOLITHIC ERA // C. 35,000 BCE
              </div>
              <img
                src="/src/assets/images/editorial_origins_1795464676722.jpg"
                alt="Prehistoric cave art and firelight"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 right-4 z-20 font-mono text-[10px] text-neutral-400 bg-[#090A08]/90 px-3 py-1 border border-white/20">
                CAVE ART & EARLY SYMBOLISM
              </div>
            </div>

            {/* Sub-caption metadata box */}
            <div className="mt-3 p-3 bg-[#090A08] border border-white/10 font-mono text-[11px] text-neutral-400 flex items-center justify-between">
              <span>ARCHAEOLOGICAL SITE // EL CASTILLO & CHAUVET</span>
              <span className="text-[#D7FF00]">300K+ YEARS OF MEMORY</span>
            </div>
          </div>
        </div>

        {/* Right Side: Editorial Prose & Structured Milestones */}
        <div className="lg:col-span-6 flex flex-col items-start gap-6 lg:pl-6">
          <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#D7FF00] uppercase">
            <Flame className="w-4 h-4 text-[#D7FF00]" />
            <span>// 04. HUMAN ORIGINS</span>
          </div>

          <h2 className="font-oswald text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[0.95]">
            BEFORE THE WORLD <br />
            <span className="text-[#D7FF00]">WE KNOW TODAY.</span>
          </h2>

          <p className="font-manrope text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Explore the profound deep origins of humanity—from tool making and the control of fire in the Pleistocene epoch to the dawn of symbolic communication, ritual burial, and the first agricultural settlements in the Fertile Crescent.
          </p>

          <ul className="space-y-3 font-mono text-xs text-neutral-300 w-full pt-2">
            <li className="flex items-center gap-3 border-b border-white/10 pb-3">
              <span className="w-1.5 h-1.5 bg-[#D7FF00] shrink-0" />
              <span>Cognitive Revolution & Emergence of Complex Language</span>
            </li>
            <li className="flex items-center gap-3 border-b border-white/10 pb-3">
              <span className="w-1.5 h-1.5 bg-[#D7FF00] shrink-0" />
              <span>Domestication of Grains, Livestock & Hydraulic Canal Control</span>
            </li>
            <li className="flex items-center gap-3 border-b border-white/10 pb-3">
              <span className="w-1.5 h-1.5 bg-[#D7FF00] shrink-0" />
              <span>Transition from Nomadic Foraging Bands to Walled City-States</span>
            </li>
          </ul>

          <div className="pt-4">
            <button
              onClick={onDiscoverOrigins}
              className="flex items-center gap-3 bg-[#D7FF00] text-[#090A08] px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-all cursor-pointer shadow-xl"
            >
              <span>Discover Human Origins Monograph</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
