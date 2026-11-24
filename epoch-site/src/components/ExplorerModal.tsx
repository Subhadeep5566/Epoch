import React, { useState } from 'react';
import { X, Search, Compass, Sparkles, Calendar, Globe, BookOpen, ShieldAlert, User, Scale, Clock, FileText, Hourglass, Users, GitFork, HeartHandshake } from 'lucide-react';
import { civilizationsData } from './CivilizationArchive';
import { figuresData } from './HistoricalFigures';
import { conflictsData } from './WarArchive';
import { religionsData } from './ReligionArchive';
import { GoogleGenAI } from '@google/genai';
import { ArchivalToolTab } from './ArchivalSuiteHub';
import { knowledgeEngine } from '../data/knowledgeEngine';

interface ExplorerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectItem: (item: any) => void;
  onOpenSuite?: (tab: ArchivalToolTab) => void;
}

export const ExplorerModal: React.FC<ExplorerModalProps> = ({ isOpen, onClose, onSelectItem, onOpenSuite }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'civilizations' | 'figures' | 'conflicts' | 'religions' | 'ai'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiAnswer, setAiAnswer] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  if (!isOpen) return null;

  // Combine items for 'all' or filtered view
  const allCivs = civilizationsData.map(c => ({ ...c, type: 'civilization' as const, title: c.name }));
  const allFigs = figuresData.map(f => ({ ...f, type: 'figure' as const, title: f.name, description: f.bio }));
  const allConfs = conflictsData.map(cf => ({ ...cf, type: 'conflict' as const, title: cf.name }));
  const allRels = religionsData.map(r => ({ ...r, type: 'religion' as const, title: r.name, region: r.origin }));

  // Pull all canonical entities from the Knowledge Engine
  const allEntities = knowledgeEngine.getAllEntities().map(e => ({
    id: e.id,
    type: (e.type === 'civilization' || e.type === 'empire') ? 'civilization' as const :
          (e.type === 'person') ? 'figure' as const :
          (e.type === 'war') ? 'conflict' as const :
          (e.type === 'religion') ? 'religion' as const : e.type,
    title: e.name,
    description: e.summary,
    period: e.period,
    region: e.region,
    image: e.coverImage?.url || '/src/assets/images/hero_ancient_history_1795464676030.jpg'
  }));

  // Deduplicate and canonicalize
  const combinedItemsMap = new Map();
  for (const item of [...allEntities, ...allCivs, ...allFigs, ...allConfs, ...allRels]) {
    const canonicalId = knowledgeEngine.resolveId(item.id);
    if (!combinedItemsMap.has(canonicalId)) {
      combinedItemsMap.set(canonicalId, { ...item, id: canonicalId });
    }
  }
  const combinedItems = Array.from(combinedItemsMap.values());

  const filteredItems = combinedItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    if (activeTab === 'all') return matchesSearch;
    if (activeTab === 'civilizations') return matchesSearch && item.type === 'civilization';
    if (activeTab === 'figures') return matchesSearch && item.type === 'figure';
    if (activeTab === 'conflicts') return matchesSearch && item.type === 'conflict';
    if (activeTab === 'religions') return matchesSearch && item.type === 'religion';
    return true;
  });

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiQuestion.trim()) return;

    setAiLoading(true);
    setAiAnswer('');

    try {
      const apiKey = process.env.GEMINI_API_KEY || (window as any).ENV?.GEMINI_API_KEY;
      if (!apiKey) {
        // Fallback simulation if key is not configured in client environment
        setTimeout(() => {
          setAiAnswer(`Based on the Epoch historical archive, regarding "${aiQuestion}": Human history is a vast interconnected tapestry spanning 300,000+ years. Across ancient river valleys, classical empires, and modern revolutions, societies have continuously exchanged ideas, innovations, and philosophies. (To enable live Gemini AI historical synthesis, please ensure GEMINI_API_KEY is configured in your AI Studio secrets).`);
          setAiLoading(false);
        }, 800);
        return;
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `You are a world-class historian and chief curator for the EPOCH digital museum archive. Answer this historical inquiry with rigorous scholarship, engaging narrative prose, and deep respect for global history: ${aiQuestion}`,
      });

      setAiAnswer(response.text || 'No historical record returned.');
    } catch (err: any) {
      console.error(err);
      setAiAnswer('Unable to retrieve historical synthesis at this moment. Please try another inquiry.');
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="bg-[#121410] border border-white/20 max-w-4xl w-full h-[85vh] flex flex-col relative shadow-2xl overflow-hidden">
        
        {/* Top bar */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#090A08]">
          <div className="flex items-center gap-3">
            <Compass className="w-5 h-5 text-[#D7FF00]" />
            <div>
              <h2 className="font-oswald text-xl text-white uppercase tracking-wider">EPOCH GLOBAL ARCHIVE EXPLORER</h2>
              <span className="font-mono text-[10px] text-neutral-400">SEARCH & DISCOVER WORLD HISTORY</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-[#D7FF00] transition-colors p-2 bg-[#121410] border border-white/10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Curatorial Discovery Suites Quick Launch Strip */}
        <div className="px-6 py-3 border-b border-white/10 bg-[#0E100C] overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#D7FF00] mr-2">
              DISCOVERY SUITES:
            </span>
            {[
              { id: 'atlas' as ArchivalToolTab, label: 'Atlas (Map)', icon: Globe },
              { id: 'timeline' as ArchivalToolTab, label: 'Living Timeline', icon: Clock },
              { id: 'compare' as ArchivalToolTab, label: 'Civilization Compare', icon: Scale },
              { id: 'documents' as ArchivalToolTab, label: 'Artefacts Archive', icon: FileText },
              { id: 'timemachine' as ArchivalToolTab, label: 'Time Machine', icon: Hourglass },
              { id: 'network' as ArchivalToolTab, label: 'Personalities', icon: Users },
              { id: 'connections' as ArchivalToolTab, label: 'Connections', icon: GitFork },
              { id: 'humans' as ArchivalToolTab, label: 'Everyday Life', icon: HeartHandshake },
              { id: 'daily' as ArchivalToolTab, label: 'On This Day', icon: Calendar },
            ].map(s => {
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => {
                    if (onOpenSuite) onOpenSuite(s.id);
                    onClose();
                  }}
                  className="px-2.5 py-1 bg-[#121410] hover:bg-[#D7FF00] hover:text-[#090A08] border border-white/10 hover:border-[#D7FF00] text-neutral-300 font-mono text-[10px] uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Icon className="w-3 h-3 text-[#D7FF00] group-hover:text-[#090A08]" />
                  <span>{s.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search & Tabs */}
        <div className="p-6 border-b border-white/10 bg-[#090A08]/60 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search civilizations, figures, wars..."
              className="w-full bg-[#121410] border border-white/15 pl-10 pr-4 py-2 text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-[#D7FF00]"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto font-mono text-xs">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 uppercase transition-colors whitespace-nowrap ${activeTab === 'all' ? 'bg-[#D7FF00] text-[#090A08] font-bold' : 'bg-[#121410] text-neutral-300 border border-white/10 hover:border-[#D7FF00]'}`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab('civilizations')}
              className={`px-3 py-1.5 uppercase transition-colors whitespace-nowrap ${activeTab === 'civilizations' ? 'bg-[#D7FF00] text-[#090A08] font-bold' : 'bg-[#121410] text-neutral-300 border border-white/10 hover:border-[#D7FF00]'}`}
            >
              Civilizations
            </button>
            <button
              onClick={() => setActiveTab('figures')}
              className={`px-3 py-1.5 uppercase transition-colors whitespace-nowrap ${activeTab === 'figures' ? 'bg-[#D7FF00] text-[#090A08] font-bold' : 'bg-[#121410] text-neutral-300 border border-white/10 hover:border-[#D7FF00]'}`}
            >
              Figures
            </button>
            <button
              onClick={() => setActiveTab('conflicts')}
              className={`px-3 py-1.5 uppercase transition-colors whitespace-nowrap ${activeTab === 'conflicts' ? 'bg-[#D7FF00] text-[#090A08] font-bold' : 'bg-[#121410] text-neutral-300 border border-white/10 hover:border-[#D7FF00]'}`}
            >
              Wars
            </button>
            <button
              onClick={() => setActiveTab('religions')}
              className={`px-3 py-1.5 uppercase transition-colors whitespace-nowrap ${activeTab === 'religions' ? 'bg-[#D7FF00] text-[#090A08] font-bold' : 'bg-[#121410] text-neutral-300 border border-white/10 hover:border-[#D7FF00]'}`}
            >
              Religions
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-3 py-1.5 uppercase transition-colors whitespace-nowrap flex items-center gap-1.5 ${activeTab === 'ai' ? 'bg-[#D7FF00] text-[#090A08] font-bold' : 'bg-[#121410] text-[#D7FF00] border border-[#D7FF00]/40'}`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ask AI Historian</span>
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-grow overflow-y-auto p-6">
          {activeTab === 'ai' ? (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="bg-[#090A08] border border-white/15 p-6">
                <div className="flex items-center gap-2 font-mono text-xs text-[#D7FF00] uppercase mb-3">
                  <Sparkles className="w-4 h-4" />
                  <span>EPOCH Curatorial AI Assistant</span>
                </div>
                <p className="font-manrope text-sm text-neutral-300 mb-6">
                  Ask any question about world history, civilizations, philosophical traditions, or historical figures. Our historical synthesis engine will consult global archives.
                </p>
                <form onSubmit={handleAskAI} className="space-y-4">
                  <textarea
                    value={aiQuestion}
                    onChange={(e) => setAiQuestion(e.target.value)}
                    placeholder="e.g., How did trade routes connect the Indus Valley with Mesopotamia?"
                    rows={3}
                    className="w-full bg-[#121410] border border-white/20 p-4 text-sm font-manrope text-white placeholder-neutral-500 focus:outline-none focus:border-[#D7FF00]"
                  />
                  <button
                    type="submit"
                    disabled={aiLoading}
                    className="w-full bg-[#D7FF00] text-[#090A08] py-3 font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {aiLoading ? 'Synthesizing Historical Records...' : 'Generate Historical Synthesis'}
                  </button>
                </form>
              </div>

              {aiAnswer && (
                <div className="bg-[#121410] border border-[#D7FF00]/40 p-6 space-y-3">
                  <span className="font-mono text-xs text-[#D7FF00] uppercase block">// SYNTHESIS RESULT</span>
                  <p className="font-manrope text-sm text-neutral-200 leading-relaxed whitespace-pre-line">
                    {aiAnswer}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredItems.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    onClose();
                    onSelectItem(item);
                  }}
                  className="bg-[#090A08] border border-white/10 p-6 hover:border-[#D7FF00] transition-colors cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 font-mono text-[10px]">
                      <span className="text-[#D7FF00] uppercase">{item.type}</span>
                      <span className="text-neutral-500">{(item as any).period || (item as any).dates || ''}</span>
                    </div>
                    <h3 className="font-oswald text-xl text-white uppercase tracking-wider group-hover:text-[#D7FF00] transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="font-manrope text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-[#D7FF00] uppercase">
                    <span>Inspect Archive</span>
                    <span>→</span>
                  </div>
                </div>
              ))}
              {filteredItems.length === 0 && (
                <div className="col-span-2 text-center py-16 font-mono text-xs text-neutral-500 uppercase">
                  No historical entries found matching your query.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-[#090A08] flex items-center justify-between font-mono text-xs text-neutral-500">
          <span>EPOCH ARCHIVE SYSTEM V1.0</span>
          <span>PRESS ESC TO CLOSE</span>
        </div>
      </div>
    </div>
  );
};
