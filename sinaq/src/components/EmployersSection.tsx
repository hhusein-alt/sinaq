'use client';
import Link from 'next/link';

const EMPLOYERS = [
  { id: 1, name: 'Kapital Bank', bgColor: 'bg-gradient-to-br from-[#d32f2f] to-[#7f0000]' },
  { id: 2, name: 'SOCAR', bgColor: 'bg-gradient-to-br from-[#2196f3] to-[#0d47a1]' },
  { id: 3, name: 'PASHA Bank', bgColor: 'bg-gradient-to-br from-[#5c6bc0] to-[#283593]' },
  { id: 4, name: 'Bravo', bgColor: 'bg-gradient-to-br from-[#2e7d32] to-[#1b5e20]' },
  { id: 5, name: 'Azercell', bgColor: 'bg-gradient-to-br from-[#c62828] to-[#880e4f]' },
  { id: 6, name: 'bp', bgColor: 'bg-gradient-to-br from-[#7e57c2] to-[#4527a0]' },
  { id: 7, name: 'ABB', bgColor: 'bg-gradient-to-br from-[#ab47bc] to-[#6a1b9a]' },
  { id: 8, name: 'Boss.az', bgColor: 'bg-gradient-to-br from-[#3f51b5] to-[#1a237e]' },
];

export default function EmployersSection() {
  return (
    <section className="bg-[#030812] py-16 md:py-24">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 tracking-tight">
          Rezumedən daha üstün olan yerli şirkətlər
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EMPLOYERS.map((employer) => (
            <div 
              key={employer.id} 
              className={`flex flex-col justify-between p-6 aspect-[3/4] rounded-2xl relative overflow-hidden shadow-lg transition-all hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] cursor-pointer ${employer.bgColor}`}
            >
              <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition-opacity z-0" />
               
              <div className="text-white text-2xl font-bold text-center flex-grow flex items-center justify-center drop-shadow-md z-10">
                {employer.name}
              </div>
              
              <Link 
                href="/simulations" 
                onClick={(e) => e.stopPropagation()}
                className="w-full border border-white/40 rounded-lg py-3 text-white text-sm font-semibold hover:bg-white/10 hover:border-white transition-colors z-10 text-center backdrop-blur-sm"
              >
                Proqramları Gör
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
