import React from 'react';
import { BarChart3, PieChart as PieChartIcon, Calendar, TrendingUp } from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
  ComposedChart
} from 'recharts';

const PerformanceCharts: React.FC = () => {
  const revenueData = [
    { date: '1-Jan', rooms: 15000, fb: 8000, other: 3000, total: 26000 },
    { date: '5-Jan', rooms: 12000, fb: 6000, other: 2500, total: 20500 },
    { date: '10-Jan', rooms: 18000, fb: 9000, other: 3500, total: 30500 },
    { date: '15-Jan', rooms: 16000, fb: 7500, other: 3200, total: 26700 },
    { date: '20-Jan', rooms: 20000, fb: 10000, other: 4000, total: 34000 },
    { date: '25-Jan', rooms: 17000, fb: 8500, other: 3300, total: 28800 },
    { date: '30-Jan', rooms: 19000, fb: 9500, other: 3800, total: 32300 },
  ];

  const performanceData = [
    { date: '1-Jan', adr: 165, occupancy: 45, revpar: 74 },
    { date: '5-Jan', adr: 158, occupancy: 38, revpar: 60 },
    { date: '10-Jan', adr: 172, occupancy: 52, revpar: 89 },
    { date: '15-Jan', adr: 168, occupancy: 48, revpar: 81 },
    { date: '20-Jan', adr: 175, occupancy: 58, revpar: 102 },
    { date: '25-Jan', adr: 170, occupancy: 51, revpar: 87 },
    { date: '30-Jan', adr: 173, occupancy: 55, revpar: 95 },
  ];

  const bookingSourceData = [
    { name: 'Online', value: 62, color: '#2F3B2D' },
    { name: 'Guest Communications', value: 28, color: '#C7A34A' },
    { name: 'Repeat', value: 6, color: '#6D675E' },
    { name: 'Referral', value: 3, color: '#1B1B1A' },
    { name: 'Other', value: 1, color: '#E8E2D5' }
  ];

  const weeklyOccupancy = [
    { day: 'Mon', rate: 42.35, adr: 165 },
    { day: 'Tue', rate: 42.95, adr: 158 },
    { day: 'Wed', rate: 45.91, adr: 172 },
    { day: 'Thu', rate: 42.68, adr: 168 },
    { day: 'Fri', rate: 43.89, adr: 175 },
    { day: 'Sat', rate: 70.89, adr: 180 },
    { day: 'Sun', rate: 80.18, adr: 185 }
  ];

  const monthlyTrends = [
    { month: 'Oct', revenue: 380000, occupancy: 72, adr: 168 },
    { month: 'Nov', revenue: 420000, occupancy: 68, adr: 172 },
    { month: 'Dec', revenue: 510000, occupancy: 85, adr: 185 },
    { month: 'Jan', revenue: 434000, occupancy: 54, adr: 170 },
    { month: 'Feb', revenue: 465000, occupancy: 61, adr: 175 },
    { month: 'Mar', revenue: 520000, occupancy: 78, adr: 182 }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-obsidian/95 backdrop-blur-sm border border-muted-gold/20 rounded-lg p-3 shadow-xl">
          <p className="text-ivory font-medium mb-2 text-sm">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-ivory/80 text-xs">
              <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: entry.color }}></span>
              <span className="font-medium">{entry.name}:</span> {entry.name.includes('€') ? `€${entry.value?.toLocaleString()}` : entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      {/* Daily Revenue */}
      <div className="rounded-2xl p-6 border shadow-2xl bg-nomade-dark-brown/95 border-nomade-tan/20 backdrop-blur-sm relative overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-500">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-nomade-tan/5 via-transparent to-nomade-green/5 pointer-events-none"></div>
        
        <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-serif text-nomade-off-white">Daily Revenue</h3>
            <p className="text-sm mt-1 text-nomade-tan/80">Revenue breakdown by category</p>
          </div>
          <div className="flex space-x-3 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full border bg-nomade-green border-nomade-green/30"></div>
              <span className="text-nomade-tan/80">Rooms</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full border bg-nomade-tan border-nomade-tan/30"></div>
              <span className="text-nomade-tan/80">F&B</span>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={180}>
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="roomsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#5d681d" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#5d681d" stopOpacity={0.05}/>
              </linearGradient>
              <linearGradient id="fbGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#b39d8c" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#b39d8c" stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#ebe9d8" strokeOpacity={0.2} />
            <XAxis dataKey="date" stroke="#ebe9d8" fontSize={10} />
            <YAxis stroke="#ebe9d8" fontSize={10} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="rooms" stackId="1" stroke="#5d681d" strokeWidth={2} fill="url(#roomsGradient)" />
            <Area type="monotone" dataKey="fb" stackId="1" stroke="#b39d8c" strokeWidth={2} fill="url(#fbGradient)" />
          </AreaChart>
        </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="rounded-2xl p-6 border shadow-2xl bg-nomade-dark-brown/95 border-nomade-tan/20 backdrop-blur-sm relative overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-500">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-nomade-tan/5 via-transparent to-nomade-green/5 pointer-events-none"></div>
        
        <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-serif text-nomade-off-white">Performance</h3>
            <p className="text-sm mt-1 text-nomade-tan/80">ADR & Occupancy trends</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={180}>
          <ComposedChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ebe9d8" strokeOpacity={0.2} />
            <XAxis dataKey="date" stroke="#ebe9d8" fontSize={10} />
            <YAxis yAxisId="left" stroke="#ebe9d8" fontSize={10} />
            <YAxis yAxisId="right" orientation="right" stroke="#ebe9d8" fontSize={10} />
            <Tooltip content={<CustomTooltip />} />
            <Bar yAxisId="left" dataKey="occupancy" fill="#5d681d" radius={[2, 2, 0, 0]} />
            <Line yAxisId="right" type="monotone" dataKey="adr" stroke="#b39d8c" strokeWidth={2} dot={{ r: 3, fill: "#b39d8c" }} />
          </ComposedChart>
        </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCharts;