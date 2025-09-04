import React from 'react';
import Sidebar from './Sidebar';
import Hero from './Hero';

interface LayoutProps {
  children: React.ReactNode;
  heroProps?: {
    title: string;
    subtitle: string;
    leftMetric: { value: string; label: string };
    rightMetric: { value: string; label: string };
    actionButton: {
      text: string;
      icon: React.ComponentType<{ size?: number }>;
      onClick?: () => void;
    };
  };
}

const Layout: React.FC<LayoutProps> = ({ children, heroProps }) => {
  return (
    <div className="min-h-screen bg-nomade-off-white">
      <div className="flex">
        <div className="fixed left-0 top-0 h-screen z-30">
          <Sidebar />
        </div>
        <div className="flex-1 ml-80">
          {heroProps && (
            <div className="sticky top-0 z-20">
              <Hero {...heroProps} />
            </div>
          )}
          <main className="bg-nomade-off-white">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;