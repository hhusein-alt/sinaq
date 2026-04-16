import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#030812] border-t border-[#1e293b] w-full px-6 py-10 md:py-16 mt-auto">
      <div className="container mx-auto max-w-7xl">
        
        <div className="mb-8">
           <div className="text-[28px] font-bold text-white flex items-center gap-2 tracking-tight">
             <div className="relative flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8 2 4 5 4 10C4 16 10 17 12 22C14 17 20 16 20 10C20 5 16 2 12 2Z" fill="#22c55e" opacity="0.8"/>
                  <path d="M12 4C9 4 6 6 6 10C6 14.5 10.5 15.5 12 19.5C13.5 15.5 18 14.5 18 10C18 6 15 4 12 4Z" fill="#4ade80"/>
                </svg>
             </div>
             Sınaq
           </div>
        </div>
        
        <hr className="border-[#1e293b] mb-10" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          
          <div className="lg:col-span-1">
            <p className="text-[18px] font-medium text-gray-400 italic max-w-[200px] leading-snug">
              Motivasiyalı tələbələri möhtəşəm iş yerlərinə qəbul etdirmək missiyasındayıq.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-1">
            <h4 className="text-[14px] font-bold text-white mb-1">Tələbələr üçün</h4>
            <Link href="#" className="text-[14px] font-normal text-gray-400 hover:text-white">Qısa Kurslar</Link>
            <Link href="/simulations" className="text-[14px] font-normal text-gray-400 hover:text-white">Bütün İş Simulyasiyaları</Link>
            <Link href="#" className="text-[14px] font-normal text-gray-400 hover:text-white">Mühəndislik</Link>
            <Link href="#" className="text-[14px] font-normal text-gray-400 hover:text-white">Sahibkarlıq</Link>
            <Link href="#" className="text-[14px] font-normal text-gray-400 hover:text-white">Maliyyə & Bankinq</Link>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-1">
            <h4 className="text-[14px] font-bold text-white mb-1">Şirkətlər üçün</h4>
            <Link href="#" className="text-[14px] font-normal text-gray-400 hover:text-white">Daxil ol</Link>
            <Link href="#" className="text-[14px] font-normal text-gray-400 hover:text-white">Resurslar</Link>
            <Link href="#" className="text-[14px] font-normal text-gray-400 hover:text-white">Demo Tələb Et</Link>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-1">
            <h4 className="text-[14px] font-bold text-white mb-1">Universitetlər üçün</h4>
            <Link href="#" className="text-[14px] font-normal text-gray-400 hover:text-white">Daxil ol</Link>
            <Link href="#" className="text-[14px] font-normal text-gray-400 hover:text-white">Təlimatçılar</Link>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-1">
            <h4 className="text-[14px] font-bold text-white mb-1">Haqqımızda</h4>
            <Link href="#" className="text-[14px] font-normal text-gray-400 hover:text-white">Qaydalar</Link>
            <Link href="#" className="text-[14px] font-normal text-gray-400 hover:text-white">Karyera</Link>
            <Link href="#" className="text-[14px] font-normal text-gray-400 hover:text-white">Tez-tez Verilən Suallar</Link>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-1">
            <h4 className="text-[14px] font-bold text-white mb-1">Dəstək</h4>
            <Link href="#" className="text-[14px] font-normal text-gray-400 hover:text-white">Kömək Mərkəzi</Link>
            <Link href="#" className="text-[14px] font-normal text-gray-400 hover:text-white">Məxfilik Siyasəti</Link>
            <Link href="#" className="text-[14px] font-normal text-gray-400 hover:text-white">Şərtlər</Link>
          </div>
          
        </div>

        <hr className="border-[#1e293b] mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[14px] text-gray-500">
            © 2026 Sinaq, Inc. Bütün hüquqlar qorunur.
          </p>
        </div>

      </div>
    </footer>
  );
}
