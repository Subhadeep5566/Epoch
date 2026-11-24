/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Hourglass, 
  ArrowRight, 
  Clock, 
  Compass, 
  Sparkles, 
  ShieldAlert, 
  BookOpen, 
  Users, 
  Calendar,
  Globe,
  Sliders,
  ChevronRight
} from 'lucide-react';
import { globalSyncSnapshots, GlobalSyncEvent } from '../data/historicalEngineData';

interface TimeMachineProps {
  onSelectRecord?: (id: string) => void;
  onBackToHome?: () => void;
  onOpenAtlas?: () => void;
}

export const TimeMachine: React.FC<TimeMachineProps> = ({
  onSelectRecord,
  onBackToHome,
  onOpenAtlas
}) => {
  const [selectedYear, setSelectedYear] = useState<number>(1492);

  // Available historical benchmark epochs
  const benchmarks = [
    { year: -3000, label: '3000 BCE', title: 'Bronze Age Dawn & First Cities' },
    { year: -500, label: '500 BCE', title: 'The Axial Age of Philosophy' },
    { year: 1, label: '1 CE', title: 'Pax Romana & The Han Silk Road' },
    { year: 500, label: '500 CE', title: 'Post-Roman Europe & Classical Guptas' },
    { year: 1000, label: '1000 CE', title: 'Song Technology & Chola Maritime Reach' },
    { year: 1492, label: '1492 CE', title: 'Columbian Atlantic Crossing & Renaissance' },
    { year: 1945, label: '1945 CE', title: 'World War II Conclusion & Nuclear Dawn' }
  ];

  // Find nearest snapshot
  const currentSnapshot = globalSyncSnapshots.reduce((prev, curr) => {
    return Math.abs(curr.year - selectedYear) < Math.abs(prev.year - selectedYear) ? curr : prev;
  });

  return (
    <div className="bg-[#090A08] text-[#F3F4F6] min-h-screen font-manrope selection:bg-[#D7FF00] selection:text-[#090A08]">
      
      {/* Top Editorial Ribbon */}
      <div className="border-b border-white/10 px-6 lg:px-12 py-6 bg-[#0E100C]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#D7FF00] bg-[#D7FF00]/10 border border-[#D7FF00]/30 px-2 py-0.5 flex items-center gap-1">
                <Hourglass className="w-3 h-3 text-[#D7FF00]" /> Temporal Simulation Chamber
              </span>
              <span className="font-mono text-[10px] text-neutral-400 tracking-wider">
                COORDINATED UNIVERSAL TIMELINE
              </span>
            </div>
            <h1 className="font-oswald text-3xl md:text-5xl text-white uppercase tracking-tight">
              THE TIME MACHINE
            </h1>
            <p className="font-serif italic text-neutral-300 text-sm md:text-base max-w-2xl mt-1">
              Select any historical year to warp through time and observe a synchronized planetary snapshot of human civilization, conflicts, empires, and breakthroughs.
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

      {/* Temporal Navigation Dial */}
      <div className="border-b border-white/10 bg-[#121410] px-6 lg:px-12 py-6 sticky top-16 z-30 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-1">
                ACTIVE TIME TARGET
              </span>
              <div className="flex items-baseline gap-3">
                <span className="font-oswald text-4xl md:text-5xl text-[#D7FF00] font-bold tracking-tight">
                  {currentSnapshot.yearDisplay}
                </span>
                <span className="font-mono text-sm text-[#A88B55] uppercase">
                  {currentSnapshot.eraName}
                </span>
              </div>
            </div>

            {/* Quick Era Jump Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto">
              {benchmarks.map((bm) => (
                <button
                  key={bm.year}
                  onClick={() => setSelectedYear(bm.year)}
                  className={`font-mono text-xs uppercase tracking-wider px-3 py-1.5 border transition-all cursor-pointer whitespace-nowrap ${
                    selectedYear === bm.year
                      ? 'bg-[#D7FF00] text-[#090A08] border-[#D7FF00] font-bold'
                      : 'bg-[#090A08] border-white/15 text-neutral-300 hover:text-white hover:border-[#D7FF00]/40'
                  }`}
                >
                  {bm.label}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Main Multi-Dimensional Temporal Board */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 space-y-12">
        
        {/* Planetary Overview Banner */}
        <div className="p-8 border border-white/15 bg-[#0F110D] relative overflow-hidden shadow-xl">
          <div className="border-b border-white/10 pb-4 mb-4 flex items-center justify-between">
            <span className="font-mono text-xs text-[#D7FF00] uppercase tracking-widest flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#D7FF00]" />
              PLANETARY SYNPOSIS IN {currentSnapshot.yearDisplay}
            </span>
            {onOpenAtlas && (
              <button
                onClick={onOpenAtlas}
                className="font-mono text-xs text-neutral-400 hover:text-[#D7FF00] flex items-center gap-1 cursor-pointer"
              >
                <span>View on Atlas</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            )}
          </div>

          <p className="font-serif text-lg md:text-xl text-neutral-200 leading-relaxed max-w-4xl">
            {currentSnapshot.synopsis}
          </p>
        </div>

        {/* 6 Continental Realities at this exact timestamp */}
        <div>
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6">
            <h3 className="font-oswald text-2xl text-white uppercase tracking-wider">
              CONTINENTAL POLITIES & SOCIETIES
            </h3>
            <span className="font-mono text-xs text-neutral-500">
              SYNCHRONIZED {currentSnapshot.yearDisplay}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(currentSnapshot.regions).map(([regionKey, summary], idx) => {
              const formattedName = regionKey.charAt(0).toUpperCase() + regionKey.slice(1);
              return (
                <div 
                  key={regionKey}
                  className="border border-white/10 bg-[#121410] p-6 hover:border-[#D7FF00]/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                      <span className="font-mono text-xs text-[#D7FF00] uppercase font-bold tracking-wider">
                        {formattedName}
                      </span>
                      <span className="font-mono text-[10px] text-neutral-500">
                        SECTOR 0{idx + 1}
                      </span>
                    </div>

                    <p className="font-serif text-sm text-neutral-300 leading-relaxed">
                      {summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-[#A88B55] flex justify-between">
                    <span>HISTORICAL EVIDENCE</span>
                    <span className="text-[#D7FF00]">VERIFIED</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Critical Breakthroughs & Conflicts in this Year */}
        <div>
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6">
            <h3 className="font-oswald text-2xl text-white uppercase tracking-wider">
              WATERSHED EVENTS & HUMAN BREAKTHROUGHS
            </h3>
            <span className="font-mono text-xs text-[#A88B55]">
              {currentSnapshot.events.length} DOCUMENTED CATALYSTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentSnapshot.events.map((evt, idx) => (
              <div 
                key={idx}
                className="border border-white/10 bg-[#0E100C] p-6 hover:border-[#D7FF00]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                    <span className="font-mono text-[10px] text-[#D7FF00] uppercase border border-[#D7FF00]/30 px-1.5 py-0.5">
                      {evt.category}
                    </span>
                    <span className="font-mono text-xs text-neutral-400">
                      {evt.civilization}
                    </span>
                  </div>

                  <h4 className="font-oswald text-xl text-white uppercase tracking-tight mb-2">
                    {evt.title}
                  </h4>

                  <p className="font-serif text-sm text-neutral-300 leading-relaxed">
                    {evt.description}
                  </p>
                </div>

                {evt.recordId && onSelectRecord && (
                  <button
                    onClick={() => onSelectRecord(evt.recordId!)}
                    className="mt-6 font-mono text-xs uppercase tracking-wider text-[#D7FF00] hover:underline flex items-center gap-1 cursor-pointer self-start"
                  >
                    <span>Read Monograph</span>
                    <ChevronRight className="w-3.5 h-3.5" />
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
