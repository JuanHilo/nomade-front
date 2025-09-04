import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Building2,
  Users,
  FileText,
  Star,
  Globe,
  Briefcase,
  Award,
  Target,
  BarChart3,
  PieChart as PieChartIcon,
  Activity,
  Clock,
  CheckCircle,
  AlertCircle,
  Edit,
  MessageSquare,
  Video,
  Send
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart
} from 'recharts';

const InvestorDetailPage: React.FC = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock investor data - in real app this would come from API
  const investor = {
    id: 1,
    name: 'BlackRock Hospitality Fund',
    type: 'Institutional',
    avatar: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'hospitality@blackrock.com',
    phone: '+1 212-810-5300',
    location: 'New York, NY, USA',
    website: 'www.blackrock.com/hospitality',
    totalInvestment: '€380.0M',
    joinedDate: '8 Jan 2025',
    duration: '7 months',
    performance: '+22.1%',
    riskProfile: 'Conservative',
    investmentGoal: 'Long-term Growth',
    expectedROI: '12-15%',
    liquidityPreference: 'Medium',
    investmentHorizon: '7-10 years',
    aum: '€2.4B',
    founded: '1988',
    employees: '16,500+',
    headquarters: 'New York, NY',
    ceo: 'Larry Fink',
    description: 'BlackRock is the world\'s largest asset manager, with a strong focus on hospitality and real estate investments. Their hospitality fund specializes in luxury hotel properties across Europe and the Americas.',
    projects: [
      { 
        name: 'NOMADE Todos Santos', 
        investment: '€125.0M', 
        equity: '32.8%', 
        status: 'Operational',
        roi: '+24.5%',
        startDate: '2024-01-15',
        expectedExit: '2031-12-31'
      },
      { 
        name: 'NOMADE Madrid', 
        investment: '€155.0M', 
        equity: '41.2%', 
        status: 'Construction',
        roi: '+18.7%',
        startDate: '2024-03-20',
        expectedExit: '2032-06-30'
      },
      { 
        name: 'NOMADE Ibiza', 
        investment: '€100.0M', 
        equity: '28.5%', 
        status: 'Planning',
        roi: 'TBD',
        startDate: '2024-06-10',
        expectedExit: '2033-12-31'
      }
    ],
    contacts: [
      {
        name: 'Sarah Mitchell',
        role: 'Portfolio Manager',
        email: 's.mitchell@blackrock.com',
        phone: '+1 212-810-5301',
        avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200'
      },
      {
        name: 'David Chen',
        role: 'Investment Director',
        email: 'd.chen@blackrock.com',
        phone: '+1 212-810-5302',
        avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200'
      }
    ]
  };

  // Performance data
  const performanceData = [
    { month: 'Jan', value: 380.0, benchmark: 375.2, target: 385.0 },
    { month: 'Feb', value: 392.5, benchmark: 381.8, target: 395.0 },
    { month: 'Mar', value: 405.8, benchmark: 388.4, target: 405.0 },
    { month: 'Apr', value: 418.2, benchmark: 395.1, target: 415.0 },
    { month: 'May', value: 431.7, benchmark: 401.8, target: 425.0 },
    { month: 'Jun', value: 445.9, benchmark: 408.5, target: 435.0 },
    { month: 'Jul', value: 464.0, benchmark: 415.2, target: 445.0 }
  ];

  // Investment allocation
  const allocationData = [
    { name: 'NOMADE Todos Santos', value: 125.0, color: '#5d681d' },
    { name: 'NOMADE Madrid', value: 155.0, color: '#ee735a' },
    { name: 'NOMADE Ibiza', value: 100.0, color: '#82b074' }
  ];

  // Monthly cash flows
  const cashFlowData = [
    { month: 'Jan', inflow: 15.2, outflow: -8.5, net: 6.7 },
    { month: 'Feb', inflow: 18.7, outflow: -12.3, net: 6.4 },
    { month: 'Mar', inflow: 22.1, outflow: -9.8, net: 12.3 },
    { month: 'Apr', inflow: 19.5, outflow: -11.2, net: 8.3 },
    { month: 'May', inflow: 25.8, outflow: -14.6, net: 11.2 },
    { month: 'Jun', inflow: 28.3, outflow: -16.1, net: 12.2 },
    { month: 'Jul', inflow: 31.2, outflow: -18.5, net: 12.7 }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Building2 },
    { id: 'investments', label: 'Investments', icon: DollarSign },
    { id: 'performance', label: 'Performance', icon: TrendingUp },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'profile', label: 'Profile', icon: Users }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg">
          <p className="text-gray-900 font-medium mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-gray-600 text-sm">
              <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }}></span>
              <span className="font-medium">{entry.name}:</span> €{entry.value?.toLocaleString()}M
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-nomade-gray/10">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-nomade-green rounded-xl p-3">
              <DollarSign className="text-white" size={24} />
            </div>
            <span className="text-green-600 text-sm font-semibold">+22.1%</span>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-nomade-dark-brown">{investor.totalInvestment}</h3>
            <p className="text-sm text-nomade-gray font-medium">Total Investment</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-nomade-gray/10">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-nomade-terracotta rounded-xl p-3">
              <Building2 className="text-white" size={24} />
            </div>
            <span className="text-nomade-green text-sm font-semibold">{investor.projects.length} Active</span>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-nomade-dark-brown">{investor.projects.length}</h3>
            <p className="text-sm text-nomade-gray font-medium">Properties</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-nomade-gray/10">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-nomade-sage-green rounded-xl p-3">
              <TrendingUp className="text-white" size={24} />
            </div>
            <span className="text-nomade-green text-sm font-semibold">Above Target</span>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-nomade-dark-brown">{investor.expectedROI}</h3>
            <p className="text-sm text-nomade-gray font-medium">Expected ROI</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-nomade-gray/10">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-nomade-blue rounded-xl p-3">
              <Calendar className="text-white" size={24} />
            </div>
            <span className="text-nomade-gray text-sm font-semibold">{investor.duration}</span>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-nomade-dark-brown">{investor.investmentHorizon}</h3>
            <p className="text-sm text-nomade-gray font-medium">Investment Horizon</p>
          </div>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-nomade-gray/10">
        <h3 className="text-2xl font-bold text-nomade-dark-brown mb-6">Investment Performance</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
            <YAxis stroke="#9ca3af" fontSize={12} />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="value" stroke="#5d681d" strokeWidth={3} name="Portfolio Value" dot={{ r: 4, fill: "#5d681d" }} />
            <Line type="monotone" dataKey="benchmark" stroke="#ee735a" strokeWidth={2} name="Benchmark" dot={{ r: 3, fill: "#ee735a" }} />
            <Line type="monotone" dataKey="target" stroke="#82b074" strokeWidth={2} strokeDasharray="5 5" name="Target" dot={{ r: 3, fill: "#82b074" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Investment Allocation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-nomade-gray/10">
          <h3 className="text-2xl font-bold text-nomade-dark-brown mb-6">Investment Allocation</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={allocationData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                {allocationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-1 gap-3 mt-6">
            {allocationData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-nomade-dark-brown font-medium">{item.name}</span>
                </div>
                <span className="text-nomade-green font-bold">€{item.value}M</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-nomade-gray/10">
          <h3 className="text-2xl font-bold text-nomade-dark-brown mb-6">Monthly Cash Flow</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={cashFlowData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
              <YAxis stroke="#9ca3af" fontSize={12} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="inflow" fill="#5d681d" name="Inflow" />
              <Bar dataKey="outflow" fill="#ee735a" name="Outflow" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const renderInvestments = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6">
        {investor.projects.map((project, index) => (
          <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-nomade-gray/10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-nomade-dark-brown">{project.name}</h3>
                <div className="flex items-center space-x-4 mt-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    project.status === 'Operational' ? 'bg-green-100 text-green-800' :
                    project.status === 'Construction' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-nomade-gray text-sm">Started: {new Date(project.startDate).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-nomade-green">{project.investment}</div>
                <div className="text-sm text-nomade-gray">Investment Amount</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-nomade-gray/5 rounded-xl p-4">
                <div className="text-2xl font-bold text-nomade-dark-brown">{project.equity}</div>
                <div className="text-sm text-nomade-gray font-medium">Equity Share</div>
              </div>
              <div className="bg-nomade-gray/5 rounded-xl p-4">
                <div className="text-2xl font-bold text-nomade-green">{project.roi}</div>
                <div className="text-sm text-nomade-gray font-medium">Current ROI</div>
              </div>
              <div className="bg-nomade-gray/5 rounded-xl p-4">
                <div className="text-2xl font-bold text-nomade-terracotta">{new Date(project.expectedExit).getFullYear()}</div>
                <div className="text-sm text-nomade-gray font-medium">Expected Exit</div>
              </div>
              <div className="bg-nomade-gray/5 rounded-xl p-4">
                <div className="text-2xl font-bold text-nomade-blue">
                  {Math.round((new Date(project.expectedExit).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24 * 365 * 1000))}y
                </div>
                <div className="text-sm text-nomade-gray font-medium">Time to Exit</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPerformance = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-nomade-gray/10">
        <h3 className="text-2xl font-bold text-nomade-dark-brown mb-6">Performance Analytics</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-nomade-dark-brown mb-4">Key Performance Indicators</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-nomade-gray/5 rounded-xl">
                <span className="text-nomade-gray">Total Return</span>
                <span className="font-bold text-nomade-green">+22.1%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-nomade-gray/5 rounded-xl">
                <span className="text-nomade-gray">Annualized Return</span>
                <span className="font-bold text-nomade-green">+18.7%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-nomade-gray/5 rounded-xl">
                <span className="text-nomade-gray">Volatility</span>
                <span className="font-bold text-nomade-terracotta">8.3%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-nomade-gray/5 rounded-xl">
                <span className="text-nomade-gray">Sharpe Ratio</span>
                <span className="font-bold text-nomade-blue">2.24</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-nomade-dark-brown mb-4">Risk Metrics</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-nomade-gray/5 rounded-xl">
                <span className="text-nomade-gray">Beta</span>
                <span className="font-bold text-nomade-dark-brown">0.87</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-nomade-gray/5 rounded-xl">
                <span className="text-nomade-gray">Max Drawdown</span>
                <span className="font-bold text-red-600">-3.2%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-nomade-gray/5 rounded-xl">
                <span className="text-nomade-gray">VaR (95%)</span>
                <span className="font-bold text-nomade-terracotta">-2.1%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-nomade-gray/5 rounded-xl">
                <span className="text-nomade-gray">Information Ratio</span>
                <span className="font-bold text-nomade-green">1.45</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDocuments = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-nomade-gray/10">
        <h3 className="text-2xl font-bold text-nomade-dark-brown mb-6">Investor Documents</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Investment Agreement', date: '2025-01-08', type: 'PDF', size: '2.4 MB' },
            { name: 'Q2 2024 Report', date: '2024-07-15', type: 'PDF', size: '1.8 MB' },
            { name: 'Due Diligence Package', date: '2024-12-20', type: 'ZIP', size: '15.2 MB' },
            { name: 'Tax Documents 2024', date: '2024-12-31', type: 'PDF', size: '856 KB' },
            { name: 'Performance Summary', date: '2024-07-31', type: 'Excel', size: '1.2 MB' },
            { name: 'Risk Assessment', date: '2024-06-15', type: 'PDF', size: '3.1 MB' }
          ].map((doc, index) => (
            <div key={index} className="bg-nomade-gray/5 rounded-xl p-4 hover:bg-nomade-gray/10 transition-colors">
              <div className="flex items-center space-x-3 mb-3">
                <FileText className="text-nomade-green" size={24} />
                <div>
                  <h4 className="font-semibold text-nomade-dark-brown">{doc.name}</h4>
                  <p className="text-sm text-nomade-gray">{doc.date}</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-nomade-gray">{doc.type} • {doc.size}</span>
                <button className="bg-nomade-green text-white p-2 rounded-lg hover:bg-nomade-light-green transition-colors">
                  <Download size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );


  const renderProfile = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-nomade-gray/10">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-nomade-dark-brown">Investor Profile</h3>
          <button className="bg-nomade-green text-white px-6 py-2 rounded-xl hover:bg-nomade-light-green transition-colors flex items-center space-x-2">
            <Edit size={18} />
            <span>Edit Profile</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-nomade-dark-brown mb-4">Basic Information</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-nomade-gray/5 rounded-xl">
                <span className="text-nomade-gray">Fund Name</span>
                <span className="font-semibold text-nomade-dark-brown">{investor.name}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-nomade-gray/5 rounded-xl">
                <span className="text-nomade-gray">Type</span>
                <span className="font-semibold text-nomade-dark-brown">{investor.type}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-nomade-gray/5 rounded-xl">
                <span className="text-nomade-gray">AUM</span>
                <span className="font-semibold text-nomade-dark-brown">{investor.aum}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-nomade-gray/5 rounded-xl">
                <span className="text-nomade-gray">Founded</span>
                <span className="font-semibold text-nomade-dark-brown">{investor.founded}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-nomade-gray/5 rounded-xl">
                <span className="text-nomade-gray">Employees</span>
                <span className="font-semibold text-nomade-dark-brown">{investor.employees}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-nomade-dark-brown mb-4">Investment Preferences</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-nomade-gray/5 rounded-xl">
                <span className="text-nomade-gray">Risk Profile</span>
                <span className="font-semibold text-nomade-dark-brown">{investor.riskProfile}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-nomade-gray/5 rounded-xl">
                <span className="text-nomade-gray">Investment Goal</span>
                <span className="font-semibold text-nomade-dark-brown">{investor.investmentGoal}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-nomade-gray/5 rounded-xl">
                <span className="text-nomade-gray">Expected ROI</span>
                <span className="font-semibold text-nomade-dark-brown">{investor.expectedROI}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-nomade-gray/5 rounded-xl">
                <span className="text-nomade-gray">Liquidity Preference</span>
                <span className="font-semibold text-nomade-dark-brown">{investor.liquidityPreference}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-nomade-gray/5 rounded-xl">
                <span className="text-nomade-gray">Investment Horizon</span>
                <span className="font-semibold text-nomade-dark-brown">{investor.investmentHorizon}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-semibold text-nomade-dark-brown mb-4">Description</h4>
          <p className="text-nomade-gray leading-relaxed bg-nomade-gray/5 p-4 rounded-xl">
            {investor.description}
          </p>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'investments':
        return renderInvestments();
      case 'performance':
        return renderPerformance();
      case 'documents':
        return renderDocuments();
      case 'profile':
        return renderProfile();
      default:
        return renderOverview();
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
                to="/investors"
                className="inline-flex items-center space-x-2 text-nomade-off-white/80 hover:text-nomade-off-white transition-colors mb-4"
              >
                <ArrowLeft size={20} />
                <span>Back to Investors</span>
              </Link>
              <div className="flex items-center space-x-6">
                <img
                  src={investor.avatar}
                  alt={investor.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white/20"
                />
                <div>
                  <h1 className="text-display-md text-nomade-off-white">
                    {investor.name}
                  </h1>
                  <p className="text-body-xl text-nomade-off-white/90 mt-2">
                    {investor.type} • {investor.location}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="text-right">
                <div className="text-metric-lg text-nomade-green">{investor.totalInvestment}</div>
                <div className="text-label-sm text-nomade-off-white/80">Total Investment</div>
              </div>
              
              <div className="w-px h-16 bg-nomade-off-white/30"></div>
              
              <div className="text-right">
                <div className="text-metric-lg text-nomade-terracotta">{investor.performance}</div>
                <div className="text-label-sm text-nomade-off-white/80">Performance</div>
              </div>
              
              <div className="flex space-x-3">
                <button className="bg-nomade-green/20 text-nomade-off-white p-3 rounded-xl hover:bg-nomade-green/30 transition-colors">
                  <Mail size={20} />
                </button>
                <button className="bg-nomade-green/20 text-nomade-off-white p-3 rounded-xl hover:bg-nomade-green/30 transition-colors">
                  <Phone size={20} />
                </button>
                <button className="bg-nomade-green text-nomade-off-white px-6 py-3 rounded-xl hover:bg-nomade-light-green transition-colors text-button flex items-center space-x-2">
                  <Download size={20} />
                  <span>Export Report</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background overlay */}
        <div className="absolute inset-0 bg-nomade-dark-brown/60"></div>
      </div>

      <div className="px-8 py-8 max-w-7xl mx-auto bg-nomade-off-white">
        {/* Tab Navigation */}
        <div className="flex space-x-2 mb-8 bg-white rounded-2xl p-2 shadow-lg">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-4 px-6 rounded-xl text-button transition-all duration-200 flex items-center justify-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-nomade-green text-white shadow-lg'
                    : 'text-nomade-gray hover:bg-nomade-gray/5'
                }`}
              >
                <Icon size={20} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="min-h-screen">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default InvestorDetailPage;