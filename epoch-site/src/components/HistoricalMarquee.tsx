import React from 'react';

export const HistoricalMarquee: React.FC = () => {
  const items = [
    "PREHISTORY",
    "ANCIENT WORLD",
    "CLASSICAL AGE",
    "MEDIEVAL WORLD",
    "EARLY MODERN",
    "INDUSTRIAL AGE",
    "MODERN WORLD"
  ];

  return (
    <div className="bg-[#121410] border-y border-white/10 py-4 overflow-hidden relative">
      <div className="flex whitespace-nowrap animate-marquee items-center gap-12 font-mono text-xs uppercase tracking-widest text-neutral-400">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-12">
            <span className="hover:text-[#D7FF00] transition-colors cursor-default">{item}</span>
            <span className="w-1.5 h-1.5 bg-[#D7FF00] rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};
