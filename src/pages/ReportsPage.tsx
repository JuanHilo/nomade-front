import React, { useState } from 'react';
import { Calendar, Download, Filter, FileText, TrendingUp, Eye, Plus } from 'lucide-react';

const ReportsPage: React.FC = () => {

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

  const [selectedReport, setSelectedReport] = useState<any>(null);

  const stats = [
    { value: '15', label: 'Total Reports', change: '+3 this month', icon: FileText, color: 'bg-nomade-green' },
    { value: '393', label: 'Total Downloads', change: '+18% this month', icon: TrendingUp, color: 'bg-nomade-terracotta' },
    { value: '7', label: 'Scheduled Reports', change: 'On schedule', icon: Calendar, color: 'bg-nomade-sage-green' },
    { value: '0', label: 'Draft Reports', change: 'Pending', icon: FileText, color: 'bg-nomade-gray' }
  ];

  const handleViewReport = (report: any) => {
    setSelectedReport(report);
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
    <div className="px-8 py-8 max-w-7xl mx-auto">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-nomade-gray/10">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} rounded-xl p-3`}>
                  <Icon className="text-white" size={24} />
                </div>
                <span className="text-xs text-nomade-sage-green font-semibold bg-nomade-sage-green/10 px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl font-bold text-nomade-dark-brown">{stat.value}</h3>
                <p className="text-sm text-nomade-gray font-medium">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
        <div className="flex space-x-4">
          <select className="bg-white border border-nomade-gray/30 rounded-xl px-4 py-2 text-nomade-dark-brown focus:ring-2 focus:ring-nomade-green">
            <option>All Time</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>This Year</option>
          </select>
          
          <select className="bg-white border border-nomade-gray/30 rounded-xl px-4 py-2 text-nomade-dark-brown focus:ring-2 focus:ring-nomade-green">
            <option>All Projects</option>
            <option>NOMADE Punta Mita</option>
            <option>NOMADE Todos Santos</option>
            <option>NOMADE New York</option>
            <option>NOMADE Madrid</option>
            <option>NOMADE Ibiza</option>
          </select>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Reports List */}
        <div className="lg:col-span-1 space-y-6">
          <h2 className="text-2xl font-bold text-nomade-dark-brown">Available Reports</h2>
          <div className="space-y-4">
            {reports.map((report) => (
              <div
                key={report.id}
                className={`bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border ${
                  selectedReport?.id === report.id ? 'border-nomade-green' : 'border-nomade-gray/10'
                }`}
                onClick={() => handleViewReport(report)}
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={report.image}
                    alt={report.hotel}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-label text-nomade-dark-brown">{report.title}</h3>
                    <p className="text-body-xs text-nomade-gray">{report.hotel}</p>
                    <p className="text-body-xs text-nomade-gray">{report.date}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className={`px-2 py-1 rounded-full text-badge ${
                        report.status === 'Published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {report.status}
                      </span>
                      {report.status === 'Published' && (
                        <div className="flex space-x-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleViewReport(report);
                            }}
                            className="bg-nomade-green text-white p-1 rounded-lg hover:bg-nomade-light-green transition-colors"
                          >
                            <Eye size={14} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDownloadReport(report);
                            }}
                            className="bg-nomade-terracotta text-white p-1 rounded-lg hover:bg-nomade-orange-brown transition-colors"
                          >
                            <Download size={14} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-nomade-dark-brown text-white p-4 flex items-center justify-between">
              <div>
                <h3 className="text-heading-md text-white">
                  {selectedReport ? selectedReport.title : 'Select a report to view'}
                </h3>
                {selectedReport && (
                  <p className="text-body-sm text-nomade-off-white/80">
                    {selectedReport.hotel} • {selectedReport.date}
                  </p>
                )}
              </div>
              {selectedReport && selectedReport.status === 'Published' && (
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleDownloadReport(selectedReport)}
                    className="bg-nomade-green text-white px-4 py-2 rounded-lg hover:bg-nomade-light-green transition-colors flex items-center space-x-2"
                  >
                    <Download size={16} />
                    <span>Download</span>
                  </button>
                </div>
              )}
            </div>
            
            <div className="h-[800px] bg-gray-100">
              {selectedReport && selectedReport.status === 'Published' ? (
                <iframe
                  src={selectedReport.pdfUrl}
                  className="w-full h-full border-0"
                  title={selectedReport.title}
                />
              ) : selectedReport && selectedReport.status === 'Draft' ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center space-y-4">
                    <FileText className="mx-auto text-nomade-gray" size={64} />
                    <h3 className="text-heading-md text-nomade-dark-brown">Draft Report</h3>
                    <p className="text-body text-nomade-gray">This report is still in draft status and not available for viewing.</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center space-y-4">
                    <FileText className="mx-auto text-nomade-gray" size={64} />
                    <h3 className="text-heading-md text-nomade-dark-brown">No Report Selected</h3>
                    <p className="text-body text-nomade-gray">Select a report from the list to view its contents.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;