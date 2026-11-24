import React from 'react';
import { X, Calendar, Globe, User, BookOpen } from 'lucide-react';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    type: 'civilization' | 'figure' | 'conflict' | 'religion' | 'timeline';
    title: string;
    subtitle?: string;
    period?: string;
    region?: string;
    description: string;
    image?: string;
    details?: string[];
  } | null;
}

export const DetailModal: React.FC<DetailModalProps> = ({ isOpen, onClose, item }) => {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#121410] border border-white/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-neutral-400 hover:text-[#D7FF00] transition-colors p-2 bg-[#090A08] border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#D7FF00] block mb-2">
            // EPOCH ARCHIVE ENTRY : {item.type.toUpperCase()}
          </span>
          <h2 className="font-oswald text-3xl sm:text-4xl text-white uppercase tracking-wider mb-2">
            {item.title}
          </h2>
          {item.subtitle && (
            <p className="font-mono text-xs text-neutral-400">{item.subtitle}</p>
          )}
        </div>

        {/* Metadata Badges */}
        <div className="flex flex-wrap gap-4 mb-6 font-mono text-xs text-neutral-300">
          {item.period && (
            <div className="flex items-center gap-2 bg-[#090A08] px-3 py-1.5 border border-white/10">
              <Calendar className="w-3.5 h-3.5 text-[#D7FF00]" />
              <span>{item.period}</span>
            </div>
          )}
          {item.region && (
            <div className="flex items-center gap-2 bg-[#090A08] px-3 py-1.5 border border-white/10">
              <Globe className="w-3.5 h-3.5 text-[#D7FF00]" />
              <span>{item.region}</span>
            </div>
          )}
        </div>

        {/* Image if available */}
        {item.image && (
          <div className="mb-6 border border-white/15 p-2 bg-[#090A08]">
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
          </div>
        )}

        {/* Description */}
        <div className="space-y-4 mb-8">
          <p className="font-manrope text-neutral-300 text-sm sm:text-base leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Additional bullet points */}
        {item.details && item.details.length > 0 && (
          <div className="space-y-3 border-t border-white/10 pt-6">
            <h4 className="font-mono text-xs uppercase text-[#D7FF00] tracking-wider">Key Historical Signatures</h4>
            <ul className="space-y-2 font-manrope text-sm text-neutral-300">
              {item.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#D7FF00] font-mono mt-0.5">·</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer actions */}
        <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#D7FF00] text-[#090A08] px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
          >
            Close Archive Entry
          </button>
        </div>
      </div>
    </div>
  );
};
