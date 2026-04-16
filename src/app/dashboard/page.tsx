import Link from "next/link";
import UserDropdown from "@/components/UserDropdown";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#030812] font-sans">

      {/* Top Navigation Bar */}
      <header className="bg-[#0B1221] border-b border-slate-800 py-4 px-8 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#22c55e]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20c9 0 10-8 10-8l-.5-.5A5.49 5.49 0 0 1 17 8z"/>
              </svg>
              <span className="text-xl font-bold text-white">Sınaq</span>
            </Link>

            {/* Center: Nav Links */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/dashboard" className="text-sm font-semibold text-white border-b-2 border-[#22c55e] pb-1 transition-colors">
                Deşbord
              </Link>
              <Link href="/simulations" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                Simulyasiyalar
              </Link>
              <Link href="/jobs" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                İşlər
              </Link>
            </nav>
          </div>

          {/* Right: Avatar */}
          <UserDropdown />
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-16">
        {/* Page Header */}
        <h1 className="text-3xl font-bold text-white mt-8 mb-6 px-4 md:px-8 max-w-7xl mx-auto">
          Salam, Tələbə!
        </h1>

        {/* Top Stats Row — 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-8 max-w-7xl mx-auto mb-6">

          {/* Card 1 — Profile */}
          <div className="bg-[#111A2E] border border-slate-700 rounded-xl p-5 flex flex-col justify-between">
            <div className="flex gap-1 mb-1">
              <div className="h-2 flex-1 rounded-l-full bg-red-500"></div>
              <div className="h-2 flex-1 bg-red-500"></div>
              <div className="h-2 flex-1 bg-slate-600"></div>
              <div className="h-2 flex-1 bg-slate-600"></div>
              <div className="h-2 flex-1 rounded-r-full bg-slate-600"></div>
            </div>
            <h3 className="font-bold text-white mt-3">Profil natamamdır</h3>
            <p className="text-xs text-gray-400 mt-1 mb-3 leading-relaxed">
              Şirkətlərin sizi görməsi üçün profilinizi tamamlayın.
            </p>
            <Link href="/profile/edit" className="text-[#22c55e] text-xs font-bold self-end hover:underline cursor-pointer">
              Profili Yenilə &gt;
            </Link>
          </div>

          {/* Card 2 — Job Matches 1 */}
          <div className="bg-[#111A2E] border border-slate-700 rounded-xl p-5 flex flex-col justify-between cursor-pointer hover:border-slate-500 transition-colors">
            <h3 className="font-bold text-white">2 Uyğun Vakansiya</h3>
            <p className="text-red-500 font-bold text-xs mt-2">Kapital Bank</p>
            <p className="text-xs text-gray-400 mt-2 mb-3 leading-relaxed">
              Şansınızı qaçırmamaq üçün onlara nəzər yetirin.
            </p>
            <Link href="/jobs" className="text-[#3b82f6] text-xs font-bold self-end hover:underline cursor-pointer">
              Vakansiyalara Bax &gt;
            </Link>
          </div>

          {/* Card 3 — Job Matches 2 */}
          <div className="bg-[#111A2E] border border-slate-700 rounded-xl p-5 flex flex-col justify-between cursor-pointer hover:border-slate-500 transition-colors">
            <h3 className="font-bold text-white">1 Uyğun Vakansiya</h3>
            <p className="text-blue-500 font-bold text-xs mt-2">SOCAR</p>
            <p className="text-xs text-gray-400 mt-2 mb-3 leading-relaxed">
              Şansınızı qaçırmamaq üçün nəzər yetirin.
            </p>
            <Link href="/jobs" className="text-[#3b82f6] text-xs font-bold self-end hover:underline cursor-pointer">
              Vakansiyalara Bax &gt;
            </Link>
          </div>

          {/* Card 4 — Skill Score */}
          <div className="bg-[#111A2E] border border-slate-700 rounded-xl p-5 flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-white">Bacarıq Səviyyəniz: Başlanğıc</h3>
            </div>
            <div className="text-2xl mt-2">🪙</div>
            <p className="text-xs text-gray-400 mt-2 mb-3 leading-relaxed">
              Simulyasiyaları tamamlayaraq xallarınızı artırın və işəgötürənlərin diqqətini çəkin.
            </p>
            <span className="text-[#3b82f6] text-xs font-bold self-end hover:underline cursor-pointer">
              Necə? &gt;
            </span>
          </div>

        </div>

        {/* Middle Empty States Row — 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-8 max-w-7xl mx-auto mb-8">

          {/* Card 1 — Active Simulations */}
          <div className="bg-[#111A2E] border border-slate-700 rounded-xl overflow-hidden">
            <div className="border-t-2 border-[#3b82f6] px-5 pt-4 pb-3">
              <p className="text-[#3b82f6] font-bold text-sm mb-4">📘 Aktiv Simulyasiyalar</p>
              <div className="flex items-center gap-6 py-4">
                <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center text-blue-300 text-3xl flex-shrink-0">
                  📋
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Hələ ki heç nə yoxdur...</h4>
                  <p className="text-sm text-gray-400 max-w-xs leading-relaxed mb-3">
                    Bir simulyasiyaya qoşulduğunuzda burada görünəcək. İşəgötürənlərin realda necə işlədiyini kəşf edin!
                  </p>
                  <Link href="/simulations" className="text-[#3b82f6] text-sm font-bold hover:underline">
                    Simulyasiya Tap &gt;
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 — Achievements */}
          <div className="bg-[#111A2E] border border-slate-700 rounded-xl overflow-hidden">
            <div className="border-t-2 border-[#22c55e] px-5 pt-4 pb-3">
              <p className="text-[#22c55e] font-bold text-sm mb-4">🏆 Nailiyyətlər</p>
              <div className="flex items-center gap-6 py-4">
                <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center text-green-300 text-3xl flex-shrink-0">
                  🧩
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Karyeranıza başlayın</h4>
                  <p className="text-sm text-gray-400 max-w-xs leading-relaxed mb-3">
                    Simulyasiyaları tamamlayın və sertifikatlarınızı açmaq üçün profilinizi doldurun.
                  </p>
                  <Link href="/simulations" className="text-[#3b82f6] text-sm font-bold hover:underline">
                    Bütün Nailiyyətlərə Bax &gt;
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 md:px-8 max-w-7xl mx-auto mb-12">

          {/* Left: Recommended Simulations (2 cols) */}
          <div className="lg:col-span-2">
            <p className="text-gray-400 font-bold text-sm mb-3">🔥 Tövsiyə Edilən Simulyasiyalar</p>

            {/* Sim Item 1 */}
            <div className="bg-[#111A2E] border border-slate-700 rounded-lg p-4 flex justify-between items-center mb-3 hover:border-slate-500 transition-colors cursor-pointer group">
              <div>
                <p className="text-purple-500 text-xs font-bold mb-1">PASHA Bank</p>
                <h4 className="text-white font-bold group-hover:text-[#22c55e] transition-colors">Risklərin İdarə Edilməsi</h4>
                <p className="text-gray-400 text-xs mt-1">Bank işi • Başlanğıc • 15 dəq</p>
              </div>
              <Link href="/simulations" className="text-[#3b82f6] text-sm font-bold hover:underline flex-shrink-0 ml-4">
                Kəşf Et &gt;
              </Link>
            </div>

            {/* Sim Item 2 */}
            <div className="bg-[#111A2E] border border-slate-700 rounded-lg p-4 flex justify-between items-center mb-3 hover:border-slate-500 transition-colors cursor-pointer group">
              <div>
                <p className="text-purple-400 text-xs font-bold mb-1">Azercell</p>
                <h4 className="text-white font-bold group-hover:text-[#22c55e] transition-colors">Rəqəmsal Məhsul Meneceri</h4>
                <p className="text-gray-400 text-xs mt-1">Texnologiya • Orta • 10 dəq</p>
              </div>
              <Link href="/simulations" className="text-[#3b82f6] text-sm font-bold hover:underline flex-shrink-0 ml-4">
                Kəşf Et &gt;
              </Link>
            </div>
          </div>

          {/* Right: Matching Jobs (1 col) */}
          <div className="lg:col-span-1">
            <div className="bg-[#111A2E] border border-slate-700 rounded-xl p-5">
              <p className="text-[#3b82f6] font-bold text-sm mb-4">💼 Uyğun Vakansiyalar</p>

              {/* Job 1 */}
              <div className="border-b border-slate-700 pb-4 mb-4 cursor-pointer hover:opacity-80 transition-opacity">
                <h4 className="text-white font-bold text-sm">2026 Yay Təcrübə Proqramı</h4>
                <p className="text-gray-400 text-xs mt-1">Kapital Bank • Bakı</p>
                <Link href="/jobs" className="text-[#3b82f6] text-xs mt-1 block hover:underline">
                  Vakansiyaya Bax
                </Link>
              </div>

              {/* Job 2 */}
              <div className="cursor-pointer hover:opacity-80 transition-opacity">
                <h4 className="text-white font-bold text-sm">Kiçik Təchizat Mütəxəssisi</h4>
                <p className="text-gray-400 text-xs mt-1">SOCAR • Bakı</p>
                <Link href="/jobs" className="text-[#3b82f6] text-xs mt-1 block hover:underline">
                  Vakansiyaya Bax
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Centered Link */}
          <div className="col-span-full text-center mt-2">
            <Link href="/simulations" className="text-gray-500 text-sm hover:text-white cursor-pointer transition-colors">
              Axtardığınızı tapa bilmədiniz? Hamısına bax &gt;
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
