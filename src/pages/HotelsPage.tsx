import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, ArrowRight } from 'lucide-react';

const HotelsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const hotels = [
    {
      id: 1,
      name: 'NOMADE Tulum',
      location: 'Tulum, Mexico',
      image: '/nomadetulum.jpeg',
      keys: 48,
      status: 'Operational',
      statusLabel: 'Exceptional Sanctuary',
      occupancy: '92.1',
      occupancyDelta: '+2.8',
      adr: '485',
      revpar: '446',
      narrative: 'A sanctuary of reconnection, rooted in Tulum\'s mystical coastal spirit.',
      phase: 'Operational Excellence'
    },
    {
      id: 2,
      name: 'NOMADE Holbox',
      location: 'Holbox, Mexico',
      image: 'https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=1200',
      keys: 180,
      status: 'Operational',
      statusLabel: 'Exceptional Sanctuary',
      occupancy: '87.2',
      occupancyDelta: '+1.4',
      adr: '485',
      revpar: '423',
      narrative: 'A sanctuary of reconnection, rooted in Holbox\'s coastal spirit.',
      phase: 'Operational Excellence'
    },
    {
      id: 3,
      name: 'NOMADE Marrakech',
      location: 'Marrakech, Morocco',
      image: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=1200',
      keys: 85,
      status: 'Operational',
      statusLabel: 'Curated Sanctuary',
      occupancy: '92.1',
      occupancyDelta: '+2.8',
      adr: '520',
      revpar: '479',
      narrative: 'Crafted retreat in Marrakech — where desert meets tradition.',
      phase: 'Operational Excellence'
    },
    {
      id: 4,
      name: 'NOMADE Lisboa',
      location: 'Lisboa, Portugal',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1200',
      keys: 120,
      status: 'Construction',
      statusLabel: 'Urban Sanctuary',
      occupancy: '—',
      occupancyDelta: '',
      adr: '—',
      revpar: '—',
      narrative: 'Under creation, redefining urban sanctuaries in Lisboa\'s heart.',
      phase: 'In Crafting Stage — 2026 Opening'
    },
    {
      id: 5,
      name: 'NOMADE Madrid',
      location: 'Madrid, Spain',
      image: 'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1200',
      keys: 93,
      status: 'Planning',
      statusLabel: 'Emerging Destination',
      occupancy: '—',
      occupancyDelta: '',
      adr: '—',
      revpar: '—',
      narrative: 'European elegance meets NOMADE philosophy in Spain\'s capital.',
      phase: 'In Planning Stage — 2027 Opening'
    },
    {
      id: 6,
      name: 'NOMADE Ibiza',
      location: 'Ibiza, Spain',
      image: 'https://images.pexels.com/photos/2290766/pexels-photo-2290766.jpeg?auto=compress&cs=tinysrgb&w=1200',
      keys: 65,
      status: 'Construction',
      statusLabel: 'Island Sanctuary',
      occupancy: '—',
      occupancyDelta: '',
      adr: '—',
      revpar: '—',
      narrative: 'Mediterranean sanctuary where ancient spirit meets modern luxury.',
      phase: 'In Crafting Stage — 2026 Opening'
    }
  ];

  const filteredHotels = hotels.filter(hotel =>
    hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hotel.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F5F0' }}>
      <div className="px-8 py-12 max-w-7xl mx-auto">
        {/* Refined Search */}

        {/* 3-Column Hotel Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="group relative rounded-3xl overflow-hidden transition-all duration-700 hover:transform hover:scale-[1.02]"
              style={{
                height: '520px',
                background: `linear-gradient(135deg, rgba(28, 28, 27, 0.7) 0%, rgba(47, 59, 45, 0.6) 50%, rgba(28, 28, 27, 0.8) 100%), url('${hotel.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'sepia(15%) saturate(75%) contrast(110%) brightness(85%)',
                boxShadow: 'inset 0 0 0 1px rgba(199, 163, 74, 0.1)'
              }}
            >
              {/* Luxury Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 via-transparent to-stone-900/40"></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-8">
                {/* Top Section - Status & Location */}
                <div className="space-y-4">
                  {/* Embossed Status Ribbon */}
                  <div className="inline-block">
                    <span 
                      className="px-6 py-2 text-sm tracking-wider"
                      style={{
                        fontFamily: 'Crimson Text, serif',
                        fontStyle: 'italic',
                        color: '#F7F5F0',
                        backgroundColor: 'rgba(199, 163, 74, 0.15)',
                        border: '1px solid rgba(199, 163, 74, 0.3)',
                        borderRadius: '24px',
                        backdropFilter: 'blur(10px)',
                        textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                      }}
                    >
                      {hotel.statusLabel}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center text-stone-300">
                    <MapPin size={16} className="mr-3 opacity-60" />
                    <span 
                      className="text-lg"
                      style={{
                        fontFamily: 'Crimson Text, serif',
                        fontStyle: 'italic',
                        letterSpacing: '0.02em'
                      }}
                    >
                      {hotel.location}
                    </span>
                  </div>
                </div>

                {/* Bottom Section - Hotel Info */}
                <div className="space-y-6">
                  {/* Hotel Name & Narrative */}
                  <div className="space-y-4">
                    <h3 
                      className="text-4xl font-medium tracking-wider text-stone-100"
                      style={{
                        fontFamily: 'Lora, serif',
                        letterSpacing: '0.05em',
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                      }}
                    >
                      {hotel.name}
                    </h3>
                    
                    <p 
                      className="text-lg leading-relaxed text-stone-200 max-w-full"
                      style={{
                        fontFamily: 'Crimson Text, serif',
                        fontStyle: 'italic',
                        letterSpacing: '0.01em',
                        textShadow: '0 1px 2px rgba(0,0,0,0.4)'
                      }}
                    >
                      {hotel.narrative}
                    </p>

                    {/* Phase Status */}
                    <p className="text-body-lg text-stone-300">
                      {hotel.phase}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-center">
                    <Link 
                      to={`/hotels/${hotel.id}`}
                      className="group/btn relative px-8 py-4 rounded-2xl transition-all duration-500 backdrop-blur-sm text-button"
                      style={{
                        border: '1px solid rgba(199, 163, 74, 0.4)',
                        backgroundColor: 'rgba(199, 163, 74, 0.1)',
                        color: '#F7F5F0'
                      }}
                      onMouseEnter={(e) => {
                      }}
                    >
                    <p className="text-body text-stone-300">
                      <span className="flex items-center space-x-3">
                        <span>Explore Sanctuary</span>
                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </span>
                    </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelsPage;