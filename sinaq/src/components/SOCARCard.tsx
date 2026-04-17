'use client';

import { useRef } from 'react';
import Link from 'next/link';

interface Props {
  slug: string;
  company: string;
  title: string;
  category: string;
  duration: string;
  level: string;
}

export default function SOCARCard({ slug, company, title, category, duration, level }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <Link
      href={`/simulation/${slug}`}
      className="bg-gradient-to-b from-[#1A2642] to-[#111A2E] rounded-xl overflow-hidden border border-slate-800 hover:border-slate-500 hover:shadow-lg hover:shadow-blue-900/20 transition-all cursor-pointer flex flex-col p-6 min-h-[300px] relative text-center group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Static card shimmer — z-0 */}
      <div className="h-16 w-full opacity-20 bg-gradient-to-br from-transparent to-white/5 absolute top-0 left-0 z-0" />

      {/* Hover video — z-10, fades in on hover */}
      <video
        ref={videoRef}
        src="/videos/card-socar-hover.mp4.mp4"
        muted
        loop
        playsInline
        autoPlay
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
      />

      {/* AKTİV badge — z-20, always above video */}
      <div className="absolute top-3 left-3 z-20">
        <span className="bg-teal-600/20 text-teal-400 text-[9px] font-bold px-2 py-0.5 rounded tracking-wide border border-teal-800/40">
          AKTİV
        </span>
      </div>

      {/* Text content — z-20, always above video */}
      <div className="flex-grow flex flex-col items-center justify-center relative z-20 mt-4">
        <span className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-3">{company}</span>
        <h3 className="text-xl font-bold text-white leading-tight mb-4 group-hover:text-[#22c55e] transition-colors">{title}</h3>
      </div>

      {/* Footer — z-20, always above video */}
      <div className="mt-auto pt-4 border-t border-slate-700/50 relative z-20">
        <p className="text-xs text-gray-400 font-medium tracking-wide">
          {category} • {level} • {duration}
        </p>
      </div>
    </Link>
  );
}
