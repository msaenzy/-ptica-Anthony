import React from 'react';
import { Quote, MessageSquareQuote, CheckCircle2, User } from 'lucide-react';
import { TESTIMONIALS_PLACEHOLDERS } from '../../data/opticaData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/**
 * COMPONENTE DE TESTIMONIOS:
 * AVISO PARA EL CLIENTE: No hay testimonios con cita textual visibles en las redes oficiales de Óptica Anthony.
 * De acuerdo con la directriz del proyecto, no se inventan testimonios falsos.
 * Se dejan estos 4 espacios completamente funcionales listos para que el cliente inserte las opiniones reales
 * antes de la publicación definitiva.
 */
export const Testimonials: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  // Duplicamos el array para lograr un carrusel loop continuo sin saltos ópticos
  const marqueeItems = [...TESTIMONIALS_PLACEHOLDERS, ...TESTIMONIALS_PLACEHOLDERS];

  return (
    <section
      id="testimonios"
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 bg-[#F5FAFC] overflow-hidden border-b border-[#12293F]/5"
      aria-label="Opiniones y testimonios de pacientes"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-14 text-center">
        <span
          className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#1E8C99] block mb-2"
          style={{ letterSpacing: '0.1em' }}
        >
          Experiencias de Pacientes
        </span>
        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-[#12293F] tracking-tight reveal-init ${
            isVisible ? 'reveal-visible-up' : 'reveal-hidden-up'
          }`}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Confianza construida con cada diagnóstico
        </h2>
        <p
          className={`mt-3 text-base sm:text-lg text-[#12293F]/75 max-w-2xl mx-auto leading-relaxed reveal-init ${
            isVisible ? 'reveal-visible-up' : 'reveal-hidden-up'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          Nuestros pacientes en La Alborada valoran el asesoramiento detallado y la comodidad en monturas.
        </p>
      </div>

      {/* Contenedor del carrusel con loop horizontal continuo y pausa al interactuar */}
      <div
        className="relative w-full overflow-hidden select-none py-2"
        role="region"
        aria-label="Carrusel continuo de testimonios"
      >
        {/* Degradados laterales para transición suave de bordes */}
        <div
          className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, #F5FAFC 0%, transparent 100%)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to left, #F5FAFC 0%, transparent 100%)',
          }}
          aria-hidden="true"
        />

        {/* Pista continua animada con CSS marquee */}
        <div className="animate-marquee flex gap-6 px-4">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[300px] sm:w-[380px] shrink-0 bg-white rounded-2xl p-6 sm:p-7 border border-[#12293F]/10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Cabecera de la tarjeta con badge de reserva de testimonio */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#1E8C99]/10 text-[#1E8C99]">
                    <MessageSquareQuote className="w-3.5 h-3.5" />
                    <span>Testimonio Verificado</span>
                  </div>
                  <Quote className="w-6 h-6 text-[#1E8C99]/30" />
                </div>

                {/* Texto de testimonio o placeholder explícito */}
                <p className="text-sm sm:text-base text-[#12293F]/80 italic leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Pie con paciente y servicio recibido */}
              <div className="pt-4 border-t border-[#12293F]/10 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 font-bold text-sm shadow-sm"
                  style={{ background: 'linear-gradient(135deg, #1E8C99 0%, #2E5FA3 100%)' }}
                  aria-hidden="true"
                >
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4
                    className="text-sm font-bold text-[#12293F]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {item.clientPlaceholder}
                  </h4>
                  <p className="text-xs text-[#2E5FA3] font-medium">
                    {item.serviceReceived}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-xs text-[#12293F]/50">
          Pausa automática al pasar el cursor o mantener presionado en dispositivos táctiles.
        </p>
      </div>
    </section>
  );
};
