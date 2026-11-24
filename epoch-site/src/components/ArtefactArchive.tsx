/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  FileText, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  ExternalLink, 
  BookOpen, 
  Search, 
  Tag, 
  X,
  Maximize2,
  ShieldCheck,
  Building
} from 'lucide-react';
import { 
  archivalArtefacts, 
  HistoricalDocumentArtefact 
} from '../data/historicalEngineData';

interface ArtefactArchiveProps {
  onSelectRecord?: (id: string) => void;
  onBackToHome?: () => void;
}

export const ArtefactArchive: React.FC<ArtefactArchiveProps> = ({
  onSelectRecord,
  onBackToHome
}) => {
  const [selectedArtefact, setSelectedArtefact] = useState<HistoricalDocumentArtefact | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [modalZoom, setModalZoom] = useState<number>(1);

  // Extract all unique tags
  const allTags = ['all', ...Array.from(new Set(archivalArtefacts.flatMap(a => a.tags)))];

  const filteredArtefacts = archivalArtefacts.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.institution.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'all' || art.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="bg-[#090A08] text-[#F3F4F6] min-h-screen font-manrope selection:bg-[#D7FF00] selection:text-[#090A08]">
      
      {/* Editorial Top Ribbon */}
      <div className="border-b border-white/10 px-6 lg:px-12 py-6 bg-[#0E100C]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#D7FF00] bg-[#D7FF00]/10 border border-[#D7FF00]/30 px-2 py-0.5">
                Archival Records & Epigraphy Division
              </span>
              <span className="font-mono text-[10px] text-neutral-400 tracking-wider">
                AUTHENTIC INSTITUTIONAL PROVENANCE
              </span>
            </div>
            <h1 className="font-oswald text-3xl md:text-5xl text-white uppercase tracking-tight">
              HISTORICAL DOCUMENTS & ARTEFACT ARCHIVE
            </h1>
            <p className="font-serif italic text-neutral-300 text-sm md:text-base max-w-2xl mt-1">
              Inspect primary source manuscripts, monumental rock inscriptions, constitutional treaties, and archaeological masterpieces from the world's leading museums and open-access collections.
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

      {/* Search & Tag Filter Bar */}
      <div className="border-b border-white/10 bg-[#121410] px-6 lg:px-12 py-4 sticky top-16 z-30 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search manuscripts, treaties, museums..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#090A08] border border-white/20 pl-9 pr-4 py-2 text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-[#D7FF00]"
            />
          </div>

          {/* Tag Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full md:w-auto">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`font-mono text-[11px] uppercase tracking-wider px-3 py-1 border whitespace-nowrap transition-colors cursor-pointer ${
                  selectedTag === tag
                    ? 'border-[#D7FF00] text-[#D7FF00] bg-[#D7FF00]/10 font-bold'
                    : 'border-white/10 text-neutral-400 hover:text-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Main Artefact Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtefacts.map((art) => (
            <div
              key={art.id}
              className="border border-white/15 bg-[#0E100C] hover:border-[#D7FF00]/60 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Visual Framing with Document Stamp */}
                <div className="relative aspect-[4/3] overflow-hidden bg-black border-b border-white/10">
                  <img
                    src={art.imageUrl}
                    alt={art.title}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#090A08]/90 border border-white/20 px-2 py-0.5 font-mono text-[10px] text-[#D7FF00] tracking-widest uppercase">
                    {art.date}
                  </div>
                  <button
                    onClick={() => { setSelectedArtefact(art); setModalZoom(1); }}
                    className="absolute bottom-3 right-3 bg-[#090A08]/90 hover:bg-[#D7FF00] text-neutral-300 hover:text-[#090A08] border border-white/20 p-2 transition-colors cursor-pointer"
                    title="Inspect High Resolution"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>

                {/* Artefact Information */}
                <div className="p-6">
                  <span className="font-mono text-[10px] text-[#A88B55] uppercase tracking-widest block mb-1">
                    {art.period}
                  </span>
                  
                  <h3 className="font-oswald text-2xl text-white uppercase tracking-tight mb-2 group-hover:text-[#D7FF00] transition-colors">
                    {art.title}
                  </h3>

                  <div className="font-mono text-[11px] text-neutral-400 mb-4 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-neutral-500" />
                    <span className="truncate">{art.institution}</span>
                  </div>

                  <p className="font-serif text-sm text-neutral-300 leading-relaxed line-clamp-3 mb-4">
                    {art.description}
                  </p>

                  {/* Tags */}
                  <div className="flex items-center gap-1.5 flex-wrap pt-3 border-t border-white/10">
                    {art.tags.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="font-mono text-[9px] uppercase px-1.5 py-0.5 border border-white/10 text-neutral-400">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-white/5 mt-4">
                <button
                  onClick={() => { setSelectedArtefact(art); setModalZoom(1); }}
                  className="font-mono text-xs uppercase tracking-wider text-[#D7FF00] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Examine Document</span>
                </button>

                {art.recordId && onSelectRecord && (
                  <button
                    onClick={() => onSelectRecord(art.recordId!)}
                    className="font-mono text-xs text-neutral-400 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <span>Context</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Deep Examination Modal */}
      {selectedArtefact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8 bg-black/90 backdrop-blur-md">
          <div className="bg-[#10120E] border border-white/20 max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl relative overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-white/10 bg-[#090A08] flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] text-[#D7FF00] uppercase tracking-widest block mb-1">
                  ARCHIVAL TRANSCRIPTION & PROVENANCE RECORD
                </span>
                <h2 className="font-oswald text-2xl md:text-3xl text-white uppercase tracking-tight">
                  {selectedArtefact.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedArtefact(null)}
                className="text-neutral-400 hover:text-[#D7FF00] p-2 border border-white/10 bg-[#121410] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Image Viewer with Zoom Controls */}
              <div className="lg:col-span-6 flex flex-col gap-3">
                <div className="relative aspect-[4/3] bg-black border border-white/15 overflow-hidden flex items-center justify-center">
                  <img
                    src={selectedArtefact.imageUrl}
                    alt={selectedArtefact.title}
                    style={{ transform: `scale(${modalZoom})` }}
                    className="max-h-full max-w-full object-contain transition-transform duration-200"
                  />
                  
                  {/* Floating Zoom Bar */}
                  <div className="absolute bottom-3 right-3 bg-[#090A08]/90 border border-white/20 flex items-center p-1 gap-1">
                    <button
                      onClick={() => setModalZoom(prev => Math.min(prev + 0.25, 2.5))}
                      className="p-1 hover:text-[#D7FF00] text-neutral-300 transition-colors"
                      title="Zoom In"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setModalZoom(prev => Math.max(prev - 0.25, 1))}
                      className="p-1 hover:text-[#D7FF00] text-neutral-300 transition-colors"
                      title="Zoom Out"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setModalZoom(1)}
                      className="p-1 hover:text-[#D7FF00] text-neutral-300 transition-colors"
                      title="Reset"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="p-3 bg-[#090A08] border border-white/10 font-mono text-[10px] text-neutral-400 flex items-center justify-between">
                  <span>PROVENANCE: {selectedArtefact.origin}</span>
                  <span className="text-[#A88B55]">{selectedArtefact.date}</span>
                </div>
              </div>

              {/* Right Column: Scholarship & Excerpt */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-[#D7FF00] mb-2">
                    HISTORICAL SIGNIFICANCE
                  </h4>
                  <p className="font-serif text-neutral-200 text-sm leading-relaxed mb-6">
                    {selectedArtefact.historicalSignificance}
                  </p>

                  {selectedArtefact.fullExcerpt && (
                    <div className="border-l-2 border-[#D7FF00] pl-4 py-2 bg-[#090A08]/60 mb-6">
                      <span className="font-mono text-[10px] text-[#A88B55] uppercase tracking-wider block mb-1">
                        PRIMARY SOURCE EXCERPT / TRANSCRIPTION
                      </span>
                      <blockquote className="font-serif italic text-neutral-300 text-sm leading-relaxed">
                        "{selectedArtefact.fullExcerpt}"
                      </blockquote>
                    </div>
                  )}

                  {/* Institutional Provenance Card */}
                  <div className="p-4 bg-[#090A08] border border-white/10 space-y-1.5 font-mono text-[11px] mb-6">
                    <div className="flex justify-between">
                      <span className="text-neutral-500 uppercase">Holding Institution:</span>
                      <span className="text-white text-right">{selectedArtefact.institution}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500 uppercase">Catalog / Collection:</span>
                      <span className="text-neutral-300 text-right">{selectedArtefact.collection}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500 uppercase">Creator / Origin:</span>
                      <span className="text-neutral-300 text-right">{selectedArtefact.creator}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500 uppercase">License / Rights:</span>
                      <span className="text-[#A88B55] text-right">{selectedArtefact.license}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  {selectedArtefact.recordId && onSelectRecord && (
                    <button
                      onClick={() => {
                        const rec = selectedArtefact.recordId;
                        setSelectedArtefact(null);
                        onSelectRecord(rec!);
                      }}
                      className="flex-1 font-mono text-xs uppercase tracking-widest bg-[#D7FF00] hover:bg-[#c5ec00] text-[#090A08] font-bold py-2.5 text-center transition-colors cursor-pointer"
                    >
                      Read Related Monograph
                    </button>
                  )}

                  <a
                    href={selectedArtefact.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs uppercase tracking-wider border border-white/20 hover:border-white px-4 py-2.5 text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <span>Source Catalog</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
