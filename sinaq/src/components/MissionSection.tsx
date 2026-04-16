export default function MissionSection() {
  return (
    <section className="bg-[#E8F0FB] mx-4 md:mx-10 my-10 md:my-16 rounded-[24px] overflow-hidden">
      <div className="container mx-auto px-6 py-12 md:p-16 max-w-7xl flex flex-col md:flex-row items-center gap-10">
        
        <div className="md:w-1/2 flex flex-col gap-6">
          <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-semibold text-[#114178] leading-[1.2] tracking-tight">
            We want to build a world where candidates are considered equally on their merits.
          </h2>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal text-[#3F3F3F] leading-[1.5]">
            We're here to ensure that your skills, grit, and drive are recognized by the world's best companies — regardless of your GPA, school, or connections.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center items-center">
          {/* Fallback abstract globe/logo illustration */}
          <div className="w-64 h-64 md:w-80 md:h-80 relative">
            <div className="absolute inset-0 border-[16px] border-[#1C6AC3] rounded-full opacity-20"></div>
            <div className="absolute inset-8 border-[12px] border-[#144C8B] rounded-full opacity-40"></div>
            <div className="absolute inset-16 bg-[#114178] rounded-full opacity-80 flex items-center justify-center">
              <span className="text-white font-bold text-2xl">Forage</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
