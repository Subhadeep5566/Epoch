import React, { useState, useEffect } from 'react';
import { ArrowLeft, Headphones, Globe, GitFork, Scale } from 'lucide-react';
import { HistoricalRecord, historicalRecordsDatabase } from '../data/historicalData';
import { HistoricalImage } from './HistoricalImage';
import { AudioNarrator } from './AudioNarrator';
import { ArchivalToolTab } from './ArchivalSuiteHub';

interface ContinuousBookPageProps {
  recordId: string;
  onBack: () => void;
  onSelectRecord: (id: string) => void;
  onOpenSuite?: (tab: ArchivalToolTab) => void;
}

export const ContinuousBookPage: React.FC<ContinuousBookPageProps> = ({ 
  recordId, 
  onBack, 
  onSelectRecord,
  onOpenSuite 
}) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [audioOpen, setAudioOpen] = useState(false);
  const record: HistoricalRecord = historicalRecordsDatabase[recordId] || historicalRecordsDatabase['kalinga-war'];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [recordId]);

  return (
    <div className="min-h-screen bg-[#F3EFE5] text-[#171717] font-manrope selection:bg-[#A88B55] selection:text-[#F3EFE5]">
      
      {/* Minimal Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#F3EFE5]/95 backdrop-blur-sm border-b border-[#171717]/20 px-6 lg:px-12 py-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#45413B] hover:text-[#A88B55] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#A88B55]" />
          <span>EPOCH — Back to Archive</span>
        </button>

        <div className="flex items-center gap-4">
          <span className="font-oswald uppercase tracking-wider text-xs text-[#A88B55] hidden sm:inline">
            CONTINUOUS ARCHIVAL MONOGRAPH
          </span>
          <div className="w-24 h-1 bg-[#171717]/10 rounded-full overflow-hidden">
            <div className="h-full bg-[#A88B55] transition-all duration-150" style={{ width: `${readingProgress}%` }} />
          </div>
        </div>
      </header>

      {/* Single Continuous Reading Column (~820px) */}
      <main className="max-w-[820px] mx-auto px-6 sm:px-12 py-16 sm:py-24 space-y-16">
        
        {/* Title & Introductory Metadata */}
        <div className="space-y-6 pb-12 border-b border-[#171717]/20">
          <div className="flex items-center gap-3 font-mono text-xs text-[#A88B55] uppercase tracking-widest">
            <span className="w-2 h-2 bg-[#A88B55]" />
            <span>{record.category}</span>
            <span>·</span>
            <span>{record.geographicRegion}</span>
          </div>

          <h1 className="font-oswald text-4xl sm:text-7xl font-bold uppercase tracking-tight text-[#171717] leading-[1.05]">
            {record.title}
          </h1>

          <p className="font-mono text-xs text-[#45413B] uppercase tracking-widest">
            Established Period: {record.period}
          </p>

          <div className="pt-2">
            <p className="font-manrope text-lg sm:text-xl text-[#45413B] font-light leading-relaxed">
              "{record.summary}"
            </p>
          </div>

          {/* Curatorial Media & Exploration Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={() => setAudioOpen(!audioOpen)}
              className="flex items-center gap-2 px-3 py-1.5 border border-[#171717]/30 bg-[#E9E1D2] hover:bg-[#A88B55] hover:text-white transition-colors font-mono text-xs uppercase tracking-wider cursor-pointer"
            >
              <Headphones className="w-3.5 h-3.5" />
              <span>{audioOpen ? 'Close Audio Narration' : 'Listen to Spoken Monograph'}</span>
            </button>

            {onOpenSuite && (
              <>
                <button
                  onClick={() => onOpenSuite('atlas')}
                  className="flex items-center gap-1.5 px-3 py-1.5 border border-[#171717]/20 hover:border-[#A88B55] transition-colors font-mono text-xs uppercase tracking-wider text-[#45413B] hover:text-[#171717] cursor-pointer"
                >
                  <Globe className="w-3.5 h-3.5 text-[#A88B55]" />
                  <span>Inspect on Atlas</span>
                </button>
                <button
                  onClick={() => onOpenSuite('connections')}
                  className="flex items-center gap-1.5 px-3 py-1.5 border border-[#171717]/20 hover:border-[#A88B55] transition-colors font-mono text-xs uppercase tracking-wider text-[#45413B] hover:text-[#171717] cursor-pointer"
                >
                  <GitFork className="w-3.5 h-3.5 text-[#A88B55]" />
                  <span>Connections & Causal Chain</span>
                </button>
              </>
            )}
          </div>

          {/* Synchronized Audio Narrator Player if Active */}
          {audioOpen && (
            <div className="my-6">
              <AudioNarrator
                title={record.title}
                authorOrCurator={`EPOCH Archival Monograph // ${record.period}`}
                narrativeText={`${record.summary}. ${record.historicalContext}. ${record.chapters.map(c => c.content).join(' ')}`}
                onClose={() => setAudioOpen(false)}
              />
            </div>
          )}

          {/* Cover Image using HistoricalImage component */}
          {record.coverImage && <HistoricalImage image={record.coverImage} />}
        </div>

        {/* Historical Context Section */}
        <section className="space-y-6">
          <h2 className="font-oswald text-2xl sm:text-4xl font-bold uppercase tracking-wide text-[#171717] border-l-4 border-[#A88B55] pl-4">
            Historical Context & Environment
          </h2>
          <div className="font-manrope text-base sm:text-lg leading-[1.8] text-[#45413B] space-y-6 font-light">
            <p>
              {record.historicalContext}
            </p>
          </div>
        </section>

        {/* Primary Source Document */}
        {record.primarySource && (
          <div className="my-10 p-8 border border-[#171717]/20 bg-[#E9E1D2] space-y-4">
            <div className="flex items-center justify-between font-mono text-xs text-[#A88B55] uppercase">
              <span>Primary Source Document</span>
              <span>{record.primarySource.date}</span>
            </div>
            <h3 className="font-oswald text-xl uppercase tracking-wider text-[#171717]">{record.primarySource.title}</h3>
            <p className="font-manrope italic text-base text-[#45413B] leading-relaxed font-light">
              "{record.primarySource.excerpt}"
            </p>
            <p className="font-mono text-xs text-[#45413B] pt-3 border-t border-[#171717]/10">
              Context: {record.primarySource.context}
            </p>
          </div>
        )}

        {/* Continuous Narrative Chapters */}
        <div className="space-y-16">
          {record.chapters.map((ch, idx) => (
            <section key={idx} className="space-y-6">
              <h2 className="font-oswald text-2xl sm:text-3xl font-bold uppercase tracking-wide text-[#171717] pt-6 border-t border-[#171717]/10">
                {ch.subtitle}
              </h2>

              <div className="font-manrope text-base sm:text-lg leading-[1.8] text-[#45413B] space-y-6 font-light">
                <p>
                  {ch.content}
                </p>
              </div>

              {ch.image && <HistoricalImage image={ch.image} />}
            </section>
          ))}
        </div>

        {/* Causes & Consequences Section */}
        <section className="space-y-6 border-t border-[#171717]/20 pt-12">
          <h2 className="font-oswald text-2xl sm:text-3xl font-bold uppercase tracking-wide text-[#171717]">Causes & Historical Significance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-manrope text-sm text-[#45413B]">
            <div className="bg-[#E9E1D2] p-6 border border-[#171717]/20">
              <h3 className="font-mono text-xs uppercase text-[#A88B55] font-bold mb-3">// Primary Causes</h3>
              <ul className="space-y-2 font-light">
                {record.causes.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#A88B55]">·</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#E9E1D2] p-6 border border-[#171717]/20">
              <h3 className="font-mono text-xs uppercase text-[#A88B55] font-bold mb-3">// Historical Consequences</h3>
              <ul className="space-y-2 font-light">
                {record.consequences.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#A88B55]">·</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Related Records & Return Section */}
        <section className="space-y-6 border-t border-[#171717]/20 pt-10">
          <h3 className="font-mono text-xs uppercase tracking-widest text-[#A88B55]">// Related Historical Monographs</h3>
          <div className="flex flex-wrap gap-3">
            {record.relatedIds && record.relatedIds.map((relId) => {
              const relRecord = historicalRecordsDatabase[relId];
              return (
                <button
                  key={relId}
                  onClick={() => onSelectRecord(relId)}
                  className="bg-[#E9E1D2] border border-[#171717]/20 hover:border-[#A88B55] px-4 py-2 font-mono text-xs text-[#171717] hover:text-[#A88B55] transition-colors cursor-pointer"
                >
                  {relRecord ? relRecord.title : relId.toUpperCase()} →
                </button>
              );
            })}
            <button
              onClick={onBack}
              className="bg-[#171717] text-[#F3EFE5] hover:bg-[#A88B55] px-5 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              ← Back to Main Archive
            </button>
          </div>
        </section>

        {/* References Section */}
        {record.references && record.references.length > 0 && (
          <section className="space-y-4 border-t border-[#171717]/20 pt-10 pb-16">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#A88B55]">Verified Archival References & Sources</h3>
            <ul className="space-y-2 font-mono text-xs text-[#45413B]">
              {record.references.map((ref, idx) => (
                <li key={idx}>[{idx + 1}] {ref}</li>
              ))}
            </ul>
          </section>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-[#171717]/20 py-12 px-6 text-center font-mono text-xs text-[#45413B] uppercase tracking-widest bg-[#E9E1D2]">
        <p>EPOCH DIGITAL ARCHIVE — AUTHENTIC OPEN-ACCESS HISTORICAL SCHOLARSHIP.</p>
      </footer>
    </div>
  );
};
