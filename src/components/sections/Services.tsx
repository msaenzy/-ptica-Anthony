import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { SERVICES_ITEMS, buildWhatsAppLink } from '../../data/opticaData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const Services: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="servicios"
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 bg-[#F5FAFC] relative overflow-hidden"
      aria-label="Servicios de óptica y optometría"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera de sección */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span
            className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#1E8C99] block mb-2"
            style={{ letterSpacing: '0.1em' }}
          >
            Nuestras Especialidades
          </span>
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-[#12293F] tracking-tight reveal-init ${
              isVisible ? 'reveal-visible-up' : 'reveal-hidden-up'
            }`}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Servicios integrales para tu salud visual
          </h2>
          <p
            className={`mt-3 text-base sm:text-lg text-[#12293F]/75 leading-relaxed reveal-init ${
              isVisible ? 'reveal-visible-up' : 'reveal-hidden-up'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            Desde el examen optometrista hasta la entrega y adaptación de tus lentes en La Alborada.
          </p>
        </div>

        {/* Grid de servicios con stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES_ITEMS.map((service, index) => {
            const IconComponent = service.icon;
            const delay = 120 * (index + 1);

            // Mensaje específico para WhatsApp que facilita la conversión inmediata
            const serviceWhatsAppUrl = buildWhatsAppLink(
              `Hola, me interesa agendar el servicio de ${service.title} en Óptica Anthony. ¿Podrían orientarme sobre horarios y detalles?`
            );

            return (
              <div
                key={service.id}
                className={`bg-white rounded-2xl p-7 sm:p-8 border border-[#12293F]/10 hover:border-[#1E8C99]/50 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group reveal-init ${
                  isVisible ? 'reveal-visible-up' : 'reveal-hidden-up'
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    {/* Ícono de servicio */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm group-hover:scale-105 transition-transform"
                      style={{
                        background:
                          index % 2 === 0
                            ? 'linear-gradient(135deg, #1E8C99 0%, #2E5FA3 100%)'
                            : 'linear-gradient(135deg, #2E5FA3 0%, #1E8C99 100%)',
                      }}
                      aria-hidden="true"
                    >
                      <IconComponent className="w-6 h-6" strokeWidth={2} />
                    </div>

                    {service.badge && (
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#1E8C99]/10 text-[#1E8C99] border border-[#1E8C99]/20">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Título de servicio */}
                  <h3
                    className="text-xl font-bold text-[#12293F] mb-3 group-hover:text-[#1E8C99] transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {service.title}
                  </h3>

                  {/* Descripción orientada a beneficio */}
                  <p className="text-sm sm:text-base text-[#12293F]/80 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Enlace directo para agendar este servicio puntual */}
                <div className="pt-4 border-t border-[#12293F]/10 flex items-center justify-between">
                  <a
                    href={serviceWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E8C99] hover:text-[#187580] group-hover:underline transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E8C99] rounded"
                  >
                    <span>Consultar por WhatsApp</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>

                  <span className="text-xs text-[#2E5FA3] font-medium hidden sm:inline-block">
                    Atención personalizada
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner de soporte adicional */}
        <div
          className={`mt-12 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden shadow-md reveal-init ${
            isVisible ? 'reveal-visible-up' : 'reveal-hidden-up'
          }`}
          style={{
            background: 'linear-gradient(135deg, #12293F 0%, #2E5FA3 70%, #1E8C99 100%)',
            transitionDelay: '550ms',
          }}
        >
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h4
                className="text-xl sm:text-2xl font-bold mb-2 text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                ¿Tienes dudas sobre qué tipo de lentes necesitas?
              </h4>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                Escríbenos directamente y te asesoramos sin costo sobre filtros de luz azul, tratamientos antirreflejo y progresivos.
              </p>
            </div>

            <a
              href={buildWhatsAppLink('Hola, tengo dudas sobre qué lentes necesito y quisiera orientación personalizada.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1E8C99] hover:bg-[#187580] text-white font-semibold text-sm rounded-xl transition-all shadow-md active:scale-95 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Preguntar a un asesor</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
