'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Link from 'next/link';

const VIDEO_SRC = '/videos/hero-bg-loop.mp4.mp4';
const CROSSFADE_TRIGGER_S = 1.5;
const CROSSFADE_DURATION_MS = 1000;

export default function HeroSection() {
  const refA = useRef<HTMLVideoElement>(null);
  const refB = useRef<HTMLVideoElement>(null);
  const fading = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);

  /* ── Scroll parallax ── */
  const { scrollY } = useScroll();
  const rawY = useTransform(scrollY, [0, 600], ['0%', '18%']);
  const parallaxY = useSpring(rawY, { stiffness: 60, damping: 20, restDelta: 0.001 });

  /* ── Crossfade loop ── */
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

    const onA = () => { if (a.duration && a.duration - a.currentTime <= CROSSFADE_TRIGGER_S) crossfade(a, b); };
    const onB = () => { if (b.duration && b.duration - b.currentTime <= CROSSFADE_TRIGGER_S) crossfade(b, a); };

    a.addEventListener('timeupdate', onA);
    b.addEventListener('timeupdate', onB);
    return () => { a.removeEventListener('timeupdate', onA); b.removeEventListener('timeupdate', onB); };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden -mt-20 min-h-[100svh] flex items-center justify-center pt-[120px] sm:pt-[160px] md:pt-[180px] pb-[60px] md:pb-[100px] text-center"
      style={{ background: 'radial-gradient(circle at center, #10213d 0%, #081121 60%, #030812 100%)' }}
    >
      {/* Parallax video wrapper */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: parallaxY, willChange: 'transform' }}
      >
        <video
          ref={refA}
          autoPlay muted playsInline aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{
            opacity: 1,
            transition: `opacity ${CROSSFADE_DURATION_MS}ms ease`,
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
          }}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
        <video
          ref={refB}
          muted playsInline aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{
            opacity: 0,
            transition: `opacity ${CROSSFADE_DURATION_MS}ms ease`,
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
          }}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      </motion.div>

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 max-w-[900px] relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.h1
          className="text-[38px] sm:text-[56px] md:text-[100px] font-bold text-white leading-tight tracking-tight mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Sınaq
        </motion.h1>

        <motion.h2
          className="text-[18px] sm:text-[24px] md:text-[45px] font-bold text-white leading-snug mb-4 md:mb-6 tracking-tight drop-shadow-sm"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Real iş. Real qiymət. Real bacarıq.
        </motion.h2>

        <motion.p
          className="text-[14px] sm:text-[16px] md:text-[18px] font-normal text-gray-300 leading-relaxed max-w-[600px] md:max-w-[700px] mb-8 md:mb-12 drop-shadow-sm px-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          Azərbaycanda diplom kifayət deyil. İşəgötürənlər təcrübə tələb edir,
          lakin təcrübə qazanmaq üçün iş lazımdır. Bu qapalı dövrəni Sinaqla sindir.
        </motion.p>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, type: 'spring', stiffness: 200, damping: 20 }}
        >
          {/* Breathing glow */}
          <motion.div
            className="absolute inset-0 bg-[#22c55e] rounded-full"
            animate={{ opacity: [0.35, 0.65, 0.35], scale: [1, 1.12, 1] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ filter: 'blur(16px)', willChange: 'transform, opacity' }}
          />
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 22 }}>
            <Link
              href="/login"
              className="relative flex items-center justify-center gap-2 text-[15px] sm:text-[17px] md:text-[20px] font-bold text-white bg-[#22c55e] rounded-full px-8 py-3 md:px-12 md:py-4 hover:bg-[#1fbd58] transition-colors shadow-md min-w-[160px]"
              style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
            >
              İndi Başla <span className="font-normal">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
