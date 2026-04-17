import Link from "next/link";
import Footer from "@/components/Footer";
import UserDropdown from "@/components/UserDropdown";

const JOBS = [
  {
    id: 1,
    company: "PASHA Bank",
    companyColor: "text-[#5c6bc0]",
    title: "PASHA Bank Açıq Qapı Günü – 29 Aprel",
    description: "PASHA Bank-da karyera imkanları ilə yaxından tanış olun.",
    location: "Bakı, Azərbaycan",
    deadline: "29 Aprel tarixində",
    badges: [
      { text: "YAXINDA", type: "outline-green" },
      { text: "TƏDBİR", type: "filled-purple" }
    ]
  },
  {
    id: 2,
    company: "SOCAR",
    companyColor: "text-[#2196f3]",
    title: "Yay Təcrübə Proqramı 2026",
    description: "Gənc mühəndislər və biznes analitikləri üçün ödənişli təcrübə proqramı.",
    location: "Bakı, Azərbaycan",
    deadline: "Son müraciət: 5 İyun",
    badges: [
      { text: "TƏCRÜBƏ", type: "filled-teal" }
    ]
  },
  {
    id: 3,
    company: "Kapital Bank",
    companyColor: "text-[#d32f2f]",
    title: "Kiçik Kredit Mütəxəssisi",
    description: "Sınaq simulyasiyasını uğurla bitirənlər üçün birbaşa müsahibə imkanı.",
    location: "Bakı, Azərbaycan",
    deadline: "Son müraciət: 15 May",
    badges: [
      { text: "VAKANSİYA", type: "filled-blue" }
    ]
  },
  {
    id: 4,
    company: "Azercell",
    companyColor: "text-[#ab47bc]",
    title: "Rəqəmsal Marketinq Təcrübəçisi",
    description: "Azercell-in rəqəmsal komandasına qoşulun və real layihələrdə iştirak edin.",
    location: "Bakı, Azərbaycan",
    deadline: "Son müraciət: 30 Aprel",
    badges: [
      { text: "TƏCRÜBƏ", type: "filled-teal" }
    ]
  }
];

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-[#030812] font-sans flex flex-col">
      {/* Dashboard-style Navbar */}
      <header className="bg-[#0B1221] border-b border-slate-800 sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#22c55e]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20c9 0 10-8 10-8l-.5-.5A5.49 5.49 0 0 1 17 8z"/>
              </svg>
              <span className="text-xl font-bold text-white">Sınaq</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              <Link href="/dashboard" className="text-sm font-medium text-gray-400 hover:text-white px-4 h-16 flex items-center transition-colors">
                İdarə paneli
              </Link>
              <Link href="/simulations" className="text-sm font-medium text-gray-400 hover:text-white px-4 h-16 flex items-center transition-colors">
                Simulyasiyalar
              </Link>
              <Link href="/jobs" className="text-sm font-semibold text-white border-b-2 border-[#22c55e] px-4 h-16 flex items-center">
                İşlər
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <UserDropdown />
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-10 max-w-6xl">
        {/* Header section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4 mt-8">
            Təcrübə, İlkin karyera və Vakansiyalar
          </h1>
          <p className="text-gray-400 text-base max-w-3xl mb-8 leading-relaxed">
            Sınaq-da universitet tələbələri və gənc mütəxəssislər üçün xüsusi olaraq hazırlanmış təcrübə proqramlarını, məzunlar üçün vakansiyaları və aparıcı şirkətlərin eksklüziv tədbirlərini kəşf edin.
          </p>

          {/* Quick Filter Pills */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <button className="bg-[#3b82f6] text-white px-5 py-2 rounded text-sm font-medium transition-colors">
              Hamısı
            </button>
            <button className="flex items-center gap-2 bg-[#111A2E] text-gray-300 border border-slate-700 hover:bg-slate-800 transition-colors px-4 py-2 rounded text-sm font-medium">
              ★ Tövsiyə edilən
            </button>
            <button className="flex items-center gap-2 bg-[#111A2E] text-gray-300 border border-slate-700 hover:bg-slate-800 transition-colors px-4 py-2 rounded text-sm font-medium">
              🔖 Yadda saxlanılanlar
            </button>
            <button className="flex items-center gap-2 bg-[#111A2E] text-gray-300 border border-slate-700 hover:bg-slate-800 transition-colors px-4 py-2 rounded text-sm font-medium">
              ✓ Müraciət edilənlər
            </button>
          </div>

          {/* Dropdown Filters */}
          <div className="flex flex-wrap gap-3 pb-6 border-b border-slate-800">
            {['Fürsət növü: Hamısı', 'Şəhər: Hamısı', 'Şirkət: Hamısı', 'Rol: Hamısı', 'İxtisas: Hamısı'].map((filter) => (
              <button key={filter} className="flex items-center gap-2 border border-slate-700 rounded-full px-4 py-2 text-sm text-gray-400 bg-[#0B1221] hover:bg-slate-800 transition-colors">
                {filter}
                <svg className="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-8 mb-4">142 Fürsətdən 1-5 göstərilir</p>
        </div>

        {/* Content columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
          
          {/* Jobs List — 2/3 width */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {JOBS.map((job) => (
              <div key={job.id} className="bg-[#111A2E] border border-slate-700 rounded-xl p-6 mb-1 hover:border-slate-500 transition-colors cursor-pointer group">
                <div className="flex items-start justify-between mb-3">
                  <span className={`${job.companyColor} font-bold text-xs uppercase tracking-wider`}>
                    {job.company}
                  </span>
                  <div className="flex gap-2">
                    {job.badges.map((badge, idx) => (
                      <span key={idx} className={`text-[10px] font-bold px-3 py-1 rounded ${
                        badge.type === 'outline-green' ? 'border border-[#22c55e] text-[#22c55e]' :
                        badge.type === 'filled-purple' ? 'bg-purple-600 text-white' :
                        badge.type === 'filled-teal' ? 'bg-teal-600/80 text-white' :
                        badge.type === 'filled-blue' ? 'bg-blue-600 text-white' : ''
                      }`}>
                        {badge.text}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mt-2 mb-2 group-hover:text-[#22c55e] transition-colors">
                  {job.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{job.description}</p>

                <div className="flex items-center gap-6 text-xs text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {job.deadline}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar — 1/3 width */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-[#151f32] to-[#0d172e] border border-slate-700 rounded-xl p-6 shadow-lg sticky top-6">
              <h3 className="text-2xl font-bold text-white mb-6 leading-tight">
                İşə qəbul şansınızı 3 dəfə artırın
              </h3>

              <div className="flex items-start gap-3 text-gray-300 text-sm mb-5">
                <CheckIcon />
                <span>Real iş təcrübəsi qazanın</span>
              </div>

              <div className="flex items-start gap-3 text-gray-300 text-sm mb-5">
                <CheckIcon />
                <span>İşəgötürənlərin axtardığı bacarıqları inkişaf etdirin</span>
              </div>

              <div className="flex items-start gap-3 text-gray-300 text-sm">
                <CheckIcon />
                <span>Digər namizədlərdən fərqlənin</span>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700/50">
                <Link
                  href="/simulations"
                  className="block w-full bg-[#22c55e] hover:bg-[#1ea34d] text-white text-sm font-semibold py-3 rounded-lg text-center transition-colors shadow-[0_0_12px_rgba(34,197,94,0.3)]"
                >
                  Simulyasiyaları kəşf et →
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
