import React from 'react';
import { WHY_CHOOSE_ITEMS } from '../../data/opticaData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const WhyChooseUs: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      id="por-que-elegirnos"
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 bg-white border-y border-[#12293F]/5 relative overflow-hidden"
      aria-label="Por qué elegir Óptica Anthony"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera de sección */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span
            className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#1E8C99] block mb-2"
            style={{ letterSpacing: '0.1em' }}
          >
            Nuestros Diferenciales
          </span>
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-[#12293F] tracking-tight reveal-init ${
              isVisible ? 'reveal-visible-up' : 'reveal-hidden-up'
            }`}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            ¿Por qué elegir Óptica Anthony?
          </h2>
          <p
            className={`mt-3 text-base sm:text-lg text-[#12293F]/75 leading-relaxed reveal-init ${
              isVisible ? 'reveal-visible-up' : 'reveal-hidden-up'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            Combinamos precisión clínica con la cercanía y dedicación que merecen tus ojos.
          </p>
        </div>

        {/* Stagger de las 3 tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_ITEMS.map((item, index) => {
            const IconComponent = item.icon;
            // Delay staggered para cada tarjeta
            const delay = 150 * (index + 1);

            return (
              <div
                key={item.id}
                className={`flex flex-col bg-[#F5FAFC] p-7 sm:p-8 rounded-2xl border border-[#12293F]/10 hover:border-[#1E8C99]/40 transition-all duration-300 hover:shadow-md group reveal-init ${
                  isVisible ? 'reveal-visible-up' : 'reveal-hidden-up'
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                {/* Ícono contenedor con acento */}
                <div
                  className="w-13 h-13 rounded-xl flex items-center justify-center mb-6 text-white shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background:
                      index === 1
                        ? 'linear-gradient(135deg, #2E5FA3 0%, #1E8C99 100%)'
                        : 'linear-gradient(135deg, #1E8C99 0%, #2E5FA3 100%)',
                  }}
                  aria-hidden="true"
                >
                  <IconComponent className="w-6 h-6" strokeWidth={2} />
                </div>

                {/* Título exacto */}
                <h3
                  className="text-lg sm:text-xl font-bold text-[#12293F] mb-3 group-hover:text-[#1E8C99] transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {item.title}
                </h3>

                {/* Descripción exacta */}
                <p className="text-sm sm:text-base text-[#12293F]/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
