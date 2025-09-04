import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, FileText, Plus, Calendar, Filter } from 'lucide-react';
import HotelReportTemplate from '../components/reports/HotelReportTemplate';

const ReportViewerPage: React.FC = () => {
  const { id } = useParams();

  // Mock report data - in real app this would come from API
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

  const selectedReport = reports.find(report => report.id === parseInt(id || '1')) || reports[0];
  
  // Mock hotel data for the report
  const hotelData = {
    id: 1,
    name: 'Tulum',
    location: 'Carretera Tulum-Boca Paila Km 10, 77780 Tulum, Mexico',
    rating: 5,
    keys: 48,
    brand: 'NOMADE Hotels',
    contract: 'Management Agreement',
    openingDate: 'December 1, 2017',
    constructionArea: '12,000 m²',
    floors: 2
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
    <div className="min-h-screen bg-nomade-off-white">
      {/* Header */}
      <div className="relative overflow-hidden" style={{ backgroundImage: 'url(/bg_pattern1.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
          <div className="flex items-center justify-between">
            <div className="space-y-4">
              <Link 
                to="/reports"
                className="inline-flex items-center space-x-2 text-nomade-off-white/80 hover:text-nomade-off-white transition-colors mb-4"
              >
                <ArrowLeft size={20} />
                <span>Back to Reports</span>
              </Link>
              <h1 className="text-display-lg text-nomade-off-white">
                {selectedReport.title}
              </h1>
              <p className="text-body-xl text-nomade-off-white/90">
                {selectedReport.hotel} • {selectedReport.date}
              </p>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="text-right">
                <div className="text-metric-lg text-nomade-green">{selectedReport.version}</div>
                <div className="text-label-sm text-nomade-off-white/80">Version</div>
              </div>
              
              <div className="w-px h-16 bg-nomade-off-white/30"></div>
              
              <div className="text-right">
                <div className="text-metric-lg text-nomade-terracotta">{selectedReport.downloads}</div>
                <div className="text-label-sm text-nomade-off-white/80">Downloads</div>
              </div>
              
              {selectedReport.status === 'Published' && (
                <button
                  onClick={() => handleDownloadReport(selectedReport)}
                  className="bg-nomade-green text-nomade-off-white px-6 py-3 rounded-xl hover:bg-nomade-light-green transition-all duration-300 text-button shadow-xl flex items-center space-x-2"
                >
                  <Download size={20} />
                  <span>Download Report</span>
                </button>
              )}
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-nomade-dark-brown/80"></div>
      </div>

      <div className="px-8 py-8 max-w-7xl mx-auto">
        {/* Performance-style Report Viewer */}
        <div 
          className="rounded-2xl p-8 border shadow-2xl border-white/20 backdrop-blur-sm relative overflow-hidden"
          style={{ 
            backgroundImage: 'url(/nomadetulum.jpeg)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            minHeight: '800px'
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/75 to-black/80"></div>
          
          {/* Subtle luxury accent overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-emerald-400/10 pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Report Details */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-serif text-white mb-4">Report Details</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Type:</span>
                      <span className="text-white font-semibold">{selectedReport.type}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Property:</span>
                      <span className="text-white font-semibold">{selectedReport.hotel}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Date:</span>
                      <span className="text-white font-semibold">{selectedReport.date}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Version:</span>
                      <span className="text-white font-semibold">{selectedReport.version}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Downloads:</span>
                      <span className="text-emerald-300 font-semibold">{selectedReport.downloads}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Status:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        selectedReport.status === 'Published' 
                          ? 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/30'
                          : 'bg-yellow-400/20 text-yellow-300 border border-yellow-400/30'
                      }`}>
                        {selectedReport.status}
                      </span>
                    </div>
                  </div>
                  
                  {selectedReport.status === 'Published' && (
                    <button
                      onClick={() => handleDownloadReport(selectedReport)}
                      className="w-full mt-6 bg-emerald-400/20 text-emerald-300 py-3 rounded-xl hover:bg-emerald-400/30 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 border border-emerald-400/30"
                    >
                      <Download size={18} />
                      <span>Download Report</span>
                    </button>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-serif text-white mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full bg-white/10 text-white py-3 rounded-xl hover:bg-white/20 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 border border-white/20">
                      <Plus size={18} />
                      <span>Generate New Report</span>
                    </button>
                    <button className="w-full bg-white/10 text-white py-3 rounded-xl hover:bg-white/20 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 border border-white/20">
                      <Calendar size={18} />
                      <span>Schedule Report</span>
                    </button>
                    <button className="w-full bg-white/10 text-white py-3 rounded-xl hover:bg-white/20 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 border border-white/20">
                      <Filter size={18} />
                      <span>Filter Reports</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="lg:col-span-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                  <div className="bg-black/30 backdrop-blur-sm text-white p-4 flex items-center justify-between border-b border-white/20">
                    <div>
                      <h3 className="text-lg font-serif text-white">
                        {selectedReport.title}
                      </h3>
                      <p className="text-sm text-white/80">
                        {selectedReport.hotel} • {selectedReport.date}
                      </p>
                    </div>
                    {selectedReport.status === 'Published' && (
                      <button
                        onClick={() => handleDownloadReport(selectedReport)}
                        className="bg-emerald-400/20 text-emerald-300 px-4 py-2 rounded-lg hover:bg-emerald-400/30 transition-colors flex items-center space-x-2 border border-emerald-400/30"
                      >
                        <Download size={16} />
                        <span>Download</span>
                      </button>
                    )}
                  </div>
                  
                  <div className="h-[700px] bg-white/5">
                    {selectedReport.status === 'Published' ? (
                      <div className="w-full h-full overflow-auto">
                        <HotelReportTemplate 
                          hotel={hotelData}
                          reportData={selectedReport}
                        />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center space-y-4">
                          <FileText className="mx-auto text-white/60" size={64} />
                          <h3 className="text-xl font-serif text-white">Draft Report</h3>
                          <p className="text-white/80">This report is still in draft status and not available for viewing.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportViewerPage;