import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Play, Pause, ArrowDown, ChevronRight } from 'lucide-react';

interface CinematicHeroProps {
  onSelectRecord: (id: string) => void;
  onExploreArchive: () => void;
}

const TOTAL_FRAMES = 190;
const FRAME_PATH = (index: number) => {
  const padded = String(index).padStart(4, '0');
  return `/frames/frame_${padded}.jpg`;
};

// Historical eras mapped to the cinematic animation progression
const ERAS = [
  { 
    id: 'origins', 
    number: '01', 
    label: 'ORIGINS', 
    frame: 1, 
    period: 'c. 300,000 BCE', 
    headline: 'HUMAN GENESIS & MIGRATIONS',
    caption: 'Early hominids in the Rift Valley, stone tools, and the conquest of fire.'
  },
  { 
    id: 'broadsheet', 
    number: '02', 
    label: 'BROADSHEET', 
    frame: 50, 
    period: 'c. 1440 CE', 
    headline: 'INK & THE PRINTED WORD',
    caption: 'Movable type breaks free, democratizing knowledge and accelerating global awareness.'
  },
  { 
    id: 'conflicts', 
    number: '03', 
    label: 'CONFLICTS', 
    frame: 95, 
    period: '1939 – 1945 CE', 
    headline: 'THE CRUCIBLE OF WAR',
    caption: 'World War II, total industrialized mobilization, and the dawn of the nuclear threshold.'
  },
  { 
    id: 'beliefs', 
    number: '04', 
    label: 'BELIEFS', 
    frame: 145, 
    period: 'ANCIENT TO MODERN', 
    headline: 'SACRED FAITHS & PHILOSOPHIES',
    caption: 'Vedic hymns, Buddhist awakening, Abrahamic covenants, and Eastern harmony.'
  },
  { 
    id: 'archive', 
    number: '05', 
    label: 'ARCHIVE', 
    frame: 190, 
    period: 'CONTEMPORARY', 
    headline: 'THE LIVING REPOSITORY',
    caption: '300,000 years of civilization preserved in one unified digital encyclopedia.'
  }
];

