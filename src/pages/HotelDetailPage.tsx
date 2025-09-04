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
    image: 'https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=1200',
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
    <div className="min-h-screen bg-nomade-off-white">
      {/* Header */}
      <div className="relative overflow-hidden" style={{ backgroundImage: 'url(/bg_pattern1.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
          <div className="flex items-center justify-between">
            <div className="space-y-4">
              <Link 
                to="/hotels"
                className="inline-flex items-center space-x-2 text-nomade-off-white/80 hover:text-nomade-off-white transition-colors mb-4"
              >
                <ArrowLeft size={20} />
                <span>Back to Hotels</span>
              </Link>
              <h1 className="text-6xl font-bold text-nomade-off-white tracking-tight">
                {hotel.name}
              </h1>
              <p className="text-xl text-nomade-off-white/90 font-medium">
                {hotel.location}
              </p>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="text-right">
                <div className="text-3xl font-bold text-nomade-green">{hotel.keys}</div>
                <div className="text-sm text-nomade-off-white/80 font-medium">Keys</div>
              </div>
              
              <div className="w-px h-16 bg-nomade-off-white/30"></div>
              
              <div className="text-right">
                <div className="text-3xl font-bold text-nomade-terracotta">87%</div>
                <div className="text-sm text-nomade-off-white/80 font-medium">Occupancy</div>
              </div>
              
              <button className="bg-nomade-green text-nomade-off-white px-8 py-4 rounded-xl hover:bg-nomade-light-green transition-all duration-300 font-semibold shadow-xl flex items-center space-x-2">
                <Download size={20} />
                <span>Export Report</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Background overlay */}
        <div className="absolute inset-0 bg-nomade-dark-brown/60"></div>
      </div>

      <div className="px-8 py-8 max-w-7xl mx-auto bg-nomade-off-white">
        {/* Tab Navigation */}
        <div className="flex space-x-2 mb-8 bg-white rounded-2xl p-2 shadow-lg">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-nomade-green text-white shadow-lg'
                    : 'text-nomade-gray hover:bg-nomade-gray/5'
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