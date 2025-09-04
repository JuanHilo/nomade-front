import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, TrendingUp, DollarSign, Building2, BarChart3, PieChart as PieChartIcon, Activity, Zap, Brain, Target, Award, Cpu, Database, Globe, Layers } from 'lucide-react';
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
      content: "Welcome to FinGPT, your elite hospitality intelligence system. I've analyzed your entire portfolio in real-time and identified key optimization opportunities. What strategic insights would you like me to generate?",
      timestamp: new Date(),
      suggestions: [
        "Generate Q1 executive briefing",
        "Analyze competitive positioning", 
        "Forecast revenue optimization",
        "Create investor presentation deck"
      ],
      charts: [
        {
          type: 'line',
          title: 'Portfolio Intelligence Overview',
          data: [
            { month: 'Jan', revenue: 2.4, occupancy: 78, adr: 285, prediction: 2.6 },
            { month: 'Feb', revenue: 2.8, occupancy: 82, adr: 295, prediction: 3.1 },
            { month: 'Mar', revenue: 3.2, occupancy: 85, adr: 310, prediction: 3.5 },
            { month: 'Apr', revenue: 3.6, occupancy: 87, adr: 325, prediction: 3.9 },
            { month: 'May', revenue: 3.9, occupancy: 89, adr: 340, prediction: 4.2 },
            { month: 'Jun', revenue: 4.1, occupancy: 91, adr: 355, prediction: 4.5 }
          ]
        },
        {
          type: 'pie',
          title: 'Revenue Intelligence Distribution',
          data: [
            { name: 'NOMADE Punta Mita', value: 35, color: '#00ff88', performance: '+24.5%' },
            { name: 'NOMADE Todos Santos', value: 28, color: '#0099ff', performance: '+18.7%' },
            { name: 'NOMADE New York', value: 22, color: '#ff0099', performance: 'TBD' },
            { name: 'NOMADE Madrid', value: 15, color: '#ffaa00', performance: 'TBD' }
          ]
        }
      ],
      insights: [
        "Portfolio revenue trajectory: +71% YoY with AI-optimized pricing",
        "Occupancy intelligence: 87.3% (+5.2% vs market benchmark)",
        "ADR optimization potential: 18.5% growth identified across properties",
        "NOMADE Punta Mita: Leading performance with AI-driven yield management"
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
      
      // Simulate AI response with advanced analytics
      setTimeout(() => {
        const botResponse: Message = {
          id: messages.length + 2,
          type: 'bot',
          content: `I've processed your query "${inputValue}" through advanced neural networks and generated comprehensive strategic intelligence. Here's what the AI analysis reveals:`,
          timestamp: new Date(),
          suggestions: [
            "Deep dive neural analysis",
            "Generate executive AI summary",
            "Compare with global benchmarks",
            "Export predictive models"
          ],
          charts: [
            {
              type: 'bar',
              title: 'AI-Powered Performance Prediction',
              data: [
                { month: 'Jan', revenue: 2.4, gop: 0.8, occupancy: 78, aiPrediction: 2.7 },
                { month: 'Feb', revenue: 2.8, gop: 1.0, occupancy: 82, aiPrediction: 3.2 },
                { month: 'Mar', revenue: 3.2, gop: 1.2, occupancy: 85, aiPrediction: 3.6 },
                { month: 'Apr', revenue: 3.6, gop: 1.4, occupancy: 87, aiPrediction: 4.0 },
                { month: 'May', revenue: 3.9, gop: 1.6, occupancy: 89, aiPrediction: 4.3 },
                { month: 'Jun', revenue: 4.1, gop: 1.7, occupancy: 91, aiPrediction: 4.6 }
              ]
            }
          ],
          insights: [
            "Neural network identifies 23% revenue optimization potential",
            "AI-driven pricing strategy could increase GOP margin by 15%",
            "Machine learning predicts 94% occupancy achievable with dynamic pricing",
            "Predictive analytics suggest Q3 revenue peak of €4.6M possible"
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
        <div className="bg-nomade-dark-brown/90 backdrop-blur-xl border border-nomade-tan/30 rounded-xl p-4 shadow-2xl">
          <p className="text-nomade-off-white font-semibold mb-3 text-sm">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-nomade-off-white/90 text-xs flex items-center space-x-2">
              <span className="inline-block w-3 h-3 rounded-full border border-nomade-tan/50" style={{ backgroundColor: entry.color }}></span>
              <span className="font-medium text-nomade-off-white">{entry.name}:</span> 
              <span className="text-nomade-tan font-bold">{entry.value}</span>
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
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={chart.data}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5d681d" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#5d681d" stopOpacity={0.05}/>
                </linearGradient>
                <linearGradient id="predictionGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#b39d8c" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#b39d8c" stopOpacity={0.05}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="2 2" stroke="#b39d8c" strokeOpacity={0.2} />
              <XAxis dataKey="month" stroke="#b39d8c" fontSize={11} />
              <YAxis stroke="#b39d8c" fontSize={11} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="revenue" stroke="#5d681d" strokeWidth={2} fill="url(#revenueGradient)" name="Revenue (€M)" />
              <Line type="monotone" dataKey="prediction" stroke="#b39d8c" strokeWidth={2} strokeDasharray="4 4" name="AI Prediction" dot={{ r: 3, fill: "#b39d8c" }} />
            </LineChart>
          </ResponsiveContainer>
        );
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={chart.data}>
              <CartesianGrid strokeDasharray="2 2" stroke="#b39d8c" strokeOpacity={0.2} />
              <XAxis dataKey="month" stroke="#b39d8c" fontSize={11} />
              <YAxis stroke="#b39d8c" fontSize={11} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="revenue" fill="#5d681d" name="Revenue (€M)" radius={[2, 2, 0, 0]} />
              <Bar dataKey="aiPrediction" fill="#b39d8c" name="AI Prediction" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={chart.data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={90}
                paddingAngle={3}
                dataKey="value"
              >
                {chart.data.map((entry: any, index: number) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} strokeWidth={1} />
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
    <div className="flex-1 px-8 py-6 flex flex-col min-h-screen">


      {/* Main Chat Interface */}

        {/* Chat Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-8 custom-scrollbar">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex space-x-4 max-w-5xl ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                {/* Premium Avatar */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl border-2 ${
                  message.type === 'user' 
                    ? 'bg-nomade-green/90 border-nomade-green/50' 
                    : 'bg-nomade-tan/20 border-nomade-tan/30 backdrop-blur-sm'
                }`}>
                  {message.type === 'user' ? <User size={20} className="text-white" /> : <Brain size={20} className="text-nomade-tan" />}
                </div>
                
                {/* Message Content */}
                <div className={`rounded-3xl p-6 shadow-2xl border backdrop-blur-xl ${
                  message.type === 'user'
                    ? 'bg-nomade-green/90 text-white border-nomade-green/30'
                    : 'bg-nomade-dark-brown/80 text-nomade-off-white border-nomade-tan/20'
                }`}>
                  <p className="leading-relaxed text-lg font-medium">{message.content}</p>
                  
                  {/* AI Charts */}
                  {message.charts && (
                    <div className="mt-6 space-y-6">
                      {message.charts.map((chart, index) => (
                        <div key={index} className="bg-nomade-dark-brown/40 backdrop-blur-xl rounded-2xl p-6 border border-nomade-tan/20 shadow-xl">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="w-8 h-8 rounded-xl bg-nomade-tan/20 border border-nomade-tan/30 flex items-center justify-center backdrop-blur-sm">
                              <BarChart3 size={16} className="text-white" />
                            </div>
                            <h4 className="text-lg font-bold text-nomade-off-white">{chart.title}</h4>
                            <div className="flex-1"></div>
                            <div className="bg-nomade-green/20 text-nomade-green px-2 py-1 rounded-lg text-xs font-bold border border-nomade-green/30">
                              LIVE DATA
                            </div>
                          </div>
                          <div className="bg-nomade-dark-brown/20 rounded-xl p-4 border border-nomade-tan/10">
                            {renderChart(chart)}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* AI Insights */}
                  {message.insights && (
                    <div className="mt-6 bg-nomade-tan/10 backdrop-blur-xl rounded-2xl p-6 border border-nomade-tan/20">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 rounded-xl bg-nomade-terracotta/20 border border-nomade-terracotta/30 flex items-center justify-center backdrop-blur-sm">
                          <Sparkles size={16} className="text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-nomade-off-white">Neural Intelligence Insights</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {message.insights.map((insight, index) => (
                          <div key={index} className="bg-nomade-dark-brown/30 backdrop-blur-sm rounded-xl p-4 border border-nomade-tan/20 hover:border-nomade-tan/40 transition-all duration-300">
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-nomade-tan rounded-full mt-2 animate-pulse"></div>
                              <span className="text-nomade-off-white text-sm leading-relaxed">{insight}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* AI Suggestions */}
                  {message.suggestions && (
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center space-x-3 mb-4">
                        <Target size={16} className="text-nomade-tan" />
                        <span className="text-sm font-semibold text-nomade-off-white">AI-Recommended Actions:</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {message.suggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => setInputValue(suggestion)}
                            className="text-left bg-nomade-tan/10 hover:bg-nomade-tan/20 border border-nomade-tan/30 hover:border-nomade-tan/50 rounded-xl p-4 text-sm transition-all duration-300 hover:transform hover:scale-105 text-nomade-off-white backdrop-blur-sm shadow-lg hover:shadow-nomade-tan/20"
                          >
                            <div className="flex items-center space-x-2">
                              <Zap size={14} className="text-nomade-tan" />
                              <span>{suggestion}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {/* AI Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex space-x-4 max-w-5xl">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl border-2 bg-nomade-tan/20 border-nomade-tan/30 backdrop-blur-sm">
                  <Brain size={20} className="text-nomade-tan" />
                </div>
                <div className="bg-nomade-dark-brown/80 text-nomade-off-white border border-nomade-tan/20 rounded-3xl p-6 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center space-x-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-nomade-tan rounded-full animate-bounce"></div>
                      <div className="w-3 h-3 bg-nomade-green rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-3 h-3 bg-nomade-terracotta rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-nomade-off-white font-medium">FinGPT neural networks processing...</span>
                    <div className="flex items-center space-x-2">
                      <Layers size={16} className="text-nomade-tan animate-spin" />
                      <span className="text-nomade-tan text-sm font-bold">DEEP ANALYSIS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Premium Input Area */}
        <div className="border-t border-nomade-tan/20 p-6 bg-nomade-dark-brown/60 backdrop-blur-xl">
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask FinGPT about performance, generate insights, analyze trends..."
                className="w-full py-4 px-6 pr-16 bg-nomade-dark-brown/40 backdrop-blur-xl border border-nomade-tan/30 rounded-2xl focus:ring-2 focus:ring-nomade-tan/50 focus:border-nomade-tan/50 transition-all duration-300 text-nomade-off-white placeholder:text-nomade-tan/60 shadow-xl text-lg"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-nomade-green text-white p-3 rounded-xl hover:bg-nomade-light-green transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-nomade-green/30 hover:scale-110"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
          
          {/* Quick AI Actions */}
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              { text: "Portfolio intelligence summary", icon: Building2 },
              { text: "Revenue optimization analysis", icon: DollarSign }, 
              { text: "Competitive neural benchmarking", icon: Target },
              { text: "Predictive seasonal modeling", icon: TrendingUp },
              { text: "Investor AI presentation", icon: Award },
              { text: "Risk assessment algorithms", icon: Activity }
            ].map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  onClick={() => setInputValue(action.text)}
                  className="bg-nomade-tan/10 hover:bg-nomade-tan/20 text-nomade-off-white text-sm px-4 py-2 rounded-xl transition-all duration-300 border border-nomade-tan/20 hover:border-nomade-tan/40 backdrop-blur-sm shadow-lg hover:shadow-nomade-tan/20 hover:scale-105 flex items-center space-x-2"
                >
                  <Icon size={14} className="text-nomade-tan" />
                  <span>{action.text}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(179, 157, 140, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #b39d8c, #5d681d);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #b39d8c, #5d681d);
        }
      `}</style>
    </div>
  );
};

export default AIBotPage;