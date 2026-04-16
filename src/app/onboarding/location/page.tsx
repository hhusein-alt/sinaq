"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

export default function OnboardingLocation() {
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
          <div className="w-2 h-2 rounded-full bg-slate-700"></div>
          <div className="w-2 h-2 rounded-full bg-slate-700"></div>
          <div className="w-2 h-2 rounded-full bg-[#22c55e]"></div>
          <div className="w-2 h-2 rounded-full bg-slate-700"></div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center max-w-[1000px] mx-auto w-full px-4 gap-16">
        
        {/* Left Illustration */}
        <div className="hidden md:flex flex-col items-center justify-center w-1/2">
           <div className="relative w-[300px] h-[300px]">
             {/* Location Illustration Placeholder */}
             <div className="absolute inset-0 bg-gradient-to-tr from-[#111A2E] to-[#0d172e] rounded-2xl border border-slate-700 flex items-center justify-center p-8">
               <svg viewBox="0 0 100 100" className="w-3/4 h-3/4" fill="none">
                 <circle cx="50" cy="50" r="40" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeWidth="2" strokeDasharray="4 4" />
                 <path d="M50 20c-11 0-20 9-20 20 0 15 20 40 20 40s20-25 20-40c0-11-9-20-20-20zm0 30c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z" fill="#22c55e"/>
               </svg>
             </div>
           </div>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 flex flex-col pt-8">
          <h1 className="text-3xl font-bold text-white mb-1">Məkan və Karyera</h1>
          <p className="text-[15px] text-[#22c55e] mb-8 font-medium">
            Sizin üçün uyğun vakansiyaları tapmaq üçün məkanınızı və seçimlərinizi qeyd edin.
          </p>

          <form 
            onSubmit={(e) => { e.preventDefault(); router.push('/dashboard'); }} 
            className="space-y-8 flex-1 flex flex-col"
          >
            <div className="space-y-1">
              <label className="text-[13px] font-bold text-gray-400">HARADA YAŞAYIRSINIZ? *</label>
              <Input required placeholder="Şəhər axtar..." className="border-t-0 border-x-0 border-b-2 border-slate-600 bg-transparent text-white rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-[#22c55e] shadow-none placeholder:text-gray-600" />
            </div>

            <div className="space-y-1">
              <label className="text-[13px] font-bold text-gray-400">HANSİ ROLLAR SİZİN ÜÇÜN MARAQLIDIR?</label>
              <select className="w-full border-t-0 border-x-0 border-b-2 border-slate-600 bg-transparent py-2 text-[14px] text-gray-300 focus:outline-none focus:border-[#22c55e]">
                <option value="">Rollar seçin...</option>
                <option value="software">Proqram Təminatı</option>
                <option value="marketing">Marketinq</option>
                <option value="data">Məlumat Analitikası</option>
                <option value="bank">Bank işi</option>
              </select>
            </div>

            <div className="pt-12 pb-8 flex items-center justify-between mt-auto">
               <button 
                 type="button"
                 onClick={() => router.push('/dashboard')}
                 className="text-[#3b82f6] font-bold text-[14px] hover:underline"
               >
                 Ötür
               </button>
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
