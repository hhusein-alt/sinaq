import Link from 'next/link';
import { HamburgerIcon } from './icons';

export default function Navbar() {
  return (
    <nav className="h-20 flex items-center justify-between px-6 md:px-12 relative z-50 bg-transparent text-white w-full">
      <div className="flex items-center">
        <Link href="/" className="hover:opacity-80 transition-opacity">
           <div className="text-[28px] font-bold text-white flex items-center gap-2 tracking-tight">
             <div className="relative flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8 2 4 5 4 10C4 16 10 17 12 22C14 17 20 16 20 10C20 5 16 2 12 2Z" fill="#22c55e" opacity="0.8"/>
                  <path d="M12 4C9 4 6 6 6 10C6 14.5 10.5 15.5 12 19.5C13.5 15.5 18 14.5 18 10C18 6 15 4 12 4Z" fill="#4ade80"/>
                </svg>
             </div>
             Sınaq
           </div>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8 shrink-0">
        <Link href="/simulations" className="text-[15px] font-medium text-gray-300 hover:text-white transition-colors">
          Simulyasiyalar
        </Link>
        <Link href="/jobs" className="text-[15px] font-medium text-gray-300 hover:text-white transition-colors">
          İşlər
        </Link>
        <Link href="#" className="text-[15px] font-medium text-gray-300 hover:text-white transition-colors">
          Bloq
        </Link>
        <Link href="#" className="text-[15px] font-medium text-gray-300 hover:text-white transition-colors">
          Şirkətlər üçün
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <Link 
          href="/login" 
          className="text-[14px] font-medium text-white rounded-full px-6 py-2 border border-blue-400/30 hover:bg-white/5 transition-all"
        >
          Qeydiyyat
        </Link>
        <Link 
          href="/login" 
          className="text-[14px] font-bold text-white bg-[#22c55e] rounded-full px-6 py-2 hover:bg-[#16a34a] transition-all relative group"
        >
          <div className="absolute inset-0 bg-[#22c55e] opacity-40 blur-md rounded-full group-hover:opacity-60 transition-opacity"></div>
          <span className="relative z-10">Daxil ol</span>
        </Link>
      </div>

      <button className="md:hidden text-white hover:opacity-80 focus:outline-none">
        <HamburgerIcon className="w-10 h-10" />
      </button>
    </nav>
  );
}
