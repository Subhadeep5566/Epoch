/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Calendar, 
  Globe, 
  Clock, 
  Compass, 
  ArrowRight, 
  BookOpen, 
  Filter,
  Layers,
  ChevronRight,
  Sparkles,
  MapPin
} from 'lucide-react';
import { globalSyncSnapshots, GlobalSyncEvent } from '../data/historicalEngineData';

interface LivingTimelineProps {
  onSelectRecord?: (id: string) => void;
  onBackToHome?: () => void;
  onOpenAtlasLocation?: (lat: number, lng: number) => void;
}

export const LivingTimeline: React.FC<LivingTimelineProps> = ({
  onSelectRecord,
  onBackToHome,
  onOpenAtlasLocation
}) => {
  const [selectedSnapshotIndex, setSelectedSnapshotIndex] = useState<number>(3); // Defaults to 500 CE
  const [activeRegionTab, setActiveRegionTab] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const currentSnapshot = globalSyncSnapshots[selectedSnapshotIndex] || globalSyncSnapshots[0];

  const categories = [
    { id: 'all', label: 'All Developments' },
    { id: 'politics', label: 'Empires & Politics' },
    { id: 'war', label: 'Conflicts & Wars' },
    { id: 'religion', label: 'Philosophy & Faith' },
    { id: 'science', label: 'Science & Invention' },
    { id: 'culture', label: 'Culture & Daily Life' }
  ];

  const filteredEvents = currentSnapshot.events.filter(e => {
    if (categoryFilter === 'all') return true;
    return e.category === categoryFilter;
  });

  return (
    <div className="bg-[#090A08] text-[#F3F4F6] min-h-screen font-manrope selection:bg-[#D7FF00] selection:text-[#090A08]">
      
      {/* Top Header Banner */}
      <div className="border-b border-white/10 px-6 lg:px-12 py-6 bg-[#0E100C]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#D7FF00] bg-[#D7FF00]/10 border border-[#D7FF00]/30 px-2 py-0.5">
                Living Chronology & Synchronization Engine
              </span>
              <span className="font-mono text-[10px] text-neutral-400 tracking-wider">
                SPAN: 10,000 BCE — 2026 CE
              </span>
            </div>
            <h1 className="font-oswald text-3xl md:text-5xl text-white uppercase tracking-tight">
              THE LIVING TIMELINE
            </h1>
            <p className="font-serif italic text-neutral-300 text-sm md:text-base max-w-2xl mt-1">
              "Where were they then?" Explore what was happening across India, Europe, Africa, China, and the Americas at the exact same moment in human history.
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

      {/* Epoch Stepper Navigation Bar */}
      <div className="border-b border-white/10 bg-[#121410] px-6 lg:px-12 py-4 sticky top-16 z-30 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto flex items-center gap-3 min-w-max">
          <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 flex items-center gap-1.5 mr-2">
            <Clock className="w-3.5 h-3.5 text-[#D7FF00]" /> Select Era:
          </span>

          {globalSyncSnapshots.map((snap, idx) => {
            const isSelected = selectedSnapshotIndex === idx;
            return (
              <button
                key={snap.year}
                onClick={() => setSelectedSnapshotIndex(idx)}
                className={`font-mono text-xs uppercase tracking-widest px-4 py-2 border transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#D7FF00] text-[#090A08] border-[#D7FF00] font-bold shadow-lg'
                    : 'bg-[#090A08] text-neutral-300 border-white/15 hover:border-[#D7FF00]/50 hover:text-white'
                }`}
              >
                <span>{snap.yearDisplay}</span>
                <span className={`text-[9px] px-1 py-0.2 rounded-xs ${
                  isSelected ? 'bg-black/20 text-[#090A08]' : 'text-[#A88B55]'
                }`}>
                  {snap.year < 0 ? 'BCE' : 'CE'}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Epoch Presentation Stage */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        
        {/* Selected Era Summary Card */}
        <div className="border border-white/15 bg-[#0F110D] p-6 lg:p-8 mb-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-[#D7FF00]/5 to-transparent pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-white/10 pb-4 mb-4">
            <div>
              <span className="font-mono text-xs text-[#D7FF00] uppercase tracking-widest block mb-1">
                SYNCHRONIZED GLOBAL SNAPSHOT // {currentSnapshot.yearDisplay}
              </span>
              <h2 className="font-oswald text-3xl md:text-4xl text-white uppercase tracking-tight">
                {currentSnapshot.eraName}
              </h2>
            </div>
            <span className="font-mono text-xs text-[#A88B55] border border-[#A88B55]/30 px-2.5 py-1">
              7 Continental Spheres Synchronized
            </span>
          </div>

          <p className="font-serif text-neutral-300 text-base md:text-lg leading-relaxed max-w-4xl">
            {currentSnapshot.synopsis}
          </p>
        </div>

        {/* Global Synchronizer: "Where Were They Then?" 6-Region Matrix */}
        <div className="mb-14">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#D7FF00]" />
              <h3 className="font-oswald text-xl text-white uppercase tracking-wider">
                WHERE WERE THEY THEN? GLOBAL SIMULTANEOUS DEVELOPMENTS
              </h3>
            </div>
            <span className="font-mono text-xs text-neutral-400">
              Parallel Realities in {currentSnapshot.yearDisplay}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* India Subcontinent */}
            <div className="p-5 border border-white/10 bg-[#121410] hover:border-[#D7FF00]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                  <span className="font-mono text-xs text-[#D7FF00] font-bold tracking-wider uppercase">
                    01 // India & South Asia
                  </span>
                  <span className="font-mono text-[10px] text-neutral-500">INDUS / GANGES</span>
                </div>
                <p className="font-serif text-sm text-neutral-300 leading-relaxed">
                  {currentSnapshot.regions.india}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-[#A88B55] flex items-center justify-between">
                <span>VEDIC / IMPERIAL / MARITIME</span>
                <span className="text-[#D7FF00]">ACT.01</span>
              </div>
            </div>

            {/* Europe & Mediterranean */}
            <div className="p-5 border border-white/10 bg-[#121410] hover:border-[#D7FF00]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                  <span className="font-mono text-xs text-[#D7FF00] font-bold tracking-wider uppercase">
                    02 // Europe & Mediterranean
                  </span>
                  <span className="font-mono text-[10px] text-neutral-500">GRECO-ROMAN / FEUDAL</span>
                </div>
                <p className="font-serif text-sm text-neutral-300 leading-relaxed">
                  {currentSnapshot.regions.europe}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-[#A88B55] flex items-center justify-between">
                <span>REPUBLIC / IMPERIUM</span>
                <span className="text-[#D7FF00]">ACT.02</span>
              </div>
            </div>

            {/* East Asia / China */}
            <div className="p-5 border border-white/10 bg-[#121410] hover:border-[#D7FF00]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                  <span className="font-mono text-xs text-[#D7FF00] font-bold tracking-wider uppercase">
                    03 // China & East Asia
                  </span>
                  <span className="font-mono text-[10px] text-neutral-500">YELLOW & YANGTZE BASIN</span>
                </div>
                <p className="font-serif text-sm text-neutral-300 leading-relaxed">
                  {currentSnapshot.regions.china}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-[#A88B55] flex items-center justify-between">
                <span>DYNASTIC HEAVEN MANDATE</span>
                <span className="text-[#D7FF00]">ACT.03</span>
              </div>
            </div>

            {/* Africa */}
            <div className="p-5 border border-white/10 bg-[#121410] hover:border-[#D7FF00]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                  <span className="font-mono text-xs text-[#D7FF00] font-bold tracking-wider uppercase">
                    04 // Africa & Nile Corridor
                  </span>
                  <span className="font-mono text-[10px] text-neutral-500">NILE / SAHEL / SWAHILI</span>
                </div>
                <p className="font-serif text-sm text-neutral-300 leading-relaxed">
                  {currentSnapshot.regions.africa}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-[#A88B55] flex items-center justify-between">
                <span>KEMET / AKSUM / GOLD TRADE</span>
                <span className="text-[#D7FF00]">ACT.04</span>
              </div>
            </div>

            {/* Middle East */}
            <div className="p-5 border border-white/10 bg-[#121410] hover:border-[#D7FF00]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                  <span className="font-mono text-xs text-[#D7FF00] font-bold tracking-wider uppercase">
                    05 // Middle East & Levant
                  </span>
                  <span className="font-mono text-[10px] text-neutral-500">TIGRIS / EUPHRATES</span>
                </div>
                <p className="font-serif text-sm text-neutral-300 leading-relaxed">
                  {currentSnapshot.regions.middleEast}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-[#A88B55] flex items-center justify-between">
                <span>CUNEIFORM / CALIPHATE</span>
                <span className="text-[#D7FF00]">ACT.05</span>
              </div>
            </div>

            {/* The Americas */}
            <div className="p-5 border border-white/10 bg-[#121410] hover:border-[#D7FF00]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                  <span className="font-mono text-xs text-[#D7FF00] font-bold tracking-wider uppercase">
                    06 // The Americas
                  </span>
                  <span className="font-mono text-[10px] text-neutral-500">MESOAMERICA / ANDES</span>
                </div>
                <p className="font-serif text-sm text-neutral-300 leading-relaxed">
                  {currentSnapshot.regions.americas}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-[#A88B55] flex items-center justify-between">
                <span>MAYA / INCA / TEOTIHUACAN</span>
                <span className="text-[#D7FF00]">ACT.06</span>
              </div>
            </div>

          </div>
        </div>

        {/* Major Watershed Breakthroughs in this Era */}
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-3 mb-6">
            <h3 className="font-oswald text-xl text-white uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D7FF00]" />
              WATERSHED MILESTONES & BREAKTHROUGHS ({currentSnapshot.yearDisplay})
            </h3>

            {/* Category Filter Chips */}
            <div className="flex items-center gap-2 flex-wrap">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategoryFilter(cat.id)}
                  className={`font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 border transition-colors cursor-pointer ${
                    categoryFilter === cat.id
                      ? 'bg-[#D7FF00] text-[#090A08] border-[#D7FF00] font-bold'
                      : 'border-white/10 text-neutral-400 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredEvents.map((evt, idx) => (
              <div
                key={idx}
                className="p-6 border border-white/10 bg-[#0E100C] hover:border-[#D7FF00]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                    <span className="font-mono text-[10px] text-[#D7FF00] uppercase tracking-widest border border-[#D7FF00]/30 px-1.5 py-0.5">
                      {evt.category}
                    </span>
                    <span className="font-mono text-xs text-neutral-400">
                      {evt.region}
                    </span>
                  </div>

                  <h4 className="font-oswald text-xl text-white uppercase tracking-tight mb-1.5">
                    {evt.title}
                  </h4>

                  <span className="font-mono text-xs text-[#A88B55] block mb-3">
                    CIVILIZATION: {evt.civilization}
                  </span>

                  <p className="font-serif text-sm text-neutral-300 leading-relaxed">
                    {evt.description}
                  </p>
                </div>

                {evt.recordId && onSelectRecord && (
                  <button
                    onClick={() => onSelectRecord(evt.recordId!)}
                    className="mt-6 flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#D7FF00] hover:text-white transition-colors cursor-pointer self-start"
                  >
                    <span>Read Monograph</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
