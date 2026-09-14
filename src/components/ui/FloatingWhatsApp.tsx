import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { buildWhatsAppLink, DEFAULT_BOOKING_MESSAGE } from '../../data/opticaData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = buildWhatsAppLink(DEFAULT_BOOKING_MESSAGE);

  return (
    <aside aria-label="Contacto flotante" className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Tooltip / burbuja previa de llamada a la acción */}
      {isOpen && (
        <div className="mb-3 max-w-xs bg-white text-[#12293F] p-4 rounded-2xl shadow-xl border border-[#12293F]/10 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1E8C99]">
              Óptica Anthony · En Línea
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-[#12293F]/50 hover:text-[#12293F] p-0.5 rounded"
              aria-label="Cerrar mensaje"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-[#12293F]/80 leading-relaxed mb-3">
            ¡Hola! ¿Deseas agendar tu consulta de optometría o cotizar tus lentes en La Alborada?
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-2 px-3 bg-[#1E8C99] hover:bg-[#187580] text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
          >
            Chatear por WhatsApp
          </a>
        </div>
      )}

      {/* Botón flotante circular principal */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsOpen(true)}
        aria-label="Contactar por WhatsApp a Óptica Anthony"
        className="w-14 h-14 rounded-full bg-[#1E8C99] hover:bg-[#187580] text-white flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1E8C99]/30"
      >
        <MessageCircle className="w-7 h-7" />
        {/* Pulso de atención sutil */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
      </a>
    </aside>
  );
};
