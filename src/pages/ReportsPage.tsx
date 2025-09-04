import React, { useState } from 'react';
import { Calendar, Download, Filter, FileText, TrendingUp, Eye, Plus, BarChart3, Users, DollarSign, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ReportsPage: React.FC = () => {
  const navigate = useNavigate();

  const reports = [
    {
      id: 1,
      title: 'Q1 2024 Asset Management Report',
      type: 'Asset Management Report',
      hotel: 'NOMADE Punta Mita',
      date: 'March 2024',
      status: 'Published',
      image: 'https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=400',
      downloads: 127,
      version: 'V18',
      pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    },
    {
      id: 2,
      title: 'Monthly Performance Report',
      type: 'Performance Report',
      hotel: 'NOMADE Todos Santos',
      date: 'April 2024',
      status: 'Published',
      image: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=400',
      downloads: 89,
      version: 'V24',
      pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    },
    {
      id: 3,
      title: 'Development Milestone Report',
      type: 'Milestone Report',
      hotel: 'NOMADE New York',
      date: 'April 2024',
      status: 'Published',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=400',
      downloads: 234,
      version: 'V12',
      pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    },
    {
      id: 4,
      title: 'Construction Progress Report',
      type: 'Progress Report',
      hotel: 'NOMADE Madrid',
      date: 'April 2024',
      status: 'Draft',
      image: 'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=400',
      downloads: 0,
      version: 'Draft'
    },
    {
      id: 5,
      title: 'Investment Analysis Report',
      type: 'Investment Report',
      hotel: 'NOMADE Ibiza',
      date: 'March 2024',
      status: 'Published',
      image: 'https://images.pexels.com/photos/2290766/pexels-photo-2290766.jpeg?auto=compress&cs=tinysrgb&w=400',
      downloads: 156,
      version: 'V08',
      pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    }
  ];

  const stats = [
    { 
      value: '15', 
      label: 'TOTAL REPORTS', 
      change: '+3 this month', 
      icon: FileText, 
      positive: true 
    },
    { 
      value: '393', 
      label: 'TOTAL DOWNLOADS', 
      change: '+18% this month', 
      icon: TrendingUp, 
      positive: true 
    },
    { 
      value: '7', 
      label: 'SCHEDULED REPORTS', 
      change: 'On schedule', 
      icon: Calendar, 
      positive: true 
    },
    { 
      value: '2', 
      label: 'DRAFT REPORTS', 
      change: 'Pending review', 
      icon: BarChart3, 
      positive: true 
    }
  ];

  const handleViewReport = (report: any) => {
    navigate(`/reports/${report.id}`);
  };

  const handleDownloadReport = (report: any) => {
    if (report.pdfUrl) {
      const link = document.createElement('a');
      link.href = report.pdfUrl;
      link.download = `${report.title}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="px-8 py-8 max-w-7xl mx-auto space-y-8">
      {/* Revenue-style Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const TrendIcon = stat.positive ? TrendingUp : TrendingUp;
          
          return (
            <div key={index} className="relative group">
              <div className="bg-nomade-dark-brown/95 backdrop-blur-sm rounded-2xl p-6 border border-nomade-tan/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="text-center space-y-4">
                  <div className="flex justify-center mb-3">
                    <div className="bg-nomade-tan/20 backdrop-blur-sm rounded-xl p-3 border border-nomade-tan/30 group-hover:bg-nomade-tan/30 transition-all duration-300">
                      <Icon className="text-nomade-tan group-hover:scale-110 transition-transform duration-300" size={24} />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-xs font-serif tracking-[0.2em] uppercase text-nomade-tan/80 font-medium">
                      {stat.label}
                    </div>
                    <div className="text-3xl font-bold text-nomade-off-white tracking-tight">
                      {stat.value}
                    </div>
                    <div className="flex items-center justify-center space-x-1">
                      <TrendIcon size={14} className="text-nomade-green" />
                      <div className="text-sm font-medium text-nomade-green">
                        {stat.change}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-nomade-tan/5 via-transparent to-nomade-green/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          );
        })}
      </div>

      {/* Portfolio-style Reports Table */}
      <div className="rounded-2xl p-8 border shadow-2xl border-white/20 backdrop-blur-sm relative overflow-hidden" style={{ backgroundColor: '#5D681D' }}>
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="rounded-xl p-3 border shadow-lg bg-white/10 border-white/20 backdrop-blur-sm">
                <FileText className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-serif tracking-wide text-white">Investment Reports</h3>
                <p className="text-base mt-1 text-white/70">Analytics and documentation across portfolio</p>
              </div>
            </div>
            <button className="backdrop-blur-sm px-6 py-3 rounded-xl border hover:bg-white/15 hover:text-yellow-300 transition-all duration-300 text-sm font-medium shadow-lg bg-white/10 text-white border-white/20 hover:transform hover:scale-105">
              <Plus className="inline mr-2" size={16} />
              Generate Report
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/30">
                  <th className="text-left py-3 px-4 text-xs font-serif tracking-widest uppercase text-white/70">REPORT</th>
                  <th className="text-center py-3 px-3 text-xs font-serif tracking-widest uppercase text-white/70">TYPE</th>
                  <th className="text-center py-3 px-3 text-xs font-serif tracking-widest uppercase text-white/70">STATUS</th>
                  <th className="text-center py-3 px-3 text-xs font-serif tracking-widest uppercase text-white/70">DATE</th>
                  <th className="text-center py-3 px-3 text-xs font-serif tracking-widest uppercase text-white/70">DOWNLOADS</th>
                  <th className="text-center py-3 px-3 text-xs font-serif tracking-widest uppercase text-white/70">VERSION</th>
                  <th className="text-right py-3 px-4 text-xs font-serif tracking-widest uppercase text-white/70">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report, index) => (
                  <tr 
                    key={index} 
                    className={`border-b hover:bg-white/5 transition-colors duration-200 border-white/20 cursor-pointer ${
                      selectedReport?.id === report.id ? 'bg-white/10' : ''
                    }`}
                    onClick={() => handleViewReport(report)}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={report.image}
                          alt={report.hotel}
                          className="w-8 h-8 rounded-lg object-cover border border-white/30"
                        />
                        <div>
                          <div className="font-bold text-white">{report.title}</div>
                          <div className="text-xs text-white/60">{report.hotel}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-3 text-center font-bold text-white">{report.type}</td>
                    <td className="py-4 px-3 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold border ${
                        report.status === 'Published' 
                          ? 'bg-emerald-400/20 text-emerald-300 border-emerald-400/30'
                          : 'bg-yellow-400/20 text-yellow-300 border-yellow-400/30'
                      }`}>
                        {report.status}
                      </span>
                    </td>
                    <td className="py-4 px-3 text-center font-bold text-white">{report.date}</td>
                    <td className="py-4 px-3 text-center font-bold text-white">{report.downloads}</td>
                    <td className="py-4 px-3 text-center font-bold text-white">{report.version}</td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleViewReport(report);
                          }}
                          className="bg-white/10 text-white p-2 rounded-lg hover:bg-white/20 transition-colors border border-white/20"
                        >
                          <Eye size={14} />
                        </button>
                        {report.status === 'Published' && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDownloadReport(report);
                            }}
                            className="bg-emerald-400/20 text-emerald-300 p-2 rounded-lg hover:bg-emerald-400/30 transition-colors border border-emerald-400/30"
                          >
                            <Download size={14} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;