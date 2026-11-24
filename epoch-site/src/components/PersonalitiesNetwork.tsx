/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Users, 
  ArrowRight, 
  BookOpen, 
  Sparkles, 
  Search, 
  Link2, 
  ShieldCheck, 
  UserCheck, 
  Award,
  Globe,
  ExternalLink
} from 'lucide-react';
import { 
  personalityNetworkNodes, 
  PersonalityNode 
} from '../data/historicalEngineData';

interface PersonalitiesNetworkProps {
  onSelectRecord?: (id: string) => void;
  onBackToHome?: () => void;
}

export const PersonalitiesNetwork: React.FC<PersonalitiesNetworkProps> = ({
  onSelectRecord,
  onBackToHome
}) => {
  const [selectedFigureId, setSelectedFigureId] = useState<string>('socrates');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activeFigure: PersonalityNode = 
    personalityNetworkNodes.find(p => p.id === selectedFigureId) || personalityNetworkNodes[0];

  const filteredFigures = personalityNetworkNodes.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.civilization.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#090A08] text-[#F3F4F6] min-h-screen font-manrope selection:bg-[#D7FF00] selection:text-[#090A08]">
      
      {/* Top Editorial Ribbon */}
      <div className="border-b border-white/10 px-6 lg:px-12 py-6 bg-[#0E100C]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#D7FF00] bg-[#D7FF00]/10 border border-[#D7FF00]/30 px-2 py-0.5 flex items-center gap-1">
                <Users className="w-3 h-3 text-[#D7FF00]" /> Biographical Graph & Mentorship Trees
              </span>
              <span className="font-mono text-[10px] text-neutral-400 tracking-wider">
                DOCUMENTED HISTORICAL TIES
              </span>
            </div>
            <h1 className="font-oswald text-3xl md:text-5xl text-white uppercase tracking-tight">
              HISTORICAL PERSONALITIES NETWORK
            </h1>
            <p className="font-serif italic text-neutral-300 text-sm md:text-base max-w-2xl mt-1">
              Explore the intellectual lineages, political alliances, bitter rivalries, and philosophical successions that forged human civilization.
            </p>
          </div>

          {onBackToHome && (
            <button
              onClick={onBackToHome}
              className="font-mono text-xs uppercase tracking-widest text-neutral-400 hover:text-[#D7FF00] border border-white/15 hover:border-[#D7FF00]/40 px-4 py-2 self-start md:self-auto transition-colors cursor-pointer"
            >
              ← Return to Front Page
            </button>
          )}
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Personalities Directory / Selector (4 cols) */}
        <div className="lg:col-span-4 bg-[#121410] border border-white/15 p-6 flex flex-col h-[750px] shadow-xl">
          <div className="mb-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#D7FF00] block mb-2">
              FIGURE ROSTER ({personalityNetworkNodes.length} NODES)
            </span>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-500" />
              <input
                type="text"
                placeholder="Filter by name or society..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#090A08] border border-white/20 pl-8 pr-3 py-1.5 text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-[#D7FF00]"
              />
            </div>
          </div>

          <div className="overflow-y-auto space-y-2 pr-1 divide-y divide-white/5 flex-1">
            {filteredFigures.map((fig) => {
              const isSelected = fig.id === selectedFigureId;
              return (
                <button
                  key={fig.id}
                  onClick={() => setSelectedFigureId(fig.id)}
                  className={`w-full text-left p-3 pt-3.5 transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#181B15] border-l-2 border-[#D7FF00] pl-3.5'
                      : 'hover:bg-white/5 border-l-2 border-transparent'
                  }`}
                >
                  <div>
                    <h4 className={`font-oswald text-lg uppercase tracking-wide ${
                      isSelected ? 'text-[#D7FF00]' : 'text-white'
                    }`}>
                      {fig.name}
                    </h4>
                    <span className="font-mono text-[10px] text-neutral-400 block truncate max-w-[200px]">
                      {fig.civilization} // {fig.birthYear}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#A88B55] border border-white/10 px-1.5 py-0.5">
                    {fig.relationships.length} TIES
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Detailed Biography & Relational Graph (8 cols) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Main Figure Hero Dossier */}
          <div className="border border-white/15 bg-[#0E100C] p-6 lg:p-8 relative shadow-2xl">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              
              {/* Figure Portrait Framing */}
              <div className="w-32 h-40 shrink-0 bg-black border border-white/15 overflow-hidden">
                <img
                  src={activeFigure.imageUrl}
                  alt={activeFigure.name}
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>

              {/* Bio & Lifespan */}
              <div className="flex-1">
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
                  <span className="font-mono text-[10px] text-[#D7FF00] uppercase tracking-widest">
                    {activeFigure.period}
                  </span>
                  <span className="font-mono text-xs text-neutral-400">
                    LIVED: {activeFigure.birthYear} – {activeFigure.deathYear}
                  </span>
                </div>

                <h2 className="font-oswald text-3xl md:text-4xl text-white uppercase tracking-tight mb-1">
                  {activeFigure.name}
                </h2>
                
                <span className="font-mono text-xs text-[#A88B55] block mb-3">
                  {activeFigure.title} // {activeFigure.geography}
                </span>

                <p className="font-serif text-sm md:text-base text-neutral-200 leading-relaxed mb-4">
                  {activeFigure.bio}
                </p>

                <div className="p-3 bg-[#121410] border border-white/10 text-xs font-mono text-neutral-300">
                  <span className="text-[#D7FF00] uppercase font-bold block mb-1">Historical Influence:</span>
                  <span>{activeFigure.influence}</span>
                </div>
              </div>

            </div>

            {activeFigure.recordId && onSelectRecord && (
              <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => onSelectRecord(activeFigure.recordId!)}
                  className="font-mono text-xs uppercase tracking-wider text-[#D7FF00] hover:underline flex items-center gap-1.5 cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Open Complete Biographical Monograph</span>
                </button>
              </div>
            )}
          </div>

          {/* Relational Web Ties */}
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6">
              <h3 className="font-oswald text-2xl text-white uppercase tracking-wider flex items-center gap-2">
                <Link2 className="w-5 h-5 text-[#D7FF00]" />
                INTERCONNECTED HISTORICAL RELATIONSHIPS
              </h3>
              <span className="font-mono text-xs text-neutral-500">
                CLICK ANY CONNECTION TO NAVIGATE
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeFigure.relationships.map((rel, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    const exists = personalityNetworkNodes.some(p => p.id === rel.targetId);
                    if (exists) setSelectedFigureId(rel.targetId);
                  }}
                  className="p-5 border border-white/10 bg-[#121410] hover:border-[#D7FF00] transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2.5">
                      <span className="font-mono text-[10px] text-[#D7FF00] uppercase tracking-widest border border-[#D7FF00]/40 px-1.5 py-0.5">
                        {rel.type.toUpperCase()}
                      </span>
                      <span className="font-mono text-[9px] text-neutral-500 uppercase">
                        {rel.provenance.replace('_', ' ')}
                      </span>
                    </div>

                    <h4 className="font-oswald text-xl text-white uppercase tracking-wide group-hover:text-[#D7FF00] transition-colors mb-2">
                      {rel.targetName}
                    </h4>

                    <p className="font-serif text-xs text-neutral-300 leading-relaxed">
                      {rel.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-neutral-400">
                    <span className="group-hover:text-white">Inspect Dossier</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform text-[#D7FF00]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
