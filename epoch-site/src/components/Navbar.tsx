import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, Play, Volume2, VolumeX, Newspaper, Film, ChevronDown, Globe, Clock, Scale, FileText, Hourglass, Users, GitFork, HeartHandshake, Calendar } from 'lucide-react';
import { audioAtmosphere } from '../utils/audioAtmosphere';
import { ArchivalToolTab } from './ArchivalSuiteHub';

interface NavbarProps {
  onOpenExplorer: () => void;
  onNavigateSection: (sectionId: string) => void;
  currentMode?: 'cinematic' | 'broadsheet';
  onToggleMode?: () => void;
  onReplayFilm?: () => void;
  onOpenSuite?: (tab: ArchivalToolTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenExplorer, 
  onNavigateSection,
  currentMode = 'cinematic',
  onToggleMode,
  onReplayFilm,
  onOpenSuite
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [archiveDropdownOpen, setArchiveDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    if (id === 'archive') {
      if (onOpenSuite) {
        onOpenSuite('atlas');
      } else {
        onOpenExplorer();
      }
    } else {
      onNavigateSection(id);
    }
    setMobileMenuOpen(false);
    setArchiveDropdownOpen(false);
  };

  const handleSuiteClick = (tab: ArchivalToolTab) => {
    if (onOpenSuite) {
      onOpenSuite(tab);
    } else {
      window.location.hash = `#${tab}`;
    }
    setMobileMenuOpen(false);
    setArchiveDropdownOpen(false);
  };

  const toggleSound = () => {
    const active = audioAtmosphere.toggle();
    setSoundActive(active);
  };

  const suiteLinks: { id: ArchivalToolTab; label: string; icon: any }[] = [
    { id: 'atlas', label: 'Historical Atlas', icon: Globe },
    { id: 'timeline', label: 'Living Timeline', icon: Clock },
    { id: 'compare', label: 'Civilization Compare', icon: Scale },
    { id: 'documents', label: 'Artefacts & Manuscripts', icon: FileText },
    { id: 'timemachine', label: 'The Time Machine', icon: Hourglass },
    { id: 'network', label: 'Personalities Network', icon: Users },
    { id: 'connections', label: 'Connections Engine', icon: GitFork },
    { id: 'humans', label: 'The Human Side', icon: HeartHandshake },
    { id: 'daily', label: 'On This Day', icon: Calendar },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 px-6 lg:px-12 py-3.5 border-b ${
      isScrolled 
        ? 'bg-[#090A08]/95 backdrop-blur-md border-white/15 shadow-xl' 
        : 'bg-[#090A08]/80 backdrop-blur-sm border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        
        {/* Brand Wordmark */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
          className="flex items-center gap-2 group shrink-0"
        >
          <span className="font-oswald text-2xl font-bold tracking-wider text-white group-hover:text-[#D7FF00] transition-colors">
            EPOCH
          </span>
          <span className="font-mono text-[9px] tracking-widest text-[#D7FF00] uppercase border border-[#D7FF00]/40 px-1.5 py-0.5 rounded-sm">
            SYS.01
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 font-mono text-xs uppercase tracking-widest text-neutral-400">
          <button onClick={() => handleNavClick('hero')} className="hover:text-[#D7FF00] transition-colors whitespace-nowrap cursor-pointer">
            Home
          </button>
          <button onClick={() => handleNavClick('timeline')} className="hover:text-[#D7FF00] transition-colors whitespace-nowrap cursor-pointer">
            Timeline
          </button>
          <button onClick={() => handleNavClick('civilizations')} className="hover:text-[#D7FF00] transition-colors whitespace-nowrap cursor-pointer">
            Civilizations
          </button>
          <button onClick={() => handleNavClick('figures')} className="hover:text-[#D7FF00] transition-colors whitespace-nowrap cursor-pointer">
            Figures
          </button>
          <button onClick={() => handleNavClick('conflicts')} className="hover:text-[#D7FF00] transition-colors whitespace-nowrap cursor-pointer">
            Wars
          </button>
          <button onClick={() => handleNavClick('religions')} className="hover:text-[#D7FF00] transition-colors whitespace-nowrap cursor-pointer">
            Religions
          </button>

          {/* Archive Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setArchiveDropdownOpen(true)}
            onMouseLeave={() => setArchiveDropdownOpen(false)}
          >
            <button 
              onClick={() => handleNavClick('archive')} 
              className="hover:text-[#D7FF00] transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1"
            >
              <span>Archive</span>
              <ChevronDown className="w-3 h-3 text-neutral-500" />
            </button>

            {archiveDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-[#121410] border border-white/20 p-2 shadow-2xl z-50 flex flex-col gap-1">
                <div className="px-3 py-1.5 border-b border-white/10 mb-1">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#D7FF00] block">
                    Curatorial Suites
                  </span>
                </div>
                {suiteLinks.map(link => {
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleSuiteClick(link.id)}
                      className="w-full text-left px-3 py-2 text-neutral-300 hover:text-[#090A08] hover:bg-[#D7FF00] transition-colors cursor-pointer flex items-center gap-2.5 text-[11px] font-mono uppercase tracking-wider"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{link.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Right Tools & Action Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          
          {/* Replay Cinematic Tour */}
          {onReplayFilm && (
            <button
              onClick={onReplayFilm}
              className="hidden xl:flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-neutral-300 hover:text-[#D7FF00] border border-white/15 px-2.5 py-1.5 transition-colors cursor-pointer"
              title="Watch the cinematic documentary sequence"
            >
              <Play className="w-3 h-3 fill-current text-[#D7FF00]" />
              <span>Cinematic Tour</span>
            </button>
          )}

          {/* Sound Atmosphere Toggle */}
          <button
            onClick={toggleSound}
            className={`hidden sm:flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider px-2.5 py-1.5 border transition-all cursor-pointer ${
              soundActive 
                ? 'bg-[#D7FF00] text-[#090A08] border-[#D7FF00] font-bold' 
                : 'text-neutral-400 border-white/15 hover:text-white hover:border-white/30'
            }`}
            title="Toggle meditative museum soundscape"
          >
            {soundActive ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden md:inline">{soundActive ? 'Sound On' : 'Sound Off'}</span>
          </button>

          {/* Edition Toggle: Cinematic vs Broadsheet */}
          {onToggleMode && (
            <button
              onClick={onToggleMode}
              className="hidden md:flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-neutral-300 hover:text-[#D7FF00] border border-white/15 px-2.5 py-1.5 transition-colors cursor-pointer"
              title="Switch editorial presentation mode"
            >
              {currentMode === 'cinematic' ? (
                <>
                  <Newspaper className="w-3.5 h-3.5 text-[#D7FF00]" />
                  <span>Broadsheet</span>
                </>
              ) : (
                <>
                  <Film className="w-3.5 h-3.5 text-[#D7FF00]" />
                  <span>Cinematic</span>
                </>
              )}
            </button>
          )}

          {/* Primary Action Button: Explore History */}
          <button
            onClick={onOpenExplorer}
            className="flex items-center gap-2 bg-[#D7FF00] text-[#090A08] px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer shadow-lg"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Explore</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-[#D7FF00] transition-colors p-1.5 border border-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-3 font-mono text-xs uppercase tracking-wider bg-[#090A08]">
          <button onClick={() => handleNavClick('hero')} className="text-left text-neutral-300 hover:text-[#D7FF00] py-2 border-b border-white/5">
            Home
          </button>
          <button onClick={() => handleNavClick('timeline')} className="text-left text-neutral-300 hover:text-[#D7FF00] py-2 border-b border-white/5">
            Timeline
          </button>
          <button onClick={() => handleNavClick('civilizations')} className="text-left text-neutral-300 hover:text-[#D7FF00] py-2 border-b border-white/5">
            Civilizations
          </button>
          <button onClick={() => handleNavClick('figures')} className="text-left text-neutral-300 hover:text-[#D7FF00] py-2 border-b border-white/5">
            Historical Figures
          </button>
          <button onClick={() => handleNavClick('conflicts')} className="text-left text-neutral-300 hover:text-[#D7FF00] py-2 border-b border-white/5">
            Wars & Conflicts
          </button>
          <button onClick={() => handleNavClick('religions')} className="text-left text-neutral-300 hover:text-[#D7FF00] py-2 border-b border-white/5">
            Religions & Beliefs
          </button>

          {/* Curatorial Suites in Mobile Menu */}
          <div className="py-2 border-b border-white/10">
            <span className="text-[10px] text-[#D7FF00] tracking-widest block mb-2">
              Curatorial Exploration Wings:
            </span>
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              {suiteLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => handleSuiteClick(link.id)}
                  className="text-left p-2 border border-white/10 bg-[#121410] text-neutral-300 hover:text-[#D7FF00] hover:border-[#D7FF00]"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={toggleSound}
              className="flex items-center justify-center gap-2 py-2.5 border border-white/15 text-neutral-300"
            >
              {soundActive ? <Volume2 className="w-4 h-4 text-[#D7FF00]" /> : <VolumeX className="w-4 h-4" />}
              <span>{soundActive ? 'Soundscape Active' : 'Soundscape Muted'}</span>
            </button>

            {onToggleMode && (
              <button
                onClick={() => { onToggleMode(); setMobileMenuOpen(false); }}
                className="flex items-center justify-center gap-2 py-2.5 border border-white/15 text-neutral-300"
              >
                {currentMode === 'cinematic' ? (
                  <>
                    <Newspaper className="w-4 h-4 text-[#D7FF00]" />
                    <span>Switch to Broadsheet Mode</span>
                  </>
                ) : (
                  <>
                    <Film className="w-4 h-4 text-[#D7FF00]" />
                    <span>Switch to Cinematic Mode</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
