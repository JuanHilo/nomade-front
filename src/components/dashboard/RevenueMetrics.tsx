import React from 'react';
import { Building2, DollarSign, Activity, Star } from 'lucide-react';

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
        return (
          <div key={index} className="relative bg-nomade-dark-brown/95 backdrop-blur-sm rounded-xl p-6 border border-nomade-tan/30 shadow-inner">
            <div className="text-center space-y-3">
              <div className="flex justify-center mb-3">
                <div className="bg-nomade-tan/20 backdrop-blur-sm rounded-lg p-2 border border-nomade-tan/30">
                  <Icon className="text-nomade-tan" size={18} />
                </div>
              </div>
              <div className="space-y-1">
        <div key={index} className="relative bg-nomade-dark-brown/95 backdrop-blur-sm rounded-2xl p-6 border border-nomade-tan/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:transform hover:scale-105">
              <div className="text-xs font-serif tracking-widest uppercase text-nomade-tan/70 mb-2">{metric.label}</div>
              <div className="text-3xl font-bold text-nomade-off-white tracking-tight">{metric.value}</div>
              <div className={`text-sm font-medium ${metric.positive ? 'text-nomade-green' : 'text-red-400'}`}>
                </div>
              </div>
            </div>
          </div>
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-nomade-tan/5 via-transparent to-nomade-green/5 pointer-events-none"></div>
        );
      })}
    </div>
          );
    };
    )
    }
  )
}

export default RevenueMetrics;