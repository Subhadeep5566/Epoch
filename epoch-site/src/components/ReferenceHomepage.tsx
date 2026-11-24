import React, { useState } from 'react';
import { ArrowRight, Compass, ShieldAlert, BookOpen, Sparkles, Menu, X } from 'lucide-react';
import { civilizationsData, Civilization } from './CivilizationArchive';
import { figuresData, HistoricalFigure } from './HistoricalFigures';
import { conflictsData, ConflictItem } from './WarArchive';
import { religionsData } from './ReligionArchive';

interface ReferenceHomepageProps {
  onOpenExplorer: () => void;
  onSelectRecord: (id: string) => void;
}

export const ReferenceHomepage: React.FC<ReferenceHomepageProps> = ({ onOpenExplorer, onSelectRecord }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pricingTab, setPricingTab] = useState<'ancient' | 'medieval' | 'modern'>('ancient');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#090A08] text-[#F4F4F0] font-manrope selection:bg-[#D7FF00] selection:text-[#090A08]">
      {/* Outer wrapper with thin border aesthetic matching reference */}
      <div className="max-w-[1500px] mx-auto bg-[#090A08] border border-white/10 my-0 sm:my-4 shadow-2xl relative">
        
        {/* SECTION 1 — HEADER AND HERO */}
        <header className="relative border-b border-white/10 px-6 sm:px-12 py-5 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="font-oswald text-2xl font-bold tracking-wider text-white">EPOCH</span>
            <span className="w-2 h-2 bg-[#D7FF00] rounded-full" />
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-neutral-400">
            <button onClick={() => scrollToSection('hero')} className="hover:text-[#D7FF00] transition-colors">Home</button>
            <button onClick={() => scrollToSection('stats')} className="hover:text-[#D7FF00] transition-colors">Timeline</button>
            <button onClick={() => scrollToSection('civilizations')} className="hover:text-[#D7FF00] transition-colors">Civilizations</button>
            <button onClick={() => scrollToSection('people')} className="hover:text-[#D7FF00] transition-colors">People</button>
            <button onClick={() => scrollToSection('chapters')} className="hover:text-[#D7FF00] transition-colors">Chapters</button>
            <button onClick={() => scrollToSection('footer')} className="hover:text-[#D7FF00] transition-colors">Contact</button>
          </nav>

          {/* Right Action Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenExplorer}
              className="bg-[#D7FF00] text-[#090A08] px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
            >
              Explore History
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white hover:text-[#D7FF00] p-1"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </header>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#090A08] border-b border-white/10 px-6 py-6 flex flex-col gap-4 font-mono text-xs uppercase tracking-wider">
            <button onClick={() => scrollToSection('hero')} className="text-left text-neutral-300 hover:text-[#D7FF00] py-2 border-b border-white/5">Home</button>
            <button onClick={() => scrollToSection('stats')} className="text-left text-neutral-300 hover:text-[#D7FF00] py-2 border-b border-white/5">Timeline</button>
            <button onClick={() => scrollToSection('civilizations')} className="text-left text-neutral-300 hover:text-[#D7FF00] py-2 border-b border-white/5">Civilizations</button>
            <button onClick={() => scrollToSection('people')} className="text-left text-neutral-300 hover:text-[#D7FF00] py-2 border-b border-white/5">People</button>
            <button onClick={() => scrollToSection('chapters')} className="text-left text-neutral-300 hover:text-[#D7FF00] py-2 border-b border-white/5">Chapters</button>
            <button onClick={() => scrollToSection('footer')} className="text-left text-neutral-300 hover:text-[#D7FF00] py-2 border-b border-white/5">Contact</button>
          </div>
        )}

        {/* HERO SECTION */}
        <section id="hero" className="relative grid grid-cols-1 lg:grid-cols-12 border-b border-white/10 min-h-[75vh]">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 p-8 sm:p-16 flex flex-col justify-center gap-6 relative">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#D7FF00] uppercase">
              <span className="w-2 h-2 bg-[#D7FF00]" />
              <span>A JOURNEY THROUGH HUMAN HISTORY</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-oswald text-5xl sm:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-white leading-[0.95]">
              THE <span className="text-[#D7FF00]">STORY</span><br />
              OF <span className="text-[#D7FF00]">HUMANITY.</span>
            </h1>

            <p className="font-manrope text-neutral-400 text-sm sm:text-base max-w-lg font-light leading-relaxed">
              From the first human footsteps to the complex global civilization we have built. Explore millennia of knowledge, culture, empire, and evolution.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onSelectRecord('indus-valley')}
                className="bg-[#D7FF00] text-[#090A08] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                <span>View Indus Valley Chapter</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="lg:col-span-5 relative border-t lg:border-t-0 lg:border-l border-white/10 p-4 bg-[#121410] flex items-center justify-center">
            <div className="absolute top-4 left-4 z-10 font-mono text-[10px] text-[#D7FF00] bg-[#090A08] px-2 py-1 border border-white/15">
              ARCHIVE REF // 01-ORIGINS
            </div>
            <div className="w-full h-full min-h-[350px] overflow-hidden">
              <img
                src="/src/assets/images/hero_ancient_history_1795464676030.jpg"
                alt="Ancient human origins"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
          </div>
        </section>

        {/* PARTNER / TICKER LOGO BAR */}
        <div className="bg-[#121410] border-b border-white/10 py-4 px-6 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee items-center gap-16 font-mono text-xs uppercase tracking-widest text-neutral-400">
            <span>INDUS VALLEY</span>
            <span className="w-1.5 h-1.5 bg-[#D7FF00] rounded-full" />
            <span>ANCIENT EGYPT</span>
            <span className="w-1.5 h-1.5 bg-[#D7FF00] rounded-full" />
            <span>MESOPOTAMIA</span>
            <span className="w-1.5 h-1.5 bg-[#D7FF00] rounded-full" />
            <span>MAURYA EMPIRE</span>
            <span className="w-1.5 h-1.5 bg-[#D7FF00] rounded-full" />
            <span>ROMAN EMPIRE</span>
            <span className="w-1.5 h-1.5 bg-[#D7FF00] rounded-full" />
            <span>MING DYNASTY</span>
            <span className="w-1.5 h-1.5 bg-[#D7FF00] rounded-full" />
            <span>MAYAN CIVILIZATION</span>
            <span className="w-1.5 h-1.5 bg-[#D7FF00] rounded-full" />
          </div>
        </div>

        {/* SECTION 3 — ASYMMETRICAL STATISTICS GRID */}
        <section id="stats" className="border-b border-white/10 grid grid-cols-1 md:grid-cols-12 bg-[#090A08]">
          {/* Stat 1 */}
          <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-white/10 p-10 flex flex-col justify-between">
            <span className="font-mono text-xs text-neutral-500 uppercase">// MEMBERS TRANSFORMED</span>
            <div className="py-8">
              <span className="font-oswald text-6xl sm:text-7xl font-bold text-white tracking-tight">10K+</span>
              <p className="font-mono text-xs text-neutral-400 mt-2 uppercase">Years of Recorded History</p>
            </div>
          </div>

          {/* Stat 2: Lime Box */}
          <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-white/10 bg-[#D7FF00] text-[#090A08] p-10 flex flex-col justify-between">
            <span className="font-mono text-xs uppercase font-bold">// EXPERT TRAINERS</span>
            <div className="py-8">
              <span className="font-oswald text-6xl sm:text-7xl font-bold tracking-tight">25+</span>
              <p className="font-mono text-xs font-bold mt-2 uppercase">Major Historical Epochs</p>
            </div>
          </div>

          {/* Stat 3 & Mission */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div className="border-b border-white/10 p-8 flex items-center justify-between">
              <div>
                <span className="font-mono text-xs text-neutral-500 uppercase block">// YEARS OF EXPERIENCE</span>
                <span className="font-oswald text-4xl font-bold text-white">15+</span>
              </div>
              <div className="text-right">
                <span className="font-mono text-xs text-neutral-500 uppercase block">// CONTINENTS</span>
                <span className="font-oswald text-4xl font-bold text-white">7</span>
              </div>
            </div>

            <div className="p-8 flex flex-col justify-between bg-[#121410] flex-grow">
              <div>
                <h4 className="font-oswald text-lg text-white uppercase tracking-wider mb-2">MISSION & VISION</h4>
                <p className="font-manrope text-xs text-neutral-400 leading-relaxed font-light">
                  Our mission is to make human history accessible, enriching, and meaningful for everyone. We are committed to exploring our shared origins and cultural heritage.
                </p>
              </div>
              <div className="pt-4">
                <button
                  onClick={onOpenExplorer}
                  className="inline-flex items-center gap-2 font-mono text-xs text-[#D7FF00] uppercase font-bold hover:text-white transition-colors cursor-pointer"
                >
                  <span>Explore Our Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — THREE-COLUMN IMAGE GRID (CIVILIZATIONS) */}
        <section id="civilizations" className="border-b border-white/10 p-8 sm:p-16 bg-[#090A08]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#D7FF00] uppercase mb-2">
                <span className="w-1.5 h-1.5 bg-[#D7FF00]" />
                <span>// CORE SERVICES</span>
              </div>
              <h2 className="font-oswald text-3xl sm:text-5xl text-white uppercase tracking-tight">
                CIVILIZATIONS THAT <br />
                <span className="text-[#D7FF00]">BUILT OUR WORLD.</span>
              </h2>
            </div>
            <button
              onClick={onOpenExplorer}
              className="font-mono text-xs uppercase tracking-wider text-neutral-300 hover:text-[#D7FF00] transition-colors border border-white/15 px-4 py-2 self-start md:self-auto cursor-pointer"
            >
              View All Services
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {civilizationsData.map((civ) => (
              <div
                key={civ.id}
                onClick={() => {
                  if (civ.id === 'indus') onSelectRecord('indus-valley');
                  else if (civ.id === 'egypt') onSelectRecord('ancient-egypt');
                  else onSelectRecord('mesopotamia');
                }}
                className="bg-[#121410] border border-white/15 p-6 flex flex-col justify-between group hover:border-[#D7FF00]/60 transition-all cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-oswald text-2xl text-white uppercase tracking-wider group-hover:text-[#D7FF00] transition-colors">
                      {civ.name}
                    </h3>
                    <div className="flex gap-1">
                      <span className="w-1 h-1 bg-[#D7FF00] rounded-full" />
                      <span className="w-1 h-1 bg-[#D7FF00] rounded-full" />
                      <span className="w-1 h-1 bg-[#D7FF00] rounded-full" />
                    </div>
                  </div>
                  <div className="aspect-[4/3] overflow-hidden mb-6 border border-white/10">
                    <img
                      src={civ.image}
                      alt={civ.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <p className="font-manrope text-xs text-neutral-400 line-clamp-3 font-light leading-relaxed">
                    {civ.description}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-white/10 font-mono text-[10px] text-[#D7FF00] uppercase flex justify-between">
                  <span>Explore Record</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5 — ASYMMETRICAL EDITORIAL FEATURE */}
        <section className="border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 bg-[#090A08]">
          <div className="lg:col-span-4 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center">
            <div className="flex items-center gap-2 font-mono text-xs text-[#D7FF00] uppercase mb-3">
              <span className="w-1.5 h-1.5 bg-[#D7FF00]" />
              <span>// BUILT FOR RESULTS</span>
            </div>
            <h2 className="font-oswald text-3xl sm:text-4xl text-white uppercase tracking-tight mb-4">
              PROFESSIONAL GUIDANCE <br />
              AND SUPPORT FOR EVERY <br />
              <span className="text-[#D7FF00]">HISTORICAL JOURNEY</span>
            </h2>
            <p className="font-manrope text-xs text-neutral-400 mb-6 font-light">
              Explore the profound origins of human civilization, urbanization, and early societal structure.
            </p>
            <div>
              <button
                onClick={() => onSelectRecord('indus-valley')}
                className="bg-transparent border border-white/20 text-white px-5 py-2.5 font-mono text-xs uppercase tracking-wider hover:border-[#D7FF00] hover:text-[#D7FF00] transition-colors cursor-pointer"
              >
                View Programs
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 p-8 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="border border-white/15 p-2 bg-[#121410]">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/src/assets/images/editorial_origins_1795464676722.jpg"
                  alt="Origins"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>
            </div>
            <div className="border border-white/15 p-2 bg-[#121410]">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/src/assets/images/civilization_indus_1795464676243.jpg"
                  alt="Indus"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — THREE-COLUMN PEOPLE GRID (PEOPLE) */}
        <section id="people" className="border-b border-white/10 p-8 sm:p-16 bg-[#090A08]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D7FF00] uppercase mb-2">
              <span className="w-1.5 h-1.5 bg-[#D7FF00]" />
              <span>// MEET OUR EXPERTS</span>
            </div>
            <h2 className="font-oswald text-4xl sm:text-5xl text-white uppercase tracking-tight">
              MEET THE TEAM DRIVING <br />
              <span className="text-[#D7FF00]">YOUR TRANSFORMATION</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {figuresData.map((fig) => (
              <div
                key={fig.id}
                onClick={() => {
                  onSelectRecord(fig.id);
                }}
                className="bg-[#121410] border border-white/15 p-6 flex flex-col justify-between group hover:border-[#D7FF00]/60 transition-all cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-oswald text-xl text-white uppercase tracking-wider group-hover:text-[#D7FF00] transition-colors">
                        {fig.name}
                      </h3>
                      <span className="font-mono text-[10px] text-neutral-400 uppercase">{fig.role}</span>
                    </div>
                    <div className="flex gap-1">
                      <span className="w-1 h-1 bg-[#D7FF00] rounded-full" />
                      <span className="w-1 h-1 bg-[#D7FF00] rounded-full" />
                      <span className="w-1 h-1 bg-[#D7FF00] rounded-full" />
                    </div>
                  </div>
                  <div className="aspect-[3/4] overflow-hidden mb-6 border border-white/10">
                    <img
                      src={fig.image}
                      alt={fig.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <p className="font-manrope text-xs text-neutral-400 line-clamp-2 font-light">
                    {fig.bio}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-white/10 font-mono text-[10px] text-[#D7FF00] uppercase flex justify-between">
                  <span>Inspect Profile</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7 — LARGE TWO-COLUMN INFORMATION SECTION (PRICING-STYLE CHAPTERS) */}
        <section id="chapters" className="border-b border-white/10 p-8 sm:p-16 bg-[#090A08]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#D7FF00] uppercase mb-2">
                <span className="w-1.5 h-1.5 bg-[#D7FF00]" />
                <span>// CORE SERVICES</span>
              </div>
              <h2 className="font-oswald text-3xl sm:text-5xl text-white uppercase tracking-tight">
                EVERYTHING YOU NEED <br />
                <span className="text-[#D7FF00]">TO GET STRONGER</span>
              </h2>
            </div>
            {/* Monthly / Yearly toggle styled as reference */}
            <div className="flex items-center gap-2 bg-[#121410] border border-white/15 p-1 font-mono text-xs uppercase">
              <button
                onClick={() => setPricingTab('ancient')}
                className={`px-3 py-1.5 transition-colors ${pricingTab === 'ancient' ? 'bg-[#D7FF00] text-[#090A08] font-bold' : 'text-neutral-400 hover:text-white'}`}
              >
                Ancient
              </button>
              <button
                onClick={() => setPricingTab('medieval')}
                className={`px-3 py-1.5 transition-colors ${pricingTab === 'medieval' ? 'bg-[#D7FF00] text-[#090A08] font-bold' : 'text-neutral-400 hover:text-white'}`}
              >
                Medieval
              </button>
              <button
                onClick={() => setPricingTab('modern')}
                className={`px-3 py-1.5 transition-colors ${pricingTab === 'modern' ? 'bg-[#D7FF00] text-[#090A08] font-bold' : 'text-neutral-400 hover:text-white'}`}
              >
                Modern
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 3 tier rows */}
            <div className="lg:col-span-6 space-y-4">
              <div
                onClick={() => { setPricingTab('ancient'); onSelectRecord('indus-valley'); }}
                className={`bg-[#121410] border p-6 flex items-center justify-between cursor-pointer transition-all ${pricingTab === 'ancient' ? 'border-[#D7FF00] bg-[#1a1d17]' : 'border-white/15 hover:border-white/40'}`}
              >
                <div>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase block">BASIC PLAN</span>
                  <span className="font-oswald text-2xl text-white uppercase">ANCIENT CIVILIZATIONS</span>
                </div>
                <div className="text-right">
                  <span className="font-oswald text-3xl text-[#D7FF00] font-bold">$1,499</span>
                  <span className="font-mono text-[10px] text-neutral-500 block">/ PER MONTH</span>
                </div>
              </div>

              <div
                onClick={() => { setPricingTab('medieval'); onSelectRecord('roman-empire'); }}
                className={`bg-[#121410] border p-6 flex items-center justify-between cursor-pointer transition-all ${pricingTab === 'medieval' ? 'border-[#D7FF00] bg-[#1a1d17]' : 'border-white/15 hover:border-white/40'}`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-neutral-500 uppercase">PRO PLAN</span>
                    <span className="bg-[#D7FF00] text-[#090A08] font-mono text-[9px] px-1.5 py-0.2 font-bold uppercase">BEST VALUE</span>
                  </div>
                  <span className="font-oswald text-2xl text-white uppercase">CLASSICAL & MEDIEVAL</span>
                </div>
                <div className="text-right">
                  <span className="font-oswald text-3xl text-[#D7FF00] font-bold">$2,499</span>
                  <span className="font-mono text-[10px] text-neutral-500 block">/ PER MONTH</span>
                </div>
              </div>

              <div
                onClick={() => { setPricingTab('modern'); onSelectRecord('world-war-ii'); }}
                className={`bg-[#121410] border p-6 flex items-center justify-between cursor-pointer transition-all ${pricingTab === 'modern' ? 'border-[#D7FF00] bg-[#1a1d17]' : 'border-white/15 hover:border-white/40'}`}
              >
                <div>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase">ELITE PLAN</span>
                  <span className="font-oswald text-2xl text-white uppercase">MODERN & CONTEMPORARY</span>
                </div>
                <div className="text-right">
                  <span className="font-oswald text-3xl text-[#D7FF00] font-bold">$3,999</span>
                  <span className="font-mono text-[10px] text-neutral-500 block">/ PER MONTH</span>
                </div>
              </div>
            </div>

            {/* Right Information Panel matching gym screenshot */}
            <div className="lg:col-span-6 bg-[#121410] border border-white/15 p-8 sm:p-10 flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-grow space-y-4">
                <h4 className="font-oswald text-xl text-white uppercase">FOR CONSISTENT PROGRESS:</h4>
                <ul className="space-y-2.5 font-manrope text-xs text-neutral-300 font-light">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D7FF00]" /><span>EVERYTHING IN BASIC</span></li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D7FF00]" /><span>ACCESS TO ALL ARCHIVE CHAPTERS</span></li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D7FF00]" /><span>GROUP CLASSES (UNLIMITED)</span></li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D7FF00]" /><span>1 PERSONAL TRAINING SESSION</span></li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D7FF00]" /><span>NUTRITION GUIDANCE</span></li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D7FF00]" /><span>PRIORITY SUPPORT</span></li>
                </ul>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      if (pricingTab === 'ancient') onSelectRecord('indus-valley');
                      else if (pricingTab === 'medieval') onSelectRecord('roman-empire');
                      else onSelectRecord('world-war-ii');
                    }}
                    className="bg-[#D7FF00] text-[#090A08] px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
                  >
                    Choose Plan
                  </button>
                </div>
              </div>

              <div className="w-full lg:w-48 shrink-0 border border-white/15 p-2 bg-[#090A08]">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="/src/assets/images/hero_ancient_history_1795464676030.jpg"
                    alt="Chapter preview"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale contrast-125"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8 — LARGE CTA PANEL */}
        <section className="border-b border-white/10 p-12 sm:p-20 bg-[#090A08] text-center">
          <div className="max-w-4xl mx-auto bg-[#121410] border border-white/15 p-12 sm:p-16 flex flex-col items-center gap-6">
            <div className="font-mono text-xs text-[#D7FF00] uppercase tracking-widest">
              // CORE SERVICES
            </div>
            <h2 className="font-oswald text-4xl sm:text-6xl text-white uppercase tracking-tight">
              LET'S BUILD YOUR <br />
              <span className="text-[#D7FF00]">STRONGER FUTURE</span>
            </h2>
            <div className="pt-4">
              <button
                onClick={onOpenExplorer}
                className="bg-[#D7FF00] text-[#090A08] px-8 py-4 font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
              >
                Book A Session
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 9 — FOOTER */}
        <footer id="footer" className="bg-[#090A08] text-neutral-400 font-manrope">
          {/* Top footer row */}
          <div className="border-b border-white/10 px-6 sm:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="font-oswald text-2xl font-bold tracking-wider text-white">EPOCH</span>
              <span className="w-2 h-2 bg-[#D7FF00]" />
            </div>
            <div className="flex items-center gap-8">
              <span>+1 234 567 890</span>
              <span>INFO@EPOCH-HISTORY.ORG</span>
            </div>
          </div>

          <div className="px-6 sm:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Nav List */}
            <div className="lg:col-span-4 flex flex-col gap-4 font-mono text-xs uppercase tracking-wider">
              <button onClick={() => scrollToSection('hero')} className="text-left hover:text-[#D7FF00] transition-colors py-1">Home</button>
              <button onClick={() => scrollToSection('stats')} className="text-left hover:text-[#D7FF00] transition-colors py-1">About Us</button>
              <button onClick={() => scrollToSection('civilizations')} className="text-left hover:text-[#D7FF00] transition-colors py-1">Service</button>
              <button onClick={() => scrollToSection('people')} className="text-left hover:text-[#D7FF00] transition-colors py-1">Trainers</button>
              <button onClick={() => scrollToSection('chapters')} className="text-left hover:text-[#D7FF00] transition-colors py-1">Membership</button>
              <button onClick={() => scrollToSection('footer')} className="text-left hover:text-[#D7FF00] transition-colors py-1">Contact</button>
            </div>

            {/* Middle Social & Links */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="flex flex-wrap gap-6 font-mono text-xs uppercase text-neutral-300">
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#D7FF00]">Facebook</a>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#D7FF00]">Linkedin</a>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#D7FF00]">Instagram</a>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#D7FF00]">X / Twitter</a>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#D7FF00]">Whatsapp</a>
              </div>
              <p className="font-manrope text-xs text-neutral-500 leading-relaxed">
                An immersive digital archive documenting the complete history of human civilization across millennia, cultures, and continents.
              </p>
            </div>

            {/* Right Editorial Images matching footer reference */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
              <div className="border border-white/15 p-1 bg-[#121410]">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="/src/assets/images/figure_ashoka_1795464677327.jpg"
                    alt="Footer ref 1"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale contrast-125"
                  />
                </div>
              </div>
              <div className="border border-white/15 p-1 bg-[#121410]">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="/src/assets/images/figure_cleopatra_1795464677702.jpg"
                    alt="Footer ref 2"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale contrast-125"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom horizontal scrolling ticker matching gym screenshot */}
          <div className="border-t border-white/10 py-4 bg-[#121410] overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee items-center gap-12 font-mono text-xs uppercase tracking-widest text-neutral-500">
              <span>ING</span>
              <span>RECOVERY</span>
              <span>MOTIVATION</span>
              <span>TRAINII</span>
              <span>EPOCH ARCHIVE</span>
              <span>CIVILIZATION</span>
              <span>TIMELINE</span>
            </div>
          </div>

          {/* Copyright row */}
          <div className="border-t border-white/10 px-6 sm:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-neutral-500">
            <span>© 2026 EPOCH. ALL RIGHTS RESERVED.</span>
            <div className="flex items-center gap-6">
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white">TERMS & CONDITIONS</a>
              <span>·</span>
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white">PRIVACY POLICY</a>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
};
