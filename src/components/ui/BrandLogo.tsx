import React from 'react';

interface BrandLogoProps {
  className?: string;
  isScrolled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Lockup tipográfico de respaldo para Óptica Anthony:
 * Ícono circular con gradiente #1E8C99 → #2E5FA3 y silueta de ojo/cuidado visual +
 * wordmark "Óptica Anthony" en #12293F con tipografía Space Grotesk.
 * Preparado para alternar con la imagen real cuando el cliente la coloque en src/assets/img/logo/
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const sizeMap = {
    sm: {
      icon: 'w-8 h-8',
      title: 'text-lg',
      subtitle: 'text-[10px]',
      gap: 'gap-2',
    },
    md: {
      icon: 'w-10 h-10',
      title: 'text-xl sm:text-2xl',
      subtitle: 'text-xs',
      gap: 'gap-2.5',
    },
    lg: {
      icon: 'w-12 h-12',
      title: 'text-2xl sm:text-3xl',
      subtitle: 'text-sm',
      gap: 'gap-3',
    },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center ${currentSize.gap} group select-none ${className}`}>
      {/* Símbolo de isotipo: Ícono circular con gradiente teal-navy y ojo estilizado */}
      <div
        className={`${currentSize.icon} shrink-0 rounded-full flex items-center justify-center p-0.5 shadow-sm transition-transform duration-300 group-hover:scale-105`}
        style={{
          background: 'linear-gradient(135deg, #1E8C99 0%, #2E5FA3 100%)',
        }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-1.5"
        >
          {/* Silueta de ojo con trazo limpio */}
          <path
            d="M5 20C9 10 31 10 35 20C31 30 9 30 5 20Z"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Pupila / Iris con reflejo */}
          <circle cx="20" cy="20" r="5.5" fill="white" />
          <circle cx="21.5" cy="18.5" r="2" fill="#12293F" />
        </svg>
      </div>

      {/* Wordmark tipográfico */}
      <div className="flex flex-col leading-none">
        <span
          className={`${currentSize.title} font-bold tracking-tight text-[#12293F] transition-colors`}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Óptica <span className="text-[#1E8C99]">ANTHONY</span>
        </span>
        <span
          className={`${currentSize.subtitle} font-medium tracking-wider text-[#2E5FA3] uppercase`}
          style={{ letterSpacing: '0.12em' }}
        >
          Centro de Optometría
        </span>
      </div>
    </div>
  );
};
