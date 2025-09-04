import React, { useState } from 'react';
import { Search, Plus, TrendingUp, Users, DollarSign, Eye, Mail, Phone } from 'lucide-react';

interface HotelInvestmentsProps {
  hotel: any;
}

const HotelInvestments: React.FC<HotelInvestmentsProps> = ({ hotel }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock investment data
  const investmentStats = [
    { label: 'Total Investors', value: '0', icon: Users, color: 'bg-nomade-green' },
    { label: 'Equity Allocated', value: '0.0%', icon: TrendingUp, color: 'bg-nomade-terracotta' },
    { label: 'Total Invested', value: '€0.0M', icon: DollarSign, color: 'bg-nomade-sage-green' },
    { label: 'Available Equity', value: '100.0%', icon: TrendingUp, color: 'bg-nomade-blue' }
  ];

  const investors = [
    // Empty for now - would be populated with actual investor data
  ];

  return (
    <div className="space-y-8">
      {/* Investment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {investmentStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-nomade-gray/10">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} rounded-xl p-3`}>
                  <Icon className="text-white" size={24} />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-nomade-dark-brown">{stat.value}</h3>
                <p className="text-sm text-nomade-gray font-medium">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Investment Management Header */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-nomade-gray/10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-nomade-dark-brown">Investment Manager</h2>
            <p className="text-nomade-gray mt-2">Manage investor relationships for this project</p>
          </div>
          <button className="bg-nomade-green text-white px-6 py-3 rounded-xl hover:bg-nomade-light-green transition-all duration-300 font-semibold flex items-center space-x-2 shadow-lg">
            <Plus size={20} />
            <span>Add Investment</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-nomade-gray" size={20} />
          <input
            type="text"
            placeholder="Search investments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-nomade-gray/30 rounded-xl focus:ring-2 focus:ring-nomade-green focus:border-transparent transition-all duration-200 text-nomade-dark-brown"
          />
        </div>

        {/* Investment Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-nomade-gray/20">
                <th className="text-left py-3 px-4 font-semibold text-nomade-dark-brown">Investor</th>
                <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">Equity %</th>
                <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">Investment</th>
                <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">Expected ROI</th>
                <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">Date</th>
                <th className="text-center py-3 px-4 font-semibold text-nomade-dark-brown">Actions</th>
              </tr>
            </thead>
            <tbody>
              {investors.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-12">
                    <div className="space-y-4">
                      <Users className="mx-auto text-nomade-gray" size={48} />
                      <div>
                        <h3 className="text-lg font-semibold text-nomade-dark-brown">No investors yet</h3>
                        <p className="text-nomade-gray">Start by adding your first investor to this project.</p>
                      </div>
                      <button className="bg-nomade-green text-white px-6 py-3 rounded-xl hover:bg-nomade-light-green transition-all duration-300 font-semibold">
                        Add First Investor
                      </button>
                    </div>
                  </td>
                </tr>
              ) : (
                investors.map((investor, index) => (
                  <tr key={index} className="border-b border-nomade-gray/10 hover:bg-nomade-gray/5">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={investor.avatar}
                          alt={investor.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-medium text-nomade-dark-brown">{investor.name}</div>
                          <div className="text-sm text-nomade-gray">{investor.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right font-semibold text-nomade-dark-brown">
                      {investor.equityPercent}%
                    </td>
                    <td className="py-3 px-4 text-right font-semibold text-nomade-dark-brown">
                      €{investor.investment}
                    </td>
                    <td className="py-3 px-4 text-right text-nomade-green font-semibold">
                      {investor.expectedROI}%
                    </td>
                    <td className="py-3 px-4 text-right text-nomade-gray">
                      {investor.date}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <button className="bg-nomade-green text-white p-2 rounded-lg hover:bg-nomade-light-green transition-all duration-300">
                          <Eye size={16} />
                        </button>
                        <button className="bg-nomade-terracotta text-white p-2 rounded-lg hover:bg-nomade-orange-brown transition-all duration-300">
                          <Mail size={16} />
                        </button>
                        <button className="bg-nomade-sage-green text-white p-2 rounded-lg hover:bg-nomade-teal transition-all duration-300">
                          <Phone size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Equity Structure */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-nomade-gray/10">
        <h3 className="text-2xl font-bold text-nomade-dark-brown mb-6">Equity Structure</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-nomade-dark-brown mb-4">Available Equity</h4>
            <div className="space-y-4">
              <div className="bg-nomade-green/10 rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-nomade-dark-brown">Total Equity Available</span>
                  <span className="text-nomade-green font-bold">100%</span>
                </div>
                <div className="bg-nomade-gray/20 rounded-full h-3">
                  <div className="bg-nomade-green rounded-full h-3 w-full transition-all duration-500"></div>
                </div>
                <div className="mt-2 text-sm text-nomade-gray">
                  Ready for investor allocation
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-nomade-dark-brown mb-4">Investment Opportunities</h4>
            <div className="space-y-3 text-sm text-nomade-gray">
              <p>This property offers excellent investment opportunities with:</p>
              <ul className="space-y-1 ml-4">
                <li>• Prime beachfront location in Tulum's hotel zone</li>
                <li>• Established NOMADE Hotels brand management</li>
                <li>• Strong operational performance metrics</li>
                <li>• Projected ROI of 15-18% annually</li>
                <li>• 25-year management agreement in place</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelInvestments;