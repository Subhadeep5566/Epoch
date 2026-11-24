import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface HistoricalFigure {
  id: string;
  name: string;
  period: string;
  region: string;
  role: string;
  bio: string;
  image: string;
}

interface HistoricalFiguresProps {
  onSelectFigure: (figure: HistoricalFigure) => void;
  onViewAllFigures: () => void;
}

export const figuresData: HistoricalFigure[] = [
  {
    id: 'ashoka',
    name: 'ASHOKA THE GREAT',
    period: '304 – 232 BCE',
    region: 'Ancient India (Maurya Empire)',
    role: 'Emperor & Pioneer of Ethical Governance',
    bio: 'Mauryan sovereign who underwent a profound spiritual transformation following the Kalinga War, renouncing aggressive conquest and inscribing universal moral edicts across rock pillars throughout Asia.',
    image: '/src/assets/images/figure_ashoka_1795464677327.jpg'
  },
  {
    id: 'cleopatra',
    name: 'CLEOPATRA VII',
    period: '69 – 30 BCE',
    region: 'Alexandria, Egypt (Eastern Mediterranean)',
    role: 'Queen, Diplomat & Polyglot Scholar',
    bio: 'The last active ruler of the Ptolemaic Kingdom of Egypt. Renowned for her intellectual command of nine languages, financial acumen, and astute geopolitical alliances with Rome.',
    image: '/src/assets/images/figure_cleopatra_1795464677702.jpg'
  },
  {
    id: 'davinci',
    name: 'LEONARDO DA VINCI',
    period: '1452 – 1519 CE',
    region: 'Florence & Milan (Renaissance Italy)',
    role: 'Polymath, Anatomist & Engineer',
    bio: 'The quintessential Renaissance thinker whose curiosity united anatomical dissection, hydraulic engineering, perspective optics, and painting, laying the empirical foundation for modern science.',
    image: '/src/assets/images/figure_davinci_1795464678057.jpg'
  }
];

export const HistoricalFigures: React.FC<HistoricalFiguresProps> = ({ onSelectFigure, onViewAllFigures }) => {
  return (
    <section id="figures" className="bg-[#090A08] py-28 px-6 lg:px-12 border-b border-white/10 scroll-mt-20 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs tracking-widest text-[#D7FF00] uppercase block mb-2">
              // 05. HISTORICAL FIGURES
            </span>
            <h2 className="font-oswald text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
              MEET THE MINDS <br />
              <span className="text-[#D7FF00]">THAT CHANGED HUMANITY.</span>
            </h2>
          </div>
          <button
            onClick={onViewAllFigures}
            className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-white hover:text-[#D7FF00] transition-colors self-start md:self-auto cursor-pointer"
          >
            <span>View All Personalities</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3-Column Equal Height Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {figuresData.map((fig) => (
            <div
              key={fig.id}
              onClick={() => onSelectFigure(fig)}
              className="bg-[#121410] border border-white/15 flex flex-col justify-between group hover:border-[#D7FF00]/60 transition-all duration-300 cursor-pointer overflow-hidden h-full"
            >
              {/* 3:4 Portrait Framing */}
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 border-b border-white/10 shrink-0">
                <div className="absolute top-3 left-3 z-10 font-mono text-[10px] bg-[#090A08]/90 backdrop-blur-sm text-[#D7FF00] px-2.5 py-1 border border-white/15">
                  {fig.period}
                </div>
                <img
                  src={fig.image}
                  alt={fig.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow justify-between gap-6">
                <div>
                  <span className="font-mono text-[11px] text-[#D7FF00] block mb-2 uppercase tracking-wider">
                    {fig.role}
                  </span>
                  <h3 className="font-oswald text-2xl text-white uppercase tracking-wider group-hover:text-[#D7FF00] transition-colors mb-1">
                    {fig.name}
                  </h3>
                  <span className="font-mono text-[10px] text-neutral-400 block mb-4">
                    {fig.region}
                  </span>
                  <p className="font-manrope text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                    {fig.bio}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs uppercase text-[#D7FF00]">
                  <span>Inspect Historical Dossier</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
