import React from 'react';
import { ABOUT_TEXT, BRAND_VALUES } from '../../data/opticaData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const AboutUs: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      id="nosotros"
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 bg-white border-y border-[#12293F]/5 relative overflow-hidden"
      aria-label="Sobre Óptica Anthony"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Columna Visual / Imagen de taller y atención cercana */}
          <div
            className={`lg:col-span-5 relative order-2 lg:order-1 reveal-init ${
              isVisible ? 'reveal-visible-scale' : 'reveal-hidden-scale'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#12293F]/10">
              <img
                src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=900&q=80"
                alt="Monturas y atención en Óptica Anthony, Guayaquil"
                className="w-full h-[360px] sm:h-[440px] object-cover object-center"
                loading="lazy"
              />

              {/* Distintivo de barrio */}
              <div className="absolute top-4 left-4 bg-[#12293F]/90 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-md">
                <span>La Alborada · Guayaquil</span>
              </div>
            </div>

            {/* Acento decorativo sutil en la esquina contraria */}
            <div
              className="absolute -top-3 -left-3 w-20 h-20 rounded-2xl -z-10 border-2 border-[#2E5FA3]/30"
              aria-hidden="true"
            />
          </div>

          {/* Columna de Contenido: Texto y Valores */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span
              className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#1E8C99] block mb-2"
              style={{ letterSpacing: '0.1em' }}
            >
              Sobre Nosotros
            </span>

            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-[#12293F] tracking-tight mb-6 reveal-init ${
                isVisible ? 'reveal-visible-scale' : 'reveal-hidden-scale'
              }`}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                transitionDelay: '200ms',
              }}
            >
              Cuidado visual con precisión técnica y calidez de barrio
            </h2>

            {/* Texto exacto del prompt */}
            <p
              className={`text-base sm:text-lg text-[#12293F]/85 leading-relaxed mb-10 bg-[#F5FAFC] p-6 rounded-2xl border-l-4 border-[#1E8C99] reveal-init ${
                isVisible ? 'reveal-visible-scale' : 'reveal-hidden-scale'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              "{ABOUT_TEXT}"
            </p>

            {/* 4 Valores de marca */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {BRAND_VALUES.map((val, idx) => {
                const IconComponent = val.icon;
                const delay = 350 + idx * 80;

                return (
                  <div
                    key={val.id}
                    className={`flex items-start gap-3.5 p-4 rounded-xl bg-[#F5FAFC]/80 border border-[#12293F]/5 hover:border-[#1E8C99]/30 transition-all duration-200 reveal-init ${
                      isVisible ? 'reveal-visible-scale' : 'reveal-hidden-scale'
                    }`}
                    style={{ transitionDelay: `${delay}ms` }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white shrink-0 shadow-sm"
                      style={{
                        background:
                          idx % 2 === 0
                            ? 'linear-gradient(135deg, #1E8C99 0%, #2E5FA3 100%)'
                            : 'linear-gradient(135deg, #2E5FA3 0%, #1E8C99 100%)',
                      }}
                      aria-hidden="true"
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3
                        className="text-base font-bold text-[#12293F]"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {val.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#12293F]/75 mt-0.5 leading-snug">
                        {val.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
