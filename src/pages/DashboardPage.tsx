import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Building2,
  Target,
  Star,
  Award,
  Zap,
  Globe,
  Activity,
  BarChart3,
  PieChart as PieChartIcon,
  ChevronDown,
  Filter,
  Download,
  RefreshCw,
  FileText
} from 'lucide-react';
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
  RadialBarChart,
  RadialBar,
  ComposedChart
} from 'recharts';

const DashboardPage: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('January');
  const navigate = useNavigate();

  // Enhanced data sets
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
    { name: 'Online', value: 62, color: '#5d681d' },
    { name: 'Telephone', value: 28, color: '#ee735a' },
    { name: 'Repeat', value: 6, color: '#82b074' },
    { name: 'Referral', value: 3, color: '#cc7d42' },
    { name: 'Other', value: 1, color: '#b39d8c' }
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
        <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg">
          <p className="text-gray-900 font-medium mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-gray-600 text-sm">
              <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }}></span>
              <span className="font-medium">{entry.name}:</span> {entry.name.includes('$') ? `$${entry.value?.toLocaleString()}` : entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="px-8 py-8 max-w-7xl mx-auto">
      {/* Revenue Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Rooms Revenue */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
              <Building2 className="text-emerald-600" size={24} />
            </div>
            <div className="flex items-center space-x-1 text-emerald-600 text-sm font-semibold">
              <ArrowUpRight size={16} />
              <span>+8.2%</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-3xl font-bold text-gray-900 tracking-tight">$213,549</div>
            <div className="text-gray-500 text-sm font-medium">Room Revenue</div>
            <div className="text-xs text-gray-400">vs last month</div>
          </div>
        </div>

        {/* F&B Revenue */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center">
              <DollarSign className="text-orange-600" size={24} />
            </div>
            <div className="flex items-center space-x-1 text-emerald-600 text-sm font-semibold">
              <ArrowUpRight size={16} />
              <span>+12.1%</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-3xl font-bold text-gray-900 tracking-tight">$86,756</div>
            <div className="text-gray-500 text-sm font-medium">Food & Beverages</div>
            <div className="text-xs text-gray-400">vs last month</div>
          </div>
        </div>

        {/* Telephone Revenue */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center">
              <Activity className="text-gray-600" size={24} />
            </div>
            <div className="flex items-center space-x-1 text-red-500 text-sm font-semibold">
              <ArrowDownRight size={16} />
              <span>-2.3%</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-3xl font-bold text-gray-900 tracking-tight">$3,041</div>
            <div className="text-gray-500 text-sm font-medium">Telephone</div>
            <div className="text-xs text-gray-400">vs last month</div>
          </div>
        </div>

        {/* Other Revenue */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
              <Star className="text-blue-600" size={24} />
            </div>
            <div className="flex items-center space-x-1 text-emerald-600 text-sm font-semibold">
              <ArrowUpRight size={16} />
              <span>+15.7%</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-3xl font-bold text-gray-900 tracking-tight">$130,891</div>
            <div className="text-gray-500 text-sm font-medium">Other Revenue</div>
            <div className="text-xs text-gray-400">vs last month</div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* ADR */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
          <div className="text-center space-y-4">
            <div className="bg-nomade-green/10 rounded-full p-4 inline-block">
              <BarChart3 className="text-nomade-green" size={24} />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-semibold text-gray-900">$170.21</h3>
              <p className="text-gray-600 font-medium">Average Daily Rate</p>
              <div className="flex items-center justify-center space-x-1 text-green-600 text-sm font-medium">
                <TrendingUp size={16} />
                <span>+3.2% vs last month</span>
              </div>
            </div>
          </div>
        </div>

        {/* RevPAR */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
          <div className="text-center space-y-4">
            <div className="bg-orange-100 rounded-full p-4 inline-block">
              <Target className="text-orange-600" size={24} />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-semibold text-gray-900">$97.63</h3>
              <p className="text-gray-600 font-medium">RevPAR</p>
              <div className="flex items-center justify-center space-x-1 text-green-600 text-sm font-medium">
                <TrendingUp size={16} />
                <span>+7.8% vs last month</span>
              </div>
            </div>
          </div>
        </div>

        {/* Occupancy Rate */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
          <div className="text-center space-y-4">
            <div className="bg-blue-100 rounded-full p-4 inline-block">
              <Users className="text-blue-600" size={24} />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-semibold text-gray-900">53.83%</h3>
              <p className="text-gray-600 font-medium">Occupancy Rate</p>
              <div className="flex items-center justify-center space-x-1 text-red-500 text-sm font-medium">
                <TrendingDown size={16} />
                <span>-1.2% vs last month</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Operational Hotels Performance Table */}
      <div className="bg-gradient-to-br from-nomade-off-white via-white to-nomade-off-white/50 rounded-3xl p-10 shadow-2xl border border-nomade-tan/20 mb-8 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-nomade-green to-nomade-light-green rounded-2xl p-4 shadow-lg">
              <Building2 className="text-white" size={28} />
            </div>
            <div>
              <h3 className="text-3xl font-display font-bold text-nomade-dark-brown tracking-tight">Portfolio Performance</h3>
              <p className="text-nomade-gray font-serif italic">Luxury hospitality excellence across all properties</p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-nomade-green to-nomade-light-green text-white px-8 py-4 rounded-2xl hover:from-nomade-light-green hover:to-nomade-green transition-all duration-500 font-semibold flex items-center space-x-3 shadow-xl hover:shadow-2xl hover:transform hover:scale-105">
            <Download size={18} />
            <span className="tracking-wide">Export Portfolio</span>
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="bg-gradient-to-br from-nomade-dark-brown via-nomade-dark-brown/90 to-nomade-dark-brown rounded-3xl p-8 text-white relative overflow-hidden border border-nomade-tan/30 shadow-2xl">
            <div className="absolute top-6 right-6 bg-gradient-to-r from-nomade-green to-nomade-light-green rounded-xl px-4 py-2 shadow-lg">
              <span className="text-white text-xs font-bold tracking-wide">+125</span>
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/30 shadow-lg">
                <Building2 className="text-white" size={24} />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-display font-bold tracking-tight">1,250</h3>
              <p className="text-white/80 text-sm font-sans tracking-wide">Total Rooms</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-nomade-dark-brown via-nomade-dark-brown/90 to-nomade-dark-brown rounded-3xl p-8 text-white relative overflow-hidden border border-nomade-tan/30 shadow-2xl">
            <div className="absolute top-6 right-6 bg-gradient-to-r from-nomade-terracotta to-nomade-orange-brown rounded-xl px-4 py-2 shadow-lg">
              <span className="text-white text-xs font-bold tracking-wide">+€12M</span>
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/30 shadow-lg">
                <DollarSign className="text-white" size={24} />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-display font-bold tracking-tight bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">€98.7M</h3>
              <p className="text-white/80 text-sm font-serif tracking-wide">Total Value</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-nomade-dark-brown via-nomade-dark-brown/90 to-nomade-dark-brown rounded-3xl p-8 text-white relative overflow-hidden border border-nomade-tan/30 shadow-2xl">
            <div className="absolute top-6 right-6 bg-gradient-to-r from-nomade-sage-green to-nomade-teal rounded-xl px-4 py-2 shadow-lg">
              <span className="text-white text-xs font-bold tracking-wide">+6.8%</span>
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/30 shadow-lg">
                <Users className="text-white" size={24} />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-display font-bold tracking-tight">78.8%</h3>
              <p className="text-white/80 text-sm font-serif tracking-wide">Average Occupancy</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-nomade-dark-brown via-nomade-dark-brown/90 to-nomade-dark-brown rounded-3xl p-8 text-white relative overflow-hidden border border-nomade-tan/30 shadow-2xl">
            <div className="absolute top-6 right-6 bg-gradient-to-r from-nomade-blue to-nomade-lavender rounded-xl px-4 py-2 shadow-lg">
              <span className="text-white text-xs font-bold tracking-wide">+€15</span>
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/30 shadow-lg">
                <BarChart3 className="text-white" size={24} />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-display font-bold tracking-tight">€185</h3>
              <p className="text-white/80 text-sm font-serif tracking-wide">RevPAR</p>
            </div>
          </div>
        </div>

        {/* Hotels Performance Table */}
        <div className="space-y-6">
          {[
            {
              name: 'NOMADE Punta Mita',
              location: 'Punta de Mita, Mexico',
              image: 'https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=400',
              rooms: 180,
              occupancy: 87.2,
              revpar: 423,
              adr: 485,
              nights: 47124,
              value: '€35.2M',
              status: 'Exceptional'
            },
            {
              name: 'NOMADE Todos Santos',
              location: 'Todos Santos, Mexico',
              image: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=400',
              rooms: 85,
              occupancy: 92.1,
              revpar: 479,
              adr: 520,
              nights: 40512,
              value: '€42.8M',
              status: 'Outstanding'
            },
            {
              name: 'NOMADE New York',
              location: 'Manhattan, New York',
              image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=400',
              rooms: 120,
              occupancy: 85.3,
              revpar: 412,
              adr: 483,
              nights: 37845,
              value: '€28.9M',
              status: 'Strong'
            }
          ].map((hotel, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-nomade-tan/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-[1.02] cursor-pointer"
            >
              <div className="flex items-center space-x-8">
                {/* Hotel Image & Info */}
                <div className="flex items-center space-x-6 flex-1">
                  <div className="relative">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-24 h-24 rounded-2xl object-cover shadow-lg group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-nomade-green/20 to-transparent rounded-2xl"></div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-property-name group-hover:text-nomade-light-green transition-colors duration-300">
                      {hotel.name}
                    </h3>
                    <p className="text-property-location">
                      {hotel.location}
                    </p>
                    <div className="flex items-center space-x-3">
                      <span className="bg-gradient-to-r from-nomade-green/10 to-nomade-light-green/10 text-nomade-green px-3 py-1 rounded-full text-xs font-semibold border border-nomade-green/20">
                        {hotel.status}
                      </span>
                      <span className="text-secondary">
                        {hotel.rooms} rooms
                      </span>
                    </div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="flex items-center space-x-8">
                  {/* Occupancy Badge */}
                  <div className="text-center">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-nomade-green via-nomade-light-green to-nomade-green p-1 shadow-lg">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                          <span className="text-metric-medium">
                            {hotel.occupancy}%
                          </span>
                        </div>
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-br from-nomade-green to-nomade-light-green rounded-full opacity-20 blur-sm"></div>
                    </div>
                    <p className="text-metric-label mt-2">OCCUPANCY</p>
                  </div>

                  {/* Financial Metrics */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-nomade-terracotta/10 to-nomade-orange-brown/10 rounded-2xl p-4 border border-nomade-terracotta/20">
                        <div className="text-metric-medium text-nomade-terracotta">
                          €{hotel.revpar}
                        </div>
                        <p className="text-metric-label mt-1">REVPAR</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-nomade-sage-green/10 to-nomade-teal/10 rounded-2xl p-4 border border-nomade-sage-green/20">
                        <div className="text-metric-medium text-nomade-sage-green">
                          €{hotel.adr}
                        </div>
                        <p className="text-metric-label mt-1">ADR</p>
                      </div>
                    </div>
                  </div>

                  {/* Portfolio Value */}
                  <div className="text-right">
                    <div className="text-financial-large">
                      {hotel.value}
                    </div>
                    <p className="text-metric-label mt-1">PORTFOLIO VALUE</p>
                  </div>
                </div>
              </div>

              {/* Secondary Metrics */}
              <div className="mt-6 pt-6 border-t border-nomade-tan/20">
                <div className="flex items-center justify-between">
                  <div className="text-body-small">
                    <span className="text-metric-small">{hotel.nights.toLocaleString()}</span> nights booked this month
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-nomade-green/5 to-nomade-light-green/5 px-4 py-2 rounded-xl border border-nomade-green/10">
                      <span className="text-button text-nomade-green">View Analytics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Portfolio Summary */}
          <div className="bg-gradient-to-br from-nomade-green via-nomade-light-green to-nomade-green rounded-3xl p-10 text-white shadow-2xl border border-nomade-green/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-section-title text-white mb-2">
                    Portfolio Excellence
                  </h3>
                  <p className="text-body-elegant text-white/90">
                    Luxury hospitality leadership across three destinations
                  </p>
                </div>
                <div className="flex items-center space-x-12">
                  <div className="text-center">
                    <div className="text-metric-large text-white">365</div>
                    <p className="text-metric-label text-white/80">TOTAL ROOMS</p>
                  </div>
                  <div className="text-center">
                    <div className="text-metric-large text-white">89.6%</div>
                    <p className="text-metric-label text-white/80">AVG OCCUPANCY</p>
                  </div>
                  <div className="text-center">
                    <div className="text-financial-large">
                      €98.7M
                    </div>
                    <p className="text-metric-label text-white/80">TOTAL VALUE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
          {/* Daily Revenue */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-subsection-title">Daily Revenue</h3>
                <p className="text-body-small">Revenue breakdown by category</p>
              </div>
              <div className="flex space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-nomade-green rounded-full"></div>
                  <span className="text-gray-600">Rooms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-600">F&B</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="roomsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#5d681d" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#5d681d" stopOpacity={0.05}/>
                  </linearGradient>
                  <linearGradient id="fbGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis dataKey="date" stroke="#9ca3af" fontSize={12} />
                <YAxis stroke="#9ca3af" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="rooms" stackId="1" stroke="#5d681d" strokeWidth={2} fill="url(#roomsGradient)" />
                <Area type="monotone" dataKey="fb" stackId="1" stroke="#f97316" strokeWidth={2} fill="url(#fbGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Performance Metrics */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-subsection-title">Performance</h3>
                <p className="text-body-small">ADR & Occupancy trends</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis dataKey="date" stroke="#9ca3af" fontSize={12} />
                <YAxis yAxisId="left" stroke="#9ca3af" fontSize={12} />
                <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Bar yAxisId="left" dataKey="occupancy" fill="#5d681d" radius={[4, 4, 0, 0]} />
                <Line yAxisId="right" type="monotone" dataKey="adr" stroke="#f97316" strokeWidth={3} dot={{ r: 4, fill: "#f97316" }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Booking Source */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 rounded-lg p-2">
                <PieChartIcon className="text-blue-600" size={20} />
              </div>
              <div>
                <h3 className="text-subsection-title">Booking Sources</h3>
                <p className="text-body-small">Distribution by channel</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mb-4">
                <ResponsiveContainer width="100%" height={180}>
                  <PieChart>
                    <Pie
                      data={bookingSourceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={70}
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
              <div className="grid grid-cols-2 gap-2 text-xs">
                {bookingSourceData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}></div>
                    <span className="text-gray-700 font-medium truncate">{item.name}</span>
                    <span className="text-gray-500 font-semibold">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Weekly Occupancy */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-100 rounded-lg p-2">
                <Calendar className="text-green-600" size={20} />
              </div>
              <div>
                <h3 className="text-subsection-title">Weekly Occupancy</h3>
                <p className="text-body-small">Daily performance</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={weeklyOccupancy}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis dataKey="day" stroke="#9ca3af" fontSize={12} />
                <YAxis stroke="#9ca3af" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="rate" fill="#5d681d" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Monthly Trends */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-purple-100 rounded-lg p-2">
                <TrendingUp className="text-purple-600" size={20} />
              </div>
              <div>
                <h3 className="text-subsection-title">Monthly Trends</h3>
                <p className="text-body-small">Revenue progression</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={monthlyTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
                <YAxis stroke="#9ca3af" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#8b5cf6" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: "#8b5cf6" }}
                  activeDot={{ r: 6, fill: "#8b5cf6" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;