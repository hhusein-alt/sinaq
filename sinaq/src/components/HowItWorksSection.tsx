'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const EASE = 0.12;

const DIMENSIONS = [
  {
    num: '01',
    title: 'Analitik Yanaşma',
    en: 'Analytical Rigor',
    desc: 'AI cavabınızdakı məntiq zəncirini, hesablama dəqiqliyini və əsaslandırma dərinliyini ölçür.',
    inP: 0.0,
    outP: 0.4,
  },
  {
    num: '02',
    title: 'Yerli Kontekst',
    en: 'Local Context Awareness',
    desc: 'ƏDV (18%), Mərkəzi Bank normaları, Azərbaycan əmək qanunvericiliyi — AI hər detalı tanıyır.',
    inP: 0.25,
    outP: 0.6,
  },
  {
    num: '03',
    title: 'Kommunikasiya',
    en: 'Communication Clarity',
    desc: 'Cavabınızın strukturu, aydınlığı və peşəkar tonu — işəgötürəni inandırıb-inandırmadığınız qiymətləndirilir.',
    inP: 0.5,
    outP: 0.8,
  },
  {
    num: '04',
    title: 'Risk Müəyyənləşdirməsi',
    en: 'Risk Identification',
    desc: 'Gizli risklər, alternativ ssenarilər və qərarlarınızın potensial nəticələrini nə dərəcədə gördünüz.',
    inP: 0.7,
    outP: 1.0,
  },
];

export default function CombinedInfoSection() {
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number>(0);
  const easedTime = useRef(0);

  useEffect(() => {
    // Respect reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const stage = stageRef.current;
    const video = videoRef.current;
    if (!stage || !video) return;

    function computeProgress(): number {
      const rect = stage!.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      return Math.min(1, Math.max(0, -rect.top / scrollable));
    }

    function updateDimensions(progress: number) {
      DIMENSIONS.forEach((d, i) => {
        const el = itemRefs.current[i];
        if (!el) return;
        const visible = progress >= d.inP && progress <= d.outP;
        el.style.opacity = visible ? '1' : '0.15';
        el.style.transform = visible ? 'translateX(0)' : 'translateX(-10px)';
      });
    }

    function tick() {
      const progress = computeProgress();
      const v = video!;

      if (v.duration && isFinite(v.duration)) {
        const target = progress * v.duration;
        easedTime.current += (target - easedTime.current) * EASE;
        if (Math.abs(v.currentTime - easedTime.current) > 0.01) {
          v.currentTime = easedTime.current;
        }
      }

      updateDimensions(progress);
      rafRef.current = requestAnimationFrame(tick);
    }

    video.addEventListener('loadedmetadata', () => {
      easedTime.current = 0;
      rafRef.current = requestAnimationFrame(tick);
    }, { once: true });

    video.load();

    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <>
      {/* ── Top Section: How it Works (3 steps) ── */}
      <section className="bg-[#0B1221] py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div>
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                Sınaq – təhsil ilə uğurlu karyera arasındakı körpüdür.
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Bizim simulyasiyalarımız, Bakının real şirkətlərində işləyən junior mütəxəssislərin gündəlik tapşırıqlarını əks etdirərək real həyat bacarıqlarını formalaşdırır. 10 dəqiqədə bacarıqlarınızı sübut edin.
              </p>
              <Link
                href="/simulations"
                className="bg-[#22c55e] hover:bg-[#1ea34d] text-white font-semibold py-3 px-8 rounded-full transition-all shadow-[0_0_15px_rgba(34,197,94,0.4)] inline-block"
              >
                Necə İşlədiyini Öyrən →
              </Link>
            </div>

            <div className="flex flex-col gap-8">
              {[
                'Sınaq-dan qeydiyyatdan keçin və bizə özünüz barədə qısa məlumat verin.',
                'Real işi təkrarlayan 10 dəqiqəlik simulyasiyaya qoşulun və tapşırığı yerinə yetirin.',
                'Süni İntellekt tərəfindən anında qiymətləndirilin və Boss.az profiliniz üçün təsdiqlənmiş bacarıq pasportu qazanın.',
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#22c55e] text-white flex items-center justify-center font-bold text-sm mt-1">
                    {i + 1}
                  </div>
                  <p className="text-lg text-white">{text}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Scroll-Scrubbed AI Grading Section ── */}
      <div
        ref={stageRef}
        className="relative bg-[#0B1221]"
        style={{ height: '320vh' }}
      >
        <div className="sticky top-0 h-screen overflow-hidden flex items-center border-t border-slate-800/60">
          <div className="container max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left: dimension text */}
            <div className="flex flex-col gap-2">
              <p className="text-[#22c55e] text-xs font-bold tracking-[0.2em] uppercase mb-4">
                Süni İntellekt Qiymətləndirməsi
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-10">
                4 meyar.{' '}
                <span className="text-[#22c55e]">10 saniyə.</span>{' '}
                Dəqiq nəticə.
              </h2>

              <div className="flex flex-col gap-7">
                {DIMENSIONS.map((d, i) => (
                  <div
                    key={d.num}
                    ref={el => { itemRefs.current[i] = el; }}
                    style={{
                      opacity: i === 0 ? 1 : 0.15,
                      transform: i === 0 ? 'translateX(0)' : 'translateX(-10px)',
                      transition: 'opacity 600ms ease, transform 600ms ease',
                    }}
                  >
                    <div className="flex gap-4">
                      <span className="text-[#22c55e] font-mono text-xs font-bold mt-1 flex-shrink-0 w-6">
                        {d.num}
                      </span>
                      <div>
                        <p className="text-white font-bold text-lg leading-snug">{d.title}</p>
                        <p className="text-[#22c55e]/60 font-mono text-[11px] tracking-wide mb-1">{d.en}</p>
                        <p className="text-gray-400 text-sm leading-relaxed">{d.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: AI grading video */}
            <div className="relative rounded-2xl overflow-hidden bg-[#060f1e] border border-slate-800 shadow-2xl shadow-[#22c55e]/5 z-10"
              style={{ aspectRatio: '16/10' }}>
              <video
                ref={videoRef}
                src="/videos/ai-grading-explode.mp4.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-contain z-10"
              />
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom Stats Section (unchanged) ── */}
      <section className="bg-gradient-to-r from-[#0d172e] to-[#111A2E] border-y border-slate-800 py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

            <div>
              <h3 className="text-5xl font-bold text-[#22c55e] mb-4">10 Dəqiqə</h3>
              <p className="text-lg text-gray-300">bir simulyasiyanı bitirmək və bacarığını sübut etmək üçün</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#22c55e] mb-4">100% Yerli</h3>
              <p className="text-lg text-gray-300">ƏDV, Mərkəzi Bankın normaları və yerli şirkət konteksti</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#22c55e] mb-4">Süni İntellekt</h3>
              <p className="text-lg text-gray-300">tərəfindən saniyələr içində 4 fərqli meyar üzrə dəqiq qiymətləndirmə</p>
            </div>

          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/simulations"
              className="bg-white text-[#0B1221] hover:bg-gray-200 font-bold py-3 px-8 rounded-full transition-all"
            >
              Simulyasiya Tap →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
