'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const VIDEO_SRC = '/videos/hero-bg-loop.mp4.mp4';
const CROSSFADE_TRIGGER_S = 1.5; // seconds before end to begin crossfade
const CROSSFADE_DURATION_MS = 1000; // must match CSS transition below

export default function HeroSection() {
  const refA = useRef<HTMLVideoElement>(null);
  const refB = useRef<HTMLVideoElement>(null);
  const fading = useRef(false);

  useEffect(() => {
    const a = refA.current;
    const b = refB.current;
    if (!a || !b) return;

    const crossfade = (from: HTMLVideoElement, to: HTMLVideoElement) => {
      if (fading.current) return;
      fading.current = true;

      to.currentTime = 0;
      to.play().catch(() => {});

      from.style.opacity = '0';
      to.style.opacity = '1';

      setTimeout(() => {
        from.pause();
        from.currentTime = 0;
        fading.current = false;
      }, CROSSFADE_DURATION_MS);
    };

    const onTimeUpdateA = () => {
      if (a.duration && a.duration - a.currentTime <= CROSSFADE_TRIGGER_S) {
        crossfade(a, b);
      }
    };

    const onTimeUpdateB = () => {
      if (b.duration && b.duration - b.currentTime <= CROSSFADE_TRIGGER_S) {
        crossfade(b, a);
      }
    };

    a.addEventListener('timeupdate', onTimeUpdateA);
    b.addEventListener('timeupdate', onTimeUpdateB);

    return () => {
      a.removeEventListener('timeupdate', onTimeUpdateA);
      b.removeEventListener('timeupdate', onTimeUpdateB);
    };
  }, []);

  return (
    <section
      className="relative overflow-hidden -mt-20 pt-[160px] md:pt-[180px] pb-[100px] text-center"
      style={{ background: 'radial-gradient(circle at center, #10213d 0%, #081121 60%, #030812 100%)' }}
    >
      {/* Video A — starts playing, fully visible */}
      <video
        ref={refA}
        autoPlay
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ opacity: 1, transition: `opacity ${CROSSFADE_DURATION_MS}ms ease` }}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      {/* Video B — standby, fades in when A is near its end */}
      <video
        ref={refB}
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ opacity: 0, transition: `opacity ${CROSSFADE_DURATION_MS}ms ease` }}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      <div className="container mx-auto px-4 max-w-[900px] relative z-10 flex flex-col items-center">
        <h1 className="text-[60px] md:text-[100px] font-bold text-white leading-tight tracking-tight mb-2">
          Sınaq
        </h1>
        <h2 className="text-[28px] md:text-[45px] font-bold text-white leading-snug mb-6 tracking-tight drop-shadow-sm">
          Real iş. Real qiymət. Real bacarıq.
        </h2>
        <p className="text-[16px] md:text-[18px] font-normal text-gray-300 leading-relaxed max-w-[700px] mb-12 drop-shadow-sm">
          Azərbaycanda diplom kifayət deyil. İşəgötürənlər təcrübə tələb edir,
          lakin təcrübə qazanmaq üçün iş lazımdır. Bu qapalı dövrəni Sinaqla sindir.
        </p>

        <div className="relative group">
          <div className="absolute inset-0 bg-[#22c55e] opacity-40 blur-xl rounded-full group-hover:opacity-60 transition-opacity duration-500"></div>
          <Link
            href="/login"
            className="relative flex items-center justify-center gap-2 text-[18px] md:text-[20px] font-bold text-white bg-[#22c55e] rounded-full px-12 py-4 hover:bg-[#1fbd58] transition-all shadow-md"
          >
            İndi Başla <span className="font-normal">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
