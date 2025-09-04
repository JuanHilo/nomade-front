import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';
import Logo from '../components/Logo';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundImage: 'url(/bg_pattern1.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
     

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-12 animate-fade-in">
            <div className="space-y-8">
              <h1 className="text-7xl lg:text-8xl font-light leading-[0.85] tracking-[-0.02em] font-display">
                <span className="text-white">Redefining luxury</span>
                <span className="block text-nomade-green font-serif italic">hospitality</span>
                <span className="block text-nomade-terracotta font-light">intelligence</span>
              </h1>
              
              <p className="text-2xl text-white/90 leading-relaxed max-w-2xl font-light tracking-wide">
                Sophisticated analytics and investor relations platform crafted for NOMADE's luxury hotel properties.
              </p>
              
            
            </div>

            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 pt-8">
              <Link
                to="/login"
                className="group bg-nomade-green/90 backdrop-blur-xl text-white px-12 py-5 rounded-full hover:bg-nomade-green transition-all duration-500 text-lg font-medium tracking-wide shadow-2xl hover:shadow-nomade-green/25 hover:transform hover:scale-105"
              >
                <span className="flex items-center space-x-3">
                  <span>Enter Platform</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative lg:pl-12">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="NOMADE Luxury Hotel"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Analytics Dashboard"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-8 mt-16">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Luxury Hotel Interior"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/5137980/pexels-photo-5137980.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Investment Meeting"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 left-32 w-96 h-96 bg-nomade-green rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-[32rem] h-[32rem] bg-nomade-terracotta rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default HomePage;