export default function CombinedTestimonialsMissionSection() {
  const TESTIMONIALS = [
    {
      id: 1,
      quote: "İş simulyasiyasını bitirərək, mənə həqiqi işdə tələb olunan bacarıqları qazandım. Bu, Kapital Bank-da işə düzəlməyimə kömək etdi.",
      name: "Əhməd Məmmədov",
      job: "Kapital Bank-da Kredit Analitiki"
    },
    {
      id: 2,
      quote: "Simulyasiya mənə SOCAR qaydaları və yerli satınalma prosesləri ilə tanışlıq təcrübəsi qazandırdı. Nəticədə təcrübə proqramına qəbul oldum.",
      name: "Leyla Hüseynova",
      job: "SOCAR-da Təchizat üzrə Təcrübəçi"
    },
    {
      id: 3,
      quote: "Bu platforma mənim karyerama rəqəmsal sahədə başlamağım üçün lazım olan əsl praktiki bilikləri göstərdi.",
      name: "Toğrul Novruzov",
      job: "Azercell-də Məhsul Meneceri"
    }
  ];

  return (
    <>
      {/* Top Section: Testimonials */}
      <section className="bg-[#030812] py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          İnanmırsınız? Real tələbələrimizdən eşidin.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-[#111A2E] rounded-2xl overflow-hidden shadow-lg border border-slate-800 flex flex-col">
              <div className="h-48 w-full bg-gradient-to-br from-[#1A2642] to-[#0d1324]" />
              <div className="p-6 flex flex-col gap-4 flex-grow">
                <p className="text-gray-300 text-sm italic leading-relaxed flex-grow">"{testimonial.quote}"</p>
                <div>
                  <h4 className="text-white font-bold text-base mt-4">{testimonial.name}</h4>
                  <p className="text-[#22c55e] text-sm font-semibold">{testimonial.job}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section: Mission Banner */}
        <div className="mt-24 max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#0d172e] to-[#1a2b50] rounded-3xl p-10 md:p-16 border border-slate-700/50 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
            
            {/* Left Content (Text) */}
            <div className="flex-1">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-xl leading-tight">
                Məqsədimiz – namizədlərin bacarıqlarını ədalətli şəkildə dəyərləndirməkdir.
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
                Biz sizin bacarıqlarınızı, səylərinizi və istəklərinizi Azərbaycanın ən yaxşı şirkətləri tərəfindən tanınmasını təmin etməyə çalışırıq – GPA-nızdan, oxuduğunuz universitetdən və ya əlaqələrinizdən asılı olmayaraq.
              </p>
            </div>

            {/* Right Content (Graphic) */}
            <div className="flex-shrink-0 relative flex items-center justify-center hidden md:flex">
              <div className="w-48 h-48 rounded-full border-4 border-slate-500/30 flex items-center justify-center">
                <div className="w-36 h-36 rounded-full border-4 border-[#22c55e]/50 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#0B1221] shadow-[0_0_20px_rgba(34,197,94,0.3)] flex items-center justify-center z-10">
                    <span className="text-white font-bold text-xl">Sınaq</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
