"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

export default function OnboardingProfile() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#030812] flex flex-col font-sans">
      {/* Navbar area */}
      <header className="bg-[#0B1221] border-b border-slate-800 flex items-center justify-between px-8 py-4">
        <Link href="/" className="flex items-center gap-2">
          <svg className="w-5 h-5 text-[#22c55e]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20c9 0 10-8 10-8l-.5-.5A5.49 5.49 0 0 1 17 8z"/>
          </svg>
          <span className="text-xl font-bold text-white">Sınaq</span>
        </Link>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-[#22c55e]"></div>
          <div className="w-2 h-2 rounded-full bg-slate-700"></div>
          <div className="w-2 h-2 rounded-full bg-slate-700"></div>
          <div className="w-2 h-2 rounded-full bg-slate-700"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center max-w-[1000px] mx-auto w-full px-4 gap-16">
        
        {/* Left Illustration */}
        <div className="hidden md:flex flex-col items-center justify-center w-1/2">
           <div className="relative w-[300px] h-[300px]">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#111A2E] to-[#0d172e] rounded-2xl border border-slate-700 flex items-center justify-center p-8">
               <svg viewBox="0 0 100 100" className="w-full h-full text-[#22c55e] opacity-80" fill="currentColor">
                 <path d="M20 20h40v10H20zM20 40h60v10H20zM20 60h60v10H20z"/>
                 <circle cx="80" cy="80" r="15" fill="#22c55e" className="opacity-80"/>
                 <path d="M73 80l4 4 10-10" stroke="white" strokeWidth="3" fill="none"/>
               </svg>
             </div>
           </div>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 flex flex-col pt-8">
          <h1 className="text-3xl font-bold text-white mb-1">Profil</h1>
          <p className="text-[15px] text-gray-400 mb-8">Sizin haqqınızda bir neçə məlumatı təsdiqləməyimizə kömək edin</p>

          <form 
            onSubmit={(e) => { e.preventDefault(); router.push('/onboarding/education'); }} 
            className="space-y-6 flex-1 flex flex-col"
          >
            <div className="flex gap-4">
              <div className="flex-1 space-y-1">
                <label className="text-[13px] font-bold text-gray-400">AD *</label>
                <Input required className="border-t-0 border-x-0 border-b-2 border-slate-600 bg-transparent text-white rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-[#22c55e] shadow-none" />
              </div>
              <div className="flex-1 space-y-1">
                <label className="text-[13px] font-bold text-gray-400">SOYAD *</label>
                <Input required className="border-t-0 border-x-0 border-b-2 border-slate-600 bg-transparent text-white rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-[#22c55e] shadow-none" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[13px] font-bold text-gray-400">TELEFON NÖMRƏSİ *</label>
              <div className="flex gap-4">
                 <select className="w-24 border-t-0 border-x-0 border-b-2 border-slate-600 bg-transparent text-white py-2 text-[14px] focus:outline-none focus:border-[#22c55e]">
                   <option>🇦🇿 +994</option>
                 </select>
                 <Input required className="flex-1 border-t-0 border-x-0 border-b-2 border-slate-600 bg-transparent text-white rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-[#22c55e] shadow-none" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[13px] font-bold text-gray-400">CİNSİYYƏT (İSTƏYƏ BAĞLI)</label>
              <div className="flex gap-4">
                 <select className="flex-1 border-t-0 border-x-0 border-b-2 border-slate-600 bg-transparent text-gray-400 py-2 text-[14px] focus:outline-none focus:border-[#22c55e]">
                   <option>Seçin...</option>
                   <option>Kişi</option>
                   <option>Qadın</option>
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
