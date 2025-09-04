import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  leftMetric: {
    value: string;
    label: string;
  };
  rightMetric: {
    value: string;
    label: string;
  };
  actionButton: {
    text: string;
    icon: React.ComponentType<{ size?: number }>;
    onClick?: () => void;
  };
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  leftMetric, 
  rightMetric, 
  actionButton 
}) => {
  const ActionIcon = actionButton.icon;

  return (
    <div className="relative overflow-hidden bg-nomade-dark-brown" style={{ 
      backgroundImage: 'url(/bg_pattern1.png)', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat' 
    }}>
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
        <div className="flex items-center justify-between">
          <div className="space-y-4">
            <h1 className="text-display-sm text-nomade-off-white">
              {title}
            </h1>
            <p className="text-body-lg text-nomade-off-white/90">
              {subtitle}
            </p>
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="text-right">
              <div className="text-metric-lg text-nomade-green">{leftMetric.value}</div>
              <div className="text-label-sm text-nomade-off-white/80">{leftMetric.label}</div>
            </div>
            
            <div className="w-px h-16 bg-nomade-off-white/30"></div>
            
            <div className="text-right">
              <div className="text-metric-lg text-nomade-terracotta">{rightMetric.value}</div>
              <div className="text-label-sm text-nomade-off-white/80">{rightMetric.label}</div>
            </div>
            
            <button 
              onClick={actionButton.onClick}
              className="bg-nomade-green text-nomade-off-white px-6 py-3 rounded-xl hover:bg-nomade-light-green transition-all duration-300 text-button shadow-xl flex items-center space-x-2"
            >
              <ActionIcon size={20} />
              <span>{actionButton.text}</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-nomade-dark-brown/80"></div>
    </div>
  );
};

export default Hero;