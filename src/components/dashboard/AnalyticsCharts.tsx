import React from 'react';
import { PieChart as PieChartIcon, Calendar, TrendingUp } from 'lucide-react';
import { 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

const AnalyticsCharts: React.FC = () => {
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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {/* Booking Source */}
      <div className="rounded-2xl p-5 border shadow-2xl bg-nomade-dark-brown/95 border-nomade-tan/20 backdrop-blur-sm relative overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-500">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-nomade-tan/5 via-transparent to-nomade-green/5 pointer-events-none"></div>
        
        <div className="relative z-10">
        <div className="flex items-center space-x-2 mb-3">
          <div className="rounded-xl p-2 border bg-nomade-tan/20 border-nomade-tan/30 backdrop-blur-sm">
            <PieChartIcon className="text-nomade-tan" size={14} />
          </div>
          <div>
            <h3 className="text-base font-serif text-nomade-off-white">Guest Channels</h3>
            <p className="text-sm text-nomade-tan/80">Distribution by access</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-3">
            <ResponsiveContainer width="100%" height={100}>
              <PieChart>
                <Pie
                  data={bookingSourceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={20}
                  outerRadius={45}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {bookingSourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-1 text-xs">
            {bookingSourceData.map((item, index) => (
              <div key={index} className="flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full flex-shrink-0 border" style={{ backgroundColor: item.color, borderColor: 'rgba(179, 157, 140, 0.3)' }}></div>
                <span className="font-medium truncate text-nomade-off-white">{item.name}</span>
                <span className="font-semibold text-nomade-tan/80">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>

      {/* Weekly Occupancy */}
      <div className="rounded-2xl p-5 border shadow-2xl bg-nomade-dark-brown/95 border-nomade-tan/20 backdrop-blur-sm relative overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-500">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-nomade-tan/5 via-transparent to-nomade-green/5 pointer-events-none"></div>
        
        <div className="relative z-10">
        <div className="flex items-center space-x-2 mb-3">
          <div className="rounded-xl p-2 border bg-nomade-tan/20 border-nomade-tan/30 backdrop-blur-sm">
            <Calendar className="text-nomade-tan" size={14} />
          </div>
          <div>
            <h3 className="text-base font-serif text-nomade-off-white">Weekly Presence</h3>
            <p className="text-sm text-nomade-tan/80">Daily performance</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={120}>
          <BarChart data={weeklyOccupancy}>
            <CartesianGrid strokeDasharray="3 3" stroke="#b39d8c" strokeOpacity={0.2} />
            <XAxis dataKey="day" stroke="#b39d8c" fontSize={10} />
            <YAxis stroke="#b39d8c" fontSize={10} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="rate" fill="#b39d8c" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        </div>
      </div>

      {/* Monthly Trends */}
      <div className="rounded-2xl p-5 border shadow-2xl bg-nomade-dark-brown/95 border-nomade-tan/20 backdrop-blur-sm relative overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-500">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-nomade-tan/5 via-transparent to-nomade-green/5 pointer-events-none"></div>
        
        <div className="relative z-10">
        <div className="flex items-center space-x-2 mb-3">
          <div className="rounded-xl p-2 border bg-nomade-tan/20 border-nomade-tan/30 backdrop-blur-sm">
            <TrendingUp className="text-nomade-tan" size={14} />
          </div>
          <div>
            <h3 className="text-base font-serif text-nomade-off-white">Monthly Excellence</h3>
            <p className="text-sm text-nomade-tan/80">Revenue progression</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={120}>
          <LineChart data={monthlyTrends}>
            <CartesianGrid strokeDasharray="3 3" stroke="#b39d8c" strokeOpacity={0.2} />
            <XAxis dataKey="month" stroke="#b39d8c" fontSize={10} />
            <YAxis stroke="#b39d8c" fontSize={10} />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#b39d8c"
              strokeWidth={2} 
              dot={{ r: 3, fill: "#b39d8c" }}
              activeDot={{ r: 4, fill: "#b39d8c" }}
            />
          </LineChart>
        </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCharts;