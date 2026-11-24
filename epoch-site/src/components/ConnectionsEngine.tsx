/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  GitFork, 
  ArrowRight, 
  ArrowLeft, 
  BookOpen, 
  Compass, 
  ShieldAlert, 
  Zap, 
  Clock, 
  CheckCircle2,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { 
  causalConnectionsDatabase, 
  CausalConnectionNode 
} from '../data/historicalEngineData';

interface ConnectionsEngineProps {
  onSelectRecord?: (id: string) => void;
  onBackToHome?: () => void;
}

export const ConnectionsEngine: React.FC<ConnectionsEngineProps> = ({
  onSelectRecord,
  onBackToHome
}) => {
  const connectionKeys = Object.keys(causalConnectionsDatabase);
  const [activeKey, setActiveKey] = useState<string>('world-war-i');

  const activeNode: CausalConnectionNode = 
    causalConnectionsDatabase[activeKey] || causalConnectionsDatabase['world-war-i'];

  return (
    <div className="bg-[#090A08] text-[#F3F4F6] min-h-screen font-manrope selection:bg-[#D7FF00] selection:text-[#090A08]">
      
      {/* Top Editorial Ribbon */}
      <div className="border-b border-white/10 px-6 lg:px-12 py-6 bg-[#0E100C]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#D7FF00] bg-[#D7FF00]/10 border border-[#D7FF00]/30 px-2 py-0.5 flex items-center gap-1">
                <GitFork className="w-3 h-3 text-[#D7FF00]" /> Causal Discovery & Domino Engine
              </span>
              <span className="font-mono text-[10px] text-neutral-400 tracking-wider">
                CAUSE & CONSEQUENCE VECTOR MAPPING
              </span>
            </div>
            <h1 className="font-oswald text-3xl md:text-5xl text-white uppercase tracking-tight">
              HISTORY CONNECTIONS ENGINE
            </h1>
            <p className="font-serif italic text-neutral-300 text-sm md:text-base max-w-2xl mt-1">
              Trace the deep historical roots and far-reaching domino consequences of history's greatest watershed transformations.
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

      {/* Watershed Event Switcher Bar */}
      <div className="border-b border-white/10 bg-[#121410] px-6 lg:px-12 py-4 sticky top-16 z-30 shadow-md overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto flex items-center gap-2 min-w-max">
          <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 mr-2">
            Select Catalyst Event:
          </span>
          {connectionKeys.map(k => {
            const isSelected = activeKey === k;
            return (
              <button
                key={k}
                onClick={() => setActiveKey(k)}
                className={`font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#D7FF00] text-[#090A08] border-[#D7FF00] font-bold shadow'
                    : 'bg-[#090A08] text-neutral-300 border-white/15 hover:border-[#D7FF00]/40 hover:text-white'
                }`}
              >
                {causalConnectionsDatabase[k].title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Causal Flow Diagram */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 space-y-12">
        
        {/* Central Event Banner */}
        <div className="border-2 border-[#D7FF00]/40 bg-[#0F110D] p-8 shadow-2xl relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/10 pb-4 mb-4">
            <div>
              <span className="font-mono text-xs text-[#D7FF00] uppercase tracking-widest block mb-1">
                CENTRAL WATERSHED EVENT // {activeNode.year}
              </span>
              <h2 className="font-oswald text-3xl md:text-4xl text-white uppercase tracking-tight">
                {activeNode.title}
              </h2>
            </div>
            <span className="font-mono text-xs text-[#A88B55] border border-[#A88B55]/30 px-2.5 py-1 self-start md:self-auto">
              {activeNode.category}
            </span>
          </div>

          <p className="font-serif text-base md:text-lg text-neutral-200 leading-relaxed max-w-4xl mb-6">
            {activeNode.summary}
          </p>

          {activeNode.recordId && onSelectRecord && (
            <button
              onClick={() => onSelectRecord(activeNode.recordId!)}
              className="font-mono text-xs uppercase tracking-wider bg-[#D7FF00] hover:bg-[#c5ec00] text-[#090A08] font-bold px-4 py-2 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Explore Complete Event Monograph</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* 3-Column Cause & Consequence Vector Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Earlier Causes & Catalysts */}
          <div className="border border-white/15 bg-[#121410] p-6 lg:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6">
                <div className="flex items-center gap-2">
                  <ArrowLeft className="w-5 h-5 text-[#A88B55]" />
                  <h3 className="font-oswald text-2xl text-white uppercase tracking-wider">
                    EARLIER CAUSES & CATALYSTS
                  </h3>
                </div>
                <span className="font-mono text-xs text-[#A88B55]">
                  FOUNDATIONAL FORCES
                </span>
              </div>

              <div className="space-y-4">
                {activeNode.earlierCauses.map((cause, idx) => (
                  <div key={idx} className="p-4 bg-[#090A08] border border-white/10">
                    <span className="font-mono text-[10px] text-[#A88B55] uppercase tracking-widest block mb-1">
                      CAUSE 0{idx + 1}
                    </span>
                    <h4 className="font-oswald text-lg text-white uppercase mb-1">
                      {cause.title}
                    </h4>
                    <p className="font-serif text-xs md:text-sm text-neutral-300 leading-relaxed">
                      {cause.explanation}
                    </p>
                    {cause.targetId && (
                      <button
                        onClick={() => setActiveKey(cause.targetId!)}
                        className="mt-2 font-mono text-[11px] text-[#D7FF00] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Jump to Cause Node: {cause.title}</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Later Consequences & Transformations */}
          <div className="border border-white/15 bg-[#121410] p-6 lg:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6">
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-[#D7FF00]" />
                  <h3 className="font-oswald text-2xl text-white uppercase tracking-wider">
                    LATER CONSEQUENCES & TRANSFORMATIONS
                  </h3>
                </div>
                <span className="font-mono text-xs text-[#D7FF00]">
                  AFTERSHOCKS & SUCCESSORS
                </span>
              </div>

              <div className="space-y-4">
                {activeNode.laterConsequences.map((conseq, idx) => (
                  <div key={idx} className="p-4 bg-[#090A08] border border-white/10">
                    <span className="font-mono text-[10px] text-[#D7FF00] uppercase tracking-widest block mb-1">
                      CONSEQUENCE 0{idx + 1}
                    </span>
                    <h4 className="font-oswald text-lg text-white uppercase mb-1">
                      {conseq.title}
                    </h4>
                    <p className="font-serif text-xs md:text-sm text-neutral-300 leading-relaxed">
                      {conseq.explanation}
                    </p>
                    {conseq.targetId && (
                      <button
                        onClick={() => setActiveKey(conseq.targetId!)}
                        className="mt-2 font-mono text-[11px] text-[#D7FF00] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Jump to Consequence Node: {conseq.title}</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Multi-Domain Tangents & Catalysts Matrix */}
        <div className="border border-white/10 bg-[#0E100C] p-6 lg:p-8">
          <h3 className="font-oswald text-xl text-white uppercase tracking-wider mb-6 pb-3 border-b border-white/10">
            INTERSECTING DOMAINS INFLUENCED BY THIS WATERSHED
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 font-mono text-xs">
            
            {/* Related Wars */}
            <div className="p-4 bg-[#121410] border border-white/10">
              <span className="text-[#EF4444] uppercase font-bold block mb-2">Related Wars & Crises</span>
              <ul className="space-y-1.5 text-neutral-300">
                {activeNode.relatedWars.map((w, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#EF4444]" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Personalities */}
            <div className="p-4 bg-[#121410] border border-white/10">
              <span className="text-[#D7FF00] uppercase font-bold block mb-2">Key Personalities</span>
              <ul className="space-y-1.5 text-neutral-300">
                {activeNode.personalities.map((p, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#D7FF00]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Civilizations Involved */}
            <div className="p-4 bg-[#121410] border border-white/10">
              <span className="text-[#A88B55] uppercase font-bold block mb-2">Societies & Polities</span>
              <ul className="space-y-1.5 text-neutral-300">
                {activeNode.civilizations.map((c, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#A88B55]" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scientific & Social Movements */}
            <div className="p-4 bg-[#121410] border border-white/10">
              <span className="text-[#38BDF8] uppercase font-bold block mb-2">Scientific & Tech Shifts</span>
              <ul className="space-y-1.5 text-neutral-300">
                {activeNode.scientificMovements.map((s, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#38BDF8]" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
