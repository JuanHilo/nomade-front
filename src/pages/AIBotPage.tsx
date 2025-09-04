import React, { useState } from 'react';
import { Send, Bot, User, Sparkles, TrendingUp, DollarSign, Building2, BarChart3, PieChart as PieChartIcon, Activity, Zap, Brain, Target, Award } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  suggestions?: string[];
  charts?: any[];
  insights?: string[];
}

const AIBotPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: "Welcome to FinGPT, your luxury hospitality AI assistant. I've analyzed your portfolio and have some key insights ready. What would you like to explore?",
      timestamp: new Date(),
      suggestions: [
        "Show me Q1 performance analysis",
        "Compare ADR across all properties", 
        "Generate investor presentation",
        "Forecast RevPAR trends"
      ],
      charts: [
        {
          type: 'line',
          title: 'Portfolio Performance Trend',
          data: [
            { month: 'Jan', revenue: 2.4, occupancy: 78, adr: 285 },
            { month: 'Feb', revenue: 2.8, occupancy: 82, adr: 295 },
            { month: 'Mar', revenue: 3.2, occupancy: 85, adr: 310 },
            { month: 'Apr', revenue: 3.6, occupancy: 87, adr: 325 },
            { month: 'May', revenue: 3.9, occupancy: 89, adr: 340 },
            { month: 'Jun', revenue: 4.1, occupancy: 91, adr: 355 }
          ]
        },
        {
          type: 'pie',
          title: 'Revenue Distribution',
          data: [
            { name: 'NOMADE Punta Mita', value: 35, color: '#5d681d' },
            { name: 'NOMADE Todos Santos', value: 28, color: '#ee735a' },
            { name: 'NOMADE New York', value: 22, color: '#82b074' },
            { name: 'NOMADE Madrid', value: 15, color: '#cc7d42' }
          ]
        }
      ],
      insights: [
        "Portfolio revenue up 71% YoY",
        "Average occupancy: 87.3% (+5.2% vs target)",
        "ADR growth: 18.5% across all properties",
        "NOMADE Punta Mita leading performance"
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const userMessage: Message = {
        id: messages.length + 1,
        type: 'user',
        content: inputValue,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);
      setIsTyping(true);
      
      // Simulate AI response with charts
      setTimeout(() => {
        const botResponse: Message = {
          id: messages.length + 2,
          type: 'bot',
          content: `I've analyzed your query about "${inputValue}" and generated comprehensive insights. Here's what the data reveals:`,
          timestamp: new Date(),
          suggestions: [
            "Deep dive into this analysis",
            "Generate executive summary",
            "Compare with industry benchmarks",
            "Export detailed report"
          ],
          charts: [
            {
              type: 'bar',
              title: 'Monthly Performance Analysis',
              data: [
                { month: 'Jan', revenue: 2.4, gop: 0.8, occupancy: 78 },
                { month: 'Feb', revenue: 2.8, gop: 1.0, occupancy: 82 },
                { month: 'Mar', revenue: 3.2, gop: 1.2, occupancy: 85 },
                { month: 'Apr', revenue: 3.6, gop: 1.4, occupancy: 87 },
                { month: 'May', revenue: 3.9, gop: 1.6, occupancy: 89 },
                { month: 'Jun', revenue: 4.1, gop: 1.7, occupancy: 91 }
              ]
            }
          ],
          insights: [
            "Strong upward trajectory in all KPIs",
            "GOP margin improving consistently",
            "Occupancy exceeding market average by 12%",
            "Revenue per available room up 23% QoQ"
          ]
        };
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, 2000);
      
      setInputValue('');
    }
  };


  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg">
          <p className="text-gray-900 font-medium mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-gray-600 text-sm">
              <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }}></span>
              <span className="font-medium">{entry.name}:</span> {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderChart = (chart: any) => {
    switch (chart.type) {
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={chart.data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
              <YAxis stroke="#9ca3af" fontSize={12} />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="revenue" stroke="#5d681d" strokeWidth={3} name="Revenue (€M)" />
              <Line type="monotone" dataKey="occupancy" stroke="#ee735a" strokeWidth={2} name="Occupancy %" />
            </LineChart>
          </ResponsiveContainer>
        );
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chart.data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
              <YAxis stroke="#9ca3af" fontSize={12} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="revenue" fill="#5d681d" name="Revenue (€M)" />
              <Bar dataKey="gop" fill="#ee735a" name="GOP (€M)" />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={chart.data}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {chart.data.map((entry: any, index: number) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 px-8 py-6 flex flex-col">
      <div className="flex-1 bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
        {/* Chat Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex space-x-3 max-w-4xl ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                {/* Premium Avatar */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg ${
                  message.type === 'user' 
                    ? 'bg-gradient-to-br from-nomade-green to-nomade-light-green text-white' 
                    : 'bg-gradient-to-br from-nomade-terracotta via-nomade-orange-brown to-red-500 text-white'
                }`}>
                  {message.type === 'user' ? <User size={16} /> : <Brain size={16} />}
                </div>
                
                {/* Message Content */}
                <div className={`rounded-2xl p-4 shadow-lg ${
                  message.type === 'user'
                    ? 'bg-gradient-to-br from-nomade-green to-nomade-light-green text-white'
                    : 'bg-gradient-to-br from-white to-gray-50 text-nomade-dark-brown border border-gray-100'
                }`}>
                  <p className="leading-relaxed">{message.content}</p>
                  
                  {/* Charts */}
                  {message.charts && (
                    <div className="mt-4 space-y-4">
                      {message.charts.map((chart, index) => (
                        <div key={index} className="bg-white/90 rounded-xl p-4 shadow-lg">
                          <h4 className="text-badge text-white mb-2 flex items-center space-x-2">
                            <span>{chart.title}</span>
                          </h4>
                          {renderChart(chart)}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* AI Insights */}
                  {message.insights && (
                    <div className="mt-4 bg-white/20 rounded-xl p-3">
                      <h4 className="text-sm font-bold mb-2 flex items-center space-x-2">
                        <Sparkles size={16} />
                        <span>Key Insights</span>
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {message.insights.map((insight, index) => (
                          <div key={index} className="bg-white/30 rounded-lg p-2 text-sm font-medium">
                            • {insight}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Suggestions */}
                  {message.suggestions && (
                    <div className="mt-4 space-y-2">
                      <p className="text-badge text-white/75 flex items-center space-x-2">
                        <Target size={16} />
                        <span>Suggested Actions:</span>
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {message.suggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => setInputValue(suggestion)}
                            className="text-left bg-white/20 hover:bg-white/30 border border-white/30 rounded-lg p-2 text-body-small transition-all duration-200 hover:transform hover:scale-105 font-medium text-white"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex space-x-3 max-w-4xl">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-br from-nomade-terracotta via-nomade-orange-brown to-red-500 text-white">
                  <Brain size={16} />
                </div>
                <div className="bg-gradient-to-br from-white to-gray-50 text-nomade-dark-brown border border-gray-100 rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-nomade-green rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-nomade-green rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-nomade-green rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-body-small text-nomade-gray">FinGPT is analyzing...</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Premium Input Area */}
        <div className="border-t border-gray-200/50 p-4 bg-gradient-to-r from-gray-50/50 to-white/50 backdrop-blur-sm">
          <div className="flex space-x-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about performance, generate insights, analyze trends..."
                className="w-full py-3 px-4 pr-12 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:ring-2 focus:ring-nomade-green focus:border-transparent transition-all duration-200 text-nomade-dark-brown shadow-lg"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-br from-nomade-green to-nomade-light-green text-white p-2 rounded-lg hover:from-nomade-light-green hover:to-nomade-green transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
          
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "Portfolio performance summary",
              "Revenue vs budget analysis", 
              "Competitive benchmarking",
              "Seasonal forecast modeling",
              "Investor presentation data",
              "Risk assessment analysis"
            ].map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setInputValue(suggestion)}
                className="bg-white/80 backdrop-blur-sm text-nomade-gray text-badge px-3 py-1 rounded-full hover:bg-nomade-green hover:text-white transition-all duration-200 border border-gray-200/50 shadow-sm hover:shadow-md"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIBotPage;