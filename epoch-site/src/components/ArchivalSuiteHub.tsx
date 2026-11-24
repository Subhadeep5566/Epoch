/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Clock, 
  Scale, 
  FileText, 
  Hourglass, 
  Users, 
  GitFork, 
  HeartHandshake, 
  Calendar,
  Compass,
  ArrowLeft,
  ChevronRight
} from 'lucide-react';
import { Navbar } from './Navbar';
import { HistoricalAtlas } from './HistoricalAtlas';
import { LivingTimeline } from './LivingTimeline';
import { CivilizationComparison } from './CivilizationComparison';
import { ArtefactArchive } from './ArtefactArchive';
import { TimeMachine } from './TimeMachine';
import { PersonalitiesNetwork } from './PersonalitiesNetwork';
import { ConnectionsEngine } from './ConnectionsEngine';
import { EverydayLifeArchive } from './EverydayLifeArchive';
import { DailyHistory } from './DailyHistory';

export type ArchivalToolTab = 
  | 'atlas' 
  | 'timeline' 
  | 'compare' 
  | 'documents' 
  | 'timemachine' 
  | 'network' 
  | 'connections' 
  | 'humans' 
  | 'daily';

interface ArchivalSuiteHubProps {
  initialTab?: ArchivalToolTab;
  onBackToHome: () => void;
  onSelectRecord: (id: string) => void;
  onOpenExplorer: () => void;
}

export const ArchivalSuiteHub: React.FC<ArchivalSuiteHubProps> = ({
  initialTab = 'atlas',
  onBackToHome,
  onSelectRecord,
  onOpenExplorer
}) => {
  const [activeTab, setActiveTab] = useState<ArchivalToolTab>(initialTab);

  // Sync with prop when changed
  useEffect(() => {
    if (initialTab) setActiveTab(initialTab);
  }, [initialTab]);

  const tabs: { id: ArchivalToolTab; label: string; icon: any; category: string }[] = [
    { id: 'atlas', label: 'Historical Atlas', icon: Globe, category: 'Geography' },
    { id: 'timeline', label: 'Living Timeline', icon: Clock, category: 'Chronology' },
    { id: 'compare', label: 'Civilization Compare', icon: Scale, category: 'Comparative' },
    { id: 'documents', label: 'Artefacts & Manuscripts', icon: FileText, category: 'Primary Sources' },
    { id: 'timemachine', label: 'The Time Machine', icon: Hourglass, category: 'Planetary Sync' },
    { id: 'network', label: 'Personalities Network', icon: Users, category: 'Biographies' },
    { id: 'connections', label: 'Connections Engine', icon: GitFork, category: 'Causality' },
    { id: 'humans', label: 'The Human Side', icon: HeartHandshake, category: 'Everyday Life' },
    { id: 'daily', label: 'On This Day', icon: Calendar, category: 'Daily Annals' },
  ];

  return (
    <div className="min-h-screen bg-[#090A08] text-[#F3F4F6] font-manrope selection:bg-[#D7FF00] selection:text-[#090A08] flex flex-col">
      
      {/* Top Breadcrumb & Quick Switcher Strip */}
      <div className="border-b border-white/10 bg-[#0E100C] px-6 lg:px-12 py-3 flex items-center justify-between gap-4 text-xs font-mono">
        <button
          onClick={onBackToHome}
          className="flex items-center gap-2 text-neutral-400 hover:text-[#D7FF00] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span className="uppercase tracking-widest font-bold">← Return to Epoch Front Page</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-neutral-500 hidden sm:inline uppercase">
            Curatorial Research Wing
          </span>
          <span className="text-[#D7FF00] bg-[#D7FF00]/10 border border-[#D7FF00]/30 px-2 py-0.5 uppercase tracking-wider text-[10px]">
            ACTIVE SUITE: {activeTab.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Main Suite Tab Strip */}
      <div className="border-b border-white/10 bg-[#121410] px-6 lg:px-12 py-3 overflow-x-auto no-scrollbar sticky top-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center gap-2 min-w-max">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  window.location.hash = `#${tab.id}`;
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`font-mono text-xs uppercase tracking-wider px-3.5 py-2 border transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#D7FF00] text-[#090A08] border-[#D7FF00] font-bold shadow-md'
                    : 'bg-[#090A08] text-neutral-400 border-white/15 hover:border-[#D7FF00]/40 hover:text-white'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#090A08]' : 'text-[#D7FF00]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Room Viewport */}
      <div className="flex-1">
        {activeTab === 'atlas' && (
          <HistoricalAtlas onSelectRecord={onSelectRecord} onBackToHome={onBackToHome} />
        )}
        {activeTab === 'timeline' && (
          <LivingTimeline onSelectRecord={onSelectRecord} onBackToHome={onBackToHome} />
        )}
        {activeTab === 'compare' && (
          <CivilizationComparison onSelectRecord={onSelectRecord} onBackToHome={onBackToHome} />
        )}
        {activeTab === 'documents' && (
          <ArtefactArchive onSelectRecord={onSelectRecord} onBackToHome={onBackToHome} />
        )}
        {activeTab === 'timemachine' && (
          <TimeMachine 
            onSelectRecord={onSelectRecord} 
            onBackToHome={onBackToHome}
            onOpenAtlas={() => {
              setActiveTab('atlas');
              window.location.hash = '#atlas';
            }} 
          />
        )}
        {activeTab === 'network' && (
          <PersonalitiesNetwork onSelectRecord={onSelectRecord} onBackToHome={onBackToHome} />
        )}
        {activeTab === 'connections' && (
          <ConnectionsEngine onSelectRecord={onSelectRecord} onBackToHome={onBackToHome} />
        )}
        {activeTab === 'humans' && (
          <EverydayLifeArchive onSelectRecord={onSelectRecord} onBackToHome={onBackToHome} />
        )}
        {activeTab === 'daily' && (
          <DailyHistory onSelectRecord={onSelectRecord} onBackToHome={onBackToHome} />
        )}
      </div>

      {/* Global Suite Footer */}
      <footer className="border-t border-white/10 bg-[#090A08] px-6 lg:px-12 py-8 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="font-oswald text-base text-white tracking-wider">EPOCH</span>
            <span>// INTERCONNECTED DIGITAL ARCHIVE OF HUMAN CIVILIZATION</span>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={onBackToHome} className="hover:text-[#D7FF00] transition-colors cursor-pointer">
              Front Page
            </button>
            <button onClick={onOpenExplorer} className="hover:text-[#D7FF00] transition-colors cursor-pointer">
              Search Index
            </button>
            <span>© 2026 EPOCH ARCHIVES</span>
          </div>
        </div>
      </footer>

    </div>
  );
};
