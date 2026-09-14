import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  MessageCircle,
  ExternalLink,
  Send,
  Calendar,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { Button } from '../ui/Button';
import {
  BUSINESS_INFO,
  SERVICE_OPTIONS,
  buildWhatsAppLink
} from '../../data/opticaData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const LocationContact: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  // Estado del formulario de agendamiento
  const [formData, setFormData] = useState({
    name: '',
    service: 'Consulta de optometría',
    preferredTime: 'Lunes a Sábado por la tarde (3:00pm - 6:00pm)',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    // Formato exacto solicitado en el prompt:
    // "Hola, soy [Nombre]. Me interesa [Servicio] y mi horario preferente es [Horario]. ¿Podrían ayudarme a agendar?"
    const customMessage = `Hola, soy ${formData.name.trim()}. Me interesa ${formData.service} y mi horario preferente es ${formData.preferredTime}. ¿Podrían ayudarme a agendar?`;
    const targetUrl = buildWhatsAppLink(customMessage);

    setFormSubmitted(true);
    // Abre WhatsApp con el mensaje codificado en una pestaña nueva
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contacto"
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden"
      aria-label="Ubicación y contacto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera de sección */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span
            className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#1E8C99] block mb-2"
            style={{ letterSpacing: '0.1em' }}
          >
            Atención Presencial y a Domicilio
          </span>
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-[#12293F] tracking-tight reveal-init ${
              isVisible ? 'reveal-visible-up' : 'reveal-hidden-up'
            }`}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Visítanos en La Alborada o agenda tu cita
          </h2>
          <p
            className={`mt-3 text-base sm:text-lg text-[#12293F]/75 leading-relaxed reveal-init ${
              isVisible ? 'reveal-visible-up' : 'reveal-hidden-up'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            Estamos listos para atenderte con dedicación personalizada en Guayaquil.
          </p>
        </div>

        {/* Dos Columnas con animación de slide-in lateral opuesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Columna Izquierda: Información de contacto y Formulario (slide desde la izquierda) */}
          <div
            className={`lg:col-span-6 flex flex-col gap-6 reveal-init ${
              isVisible ? 'reveal-visible-left' : 'reveal-hidden-left'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Tarjetas de Datos de Contacto */}
            <div className="bg-[#F5FAFC] p-6 sm:p-7 rounded-2xl border border-[#12293F]/10 space-y-5">
              {/* Dirección */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm"
                  style={{ background: 'linear-gradient(135deg, #1E8C99 0%, #2E5FA3 100%)' }}
                >
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3
                    className="text-sm font-bold text-[#12293F] uppercase tracking-wider"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Dirección
                  </h3>
                  <p className="text-base font-semibold text-[#12293F] mt-0.5">
                    {BUSINESS_INFO.locationName}
                  </p>
                  <p className="text-xs text-[#12293F]/60 mt-0.5">
                    (calle/número exacto pendiente de confirmar con el cliente antes de publicar)
                  </p>
                </div>
              </div>

              {/* Horario de atención confirmado */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#12293F]/10">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm"
                  style={{ background: 'linear-gradient(135deg, #2E5FA3 0%, #1E8C99 100%)' }}
                >
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3
                    className="text-sm font-bold text-[#12293F] uppercase tracking-wider"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Horarios de Atención
                  </h3>
                  <p className="text-sm text-[#12293F]/85 font-medium mt-0.5">
                    <strong className="text-[#12293F]">Lunes a Sábado:</strong> 9:30am – 8:00pm
                  </p>
                  <p className="text-sm text-[#12293F]/85 font-medium">
                    <strong className="text-[#12293F]">Domingo:</strong> 11:00am – 7:00pm
                  </p>
                </div>
              </div>

              {/* Botón Abrir en Mapa */}
              <div className="pt-2">
                <Button
                  as="a"
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                  icon={<ExternalLink className="w-4 h-4" />}
                  className="w-full justify-center text-sm"
                >
                  Abrir en Google Maps
                </Button>
              </div>
            </div>

            {/* Formulario Interactivo para WhatsApp */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#12293F]/15 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-[#1E8C99]/10 text-[#1E8C99] flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-[#12293F]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Agenda tu consulta personalizada
                  </h3>
                  <p className="text-xs text-[#12293F]/70">
                    Completa tus datos y serás dirigido directamente a WhatsApp con tu solicitud lista.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Campo Nombre */}
                <div>
                  <label
                    htmlFor="client-name"
                    className="block text-xs font-bold uppercase tracking-wider text-[#12293F] mb-1.5"
                  >
                    Tu Nombre Completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="client-name"
                    required
                    placeholder="Ej. Carlos Mendoza"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#12293F]/20 focus:border-[#1E8C99] focus:ring-2 focus:ring-[#1E8C99]/20 text-[#12293F] text-sm placeholder:text-[#12293F]/40 outline-none transition-all"
                  />
                </div>

                {/* Campo Servicio de interés */}
                <div>
                  <label
                    htmlFor="service-select"
                    className="block text-xs font-bold uppercase tracking-wider text-[#12293F] mb-1.5"
                  >
                    Servicio de interés <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service-select"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#12293F]/20 focus:border-[#1E8C99] focus:ring-2 focus:ring-[#1E8C99]/20 text-[#12293F] text-sm bg-white outline-none transition-all"
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Campo Horario preferente */}
                <div>
                  <label
                    htmlFor="time-select"
                    className="block text-xs font-bold uppercase tracking-wider text-[#12293F] mb-1.5"
                  >
                    Horario preferente <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="time-select"
                    required
                    placeholder="Ej. Mañanas 10:30am o Sábado por la tarde"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#12293F]/20 focus:border-[#1E8C99] focus:ring-2 focus:ring-[#1E8C99]/20 text-[#12293F] text-sm outline-none transition-all"
                  />
                </div>

                {/* Botón de Enviar a WhatsApp */}
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  icon={<Send className="w-4 h-4" />}
                  className="w-full justify-center shadow-md font-semibold text-sm"
                >
                  Enviar solicitud por WhatsApp
                </Button>

                {formSubmitted && (
                  <p className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 p-2.5 rounded-lg flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Se ha abierto WhatsApp con tu mensaje listo para enviar. ¡Te esperamos!</span>
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Columna Derecha: Mapa Embebido de La Alborada, Guayaquil (slide desde la derecha) */}
          <div
            className={`lg:col-span-6 flex flex-col gap-4 reveal-init ${
              isVisible ? 'reveal-visible-right' : 'reveal-hidden-right'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="rounded-2xl overflow-hidden border border-[#12293F]/10 shadow-lg bg-[#F5FAFC]">
              {/* Encabezado del mapa */}
              <div className="p-4 bg-white border-b border-[#12293F]/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#1E8C99]" />
                  <span
                    className="font-bold text-sm text-[#12293F]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    La Alborada · Guayaquil, Ecuador
                  </span>
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#1E8C99]/10 text-[#1E8C99] font-medium">
                  Mapa Interactivo
                </span>
              </div>

              {/* Iframe oficial de Google Maps embed para La Alborada Guayaquil */}
              <div className="relative w-full h-[380px] sm:h-[480px]">
                <iframe
                  title="Ubicación de Óptica Anthony en La Alborada, Guayaquil"
                  src="https://maps.google.com/maps?q=La%20Alborada,%20Guayaquil,%20Ecuador&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Pie informativo del mapa */}
              <div className="p-4 bg-[#F5FAFC] border-t border-[#12293F]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#12293F]/80">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-[#2E5FA3] shrink-0" />
                  <span>Fácil acceso desde cualquier etapa de La Alborada y avenidas principales.</span>
                </div>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1E8C99] font-bold hover:underline shrink-0"
                >
                  Cómo llegar →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
