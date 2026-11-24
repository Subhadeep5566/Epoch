import React from 'react';
import { Compass } from 'lucide-react';

export const HumanityLife: React.FC = () => {
  const aspects = [
    { 
      aspectNum: '01',
      title: 'FOOD & AGRICULTURE', 
      desc: 'From wild seed foraging and the domestication of ancient emmer wheat to complex culinary fermentation, olive oil pressing, and transcontinental spice trade routes.' 
    },
    { 
      aspectNum: '02',
      title: 'CLOTHING & TEXTILES', 
      desc: 'Spinning and weaving flax, Egyptian linen, Indian cotton, and Chinese silk into garments reflecting climate adaptation, social status, and artisanal identity.' 
    },
    { 
      aspectNum: '03',
      title: 'TRADE & COMMERCE', 
      desc: 'Standardized weights, silver shekel bullion, maritime Phoenician galleys, and the trans-Eurasian Silk Road exchanging commodities and ideas across continents.' 
    },
    { 
      aspectNum: '04',
      title: 'EDUCATION & LITERACY', 
      desc: 'Oral epic recitation, Mesopotamian scribal schools (Edubba), medieval cathedral academies, and the democratization of scientific knowledge.' 
    },
    { 
      aspectNum: '05',
      title: 'ARCHITECTURE & HABITAT', 
      desc: 'From sun-baked mud brick and timber longhouses to Roman vaulted concrete domes, Gothic stone cathedrals, and sustainable modern modular structures.' 
    },
    { 
      aspectNum: '06',
      title: 'ART, MUSIC & EXPRESSION', 
      desc: 'Paleolithic ochre cave murals, ancient bone flutes, classical ragas, renaissance chiaroscuro, and the universal emotional language of human creativity.' 
    }
  ];

  return (
    <section id="daily-life" className="bg-[#090A08] py-28 px-6 lg:px-12 border-b border-white/10 scroll-mt-20 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#D7FF00] uppercase mb-2">
              <Compass className="w-4 h-4 text-[#D7FF00]" />
              <span>// 09. EVERYDAY HUMANITY</span>
            </div>
            <h2 className="font-oswald text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
              THE TEXTURE OF <br />
              <span className="text-[#D7FF00]">DAILY HUMAN LIFE.</span>
            </h2>
          </div>
          <p className="font-manrope text-sm text-neutral-300 max-w-md font-light leading-relaxed">
            History is forged not solely by emperors and battles, but through the daily crafts, domestic rhythms, tools, and innovations of ordinary people across centuries.
          </p>
        </div>

        {/* 6-Card Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {aspects.map((asp, idx) => (
            <div 
              key={idx} 
              className="bg-[#121410] border border-white/15 p-8 flex flex-col justify-between group hover:border-[#D7FF00]/50 transition-all h-full"
            >
              <div>
                <span className="font-mono text-[10px] text-[#D7FF00] block mb-3 font-bold tracking-widest">
                  DIMENSION {asp.aspectNum}
                </span>
                <h3 className="font-oswald text-2xl text-white uppercase tracking-wider group-hover:text-[#D7FF00] transition-colors mb-3">
                  {asp.title}
                </h3>
                <p className="font-manrope text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                  {asp.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-neutral-500 uppercase">
                <span>LIVING ANTHROPOLOGY</span>
                <span className="text-[#D7FF00]">DOCUMENTED</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
