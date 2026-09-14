import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
}

export interface BrandValue {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  id: number;
  clientPlaceholder: string;
  serviceReceived: string;
  quote: string;
  isPlaceholder: boolean;
}

export interface BookingFormData {
  name: string;
  service: string;
  preferredTime: string;
}

export interface BusinessInfo {
  name: string;
  headline: string;
  subheadline: string;
  locationName: string;
  fullAddressNotice: string;
  hoursWeekday: string;
  hoursSunday: string;
  whatsappNumber: string | null;
  whatsappLinkBackup: string;
  linktreeUrl: string;
  instagramUrl: string;
  threadsUrl: string;
  googleMapsUrl: string;
}
