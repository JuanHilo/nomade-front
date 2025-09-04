import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Building2, 
  Users, 
  FileText, 
  Bot,
  LogOut,
  Settings,
  User
} from 'lucide-react';
import Logo from './Logo';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const menuSections = [
    {
      title: 'PERFORMANCE OVERVIEW',
      items: [
        { path: '/dashboard', icon: LayoutDashboard, label: 'Executive Dashboard' },
        { path: '/reports', icon: FileText, label: 'Analytics & Reports' },
      ]
    },
    {
      title: 'EXPERIENCES & PROPERTIES',
      items: [
        { path: '/hotels', icon: Building2, label: 'Hotel Portfolio' },
      ]
    },
    {
      title: 'CAPITAL & RELATIONSHIPS',
      items: [
        { path: '/investors', icon: Users, label: 'Investor Relations' },
      ]
    },
    {
      title: 'INTELLIGENCE',
      items: [
        { path: '/ai-bot', icon: Bot, label: 'FinGPT Assistant' },
      ]
    }
  ];

  return (
    <div 
      className="w-80 min-h-screen flex flex-col relative" 
      style={{ 
        backgroundImage: 'url(/bg_pattern1.png)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat' 
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-nomade-dark-brown/80"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full px-8 py-8">
        {/* Nomade Logo */}
        <div className="flex justify-center mb-8 pb-6 border-b border-white/10">
          <div className="transform scale-150">
            <Logo size="lg" variant="light" />
          </div>
        </div>
        
        {/* Navigation Sections */}
        <nav className="flex-1 space-y-8">
          {menuSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-4">
              {/* Section Title */}
              <div>
                <h3 className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  {section.title}
                </h3>
                <div className="mt-2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>
              
              {/* Section Items */}
              <div className="space-y-2">
                {section.items.map((item) => {
                  const isActive = location.pathname === item.path;
                  const Icon = item.icon;
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`
                        group relative flex items-center px-4 py-3 rounded-xl transition-all duration-300
                        ${isActive 
                          ? 'bg-nomade-green/15 text-white' 
                          : 'text-nomade-off-white/70 hover:bg-white/5 hover:text-white'
                        }
                      `}
                    >
                      {/* Active accent line */}
                      {isActive && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-nomade-green rounded-r-full"></div>
                      )}
                      
                      {/* Icon */}
                      <div className={`
                        flex items-center justify-center w-8 h-8 rounded-lg mr-3 transition-all duration-300
                        ${isActive 
                          ? 'text-nomade-green' 
                          : 'text-nomade-off-white/60 group-hover:text-white'
                        }
                      `}>
                        <Icon size={18} strokeWidth={1.5} />
                      </div>
                      
                      {/* Label */}
                      <div className="flex-1">
                        <div className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                          isActive ? 'text-white' : 'group-hover:text-white'
                        }`}>
                          {item.label}
                        </div>
                      </div>
                      
                      {/* Hover glow effect */}
                      <div className={`
                        absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none
                        ${isActive 
                          ? 'bg-gradient-to-r from-nomade-green/5 to-transparent opacity-100' 
                          : 'bg-gradient-to-r from-nomade-tan/5 to-transparent opacity-0 group-hover:opacity-100'
                        }
                      `}></div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
        
        {/* Bottom Profile Section */}
        <div className="border-t border-white/10 pt-6">
          {/* Portfolio Value */}
          <div className="bg-white/5 rounded-xl p-4 mb-4">
            <div className="text-xs font-medium tracking-[0.1em] text-white/60 uppercase mb-1">Portfolio Value</div>
            <div className="text-2xl font-display font-semibold text-white">€98.7M</div>
            <div className="text-xs text-nomade-green">+12.4% this quarter</div>
          </div>
          
          {/* Profile Actions */}
          <div className="space-y-2">
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-nomade-off-white/60 hover:bg-white/5 hover:text-white rounded-xl transition-all duration-300">
              <User size={18} strokeWidth={1.5} />
              <span className="font-medium tracking-wide">Profile</span>
            </button>
            
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-nomade-off-white/60 hover:bg-white/5 hover:text-white rounded-xl transition-all duration-300">
              <Settings size={18} strokeWidth={1.5} />
              <span className="font-medium tracking-wide">Settings</span>
            </button>
            
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-3"></div>
            
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-nomade-off-white/60 hover:bg-red-500/10 hover:text-red-400 rounded-xl transition-all duration-300">
              <LogOut size={18} strokeWidth={1.5} />
              <span className="font-medium tracking-wide">Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;