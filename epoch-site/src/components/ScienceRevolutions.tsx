import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ScienceRevolutionsProps {
  onSelectRecord: (id: string) => void;
}

export const ScienceRevolutions: React.FC<ScienceRevolutionsProps> = ({ onSelectRecord }) => {
  const featuredItem = {
    id: 'agricultural',
    title: 'THE AGRICULTURAL REVOLUTION: THE BIRTH OF CIVILIZATION',
    period: 'c. 10,000 BCE',
    desc: 'The fundamental transition from nomadic hunter-gatherer bands to settled agriculture, systematic crop cultivation, animal domestication, and permanent settlements that made complex urban civilization possible.',
    recordId: 'agricultural-revolution'
  };

  const items = [
    { 
      id: 'writing', 
      title: 'THE INVENTION OF WRITING', 
      period: 'c. 3200 BCE', 
      desc: 'Cuneiform in Mesopotamia and hieroglyphics in Egypt, establishing external human memory, bureaucratic legal codes, and literature.', 
      recordId: 'invention-of-writing' 
    },
    { 
      id: 'astronomy', 
      title: 'ANCIENT ASTRONOMY & MATHEMATICS', 
      period: 'c. 2000 BCE – 500 CE', 
      desc: 'Base-60 geometry, planetary orbits, lunar calendars, and the philosophical invention of zero in ancient India.', 
      recordId: 'ancient-astronomy' 
    },
    { 
      id: 'printing', 
      title: 'THE GUTENBERG PRINTING PRESS', 
      period: '1440 CE', 
      desc: 'Moveable metal type democratizing literacy, shattering scholastic monopolies, and sparking the scientific explosion across Europe.', 
      recordId: 'printing-press' 
    },
    { 
      id: 'scientific', 
      title: 'THE SCIENTIFIC REVOLUTION', 
      period: '16th – 18th Century', 
      desc: 'Copernican heliocentrism, Galilean telescope optics, and Newtonian universal gravitation establishing modern empirical method.', 
      recordId: 'scientific-revolution' 
    },
    { 
      id: 'industrial', 
      title: 'THE INDUSTRIAL REVOLUTION', 
      period: '18th – 19th Century', 
      desc: 'Steam engines, mechanization, metallurgy, and factory systems transforming human energy production and global urbanization.', 
      recordId: 'industrial-revolution' 
    },
    { 
      id: 'digital', 
      title: 'THE DIGITAL REVOLUTION & AI', 
      period: 'Mid-20th – Present', 
      desc: 'Silicon transistors, planetary fiber-optic internet networks, personal computing, and artificial intelligence redefining human cognition.', 
      recordId: 'digital-revolution' 
    }
  ];

  return (
    <section id="revolutions" className="bg-[#090A08] py-28 px-6 lg:px-12 border-b border-white/10 scroll-mt-20 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#D7FF00] uppercase mb-2">
              <Sparkles className="w-4 h-4 text-[#D7FF00]" />
              <span>// 08. SCIENCE & REVOLUTIONS</span>
            </div>
            <h2 className="font-oswald text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
              SCIENCE, DISCOVERY <br />
              <span className="text-[#D7FF00]">AND REVOLUTIONS.</span>
            </h2>
          </div>
          <p className="font-manrope text-sm text-neutral-300 max-w-md font-light leading-relaxed">
            Milestones of human ingenuity that transformed our understanding of the universe, accelerated energy capture, and reshaped our collective consciousness.
          </p>
        </div>

        {/* Master Balanced Composition */}
        <div className="space-y-8">
          
          {/* Featured Milestone Card */}
          <div
            onClick={() => onSelectRecord(featuredItem.recordId)}
            className="bg-[#121410] border border-white/15 p-8 sm:p-12 group hover:border-[#D7FF00]/60 transition-all cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
          >
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="bg-[#D7FF00] text-[#090A08] px-2.5 py-0.5 font-bold uppercase">
                  FOUNDATIONAL PARADIGM
                </span>
                <span className="text-[#D7FF00]">{featuredItem.period}</span>
              </div>
              <h3 className="font-oswald text-2xl sm:text-4xl text-white uppercase tracking-wide group-hover:text-[#D7FF00] transition-colors">
                {featuredItem.title}
              </h3>
              <p className="font-manrope text-sm text-neutral-300 font-light leading-relaxed">
                {featuredItem.desc}
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 font-mono text-xs uppercase text-[#D7FF00] font-bold">
              <span>Read Milestone Monograph</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* 6-Card Clean 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {items.map((item, idx) => (
              <div
                key={idx}
                onClick={() => onSelectRecord(item.recordId)}
                className="bg-[#121410] border border-white/15 p-8 flex flex-col justify-between group hover:border-[#D7FF00]/60 transition-all cursor-pointer h-full"
              >
                <div>
                  <span className="font-mono text-[10px] text-[#D7FF00] block mb-2 font-bold tracking-wider">
                    {item.period}
                  </span>
                  <h3 className="font-oswald text-xl text-white uppercase tracking-wider group-hover:text-[#D7FF00] transition-colors mb-3">
                    {item.title}
                  </h3>
                  <p className="font-manrope text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-[10px] uppercase text-[#D7FF00]">
                  <span>Explore Discovery</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
