export default function LogoTicker() {
  const customLogos = [
    {
      name: "Kapital Bank",
      element: (
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-white relative polygon-kapital flex items-center justify-center overflow-hidden">
             <div className="w-0 h-0 border-t-[8px] border-t-transparent border-r-[12px] border-r-[#030812] border-b-[8px] border-b-transparent -ml-2"></div>
          </div>
          <span className="text-white font-bold text-[22px]">Kapital Bank</span>
        </div>
      )
    },
    {
      name: "SOCAR",
      element: (
        <div className="flex items-center gap-2">
          <svg className="w-6 h-8" viewBox="0 0 24 32" fill="none">
             <path d="M12 32C12 32 3 24 3 14C3 8 8 2 12 0C12 0 10 6 10 12C10 18 16 18 18 24C18 27.5 15.5 31 12 32Z" fill="#14b8a6"/>
             <path d="M12 28C12 28 7 22 7 15C7 10 10 6 12 4C12 4 10 8 10 13C10 18 15 17 15 22C15 25 13.5 27.5 12 28Z" fill="#ef4444"/>
          </svg>
          <span className="text-white font-bold text-[22px] tracking-wide">SOCAR</span>
        </div>
      )
    },
    {
      name: "PASHA Bank",
      element: (
        <div className="flex items-center gap-2">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
            <path d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z"/>
          </svg>
          <div className="flex flex-col leading-tight">
            <span className="text-white font-bold text-[16px]">PASHA</span>
            <span className="text-white font-bold text-[16px]">Bank</span>
          </div>
        </div>
      )
    },
    {
      name: "Bravo",
      element: (
        <div className="flex items-center gap-2 flex-col justify-center">
          <div className="w-8 h-8 border-[5px] border-[#65a30d] rounded-sm transform rotate-45 relative mt-1">
             <div className="absolute inset-0 m-auto w-3 h-3 bg-[#65a30d] rounded-full transform -rotate-45"></div>
          </div>
          <span className="text-[#65a30d] font-bold text-[18px]">Bravo</span>
        </div>
      )
    },
    {
      name: "Azercell",
      element: (
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-full h-full transform -rotate-12">
               <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
               <path d="M2 12H22M12 2V22" opacity="0.3"/>
            </svg>
          </div>
          <span className="text-white font-normal text-[24px]">Azercell</span>
        </div>
      )
    },
    {
      name: "BP",
      element: (
        <div className="flex items-center gap-2">
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#22c55e">
             <circle cx="12" cy="12" r="10" fill="#22c55e"/>
             <circle cx="12" cy="12" r="6" fill="#fbbf24"/>
             <circle cx="12" cy="12" r="3" fill="white"/>
          </svg>
          <span className="text-[#22c55e] font-normal text-[14px] self-start mt-1">bp</span>
        </div>
      )
    },
    {
      name: "ABB",
      element: (
        <div className="flex items-center gap-1">
          <span className="text-[#ef4444] font-black text-[28px] tracking-tighter">ABB</span>
          <svg className="w-4 h-4 text-gray-400 mb-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"/>
          </svg>
        </div>
      )
    }
  ];

  return (
    <div className="bg-[#030812] pb-16 pt-8">
      <p className="text-[14px] font-normal text-gray-400 text-center mb-8">
        Aparıcı şirkətlərdən iş simulyasiyaları və vakansiyalar
      </p>
      
      <div className="overflow-hidden w-full relative">
        <div className="flex items-center gap-16 w-max animate-ticker hover:[animation-play-state:paused]">
          {[...customLogos, ...customLogos, ...customLogos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 relative flex items-center justify-center px-4 transition-all duration-300">
               {logo.element}
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 40s linear infinite;
        }
        .polygon-kapital {
          clip-path: polygon(25% 0, 100% 0, 100% 100%, 0 100%, 0 25%);
        }
      `}} />
    </div>
  );
}
