import React, { useState } from 'react';
import { Search, Compass, ArrowRight, BookOpen, ShieldAlert, Globe, User } from 'lucide-react';
import { historicalRecordsDatabase, HistoricalRecord } from '../data/historicalData';
import { ArchivalToolTab } from './ArchivalSuiteHub';

interface NewspaperHomepageProps {
  onOpenExplorer: () => void;
  onSelectRecord: (id: string) => void;
  onToggleMode?: () => void;
  onOpenSuite?: (tab: ArchivalToolTab) => void;
}

export const NewspaperHomepage: React.FC<NewspaperHomepageProps> = ({ 
  onOpenExplorer, 
  onSelectRecord, 
  onToggleMode,
  onOpenSuite 
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'Civilization' | 'War' | 'Empire'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Deduplicate records map
  const records = Array.from(new Map(Object.values(historicalRecordsDatabase).map(r => [r.id, r])).values());
  const filteredRecords = records.filter(r => {
    const matchesTab = activeTab === 'all' || r.category === activeTab;
    const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          r.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F3EFE5] text-[#171717] font-manrope selection:bg-[#A88B55] selection:text-[#F3EFE5]">
      
      {/* Newspaper Top Bar */}
      <div className="border-b border-[#171717]/20 py-2 px-6 lg:px-12 bg-[#E9E1D2] flex items-center justify-between font-mono text-[11px] text-[#45413B]">
        <span>VOL. CXXVI NO. 42,019</span>
        <span className="hidden sm:inline">THE COMPLETE DIGITAL ENCYCLOPEDIA OF HUMAN CIVILIZATION</span>
        <span>EDITION: GLOBAL ARCHIVE</span>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-[#F3EFE5]/95 backdrop-blur-md border-b border-[#171717]/20 px-6 lg:px-12 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="font-oswald text-3xl font-bold tracking-wider text-[#171717]">EPOCH</span>
          <span className="font-mono text-[10px] bg-[#A88B55] text-white px-1.5 py-0.5">EST. 2026</span>
        </div>

        <nav className="hidden lg:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-[#45413B]">
          <a href="#home" className="hover:text-[#A88B55] transition-colors">Home</a>
          <a href="#timeline" className="hover:text-[#A88B55] transition-colors">Timeline</a>
          <a href="#explore" className="hover:text-[#A88B55] transition-colors">Civilizations</a>
          <a href="#explore" className="hover:text-[#A88B55] transition-colors">Wars</a>
          <a href="#explore" className="hover:text-[#A88B55] transition-colors">Religions</a>
          <a href="#explore" className="hover:text-[#A88B55] transition-colors">Personalities</a>
          <button 
            onClick={() => onOpenSuite ? onOpenSuite('atlas') : onOpenExplorer()} 
            className="hover:text-[#A88B55] transition-colors cursor-pointer uppercase"
          >
            Archive
          </button>
        </nav>

        <div className="flex items-center gap-4">
          {onToggleMode && (
            <button
              onClick={onToggleMode}
              className="hidden sm:flex items-center gap-1.5 border border-[#171717]/30 text-[#171717] px-3 py-1.5 font-mono text-xs uppercase tracking-wider hover:border-[#A88B55] hover:text-[#A88B55] transition-colors cursor-pointer"
            >
              <span>Cinematic Mode</span>
            </button>
          )}
          <button
            onClick={onOpenExplorer}
            className="flex items-center gap-2 bg-[#171717] text-[#F3EFE5] px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#A88B55] transition-colors cursor-pointer"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search & Explore</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative border-b border-[#171717]/20 px-6 lg:px-12 py-20 lg:py-32 bg-[#E9E1D2]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#A88B55] block">
              // THE STORY OF HUMANITY
            </span>
            <h1 className="font-oswald text-6xl sm:text-8xl font-bold uppercase tracking-tight text-[#171717] leading-[0.95]">
              THE STORY <br />
              OF <span className="text-[#A88B55]">EVERYTHING.</span>
            </h1>
            <p className="font-book-sans text-lg sm:text-xl text-[#45413B] max-w-xl font-light leading-relaxed">
              From the first civilizations to the world we inhabit today. Every empire, every revolution, every belief, every discovery. The complete story of humanity.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onSelectRecord('world-war-ii')}
                className="bg-[#641F25] text-[#F3EFE5] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#171717] transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                <span>Read World War II Monograph</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenExplorer}
                className="bg-transparent border border-[#171717]/30 text-[#171717] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider hover:border-[#A88B55] hover:text-[#A88B55] transition-colors cursor-pointer"
              >
                Explore Archive Index
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 border border-[#171717]/20 p-3 bg-[#F3EFE5] shadow-lg">
            <div className="aspect-[3/4] overflow-hidden bg-[#171717]">
              <img
                src={historicalRecordsDatabase['world-war-ii'].coverImage.url}
                alt="World War II archival"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
            <div className="mt-3 font-mono text-[11px] text-[#45413B]">
              <span className="font-bold uppercase text-[#A88B55]">FEATURED MONOGRAPH</span> — World War II (1939–1945)
            </div>
          </div>
        </div>
      </section>

      {/* Historical Exploration Section */}
      <section id="explore" className="py-24 px-6 lg:px-12 border-b border-[#171717]/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="font-mono text-xs text-[#A88B55] uppercase tracking-widest block mb-2">// THE ARCHIVE INDEX</span>
              <h2 className="font-oswald text-4xl sm:text-5xl text-[#171717] uppercase">
                EXPLORE CIVILIZATIONS, <br />
                EMPIRES & WARS
              </h2>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 uppercase ${activeTab === 'all' ? 'bg-[#171717] text-[#F3EFE5]' : 'bg-[#E9E1D2] text-[#45413B]'}`}
              >
                All Records
              </button>
              <button
                onClick={() => setActiveTab('War')}
                className={`px-3 py-1.5 uppercase ${activeTab === 'War' ? 'bg-[#171717] text-[#F3EFE5]' : 'bg-[#E9E1D2] text-[#45413B]'}`}
              >
                Wars
              </button>
              <button
                onClick={() => setActiveTab('Civilization')}
                className={`px-3 py-1.5 uppercase ${activeTab === 'Civilization' ? 'bg-[#171717] text-[#F3EFE5]' : 'bg-[#E9E1D2] text-[#45413B]'}`}
              >
                Civilizations
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredRecords.map((rec) => (
              <div
                key={rec.id}
                onClick={() => onSelectRecord(rec.id)}
                className="bg-[#E9E1D2] border border-[#171717]/20 p-6 flex flex-col justify-between group hover:border-[#A88B55] transition-all cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 font-mono text-[10px] text-[#A88B55] uppercase">
                    <span>{rec.category}</span>
                    <span>{rec.period}</span>
                  </div>
                  <h3 className="font-oswald text-2xl text-[#171717] uppercase group-hover:text-[#A88B55] transition-colors mb-3">
                    {rec.title}
                  </h3>
                  <div className="aspect-[16/10] overflow-hidden mb-4 border border-[#171717]/20 bg-[#171717]">
                    <img
                      src={rec.coverImage.url}
                      alt={rec.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <p className="font-manrope text-xs text-[#45413B] line-clamp-3 font-light leading-relaxed">
                    {rec.summary}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-[#171717]/10 flex items-center justify-between font-mono text-xs uppercase text-[#641F25] font-bold">
                  <span>Open Full Monograph</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section id="timeline" className="py-24 px-6 lg:px-12 bg-[#E9E1D2] border-b border-[#171717]/20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <span className="font-mono text-xs text-[#A88B55] uppercase tracking-widest block">// CHRONOLOGICAL EPOCHS</span>
          <h2 className="font-oswald text-4xl sm:text-6xl text-[#171717] uppercase">
            THE SWEEP OF TIME
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs uppercase">
            <div className="bg-[#F3EFE5] border border-[#171717]/20 p-6">
              <span className="text-[#A88B55] block font-bold mb-1">PREHISTORY</span>
              <span className="text-[#45413B] text-[11px]">Origins to 3000 BCE</span>
            </div>
            <div className="bg-[#F3EFE5] border border-[#171717]/20 p-6">
              <span className="text-[#A88B55] block font-bold mb-1">ANCIENT WORLD</span>
              <span className="text-[#45413B] text-[11px]">3000 BCE – 500 CE</span>
            </div>
            <div className="bg-[#F3EFE5] border border-[#171717]/20 p-6">
              <span className="text-[#A88B55] block font-bold mb-1">MEDIEVAL ERA</span>
              <span className="text-[#45413B] text-[11px]">500 CE – 1500 CE</span>
            </div>
            <div className="bg-[#F3EFE5] border border-[#171717]/20 p-6">
              <span className="text-[#A88B55] block font-bold mb-1">MODERN WORLD</span>
              <span className="text-[#45413B] text-[11px]">1500 CE – Present</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="archive" className="bg-[#171717] text-[#F3EFE5] py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 font-mono text-xs">
          <div className="space-y-4">
            <span className="font-oswald text-3xl font-bold tracking-wider text-white">EPOCH</span>
            <p className="font-manrope text-neutral-400 text-xs leading-relaxed">
              An interactive digital encyclopedia dedicated to documenting the complete story of human civilization.
            </p>
          </div>
          <div className="space-y-2 uppercase">
            <span className="text-[#A88B55] font-bold block mb-2">Navigation</span>
            <a href="#home" className="block hover:text-[#A88B55]">Home</a>
            <a href="#timeline" className="block hover:text-[#A88B55]">Timeline</a>
            <a href="#explore" className="block hover:text-[#A88B55]">Civilizations & Wars</a>
          </div>
          <div className="space-y-2 uppercase">
            <span className="text-[#A88B55] font-bold block mb-2">Open Access</span>
            <span className="block text-neutral-400">Wikimedia Commons</span>
            <span className="block text-neutral-400">Library of Congress</span>
            <span className="block text-neutral-400">Smithsonian Open Access</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center font-mono text-[11px] text-neutral-500 uppercase">
          © 2026 EPOCH DIGITAL ARCHIVE. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
};
