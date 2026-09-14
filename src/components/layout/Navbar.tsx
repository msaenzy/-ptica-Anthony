import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { BrandLogo } from '../ui/BrandLogo';
import { Button } from '../ui/Button';
import { NAV_ITEMS, buildWhatsAppLink, DEFAULT_BOOKING_MESSAGE, BUSINESS_INFO } from '../../data/opticaData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = buildWhatsAppLink(DEFAULT_BOOKING_MESSAGE);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F5FAFC]/95 backdrop-blur-md shadow-sm border-b border-[#12293F]/10 py-3'
          : 'bg-[#F5FAFC] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Navegación principal">
          {/* Logo a la izquierda */}
          <a
            href="#inicio"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E8C99] rounded-lg p-1 transition-opacity hover:opacity-90"
            aria-label="Ir al inicio de Óptica Anthony"
          >
            <BrandLogo size={isScrolled ? 'sm' : 'md'} />
          </a>

          {/* Enlaces de escritorio */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-sm lg:text-base font-medium text-[#12293F]/80 hover:text-[#1E8C99] transition-colors duration-150 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E8C99] rounded"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Botón de acento fijo de conversión (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              as="a"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
              icon={<MessageCircle className="w-4 h-4" />}
              className="shadow-sm"
            >
              Agendar cita
            </Button>
          </div>

          {/* Botón hamburguesa Mobile */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-[#1E8C99] rounded-xl active:scale-95 transition-transform"
              aria-label="Agendar cita por WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#12293F] hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E8C99]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Menú Móvil desplegable */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-b border-[#12293F]/10 bg-[#F5FAFC] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200"
          id="mobile-nav"
        >
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-medium text-[#12293F] hover:bg-[#1E8C99]/10 hover:text-[#1E8C99] rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#12293F]/10 flex flex-col gap-2">
            <Button
              as="a"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              icon={<MessageCircle className="w-5 h-5" />}
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Agendar cita vía WhatsApp
            </Button>

            <a
              href={BUSINESS_INFO.linktreeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-center text-[#2E5FA3] underline py-1"
            >
              Ver todos los canales oficiales (Linktree)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
