'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HamburgerIcon } from './icons';

const NAV_LINKS = [
  { href: '/simulations', label: 'Simulyasiyalar' },
  { href: '/jobs',        label: 'İşlər' },
  { href: '#',            label: 'Bloq' },
  { href: '#',            label: 'Şirkətlər üçün' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="h-20 flex items-center justify-between px-4 md:px-12 relative z-50 bg-transparent text-white w-full">
        {/* Logo */}
        <Link href="/" className="hover:opacity-80 transition-opacity" onClick={() => setOpen(false)}>
          <div className="text-[22px] md:text-[28px] font-bold text-white flex items-center gap-2 tracking-tight">
            <div className="relative flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8 2 4 5 4 10C4 16 10 17 12 22C14 17 20 16 20 10C20 5 16 2 12 2Z" fill="#22c55e" opacity="0.8"/>
                <path d="M12 4C9 4 6 6 6 10C6 14.5 10.5 15.5 12 19.5C13.5 15.5 18 14.5 18 10C18 6 15 4 12 4Z" fill="#4ade80"/>
              </svg>
            </div>
            Sınaq
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8 shrink-0">
          {NAV_LINKS.map((l) => (
            <Link key={l.href + l.label} href={l.href} className="text-[15px] font-medium text-gray-300 hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop auth buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-[14px] font-medium text-white rounded-full px-6 py-2 border border-blue-400/30 hover:bg-white/5 transition-all">
            Qeydiyyat
          </Link>
          <Link href="/login" className="text-[14px] font-bold text-white bg-[#22c55e] rounded-full px-6 py-2 hover:bg-[#16a34a] transition-all relative group">
            <div className="absolute inset-0 bg-[#22c55e] opacity-40 blur-md rounded-full group-hover:opacity-60 transition-opacity" />
            <span className="relative z-10">Daxil ol</span>
          </Link>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden text-white p-2 -mr-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22c55e] rounded"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Menyunu bağla' : 'Menyunu aç'}
          aria-expanded={open}
        >
          {open ? (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <HamburgerIcon className="w-7 h-7" />
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#030812]/97 backdrop-blur-md flex flex-col pt-24 px-6 pb-10 overflow-y-auto">
          <nav className="flex flex-col gap-1 flex-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href + l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[22px] font-semibold text-gray-200 hover:text-white py-4 border-b border-slate-800/60 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 mt-8">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="w-full text-center text-[16px] font-medium text-white rounded-full py-4 border border-white/20 hover:bg-white/5 transition-all"
            >
              Qeydiyyat
            </Link>
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="w-full text-center text-[16px] font-bold text-white bg-[#22c55e] rounded-full py-4 hover:bg-[#16a34a] transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            >
              Daxil ol
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
