import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', variant = 'dark' }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16'
  };

  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl', 
    lg: 'text-4xl'
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <img 
        src="/logo.png" 
        alt="NOMADE Logo" 
        className={`${sizeClasses[size]} object-contain ${variant === 'light' ? 'brightness-0 invert' : ''}`}
      />

    </div>
  );
};

export default Logo;