export const CinematicHero: React.FC<CinematicHeroProps> = ({ onSelectRecord, onExploreArchive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Frame cache and animation state
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES + 1).fill(null));
  const currentFrameRef = useRef<number>(1);
  const targetFrameRef = useRef<number>(1);
  const animationFrameIdRef = useRef<number | null>(null);
  const autoPlayTimerRef = useRef<number | null>(null);

  const [isPlayingFilm, setIsPlayingFilm] = useState<boolean>(false);
  const [activeEraIndex, setActiveEraIndex] = useState<number>(0);
  const [displayFrame, setDisplayFrame] = useState<number>(1);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // High-performance canvas drawing helper with cover-fit math
  const renderFrame = useCallback((frameNumber: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const clampedFrame = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(frameNumber)));
    const img = imagesRef.current[clampedFrame];

    if (img && img.complete && img.naturalWidth > 0) {
      const cWidth = canvas.width;
      const cHeight = canvas.height;
      const iWidth = img.naturalWidth;
      const iHeight = img.naturalHeight;

      // Cover scaling math
      const hRatio = cWidth / iWidth;
      const vRatio = cHeight / iHeight;
      const ratio = Math.max(hRatio, vRatio);

      const centerShiftX = (cWidth - iWidth * ratio) / 2;
      const centerShiftY = (cHeight - iHeight * ratio) / 2;

      ctx.clearRect(0, 0, cWidth, cHeight);
      ctx.drawImage(
        img,
        0, 0, iWidth, iHeight,
        centerShiftX, centerShiftY, iWidth * ratio, iHeight * ratio
      );
    }
  }, []);

  // Update canvas sizing to handle device pixel ratio
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    }

    renderFrame(currentFrameRef.current);
  }, [renderFrame]);

  // Initial mount: load frame 1 immediately, then progressively load remaining frames in background
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    let isMounted = true;

    // Load Frame 1 immediately
    const img1 = new Image();
    img1.src = FRAME_PATH(1);
    img1.onload = () => {
      if (!isMounted) return;
      imagesRef.current[1] = img1;
      renderFrame(1);
    };

    // Progressive background loader
    for (let i = 2; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = () => {
        if (!isMounted) return;
        imagesRef.current[i] = img;
      };
    }

    return () => {
      isMounted = false;
      window.removeEventListener('resize', handleResize);
      if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [handleResize, renderFrame]);

  // Smooth Lerp loop for fluid 60fps rendering during scrolling or playback
  useEffect(() => {
    let active = true;

    const updatePlayhead = () => {
      if (!active) return;

      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.05) {
        currentFrameRef.current += diff * 0.14;
        const rounded = Math.round(currentFrameRef.current);
        setDisplayFrame(rounded);
        renderFrame(currentFrameRef.current);

        // Update active era
        const eraIdx = ERAS.findIndex((era, idx) => {
          const nextEra = ERAS[idx + 1];
          if (!nextEra) return true;
          return rounded >= era.frame && rounded < nextEra.frame;
        });
        if (eraIdx !== -1) setActiveEraIndex(eraIdx);
      }

      animationFrameIdRef.current = requestAnimationFrame(updatePlayhead);
    };

    animationFrameIdRef.current = requestAnimationFrame(updatePlayhead);

    return () => {
      active = false;
      if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);
    };
  }, [renderFrame]);

  // Handle Scroll Progress across the 300vh container
  useEffect(() => {
    const handleScroll = () => {
      if (isPlayingFilm) return; // Don't override if auto-playing film mode
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollableDist = rect.height - window.innerHeight;
      if (scrollableDist <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDist));
      setScrollProgress(progress);

      const newTarget = 1 + progress * (TOTAL_FRAMES - 1);
      targetFrameRef.current = newTarget;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPlayingFilm]);

  // Cinematic Auto-Play Film Mode
  const togglePlayFilm = () => {
    if (isPlayingFilm) {
      setIsPlayingFilm(false);
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    } else {
      setIsPlayingFilm(true);
      // If we are at the end, restart from frame 1
      if (targetFrameRef.current >= TOTAL_FRAMES - 2) {
        currentFrameRef.current = 1;
        targetFrameRef.current = 1;
      }

      // Auto-play interval at ~24 frames per second
      autoPlayTimerRef.current = window.setInterval(() => {
        targetFrameRef.current = Math.min(TOTAL_FRAMES, targetFrameRef.current + 1);
        if (targetFrameRef.current >= TOTAL_FRAMES) {
          setIsPlayingFilm(false);
          if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
          setTimeout(() => {
            handleSkipToArchive();
          }, 800);
        }
      }, 1000 / 24);
    }
  };

  // Jump to specific Era
  const jumpToEra = (eraFrame: number) => {
    targetFrameRef.current = eraFrame;
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollableDist = container.offsetHeight - window.innerHeight;
      const targetScroll = container.offsetTop + ((eraFrame - 1) / (TOTAL_FRAMES - 1)) * scrollableDist;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  // Skip straight to Archive content
  const handleSkipToArchive = () => {
    if (containerRef.current) {
      const bottom = containerRef.current.offsetTop + containerRef.current.offsetHeight;
      window.scrollTo({ top: bottom + 2, behavior: 'smooth' });
    } else {
      onExploreArchive();
    }
  };

  const currentEra = ERAS[activeEraIndex] || ERAS[0];
  const hudOpacity = Math.max(0, Math.min(1, 1 - (scrollProgress - 0.90) * 10));

  return (
    <div ref={containerRef} id="cinematic-hero" className="relative h-[300vh] bg-[#090A08]">
      {/* Sticky Fullscreen Visual Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between select-none pt-20 pb-4">
        
        {/* Background Canvas Layer — Darkened & Controlled */}
        <div className="absolute inset-0 z-0">
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.25] saturate-[0.85] opacity-50 transition-opacity duration-300"
          />
        </div>

        {/* Master Controlled Vignette Scrim (Completely eliminates background text collision) */}
        <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-[#090A08]/95 via-[#090A08]/85 to-[#090A08]/90" />
        <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-t from-[#090A08] via-transparent to-[#090A08]/90" />
        
        {/* Center Radial Spotlight to guarantee headline legibility */}
        <div className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(circle_at_35%_50%,rgba(9,10,8,0.95)_0%,rgba(9,10,8,0.75)_55%,rgba(9,10,8,0.95)_100%)]" />

        {/* MASTER HERO EDITORIAL GRID: 100% Controlled, No Text Collision */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 sm:px-12 my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT 7 COLUMNS: DOMINANT EDITORIAL HEADLINE & HIERARCHY */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4 sm:gap-6">
            
            {/* 1. Small Editorial Eyebrow */}
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#D7FF00] uppercase">
              <span className="w-2 h-2 bg-[#D7FF00] shrink-0" />
              <span>A COMPLETE CHRONOLOGY // 300,000 BCE TO PRESENT</span>
            </div>

            {/* Mobile Active Era Pill (< 1024px) */}
            <div className="lg:hidden flex items-center gap-2 bg-[#121410] border border-white/20 px-3 py-1 font-mono text-[10px] text-neutral-300">
              <span className="text-[#D7FF00] font-bold">ERA {currentEra.number}:</span>
              <span>{currentEra.headline}</span>
            </div>

            {/* 2. Main EPOCH Headline */}
            <h1 className="font-oswald text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold uppercase tracking-tight text-white leading-[0.92]">
              THE STORY <br />
              OF <span className="text-[#D7FF00] drop-shadow-[0_0_25px_rgba(215,255,0,0.3)]">HUMANITY.</span>
            </h1>

            {/* 3. Supporting Description */}
            <p className="font-manrope text-sm sm:text-base lg:text-lg text-neutral-300 font-light max-w-xl leading-relaxed">
              From the earliest prehistoric footprints to the planetary civilization we inhabit today. Millennia of knowledge, empire, philosophy, and revolution preserved in one living digital archive.
            </p>

            {/* 4. Primary Calls to Action */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <button
                onClick={handleSkipToArchive}
                className="bg-[#D7FF00] text-[#090A08] px-6 sm:px-7 py-3 sm:py-3.5 font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-all cursor-pointer flex items-center gap-2 shadow-xl hover:scale-105"
              >
                <span>Explore The Timeline</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={togglePlayFilm}
                className="bg-[#121410] border border-white/20 text-white px-5 sm:px-6 py-3 sm:py-3.5 font-mono text-xs font-bold uppercase tracking-wider hover:border-[#D7FF00] hover:text-[#D7FF00] transition-all cursor-pointer flex items-center gap-2"
              >
                {isPlayingFilm ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current text-[#D7FF00]" />}
                <span>{isPlayingFilm ? 'Pause Tour' : 'Watch Cinematic Tour'}</span>
              </button>
            </div>

            {/* 5. Secondary Exploration Links */}
            <div className="hidden sm:flex flex-wrap items-center gap-2 font-mono text-[11px] text-neutral-400 pt-1">
              <span className="text-neutral-500 mr-1 uppercase">QUICK JUMP:</span>
              <button onClick={() => { handleSkipToArchive(); }} className="hover:text-[#D7FF00] underline underline-offset-4 cursor-pointer">Civilizations</button>
              <span>·</span>
              <button onClick={() => { onSelectRecord('world-war-ii'); }} className="hover:text-[#D7FF00] underline underline-offset-4 cursor-pointer">Conflicts</button>
              <span>·</span>
              <button onClick={() => { onSelectRecord('hinduism'); }} className="hover:text-[#D7FF00] underline underline-offset-4 cursor-pointer">Religions</button>
              <span>·</span>
              <button onClick={() => { onSelectRecord('ashoka'); }} className="hover:text-[#D7FF00] underline underline-offset-4 cursor-pointer">Figures</button>
              <span>·</span>
              <button onClick={() => { onSelectRecord('scientific-revolution'); }} className="hover:text-[#D7FF00] underline underline-offset-4 cursor-pointer">Revolutions</button>
            </div>

          </div>

          {/* RIGHT 5 COLUMNS: DYNAMIC TIME-TRAVEL CHRONOMETER SLATE (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="bg-[#121410]/95 border border-white/20 p-6 sm:p-8 backdrop-blur-md shadow-2xl relative">
              
              {/* Corner Tag */}
              <div className="absolute -top-3 left-6 font-mono text-[10px] text-[#D7FF00] bg-[#090A08] px-2.5 py-0.5 border border-white/20">
                ACTIVE EPOCH // REF {currentEra.number}
              </div>

              {/* Time Depth & Era Badge */}
              <div className="flex items-center justify-between font-mono text-xs text-neutral-400 mb-4 pb-4 border-b border-white/10">
                <span className="text-[#D7FF00] font-bold">{currentEra.period}</span>
                <span>ERA {currentEra.number} / 05</span>
              </div>

              {/* Era Headline */}
              <h3 className="font-oswald text-2xl sm:text-3xl text-white uppercase tracking-wide mb-3">
                {currentEra.headline}
              </h3>

              {/* Era Description */}
              <p className="font-manrope text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                {currentEra.caption}
              </p>

              {/* Contextual Action Button based on current Era */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                {activeEraIndex === 2 ? (
                  <button
                    onClick={() => onSelectRecord('world-war-ii')}
                    className="font-mono text-xs uppercase font-bold text-[#D7FF00] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Read WWII Monograph</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ) : activeEraIndex === 1 ? (
                  <button
                    onClick={() => onSelectRecord('scientific-revolution')}
                    className="font-mono text-xs uppercase font-bold text-[#D7FF00] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Inspect Printing Revolution</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ) : activeEraIndex === 3 ? (
                  <button
                    onClick={() => onSelectRecord('buddhism')}
                    className="font-mono text-xs uppercase font-bold text-[#D7FF00] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Explore Sacred Traditions</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => onSelectRecord('indus-valley')}
                    className="font-mono text-xs uppercase font-bold text-[#D7FF00] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Explore Ancient Era</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}

                <span className="font-mono text-[10px] text-neutral-500">
                  FRAME {String(displayFrame).padStart(3, '0')}
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM FLOATING TIME MACHINE HUD BAR (Cleanly Docks on Scroll) */}
        <div 
          className="relative z-20 px-6 sm:px-12 pb-2 sm:pb-4 w-full transition-opacity duration-300"
          style={{ opacity: hudOpacity }}
        >
          <div className="max-w-7xl mx-auto bg-[#121410]/95 backdrop-blur-md border border-white/15 p-3 sm:p-4 shadow-2xl">
            
            {/* Top row of HUD: Era Markers & Timecode */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-2.5 border-b border-white/10">
              
              {/* Era Selector Buttons */}
              <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                {ERAS.map((era, index) => {
                  const isActive = activeEraIndex === index;
                  return (
                    <button
                      key={era.id}
                      onClick={() => jumpToEra(era.frame)}
                      className={`px-2.5 sm:px-3 py-1 font-mono text-[9px] sm:text-xs uppercase tracking-wider transition-all cursor-pointer border ${
                        isActive
                          ? 'bg-[#D7FF00] text-[#090A08] border-[#D7FF00] font-bold shadow-[0_0_12px_rgba(215,255,0,0.3)]'
                          : 'bg-[#090A08] text-neutral-400 border-white/10 hover:border-white/30 hover:text-white'
                      }`}
                    >
                      {era.number} {era.label}
                    </button>
                  );
                })}
              </div>

              {/* Timecode and Frame Readout */}
              <div className="flex items-center gap-4 font-mono text-xs text-neutral-400">
                <div className="hidden sm:block">
                  <span className="text-neutral-500 uppercase text-[10px] block">ACTIVE EPOCH</span>
                  <span className="text-white font-bold">{currentEra.headline}</span>
                </div>

                <div className="text-right">
                  <span className="text-neutral-500 uppercase text-[10px] block">TIMECODE</span>
                  <span className="text-[#D7FF00] font-bold">
                    FRAME {String(displayFrame).padStart(3, '0')} / {TOTAL_FRAMES}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom row of HUD: Interactive Scrubber Slider and Play Button */}
            <div className="pt-2 sm:pt-3 flex items-center gap-3 sm:gap-4">
              <button
                onClick={togglePlayFilm}
                className="bg-[#090A08] hover:bg-[#D7FF00] hover:text-[#090A08] text-white p-2 border border-white/15 transition-all cursor-pointer shrink-0"
                title={isPlayingFilm ? 'Pause Cinematic Film' : 'Play Cinematic Film'}
              >
                {isPlayingFilm ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current text-[#D7FF00]" />}
              </button>

              {/* Time Scrubber */}
              <div className="relative flex-grow h-2 bg-neutral-800 rounded-full overflow-hidden cursor-pointer group">
                <div 
                  className="absolute top-0 left-0 h-full bg-[#D7FF00] transition-all duration-75"
                  style={{ width: `${(displayFrame / TOTAL_FRAMES) * 100}%` }}
                />
                <input
                  type="range"
                  min="1"
                  max={TOTAL_FRAMES}
                  value={displayFrame}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    targetFrameRef.current = val;
                    if (containerRef.current) {
                      const container = containerRef.current;
                      const scrollableDist = container.offsetHeight - window.innerHeight;
                      const targetScroll = container.offsetTop + ((val - 1) / (TOTAL_FRAMES - 1)) * scrollableDist;
                      window.scrollTo({ top: targetScroll, behavior: 'auto' });
                    }
                  }}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>

              <span className="font-mono text-[10px] sm:text-[11px] text-neutral-400 shrink-0">
                {Math.round((displayFrame / TOTAL_FRAMES) * 100)}%
              </span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
