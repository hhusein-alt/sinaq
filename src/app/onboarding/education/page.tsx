"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

export default function OnboardingEducation() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#030812] flex flex-col font-sans">
      <header className="bg-[#0B1221] border-b border-slate-800 flex items-center justify-between px-8 py-4">
        <Link href="/" className="flex items-center gap-2">
          <svg className="w-5 h-5 text-[#22c55e]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20c9 0 10-8 10-8l-.5-.5A5.49 5.49 0 0 1 17 8z"/>
          </svg>
          <span className="text-xl font-bold text-white">Sınaq</span>
        </Link>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-slate-700"></div>
          <div className="w-2 h-2 rounded-full bg-[#22c55e]"></div>
          <div className="w-2 h-2 rounded-full bg-slate-700"></div>
          <div className="w-2 h-2 rounded-full bg-slate-700"></div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center max-w-[1000px] mx-auto w-full px-4 gap-16">
        
        {/* Left Illustration */}
        <div className="hidden md:flex flex-col items-center justify-center w-1/2">
           <div className="relative w-[300px] h-[300px]">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#111A2E] to-[#0d172e] rounded-2xl border border-slate-700 flex items-center justify-center p-8">
               <svg viewBox="0 0 100 100" className="w-2/3 h-2/3 text-[#22c55e]" fill="currentColor">
                 <path d="M50 10L10 30l40 20 40-20L50 10zM10 50v20l40 20 40-20V50" opacity="0.8"/>
               </svg>
               <div className="absolute top-10 left-4 text-[#22c55e] text-lg">△</div>
               <div className="absolute bottom-16 right-4 text-[#3b82f6] text-lg">○</div>
             </div>
           </div>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 flex flex-col pt-8">
          <h1 className="text-3xl font-bold text-white mb-1">Təhsil</h1>
          <p className="text-[15px] text-gray-400 mb-8 max-w-[90%]">
            Nə öyrəndiyinizi bizə bildirin ki, ən yaxşı imkanlarla uyğunlaşdıraq.
          </p>

          <form 
            onSubmit={(e) => { e.preventDefault(); router.push('/onboarding/location'); }} 
            className="space-y-6 flex-1 flex flex-col"
          >
            <div className="space-y-1">
              <label className="text-[13px] font-bold text-gray-400">HAL-HAZIRDA HANSİ DƏRƏCƏNİ / SERTİFİKATI ƏLDƏ EDİRSİNİZ? *</label>
              <select required className="w-full border-t-0 border-x-0 border-b-2 border-slate-600 bg-transparent text-gray-300 py-2 text-[14px] focus:outline-none focus:border-[#22c55e]">
                <option value="">Seçin...</option>
                <option value="bachelors">Bakalavr</option>
                <option value="masters">Magistr</option>
                <option value="phd">Doktorantura</option>
                <option value="certificate">Sertifikat / Kurs</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[13px] font-bold text-gray-400">UNİVERSİTET *</label>
              <Input required placeholder="Axtar..." className="border-t-0 border-x-0 border-b-2 border-slate-600 bg-transparent text-white rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-[#22c55e] shadow-none placeholder:text-gray-600" />
            </div>

            <div className="space-y-1">
              <label className="text-[13px] font-bold text-gray-400">İXTİSAS *</label>
              <Input required placeholder="Axtar..." className="border-t-0 border-x-0 border-b-2 border-slate-600 bg-transparent text-white rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-[#22c55e] shadow-none placeholder:text-gray-600" />
            </div>

            <div className="space-y-1">
              <label className="text-[13px] font-bold text-gray-400">BİTİRMƏ TARİXİ *</label>
              <div className="flex gap-4">
                 <select required className="flex-1 border-t-0 border-x-0 border-b-2 border-slate-600 bg-transparent text-gray-300 py-2 text-[14px] focus:outline-none focus:border-[#22c55e]">
                   <option value="">Ay</option>
                   <option>Yanvar</option><option>Fevral</option><option>Mart</option>
                   <option>Aprel</option><option>May</option><option>İyun</option>
                   <option>İyul</option><option>Avqust</option><option>Sentyabr</option>
                   <option>Oktyabr</option><option>Noyabr</option><option>Dekabr</option>
                 </select>
                 <select required className="flex-1 border-t-0 border-x-0 border-b-2 border-slate-600 bg-transparent text-gray-300 py-2 text-[14px] focus:outline-none focus:border-[#22c55e]">
                   <option value="">İl</option>
                   {[2024,2025,2026,2027,2028,2029,2030].map(y => <option key={y}>{y}</option>)}
                 </select>
              </div>
            </div>

            <div className="pt-12 pb-8 flex items-center justify-between mt-auto">
               <p className="text-[12px] text-gray-500 max-w-[250px]">Davam etməklə Sınaq-ın İstifadə Şərtləri və Məxfilik Siyasətini qəbul edirsiniz</p>
               <button 
                 type="submit" 
                 className="bg-[#22c55e] text-white font-bold text-[14px] px-8 py-3 rounded-lg hover:bg-[#16a34a] transition-colors shadow-[0_0_12px_rgba(34,197,94,0.3)]"
               >
                 Növbəti
               </button>
            </div>
          </form>

        </div>
      </main>
    </div>
  );
}
