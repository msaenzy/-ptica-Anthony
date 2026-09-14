import React from 'react';
import { MessageCircle, ArrowDown, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { buildWhatsAppLink, DEFAULT_BOOKING_MESSAGE, BUSINESS_INFO } from '../../data/opticaData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const whatsappUrl = buildWhatsAppLink(DEFAULT_BOOKING_MESSAGE);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden py-12 lg:py-16 bg-[#F5FAFC]"
      aria-label="Presentación principal"
    >
      {/* Elementos geométricos sutiles de fondo para profundidad óptica sin clichés */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1E8C99 0%, #2E5FA3 100%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2E5FA3 0%, #1E8C99 100%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Columna de Texto y Llamados a la Acción */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tag informativo de ubicación y especialidad */}
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E8C99]/10 text-[#1E8C99] text-xs sm:text-sm font-semibold mb-6 border border-[#1E8C99]/20 reveal-init ${
                isVisible ? 'reveal-visible-up' : 'reveal-hidden-up'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>La Alborada · Guayaquil, Ecuador</span>
            </div>

            {/* H1 Principal: fade + slide-up */}
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#12293F] leading-[1.15] mb-6 reveal-init ${
                isVisible ? 'reveal-visible-up' : 'reveal-hidden-up'
              }`}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                transitionDelay: '200ms',
              }}
            >
              Convierte la fatiga visual en{' '}
              <span className="text-[#1E8C99] underline decoration-[#2E5FA3]/30 decoration-wavy decoration-2 underline-offset-8">
                claridad y rendimiento
              </span>
            </h1>

            {/* Subheadline descriptivo */}
            <p
              className={`text-lg sm:text-xl text-[#12293F]/85 font-normal max-w-2xl mb-8 sm:mb-10 leading-relaxed reveal-init ${
                isVisible ? 'reveal-visible-up' : 'reveal-hidden-up'
              }`}
              style={{ transitionDelay: '350ms' }}
            >
              {BUSINESS_INFO.subheadline}
            </p>

            {/* Botones de acción CTA: fade con delay */}
            <div
              className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10 reveal-init ${
                isVisible ? 'reveal-visible-up' : 'reveal-hidden-up'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <Button
                as="a"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                icon={<MessageCircle className="w-5 h-5" />}
                className="w-full sm:w-auto shadow-md hover:shadow-lg"
              >
                Agendar cita
              </Button>

              <Button
                as="a"
                href="#servicios"
                variant="outline"
                size="lg"
                icon={<ArrowDown className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Ver servicios
              </Button>
            </div>

            {/* Micro-puntos de confianza */}
            <div
              className={`grid grid-cols-2 sm:flex sm:items-center gap-4 sm:gap-6 pt-4 border-t border-[#12293F]/10 text-xs sm:text-sm text-[#12293F]/80 reveal-init ${
                isVisible ? 'reveal-visible-up' : 'reveal-hidden-up'
              }`}
              style={{ transitionDelay: '650ms' }}
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1E8C99] shrink-0" />
                <span>Atención clínica certificada</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#2E5FA3] shrink-0" />
                <span>Ajustes y entregas a domicilio</span>
              </div>
            </div>
          </div>

          {/* Columna Visual: Foto natural de consulta/monturas */}
          <div
            className={`lg:col-span-5 relative reveal-init ${
              isVisible ? 'reveal-visible-scale' : 'reveal-hidden-scale'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Marco con borde sutil y esquina calculada */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#12293F]/10 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=900&q=80"
                  alt="Consulta de optometría en Óptica Anthony, La Alborada"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Tarjeta flotante con el compromiso de la marca */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#12293F]/10 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm"
                      style={{ background: 'linear-gradient(135deg, #1E8C99 0%, #2E5FA3 100%)' }}
                    >
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-[#1E8C99] tracking-wider">
                        Enfoque Personalizado
                      </p>
                      <p className="text-sm font-semibold text-[#12293F]">
                        Asesoría visual según tu rutina y estilo de vida
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Acento decorativo sutil en la esquina inferior */}
              <div
                className="absolute -bottom-4 -right-4 w-28 h-28 rounded-2xl -z-10 border-2 border-[#1E8C99]/30"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
