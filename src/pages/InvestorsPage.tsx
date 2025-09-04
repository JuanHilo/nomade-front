import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Mail, Phone, MapPin, Eye, TrendingUp, Building2 } from 'lucide-react';

const InvestorsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const investors = [
    {
      id: 1,
      name: 'Real Estate Bullish Fund',
      type: 'Institutional',
      avatar: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'bullishfund@realestate.com',
      phone: '593040331',
      location: 'Manhattan, NYC',
      totalInvestment: '€129.0M',
      joinedDate: '5 Jul 2025',
      duration: '1 months',
      projects: ['El 53 de Velázquez', 'AC Hotels'],
      performance: '+12.4%'
    },
    {
      id: 2,
      name: 'Pedro Negro',
      type: 'Individual',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'pedronegro@gmail.com',
      phone: '632944821',
      location: 'Madrid',
      totalInvestment: '€29.0M',
      joinedDate: '4 Jul 2025',
      duration: '2 months',
      projects: ['El 53 de Velázquez'],
      performance: '+8.7%'
    },
    {
      id: 3,
      name: 'Christine Lagarde',
      type: 'Individual',
      avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'christine@centralbank.eu',
      phone: '693203482',
      location: 'Brussels, Belgium',
      totalInvestment: '€157.0M',
      joinedDate: '5 Jul 2025',
      duration: '1 months',
      projects: ['El 53 de Velázquez', 'Hermanos Becquer'],
      performance: '+15.2%'
    },
    {
      id: 4,
      name: 'Goldman Sachs RE Fund',
      type: 'Institutional',
      avatar: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'realestate@gs.com',
      phone: '212-902-1000',
      location: 'New York, NY',
      totalInvestment: '€245.0M',
      joinedDate: '12 Mar 2025',
      duration: '5 months',
      projects: ['NOMADE Punta Mita', 'NOMADE New York'],
      performance: '+18.9%'
    },
    {
      id: 5,
      name: 'BlackRock Hospitality',
      type: 'Institutional',
      avatar: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'hospitality@blackrock.com',
      phone: '212-810-5300',
      location: 'New York, NY',
      totalInvestment: '€380.0M',
      joinedDate: '8 Jan 2025',
      duration: '7 months',
      projects: ['NOMADE Todos Santos', 'NOMADE Madrid', 'NOMADE Ibiza'],
      performance: '+22.1%'
    }
  ];

  const filteredInvestors = investors.filter(investor =>
    investor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    investor.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    investor.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalInvestment = investors.reduce((sum, investor) => {
    return sum + parseFloat(investor.totalInvestment.replace('€', '').replace('M', ''));
  }, 0);

  return (
    <div className="px-8 py-8 max-w-7xl mx-auto">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-nomade-green to-nomade-light-green text-white rounded-2xl p-6 shadow-xl">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-white/20 rounded-xl p-3">
              <TrendingUp size={24} />
            </div>
            <div>
              <h3 className="text-metric-medium text-white">{investors.length}</h3>
              <p className="text-body-small text-white/80">Active Investors</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-nomade-terracotta to-nomade-orange-brown text-white rounded-2xl p-6 shadow-xl">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-white/20 rounded-xl p-3">
              <TrendingUp size={24} />
            </div>
            <div>
              <h3 className="text-financial-medium text-white">€{totalInvestment.toFixed(1)}M</h3>
              <p className="text-body-small text-white/80">Total Investments</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-nomade-sage-green to-nomade-teal text-white rounded-2xl p-6 shadow-xl">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-white/20 rounded-xl p-3">
              <Building2 size={24} />
            </div>
            <div>
              <h3 className="text-metric-medium text-white">2.2</h3>
              <p className="text-body-small text-white/80">Avg. Properties/Investor</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-nomade-gray" size={20} />
          <input
            type="text"
            placeholder="Search investors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white border border-nomade-gray/30 rounded-xl focus:ring-2 focus:ring-nomade-green focus:border-transparent transition-all duration-200 text-nomade-dark-brown"
          />
        </div>
        
        <select className="bg-white border border-nomade-gray/30 rounded-xl px-6 py-4 text-nomade-dark-brown focus:ring-2 focus:ring-nomade-green">
          <option>All My Projects</option>
          <option>NOMADE Punta Mita</option>
          <option>NOMADE Todos Santos</option>
          <option>NOMADE New York</option>
          <option>NOMADE Madrid</option>
          <option>NOMADE Ibiza</option>
        </select>
      </div>

      {/* Investors Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredInvestors.map((investor) => (
          <div
            key={investor.id}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border border-nomade-gray/10"
          >
            {/* Investor Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <img
                  src={investor.avatar}
                  alt={investor.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-nomade-green/20"
                />
                <div>
                  <h3 className="text-card-title">{investor.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      investor.type === 'Institutional' 
                        ? 'bg-nomade-blue/10 text-nomade-blue' 
                        : 'bg-nomade-terracotta/10 text-nomade-terracotta'
                    }`}>
                      {investor.type}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-badge text-green-600 flex items-center space-x-1">
                  <TrendingUp size={14} />
                  <span>{investor.performance}</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-nomade-gray">
                <Mail size={16} />
                <span className="text-body-small">{investor.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-nomade-gray">
                <Phone size={16} />
                <span className="text-body-small">{investor.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-nomade-gray">
                <MapPin size={16} />
                <span className="text-body-small">{investor.location}</span>
              </div>
            </div>

            {/* Investment Details */}
            <div className="bg-nomade-gray/5 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-metric-label">TOTAL INVESTMENT</span>
                <span className="text-metric-medium">{investor.totalInvestment}</span>
              </div>
              <div className="flex items-center justify-between text-body-small">
                <span>Joined {investor.joinedDate}</span>
                <span>{investor.duration}</span>
              </div>
            </div>

            {/* Invested Projects */}
            <div className="mb-6">
              <h4 className="text-metric-label mb-3">INVESTED PROJECTS</h4>
              <div className="space-y-2">
                {investor.projects.map((project, index) => (
                  <div key={index} className="text-body-small text-nomade-dark-brown bg-nomade-green/5 px-3 py-2 rounded-lg">
                    {project}
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <Link 
              to={`/investors/${investor.id}`}
              className="w-full bg-nomade-green text-white py-3 rounded-xl hover:bg-nomade-light-green transition-all duration-300 font-semibold flex items-center justify-center space-x-2 shadow-lg"
            >
              <Eye size={18} />
              <span>View Full Profile</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestorsPage;