export default function CombinedTestimonialsMissionSection() {
  const TESTIMONIALS = [
    {
      id: 1,
      quote: "Sınaqın köməyilə Kapital Bank-da real iş mühitini hiss etdim. Simulyasiya o qədər real idi ki, müsahibədə özümü çox əmin hiss etdim.",
      name: "Fidan Məmmədova",
      job: "Kiçik Kredit Analitiki @ Kapital Bank",
    },
    {
      id: 2,
      quote: "Simulyasiya mənə SOCAR qaydaları və yerli satınalma prosesləri ilə tanışlıq təcrübəsi qazandırdı. Nəticədə təcrübə proqramına qəbul oldum.",
      name: "Leyla Hüseynova",
      job: "SOCAR-da Təchizat üzrə Təcrübəçi",
    },
    {
      id: 3,
      quote: "Bu platforma mənim karyerama rəqəmsal sahədə başlamağım üçün lazım olan əsl praktiki bilikləri göstərdi.",
      name: "Toğrul Novruzov",
      job: "Azercell-də Məhsul Meneceri",
    },
  ];

  return (
    <>
      {/* Top Section: Testimonials */}
      <section className="bg-[#030812] py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          İnanmırsınız? Real tələbələrimizdən eşidin.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {TESTIMONIALS.map((testimonial) => {
            if (testimonial.id === 1) {
              return (
                /* ── Living Portrait card ── */
                <div
                  key={testimonial.id}
                  className="bg-[#111A2E] rounded-2xl overflow-hidden shadow-lg border border-slate-800 flex flex-col"
                >
                  {/* Video portrait — vertical aspect, face anchored to top */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <video
                      src="/videos/ugc-student-review.mp4.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />

                    {/* Verified badge */}
                    <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-[#0B1221]/80 backdrop-blur-sm border border-[#22c55e]/40 rounded-full px-2.5 py-1">
                      <svg
                        className="w-3 h-3 text-[#22c55e] flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-[#22c55e] text-[10px] font-bold tracking-wide">Yoxlanılıb</span>
                    </div>

                    {/* Fade into card body */}
                    <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#111A2E] to-transparent pointer-events-none" />
                  </div>

                  {/* Text */}
                  <div className="p-6 flex flex-col gap-4 flex-grow">
                    <p className="text-gray-300 text-sm italic leading-relaxed flex-grow">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div>
                      <h4 className="text-white font-bold text-base mt-4">{testimonial.name}</h4>
                      <p className="text-[#22c55e] text-sm font-semibold">{testimonial.job}</p>
                    </div>
                  </div>
                </div>
              );
            }

            /* ── Standard card ── */
            return (
              <div
                key={testimonial.id}
                className="bg-[#111A2E] rounded-2xl overflow-hidden shadow-lg border border-slate-800 flex flex-col"
              >
                <div className="w-full aspect-[3/4] bg-gradient-to-br from-[#1A2642] to-[#0d1324]" />
                <div className="p-6 flex flex-col gap-4 flex-grow">
                  <p className="text-gray-300 text-sm italic leading-relaxed flex-grow">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <h4 className="text-white font-bold text-base mt-4">{testimonial.name}</h4>
                    <p className="text-[#22c55e] text-sm font-semibold">{testimonial.job}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section: Mission Banner */}
        <div className="mt-24 max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#0d172e] to-[#1a2b50] rounded-3xl p-10 md:p-16 border border-slate-700/50 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">

            <div className="flex-1">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-xl leading-tight">
                Məqsədimiz – namizədlərin bacarıqlarını ədalətli şəkildə dəyərləndirməkdir.
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
                Biz sizin bacarıqlarınızı, səylərinizi və istəklərinizi Azərbaycanın ən yaxşı şirkətləri tərəfindən tanınmasını təmin etməyə çalışırıq – GPA-nızdan, oxuduğunuz universitetdən və ya əlaqələrinizdən asılı olmayaraq.
              </p>
            </div>

            <div className="flex-shrink-0 relative items-center justify-center hidden md:flex">
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
