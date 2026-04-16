import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      className="relative -mt-20 pt-[160px] md:pt-[180px] pb-[100px] text-center" 
      style={{ background: 'radial-gradient(circle at center, #10213d 0%, #081121 60%, #030812 100%)' }}
    >
      <div className="container mx-auto px-4 max-w-[900px] relative z-10 flex flex-col items-center">
        <h1 className="text-[60px] md:text-[100px] font-bold text-white leading-tight tracking-tight mb-2">
          Sınaq
        </h1>
        <h2 className="text-[28px] md:text-[45px] font-bold text-white leading-snug mb-6 tracking-tight drop-shadow-sm">
          Real iş. Real qiymət. Real bacarıq.
        </h2>
        <p className="text-[16px] md:text-[18px] font-normal text-gray-300 leading-relaxed max-w-[700px] mb-12 drop-shadow-sm">
          Azərbaycanda diplom kifayət deyil. İşəgötürənlər təcrübə tələb edir,
          lakin təcrübə qazanmaq üçün iş lazımdır. Bu qapalı dövrəni Sinaqla sindir.
        </p>
        
        <div className="relative group">
          <div className="absolute inset-0 bg-[#22c55e] opacity-40 blur-xl rounded-full group-hover:opacity-60 transition-opacity duration-500"></div>
          <Link 
            href="/login" 
            className="relative flex items-center justify-center gap-2 text-[18px] md:text-[20px] font-bold text-white bg-[#22c55e] rounded-full px-12 py-4 hover:bg-[#1fbd58] transition-all shadow-md"
          >
            İndi Başla <span className="font-normal">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
