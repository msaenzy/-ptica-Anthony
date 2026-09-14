import React from 'react';
import { Instagram, AtSign, Link2, MapPin, Clock, Phone, MessageCircle } from 'lucide-react';
import { BrandLogo } from '../ui/BrandLogo';
import { BUSINESS_INFO, buildWhatsAppLink, DEFAULT_BOOKING_MESSAGE } from '../../data/opticaData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = buildWhatsAppLink(DEFAULT_BOOKING_MESSAGE);

  return (
    <footer className="bg-[#12293F] text-white pt-14 pb-10 border-t border-white/10" aria-label="Pie de página">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Identidad y propósito */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="bg-white px-3.5 py-2 rounded-xl mb-4 shadow-sm inline-block">
              <BrandLogo size="sm" />
            </div>

            <p className="text-sm text-white/80 leading-relaxed max-w-md mb-6">
              Diagnóstico visual y atención personalizada en La Alborada, Guayaquil. Especialistas en salud visual, monturas modernas, cristales con filtros y servicio a domicilio.
            </p>

            {/* Canales sociales oficiales según prompt */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguir a Óptica Anthony en Instagram"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#1E8C99] text-white flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E8C99]"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* Threads */}
              <a
                href={BUSINESS_INFO.threadsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguir a Óptica Anthony en Threads"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#2E5FA3] text-white flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E8C99]"
              >
                <AtSign className="w-5 h-5" />
              </a>

              {/* Linktree */}
              <a
                href={BUSINESS_INFO.linktreeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver enlaces de Óptica Anthony en Linktree"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#1E8C99] text-white flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E8C99]"
              >
                <Link2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Enlaces de navegación rápida */}
          <div className="md:col-span-3">
            <h4
              className="text-base font-bold text-white mb-4 uppercase tracking-wider"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <a href="#inicio" className="hover:text-[#1E8C99] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#por-que-elegirnos" className="hover:text-[#1E8C99] transition-colors">
                  Por qué elegirnos
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#1E8C99] transition-colors">
                  Servicios y Tratamientos
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-[#1E8C99] transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-[#1E8C99] transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#1E8C99] transition-colors">
                  Ubicación y Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Datos de contacto y horarios */}
          <div className="md:col-span-4">
            <h4
              className="text-base font-bold text-white mb-4 uppercase tracking-wider"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Ubicación & Atención
            </h4>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1E8C99] shrink-0 mt-1" />
                <span>La Alborada, Guayaquil, Ecuador</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#1E8C99] shrink-0 mt-1" />
                <div>
                  <p>Lun a Sáb: 9:30am – 8:00pm</p>
                  <p>Dom: 11:00am – 7:00pm</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#1E8C99] hover:bg-[#187580] text-white font-medium text-xs rounded-xl transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Atención rápida por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Barra de copyright con año dinámico */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {currentYear} Óptica Anthony. Todos los derechos reservados.</p>
          <p>La Alborada · Guayaquil, Ecuador</p>
        </div>
      </div>
    </footer>
  );
};
