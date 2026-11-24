import React from 'react';
import { ArrowRight, ShieldAlert } from 'lucide-react';

export interface ConflictItem {
  id: string;
  name: string;
  dates: string;
  participants: string;
  description: string;
  image: string;
}

interface WarArchiveProps {
  onSelectConflict: (conflict: ConflictItem) => void;
  onViewAllConflicts: () => void;
}

export const conflictsData: ConflictItem[] = [
  {
    id: 'world-war-ii',
    name: 'WORLD WAR II: THE GLOBAL CONFLAGRATION',
    dates: '1939 – 1945 CE',
    participants: 'Global Coalition (Allies vs. Axis Powers)',
    description: 'The deadliest conflict in recorded human history, resulting in 70+ million fatalities, the Holocaust, the collapse of European colonial empires, and the threshold of the atomic age.',
    image: '/src/assets/images/conflict_wwii_1795464677003.jpg'
  },
  {
    id: 'kalinga-war',
    name: 'THE KALINGA WAR & THE RENUNCIATION OF VIOLENCE',
    dates: 'c. 261 BCE',
    participants: 'Maurya Empire vs. Sovereign Republic of Kalinga',
    description: 'A brutal ancient campaign in eastern India whose immense human suffering moved Emperor Ashoka to renounce military conquest, adopt Ahimsa (non-violence), and pioneer state-sponsored humanitarianism.',
    image: '/src/assets/images/figure_ashoka_1795464677327.jpg'
  },
  {
    id: 'world-war-i',
    name: 'WORLD WAR I: INDUSTRIALIZED WAR & EMPIRE COLLAPSE',
    dates: '1914 – 1918 CE',
    participants: 'Allied Powers vs. Central Powers',
    description: 'The Great War that mechanized warfare through trench combat, chemical weapons, and aviation, resulting in the collapse of the Russian, German, Austro-Hungarian, and Ottoman empires.',
    image: '/src/assets/images/hero_ancient_history_1795464676030.jpg'
  }
];

export const WarArchive: React.FC<WarArchiveProps> = ({ onSelectConflict, onViewAllConflicts }) => {
  return (
    <section id="conflicts" className="bg-[#090A08] py-28 px-6 lg:px-12 border-b border-white/10 scroll-mt-20 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#D7FF00] uppercase mb-2">
              <ShieldAlert className="w-4 h-4 text-[#D7FF00]" />
              <span>// 06. CONFLICT ARCHIVE</span>
            </div>
            <h2 className="font-oswald text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
              CONFLICTS THAT <br />
              <span className="text-[#D7FF00]">CHANGED THE WORLD.</span>
            </h2>
          </div>
          <button
            onClick={onViewAllConflicts}
            className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-white hover:text-[#D7FF00] transition-colors self-start md:self-auto cursor-pointer"
          >
            <span>View All Conflicts Index</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Master Balanced Layout */}
        <div className="space-y-8">
          
          {/* Top Featured Conflict: World War II */}
          <div
            onClick={() => onSelectConflict(conflictsData[0])}
            className="bg-[#121410] border border-white/15 p-8 sm:p-12 group hover:border-[#D7FF00]/60 transition-all cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4 font-mono text-xs">
                  <span className="bg-[#641F25] text-white px-2.5 py-1 font-bold uppercase">
                    FEATURED MONOGRAPH
                  </span>
                  <span className="text-[#D7FF00] bg-[#090A08] px-2.5 py-1 border border-white/10">
                    {conflictsData[0].dates}
                  </span>
                  <span className="text-neutral-400">GLOBAL THEATER</span>
                </div>

                <h3 className="font-oswald text-3xl sm:text-4xl text-white uppercase tracking-wider group-hover:text-[#D7FF00] transition-colors mb-3">
                  {conflictsData[0].name}
                </h3>

                <p className="font-mono text-xs text-neutral-400 mb-4 uppercase tracking-wider">
                  Participants: {conflictsData[0].participants}
                </p>

                <p className="font-manrope text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                  {conflictsData[0].description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs uppercase text-[#D7FF00]">
                <span>Read Complete World War II Monograph</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="lg:col-span-5 aspect-[16/10] overflow-hidden border border-white/15 bg-neutral-900">
              <img
                src={conflictsData[0].image}
                alt={conflictsData[0].name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Bottom Row: Two Balanced Secondary Conflicts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {conflictsData.slice(1).map((conflict) => (
              <div
                key={conflict.id}
                onClick={() => onSelectConflict(conflict)}
                className="bg-[#121410] border border-white/15 p-8 flex flex-col justify-between group hover:border-[#D7FF00]/60 transition-all cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 font-mono text-xs">
                    <span className="text-[#D7FF00] bg-[#090A08] px-2.5 py-1 border border-white/10">
                      {conflict.dates}
                    </span>
                    <span className="text-neutral-500 uppercase text-[10px]">HISTORICAL IMPACT</span>
                  </div>

                  <h3 className="font-oswald text-2xl text-white uppercase tracking-wider group-hover:text-[#D7FF00] transition-colors mb-2">
                    {conflict.name}
                  </h3>

                  <p className="font-mono text-xs text-neutral-400 mb-4 uppercase">
                    {conflict.participants}
                  </p>

                  <p className="font-manrope text-xs sm:text-sm text-neutral-300 line-clamp-3 leading-relaxed font-light">
                    {conflict.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs uppercase text-[#D7FF00]">
                  <span>Explore Conflict Monograph</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
