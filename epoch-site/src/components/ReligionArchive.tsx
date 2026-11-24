import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

export interface ReligionItem {
  id: string;
  name: string;
  origin: string;
  period: string;
  description: string;
}

interface ReligionArchiveProps {
  onSelectReligion: (religion: ReligionItem) => void;
}

export const religionsData: ReligionItem[] = [
  { 
    id: 'hinduism', 
    name: 'HINDUISM', 
    origin: 'Indian Subcontinent', 
    period: 'c. 2300 – 1500 BCE', 
    description: 'One of the world\'s oldest continuous traditions, centered on Dharma (cosmic order), Karma, Samsara, and Moksha (spiritual liberation).' 
  },
  { 
    id: 'buddhism', 
    name: 'BUDDHISM', 
    origin: 'Ancient India (Magadha)', 
    period: 'c. 6th Century BCE', 
    description: 'Founded by Siddhartha Gautama, focusing on the Four Noble Truths and the Noble Eightfold Path to transcend suffering and attain Nirvana.' 
  },
  { 
    id: 'jainism', 
    name: 'JAINISM', 
    origin: 'Ancient India', 
    period: 'c. 9th – 6th Century BCE', 
    description: 'Ancient philosophy advocating absolute non-violence (Ahimsa), ascetic discipline, spiritual truth (Satya), and soul purification.' 
  },
  { 
    id: 'judaism', 
    name: 'JUDAISM', 
    origin: 'Levant / Ancient Near East', 
    period: 'c. 2nd Millennium BCE', 
    description: 'One of history\'s earliest monotheistic faiths, founded upon the divine covenant revealed through the Torah and prophetic ethics.' 
  },
  { 
    id: 'christianity', 
    name: 'CHRISTIANITY', 
    origin: 'Levant / Judea', 
    period: 'c. 1st Century CE', 
    description: 'Monotheistic Abrahamic tradition centered on the teachings, crucifixion, and resurrection of Jesus of Nazareth.' 
  },
  { 
    id: 'islam', 
    name: 'ISLAM', 
    origin: 'Arabian Peninsula (Mecca & Medina)', 
    period: 'c. 7th Century CE', 
    description: 'Monotheistic faith revealed to the Prophet Muhammad, founded upon the Holy Quran, ethical charity (Zakat), and the Five Pillars.' 
  },
  { 
    id: 'sikhism', 
    name: 'SIKHISM', 
    origin: 'Punjab, South Asia', 
    period: 'c. 15th Century CE', 
    description: 'Founded by Guru Nanak, emphasizing devotion to the One Creator (Ik Onkar), egalitarian dignity, selfless service (Seva), and social justice.' 
  },
  { 
    id: 'taoism', 
    name: 'TAOISM', 
    origin: 'Ancient China', 
    period: 'c. 4th Century BCE', 
    description: 'Philosophical tradition attributed to Laozi, centered on living in effortless alignment with the Tao (the cosmic natural flow of the universe).' 
  },
  { 
    id: 'shinto', 
    name: 'SHINTO', 
    origin: 'Japanese Archipelago', 
    period: 'Ancient Origins', 
    description: 'Indigenous spirituality of Japan centered on reverence for Kami (sacred spirits of nature, landscapes, ancestors, and natural forces).' 
  },
  { 
    id: 'zoroastrianism', 
    name: 'ZOROASTRIANISM', 
    origin: 'Ancient Persia (Iranian Plateau)', 
    period: 'c. 2nd – 1st Millennium BCE', 
    description: 'Ancient Iranian monotheism founded by Zoroaster, emphasizing cosmic dualism between Truth (Asha) and Deceit (Druj).' 
  }
];

export const ReligionArchive: React.FC<ReligionArchiveProps> = ({ onSelectReligion }) => {
  return (
    <section id="religions" className="bg-[#090A08] py-28 px-6 lg:px-12 border-b border-white/10 scroll-mt-20 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#D7FF00] uppercase mb-2">
              <BookOpen className="w-4 h-4 text-[#D7FF00]" />
              <span>// 07. BELIEFS & TRADITIONS</span>
            </div>
            <h2 className="font-oswald text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
              THE BELIEFS THAT <br />
              <span className="text-[#D7FF00]">SHAPED HUMANITY.</span>
            </h2>
          </div>
          <p className="font-manrope text-sm text-neutral-300 max-w-md font-light leading-relaxed">
            Spiritual systems, sacred texts, and ethical frameworks that anchored ancient societies and continue to guide billions of human lives worldwide.
          </p>
        </div>

        {/* 10 Traditions Balanced 5x2 Grid with Uniform Heights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch">
          {religionsData.map((rel) => (
            <div
              key={rel.id}
              onClick={() => onSelectReligion(rel)}
              className="bg-[#121410] border border-white/15 p-6 flex flex-col justify-between group hover:border-[#D7FF00]/60 transition-all cursor-pointer h-full"
            >
              <div>
                <span className="font-mono text-[10px] text-[#D7FF00] block mb-2 font-bold tracking-wider">
                  {rel.period}
                </span>
                <h3 className="font-oswald text-xl text-white uppercase tracking-wider group-hover:text-[#D7FF00] transition-colors mb-1">
                  {rel.name}
                </h3>
                <span className="font-mono text-[10px] text-neutral-400 block mb-4 uppercase">
                  {rel.origin}
                </span>
                <p className="font-manrope text-xs text-neutral-300 leading-relaxed font-light line-clamp-3">
                  {rel.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-[10px] uppercase text-[#D7FF00]">
                <span>Tradition Monograph</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
