import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import KapitalBankCard from '@/components/KapitalBankCard';
import SOCARCard from '@/components/SOCARCard';

const SIMULATIONS = [
  {
    id: 1,
    slug: 'kapital-bank-credit-analyst',
    company: 'Kapital Bank',
    title: 'Kiçik Kredit Analitiki',
    category: 'Bank işi',
    duration: '10 dəqiqə',
    level: 'Başlanğıc'
  },
  {
    id: 2,
    slug: 'socar-procurement',
    company: 'SOCAR',
    title: 'Təchizat üzrə Mütəxəssis',
    category: 'Energetika',
    duration: '10 dəqiqə',
    level: 'Orta'
  },
  {
    id: 3,
    slug: 'azercell-product-manager',
    company: 'Azercell',
    title: 'Rəqəmsal Məhsul Meneceri',
    category: 'Texnologiya',
    duration: '10 dəqiqə',
    level: 'Orta'
  },
  {
    id: 4,
    slug: 'pasha-bank-risk',
    company: 'PASHA Bank',
    title: 'Risklərin İdarə Edilməsi',
    category: 'Bank işi',
    duration: '15 dəqiqə',
    level: 'Başlanğıc',
    badge: 'YENİ'
  },
  {
    id: 5,
    company: 'Bravo',
    title: 'Marketinq Tədqiqatçısı',
    category: 'Marketinq',
    duration: '10 dəqiqə',
    level: 'Başlanğıc'
  },
  {
    id: 6,
    company: 'bp',
    title: 'Əməyin Təhlükəsizliyi (HSE)',
    category: 'Energetika',
    duration: '10 dəqiqə',
    level: 'Orta'
  },
  {
    id: 7,
    company: 'ABB',
    title: 'Pərakəndə Bankçılıq',
    category: 'Bank işi',
    duration: '10 dəqiqə',
    level: 'Başlanğıc'
  },
  {
    id: 8,
    company: 'Gilan Holding',
    title: 'İR üzrə Köməkçi',
    category: 'İnsan Resursları',
    duration: '10 dəqiqə',
    level: 'Başlanğıc'
  },
  {
    id: 9,
    company: 'Azersun',
    title: 'Təchizat Zənciri',
    category: 'Logistika',
    duration: '15 dəqiqə',
    level: 'Orta'
  },
  {
    id: 10,
    company: 'Boss.az',
    title: 'Məlumat Analitiki',
    category: 'Data',
    duration: '15 dəqiqə',
    level: 'Orta',
    badge: 'AKTİV'
  },
  {
    id: 11,
    company: 'Hellojob.az',
    title: 'PR və Kommunikasiya',
    category: 'Marketinq',
    duration: '10 dəqiqə',
    level: 'Orta'
  },
  {
    id: 12,
    company: 'Kapital Bank',
    title: 'Korporativ Satış',
    category: 'Bank işi',
    duration: '10 dəqiqə',
    level: 'Orta'
  }
];

