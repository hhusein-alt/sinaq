import Link from 'next/link';

export default function CombinedInfoSection() {
  return (
    <>
      {/* Top Section ("How it Works") */}
      <section className="bg-[#0B1221] py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Left Column (Text) */}
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

            {/* Right Column (Steps) */}
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#22c55e] text-white flex items-center justify-center font-bold text-sm mt-1">
                  1
                </div>
                <p className="text-lg text-white">
                  Sınaq-dan qeydiyyatdan keçin və bizə özünüz barədə qısa məlumat verin.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#22c55e] text-white flex items-center justify-center font-bold text-sm mt-1">
                  2
                </div>
                <p className="text-lg text-white">
                  Real işi təkrarlayan 10 dəqiqəlik simulyasiyaya qoşulun və tapşırığı yerinə yetirin.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#22c55e] text-white flex items-center justify-center font-bold text-sm mt-1">
                  3
                </div>
                <p className="text-lg text-white">
                  Süni İntellekt tərəfindən anında qiymətləndirilin və Boss.az profiliniz üçün təsdiqlənmiş bacarıq pasportu qazanın.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Section ("Statistics/Features Block") */}
      <section className="bg-gradient-to-r from-[#0d172e] to-[#111A2E] border-y border-slate-800 py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            <div>
              <h3 className="text-5xl font-bold text-[#22c55e] mb-4">
                10 Dəqiqə
              </h3>
              <p className="text-lg text-gray-300">
                bir simulyasiyanı bitirmək və bacarığını sübut etmək üçün
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#22c55e] mb-4">
                100% Yerli
              </h3>
              <p className="text-lg text-gray-300">
                ƏDV, Mərkəzi Bankın normaları və yerli şirkət konteksti
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#22c55e] mb-4">
                Süni İntellekt
              </h3>
              <p className="text-lg text-gray-300">
                tərəfindən saniyələr içində 4 fərqli meyar üzrə dəqiq qiymətləndirmə
              </p>
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
