import React from 'react';
import { Building2, DollarSign, Activity, Star, TrendingUp, TrendingDown } from 'lucide-react';

const RevenueMetrics: React.FC = () => {
  const metrics = [
    {
      label: "ROOMS REVENUE",
      value: "€213,549",
      delta: "+8.2% since last cycle",
      icon: Building2,
      positive: true
    },
    {
      label: "FOOD & BEVERAGES", 
      value: "€86,756",
      delta: "+12.1% since last cycle",
      icon: DollarSign,
      positive: true
    },
    {
      label: "TELEPHONE",
      value: "€3,041", 
      delta: "-2.3% since last cycle",
      icon: Activity,
      positive: false
    },
    {
      label: "OTHER REVENUE",
      value: "€130,891",
      delta: "+15.7% since last cycle", 
      icon: Star,
      positive: true
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        const TrendIcon = metric.positive ? TrendingUp : TrendingDown;
        
        return (
          <div key={index} className="relative group">
            <div className="bg-nomade-dark-brown/95 backdrop-blur-sm rounded-2xl p-6 border border-nomade-tan/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="text-center space-y-4">
                <div className="flex justify-center mb-3">
                  <div className="bg-nomade-tan/20 backdrop-blur-sm rounded-xl p-3 border border-nomade-tan/30 group-hover:bg-nomade-tan/30 transition-all duration-300">
                    <Icon className="text-nomade-tan group-hover:scale-110 transition-transform duration-300" size={24} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-xs font-serif tracking-[0.2em] uppercase text-nomade-tan/80 font-medium">
                    {metric.label}
                  </div>
                  <div className="text-3xl font-bold text-nomade-off-white tracking-tight">
                    {metric.value}
                  </div>
                  <div className="flex items-center justify-center space-x-1">
                    <TrendIcon size={14} className={metric.positive ? 'text-nomade-green' : 'text-red-400'} />
                    <div className={`text-sm font-medium ${metric.positive ? 'text-nomade-green' : 'text-red-400'}`}>
                      {metric.delta}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-nomade-tan/5 via-transparent to-nomade-green/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        );
      })}
    </div>
  );
};

export default RevenueMetrics;