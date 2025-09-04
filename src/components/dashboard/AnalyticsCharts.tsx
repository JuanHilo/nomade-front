import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Users, Building2, Calendar } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const AnalyticsCharts: React.FC = () => {
  // Revenue trend data
  const revenueData = [
    { month: 'Jan', revenue: 2.4, gop: 0.8, occupancy: 78 },
    { month: 'Feb', revenue: 2.8, gop: 1.0, occupancy: 82 },
    { month: 'Mar', revenue: 3.2, gop: 1.2, occupancy: 85 },
    { month: 'Apr', revenue: 3.6, gop: 1.4, occupancy: 87 },
    { month: 'May', revenue: 3.9, gop: 1.6, occupancy: 89 },
    { month: 'Jun', revenue: 4.1, gop: 1.7, occupancy: 91 }
  ];

  // Property performance data
  const propertyData = [
    { name: 'NOMADE Tulum', value: 35, color: '#5d681d' },
    { name: 'NOMADE Madrid', value: 28, color: '#ee735a' },
    { name: 'NOMADE Holbox', value: 22, color: '#82b074' },
    { name: 'NOMADE Ibiza', value: 15, color: '#cc7d42' }
  ];

  // Occupancy trend data
  const occupancyData = [
    { month: 'Jan', tulum: 85, madrid: 88, holbox: 82 },
    { month: 'Feb', tulum: 87, madrid: 90, holbox: 84 },
    { month: 'Mar', tulum: 89, madrid: 92, holbox: 86 },
    { month: 'Apr', tulum: 87, madrid: 92, holbox: 89 },
    { month: 'May', tulum: 91, madrid: 94, holbox: 91 },
    { month: 'Jun', tulum: 89, madrid: 91, holbox: 88 }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg">
          <p className="text-gray-900 font-medium mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-gray-600 text-sm">
              <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }}></span>
              <span className="font-medium">{entry.name}:</span> {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Revenue & GOP Trend */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-nomade-gray/10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="rounded-xl p-3 bg-nomade-green/10">
              <TrendingUp className="text-nomade-green" size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-nomade-dark-brown">Revenue & GOP Trend</h3>
              <p className="text-sm text-nomade-gray">Monthly performance across portfolio</p>
            </div>
          </div>
        </div>
        
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
            <YAxis stroke="#9ca3af" fontSize={12} />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="revenue" stroke="#5d681d" strokeWidth={3} name="Revenue (€M)" dot={{ r: 4, fill: "#5d681d" }} />
            <Line type="monotone" dataKey="gop" stroke="#ee735a" strokeWidth={3} name="GOP (€M)" dot={{ r: 4, fill: "#ee735a" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Property Performance Distribution */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-nomade-gray/10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="rounded-xl p-3 bg-nomade-terracotta/10">
              <Building2 className="text-nomade-terracotta" size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-nomade-dark-brown">Revenue Distribution</h3>
              <p className="text-sm text-nomade-gray">Performance by property</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={propertyData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                {propertyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mt-4">
          {propertyData.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-sm text-nomade-gray">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Occupancy Trends */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-nomade-gray/10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="rounded-xl p-3 bg-nomade-sage-green/10">
              <Users className="text-nomade-sage-green" size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-nomade-dark-brown">Occupancy Trends</h3>
              <p className="text-sm text-nomade-gray">Monthly occupancy by property</p>
            </div>
          </div>
        </div>
        
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={occupancyData}>
            <defs>
              <linearGradient id="tulumGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#5d681d" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#5d681d" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="madridGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ee735a" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ee735a" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="holboxGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82b074" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#82b074" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
            <YAxis stroke="#9ca3af" fontSize={12} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="tulum" stackId="1" stroke="#5d681d" fill="url(#tulumGradient)" name="Tulum" />
            <Area type="monotone" dataKey="madrid" stackId="1" stroke="#ee735a" fill="url(#madridGradient)" name="Madrid" />
            <Area type="monotone" dataKey="holbox" stackId="1" stroke="#82b074" fill="url(#holboxGradient)" name="Holbox" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Monthly Revenue Breakdown */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-nomade-gray/10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="rounded-xl p-3 bg-nomade-blue/10">
              <BarChart className="text-nomade-blue" size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-nomade-dark-brown">Monthly Revenue</h3>
              <p className="text-sm text-nomade-gray">Revenue and GOP comparison</p>
            </div>
          </div>
        </div>
        
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
            <YAxis stroke="#9ca3af" fontSize={12} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="revenue" fill="#5d681d" name="Revenue (€M)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="gop" fill="#ee735a" name="GOP (€M)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsCharts;