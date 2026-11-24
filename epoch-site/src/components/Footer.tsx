import React from 'react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenExplorer?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenExplorer }) => {
  return (
    <footer className="bg-[#090A08] text-neutral-400 font-manrope border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        
        {/* Col 1: Brand Wordmark & Mission */}
        <div className="lg:col-span-2 flex flex-col items-start gap-6">
          <div className="flex items-center gap-2">
            <span className="font-oswald text-3xl font-bold tracking-wider text-white">EPOCH</span>
            <span className="font-mono text-[10px] text-[#D7FF00] uppercase border border-[#D7FF00]/40 px-2 py-0.5 rounded-sm">
              THE HUMAN STORY
            </span>
          </div>
          <p className="text-sm text-neutral-300 max-w-sm leading-relaxed font-light">
            An open-access digital archive dedicated to preserving the complete narrative of human civilization across millennia, cultures, geography, and revolutions.
          </p>
          <div className="font-mono text-xs text-neutral-500 pt-2">
            © {new Date().getFullYear()} EPOCH ARCHIVE FOUNDATION. OPEN ACCESS SCHOLARSHIP.
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="flex flex-col gap-4 font-mono text-xs uppercase tracking-wider">
          <span className="text-white font-bold mb-2">// Navigation</span>
          <button onClick={() => onNavigateSection('hero')} className="text-left hover:text-[#D7FF00] transition-colors cursor-pointer">
            Cinematic Home
          </button>
          <button onClick={() => onNavigateSection('timeline')} className="text-left hover:text-[#D7FF00] transition-colors cursor-pointer">
            Chronological Timeline
          </button>
          <button onClick={() => onNavigateSection('civilizations')} className="text-left hover:text-[#D7FF00] transition-colors cursor-pointer">
            Civilizations Archive
          </button>
          <button onClick={() => onNavigateSection('figures')} className="text-left hover:text-[#D7FF00] transition-colors cursor-pointer">
            Historical Personalities
          </button>
        </div>

        {/* Col 3: Archives Categories */}
        <div className="flex flex-col gap-4 font-mono text-xs uppercase tracking-wider">
          <span className="text-white font-bold mb-2">// Archives</span>
          <button onClick={() => onNavigateSection('conflicts')} className="text-left hover:text-[#D7FF00] transition-colors cursor-pointer">
            Wars & Conflict Dossiers
          </button>
          <button onClick={() => onNavigateSection('religions')} className="text-left hover:text-[#D7FF00] transition-colors cursor-pointer">
            Beliefs & Sacred Texts
          </button>
          <button onClick={() => onNavigateSection('revolutions')} className="text-left hover:text-[#D7FF00] transition-colors cursor-pointer">
            Science & Revolutions
          </button>
          <button onClick={() => onNavigateSection('daily-life')} className="text-left hover:text-[#D7FF00] transition-colors cursor-pointer">
            Everyday Anthropology
          </button>
        </div>

        {/* Col 4: Institutional Curation */}
        <div className="flex flex-col gap-4 font-mono text-xs uppercase tracking-wider">
          <span className="text-white font-bold mb-2">// Institutional</span>
          <span className="text-neutral-400">Library of Congress</span>
          <span className="text-neutral-400">Smithsonian Open Access</span>
          <span className="text-neutral-400">Wikimedia Commons</span>
          <span className="text-neutral-400">British Museum Collections</span>
          <span className="text-neutral-400">Archaeological Surveys</span>
        </div>

      </div>

      {/* Bottom Ticker Row */}
      <div className="border-t border-white/10 py-4 bg-[#121410] overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee items-center gap-12 font-mono text-[11px] uppercase tracking-widest text-neutral-400">
          <span>EPOCH DIGITAL ARCHIVE SYSTEM</span>
          <span className="w-1.5 h-1.5 bg-[#D7FF00] rounded-full" />
          <span>FROM PREHISTORY TO CONTEMPORARY CIVILIZATION</span>
          <span className="w-1.5 h-1.5 bg-[#D7FF00] rounded-full" />
          <span>SEVEN CONTINENTS</span>
          <span className="w-1.5 h-1.5 bg-[#D7FF00] rounded-full" />
          <span>ONE INTERCONNECTED HUMAN STORY</span>
          <span className="w-1.5 h-1.5 bg-[#D7FF00] rounded-full" />
          <span>PRESERVING MEMORY FOR POSTERITY</span>
          <span className="w-1.5 h-1.5 bg-[#D7FF00] rounded-full" />
        </div>
      </div>
    </footer>
  );
};
