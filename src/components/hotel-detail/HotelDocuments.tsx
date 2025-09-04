import React, { useState } from 'react';
import { Download, Eye, FileText, Calendar, Filter, Search, Plus } from 'lucide-react';

interface HotelDocumentsProps {
  hotel: any;
}

const HotelDocuments: React.FC<HotelDocumentsProps> = ({ hotel }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const documents = [
    {
      id: 1,
      title: 'Asset Management & Development Report',
      category: 'Asset Management',
      date: 'April 2024',
      type: 'PDF',
      size: '2.4 MB',
      status: 'Published',
      downloads: 127,
      version: 'V18',
      description: 'Comprehensive asset management report covering operational performance and development milestones'
    },
    {
      id: 2,
      title: 'Investment & Development Analysis',
      category: 'Investment',
      date: 'April 2024',
      type: 'PDF',
      size: '1.8 MB',
      status: 'Published',
      downloads: 89,
      version: 'V24',
      description: 'Detailed investment analysis and development progress report'
    },
    {
      id: 3,
      title: 'Monthly P&L Statement',
      category: 'Financial',
      date: 'April 2024',
      type: 'Excel',
      size: '856 KB',
      status: 'Published',
      downloads: 234,
      version: 'V12',
      description: 'Monthly profit and loss statement with detailed breakdown'
    },
    {
      id: 4,
      title: 'Cash Flow Analysis',
      category: 'Financial',
      date: 'April 2024',
      type: 'PDF',
      size: '1.2 MB',
      status: 'Published',
      downloads: 156,
      version: 'V08',
      description: 'Comprehensive cash flow analysis and projections'
    },
    {
      id: 5,
      title: 'Management Agreement',
      category: 'Legal',
      date: 'October 2021',
      type: 'PDF',
      size: '3.1 MB',
      status: 'Published',
      downloads: 45,
      version: 'Final',
      description: 'Only You Hotels management agreement - 20 year term'
    },
    {
      id: 6,
      title: 'STR Performance Report',
      category: 'Performance',
      date: 'April 2024',
      type: 'PDF',
      size: '945 KB',
      status: 'Published',
      downloads: 78,
      version: 'V05',
      description: 'STR competitive set analysis and market positioning'
    },
    {
      id: 7,
      title: 'OTB Forecast Report',
      category: 'Forecast',
      date: 'May 2024',
      type: 'Excel',
      size: '1.1 MB',
      status: 'Draft',
      downloads: 0,
      version: 'Draft',
      description: 'On-the-books forecast analysis and projections'
    },
    {
      id: 8,
      title: 'Balance Sheet',
      category: 'Financial',
      date: 'April 2024',
      type: 'PDF',
      size: '678 KB',
      status: 'Published',
      downloads: 92,
      version: 'V03',
      description: 'Detailed balance sheet with assets and liabilities breakdown'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Documents' },
    { value: 'Asset Management', label: 'Asset Management' },
    { value: 'Investment', label: 'Investment' },
    { value: 'Financial', label: 'Financial' },
    { value: 'Legal', label: 'Legal' },
    { value: 'Performance', label: 'Performance' },
    { value: 'Forecast', label: 'Forecast' }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
        return 'bg-green-100 text-green-800';
      case 'Draft':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'PDF':
        return '📄';
      case 'Excel':
        return '📊';
      default:
        return '📄';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-nomade-gray/10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-nomade-dark-brown">Document Library</h2>
            <p className="text-nomade-gray mt-2">Access all hotel-related documents and reports</p>
          </div>
          <button className="bg-nomade-green text-white px-6 py-3 rounded-xl hover:bg-nomade-light-green transition-all duration-300 font-semibold flex items-center space-x-2 shadow-lg">
            <Plus size={20} />
            <span>Upload Document</span>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-nomade-gray" size={20} />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-nomade-gray/30 rounded-xl focus:ring-2 focus:ring-nomade-green focus:border-transparent transition-all duration-200 text-nomade-dark-brown"
            />
          </div>
          
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-white border border-nomade-gray/30 rounded-xl px-4 py-3 text-nomade-dark-brown focus:ring-2 focus:ring-nomade-green min-w-[200px]"
          >
            {categories.map(category => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Document Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-nomade-gray/10">
          <div className="flex items-center space-x-3">
            <div className="bg-nomade-green/10 rounded-xl p-3">
              <FileText className="text-nomade-green" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-nomade-dark-brown">{documents.length}</h3>
              <p className="text-sm text-nomade-gray font-medium">Total Documents</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-nomade-gray/10">
          <div className="flex items-center space-x-3">
            <div className="bg-nomade-terracotta/10 rounded-xl p-3">
              <Download className="text-nomade-terracotta" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-nomade-dark-brown">
                {documents.reduce((sum, doc) => sum + doc.downloads, 0)}
              </h3>
              <p className="text-sm text-nomade-gray font-medium">Total Downloads</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-nomade-gray/10">
          <div className="flex items-center space-x-3">
            <div className="bg-nomade-sage-green/10 rounded-xl p-3">
              <Calendar className="text-nomade-sage-green" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-nomade-dark-brown">
                {documents.filter(doc => doc.status === 'Published').length}
              </h3>
              <p className="text-sm text-nomade-gray font-medium">Published</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-nomade-gray/10">
          <div className="flex items-center space-x-3">
            <div className="bg-nomade-blue/10 rounded-xl p-3">
              <FileText className="text-nomade-blue" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-nomade-dark-brown">
                {documents.filter(doc => doc.status === 'Draft').length}
              </h3>
              <p className="text-sm text-nomade-gray font-medium">Drafts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredDocuments.map((document) => (
          <div
            key={document.id}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-nomade-gray/10"
          >
            {/* Document Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="text-3xl">{getTypeIcon(document.type)}</div>
                <div>
                  <h3 className="text-lg font-bold text-nomade-dark-brown">{document.title}</h3>
                  <p className="text-sm text-nomade-gray">{document.category}</p>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(document.status)}`}>
                  {document.status}
                </span>
                <span className="text-xs text-nomade-gray bg-nomade-gray/10 px-2 py-1 rounded-full">
                  {document.version}
                </span>
              </div>
            </div>

            {/* Document Info */}
            <div className="space-y-3 mb-6">
              <p className="text-sm text-nomade-gray">{document.description}</p>
              
              <div className="flex items-center justify-between text-xs text-nomade-gray">
                <span>{document.date}</span>
                <span>{document.size}</span>
              </div>

              {document.status === 'Published' && (
                <div className="bg-nomade-gray/5 rounded-xl p-3">
                  <div className="text-sm text-nomade-gray">
                    Downloads: <span className="font-semibold text-nomade-dark-brown">{document.downloads}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button className="flex-1 bg-nomade-green text-white py-3 rounded-xl hover:bg-nomade-light-green transition-all duration-300 font-semibold flex items-center justify-center space-x-2">
                <Eye size={18} />
                <span>View</span>
              </button>
              {document.status === 'Published' && (
                <button className="bg-nomade-terracotta text-white py-3 px-4 rounded-xl hover:bg-nomade-orange-brown transition-all duration-300">
                  <Download size={18} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredDocuments.length === 0 && (
        <div className="bg-white rounded-2xl p-12 shadow-lg border border-nomade-gray/10 text-center">
          <FileText className="mx-auto text-nomade-gray mb-4" size={48} />
          <h3 className="text-xl font-semibold text-nomade-dark-brown mb-2">No documents found</h3>
          <p className="text-nomade-gray">Try adjusting your search criteria or category filter.</p>
        </div>
      )}
    </div>
  );
};

export default HotelDocuments;