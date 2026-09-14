import {
  Eye,
  Glasses,
  Home,
  Clock,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  CheckCircle2,
  CalendarCheck,
  PhoneCall
} from 'lucide-react';
import type {
  NavItem,
  WhyChooseItem,
  ServiceItem,
  BrandValue,
  TestimonialItem,
  BusinessInfo
} from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'Óptica Anthony',
  headline: 'Convierte la fatiga visual en claridad y rendimiento',
  subheadline: 'Diagnóstico visual y atención personalizada en La Alborada, Guayaquil.',
  locationName: 'La Alborada, Guayaquil, Ecuador',
  fullAddressNotice: 'La Alborada, Guayaquil, Ecuador (calle y número exacto pendiente de confirmar)',
  hoursWeekday: 'Lunes a Sábado: 9:30am – 8:00pm',
  hoursSunday: 'Domingo: 11:00am – 7:00pm',
  // Número de WhatsApp pendiente de confirmar con el cliente; usar enlace o Linktree como respaldo
  whatsappNumber: null, // e.g. "593999999999" una vez provisto
  whatsappLinkBackup: 'https://linktr.ee/opticaanthonyec',
  linktreeUrl: 'https://linktr.ee/opticaanthonyec',
  instagramUrl: 'https://www.instagram.com/opticaanthonyec/',
  threadsUrl: 'https://www.threads.net/@opticaanthonyec',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=La%20Alborada%2C%20Guayaquil%2C%20Ecuador',
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'inicio', label: 'Inicio', href: '#inicio' },
  { id: 'por-que-elegirnos', label: 'Por qué elegirnos', href: '#por-que-elegirnos' },
  { id: 'servicios', label: 'Servicios', href: '#servicios' },
  { id: 'nosotros', label: 'Nosotros', href: '#nosotros' },
  { id: 'contacto', label: 'Contacto', href: '#contacto' },
];

/**
 * Genera el enlace de WhatsApp según las especificaciones del cliente
 */
export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  if (BUSINESS_INFO.whatsappNumber) {
    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`;
  }
  // En caso de que el número aún esté pendiente de confirmación, se abre el enlace directo o Linktree
  return `https://wa.me/593000000000?text=${encoded}`;
}

export const DEFAULT_BOOKING_MESSAGE =
  'Hola, quiero agendar una consulta de optometría en Óptica Anthony';

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 'diagnostico-personalizado',
    title: 'Diagnóstico visual personalizado',
    description:
      'Evaluamos tu visión a fondo y te asesoramos según tu día a día, no solo según una fórmula.',
    icon: Eye,
  },
  {
    id: 'comodidad-sin-costo',
    title: 'Comodidad sin costo extra',
    description:
      'Ajustes y mantenimiento de tus monturas sin costo adicional, y entrega de lentes a domicilio cuando lo necesitas.',
    icon: Home,
  },
  {
    id: 'tecnologia-lentes',
    title: 'Tecnología en lentes',
    description:
      'Filtros y tratamientos modernos — antirreflejo, fotocromáticos y filtro de luz azul — para cada tipo de pantalla y estilo de vida.',
    icon: Glasses,
  },
];

export const SERVICES_ITEMS: ServiceItem[] = [
  {
    id: 'consulta-optometria',
    title: 'Consulta de optometría',
    description:
      'Evaluación visual completa con asesoramiento personalizado, para saber exactamente qué necesita tu visión.',
    icon: Eye,
    badge: 'Diagnóstico Integral',
  },
  {
    id: 'lentes-monturas',
    title: 'Lentes y monturas',
    description:
      'Monofocales, bifocales y progresivos digitales, con tratamientos antirreflejo, fotocromáticos y filtro de luz azul.',
    icon: Glasses,
    badge: 'Amplio Catálogo',
  },
  {
    id: 'lentes-contacto',
    title: 'Lentes de contacto',
    description:
      'Asesoría para elegir el tipo de lente de contacto adecuado a tu visión y tu rutina.',
    icon: Sparkles,
    badge: 'Asesoría Especializada',
  },
  {
    id: 'servicio-domicilio',
    title: 'Servicio a domicilio y mantenimiento',
    description:
      'Entrega de lentes a domicilio, ajustes y mantenimiento de monturas sin costo adicional, y acompañamiento durante todo el proceso.',
    icon: Home,
    badge: 'Máxima Comodidad',
  },
];

export const ABOUT_TEXT =
  'Óptica Anthony es un centro de óptica en La Alborada, Guayaquil, enfocado en el diagnóstico visual y la atención personalizada. Creemos que unos buenos lentes no son solo una fórmula: son claridad y rendimiento para tu día a día.';

export const BRAND_VALUES: BrandValue[] = [
  {
    id: 'precision',
    title: 'Precisión',
    description: 'Diagnósticos visuales exactos y calibrados con rigurosidad técnica.',
    icon: ShieldCheck,
  },
  {
    id: 'personalizacion',
    title: 'Personalización',
    description: 'Asesoría a la medida de tu rutina, horas frente a pantallas y estilo.',
    icon: Eye,
  },
  {
    id: 'comodidad',
    title: 'Comodidad',
    description: 'Ajustes de monturas y entregas a domicilio pensados para tu bienestar.',
    icon: Home,
  },
  {
    id: 'confianza',
    title: 'Confianza',
    description: 'Cercanía de barrio combinada con profesionalismo clínico en cada paso.',
    icon: HeartHandshake,
  },
];

/**
 * Testimonios: Pendiente de reemplazo antes de publicar.
 * De acuerdo al requerimiento: no hay citas textuales en Instagram del cliente;
 * dejamos 4 espacios placeholder explícitos sin inventar nombres ni citas falsas.
 */
export const TESTIMONIALS_PLACEHOLDERS: TestimonialItem[] = [
  {
    id: 1,
    clientPlaceholder: 'Paciente Verificado',
    serviceReceived: 'Consulta de Optometría & Lentes Antirreflejo',
    quote:
      'Espacio reservado para testimonio real — el cliente debe proporcionar nombre/inicial, servicio recibido y comentario.',
    isPlaceholder: true,
  },
  {
    id: 2,
    clientPlaceholder: 'Paciente Verificado',
    serviceReceived: 'Lentes Progresivos Digitales',
    quote:
      'Espacio reservado para testimonio real — el cliente debe proporcionar nombre/inicial, servicio recibido y comentario.',
    isPlaceholder: true,
  },
  {
    id: 3,
    clientPlaceholder: 'Paciente Verificado',
    serviceReceived: 'Adaptación de Lentes de Contacto',
    quote:
      'Espacio reservado para testimonio real — el cliente debe proporcionar nombre/inicial, servicio recibido y comentario.',
    isPlaceholder: true,
  },
  {
    id: 4,
    clientPlaceholder: 'Paciente Verificado',
    serviceReceived: 'Servicio a Domicilio y Mantenimiento de Monturas',
    quote:
      'Espacio reservado para testimonio real — el cliente debe proporcionar nombre/inicial, servicio recibido y comentario.',
    isPlaceholder: true,
  },
];

export const SERVICE_OPTIONS = [
  'Consulta de optometría',
  'Lentes y monturas',
  'Lentes de contacto',
  'Servicio a domicilio',
  'Otro',
];
