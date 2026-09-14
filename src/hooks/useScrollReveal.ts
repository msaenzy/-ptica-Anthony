import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  initialVisible?: boolean;
}

/**
 * Hook custom de IntersectionObserver que re-dispara la animación
 * tanto al entrar como al salir del viewport (remover clase cuando isIntersecting sea false).
 * Garantiza visibilidad inicial para que el contenido sea legible antes de JS o con JS deshabilitado.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const { threshold = 0.15, rootMargin = '0px 0px -40px 0px', initialVisible = true } = options;
  const elementRef = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(initialVisible);

  useEffect(() => {
    const node = elementRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Se actualiza en ambos sentidos (entrar y salir)
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return { ref: elementRef, isVisible };
}
