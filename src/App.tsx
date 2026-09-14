import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Services } from './components/sections/Services';
import { AboutUs } from './components/sections/AboutUs';
import { Testimonials } from './components/sections/Testimonials';
import { LocationContact } from './components/sections/LocationContact';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5FAFC] text-[#12293F] font-sans selection:bg-[#1E8C99]/20 selection:text-[#12293F]">
      {/* Barra de Navegación Sticky */}
      <Navbar />

      {/* Contenido Principal con las 6 secciones en orden exacto */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Por qué elegirnos */}
        <WhyChooseUs />

        {/* 3. Servicios */}
        <Services />

        {/* 4. Sobre nosotros */}
        <AboutUs />

        {/* 5. Testimonios (carrusel loop continuo) */}
        <Testimonials />

        {/* 6. Ubicación y contacto */}
        <LocationContact />
      </main>

      {/* Footer con copyright dinámico y enlaces oficiales */}
      <Footer />

      {/* Botón flotante de WhatsApp para conversión permanente */}
      <FloatingWhatsApp />
    </div>
  );
}

