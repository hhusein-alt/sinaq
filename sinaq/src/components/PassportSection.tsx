import Link from 'next/link';

const FEATURES = [
  {
    icon: (
      <svg className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    text: 'LinkedIn-də paylaş',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    text: 'İşəgötürənlər üçün doğrulama',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    text: '4 əsas meyar üzrə analitika',
  },
];

export default function PassportSection() {
  return (
    <section className="bg-[#0B1221] py-24 border-t border-slate-800/60">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* ── Left: Text ── */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-[#22c55e] text-xs font-bold tracking-[0.2em] uppercase mb-4">
                Səriştə Pasportu
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                Sənin Rəqəmsal{' '}
                <span className="text-[#22c55e]">Səriştə Pasportun</span>
              </h2>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              Simulyasiyaları bitir, real bacarıqlarını sübut et və QR-kodla paylaşılan beynəlxalq standartlı sertifikat qazan.
            </p>

            <ul className="flex flex-col gap-4">
              {FEATURES.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  {f.icon}
                  <span className="text-gray-200 text-base">{f.text}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 pt-2">
              <Link
                href="/simulations"
                className="inline-flex items-center gap-2 border border-white/30 text-white hover:border-white/60 hover:bg-white/5 font-semibold py-3 px-8 rounded-full transition-all text-base"
              >
                Nümunəni Gör →
              </Link>
            </div>
          </div>

          {/* ── Right: 3D Rotating Passport Video ── */}
          <div className="flex items-center justify-center">
            <div
              className="relative w-full max-w-md rounded-3xl overflow-hidden"
              style={{ boxShadow: '0 0 50px rgba(34,197,94,0.15), 0 0 120px rgba(34,197,94,0.05)' }}
            >
              <video
                src="/videos/passport-3d-rotate.mp4.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