export default function SimulationsPage() {
  return (
    <div className="min-h-screen bg-[#030812] flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 flex flex-col container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Header Section */}
        <section className="pt-12 pb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Sınaq İş Simulyasiyaları
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl">
            Bacarıqlarınızı inkişaf etdirmək və rekruterlərin diqqətini cəlb etmək üçün mükəmməl iş simulyasiyasını tapın.
          </p>

          {/* Quick Filters */}
          <div className="mb-6">
            <h3 className="text-xs font-bold text-[#22c55e] tracking-widest uppercase mb-4">Sürətli FİLTRLƏR</h3>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#3b82f6] text-white px-5 py-2 rounded-md text-sm font-medium transition-colors">
                Hamısı
              </button>
              <button className="bg-transparent border border-slate-700 text-gray-300 hover:bg-slate-800 transition-colors px-4 py-2 rounded-md text-sm font-medium">
                Yeni
              </button>
              <button className="bg-transparent border border-slate-700 text-gray-300 hover:bg-slate-800 transition-colors px-4 py-2 rounded-md text-sm font-medium">
                10 Dəqiqəlik
              </button>
              <button className="bg-transparent border border-slate-700 text-gray-300 hover:bg-slate-800 transition-colors px-4 py-2 rounded-md text-sm font-medium">
                Aktiv Vakansiyalar
              </button>
            </div>
          </div>

          {/* Dropdown Filters */}
          <div className="flex flex-wrap gap-4 pb-6 border-b border-slate-800">
            {['Sənaye: Hamısı', 'Karyera Marağı: Hamısı', 'Şirkət: Hamısı', 'Müddət: Hamısı'].map((filter) => (
              <button key={filter} className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-sm text-gray-300 hover:bg-slate-800 transition-colors">
                {filter}
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            ))}
          </div>
        </section>

        {/* Results Info */}
        <div className="pb-6">
          <p className="text-sm text-gray-400">
            50+ İş Simulyasiyasından 1-12 göstərilir
          </p>
        </div>

        {/* Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-16">
          {SIMULATIONS.map((sim) => {
            if (sim.id === 1 && sim.slug) {
              return (
                <KapitalBankCard
                  key={sim.id}
                  slug={sim.slug}
                  company={sim.company}
                  title={sim.title}
                  category={sim.category}
                  duration={sim.duration}
                  level={sim.level}
                />
              );
            }

            if (sim.id === 2 && sim.slug) {
              return (
                <SOCARCard
                  key={sim.id}
                  slug={sim.slug}
                  company={sim.company}
                  title={sim.title}
                  category={sim.category}
                  duration={sim.duration}
                  level={sim.level}
                />
              );
            }

            return (
              <Link
                key={sim.id}
                href={sim.slug ? `/simulation/${sim.slug}` : '#'}
                className="bg-gradient-to-b from-[#1A2642] to-[#111A2E] rounded-xl overflow-hidden border border-slate-800 hover:border-slate-500 hover:shadow-lg hover:shadow-blue-900/20 transition-all cursor-pointer flex flex-col p-6 min-h-[300px] relative text-center group"
              >
                {sim.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-purple-600/20 text-purple-400 text-[10px] font-bold px-2 py-1 rounded tracking-wide">
                      {sim.badge}
                    </span>
                  </div>
                )}

                <div className="h-16 w-full opacity-20 bg-gradient-to-br from-transparent to-white/5 absolute top-0 left-0" />

                {sim.slug && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-teal-600/20 text-teal-400 text-[9px] font-bold px-2 py-0.5 rounded tracking-wide border border-teal-800/40">
                      AKTİV
                    </span>
                  </div>
                )}

                <div className="flex-grow flex flex-col items-center justify-center relative z-10 mt-4">
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-3">{sim.company}</span>
                  <h3 className="text-xl font-bold text-white leading-tight mb-4 group-hover:text-[#22c55e] transition-colors">{sim.title}</h3>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-700/50 relative z-10">
                  <p className="text-xs text-gray-400 font-medium tracking-wide">
                    {sim.category} • {sim.level} • {sim.duration}
                  </p>
                </div>
              </Link>
            );
          })}
        </section>

        {/* Bottom Information Cards */}
        <section className="flex flex-col gap-8 pb-20 max-w-5xl mx-auto w-full">
          <div className="bg-[#151f32] border border-slate-700/50 rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Sınaq İş Simulyasiyası Nədir?</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Sınaq – təhsil ilə real iş mühiti arasındakı fərqi aradan qaldıran platformadır.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300 leading-relaxed">10 dəqiqə ərzində aparıcı yerli şirkətlərin (Kapital Bank, SOCAR və s.) real iş tapşırıqlarını həll edin.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300 leading-relaxed">Süni intellekt tərəfindən yerli qanunvericilik (məs: 18% ƏDV) və korporativ qaydalar əsasında anında qiymətləndirmə alın.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300 leading-relaxed">Sınaq pasportu qazanın və Boss.az/Hellojob.az profillərinizə birbaşa əlavə edərək fərqlənin.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#151f32] border border-slate-700/50 rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Süni İntellekt Qiymətləndirməsi Necə İşləyir?</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Bizim LLM modelimiz Bakının əmək bazarını anlayır.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#3b82f6] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-gray-300 leading-relaxed">Siz tapşırığı təhvil verdikdən dərhal sonra AI cavabınızı 4 meyar üzrə (Analitik yanaşma, Yerli kontekst, Kommunikasiya, Risk) analiz edir.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#3b82f6] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-gray-300 leading-relaxed">10 saniyə ərzində sizə 3 güclü tərəfiniz, 3 inkişaf etdirilməli sahə və spesifik karyera məsləhəti verilir.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
