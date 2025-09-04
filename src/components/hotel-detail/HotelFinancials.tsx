import React, { useState } from 'react';
import { Download, TrendingUp, TrendingDown, DollarSign, BarChart3, Calendar } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface HotelFinancialsProps {
  hotel: any;
}

const HotelFinancials: React.FC<HotelFinancialsProps> = ({ hotel }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('April 2024');

  // Monthly P&L Data
  const monthlyPL = {
    adr: { real: 300, budget: 288, variance: 12, ly: 291, lyVariance: 8 },
    rooms: { real: 2424, budget: 2455, variance: -31, ly: 2339, lyVariance: 85 },
    occupancy: { real: 87, budget: 88, variance: -1, ly: 84, lyVariance: 3 },
    revpar: { real: 261, budget: 253, variance: 7, ly: 244, lyVariance: 16 },
    goppar: { real: 194, budget: 141, variance: 53, ly: 142, lyVariance: 52 }
  };

  // Revenue Structure
  const revenueStructure = [
    { category: 'Rooms Revenue', real: 727, budget: 707, variance: 20, ly: 682, lyVariance: 45 },
    { category: 'F&B Revenue', real: 268, budget: 264, variance: 4, ly: 318, lyVariance: -50 },
    { category: 'Other Revenue', real: 1, budget: 7, variance: -6, ly: 10, lyVariance: -9 },
    { category: 'Total Revenue', real: 1006, budget: 979, variance: 27, ly: 1010, lyVariance: -4 }
  ];

  // Operating Expenses
  const operatingExpenses = [
    { category: 'Rooms OPEX', real: -218, budget: -203, variance: -14, ly: -201, lyVariance: -17 },
    { category: 'F&B OPEX', real: -253, budget: -242, variance: -11, ly: -281, lyVariance: 28 },
    { category: 'Other OPEX', real: -1, budget: -4, variance: 3, ly: -6, lyVariance: 5 },
    { category: 'Total OPEX', real: -471, budget: -449, variance: -23, ly: -488, lyVariance: 17 }
  ];

  // Key Performance Indicators
  const kpis = [
    { label: 'ADR', value: '€485', change: '+8%', icon: DollarSign, color: 'bg-nomade-green' },
    { label: 'Occupancy', value: '92%', change: '+5%', icon: TrendingUp, color: 'bg-nomade-terracotta' },
    { label: 'RevPAR', value: '€446', change: '+13%', icon: BarChart3, color: 'bg-nomade-sage-green' },
    { label: 'GOP', value: '€680K', change: '+18%', icon: Calendar, color: 'bg-nomade-blue' }
  ];

  // Monthly Forecast Data
  const forecastData = [
    { month: 'Jan', rooms: 429, fb: 217, total: 665, gop: 125 },
    { month: 'Feb', rooms: 692, fb: 232, total: 766, gop: 234 },
    { month: 'Mar', rooms: 705, fb: 291, total: 1112, gop: 379 },
    { month: 'Apr', rooms: 727, fb: 268, total: 1006, gop: 403 },
    { month: 'May', rooms: 783, fb: 286, total: 1003, gop: 477 },
    { month: 'Jun', rooms: 733, fb: 290, total: 1027, gop: 374 }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg">
          <p className="text-gray-900 font-medium mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-gray-600 text-sm">
              <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }}></span>
              <span className="font-medium">{entry.name}:</span> €{entry.value?.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-8">
      {/* Header with Period Selector */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-nomade-gray/10">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-nomade-dark-brown">Monthly P&L</h2>
          <div className="flex items-center space-x-4">
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="bg-white border border-nomade-gray/30 rounded-xl px-4 py-2 text-nomade-dark-brown focus:ring-2 focus:ring-nomade-green"
            >
              <option value="April 2024">April 2024</option>
              <option value="March 2024">March 2024</option>
              <option value="February 2024">February 2024</option>
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
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-nomade-gray/10">
              <div className="flex items-center justify-between mb-4">
                <div className={`${kpi.color} rounded-xl p-3`}>
                  <Icon className="text-white" size={24} />
                </div>
                <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
                  kpi.change.startsWith('+') 
                    ? 'text-green-600 bg-green-100' 
                    : 'text-red-600 bg-red-100'
                }`}>
                  {kpi.change}
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-nomade-dark-brown">{kpi.value}</h3>
                <p className="text-sm text-nomade-gray font-medium">{kpi.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed P&L Table */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-nomade-gray/10">
        <h3 className="text-2xl font-bold text-nomade-dark-brown mb-6">Detailed P&L Analysis</h3>
        
        {/* Key Metrics */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-nomade-dark-brown mb-4">Key Performance Metrics</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-nomade-gray/20">
                  <th className="text-left py-3 px-4 font-semibold text-nomade-dark-brown">Metric</th>
                  <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">Real 24</th>
                  <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">Budget 24</th>
                  <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">Var</th>
                  <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">%</th>
                  <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">LY</th>
                  <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">Var</th>
                  <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">%</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-nomade-gray/10">
                  <td className="py-3 px-4 font-medium text-nomade-dark-brown">ADR</td>
                  <td className="py-3 px-4 text-right text-nomade-dark-brown">€{monthlyPL.adr.real}</td>
                  <td className="py-3 px-4 text-right text-nomade-dark-brown">€{monthlyPL.adr.budget}</td>
                  <td className="py-3 px-4 text-right text-nomade-green">€{monthlyPL.adr.variance}</td>
                  <td className="py-3 px-4 text-right text-nomade-green">4%</td>
                  <td className="py-3 px-4 text-right text-nomade-dark-brown">€{monthlyPL.adr.ly}</td>
                  <td className="py-3 px-4 text-right text-nomade-green">€{monthlyPL.adr.lyVariance}</td>
                  <td className="py-3 px-4 text-right text-nomade-green">3%</td>
                </tr>
                <tr className="border-b border-nomade-gray/10">
                  <td className="py-3 px-4 font-medium text-nomade-dark-brown">Rooms</td>
                  <td className="py-3 px-4 text-right text-nomade-dark-brown">{monthlyPL.rooms.real}</td>
                  <td className="py-3 px-4 text-right text-nomade-dark-brown">{monthlyPL.rooms.budget}</td>
                  <td className="py-3 px-4 text-right text-red-600">{monthlyPL.rooms.variance}</td>
                  <td className="py-3 px-4 text-right text-red-600">-1%</td>
                  <td className="py-3 px-4 text-right text-nomade-dark-brown">{monthlyPL.rooms.ly}</td>
                  <td className="py-3 px-4 text-right text-nomade-green">{monthlyPL.rooms.lyVariance}</td>
                  <td className="py-3 px-4 text-right text-nomade-green">4%</td>
                </tr>
                <tr className="border-b border-nomade-gray/10">
                  <td className="py-3 px-4 font-medium text-nomade-dark-brown">Occupancy (%)</td>
                  <td className="py-3 px-4 text-right text-nomade-dark-brown">{monthlyPL.occupancy.real}%</td>
                  <td className="py-3 px-4 text-right text-nomade-dark-brown">{monthlyPL.occupancy.budget}%</td>
                  <td className="py-3 px-4 text-right text-red-600">{monthlyPL.occupancy.variance}pp</td>
                  <td className="py-3 px-4 text-right text-red-600">-1%</td>
                  <td className="py-3 px-4 text-right text-nomade-dark-brown">{monthlyPL.occupancy.ly}%</td>
                  <td className="py-3 px-4 text-right text-nomade-green">{monthlyPL.occupancy.lyVariance}pp</td>
                  <td className="py-3 px-4 text-right text-nomade-green">4%</td>
                </tr>
                <tr className="border-b border-nomade-gray/10">
                  <td className="py-3 px-4 font-medium text-nomade-dark-brown">RevPAR</td>
                  <td className="py-3 px-4 text-right text-nomade-dark-brown">€{monthlyPL.revpar.real}</td>
                  <td className="py-3 px-4 text-right text-nomade-dark-brown">€{monthlyPL.revpar.budget}</td>
                  <td className="py-3 px-4 text-right text-nomade-green">€{monthlyPL.revpar.variance}</td>
                  <td className="py-3 px-4 text-right text-nomade-green">3%</td>
                  <td className="py-3 px-4 text-right text-nomade-dark-brown">€{monthlyPL.revpar.ly}</td>
                  <td className="py-3 px-4 text-right text-nomade-green">€{monthlyPL.revpar.lyVariance}</td>
                  <td className="py-3 px-4 text-right text-nomade-green">7%</td>
                </tr>
                <tr className="bg-nomade-green/5">
                  <td className="py-3 px-4 font-bold text-nomade-dark-brown">GOPPAR (€)</td>
                  <td className="py-3 px-4 text-right font-bold text-nomade-green">€{monthlyPL.goppar.real}</td>
                  <td className="py-3 px-4 text-right text-nomade-dark-brown">€{monthlyPL.goppar.budget}</td>
                  <td className="py-3 px-4 text-right font-bold text-nomade-green">€{monthlyPL.goppar.variance}</td>
                  <td className="py-3 px-4 text-right font-bold text-nomade-green">38%</td>
                  <td className="py-3 px-4 text-right text-nomade-dark-brown">€{monthlyPL.goppar.ly}</td>
                  <td className="py-3 px-4 text-right font-bold text-nomade-green">€{monthlyPL.goppar.lyVariance}</td>
                  <td className="py-3 px-4 text-right font-bold text-nomade-green">37%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Revenue Structure */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-nomade-dark-brown mb-4">Revenue Structure (€000)</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-nomade-gray/20">
                  <th className="text-left py-3 px-4 font-semibold text-nomade-dark-brown">Category</th>
                  <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">Real 24</th>
                  <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">Budget 24</th>
                  <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">Var</th>
                  <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">%</th>
                  <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">LY</th>
                  <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">Var</th>
                  <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">%</th>
                </tr>
              </thead>
              <tbody>
                {revenueStructure.map((item, index) => (
                  <tr key={index} className={`border-b border-nomade-gray/10 ${item.category === 'Total Revenue' ? 'bg-nomade-green/5 font-semibold' : ''}`}>
                    <td className="py-3 px-4 font-medium text-nomade-dark-brown">{item.category}</td>
                    <td className="py-3 px-4 text-right text-nomade-dark-brown">{item.real}</td>
                    <td className="py-3 px-4 text-right text-nomade-dark-brown">{item.budget}</td>
                    <td className={`py-3 px-4 text-right ${item.variance >= 0 ? 'text-nomade-green' : 'text-red-600'}`}>
                      {item.variance >= 0 ? '+' : ''}{item.variance}
                    </td>
                    <td className={`py-3 px-4 text-right ${item.variance >= 0 ? 'text-nomade-green' : 'text-red-600'}`}>
                      {Math.round((item.variance / item.budget) * 100)}%
                    </td>
                    <td className="py-3 px-4 text-right text-nomade-dark-brown">{item.ly}</td>
                    <td className={`py-3 px-4 text-right ${item.lyVariance >= 0 ? 'text-nomade-green' : 'text-red-600'}`}>
                      {item.lyVariance >= 0 ? '+' : ''}{item.lyVariance}
                    </td>
                    <td className={`py-3 px-4 text-right ${item.lyVariance >= 0 ? 'text-nomade-green' : 'text-red-600'}`}>
                      {Math.round((item.lyVariance / item.ly) * 100)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-nomade-gray/10">
          <h3 className="text-lg font-semibold text-nomade-dark-brown mb-4">Monthly Revenue Forecast</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={forecastData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
              <YAxis stroke="#9ca3af" fontSize={12} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="rooms" fill="#5d681d" name="Rooms" />
              <Bar dataKey="fb" fill="#ee735a" name="F&B" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-nomade-gray/10">
          <h3 className="text-lg font-semibold text-nomade-dark-brown mb-4">GOP Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={forecastData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
              <YAxis stroke="#9ca3af" fontSize={12} />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="gop" 
                stroke="#5d681d" 
                strokeWidth={3} 
                dot={{ r: 4, fill: "#5d681d" }}
                name="GOP"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Commentary */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-nomade-gray/10">
        <h3 className="text-2xl font-bold text-nomade-dark-brown mb-6">Performance Commentary</h3>
        <div className="space-y-4 text-nomade-gray">
          <p><strong>ADR:</strong> The Hotel achieved €300, €12 over budget, in line with forecast and €9 over last year.</p>
          <p><strong>OCC:</strong> 87%, 1% below budget, forecast and 3% over last year.</p>
          <p><strong>REVPAR:</strong> The Hotel has reached €261, in line with forecast, €8 over budget and €17 over last year.</p>
          <p><strong>ROOM REVENUE & PROFIT:</strong> Total room revenue €727K, €20K over budget and €10K over forecast. Rooms profit is €509K (70%), €5K over budget and €28K over last year.</p>
          <p><strong>F&B REVENUE & PROFIT:</strong> Total F&B revenue €268K, €4K over budget. Profit margin is 6%, €15K vs €23K budget. In April the average daily revenue was €8,933 vs €8,800 budget.</p>
          <p><strong>GOP:</strong> The Hotel achieved €403K (40%), €9K over budget and €12K over last year.</p>
        </div>
      </div>
    </div>
  );
};

export default HotelFinancials;