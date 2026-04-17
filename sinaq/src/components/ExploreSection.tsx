'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PILLS = [
  "Seçilmişlər",
  "Bank işi",
  "Texnologiya/Məhsul",
  "Konsaltinq",
  "Marketinq",
  "Energetika",
  "İnsan Resursları"
];

const CardLogo = ({ company }: { company: string }) => {
  if (company === "Kapital Bank") {
    return (
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-white relative flex items-center justify-center overflow-hidden" style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%, 0 25%)' }}>
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-r-[8px] border-r-[#030812] border-b-[6px] border-b-transparent -ml-1" />
        </div>
        <span className="text-white font-bold text-[14px]">Kapital Bank</span>
      </div>
    );
  }
  if (company === "SOCAR") {
    return (
      <div className="flex items-center gap-1.5">
        <svg className="w-4 h-5" viewBox="0 0 24 32" fill="none">
          <path d="M12 32C12 32 3 24 3 14C3 8 8 2 12 0C12 0 10 6 10 12C10 18 16 18 18 24C18 27.5 15.5 31 12 32Z" fill="#14b8a6"/>
          <path d="M12 28C12 28 7 22 7 15C7 10 10 6 12 4C12 4 10 8 10 13C10 18 15 17 15 22C15 25 13.5 27.5 12 28Z" fill="#ef4444"/>
        </svg>
        <span className="text-white font-bold text-[14px]">SOCAR</span>
      </div>
    );
  }
  if (company === "Azercell") {
    return (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-5 h-5 transform -rotate-12">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
          <path d="M2 12H22M12 2V22" opacity="0.3"/>
        </svg>
        <span className="text-white font-normal text-[15px]">Azercell</span>
      </div>
    );
  }
  if (company === "PASHA Bank") {
    return (
      <div className="flex items-center gap-1.5">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
          <path d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z"/>
        </svg>
        <div className="flex flex-col leading-none">
          <span className="text-white font-bold text-[11px]">PASHA</span>
          <span className="text-white font-bold text-[11px]">Bank</span>
        </div>
      </div>
    );
  }
  if (company === "Bravo") {
    return (
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 border-[3px] border-[#65a30d] rounded-[2px] transform rotate-45 relative">
          <div className="absolute inset-0 m-auto w-1.5 h-1.5 bg-[#65a30d] rounded-full transform -rotate-45" />
        </div>
        <span className="text-[#65a30d] font-bold text-[14px] ml-1">Bravo</span>
      </div>
    );
  }
  return <span className="text-xs font-bold text-gray-400">{company}</span>;
};

const CARDS = [
  { id: 1, title: 'Kiçik Kredit Analitiki',     company: 'Kapital Bank', category: 'Bank işi',             details: 'Başlanğıc səviyyə • 10 dəqiqə' },
  { id: 2, title: 'Təchizat üzrə Mütəxəssis',   company: 'SOCAR',        category: 'Energetika',            details: 'Orta səviyyə • 10 dəqiqə' },
  { id: 3, title: 'Rəqəmsal Məhsul Meneceri',    company: 'Azercell',     category: 'Texnologiya/Məhsul',    details: 'Orta səviyyə • 10 dəqiqə' },
  { id: 4, title: 'Risklərin İdarə Edilməsi',    company: 'PASHA Bank',   category: 'Bank işi',             details: 'Başlanğıc səviyyə • 15 dəqiqə' },
  { id: 5, title: 'Marketinq Tədqiqatçısı',      company: 'Bravo',        category: 'Marketinq',            details: 'Başlanğıc səviyyə • 10 dəqiqə', badge: 'AKTİV VAKANSİYALAR' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 260, damping: 28, delay: i * 0.07 },
  }),
};

export default function ExploreSection() {
  const [activeCategory, setActiveCategory] = useState("Seçilmişlər");

  const visibleCards = activeCategory === "Seçilmişlər"
    ? CARDS
    : CARDS.filter(card => card.category === activeCategory);

  return (
    <section className="bg-[#030812] pt-12 md:pt-16">
      <div className="container mx-auto px-4 md:px-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">
          Pulsuz iş simulyasiyalarımızı kəşf edin
        </h2>

        {/* Pills */}
        <div className="flex flex-wrap gap-3 md:gap-4 mb-10 overflow-x-auto no-scrollbar">
          {PILLS.map(pill => {
            const isActive = activeCategory === pill;
            return (
              <motion.button
                key={pill}
                onClick={() => setActiveCategory(pill)}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-[14px] font-medium transition-colors ${
                  isActive
                    ? 'bg-[#22c55e] text-white shadow-[0_0_15px_rgba(34,197,94,0.3)]'
                    : 'bg-transparent text-gray-300 border border-slate-600 hover:border-white hover:text-white'
                }`}
              >
                {pill}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Cards scroll area */}
      <div className="container mx-auto px-4 md:px-12 pb-16 md:pb-20 overflow-hidden relative">
        <div className="flex gap-5 md:gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          <AnimatePresence mode="popLayout">
            {visibleCards.map((card, i) => (
              <motion.div
                key={card.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                whileHover={{
                  y: -8,
                  transition: { type: 'spring', stiffness: 300, damping: 22 },
                }}
                className="flex-shrink-0 w-[260px] sm:w-[280px] snap-start cursor-pointer"
                style={{ willChange: 'transform, opacity' }}
              >
                <div className="bg-[#0a1122] border border-[#1e293b] rounded-[16px] aspect-[16/11] mb-4 overflow-hidden relative shadow-lg group">
                  <div className="w-full h-full bg-gradient-to-br from-[#10213d] to-[#081121] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Hover shimmer line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#22c55e]"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                  />
                </div>

                <div className="h-[28px] mb-3 flex items-center">
                  <CardLogo company={card.company} />
                </div>

                <h3 className="text-[17px] md:text-[18px] font-bold text-white mb-1 leading-snug group-hover:text-[#22c55e] transition-colors">
                  {card.title}
                </h3>
                <p className="text-[14px] text-gray-400 mb-1">{card.category}</p>
                <p className="text-[13px] text-gray-500 font-medium">{card.details}</p>

                {card.badge && (
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1.5 bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/20 text-[10px] font-bold uppercase tracking-widest rounded">
                      {card.badge}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {visibleCards.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="w-full py-12 text-center text-gray-500"
            >
              Tezliklə {activeCategory} kateqoriyasında yeni simulyasiyalar əlavə ediləcək.
            </motion.div>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}` }} />
    </section>
  );
}
