import React from 'react';
import { MapPin, Star, Building2, Calendar, TrendingUp, Users, DollarSign, Bed, Utensils } from 'lucide-react';

interface HotelOverviewProps {
  hotel: any;
}

const HotelOverview: React.FC<HotelOverviewProps> = ({ hotel }) => {
  const overviewMetrics = [
    { label: 'ADR', value: '€300', change: '+4%', icon: DollarSign, color: 'bg-nomade-green' },
    { label: 'Occupancy', value: '87%', change: '-1%', icon: Users, color: 'bg-nomade-terracotta' },
    { label: 'RevPAR', value: '€261', change: '+3%', icon: TrendingUp, color: 'bg-nomade-sage-green' },
    { label: 'GOP', value: '€403K', change: '+9%', icon: Building2, color: 'bg-nomade-blue' },
    { label: 'GOPPAR', value: '€101', change: '+2%', icon: Star, color: 'bg-nomade-teal' }
  ];

  const roomTypes = [
    { type: 'Jungle Villa', count: 20, percentage: '41.67%', size: '85 m²' },
    { type: 'Beach Villa', count: 18, percentage: '37.50%', size: '95 m²' },
    { type: 'Oceanfront Suite', count: 10, percentage: '20.83%', size: '120 m²' }
  ];

  const restaurants = [
    { name: 'Tierra', seats: 80, type: 'Farm-to-Table' },
    { name: 'Agua', seats: 60, type: 'Beachfront Dining' },
    { name: 'Aire', seats: '40-60', type: 'Rooftop Bar' }
  ];

  return (
    <div className="space-y-8">
      {/* Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {overviewMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-nomade-gray/10">
              <div className="flex items-center justify-between mb-4">
                <div className={`${metric.color} rounded-xl p-3`}>
                  <Icon className="text-white" size={24} />
                </div>
                <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
                  metric.change.startsWith('+') 
                    ? 'text-green-600 bg-green-100' 
                    : 'text-red-600 bg-red-100'
                }`}>
                  {metric.change}
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl font-bold text-nomade-dark-brown">{metric.value}</h3>
                <p className="text-sm text-nomade-gray font-medium">{metric.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Hotel Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Hotel Information */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-nomade-gray/10">
          <h3 className="text-heading-lg text-nomade-dark-brown mb-6 flex items-center space-x-3">
            <Building2 className="text-nomade-green" size={28} />
            <span>Hotel Key Facts</span>
          </h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-nomade-gray/20">
              <span className="text-nomade-gray font-medium">Hotel:</span>
              <span className="text-nomade-dark-brown font-semibold">{hotel.name}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-nomade-gray/20">
              <span className="text-nomade-gray font-medium">Address:</span>
              <span className="text-nomade-dark-brown font-semibold">{hotel.location}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-nomade-gray/20">
              <span className="text-nomade-gray font-medium">Star Rating:</span>
              <div className="flex items-center space-x-1">
                {[...Array(hotel.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-nomade-gray/20">
              <span className="text-nomade-gray font-medium">No. of Keys:</span>
              <span className="text-nomade-dark-brown font-semibold">{hotel.keys}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-nomade-gray/20">
              <span className="text-nomade-gray font-medium">Brand:</span>
              <span className="text-nomade-dark-brown font-semibold">{hotel.brand}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-nomade-gray/20">
              <span className="text-nomade-gray font-medium">Contract:</span>
              <span className="text-nomade-dark-brown font-semibold">{hotel.contract}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-nomade-gray/20">
              <span className="text-nomade-gray font-medium">Opening Date:</span>
              <span className="text-nomade-dark-brown font-semibold">{hotel.openingDate}</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-nomade-gray font-medium">Construction Area:</span>
              <span className="text-nomade-dark-brown font-semibold">{hotel.constructionArea}</span>
            </div>
          </div>
        </div>

        {/* Property Gallery */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-nomade-gray/10">
          <h3 className="text-heading-lg mb-6 flex items-center space-x-3">
            <Building2 className="text-nomade-green" size={28} />
            <span>Property Gallery</span>
          </h3>
          
          {/* Main Featured Image */}
          <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 shadow-lg">
            <img
              src="/nomadetulum.jpeg"
              alt="NOMADE Tulum - Luxury Beachfront Resort"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="space-y-3">
            <h4 className="text-heading-sm text-nomade-dark-brown">Location Highlights</h4>
            <div className="space-y-2 text-body-sm text-nomade-gray">
              <p>• Beachfront location on Tulum's pristine Caribbean coastline</p>
              <p>• 10 minutes from Tulum Archaeological Zone</p>
              <p>• Direct access to white sand beaches and turquoise waters</p>
              <p>• Surrounded by lush jungle and cenotes</p>
              <p>• 45 minutes from Cozumel International Airport</p>
            </div>
          </div>
        </div>
      </div>

      {/* Room Types and Restaurants */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Room Types */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-nomade-gray/10">
          <h3 className="text-heading-lg text-nomade-dark-brown mb-6 flex items-center space-x-3">
            <Bed className="text-nomade-green" size={28} />
            <span>Room Distribution</span>
          </h3>
          
          <div className="space-y-4">
            {roomTypes.map((room, index) => (
              <div key={index} className="bg-nomade-gray/5 rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-heading-sm text-nomade-dark-brown">{room.type}</h4>
                  <span className="text-metric-sm text-nomade-green">{room.percentage}</span>
                </div>
                <div className="flex justify-between items-center text-body-sm text-nomade-gray">
                  <span>{room.count} rooms</span>
                  <span>{room.size}</span>
                </div>
                <div className="mt-2 bg-nomade-gray/20 rounded-full h-2">
                  <div 
                    className="bg-nomade-green rounded-full h-2 transition-all duration-500"
                    style={{ width: room.percentage }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Restaurants & Bars */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-nomade-gray/10">
          <h3 className="text-heading-lg text-nomade-dark-brown mb-6 flex items-center space-x-3">
            <Utensils className="text-nomade-green" size={28} />
            <span>Restaurant & Bars</span>
          </h3>
          
          <div className="space-y-4">
            {restaurants.map((restaurant, index) => (
              <div key={index} className="bg-nomade-gray/5 rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-heading-sm text-nomade-dark-brown">{restaurant.name}</h4>
                  <span className="text-metric-sm text-nomade-terracotta">{restaurant.seats} seats</span>
                </div>
                <div className="text-body-sm text-nomade-gray">
                  <span>{restaurant.type}</span>
                </div>
              </div>
            ))}
            <div className="bg-nomade-green/10 rounded-xl p-4 border border-nomade-green/20">
              <div className="text-center">
                <div className="text-metric-lg text-nomade-green">315-350</div>
                <div className="text-label text-nomade-gray">Total Capacity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelOverview;