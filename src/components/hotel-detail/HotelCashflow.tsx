import React, { useState } from 'react';
import { Download, Filter, TrendingUp, TrendingDown, DollarSign, Calendar, BarChart3 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, ComposedChart, Area, AreaChart } from 'recharts';

interface HotelCashflowProps {
  hotel: any;
}

const HotelCashflow: React.FC<HotelCashflowProps> = ({ hotel }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('2024');
  const [activeTab, setActiveTab] = useState('overview');

  // Cash Flow Overview Metrics
  const cashflowMetrics = [
    { 
      label: 'Operational Cash Flow', 
      value: '€1,800,000', 
      change: '+3.2%', 
      period: 'Year to date',
      icon: TrendingUp, 
      color: 'bg-nomade-green',
      positive: true
    },
    { 
      label: 'Investment Cash Flow', 
      value: '-€300,000', 
      change: '-2.1%', 
      period: 'Year to date',
      icon: TrendingDown, 
      color: 'bg-nomade-terracotta',
      positive: false
    },
    { 
      label: 'Financing Cash Flow', 
      value: '-€1,400,000', 
      change: '+1.8%', 
      period: 'Year to date',
      icon: BarChart3, 
      color: 'bg-nomade-sage-green',
      positive: false
    },
    { 
      label: 'Net Cash Flow', 
      value: '€350,000', 
      change: '+5.4%', 
      period: 'Year to date',
      icon: DollarSign, 
      color: 'bg-nomade-blue',
      positive: true
    }
  ];

  // Monthly Cash Flow Data
  const monthlyData = [
    { month: 'Jan', operational: 70000, investment: -50000, financing: -233333, net: 70000, cumulative: 2836361 },
    { month: 'Feb', operational: 70000, investment: -50000, financing: -233333, net: 70000, cumulative: 2906361 },
    { month: 'Mar', operational: 70000, investment: -50000, financing: -233333, net: 70000, cumulative: 2976361 },
    { month: 'Apr', operational: 70000, investment: -50000, financing: -233333, net: 70000, cumulative: 3046361 },
    { month: 'May', operational: 70000, investment: -50000, financing: -233333, net: 70000, cumulative: 3116361 },
    { month: 'Jun', operational: 70000, investment: -50000, financing: -233333, net: 70000, cumulative: 3186361 }
  ];

  // Capital Stack Data
  const capitalStack = [
    { type: 'Equity', amount: 9004000, percentage: 14.8, color: '#5d681d', description: 'Common equity - High risk, High return' },
    { type: 'Financial Debt', amount: 38500000, percentage: 63.1, color: '#ee735a', description: 'Mortgage with biannual amortizations' },
    { type: 'Other Debts', amount: 13500000, percentage: 22.1, color: '#82b074', description: 'Low risk, Low return' }
  ];

  // P&L Summary Data
  const plSummary = [
    { item: 'Personnel expenses', amount: -2501.56, percentage: 6.4 },
    { item: 'Other operating expenses', amount: -15584.09, percentage: 40.0 },
    { item: 'OPERATING RESULT', amount: -18085.65, percentage: 46.4 },
    { item: 'Financial income', amount: 20.79, percentage: 0.1 },
    { item: 'Financial expenses', amount: -20850.96, percentage: 53.5 },
    { item: 'FINANCIAL RESULT', amount: -20830.17, percentage: 53.4 },
    { item: 'RESULT OF THE YEAR', amount: -38915.82, percentage: 100.0 }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'cashflow', label: 'Cash Flow', icon: TrendingUp },
    { id: 'balance', label: 'Balance Sheet', icon: DollarSign },
    { id: 'pl', label: 'Profit & Loss', icon: Calendar },
    { id: 'financing', label: 'Financing', icon: Calendar }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg">
          <p className="text-gray-900 font-medium mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-gray-600 text-sm">
              <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }}></span>
              <span className="font-medium">{entry.name}:</span> €{entry.value?.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Cash Flow Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cashflowMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-nomade-gray/10">
              <div className="flex items-center justify-between mb-4">
                <div className={`${metric.color} rounded-xl p-3`}>
                  <Icon className="text-white" size={24} />
                </div>
                <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
                  metric.positive 
                    ? 'text-green-600 bg-green-100' 
                    : 'text-red-600 bg-red-100'
                }`}>
                  {metric.change}
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-nomade-dark-brown">{metric.value}</h3>
                <p className="text-sm text-nomade-gray font-medium">{metric.label}</p>
                <p className="text-xs text-nomade-gray">{metric.period}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Capital Stack */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-nomade-gray/10">
          <h3 className="text-2xl font-bold text-nomade-dark-brown mb-6">Capital Stack</h3>
          <div className="space-y-6">
            {capitalStack.map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-nomade-dark-brown">{item.type}</span>
                  <span className="text-nomade-green font-bold">{item.percentage}%</span>
                </div>
                <div className="bg-nomade-gray/20 rounded-full h-3">
                  <div 
                    className="h-3 rounded-full transition-all duration-500"
                    style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                  ></div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-nomade-gray">{item.description}</span>
                  <span className="font-semibold text-nomade-dark-brown">€{item.amount.toLocaleString()}</span>
                </div>
              </div>
            ))}
            <div className="border-t border-nomade-gray/20 pt-4">
              <div className="flex justify-between items-center">
                <span className="font-bold text-nomade-dark-brown">Total Capital Stack</span>
                <span className="font-bold text-nomade-green text-xl">€61,004,000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-nomade-gray/10">
          <h3 className="text-2xl font-bold text-nomade-dark-brown mb-6">Financing Structure</h3>
          <div className="space-y-4 text-sm text-nomade-gray leading-relaxed">
            <p>This financing structure is composed of <strong>€61.0M total capital</strong>, broken down as:</p>
            <ul className="space-y-2 ml-4">
              <li>• <strong>€12.5M Equity</strong>, representing 20.5% of the structure.</li>
              <li>• <strong>€35.2M Financial Debt</strong>, which makes up 57.7%, secured by a mortgage, with monthly amortizations starting January 2018 and maturing December 2037.</li>
              <li>• <strong>€13.3M in Other Debts</strong>, covering 21.8%.</li>
            </ul>
            <p>The financial debt includes a 0.5% opening fee and requires maintaining insurance and a bank deposit as obligations until fully repaid. Regular distributions are made to equity holders based on performance.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCashflow = () => (
    <div className="space-y-8">
      {/* Cash Flow Statement Table */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-nomade-gray/10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-nomade-dark-brown">Cash Flow Statement 2025</h3>
          <button className="bg-nomade-green text-white px-6 py-2 rounded-xl hover:bg-nomade-light-green transition-all duration-300 font-semibold flex items-center space-x-2">
            <Download size={18} />
            <span>Export</span>
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-nomade-gray/20">
                <th className="text-left py-3 px-4 font-semibold text-nomade-dark-brown">Category</th>
                <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">January</th>
                <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">February</th>
                <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">March</th>
                <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">April</th>
                <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">May</th>
                <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">June</th>
                <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">Total</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-nomade-gray/10">
                <td className="py-3 px-4 font-medium text-nomade-dark-brown">Operational Cash Flow</td>
                <td className="py-3 px-4 text-right text-nomade-dark-brown">€70,000</td>
                <td className="py-3 px-4 text-right text-nomade-dark-brown">€70,000</td>
                <td className="py-3 px-4 text-right text-nomade-dark-brown">€70,000</td>
                <td className="py-3 px-4 text-right text-nomade-dark-brown">€70,000</td>
                <td className="py-3 px-4 text-right text-nomade-dark-brown">€70,000</td>
                <td className="py-3 px-4 text-right text-nomade-dark-brown">€70,000</td>
                <td className="py-3 px-4 text-right font-semibold text-nomade-green">€1,800,000</td>
              </tr>
              <tr className="border-b border-nomade-gray/10">
                <td className="py-3 px-4 font-medium text-nomade-dark-brown">Investment Cash Flow</td>
                <td className="py-3 px-4 text-right text-red-600">-€50,000</td>
                <td className="py-3 px-4 text-right text-red-600">-€50,000</td>
                <td className="py-3 px-4 text-right text-red-600">-€50,000</td>
                <td className="py-3 px-4 text-right text-red-600">-€50,000</td>
                <td className="py-3 px-4 text-right text-red-600">-€50,000</td>
                <td className="py-3 px-4 text-right text-red-600">-€50,000</td>
                <td className="py-3 px-4 text-right font-semibold text-red-600">-€300,000</td>
              </tr>
              <tr className="border-b border-nomade-gray/10">
                <td className="py-3 px-4 font-medium text-nomade-dark-brown">Financing Cash Flow</td>
                <td className="py-3 px-4 text-right text-red-600">-€233,333</td>
                <td className="py-3 px-4 text-right text-red-600">-€233,333</td>
                <td className="py-3 px-4 text-right text-red-600">-€233,333</td>
                <td className="py-3 px-4 text-right text-red-600">-€233,333</td>
                <td className="py-3 px-4 text-right text-red-600">-€233,333</td>
                <td className="py-3 px-4 text-right text-red-600">-€233,333</td>
                <td className="py-3 px-4 text-right font-semibold text-red-600">-€1,400,000</td>
              </tr>
              <tr className="bg-nomade-green/5 border-b border-nomade-gray/10">
                <td className="py-3 px-4 font-bold text-nomade-dark-brown">Net Cash Flow</td>
                <td className="py-3 px-4 text-right font-bold text-nomade-green">€70,000</td>
                <td className="py-3 px-4 text-right font-bold text-nomade-green">€70,000</td>
                <td className="py-3 px-4 text-right font-bold text-nomade-green">€70,000</td>
                <td className="py-3 px-4 text-right font-bold text-nomade-green">€70,000</td>
                <td className="py-3 px-4 text-right font-bold text-nomade-green">€70,000</td>
                <td className="py-3 px-4 text-right font-bold text-nomade-green">€70,000</td>
                <td className="py-3 px-4 text-right font-bold text-nomade-green">€350,000</td>
              </tr>
              <tr className="border-b border-nomade-gray/10">
                <td className="py-3 px-4 font-medium text-nomade-dark-brown">Initial Cash</td>
                <td className="py-3 px-4 text-right text-nomade-dark-brown">€2,766,361</td>
                <td className="py-3 px-4 text-right text-nomade-dark-brown">-</td>
                <td className="py-3 px-4 text-right text-nomade-dark-brown">-</td>
                <td className="py-3 px-4 text-right text-nomade-dark-brown">-</td>
                <td className="py-3 px-4 text-right text-nomade-dark-brown">-</td>
                <td className="py-3 px-4 text-right text-nomade-dark-brown">-</td>
                <td className="py-3 px-4 text-right font-semibold text-nomade-dark-brown">€2,766,361</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-nomade-dark-brown">Final Cash</td>
                <td className="py-3 px-4 text-right text-nomade-dark-brown">-</td>
                <td className="py-3 px-4 text-right text-nomade-dark-brown">-</td>
                <td className="py-3 px-4 text-right text-nomade-dark-brown">-</td>
                <td className="py-3 px-4 text-right text-nomade-dark-brown">-</td>
                <td className="py-3 px-4 text-right text-nomade-dark-brown">-</td>
                <td className="py-3 px-4 text-right text-nomade-dark-brown">€3,116,361</td>
                <td className="py-3 px-4 text-right font-semibold text-nomade-blue">€3,116,361</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-nomade-gray/10">
          <h3 className="text-lg font-semibold text-nomade-dark-brown mb-4">Monthly Cash Flow</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
              <YAxis stroke="#9ca3af" fontSize={12} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="operational" fill="#5d681d" name="Inflow" />
              <Bar dataKey="investment" fill="#ee735a" name="Outflow" />
              <Line type="monotone" dataKey="net" stroke="#82b074" strokeWidth={3} name="Balance" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-nomade-gray/10">
          <h3 className="text-lg font-semibold text-nomade-dark-brown mb-4">Cumulative Cash Position</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="cumulativeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5d681d" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#5d681d" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
              <YAxis stroke="#9ca3af" fontSize={12} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="cumulative" stroke="#5d681d" strokeWidth={2} fill="url(#cumulativeGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Analysis */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-nomade-gray/10">
        <h3 className="text-2xl font-bold text-nomade-dark-brown mb-6">Cash Flow Analysis</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-nomade-dark-brown mb-4">Analysis</h4>
            <p className="text-nomade-gray mb-4">
              In 2025, the project showed healthy performance with a positive cash flow of €350,000, driven by stable rental income and controlled expenses.
            </p>
            <h5 className="font-semibold text-nomade-dark-brown mb-2">Key Observations</h5>
            <ul className="space-y-1 text-sm text-nomade-gray">
              <li>• Strong operational cash flow of €1,800,000</li>
              <li>• Investment outflows of €300,000 for capital expenditures</li>
              <li>• Financing activities generated -€1,400,000</li>
              <li>• Final cash position of €3,116,361</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-nomade-dark-brown mb-2">Recommendations</h5>
            <ul className="space-y-1 text-sm text-nomade-gray">
              <li>• Maintain current operational efficiency</li>
              <li>• Consider optimizing marketing expenses</li>
              <li>• Monitor debt service coverage ratio</li>
              <li>• Prepare for upcoming capital expenditures in Q3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPL = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-nomade-gray/10">
        <h3 className="text-2xl font-bold text-nomade-dark-brown mb-6">Profit & Loss Summary</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-nomade-gray/20">
                <th className="text-left py-3 px-4 font-semibold text-nomade-dark-brown">Item</th>
                <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">Amount (€)</th>
                <th className="text-right py-3 px-4 font-semibold text-nomade-dark-brown">% of Revenue</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {plSummary.map((item, index) => (
                <tr key={index} className="border-b border-nomade-gray/10">
                  <td className="py-3 px-4 font-medium text-nomade-dark-brown">{item.item}</td>
                  <td className={`py-3 px-4 text-right font-semibold ${
                    item.amount < 0 ? 'text-red-600' : 'text-nomade-green'
                  }`}>
                    €{item.amount.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 text-right text-nomade-gray">{item.percentage}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderBalanceSheet = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-nomade-gray/10">
        <h3 className="text-2xl font-bold text-nomade-dark-brown mb-6">Balance Sheet</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Assets */}
          <div>
            <h4 className="text-lg font-semibold text-nomade-dark-brown mb-4">Assets</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-nomade-gray/10">
                <span className="text-nomade-gray">Intangible Assets</span>
                <span className="font-semibold text-nomade-dark-brown">€17,733</span>
              </div>
              <div className="flex justify-between py-2 border-b border-nomade-gray/10">
                <span className="text-nomade-gray">Tangible Fixed Assets</span>
                <span className="font-semibold text-nomade-dark-brown">€5,444,715</span>
              </div>
              <div className="flex justify-between py-2 border-b border-nomade-gray/10">
                <span className="text-nomade-gray">Investment Properties</span>
                <span className="font-semibold text-nomade-dark-brown">€34,153,147</span>
              </div>
              <div className="flex justify-between py-2 border-b border-nomade-gray/10">
                <span className="text-nomade-gray">Long Term Investments</span>
                <span className="font-semibold text-nomade-dark-brown">€444,672</span>
              </div>
              <div className="flex justify-between py-2 border-b border-nomade-gray/20 font-bold">
                <span className="text-nomade-dark-brown">Total Non-Current Assets</span>
                <span className="text-nomade-green">€40,452,906</span>
              </div>
              <div className="flex justify-between py-2 border-b border-nomade-gray/10">
                <span className="text-nomade-gray">Current Assets</span>
                <span className="font-semibold text-nomade-dark-brown">€973,482</span>
              </div>
              <div className="flex justify-between py-3 bg-nomade-green/5 px-3 rounded-lg font-bold">
                <span className="text-nomade-dark-brown">Total Assets</span>
                <span className="text-nomade-green">€41,426,389</span>
              </div>
            </div>
          </div>

          {/* Liabilities & Equity */}
          <div>
            <h4 className="text-lg font-semibold text-nomade-dark-brown mb-4">Liabilities & Equity</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-nomade-gray/10">
                <span className="text-nomade-gray">Net Equity</span>
                <span className="font-semibold text-red-600">-€6,601,418</span>
              </div>
              <div className="flex justify-between py-2 border-b border-nomade-gray/10">
                <span className="text-nomade-gray">Long Term Debts</span>
                <span className="font-semibold text-nomade-dark-brown">€19,331,608</span>
              </div>
              <div className="flex justify-between py-2 border-b border-nomade-gray/10">
                <span className="text-nomade-gray">Group Companies L/T</span>
                <span className="font-semibold text-nomade-dark-brown">€11,944,214</span>
              </div>
              <div className="flex justify-between py-2 border-b border-nomade-gray/10">
                <span className="text-nomade-gray">Deferred Revenues</span>
                <span className="font-semibold text-nomade-dark-brown">€2,000,000</span>
              </div>
              <div className="flex justify-between py-2 border-b border-nomade-gray/20 font-bold">
                <span className="text-nomade-dark-brown">Total Long Term Liabilities</span>
                <span className="text-nomade-terracotta">€33,445,312</span>
              </div>
              <div className="flex justify-between py-2 border-b border-nomade-gray/10">
                <span className="text-nomade-gray">Current Liabilities</span>
                <span className="font-semibold text-nomade-dark-brown">€1,379,659</span>
              </div>
              <div className="flex justify-between py-3 bg-nomade-terracotta/5 px-3 rounded-lg font-bold">
                <span className="text-nomade-dark-brown">Total Liabilities</span>
                <span className="text-nomade-terracotta">€41,426,389</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFinancing = () => (
    <div className="space-y-8">
      {/* Financing Structure */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-nomade-gray/10">
        <h3 className="text-2xl font-bold text-nomade-dark-brown mb-6">Financing Structure</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-nomade-dark-brown mb-4">Debt Details</h4>
            <div className="space-y-4">
              <div className="bg-nomade-gray/5 rounded-xl p-4">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-nomade-gray">Type:</span>
                    <span className="font-semibold text-nomade-dark-brown">Development Loan</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-nomade-gray">Bank:</span>
                    <span className="font-semibold text-nomade-dark-brown">BBVA Mexico</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-nomade-gray">Amount:</span>
                    <span className="font-semibold text-nomade-green">€21,800,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-nomade-gray">Interest Rate:</span>
                    <span className="font-semibold text-nomade-dark-brown">2.25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-nomade-gray">Due Date:</span>
                    <span className="font-semibold text-nomade-dark-brown">01/12/2037</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-nomade-gray">Amortization:</span>
                    <span className="font-semibold text-nomade-dark-brown">Quarterly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-nomade-dark-brown mb-4">Key Money Structure</h4>
            <div className="space-y-4">
              <div className="bg-nomade-green/5 rounded-xl p-4">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between font-semibold">
                    <span className="text-nomade-dark-brown">Total Key Money:</span>
                    <span className="text-nomade-green">€1,800,000</span>
                  </div>
                  <div className="space-y-2 text-xs text-nomade-gray">
                    <div className="flex justify-between">
                      <span>Upon signing:</span>
                      <span>€800,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Construction start:</span>
                      <span>€200,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hotel opening:</span>
                      <span>€750,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>365 days after opening:</span>
                      <span>€750,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Management Agreement */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-nomade-gray/10">
        <h3 className="text-2xl font-bold text-nomade-dark-brown mb-6">Management Agreement - NOMADE Hotels</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-nomade-dark-brown mb-4">Agreement Terms</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-nomade-gray/10">
                <span className="text-nomade-gray">Term:</span>
                <span className="font-semibold text-nomade-dark-brown">25 years</span>
              </div>
              <div className="flex justify-between py-2 border-b border-nomade-gray/10">
                <span className="text-nomade-gray">Base Fee:</span>
                <span className="font-semibold text-nomade-dark-brown">2.5% of Gross Revenue</span>
              </div>
              <div className="flex justify-between py-2 border-b border-nomade-gray/10">
                <span className="text-nomade-gray">Marketing Fee:</span>
                <span className="font-semibold text-nomade-dark-brown">1.5% of Gross Revenue</span>
              </div>
              <div className="flex justify-between py-2 border-b border-nomade-gray/10">
                <span className="text-nomade-gray">Incentive Fee:</span>
                <span className="font-semibold text-nomade-dark-brown">20% of AGOP</span>
              </div>
              <div className="flex justify-between py-2 border-b border-nomade-gray/10">
                <span className="text-nomade-gray">FF&E Reserve:</span>
                <span className="font-semibold text-nomade-dark-brown">3% (Year 3+)</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-nomade-dark-brown mb-4">Priority Return</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-nomade-blue/5 rounded-xl p-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-nomade-gray">Year 1:</span>
                    <span className="font-semibold text-nomade-dark-brown">€18,000/key (€864,000)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-nomade-gray">Year 2:</span>
                    <span className="font-semibold text-nomade-dark-brown">€20,000/key (€960,000)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-nomade-gray">Year 3:</span>
                    <span className="font-semibold text-nomade-dark-brown">€22,000/key (€1,056,000)</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span className="text-nomade-dark-brown">Year 4+:</span>
                    <span className="text-nomade-green">€25,000/key (€1,200,000)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'cashflow':
        return renderCashflow();
      case 'balance':
        return renderBalanceSheet();
      case 'pl':
        return renderPL();
      case 'financing':
        return renderFinancing();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="space-y-8">
      {/* Financial Analysis Header */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-nomade-gray/10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold text-nomade-dark-brown">Financial Analysis</h2>
          <div className="flex items-center space-x-4">
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="bg-white border border-nomade-gray/30 rounded-xl px-4 py-2 text-nomade-dark-brown focus:ring-2 focus:ring-nomade-green"
            >
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
            <button className="bg-nomade-green text-white px-6 py-2 rounded-xl hover:bg-nomade-light-green transition-all duration-300 font-semibold flex items-center space-x-2">
              <Download size={18} />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-2 bg-nomade-gray/5 rounded-xl p-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-nomade-green text-white shadow-lg'
                    : 'text-nomade-gray hover:bg-nomade-gray/10'
                }`}
              >
                <Icon size={18} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default HotelCashflow;