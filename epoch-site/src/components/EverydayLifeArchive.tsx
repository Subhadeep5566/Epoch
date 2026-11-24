/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  HeartHandshake, 
  ArrowRight, 
  Sparkles, 
  Utensils, 
  Home, 
  Hammer, 
  Lightbulb, 
  Clock,
  Compass,
  Users
} from 'lucide-react';
import { 
  everydayLifeStories, 
  EverydayLifeStory 
} from '../data/historicalEngineData';

interface EverydayLifeArchiveProps {
  onBackToHome?: () => void;
  onSelectRecord?: (id: string) => void;
}

export const EverydayLifeArchive: React.FC<EverydayLifeArchiveProps> = ({
  onBackToHome,
  onSelectRecord
}) => {
  const [selectedStoryId, setSelectedStoryId] = useState<string>('nile-farmer');
  const [activeTab, setActiveTab] = useState<'narrative' | 'routine' | 'food' | 'dwelling' | 'crafts' | 'insight'>('narrative');

  const activeStory: EverydayLifeStory = 
    everydayLifeStories.find(s => s.id === selectedStoryId) || everydayLifeStories[0];

  return (
    <div className="bg-[#090A08] text-[#F3F4F6] min-h-screen font-manrope selection:bg-[#D7FF00] selection:text-[#090A08]">
      
      {/* Top Editorial Ribbon */}
      <div className="border-b border-white/10 px-6 lg:px-12 py-6 bg-[#0E100C]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#D7FF00] bg-[#D7FF00]/10 border border-[#D7FF00]/30 px-2 py-0.5 flex items-center gap-1">
                <Users className="w-3 h-3 text-[#D7FF00]" /> Social History & Material Culture
              </span>
              <span className="font-mono text-[10px] text-neutral-400 tracking-wider">
                VOICES BEYOND THE ROYAL PALACES
              </span>
            </div>
            <h1 className="font-oswald text-3xl md:text-5xl text-white uppercase tracking-tight">
              THE HUMAN SIDE OF HISTORY
            </h1>
            <p className="font-serif italic text-neutral-300 text-sm md:text-base max-w-2xl mt-1">
              History was not forged solely by monarchs and conquerors. Step into the daily lives, hearths, workshops, and diets of ordinary farmers, craftswomen, bakers, and merchants.
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

      {/* Story Selector Strip */}
      <div className="border-b border-white/10 bg-[#121410] px-6 lg:px-12 py-4 sticky top-16 z-30 shadow-md overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto flex items-center gap-3 min-w-max">
          <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 mr-2">
            Explore Everyday Humans:
          </span>
          {everydayLifeStories.map(story => {
            const isSelected = selectedStoryId === story.id;
            return (
              <button
                key={story.id}
                onClick={() => setSelectedStoryId(story.id)}
                className={`font-mono text-xs uppercase tracking-wider px-4 py-2 border transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#D7FF00] text-[#090A08] border-[#D7FF00] font-bold shadow'
                    : 'bg-[#090A08] text-neutral-300 border-white/15 hover:border-[#D7FF00]/40 hover:text-white'
                }`}
              >
                <span>{story.title}</span>
                <span className={`text-[10px] ${isSelected ? 'text-[#090A08]' : 'text-[#A88B55]'}`}>
                  ({story.role})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Narrative Stage */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 space-y-10">
        
        {/* Story Hero Header Card */}
        <div className="border border-white/15 bg-[#0F110D] p-6 lg:p-8 flex flex-col md:flex-row gap-8 items-start shadow-2xl">
          <div className="w-full md:w-56 aspect-[3/4] bg-black border border-white/15 shrink-0 overflow-hidden">
            <img
              src={activeStory.imageUrl}
              alt={activeStory.title}
              className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
            />
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
              <span className="font-mono text-xs text-[#D7FF00] uppercase tracking-widest font-bold">
                {activeStory.civilization}
              </span>
              <span className="font-mono text-xs text-neutral-400">
                {activeStory.period}
              </span>
            </div>

            <h2 className="font-oswald text-3xl md:text-4xl text-white uppercase tracking-tight mb-1">
              {activeStory.title}
            </h2>
            <span className="font-mono text-sm text-[#A88B55] block mb-4">
              ROLE: {activeStory.role.toUpperCase()} // REGION: {activeStory.region.toUpperCase()}
            </span>

            <p className="font-serif text-base md:text-lg text-neutral-200 leading-relaxed">
              {activeStory.narrative}
            </p>
          </div>
        </div>

        {/* 4 Facets of Daily Life Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Daily Routine */}
          <div className="p-6 border border-white/10 bg-[#121410] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-3">
                <Clock className="w-4 h-4 text-[#D7FF00]" />
                <h3 className="font-oswald text-xl text-white uppercase tracking-wide">
                  DAILY ROUTINE & WORKING HOURS
                </h3>
              </div>
              <p className="font-serif text-sm text-neutral-300 leading-relaxed">
                {activeStory.dailyRoutine}
              </p>
            </div>
          </div>

          {/* Diet & Food */}
          <div className="p-6 border border-white/10 bg-[#121410] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-3">
                <Utensils className="w-4 h-4 text-[#A88B55]" />
                <h3 className="font-oswald text-xl text-white uppercase tracking-wide">
                  DIET, HEARTH & NUTRITION
                </h3>
              </div>
              <p className="font-serif text-sm text-neutral-300 leading-relaxed">
                {activeStory.dietAndFood}
              </p>
            </div>
          </div>

          {/* Dwelling & Family Life */}
          <div className="p-6 border border-white/10 bg-[#121410] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-3">
                <Home className="w-4 h-4 text-[#38BDF8]" />
                <h3 className="font-oswald text-xl text-white uppercase tracking-wide">
                  DWELLING, HEARTH & KINSHIP
                </h3>
              </div>
              <p className="font-serif text-sm text-neutral-300 leading-relaxed">
                {activeStory.dwellingAndFamily}
              </p>
            </div>
          </div>

          {/* Material Culture & Tools */}
          <div className="p-6 border border-white/10 bg-[#121410] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-3">
                <Hammer className="w-4 h-4 text-[#F59E0B]" />
                <h3 className="font-oswald text-xl text-white uppercase tracking-wide">
                  MATERIAL CULTURE, GEAR & CRAFT
                </h3>
              </div>
              <p className="font-serif text-sm text-neutral-300 leading-relaxed">
                {activeStory.materialCulture}
              </p>
            </div>
          </div>

        </div>

        {/* Historical Insight Callout */}
        <div className="p-6 border-l-4 border-[#D7FF00] bg-[#0E100C] border border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="w-4 h-4 text-[#D7FF00]" />
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#D7FF00] font-bold">
              HISTORICAL SIGNIFICANCE OF ORDINARY LIVES
            </h4>
          </div>
          <p className="font-serif text-base text-neutral-200 leading-relaxed">
            {activeStory.historicalInsight}
          </p>
        </div>

      </div>

    </div>
  );
};
