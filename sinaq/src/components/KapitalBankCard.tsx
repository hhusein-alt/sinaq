'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';

interface Props {
  slug: string;
  company: string;
  title: string;
  category: string;
  duration: string;
  level: string;
}

export default function KapitalBankCard({ slug, company, title, category, duration, level }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLAnchorElement>(null);

  // Desktop: mouse hover play/pause
  const handleMouseEnter = () => videoRef.current?.play().catch(() => {});
  const handleMouseLeave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  // Mobile: IntersectionObserver — play when card is 60% in viewport
  useEffect(() => {
    const video = videoRef.current;
    const card = cardRef.current;
    if (!video || !card) return;
    if (!('ontouchstart' in window)) return; // desktop uses mouse events

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.style.opacity = '1';
          video.play().catch(() => {});
        } else {
          video.style.opacity = '0';
          video.pause();
          video.currentTime = 0;
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      ref={cardRef}
      href={`/simulation/${slug}`}
      className="bg-gradient-to-b from-[#1A2642] to-[#111A2E] rounded-xl overflow-hidden border border-slate-800 hover:border-slate-500 hover:shadow-lg hover:shadow-blue-900/20 transition-all cursor-pointer flex flex-col p-6 min-h-[260px] md:min-h-[300px] relative text-center group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Static shimmer — z-0 */}
      <div className="h-16 w-full opacity-20 bg-gradient-to-br from-transparent to-white/5 absolute top-0 left-0 z-0" />

      {/* Hover video — z-20 */}
      <video
        ref={videoRef}
        src="/videos/card-kapital-hover.mp4.mp4"
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      {/* AKTİV badge — z-30 */}
      <div className="absolute top-3 left-3 z-30">
        <span className="bg-teal-600/20 text-teal-400 text-[9px] font-bold px-2 py-0.5 rounded tracking-wide border border-teal-800/40">
          AKTİV
        </span>
      </div>

      {/* Text content — z-30 */}
      <div className="flex-grow flex flex-col items-center justify-center relative z-30 mt-4">
        <span className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-3">{company}</span>
        <h3 className="text-lg md:text-xl font-bold text-white leading-tight mb-4 group-hover:text-[#22c55e] transition-colors">{title}</h3>
      </div>

      {/* Footer — z-30 */}
      <div className="mt-auto pt-4 border-t border-slate-700/50 relative z-30">
        <p className="text-xs text-gray-400 font-medium tracking-wide">
          {category} • {level} • {duration}
        </p>
      </div>
    </Link>
  );
}
