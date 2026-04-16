import { ArrowRightIcon } from './icons';

export default function StatsSection() {
  return (
    <section className="bg-[#144C8B] w-full px-4 md:px-10 py-12 lg:py-20 text-white text-center">
      <div className="container mx-auto max-w-7xl flex flex-col items-center">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 w-full mb-12">
          
          <div className="flex flex-col items-center gap-3">
            <div className="text-[40px] md:text-[46px] lg:text-[52px] font-semibold leading-[1.1] text-accent">
              3.3x more likely
            </div>
            <p className="text-[16px] md:text-[18px] font-normal text-white/80 leading-[1.4] max-w-[280px]">
              to land a job after participating in a job simulation
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="text-[40px] md:text-[46px] lg:text-[52px] font-semibold leading-[1.1] text-accent">
              Over 300 job simulations and 125+ employers
            </div>
            <p className="text-[16px] md:text-[18px] font-normal text-white/80 leading-[1.4] max-w-[280px]">
              across diverse industries and careers
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="text-[40px] md:text-[46px] lg:text-[52px] font-semibold leading-[1.1] text-accent">
              5M+ students
            </div>
            <p className="text-[16px] md:text-[18px] font-normal text-white/80 leading-[1.4] max-w-[280px]">
              have signed up to Forage
            </p>
          </div>

        </div>

        <button className="bg-white text-[#144C8B] rounded-full px-8 py-4 text-[18px] md:text-[20px] font-semibold inline-flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
          Find a Job Simulation <ArrowRightIcon className="w-5 h-5" />
        </button>

      </div>
    </section>
  );
}
