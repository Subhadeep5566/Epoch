/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Calendar, 
  ArrowRight, 
  Clock, 
  BookOpen, 
  Sparkles, 
  MapPin, 
  ChevronLeft, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { 
  dailyHistoryEvents, 
  DailyHistoryRecord 
} from '../data/historicalEngineData';

interface DailyHistoryProps {
  onSelectRecord?: (id: string) => void;
  onBackToHome?: () => void;
}

export const DailyHistory: React.FC<DailyHistoryProps> = ({
  onSelectRecord,
  onBackToHome
}) => {
  const today = new Date();
  const [selectedMonth, setSelectedMonth] = useState<number>(today.getMonth() + 1); // 1-12
  const [selectedDay, setSelectedDay] = useState<number>(today.getDate());

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Match events for selected date, or fallback to November 24 (or closest date)
  let matchedEvents = dailyHistoryEvents.filter(e => e.month === selectedMonth && e.day === selectedDay);
  if (matchedEvents.length === 0) {
    // Show today's / November 24 records as default
    matchedEvents = dailyHistoryEvents.filter(e => e.month === 11 && e.day === 24);
  }

  return (
    <div className="bg-[#090A08] text-[#F3F4F6] min-h-screen font-manrope selection:bg-[#D7FF00] selection:text-[#090A08]">
      
      {/* Top Editorial Ribbon */}
      <div className="border-b border-white/10 px-6 lg:px-12 py-6 bg-[#0E100C]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#D7FF00] bg-[#D7FF00]/10 border border-[#D7FF00]/30 px-2 py-0.5 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#D7FF00]" /> Ephemeris & Anniversaries Archive
              </span>
              <span className="font-mono text-[10px] text-neutral-400 tracking-wider">
                WORLD ANNALS RECORD: {monthNames[selectedMonth - 1].toUpperCase()} {selectedDay}
              </span>
            </div>
            <h1 className="font-oswald text-3xl md:text-5xl text-white uppercase tracking-tight">
              ON THIS DAY IN HUMAN HISTORY
            </h1>
            <p className="font-serif italic text-neutral-300 text-sm md:text-base max-w-2xl mt-1">
              Discover what historic events, scientific milestones, and political revolutions occurred on this calendar day across the millennia of human civilization.
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

      {/* Date Picker Bar */}
      <div className="border-b border-white/10 bg-[#121410] px-6 lg:px-12 py-4 sticky top-16 z-30 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          
          <div className="flex items-center gap-3">
            <span className="text-neutral-400 uppercase tracking-widest text-[11px]">
              Jump to Date:
            </span>

            {/* Month Select */}
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
              className="bg-[#090A08] border border-white/20 text-white px-3 py-1.5 uppercase focus:outline-none focus:border-[#D7FF00] cursor-pointer"
            >
              {monthNames.map((m, idx) => (
                <option key={m} value={idx + 1}>{m}</option>
              ))}
            </select>

            {/* Day Select */}
            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(parseInt(e.target.value))}
              className="bg-[#090A08] border border-white/20 text-white px-3 py-1.5 focus:outline-none focus:border-[#D7FF00] cursor-pointer"
            >
              {Array.from({ length: 31 }, (_, i) => i + 1).map(d => (
                <option key={d} value={d}>Day {d}</option>
              ))}
            </select>
          </div>

          <button
            onClick={() => {
              setSelectedMonth(today.getMonth() + 1);
              setSelectedDay(today.getDate());
            }}
            className="font-mono text-xs uppercase tracking-wider text-[#D7FF00] border border-[#D7FF00]/40 hover:bg-[#D7FF00]/10 px-3 py-1.5 transition-colors cursor-pointer"
          >
            Today's Date ({monthNames[today.getMonth()]} {today.getDate()})
          </button>

        </div>
      </div>

      {/* Events Presentation Board */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 space-y-10">
        
        <div className="border-b border-white/10 pb-4 flex items-center justify-between">
          <h2 className="font-oswald text-2xl md:text-3xl text-white uppercase tracking-tight">
            SIGNIFICANT MILESTONES: {monthNames[selectedMonth - 1].toUpperCase()} {selectedDay}
          </h2>
          <span className="font-mono text-xs text-[#A88B55]">
            {matchedEvents.length} DOCUMENTED EVENTS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {matchedEvents.map((evt, idx) => (
            <div
              key={idx}
              className="border border-white/15 bg-[#0E100C] hover:border-[#D7FF00]/60 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="relative aspect-[16/9] bg-black border-b border-white/10 overflow-hidden">
                  <img
                    src={evt.imageUrl}
                    alt={evt.title}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#090A08]/90 border border-white/20 px-2 py-0.5 font-mono text-[10px] text-[#D7FF00] tracking-widest uppercase">
                    YEAR {evt.year}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#A88B55] mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{evt.location}</span>
                  </div>

                  <h3 className="font-oswald text-2xl text-white uppercase tracking-tight mb-3 group-hover:text-[#D7FF00] transition-colors">
                    {evt.title}
                  </h3>

                  <p className="font-serif text-sm text-neutral-300 leading-relaxed mb-4">
                    {evt.summary}
                  </p>

                  <div className="p-3 bg-[#121410] border border-white/10 font-mono text-[11px] text-neutral-400">
                    <span className="text-[#D7FF00] uppercase font-bold block mb-1">Impact:</span>
                    <span>{evt.significance}</span>
                  </div>
                </div>
              </div>

              {evt.recordId && onSelectRecord && (
                <div className="p-6 pt-0 border-t border-white/5 mt-4">
                  <button
                    onClick={() => onSelectRecord(evt.recordId!)}
                    className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#D7FF00] hover:underline cursor-pointer"
                  >
                    <span>Read Complete Monograph</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};
