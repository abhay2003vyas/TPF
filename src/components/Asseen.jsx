import React from "react";

const AsSeen = () => {
  return (
    <section className="bg-white">
      {/* Row Content Wrap */}
      <div className="relative">
        {/* Top Row Separator (decorative) */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gray-200"></div>

        {/* Fixed Width Row Content */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Column Group - Equal Height, Centered */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-24">
            {/* Column 1 - Text Content */}
<div className="flex-1 w-full lg:w-auto">
              <div className="fl-col-content">
                <div className="fl-module-rich-text">
                  <div className="fl-rich-text">
                    <p className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl leading-relaxed text-gray-800" style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', 'Playfair Display', Georgia, serif", fontWeight: 400, letterSpacing: '0.02em' }}>
                      <span className="block mb-1">We Understand That Certain Experiences In Life</span>
                      <span className="block mb-1">Are Indescribable Through Words Alone - Let Us</span>
                      <span className="block">Express Those For You Frame By Frame.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 - Small Column with Button */}
            <div className="flex-shrink-0">
              <div className="fl-col-content flex flex-col items-center lg:items-start gap-6">
                {/* Button Module */}
                <div className="fl-module-button">
                  <div className="fl-button-wrap flex justify-center">
                    <div className="flex justify-center">
                      <button className="group relative px-8 py-3 border border-black text-black font-light tracking-[0.2em] uppercase text-sm hover:bg-black hover:text-black transition-all duration-500 overflow-hidden">
                        <span className="relative z-10">View Portfolio</span>
                        <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Rich Text Module */}
                <div className="fl-module-rich-text text-center lg:text-left">
                  <div className="fl-rich-text">
                    <p className="text-lg font-serif text-gray-700">
                      Private commissions worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* As Seen In Section */}
          <div className="text-center pt-12">
            <h3 className="text-5xl lg:text-6xl font-serif tracking-[0.3em] mb-16 text-gray-800 uppercase">
              as seen in
            </h3>

            <div className="border-t border-gray-200 pt-8"></div>

            {/* Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 lg:gap-12 items-center justify-items-center max-w-6xl mx-auto">
              {/* South Asian Bride */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="text-4xl lg:text-5xl font-serif text-amber-700 mb-2 group-hover:scale-110 transition-transform duration-300">
                  SB
                </div>
                <div className="text-[10px] font-light tracking-[0.15em] text-gray-600 uppercase">
                  South Asian Bride
                </div>
              </div>

              {/* Maharani Weddings */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="text-2xl lg:text-3xl font-serif italic text-gray-800 group-hover:scale-110 transition-transform duration-300">
                  Maharani
                </div>
                <div className="text-xs font-light tracking-[0.1em] text-gray-600 uppercase">
                  Weddings
                </div>
              </div>

              {/* SLR Lounge */}
              <div className="flex items-center gap-2 group cursor-pointer hover:scale-110 transition-transform duration-300">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  SLR
                </div>
                <span className="text-xl lg:text-2xl font-bold text-gray-800">
                  Lounge
                </span>
              </div>

              {/* Kismet */}
              <div className="flex flex-col items-center group cursor-pointer hover:scale-110 transition-transform duration-300">
                <div className="text-[10px] tracking-[0.2em] mb-1 text-gray-500 uppercase">
                  Well Lit
                </div>
                <div className="text-2xl lg:text-3xl font-serif tracking-wider text-gray-800 uppercase">
                  Kismet
                </div>
              </div>

              {/* ISPWP */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-2 border-gray-400 flex items-center justify-center relative group-hover:border-gray-600 group-hover:scale-110 transition-all duration-300">
                  <div className="absolute top-2 lg:top-3 left-0 right-0 flex justify-center">
                    <svg className="w-12 lg:w-16 h-3" viewBox="0 0 40 10">
                      <path
                        d="M0,5 Q10,0 20,5 T40,5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-gray-400"
                      />
                    </svg>
                  </div>
                  <div className="text-sm lg:text-base font-semibold tracking-[0.15em] text-gray-700 uppercase">
                    ISPWP
                  </div>
                  <div className="absolute bottom-2 lg:bottom-3 left-0 right-0 flex justify-center">
                    <svg className="w-12 lg:w-16 h-3" viewBox="0 0 40 10">
                      <path
                        d="M0,5 Q10,10 20,5 T40,5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-gray-400"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Sabyasachi */}
              <div className="flex flex-col items-center group cursor-pointer hover:scale-110 transition-transform duration-300">
                <div className="text-xl lg:text-2xl font-light tracking-[0.15em] text-gray-800 uppercase">
                  Sabyasachi
                </div>
              </div>

              {/* Anita Dongre */}
              <div className="flex items-center gap-2 group cursor-pointer hover:scale-110 transition-transform duration-300">
                <div className="text-amber-600">
                  <svg
                    className="w-6 h-6 lg:w-8 lg:h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L8 8h8l-4-6zm0 20l4-6H8l4 6z" />
                  </svg>
                </div>
                <div className="text-base lg:text-xl font-light tracking-wider text-amber-600 uppercase">
                  Anita Dongre
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AsSeen;
