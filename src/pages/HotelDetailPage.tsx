import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, Filter, Calendar, TrendingUp, Building2, Users, DollarSign } from 'lucide-react';
import HotelOverview from '../components/hotel-detail/HotelOverview';
import HotelCashflow from '../components/hotel-detail/HotelCashflow';
import HotelFinancials from '../components/hotel-detail/HotelFinancials';
import HotelDocuments from '../components/hotel-detail/HotelDocuments';
import HotelInvestments from '../components/hotel-detail/HotelInvestments';
import HotelOccupancy from '../components/hotel-detail/HotelOccupancy';

const HotelDetailPage: React.FC = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock hotel data - in real app this would come from API
  const hotel = {
    id: 1,
    name: 'NOMADE Tulum',
    location: 'Carretera Tulum-Boca Paila Km 10, 77780 Tulum, Mexico',
    image: '/nomadetulum.jpeg',
    rating: 5,
    keys: 48,
    brand: 'NOMADE Hotels',
    contract: 'Management Agreement',
    openingDate: 'December 1, 2017',
    constructionArea: '12,000 m²',
    floors: 2
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Building2 },
    { id: 'occupancy', label: 'Occupancy', icon: Users },
    { id: 'cashflow', label: 'Cash Flow', icon: TrendingUp },
    { id: 'financials', label: 'Financials', icon: DollarSign },
    { id: 'documents', label: 'Documents', icon: Calendar },
    { id: 'investments', label: 'Investments', icon: Users }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <HotelOverview hotel={hotel} />;
      case 'occupancy':
        return <HotelOccupancy hotel={hotel} />;
      case 'cashflow':
        return <HotelCashflow hotel={hotel} />;
      case 'financials':
        return <HotelFinancials hotel={hotel} />;
      case 'documents':
        return <HotelDocuments hotel={hotel} />;
      case 'investments':
        return <HotelInvestments hotel={hotel} />;
      default:
        return <HotelOverview hotel={hotel} />;
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F5F0' }}>
      {/* Header */}
      <div className="bg-nomade-dark-brown/95 backdrop-blur-sm border-b border-nomade-tan/20">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="flex items-center justify-between">
            <div className="space-y-4">
              <Link 
                to="/hotels"
                className="inline-flex items-center space-x-2 text-nomade-off-white/80 hover:text-nomade-off-white transition-colors mb-4"
              >
                <ArrowLeft size={20} />
                <span>Back to Hotels</span>
              </Link>
              <h1 className="text-4xl font-bold text-nomade-off-white">
                {hotel.name}
              </h1>
              <p className="text-lg text-nomade-off-white/90">
                {hotel.location}
              </p>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="text-right">
                <div className="text-3xl font-bold text-nomade-tan">{hotel.keys}</div>
                <div className="text-sm text-nomade-off-white/80">Keys</div>
              </div>
              
              <div className="w-px h-16 bg-nomade-off-white/30"></div>
              
              <div className="text-right">
                <div className="text-3xl font-bold text-nomade-tan">87%</div>
                <div className="text-sm text-nomade-off-white/80">Occupancy</div>
              </div>
              
              <button className="bg-nomade-tan/20 text-nomade-off-white px-8 py-4 rounded-xl hover:bg-nomade-tan/30 transition-all duration-300 font-semibold flex items-center space-x-2 border border-nomade-tan/30">
                <Download size={20} />
                <span>Export Report</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-8 max-w-7xl mx-auto" style={{ backgroundColor: '#F7F5F0' }}>
        {/* Tab Navigation */}
        <div className="flex space-x-2 mb-8 bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-stone-200">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-nomade-dark-brown text-nomade-off-white shadow-lg'
                    : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                <Icon size={20} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="min-h-screen">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default HotelDetailPage;