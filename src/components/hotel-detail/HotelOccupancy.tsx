import React, { useState } from 'react';
import { Calendar, TrendingUp, Users, BarChart3, Download, Filter } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, ComposedChart, Area, AreaChart, PieChart, Pie, Cell } from 'recharts';

interface HotelOccupancyProps {
  hotel: any;
}

const HotelOccupancy: React.FC<HotelOccupancyProps> = ({ hotel }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('2024');
  const [selectedView, setSelectedView] = useState('monthly');

  // Occupancy KPIs
  const occupancyKPIs = [
    { 
      label: 'Current Occupancy', 
      value: '92.1%', 
      change: '+5.8%', 
      period: 'vs last month',
      icon: Users, 
      color: 'bg-nomade-green',
      positive: true
    },
    { 
      label: 'Average ADR', 
      value: '€485', 
      change: '+8.2%', 
      period: 'vs last month',
      icon: TrendingUp, 
      color: 'bg-nomade-terracotta',
      positive: true
    },
    { 
      label: 'RevPAR', 
      value: '€446', 
      change: '+12.5%', 
      period: 'vs last month',
      icon: BarChart3, 
      color: 'bg-nomade-sage-green',
      positive: true
    },
    { 
      label: 'Available Rooms', 
      value: '48', 
      change: '0%', 
      period: 'total keys',
      icon: Calendar, 
      color: 'bg-nomade-blue',
      positive: true
    }
  ];

  // Monthly Occupancy Data
  const monthlyOccupancyData = [
    { month: 'Jan', occupancy: 88.0, adr: 465, revpar: 409, rooms: 1305, revenue: 606825 },
    { month: 'Feb', occupancy: 91.2, adr: 478, revpar: 436, rooms: 1235, revenue: 590430 },
    { month: 'Mar', occupancy: 94.1, adr: 485, revpar: 456, rooms: 1398, revenue: 677730 },
    { month: 'Apr', occupancy: 92.8, adr: 492, revpar: 457, rooms: 1334, revenue: 656328 },
    { month: 'May', occupancy: 89.5, adr: 505, revpar: 452, rooms: 1329, revenue: 671145 },
    { month: 'Jun', occupancy: 85.2, adr: 468, revpar: 399, rooms: 1224, revenue: 572832 }
  ];

  // Daily Occupancy Data (Last 30 days)
  const dailyOccupancyData = [
    { day: '1', occupancy: 85.5, adr: 295, revpar: 252 },
    { day: '2', occupancy: 88.2, adr: 302, revpar: 266 },
    { day: '3', occupancy: 91.4, adr: 310, revpar: 283 },
    { day: '4', occupancy: 89.7, adr: 305, revpar: 274 },
    { day: '5', occupancy: 87.1, adr: 298, revpar: 260 },
    { day: '6', occupancy: 92.3, adr: 315, revpar: 291 },
    { day: '7', occupancy: 94.6, adr: 320, revpar: 303 },
    { day: '8', occupancy: 86.8, adr: 295, revpar: 256 },
    { day: '9', occupancy: 88.9, adr: 301, revpar: 268 },
    { day: '10', occupancy: 90.1, adr: 308, revpar: 278 },
    { day: '11', occupancy: 87.5, adr: 299, revpar: 262 },
    { day: '12', occupancy: 89.3, adr: 304, revpar: 271 },
    { day: '13', occupancy: 91.7, adr: 312, revpar: 286 },
    { day: '14', occupancy: 93.2, adr: 318, revpar: 296 },
    { day: '15', occupancy: 88.4, adr: 300, revpar: 265 },
    { day: '16', occupancy: 86.7, adr: 296, revpar: 257 },
    { day: '17', occupancy: 89.8, adr: 306, revpar: 275 },
    { day: '18', occupancy: 92.1, adr: 314, revpar: 289 },
    { day: '19', occupancy: 90.5, adr: 309, revpar: 280 },
    { day: '20', occupancy: 87.9, adr: 301, revpar: 265 },
    { day: '21', occupancy: 89.6, adr: 305, revpar: 273 },
    { day: '22', occupancy: 91.3, adr: 311, revpar: 284 },
    { day: '23', occupancy: 88.7, adr: 302, revpar: 268 },
    { day: '24', occupancy: 90.9, adr: 308, revpar: 280 },
    { day: '25', occupancy: 92.8, adr: 316, revpar: 293 },
    { day: '26', occupancy: 89.1, adr: 303, revpar: 270 },
    { day: '27', occupancy: 87.3, adr: 298, revpar: 260 },
    { day: '28', occupancy: 90.7, adr: 307, revpar: 278 },
    { day: '29', occupancy: 93.5, adr: 319, revpar: 298 },
    { day: '30', occupancy: 91.2, adr: 313, revpar: 285 }
  ];

  // Weekly Pattern Data
  const weeklyPatternData = [
    { day: 'Monday', occupancy: 78.5, adr: 285, revpar: 224 },
    { day: 'Tuesday', occupancy: 82.1, adr: 290, revpar: 238 },
    { day: 'Wednesday', occupancy: 85.3, adr: 295, revpar: 252 },
    { day: 'Thursday', occupancy: 88.7, adr: 302, revpar: 268 },
    { day: 'Friday', occupancy: 94.2, adr: 325, revpar: 306 },
    { day: 'Saturday', occupancy: 97.8, adr: 340, revpar: 333 },
    { day: 'Sunday', occupancy: 89.4, adr: 310, revpar: 277 }
  ];

  // Room Type Occupancy
  const roomTypeOccupancy = [
    { type: 'Deluxe', occupancy: 89.2, rooms: 33, revenue: 245000, color: '#5d681d' },
    { type: 'Premium', occupancy: 87.8, rooms: 52, revenue: 398000, color: '#ee735a' },
    { type: 'Suite', occupancy: 92.5, rooms: 8, revenue: 156000, color: '#82b074' }
  ];

  // Booking Source Occupancy
  const bookingSourceData = [
    { source: 'Direct', occupancy: 91.2, percentage: 35, color: '#5d681d' },
    { source: 'OTA', occupancy: 86.8, percentage: 45, color: '#ee735a' },
    { source: 'Corporate', occupancy: 94.1, percentage: 12, color: '#82b074' },
    { source: 'Travel Agent', occupancy: 88.5, percentage: 8, color: '#cc7d42' }
  ];

  // STR Competitive Data
  const strData = [
    { metric: 'Occupancy', myHotel: 86.9, compSet: 88.0, mpi: 98.7, rank: '5 of 6' },
    { metric: 'ADR', myHotel: 299.6, compSet: 262.2, ari: 114.3, rank: '2 of 6' },
    { metric: 'RevPAR', myHotel: 260.3, compSet: 230.7, rgi: 112.8, rank: '2 of 6' }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg">
          <p className="text-gray-900 font-medium mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-gray-600 text-sm">
              <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }}></span>
              <span className="font-medium">{entry.name}:</span> {entry.name.includes('ADR') || entry.name.includes('RevPAR') ? `€${entry.value}` : `${entry.value}${entry.name.includes('occupancy') ? '%' : ''}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-nomade-gray/10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold text-nomade-dark-brown">Occupancy Analytics</h2>
          <div className="flex items-center space-x-4">
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="bg-white border border-nomade-gray/30 rounded-xl px-4 py-2 text-nomade-dark-brown focus:ring-2 focus:ring-nomade-green"
            >
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
            <select 
              value={selectedView}
              onChange={(e) => setSelectedView(e.target.value)}
              className="bg-white border border-nomade-gray/30 rounded-xl px-4 py-2 text-nomade-dark-brown focus:ring-2 focus:ring-nomade-green"
            >
              <option value="monthly">Monthly View</option>
              <option value="daily">Daily View</option>
              <option value="weekly">Weekly Pattern</option>
            </select>
            <button className="bg-nomade-green text-white px-6 py-2 rounded-xl hover:bg-nomade-light-green transition-all duration-300 font-semibold flex items-center space-x-2">
              <Download size={18} />
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {occupancyKPIs.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-nomade-gray/10">
              <div className="flex items-center justify-between mb-4">
                <div className={`${kpi.color} rounded-xl p-3`}>
                  <Icon className="text-white" size={24} />
                </div>
                <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
                  kpi.positive 
                    ? 'text-green-600 bg-green-100' 
                    : 'text-red-600 bg-red-100'
                }`}>
                  {kpi.change}
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-nomade-dark-brown">{kpi.value}</h3>
                <p className="text-sm text-nomade-gray font-medium">{kpi.label}</p>
                <p className="text-xs text-nomade-gray">{kpi.period}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Occupancy Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Monthly Occupancy Trend */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-nomade-gray/10">
          <h3 className="text-xl font-bold text-nomade-dark-brown mb-4">Monthly Occupancy & Performance</h3>
          <ResponsiveContainer width="100%" height={350}>
            <ComposedChart data={monthlyOccupancyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
              <YAxis yAxisId="left" stroke="#9ca3af" fontSize={12} />
              <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" fontSize={12} />
              <Tooltip content={<CustomTooltip />} />
              <Bar yAxisId="left" dataKey="occupancy" fill="#5d681d" name="Occupancy %" radius={[4, 4, 0, 0]} />
              <Line yAxisId="right" type="monotone" dataKey="adr" stroke="#ee735a" strokeWidth={3} name="ADR" dot={{ r: 4, fill: "#ee735a" }} />
              <Line yAxisId="right" type="monotone" dataKey="revpar" stroke="#82b074" strokeWidth={3} name="RevPAR" dot={{ r: 4, fill: "#82b074" }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Daily Occupancy (Last 30 Days) */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-nomade-gray/10">
          <h3 className="text-xl font-bold text-nomade-dark-brown mb-4">Daily Occupancy Trend (Last 30 Days)</h3>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={dailyOccupancyData}>
              <defs>
                <linearGradient id="occupancyGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5d681d" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#5d681d" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="day" stroke="#9ca3af" fontSize={12} />
              <YAxis stroke="#9ca3af" fontSize={12} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="occupancy" stroke="#5d681d" strokeWidth={2} fill="url(#occupancyGradient)" name="Occupancy %" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Weekly Pattern & Room Type Analysis */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Weekly Pattern */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-nomade-gray/10">
          <h3 className="text-xl font-bold text-nomade-dark-brown mb-4">Weekly Occupancy Pattern</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyPatternData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="day" stroke="#9ca3af" fontSize={12} />
              <YAxis stroke="#9ca3af" fontSize={12} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="occupancy" fill="#5d681d" name="Occupancy %" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Room Type Occupancy */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-nomade-gray/10">
          <h3 className="text-xl font-bold text-nomade-dark-brown mb-4">Room Type Performance</h3>
          <div className="space-y-4">
            {roomTypeOccupancy.map((room, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-nomade-dark-brown">{room.type}</span>
                  <div className="text-right">
                    <span className="text-lg font-bold text-nomade-green">{room.occupancy}%</span>
                    <div className="text-xs text-nomade-gray">{room.rooms} rooms</div>
                  </div>
                </div>
                <div className="bg-nomade-gray/20 rounded-full h-3">
                  <div 
                    className="h-3 rounded-full transition-all duration-500"
                    style={{ width: `${room.occupancy}%`, backgroundColor: room.color }}
                  ></div>
                </div>
                <div className="text-sm text-nomade-gray">
                  Revenue: €{room.revenue.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Sources & STR Analysis */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Booking Source Analysis */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-nomade-gray/10">
          <h3 className="text-xl font-bold text-nomade-dark-brown mb-4">Occupancy by Booking Source</h3>
          <div className="space-y-4">
            {bookingSourceData.map((source, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-nomade-gray/5 rounded-xl">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: source.color }}
                  ></div>
                  <span className="font-medium text-nomade-dark-brown">{source.source}</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-nomade-green">{source.occupancy}%</div>
                  <div className="text-xs text-nomade-gray">{source.percentage}% of bookings</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* STR Competitive Analysis */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-nomade-gray/10">
          <h3 className="text-xl font-bold text-nomade-dark-brown mb-4">STR Competitive Analysis</h3>
          <div className="space-y-4">
            {strData.map((item, index) => (
              <div key={index} className="p-4 bg-nomade-gray/5 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-nomade-dark-brown">{item.metric}</span>
                  <span className="text-xs bg-nomade-blue/10 text-nomade-blue px-2 py-1 rounded-full font-semibold">
                    Rank {item.rank}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-nomade-green">
                      {item.metric === 'Occupancy' ? `${item.myHotel}%` : `€${item.myHotel}`}
                    </div>
                    <div className="text-nomade-gray">My Hotel</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-nomade-gray">
                      {item.metric === 'Occupancy' ? `${item.compSet}%` : `€${item.compSet}`}
                    </div>
                    <div className="text-nomade-gray">Comp Set</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-nomade-terracotta">
                      {item.metric === 'Occupancy' ? item.mpi : item.metric === 'ADR' ? item.ari : item.rgi}
                    </div>
                    <div className="text-nomade-gray">
                      {item.metric === 'Occupancy' ? 'MPI' : item.metric === 'ADR' ? 'ARI' : 'RGI'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Occupancy Table */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-nomade-gray/10">
        <h3 className="text-2xl font-bold text-nomade-dark-brown mb-6">Detailed Monthly Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-nomade-gray/20">
                <th className="text-left py-3 px-4 font-semibold text-nomade-dark-brown">Month</th>
                <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">Occupancy %</th>
                <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">Rooms Sold</th>
                <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">ADR (€)</th>
                <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">RevPAR (€)</th>
                <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">Revenue (€)</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {monthlyOccupancyData.map((month, index) => (
                <tr key={index} className="border-b border-nomade-gray/10 hover:bg-nomade-gray/5">
                  <td className="py-3 px-4 font-medium text-nomade-dark-brown">{month.month}</td>
                  <td className="py-3 px-4 text-right font-semibold text-nomade-green">{month.occupancy}%</td>
                  <td className="py-3 px-4 text-right text-nomade-dark-brown">{month.rooms.toLocaleString()}</td>
                  <td className="py-3 px-4 text-right text-nomade-dark-brown">€{month.adr}</td>
                  <td className="py-3 px-4 text-right text-nomade-dark-brown">€{month.revpar}</td>
                  <td className="py-3 px-4 text-right font-semibold text-nomade-terracotta">€{month.revenue.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Performance Insights */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-nomade-gray/10">
        <h3 className="text-2xl font-bold text-nomade-dark-brown mb-6">Occupancy Insights & Analysis</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-nomade-dark-brown mb-4">Key Observations</h4>
            <ul className="space-y-2 text-nomade-gray">
              <li>• Peak occupancy achieved in April at 86.9%</li>
              <li>• Strong weekend performance with 97.8% Saturday occupancy</li>
              <li>• Suite category outperforming at 92.5% occupancy</li>
              <li>• Direct bookings showing highest occupancy at 91.2%</li>
              <li>• Competitive position: 2nd in RevPAR, 5th in occupancy</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-nomade-dark-brown mb-4">Recommendations</h4>
            <ul className="space-y-2 text-nomade-gray">
              <li>• Focus on midweek occupancy improvement</li>
              <li>• Leverage direct booking channel strength</li>
              <li>• Optimize pricing strategy for Deluxe rooms</li>
              <li>• Enhance corporate booking programs</li>
              <li>• Monitor competitive set positioning closely</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelOccupancy;