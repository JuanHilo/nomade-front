import React from 'react';
import { BarChart3, Target, Users, TrendingUp, TrendingDown } from 'lucide-react';

const PerformanceMetrics: React.FC = () => {
  const metrics = [
    {
      label: "AVERAGE DAILY RATE",
      value: "€170.21",
      delta: "+3.2% refined excellence",
      icon: BarChart3,
      positive: true
    },
    {
      label: "REVPAR",
      value: "€97.63", 
      delta: "+7.8% elevated performance",
      icon: Target,
      positive: true
    },
    {
      label: "OCCUPANCY RATE",
      value: "53.83%",
      delta: "-1.2% seasonal adjustment",
      icon: Users,
      positive: false
    }
  ];

  return (
    <div className="bg-nomade-dark-brown/95 backdrop-blur-sm rounded-2xl p-8 border border-nomade-tan/20 shadow-2xl relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-nomade-tan/5 via-transparent to-nomade-green/5 pointer-events-none"></div>
      
      <div className="relative z-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif mb-3 tracking-wide text-nomade-off-white">Performance Excellence</h2>
        <p className="text-base text-nomade-tan/80">Curated hospitality metrics across our sanctuary portfolio</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="text-center space-y-4 group">
              <div className="relative mx-auto w-16 h-16">
                <div className="w-16 h-16 rounded-full border flex items-center justify-center shadow-inner bg-nomade-tan/20 border-nomade-tan/30 group-hover:bg-nomade-tan/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full border flex items-center justify-center bg-nomade-dark-brown border-nomade-tan/40 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-nomade-tan group-hover:text-nomade-off-white transition-colors duration-300" size={16} />
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-serif tracking-widest uppercase text-nomade-tan/70 mb-2">{metric.label}</div>
                <div className="text-2xl font-bold text-nomade-off-white tracking-tight">{metric.value}</div>
                <div className={`flex items-center justify-center space-x-1 text-sm font-medium ${metric.positive ? 'text-nomade-green' : 'text-red-400'}`}>
                  {metric.positive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  <span>{metric.delta}</span>
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