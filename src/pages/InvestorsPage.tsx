import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Mail, Phone, MapPin, Eye, TrendingUp, Building2 } from 'lucide-react';

const InvestorsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const investors = [
    {
      id: 1,
      name: 'Real Estate Bullish Fund',
      type: 'Institutional',|
      avatar: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'bullishfund@realestate.com',
      phone: '593040331',
      location: 'Manhattan, NYC',
      totalInvestment: '€129.0M',
      joinedDate: '5 Jul 2025',
      duration: '1 months',
      projects: ['Nomade Tulum', 'Nomade Holbox'],
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
      projects: ['Nomade Tulum'],
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
      projects: ['Nomade Tulum', 'Nomade Ibiza'],
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
    <div className="px-8 py-8 max-w-7xl mx-auto" style={{ backgroundColor: '#F7F5F0' }}>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-nomade-dark-brown/95 backdrop-blur-sm rounded-2xl p-6 border border-nomade-tan/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-3">
              <div className="bg-nomade-tan/20 backdrop-blur-sm rounded-xl p-3 border border-nomade-tan/30">
                <TrendingUp className="text-nomade-tan" size={24} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs font-serif tracking-[0.2em] uppercase text-nomade-tan/80 font-medium">
                ACTIVE INVESTORS
              </div>
              <div className="text-3xl font-bold text-nomade-off-white tracking-tight">
                {investors.length}
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-nomade-dark-brown/95 backdrop-blur-sm rounded-2xl p-6 border border-nomade-tan/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-3">
              <div className="bg-nomade-tan/20 backdrop-blur-sm rounded-xl p-3 border border-nomade-tan/30">
                <TrendingUp className="text-nomade-tan" size={24} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs font-serif tracking-[0.2em] uppercase text-nomade-tan/80 font-medium">
                TOTAL INVESTMENTS
              </div>
              <div className="text-3xl font-bold text-nomade-off-white tracking-tight">
                €{totalInvestment.toFixed(1)}M
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-nomade-dark-brown/95 backdrop-blur-sm rounded-2xl p-6 border border-nomade-tan/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-3">
              <div className="bg-nomade-tan/20 backdrop-blur-sm rounded-xl p-3 border border-nomade-tan/30">
                <Building2 className="text-nomade-tan" size={24} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs font-serif tracking-[0.2em] uppercase text-nomade-tan/80 font-medium">
                AVG. PROPERTIES/INVESTOR
              </div>
              <div className="text-3xl font-bold text-nomade-off-white tracking-tight">
                2.2
              </div>
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
            className="w-full pl-12 pr-4 py-4 bg-white/60 backdrop-blur-sm border border-stone-200 rounded-2xl focus:ring-2 focus:ring-yellow-600/30 focus:border-yellow-600/50 transition-all duration-500 text-stone-800 placeholder:text-stone-400 shadow-inner"
          />
        </div>
        
        <select className="bg-white/60 backdrop-blur-sm border border-stone-200 rounded-2xl px-6 py-4 text-stone-800 focus:ring-2 focus:ring-yellow-600/30 shadow-inner">
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
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border border-stone-200"
          >
            {/* Investor Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <img
                  src={investor.avatar}
                  alt={investor.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-stone-300"
                />
                <div>
                  <h3 className="text-heading-lg text-stone-800">{investor.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      investor.type === 'Institutional' 
                        ? 'bg-stone-100 text-stone-700' 
                        : 'bg-stone-100 text-stone-700'
                    }`}>
                      {investor.type}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-badge text-nomade-green flex items-center space-x-1">
                  <TrendingUp size={14} />
                  <span>{investor.performance}</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-6 text-stone-600">
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span className="text-body-sm">{investor.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span className="text-body-sm">{investor.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} />
                <span className="text-body-sm">{investor.location}</span>
              </div>
            </div>

            {/* Investment Details */}
            <div className="bg-stone-50 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-label-sm text-stone-600">TOTAL INVESTMENT</span>
                <span className="text-metric-md text-stone-800">{investor.totalInvestment}</span>
              </div>
              <div className="flex items-center justify-between text-body-sm text-stone-600">
                <span>Joined {investor.joinedDate}</span>
                <span>{investor.duration}</span>
              </div>
            </div>

            {/* Invested Projects */}
            <div className="mb-6">
              <h4 className="text-label-sm mb-3 text-stone-700">INVESTED PROJECTS</h4>
              <div className="space-y-2">
                {investor.projects.map((project, index) => (
                  <div key={index} className="text-body-sm text-stone-700 bg-stone-100 px-3 py-2 rounded-lg">
                    {project}
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <Link 
              to={`/investors/${investor.id}`}
              className="w-full bg-nomade-green text-white py-3 rounded-xl hover:bg-nomade-light-green transition-all duration-300 text-button flex items-center justify-center space-x-2 shadow-lg hover:shadow-nomade-green/25"
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