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
      name: 'NOMADE Punta Mita',
      location: 'Punta de Mita, Mexico',
      image: 'https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=1200',
      keys: 180,
      status: 'Operational',
      statusLabel: 'Exceptional Sanctuary',
      occupancy: '87.2',
      occupancyDelta: '+1.4',
      adr: '485',
      revpar: '423',
      narrative: 'A sanctuary of reconnection, rooted in Punta Mita\'s coastal spirit.',
      phase: 'Operational Excellence'
    },
    {
      id: 3,
      name: 'NOMADE Todos Santos',
      location: 'Todos Santos, Mexico',
      image: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=1200',
      keys: 85,
      status: 'Operational',
      statusLabel: 'Curated Sanctuary',
      occupancy: '92.1',
      occupancyDelta: '+2.8',
      adr: '520',
      revpar: '479',
      narrative: 'Crafted retreat in Todos Santos — where desert meets sea.',
      phase: 'Operational Excellence'
    },
    {
      id: 4,
      name: 'NOMADE New York',
      location: 'Manhattan, New York',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1200',
      keys: 120,
      status: 'Construction',
      statusLabel: 'Urban Sanctuary',
      occupancy: '—',
      occupancyDelta: '',
      adr: '—',
      revpar: '—',
      narrative: 'Under creation, redefining urban sanctuaries in Manhattan\'s heart.',
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
        <div className="mb-16">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
            <input
              type="text"
              placeholder="Discover sanctuaries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-6 py-5 bg-white/60 backdrop-blur-sm border border-stone-200 rounded-2xl focus:ring-2 focus:ring-yellow-600/30 focus:border-yellow-600/50 transition-all duration-500 text-stone-800 text-lg placeholder:text-stone-400 shadow-inner"
              style={{
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.01em'
              }}
            />
          </div>
        </div>

        {/* Ultra-Luxury Portfolio Grid */}
        <div className="space-y-12">
          {filteredHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="group relative rounded-3xl overflow-hidden transition-all duration-700 hover:transform hover:scale-[1.02]"
              style={{
                height: '480px',
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
              <div className="relative z-10 h-full flex flex-col justify-between p-12">
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

                {/* Bottom Section - Hotel Info & Metrics */}
                <div className="space-y-8">
                  {/* Hotel Name & Narrative */}
                  <div className="space-y-4">
                    <h3 
                      className="text-5xl font-medium tracking-wider text-stone-100"
                      style={{
                        fontFamily: 'Lora, serif',
                        letterSpacing: '0.05em',
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                      }}
                    >
                      {hotel.name}
                    </h3>
                    
                    <p 
                      className="text-xl leading-relaxed text-stone-200 max-w-3xl"
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
                    <p 
                      className="text-lg text-stone-300"
                      style={{
                        fontFamily: 'Crimson Text, serif',
                        fontStyle: 'italic',
                        letterSpacing: '0.02em'
                      }}
                    >
                      {hotel.phase}
                    </p>
                  </div>

                  {/* Metrics & Action Row */}
                  <div className="flex items-end justify-between">
                    {/* Engraved Metrics */}
                    <div className="flex items-center space-x-16">
                      {hotel.status === 'Operational' && (
                        <>
                          <div className="space-y-1">
                            <div 
                              className="text-sm uppercase tracking-widest text-stone-400"
                              style={{
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '11px',
                                letterSpacing: '0.15em'
                              }}
                            >
                              Occupancy
                            </div>
                            <div className="flex items-baseline space-x-3">
                              <span 
                                className="text-3xl font-medium"
                                style={{
                                  fontFamily: 'Lora, serif',
                                  color: '#82b074',
                                  textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                                }}
                              >
                                {hotel.occupancy}%
                              </span>
                              {hotel.occupancyDelta && (
                                <span 
                                  className="text-lg"
                                  style={{
                                    fontFamily: 'Crimson Text, serif',
                                    fontStyle: 'italic',
                                    color: '#82b074',
                                    opacity: 0.8
                                  }}
                                >
                                  {hotel.occupancyDelta}%
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="w-px h-12 bg-stone-400/30"></div>

                          <div className="space-y-1">
                            <div 
                              className="text-sm uppercase tracking-widest text-stone-400"
                              style={{
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '11px',
                                letterSpacing: '0.15em'
                              }}
                            >
                              ADR
                            </div>
                            <div className="space-y-1">
                              <span 
                                className="text-3xl font-medium"
                                style={{
                                  fontFamily: 'Lora, serif',
                                  color: '#C7A34A',
                                  textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                                }}
                              >
                                €{hotel.adr}
                              </span>
                              <div 
                                className="text-sm text-stone-400"
                                style={{
                                  fontFamily: 'Crimson Text, serif',
                                  fontStyle: 'italic',
                                  fontSize: '12px'
                                }}
                              >
                                per guest night
                              </div>
                            </div>
                          </div>

                          <div className="w-px h-12 bg-stone-400/30"></div>

                          <div className="space-y-1">
                            <div 
                              className="text-sm uppercase tracking-widest text-stone-400"
                              style={{
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '11px',
                                letterSpacing: '0.15em'
                              }}
                            >
                              RevPAR
                            </div>
                            <div className="space-y-1">
                              <span 
                                className="text-3xl font-medium"
                                style={{
                                  fontFamily: 'Lora, serif',
                                  color: '#1C1C1B',
                                  textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                                }}
                              >
                                €{hotel.revpar}
                              </span>
                              <div 
                                className="text-sm text-stone-400"
                                style={{
                                  fontFamily: 'Crimson Text, serif',
                                  fontStyle: 'italic',
                                  fontSize: '12px'
                                }}
                              >
                                per key
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {hotel.status !== 'Operational' && (
                        <div className="space-y-1">
                          <div 
                            className="text-sm uppercase tracking-widest text-stone-400"
                            style={{
                              fontFamily: 'Inter, sans-serif',
                              fontSize: '11px',
                              letterSpacing: '0.15em'
                            }}
                          >
                            Keys
                          </div>
                          <div className="space-y-1">
                            <span 
                              className="text-3xl font-medium"
                              style={{
                                fontFamily: 'Lora, serif',
                                color: '#1C1C1B',
                                textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                              }}
                            >
                              {hotel.keys}
                            </span>
                            <div 
                              className="text-sm text-stone-400"
                              style={{
                                fontFamily: 'Crimson Text, serif',
                                fontStyle: 'italic',
                                fontSize: '12px'
                              }}
                            >
                              luxury accommodations
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Ghost Button */}
                    <Link 
                      to={`/hotels/${hotel.id}`}
                      className="group/btn relative px-8 py-4 rounded-2xl transition-all duration-500 backdrop-blur-sm"
                      style={{
                        border: '1px solid rgba(199, 163, 74, 0.4)',
                        backgroundColor: 'rgba(199, 163, 74, 0.1)',
                        color: '#F7F5F0'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(228, 217, 201, 0.2)';
                        e.currentTarget.style.borderColor = 'rgba(199, 163, 74, 0.6)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(199, 163, 74, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(199, 163, 74, 0.4)';
                      }}
                    >
                      <span 
                        className="flex items-center space-x-3"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: '500',
                          letterSpacing: '0.05em',
                          textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                        }}
                      >
                        <span>Explore Sanctuary</span>
                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Summary */}
        <div 
          className="mt-24 rounded-3xl p-16 relative overflow-hidden"
          style={{
            backgroundColor: '#1C1C1B',
            backgroundImage: 'url(/bg_pattern1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(28, 28, 27, 0.85)' }}></div>
          <div className="relative z-10 text-center space-y-8">
            <h2 
              className="text-6xl font-light tracking-wider"
              style={{
                fontFamily: 'Lora, serif',
                color: '#F7F5F0',
                letterSpacing: '0.08em',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Portfolio Excellence
            </h2>
            <p 
              className="text-2xl leading-relaxed max-w-4xl mx-auto"
              style={{
                fontFamily: 'Crimson Text, serif',
                fontStyle: 'italic',
                color: 'rgba(247, 245, 240, 0.9)',
                letterSpacing: '0.02em'
              }}
            >
              Six distinctive sanctuaries across three continents, each crafted to redefine luxury hospitality
            </p>
            
            <div className="flex items-center justify-center space-x-24 mt-16">
              <div className="text-center space-y-3">
                <div 
                  className="text-5xl font-medium"
                  style={{
                    fontFamily: 'Lora, serif',
                    background: 'linear-gradient(135deg, #C7A34A, #D4AF37, #FFE196)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  591
                </div>
                <div 
                  className="text-sm uppercase tracking-widest"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: 'rgba(247, 245, 240, 0.7)',
                    letterSpacing: '0.15em'
                  }}
                >
                  Total Keys
                </div>
              </div>
              
              <div className="w-px h-16" style={{ backgroundColor: 'rgba(247, 245, 240, 0.2)' }}></div>
              
              <div className="text-center space-y-3">
                <div 
                  className="text-5xl font-medium"
                  style={{
                    fontFamily: 'Lora, serif',
                    background: 'linear-gradient(135deg, #C7A34A, #D4AF37, #FFE196)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  €940M
                </div>
                <div 
                  className="text-sm uppercase tracking-widest"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: 'rgba(247, 245, 240, 0.7)',
                    letterSpacing: '0.15em'
                  }}
                >
                  Portfolio Value
                </div>
              </div>
              
              <div className="w-px h-16" style={{ backgroundColor: 'rgba(247, 245, 240, 0.2)' }}></div>
              
              <div className="text-center space-y-3">
                <div 
                  className="text-5xl font-medium"
                  style={{
                    fontFamily: 'Lora, serif',
                    background: 'linear-gradient(135deg, #C7A34A, #D4AF37, #FFE196)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  89.6%
                </div>
                <div 
                  className="text-sm uppercase tracking-widest"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: 'rgba(247, 245, 240, 0.7)',
                    letterSpacing: '0.15em'
                  }}
                >
                  Average Occupancy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelsPage;