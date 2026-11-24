/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Scale, 
  ArrowRight, 
  BookOpen, 
  Compass, 
  Sparkles, 
  Check, 
  RotateCcw,
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';
import { 
  comparativeCivilizations, 
  DetailedCivilization 
} from '../data/historicalEngineData';

interface CivilizationComparisonProps {
  onSelectRecord?: (id: string) => void;
  onBackToHome?: () => void;
}

export const CivilizationComparison: React.FC<CivilizationComparisonProps> = ({
  onSelectRecord,
  onBackToHome
}) => {
  const civilizationKeys = Object.keys(comparativeCivilizations);

  const [civAKey, setCivAKey] = useState<string>('indus-valley');
  const [civBKey, setCivBKey] = useState<string>('ancient-egypt');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  const civA: DetailedCivilization = comparativeCivilizations[civAKey] || comparativeCivilizations['indus-valley'];
  const civB: DetailedCivilization = comparativeCivilizations[civBKey] || comparativeCivilizations['ancient-egypt'];

  const presets = [
    { label: 'Indus Valley vs Ancient Egypt', a: 'indus-valley', b: 'ancient-egypt' },
    { label: 'Roman Empire vs Mauryan Empire', a: 'roman-empire', b: 'mauryan-empire' },
    { label: 'Gupta Empire vs Han Dynasty', a: 'gupta-empire', b: 'han-dynasty' },
    { label: 'Mesopotamia vs Ancient Egypt', a: 'mesopotamia', b: 'ancient-egypt' },
    { label: 'Mauryan Empire vs Han Dynasty', a: 'mauryan-empire', b: 'han-dynasty' }
  ];

  const comparisonCategories = [
    { key: 'period', label: '01. Historical Period & Timeline', titleA: civA.categories.period, titleB: civB.categories.period },
    { key: 'geography', label: '02. Geography, Rivers & Climate', titleA: civA.categories.geography, titleB: civB.categories.geography },
    { key: 'government', label: '03. Head of State & Government', titleA: civA.categories.government, titleB: civB.categories.government },
    { key: 'politicalStructure', label: '04. Political Structure, Bureaucracy & Law', titleA: civA.categories.politicalStructure, titleB: civB.categories.politicalStructure },
    { key: 'economy', label: '05. Economy, Agriculture & Currency', titleA: civA.categories.economy, titleB: civB.categories.economy },
    { key: 'trade', label: '06. Trade Corridors, Ports & Commerce', titleA: civA.categories.trade, titleB: civB.categories.trade },
    { key: 'military', label: '07. Military Doctrine, Arms & Warfare', titleA: civA.categories.military, titleB: civB.categories.military },
    { key: 'architecture', label: '08. Architecture, Masonry & Monuments', titleA: civA.categories.architecture, titleB: civB.categories.architecture },
    { key: 'religionPhilosophy', label: '09. Religion, Cosmology & Philosophy', titleA: civA.categories.religionPhilosophy, titleB: civB.categories.religionPhilosophy },
    { key: 'scienceTechnology', label: '10. Science, Engineering & Mathematics', titleA: civA.categories.scienceTechnology, titleB: civB.categories.scienceTechnology },
    { key: 'literature', label: '11. Literature, Scripts & Record-Keeping', titleA: civA.categories.literature, titleB: civB.categories.literature },
    { key: 'artCulture', label: '12. Art, Sculpture, Ceramics & Crafts', titleA: civA.categories.artCulture, titleB: civB.categories.artCulture },
    { key: 'everydayLife', label: '13. Everyday Life, Homes, Diet & Society', titleA: civA.categories.everydayLife, titleB: civB.categories.everydayLife },
    { key: 'historicalLegacy', label: '14. Enduring Legacy on Modern Humanity', titleA: civA.categories.historicalLegacy, titleB: civB.categories.historicalLegacy }
  ];

  const handleSwap = () => {
    setCivAKey(civBKey);
    setCivBKey(civAKey);
  };

  return (
    <div className="bg-[#090A08] text-[#F3F4F6] min-h-screen font-manrope selection:bg-[#D7FF00] selection:text-[#090A08]">
      
      {/* Top Editorial Ribbon */}
      <div className="border-b border-white/10 px-6 lg:px-12 py-6 bg-[#0E100C]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#D7FF00] bg-[#D7FF00]/10 border border-[#D7FF00]/30 px-2 py-0.5">
                Comparative Civilizational Studies
              </span>
              <span className="font-mono text-[10px] text-neutral-400 tracking-wider">
                14 SCHOLARLY ANALYTICAL CRITERIA
              </span>
            </div>
            <h1 className="font-oswald text-3xl md:text-5xl text-white uppercase tracking-tight">
              CIVILIZATION COMPARISON
            </h1>
            <p className="font-serif italic text-neutral-300 text-sm md:text-base max-w-2xl mt-1">
              Select any two societies in human history for an evidence-grounded, side-by-side comparative analysis across government, economy, warfare, daily life, and science.
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

      {/* Selector & Presets Strip */}
      <div className="border-b border-white/10 bg-[#121410] px-6 lg:px-12 py-5 sticky top-16 z-30 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          
          {/* Main Dual Selectors */}
          <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
            
            {/* Primary Civilization A */}
            <div className="md:col-span-5 bg-[#090A08] border border-white/20 p-3 flex flex-col">
              <label className="font-mono text-[10px] uppercase tracking-wider text-[#D7FF00] mb-1">
                Civilization Alpha
              </label>
              <select
                value={civAKey}
                onChange={(e) => setCivAKey(e.target.value)}
                className="bg-transparent text-white font-oswald text-lg uppercase tracking-wide focus:outline-none cursor-pointer"
              >
                {civilizationKeys.map(k => (
                  <option key={k} value={k} className="bg-[#121410] text-white">
                    {comparativeCivilizations[k].name} ({comparativeCivilizations[k].capital})
                  </option>
                ))}
              </select>
            </div>

            {/* Swap Button */}
            <div className="md:col-span-1 flex justify-center">
              <button
                onClick={handleSwap}
                className="p-2 border border-white/20 hover:border-[#D7FF00] bg-[#161814] text-neutral-300 hover:text-[#D7FF00] transition-colors cursor-pointer rounded-xs"
                title="Swap Civilizations"
              >
                <Scale className="w-4 h-4" />
              </button>
            </div>

            {/* Primary Civilization B */}
            <div className="md:col-span-5 bg-[#090A08] border border-white/20 p-3 flex flex-col">
              <label className="font-mono text-[10px] uppercase tracking-wider text-[#A88B55] mb-1">
                Civilization Beta
              </label>
              <select
                value={civBKey}
                onChange={(e) => setCivBKey(e.target.value)}
                className="bg-transparent text-white font-oswald text-lg uppercase tracking-wide focus:outline-none cursor-pointer"
              >
                {civilizationKeys.map(k => (
                  <option key={k} value={k} className="bg-[#121410] text-white">
                    {comparativeCivilizations[k].name} ({comparativeCivilizations[k].capital})
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Quick Comparison Presets */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 whitespace-nowrap">
              Curated Comparisons:
            </span>
            {presets.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => { setCivAKey(preset.a); setCivBKey(preset.b); }}
                className={`font-mono text-[11px] uppercase tracking-wider px-3 py-1 border whitespace-nowrap transition-colors cursor-pointer ${
                  civAKey === preset.a && civBKey === preset.b
                    ? 'border-[#D7FF00] text-[#D7FF00] bg-[#D7FF00]/10'
                    : 'border-white/10 text-neutral-400 hover:text-white'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Main Comparison Broadsheet */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        
        {/* Top Hero Headers for the Two Civilizations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 border-b border-white/15 pb-8">
          
          {/* Civ A Header */}
          <div className="border border-white/10 bg-[#0E100C] p-6 lg:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <span className="font-mono text-xs text-[#D7FF00] uppercase tracking-widest font-bold">
                  ALPHA SUBJECT
                </span>
                <span className="font-mono text-xs text-neutral-400">
                  {civA.era}
                </span>
              </div>

              <h2 className="font-oswald text-3xl md:text-4xl text-white uppercase tracking-tight mb-1">
                {civA.name}
              </h2>
              {civA.nativeName && (
                <span className="font-serif italic text-sm text-[#A88B55] block mb-3">
                  "{civA.nativeName}"
                </span>
              )}

              <p className="font-serif text-sm md:text-base text-neutral-300 leading-relaxed mb-6">
                {civA.overview}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono text-[11px] text-neutral-400">
                CAPITAL: {civA.capital}
              </span>
              {civA.relatedRecordId && onSelectRecord && (
                <button
                  onClick={() => onSelectRecord(civA.relatedRecordId!)}
                  className="flex items-center gap-1.5 font-mono text-xs text-[#D7FF00] hover:underline cursor-pointer"
                >
                  <span>Open Monograph</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Civ B Header */}
          <div className="border border-white/10 bg-[#0E100C] p-6 lg:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <span className="font-mono text-xs text-[#A88B55] uppercase tracking-widest font-bold">
                  BETA SUBJECT
                </span>
                <span className="font-mono text-xs text-neutral-400">
                  {civB.era}
                </span>
              </div>

              <h2 className="font-oswald text-3xl md:text-4xl text-white uppercase tracking-tight mb-1">
                {civB.name}
              </h2>
              {civB.nativeName && (
                <span className="font-serif italic text-sm text-[#A88B55] block mb-3">
                  "{civB.nativeName}"
                </span>
              )}

              <p className="font-serif text-sm md:text-base text-neutral-300 leading-relaxed mb-6">
                {civB.overview}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono text-[11px] text-neutral-400">
                CAPITAL: {civB.capital}
              </span>
              {civB.relatedRecordId && onSelectRecord && (
                <button
                  onClick={() => onSelectRecord(civB.relatedRecordId!)}
                  className="flex items-center gap-1.5 font-mono text-xs text-[#A88B55] hover:underline cursor-pointer"
                >
                  <span>Open Monograph</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

        </div>

        {/* 14 Comprehensive Comparative Analysis Rows */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h3 className="font-oswald text-xl text-white uppercase tracking-wider">
              14 CATEGORIES OF HISTORICAL EVIDENCE
            </h3>
            <span className="font-mono text-xs text-neutral-500">
              SIDE-BY-SIDE JUXTAPOSITION
            </span>
          </div>

          {comparisonCategories.map((cat, idx) => (
            <div 
              key={cat.key}
              className="border border-white/10 bg-[#0F110D] overflow-hidden transition-colors hover:border-white/20"
            >
              {/* Category Title Bar */}
              <div className="bg-[#161814] px-6 py-3 border-b border-white/10 flex items-center justify-between">
                <span className="font-mono text-xs text-[#D7FF00] uppercase tracking-widest font-bold">
                  {cat.label}
                </span>
                <span className="font-mono text-[10px] text-neutral-500 uppercase">
                  CRITERION {idx + 1} OF 14
                </span>
              </div>

              {/* Side-by-Side Comparison Content Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
                
                {/* Column A */}
                <div className="p-6 bg-[#0E100C]/60 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-neutral-500 block mb-2">
                      {civA.name}
                    </span>
                    <p className="font-serif text-sm md:text-base text-neutral-200 leading-relaxed">
                      {cat.titleA}
                    </p>
                  </div>
                </div>

                {/* Column B */}
                <div className="p-6 bg-[#0E100C]/30 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-neutral-500 block mb-2">
                      {civB.name}
                    </span>
                    <p className="font-serif text-sm md:text-base text-neutral-200 leading-relaxed">
                      {cat.titleB}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};
