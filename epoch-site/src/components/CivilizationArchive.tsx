import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface Civilization {
  id: string;
  name: string;
  region: string;
  period: string;
  description: string;
  image: string;
}

interface CivilizationArchiveProps {
  onSelectCivilization: (civ: Civilization) => void;
  onViewAll: () => void;
}

export const civilizationsData: Civilization[] = [
  {
    id: 'indus-valley',
    name: 'INDUS VALLEY CIVILIZATION',
    region: 'South Asia (Indus & Ghaggar-Hakra Basins)',
    period: 'c. 3300 BCE – 1300 BCE',
    description: 'Pioneers of ancient urban planning featuring orthogonal street grids, standardized baked brick dimensions, municipal covered sewers, and undeciphered script.',
    image: '/src/assets/images/civilization_indus_1795464676243.jpg'
  },
  {
    id: 'ancient-egypt',
    name: 'ANCIENT EGYPT',
    region: 'Northeast Africa (Nile River Valley)',
    period: 'c. 3100 BCE – 30 BCE',
    description: 'Three millennia of monumental stone architecture, hieroglyphic literature, astronomical mathematics, and profound spiritual metaphysics oriented around Ma\'at.',
    image: '/src/assets/images/civilization_egypt_1795464676346.jpg'
  },
  {
    id: 'mesopotamia',
    name: 'MESOPOTAMIA',
    region: 'Western Asia (Tigris-Euphrates River Basin)',
    period: 'c. 3500 BCE – 539 BCE',
    description: 'The cradle of civilization where cuneiform writing, the wheel, monumental ziggurats, sexagesimal arithmetic (base 60), and the Code of Hammurabi were forged.',
    image: '/src/assets/images/civilization_mesopotamia_1795464677085.jpg'
  }
];

export const CivilizationArchive: React.FC<CivilizationArchiveProps> = ({ onSelectCivilization, onViewAll }) => {
  return (
    <section id="civilizations" className="bg-[#090A08] py-28 px-6 lg:px-12 border-b border-white/10 scroll-mt-20 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs tracking-widest text-[#D7FF00] uppercase block mb-2">
              // 03. CIVILIZATIONS
            </span>
            <h2 className="font-oswald text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
              CIVILIZATIONS THAT <br />
              <span className="text-[#D7FF00]">BUILT OUR WORLD.</span>
            </h2>
          </div>
          <button
            onClick={onViewAll}
            className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-white hover:text-[#D7FF00] transition-colors self-start md:self-auto cursor-pointer"
          >
            <span>View All Civilizations Index</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3-Column Equal Height Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {civilizationsData.map((civ) => (
            <div
              key={civ.id}
              onClick={() => onSelectCivilization(civ)}
              className="bg-[#121410] border border-white/15 flex flex-col justify-between group hover:border-[#D7FF00]/60 transition-all duration-300 cursor-pointer overflow-hidden h-full"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900 border-b border-white/10 shrink-0">
                <div className="absolute top-3 left-3 z-10 font-mono text-[10px] bg-[#090A08]/90 backdrop-blur-sm text-[#D7FF00] px-2.5 py-1 border border-white/15">
                  {civ.period}
                </div>
                <img
                  src={civ.image}
                  alt={civ.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow justify-between gap-6">
                <div>
                  <span className="font-mono text-[11px] text-neutral-400 block mb-2 uppercase">
                    {civ.region}
                  </span>
                  <h3 className="font-oswald text-2xl text-white uppercase tracking-wider group-hover:text-[#D7FF00] transition-colors mb-4">
                    {civ.name}
                  </h3>
                  <p className="font-manrope text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                    {civ.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs uppercase text-[#D7FF00]">
                  <span>Explore Civilization Monograph</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
