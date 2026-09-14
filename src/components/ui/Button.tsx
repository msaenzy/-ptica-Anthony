import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  target,
  rel,
  icon,
  children,
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none min-h-[44px] text-center active:scale-[0.98]';

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-base gap-2',
    lg: 'px-7 py-3.5 text-lg font-semibold gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-[#1E8C99] text-white hover:bg-[#187580] shadow-sm hover:shadow-md focus-visible:ring-[#1E8C99]',
    secondary:
      'bg-[#2E5FA3] text-white hover:bg-[#254f8a] shadow-sm hover:shadow-md focus-visible:ring-[#2E5FA3]',
    outline:
      'border-2 border-[#1E8C99] text-[#1E8C99] hover:bg-[#1E8C99]/10 focus-visible:ring-[#1E8C99]',
    ghost:
      'text-[#12293F] hover:bg-black/5 focus-visible:ring-[#1E8C99]',
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (as === 'a' && href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        className={combinedClasses}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
