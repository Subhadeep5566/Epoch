import React from 'react';
import { Navbar } from './Navbar';
import { CinematicHero } from './CinematicHero';
import { HistoricalMarquee } from './HistoricalMarquee';
import { HistoryStats } from './HistoryStats';
import { CivilizationArchive, Civilization } from './CivilizationArchive';
import { EditorialFeature } from './EditorialFeature';
import { HistoricalFigures, HistoricalFigure } from './HistoricalFigures';
import { WarArchive, ConflictItem } from './WarArchive';
import { ReligionArchive, ReligionItem } from './ReligionArchive';
import { ScienceRevolutions } from './ScienceRevolutions';
import { HumanityLife } from './HumanityLife';
import { ExploreCTA } from './ExploreCTA';
import { Footer } from './Footer';
import { ArchivalToolTab } from './ArchivalSuiteHub';

interface ArchivalHomepageProps {
  onOpenExplorer: () => void;
  onSelectRecord: (id: string) => void;
  currentMode?: 'cinematic' | 'broadsheet';
  onToggleMode?: () => void;
  onReplayFilm?: () => void;
  onOpenSuite?: (tab: ArchivalToolTab) => void;
}

export const ArchivalHomepage: React.FC<ArchivalHomepageProps> = ({ 
  onOpenExplorer, 
  onSelectRecord,
  currentMode = 'cinematic',
  onToggleMode,
  onReplayFilm,
  onOpenSuite
}) => {
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCivilizationSelect = (civ: Civilization) => {
    onSelectRecord(civ.id);
  };

  const handleFigureSelect = (figure: HistoricalFigure) => {
    onSelectRecord(figure.id);
  };

  const handleConflictSelect = (conflict: ConflictItem) => {
    onSelectRecord(conflict.id);
  };

  const handleReligionSelect = (religion: ReligionItem) => {
    onSelectRecord(religion.id);
  };

  return (
    <div className="min-h-screen bg-[#090A08] text-[#F3F4F6] font-manrope selection:bg-[#D7FF00] selection:text-[#090A08]">
      {/* Sticky Global Navigation */}
      <Navbar 
        onOpenExplorer={onOpenExplorer}
        onNavigateSection={scrollToSection}
        currentMode={currentMode}
        onToggleMode={onToggleMode}
        onReplayFilm={onReplayFilm}
        onOpenSuite={onOpenSuite}
      />

      {/* Main Container */}
      <main>
        {/* Cinematic Scroll & Animation Hero (190 Frames) */}
        <CinematicHero 
          onSelectRecord={onSelectRecord}
          onExploreArchive={() => scrollToSection('timeline')}
        />

        {/* Epochs Ticker Marquee */}
        <div id="timeline">
          <HistoricalMarquee />
        </div>

        {/* Section 02: Scale and Scope of Human History */}
        <HistoryStats />

        {/* Section 03: Civilizations that Built the World */}
        <CivilizationArchive 
          onSelectCivilization={handleCivilizationSelect}
          onViewAll={onOpenExplorer}
        />

        {/* Section 04: Human Origins & Paleolithic Deep History */}
        <EditorialFeature 
          onDiscoverOrigins={() => onSelectRecord('indus-valley')}
        />

        {/* Section 05: Minds that Changed Humanity */}
        <HistoricalFigures 
          onSelectFigure={handleFigureSelect}
          onViewAllFigures={onOpenExplorer}
        />

        {/* Section 06: Conflict Archive */}
        <WarArchive 
          onSelectConflict={handleConflictSelect}
          onViewAllConflicts={onOpenExplorer}
        />

        {/* Section 07: Beliefs and Sacred Traditions */}
        <ReligionArchive 
          onSelectReligion={handleReligionSelect}
        />

        {/* Section 08: Science, Inventions & Revolutions */}
        <ScienceRevolutions 
          onSelectRecord={onSelectRecord}
        />

        {/* Section 09: Texture of Everyday Humanity */}
        <HumanityLife />

        {/* Section 10: Final Journey Call to Action */}
        <ExploreCTA 
          onBeginJourney={onOpenExplorer}
        />
      </main>

      {/* Archival Museum Footer */}
      <Footer 
        onNavigateSection={scrollToSection}
        onOpenExplorer={onOpenExplorer}
      />
    </div>
  );
};
