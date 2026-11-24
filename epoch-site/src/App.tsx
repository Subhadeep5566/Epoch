/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArchivalHomepage } from './components/ArchivalHomepage';
import { NewspaperHomepage } from './components/NewspaperHomepage';
import { ExplorerModal } from './components/ExplorerModal';
import { ContinuousBookPage } from './components/ContinuousBookPage';
import { ArchivalSuiteHub, ArchivalToolTab } from './components/ArchivalSuiteHub';
import { historicalRecordsDatabase } from './data/historicalData';

const validSuiteTabs: ArchivalToolTab[] = [
  'atlas', 
  'timeline', 
  'compare', 
  'documents', 
  'timemachine', 
  'network', 
  'connections', 
  'humans', 
  'daily'
];

export default function App() {
  const [explorerOpen, setExplorerOpen] = useState(false);
  const [activeRecordId, setActiveRecordId] = useState<string | null>(null);
  const [activeSuiteTab, setActiveSuiteTab] = useState<ArchivalToolTab | null>(null);
  const [presentationMode, setPresentationMode] = useState<'cinematic' | 'broadsheet'>('cinematic');

  // Sync with hash / URL navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#record=')) {
        const id = hash.replace('#record=', '');
        setActiveRecordId(id);
        setActiveSuiteTab(null);
      } else {
        const cleanTab = hash.replace('#', '') as ArchivalToolTab;
        if (validSuiteTabs.includes(cleanTab)) {
          setActiveSuiteTab(cleanTab);
          setActiveRecordId(null);
        } else {
          setActiveRecordId(null);
          setActiveSuiteTab(null);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectRecord = (id: string) => {
    window.location.hash = `#record=${id}`;
    setActiveRecordId(id);
    setActiveSuiteTab(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSuite = (tab: ArchivalToolTab) => {
    window.location.hash = `#${tab}`;
    setActiveSuiteTab(tab);
    setActiveRecordId(null);
    setExplorerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    window.location.hash = '';
    setActiveRecordId(null);
    setActiveSuiteTab(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGenericItemSelect = (item: any) => {
    if (item.id && historicalRecordsDatabase[item.id]) {
      handleSelectRecord(item.id);
    } else {
      handleSelectRecord('world-war-ii');
    }
  };

  const togglePresentationMode = () => {
    setPresentationMode(prev => prev === 'cinematic' ? 'broadsheet' : 'cinematic');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const replayCinematicFilm = () => {
    setPresentationMode('cinematic');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      const hero = document.getElementById('cinematic-hero');
      if (hero) hero.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // If viewing a detailed monograph book
  if (activeRecordId) {
    return (
      <ContinuousBookPage
        recordId={activeRecordId}
        onBack={handleBackToHome}
        onSelectRecord={handleSelectRecord}
        onOpenSuite={handleOpenSuite}
      />
    );
  }

  // If viewing the expanded Curatorial Exploration Suite
  if (activeSuiteTab) {
    return (
      <>
        <ArchivalSuiteHub
          initialTab={activeSuiteTab}
          onBackToHome={handleBackToHome}
          onSelectRecord={handleSelectRecord}
          onOpenExplorer={() => setExplorerOpen(true)}
        />
        <ExplorerModal
          isOpen={explorerOpen}
          onClose={() => setExplorerOpen(false)}
          onSelectItem={handleGenericItemSelect}
          onOpenSuite={handleOpenSuite}
        />
      </>
    );
  }

  // Primary Frozen Homepage (Cinematic or Broadsheet)
  return (
    <>
      {presentationMode === 'cinematic' ? (
        <ArchivalHomepage
          onOpenExplorer={() => setExplorerOpen(true)}
          onSelectRecord={handleSelectRecord}
          currentMode={presentationMode}
          onToggleMode={togglePresentationMode}
          onReplayFilm={replayCinematicFilm}
          onOpenSuite={handleOpenSuite}
        />
      ) : (
        <NewspaperHomepage
          onOpenExplorer={() => setExplorerOpen(true)}
          onSelectRecord={handleSelectRecord}
          onToggleMode={togglePresentationMode}
          onOpenSuite={handleOpenSuite}
        />
      )}

      <ExplorerModal
        isOpen={explorerOpen}
        onClose={() => setExplorerOpen(false)}
        onSelectItem={handleGenericItemSelect}
        onOpenSuite={handleOpenSuite}
      />
    </>
  );
}
