import React from 'react';
import { Building2, TrendingUp, TrendingDown } from 'lucide-react';

const PerformanceMetrics: React.FC = () => {
  const metrics = [
    {
      label: "AVERAGE DAILY RATE",
      value: "€170.21",
      delta: "+3.2% refined excellence",
      icon: Building2,
      positive: true
    },
    {
      label: "REVPAR", 
      value: "€97.63",
      delta: "+7.8% elevated performance",
      icon: TrendingUp,
      positive: true
    },
    {
      label: "OCCUPANCY RATE",
      value: "53.83%",
      delta: "-1.2% seasonal adjustment", 
      icon: TrendingDown,
      positive: false
    }
  ];

  return (
    <div 
      className="rounded-2xl p-8 border shadow-2xl border-white/20 backdrop-blur-sm relative overflow-hidden hover:transform hover:scale-[1.01] transition-all duration-500"
      style={{ 
        backgroundImage: 'url(/nomadetulum.jpeg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        minHeight: '320px'
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/75 to-black/80"></div>
      
      {/* Subtle luxury accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-emerald-400/10 pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif mb-3 tracking-wide text-white font-bold">Performance Excellence</h2>
          <p className="text-lg text-white/90 font-light tracking-wide">Curated hospitality metrics across our sanctuary portfolio</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const TrendIcon = metric.positive ? TrendingUp : TrendingDown;
            
            return (
              <div key={index} className="text-center space-y-4 group">
                <div className="relative mx-auto w-20 h-20">
                  <div className="w-20 h-20 rounded-full border-2 flex items-center justify-center shadow-2xl bg-white/10 border-white/30 group-hover:bg-white/20 transition-all duration-500 backdrop-blur-sm">
                    <div className="w-16 h-16 rounded-full border-2 flex items-center justify-center bg-black/30 border-white/40 group-hover:scale-110 group-hover:bg-black/40 transition-all duration-500 backdrop-blur-sm">
                      <Icon className="text-white group-hover:text-yellow-300 transition-colors duration-500" size={20} />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="text-xs font-serif tracking-[0.3em] uppercase text-white/80 font-medium">{metric.label}</div>
                  <div className="text-3xl font-bold text-white tracking-tight group-hover:text-yellow-100 transition-colors duration-500">{metric.value}</div>
                  <div className={`flex items-center justify-center space-x-2 text-sm font-medium ${metric.positive ? 'text-emerald-300' : 'text-red-300'}`}>
                    <TrendIcon size={14} className="group-hover:scale-110 transition-transform duration-300" />
                    <span className="group-hover:text-white transition-colors duration-300">{metric.delta}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;