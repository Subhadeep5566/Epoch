import React, { useState } from 'react';
import { ExternalLink, Image as ImageIcon, AlertCircle } from 'lucide-react';
import { ArchivalImage } from '../data/historicalData';

interface HistoricalImageProps {
  image: ArchivalImage;
  className?: string;
}

export const HistoricalImage: React.FC<HistoricalImageProps> = ({ image, className = '' }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <figure className={`my-8 border border-[#171717]/20 p-4 bg-[#E9E1D2] shadow-md ${className}`}>
      <div className="aspect-[16/10] overflow-hidden bg-[#171717] relative flex items-center justify-center">
        {isLoading && !hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#171717]/80 text-[#F3EFE5] font-mono text-xs">
            <div className="w-6 h-6 border-2 border-[#A88B55] border-t-transparent rounded-full animate-spin mb-2" />
            <span>Loading Archival Record...</span>
          </div>
        )}

        {hasError ? (
          <div className="flex flex-col items-center justify-center p-6 text-center text-neutral-400">
            <AlertCircle className="w-8 h-8 text-[#A88B55] mb-2" />
            <span className="font-mono text-xs uppercase text-[#171717]">Archival Asset Unavailable</span>
            <span className="font-mono text-[10px] text-neutral-500 mt-1">{image.title} ({image.date})</span>
          </div>
        ) : (
          <img
            src={image.url}
            alt={image.title}
            referrerPolicy="no-referrer"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setHasError(true);
            }}
            className={`w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          />
        )}
      </div>

      <figcaption className="mt-4 font-mono text-xs text-[#45413B] space-y-1.5 border-t border-[#171717]/10 pt-3">
        <div className="font-bold uppercase tracking-wider text-[#171717]">{image.title} — {image.date}</div>
        <div className="text-[#45413B]">Creator / Source: <span className="text-[#171717] font-medium">{image.creator}</span></div>
        <div className="text-[#45413B]">Archive / Institution: <span className="text-[#171717] font-medium">{image.institution}</span></div>
        <div className="flex items-center justify-between pt-2 border-t border-[#171717]/10 text-[11px]">
          <span className="text-neutral-500">Licence: {image.license}</span>
          <a
            href={image.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#641F25] hover:underline inline-flex items-center gap-1 font-bold"
          >
            <span>Verify Source</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </figcaption>
    </figure>
  );
};
