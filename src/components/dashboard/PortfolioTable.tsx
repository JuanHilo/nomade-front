import React from 'react';
import { Building2 } from 'lucide-react';

const PortfolioTable: React.FC = () => {
  const hotels = [
    {
      name: "NOMADE",
      location: "Tulum",
      city: "Tulum, Mexico",
      image: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=80",
      rooms: 180,
      occupancy: "87.2%",
      revpar: "€423",
      adr: "€485", 
      nights: "47,124",
      value: "€35.2M"
    },
    {
      name: "NOMADE",
      location: "Madrid", 
      city: "Madrid, Spain",
      image: "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=80",
      rooms: 120,
      occupancy: "92.1%",
      revpar: "€479",
      adr: "€520",
      nights: "40,512", 
      value: "€42.8M"
    },
    {
      name: "NOMADE",
      location: "Holbox",
      city: "Holbox, Mexico", 
      image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=80",
      rooms: 65,
      occupancy: "89.5%",
      revpar: "€395",
      adr: "€441",
      nights: "21,243",
      value: "€20.7M"
    }
  ];

  return (
    <div className="rounded-2xl p-8 border shadow-2xl border-white/20 backdrop-blur-sm relative overflow-hidden" style={{ backgroundColor: '#5D681D' }}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="rounded-xl p-3 border shadow-lg bg-white/10 border-white/20 backdrop-blur-sm">
              <Building2 className="text-white" size={20} />
            </div>
            <div>
              <h3 className="text-xl font-serif tracking-wide text-white">Hotel Portfolio</h3>
              <p className="text-base mt-1 text-white/70">Performance across distinguished destinations</p>
            </div>
          </div>
          <button className="backdrop-blur-sm px-6 py-3 rounded-xl border hover:bg-white/15 hover:text-yellow-300 transition-all duration-300 text-sm font-medium shadow-lg bg-white/10 text-white border-white/20 hover:transform hover:scale-105">
            Export Portfolio
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/30">
                <th className="text-left py-3 px-4 text-xs font-serif tracking-widest uppercase text-white/70">HOTEL</th>
                <th className="text-center py-3 px-3 text-xs font-serif tracking-widest uppercase text-white/70">ROOMS</th>
                <th className="text-center py-3 px-3 text-xs font-serif tracking-widest uppercase text-white/70">OCCUPANCY</th>
                <th className="text-center py-3 px-3 text-xs font-serif tracking-widest uppercase text-white/70">REVPAR</th>
                <th className="text-center py-3 px-3 text-xs font-serif tracking-widest uppercase text-white/70">AVG. DAILY RATE</th>
                <th className="text-center py-3 px-3 text-xs font-serif tracking-widest uppercase text-white/70">NIGHTS BOOKED</th>
                <th className="text-right py-3 px-4 text-xs font-serif tracking-widest uppercase text-white/70">VALUE</th>
              </tr>
            </thead>
            <tbody>
              {hotels.map((hotel, index) => (
                <tr key={index} className="border-b hover:bg-white/5 transition-colors duration-200 border-white/20">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={hotel.image}
                        alt={`${hotel.name} ${hotel.location}`}
                        className="w-8 h-8 rounded-lg object-cover border border-white/30"
                      />
                      <div>
                        <div className="font-bold text-white">{hotel.name}</div>
                        <div className="font-bold text-white">{hotel.location}</div>
                        <div className="text-xs text-white/60">{hotel.city}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-3 text-center font-bold text-white">{hotel.rooms}</td>
                  <td className="py-4 px-3 text-center">
                    <span className="px-2 py-1 rounded-full text-xs font-bold border bg-emerald-400/20 text-emerald-300 border-emerald-400/30">
                      {hotel.occupancy}
                    </span>
                  </td>
                  <td className="py-4 px-3 text-center font-bold text-white">{hotel.revpar}</td>
                  <td className="py-4 px-3 text-center font-bold text-white">{hotel.adr}</td>
                  <td className="py-4 px-3 text-center font-bold text-white">{hotel.nights}</td>
                  <td className="py-4 px-4 text-right font-bold text-lg text-emerald-300">{hotel.value}</td>
                </tr>
              ))}
              
              <tr className="border-b bg-emerald-400/10 border-emerald-400/30">
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg border flex items-center justify-center bg-emerald-400/20 border-emerald-400/30">
                      <Building2 className="text-emerald-300" size={14} />
                    </div>
                    <div>
                      <div className="font-bold text-white">PORTFOLIO</div>
                      <div className="font-bold text-white">TOTAL</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-3 text-center font-bold text-white">365</td>
                <td className="py-4 px-3 text-center">
                  <span className="px-2 py-1 rounded-full text-xs font-bold border bg-emerald-400/20 text-emerald-300 border-emerald-400/30">
                    89.6%
                  </span>
                </td>
                <td className="py-4 px-3 text-center font-bold text-white">€432</td>
                <td className="py-4 px-3 text-center font-bold text-white">€482</td>
                <td className="py-4 px-3 text-center font-bold text-white">108,879</td>
                <td className="py-4 px-4 text-right font-bold text-lg text-emerald-300">€98.7M</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTable;