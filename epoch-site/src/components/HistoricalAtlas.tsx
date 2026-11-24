/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Globe, 
  MapPin, 
  Compass, 
  Layers, 
  Maximize2, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  BookOpen, 
  Navigation,
  ArrowRight,
  Filter,
  Info
} from 'lucide-react';
import { 
  allHistoricalLocations, 
  atlasTradeRoutes, 
  comparativeCivilizations,
  GeoLocation,
  TradeRoute 
} from '../data/historicalEngineData';

interface HistoricalAtlasProps {
  onSelectRecord?: (id: string) => void;
  onBackToHome?: () => void;
}

export const HistoricalAtlas: React.FC<HistoricalAtlasProps> = ({ 
  onSelectRecord,
  onBackToHome 
}) => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<GeoLocation | null>(null);
  const [showTradeRoutes, setShowTradeRoutes] = useState<boolean>(true);
  const [showSites, setShowSites] = useState<boolean>(true);
  const [showBattles, setShowBattles] = useState<boolean>(true);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeFilterType, setActiveFilterType] = useState<string>('all');

  // Convert lat/lng to SVG Equirectangular coordinates (SVG width: 1000, height: 500)
  const mapCoords = (lat: number, lng: number): { x: number; y: number } => {
    const x = ((lng + 180) / 360) * 1000;
    const y = ((90 - lat) / 180) * 500;
    return { x, y };
  };

  const periods = [
    { id: 'all', name: 'All Epochs (3300 BCE – 1945 CE)' },
    { id: 'bronze', name: 'Bronze Age (3300 – 1200 BCE)' },
    { id: 'classical', name: 'Classical Antiquity (500 BCE – 500 CE)' },
    { id: 'medieval', name: 'Post-Classical & Silk Road (500 – 1500 CE)' },
    { id: 'modern', name: 'Modern Turning Points (1800 – 1945 CE)' }
  ];

  // Filter locations by period and category
  const filteredLocations = allHistoricalLocations.filter(loc => {
    if (activeFilterType !== 'all' && loc.type !== activeFilterType) return false;
    if (selectedPeriod === 'all') return true;
    if (selectedPeriod === 'bronze') {
      return loc.period.includes('BCE') && (loc.period.includes('2') || loc.period.includes('3'));
    }
    if (selectedPeriod === 'classical') {
      return (loc.period.includes('BCE') && !loc.period.includes('3')) || loc.period.includes('CE') && parseInt(loc.period) < 600;
    }
    if (selectedPeriod === 'medieval') {
      return loc.period.includes('CE') && !loc.period.includes('19');
    }
    if (selectedPeriod === 'modern') {
      return loc.period.includes('19') || loc.period.includes('18');
    }
    return true;
  });

  const handleZoom = (delta: number) => {
    setZoomLevel(prev => Math.min(Math.max(prev + delta, 0.8), 3.0));
  };

  const handleReset = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  return (
    <div className="bg-[#090A08] text-[#F3F4F6] min-h-screen font-manrope selection:bg-[#D7FF00] selection:text-[#090A08]">
      
      {/* Editorial Top Archive Ribbon */}
      <div className="border-b border-white/10 px-6 lg:px-12 py-6 bg-[#0E100C]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#D7FF00] bg-[#D7FF00]/10 border border-[#D7FF00]/30 px-2 py-0.5">
                Cartographic Research Division
              </span>
              <span className="font-mono text-[10px] text-neutral-400 tracking-wider">
                COORDINATES: WGS-84 HISTORICAL RECONSTRUCTION
              </span>
            </div>
            <h1 className="font-oswald text-3xl md:text-4xl text-white uppercase tracking-tight">
              INTERACTIVE HISTORICAL ATLAS
            </h1>
            <p className="font-serif italic text-neutral-300 text-sm max-w-2xl mt-1">
              Trace ancient civilizations, maritime silk corridors, imperial borders, and watershed battle sites across five millennia of recorded human movement.
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

      {/* Control Strip & Filter Bar */}
      <div className="border-b border-white/10 px-6 lg:px-12 py-3.5 bg-[#121410] sticky top-16 z-30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          
          {/* Historical Period Selector */}
          <div className="flex items-center gap-2">
            <span className="text-neutral-400 uppercase tracking-widest text-[11px] flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#D7FF00]" /> Era:
            </span>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="bg-[#090A08] border border-white/20 text-neutral-200 px-3 py-1.5 uppercase font-mono text-xs focus:outline-none focus:border-[#D7FF00] cursor-pointer"
            >
              {periods.map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>

          {/* Layer Visibility Toggles */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setShowTradeRoutes(prev => !prev)}
              className={`px-2.5 py-1.5 border uppercase tracking-wider text-[11px] transition-colors cursor-pointer ${
                showTradeRoutes ? 'bg-[#D7FF00]/15 border-[#D7FF00] text-[#D7FF00]' : 'border-white/10 text-neutral-400 hover:text-white'
              }`}
            >
              Trade Corridors
            </button>

            <button
              onClick={() => setShowSites(prev => !prev)}
              className={`px-2.5 py-1.5 border uppercase tracking-wider text-[11px] transition-colors cursor-pointer ${
                showSites ? 'bg-[#A88B55]/20 border-[#A88B55] text-[#A88B55]' : 'border-white/10 text-neutral-400 hover:text-white'
              }`}
            >
              Ancient Cities & Sites
            </button>

            <button
              onClick={() => setShowBattles(prev => !prev)}
              className={`px-2.5 py-1.5 border uppercase tracking-wider text-[11px] transition-colors cursor-pointer ${
                showBattles ? 'bg-[#EF4444]/20 border-[#EF4444] text-[#EF4444]' : 'border-white/10 text-neutral-400 hover:text-white'
              }`}
            >
              Turning Points & Battles
            </button>
          </div>

          {/* Map Controls */}
          <div className="flex items-center gap-1.5 ml-auto">
            <button
              onClick={() => handleZoom(0.2)}
              className="p-1.5 border border-white/15 hover:border-[#D7FF00] text-neutral-300 hover:text-[#D7FF00] transition-colors cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => handleZoom(-0.2)}
              className="p-1.5 border border-white/15 hover:border-[#D7FF00] text-neutral-300 hover:text-[#D7FF00] transition-colors cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleReset}
              className="p-1.5 border border-white/15 hover:border-[#D7FF00] text-neutral-300 hover:text-[#D7FF00] transition-colors cursor-pointer"
              title="Reset View"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>

      {/* Main Atlas Canvas & Context Drawer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Interactive SVG World Map Container (8 or 12 cols) */}
        <div className={`relative border border-white/15 bg-[#0C0E0A] overflow-hidden rounded-xs shadow-2xl transition-all ${
          selectedLocation ? 'lg:col-span-8' : 'lg:col-span-12'
        }`}>
          
          {/* Subtle Grid Coordinates Overlay */}
          <div className="absolute top-3 left-4 z-10 pointer-events-none font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
            GRID: EQUIR-1000x500 // SCALE: {zoomLevel.toFixed(1)}X
          </div>

          <div className="w-full aspect-[2/1] relative overflow-hidden cursor-crosshair">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full transition-transform duration-300 ease-out"
              style={{
                transform: `scale(${zoomLevel}) translate(${panOffset.x}px, ${panOffset.y}px)`,
                transformOrigin: '50% 50%'
              }}
            >
              <defs>
                {/* Graticule pattern */}
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                </pattern>
                
                {/* Glow filter */}
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Ocean / Background */}
              <rect width="1000" height="500" fill="#090A08" />
              <rect width="1000" height="500" fill="url(#grid)" />

              {/* Equator & Prime Meridian subtle guide lines */}
              <line x1="0" y1="250" x2="1000" y2="250" stroke="rgba(215,255,0,0.15)" strokeWidth="0.75" strokeDasharray="3 3" />
              <line x1="500" y1="0" x2="500" y2="500" stroke="rgba(215,255,0,0.15)" strokeWidth="0.75" strokeDasharray="3 3" />

              {/* Continents Outline (Geometric scholarly landmass projections) */}
              <g fill="#161814" stroke="#A88B55" strokeWidth="0.75" strokeOpacity="0.4">
                {/* Eurasia & North Africa */}
                <path d="M 470,120 L 520,110 L 590,130 L 670,100 L 780,120 L 830,170 L 820,230 L 760,260 L 720,240 L 710,290 L 680,280 L 640,240 L 590,260 L 550,220 L 500,230 L 470,210 L 460,170 Z" />
                {/* Africa */}
                <path d="M 470,220 L 540,230 L 590,270 L 560,360 L 520,400 L 480,350 L 440,270 L 460,220 Z" />
                {/* South Asia Subcontinent */}
                <path d="M 670,230 L 720,240 L 710,310 L 670,280 Z" fill="#1C1F17" stroke="#D7FF00" strokeWidth="0.8" strokeOpacity="0.5" />
                {/* East Asia / China */}
                <path d="M 720,200 L 810,190 L 830,260 L 770,280 L 720,240 Z" fill="#1A1D16" />
                {/* Americas */}
                <path d="M 210,110 L 290,100 L 270,170 L 220,240 L 260,280 L 290,320 L 260,420 L 220,400 L 240,300 L 190,210 L 170,140 Z" />
                {/* Australia */}
                <path d="M 790,340 L 850,330 L 870,390 L 810,410 Z" />
              </g>

              {/* Civilization Cultural Influence Spheres (Radial Translucent Halos) */}
              <g className="transition-opacity duration-300">
                {/* Indus Valley */}
                <circle cx="690" cy="245" r="32" fill="#D7FF00" fillOpacity="0.08" stroke="#D7FF00" strokeWidth="1" strokeDasharray="2 2" />
                {/* Ancient Egypt */}
                <circle cx="585" cy="235" r="28" fill="#A88B55" fillOpacity="0.10" stroke="#A88B55" strokeWidth="1" strokeDasharray="2 2" />
                {/* Mesopotamia */}
                <circle cx="625" cy="225" r="26" fill="#F59E0B" fillOpacity="0.08" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2 2" />
                {/* Roman Empire */}
                <circle cx="535" cy="195" r="40" fill="#38BDF8" fillOpacity="0.06" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 2" />
                {/* Han China */}
                <circle cx="780" cy="215" r="45" fill="#EF4444" fillOpacity="0.06" stroke="#EF4444" strokeWidth="1" strokeDasharray="2 2" />
              </g>

              {/* Ancient Trade Routes (Animated or Polylines) */}
              {showTradeRoutes && (
                <g>
                  {atlasTradeRoutes.map(route => {
                    const points = route.path.map(([lat, lng]) => {
                      const { x, y } = mapCoords(lat, lng);
                      return `${x.toFixed(1)},${y.toFixed(1)}`;
                    }).join(' ');

                    return (
                      <g key={route.id} className="group cursor-pointer">
                        {/* Glow halo */}
                        <polyline
                          points={points}
                          fill="none"
                          stroke={route.color}
                          strokeWidth="3"
                          strokeOpacity="0.25"
                        />
                        {/* Main dashed path */}
                        <polyline
                          points={points}
                          fill="none"
                          stroke={route.color}
                          strokeWidth="1.25"
                          strokeDasharray="4 3"
                        />
                      </g>
                    );
                  })}
                </g>
              )}

              {/* Historical Locations & Battle Pins */}
              {filteredLocations.map((loc, idx) => {
                const { x, y } = mapCoords(loc.lat, loc.lng);
                const isSelected = selectedLocation?.name === loc.name;

                let markerColor = '#A88B55'; // default settlement
                if (loc.type === 'battle') markerColor = '#EF4444';
                if (loc.type === 'capital') markerColor = '#D7FF00';
                if (loc.type === 'archaeological') markerColor = '#38BDF8';

                return (
                  <g
                    key={`${loc.name}-${idx}`}
                    transform={`translate(${x}, ${y})`}
                    onClick={() => setSelectedLocation(loc)}
                    className="cursor-pointer group"
                  >
                    {/* Pulsing ring if selected */}
                    {isSelected && (
                      <circle
                        r="9"
                        fill="none"
                        stroke={markerColor}
                        strokeWidth="1.5"
                        className="animate-ping opacity-75"
                      />
                    )}

                    {/* Touch halo */}
                    <circle r="12" fill="transparent" />

                    {/* Center point pin */}
                    <circle
                      r={isSelected ? "5" : "3.5"}
                      fill={markerColor}
                      stroke="#090A08"
                      strokeWidth="1.2"
                      className="transition-transform group-hover:scale-125"
                    />

                    {/* Permanent label for major capitals */}
                    {(loc.type === 'capital' || isSelected) && (
                      <text
                        x="7"
                        y="3"
                        fill={isSelected ? "#D7FF00" : "#E5E7EB"}
                        fontSize="8"
                        fontFamily="monospace"
                        fontWeight="bold"
                        letterSpacing="0.05em"
                        className="pointer-events-none select-none drop-shadow"
                      >
                        {loc.name.toUpperCase()}
                      </text>
                    )}
                  </g>
                );
              })}

            </svg>
          </div>

          {/* Map Legend Footer */}
          <div className="p-4 border-t border-white/10 bg-[#090A08]/90 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-neutral-400">
            <div className="flex items-center gap-5 flex-wrap">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D7FF00] inline-block" /> Imperial Capital
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#A88B55] inline-block" /> Ancient Settlement
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] inline-block" /> Archaeological Site
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] inline-block" /> Decisive Battle
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-5 h-0.5 border-t border-dashed border-[#D7FF00] inline-block" /> Silk / Spice Highway
              </span>
            </div>

            <span className="text-neutral-500">
              Showing {filteredLocations.length} Verified Historical Coordinates
            </span>
          </div>

        </div>

        {/* Selected Contextual Historical Panel (4 cols) */}
        {selectedLocation ? (
          <div className="lg:col-span-4 bg-[#121410] border border-white/15 p-6 flex flex-col justify-between shadow-2xl relative">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <span className="font-mono text-[10px] text-[#D7FF00] tracking-widest uppercase border border-[#D7FF00]/40 px-2 py-0.5">
                  {selectedLocation.type.toUpperCase()}
                </span>
                <span className="font-mono text-xs text-neutral-400">
                  {selectedLocation.period}
                </span>
              </div>

              {/* Title & Coordinates */}
              <h3 className="font-oswald text-2xl text-white uppercase tracking-tight mb-2">
                {selectedLocation.name}
              </h3>

              <div className="font-mono text-[11px] text-[#A88B55] mb-4 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>LAT: {selectedLocation.lat.toFixed(3)}° // LNG: {selectedLocation.lng.toFixed(3)}°</span>
              </div>

              {/* Description */}
              <p className="font-serif text-sm text-neutral-300 leading-relaxed mb-6">
                {selectedLocation.description}
              </p>

              {/* Associated Civilization metadata if present */}
              {selectedLocation.civilizationId && comparativeCivilizations[selectedLocation.civilizationId] && (
                <div className="p-3.5 bg-[#090A08] border border-white/10 mb-6">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                    Governing Civilization
                  </span>
                  <span className="font-oswald text-base text-white tracking-wide block">
                    {comparativeCivilizations[selectedLocation.civilizationId].name}
                  </span>
                  <span className="font-mono text-[10px] text-[#A88B55] block">
                    {comparativeCivilizations[selectedLocation.civilizationId].capital}
                  </span>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              {selectedLocation.recordId && onSelectRecord && (
                <button
                  onClick={() => onSelectRecord(selectedLocation.recordId!)}
                  className="w-full flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest bg-[#D7FF00] hover:bg-[#c5ec00] text-[#090A08] font-bold py-3 transition-colors cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Full Monograph</span>
                </button>
              )}

              <button
                onClick={() => setSelectedLocation(null)}
                className="w-full text-center font-mono text-xs text-neutral-400 hover:text-white py-1.5 transition-colors cursor-pointer"
              >
                Close Drawer
              </button>
            </div>

          </div>
        ) : (
          <div className="lg:col-span-12 p-6 border border-white/10 bg-[#0E100C] text-neutral-400 font-mono text-xs flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Info className="w-4 h-4 text-[#D7FF00]" />
              Click any coordinate pin or trade highway to reveal verified historical intelligence, excavation records, and deep monograph archives.
            </span>
            <span className="text-neutral-500 uppercase tracking-widest">
              5,000 Years of Geography
            </span>
          </div>
        )}

      </div>

    </div>
  );
};
