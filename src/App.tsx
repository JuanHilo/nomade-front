import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import HotelsPage from './pages/HotelsPage';
import HotelDetailPage from './pages/HotelDetailPage';
import InvestorsPage from './pages/InvestorsPage';
import InvestorDetailPage from './pages/InvestorDetailPage';
import ReportsPage from './pages/ReportsPage';
import ReportViewerPage from './pages/ReportViewerPage';
import AIBotPage from './pages/AIBotPage';
import { FileText, Building2, Users, Plus, Brain } from 'lucide-react';
import GenerateReportModal from './components/modals/GenerateReportModal';

function App() {
  const [showReportModal, setShowReportModal] = React.useState(false);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={
            <Layout heroProps={{
              title: "Executive Dashboard",
              subtitle: "Real-time performance analytics for luxury hospitality",
              leftMetric: { value: "€2.4B", label: "Portfolio Value" },
              rightMetric: { value: "+12.4%", label: "This Quarter" },
              actionButton: { 
                text: "Generate Report", 
                icon: FileText,
                onClick: () => setShowReportModal(true)
              }
            }}>
              <DashboardPage />
            </Layout>
          } />
          <Route path="/hotels" element={
            <Layout heroProps={{
              title: "Hotel Portfolio",
              subtitle: "Manage and monitor your luxury hotel properties",
              leftMetric: { value: "5", label: "Properties" },
              rightMetric: { value: "€940M", label: "Total Value" },
              actionButton: { 
                text: "Add Property", 
                icon: Building2,
                onClick: () => console.log('Add property')
              }
            }}>
              <HotelsPage />
            </Layout>
          } />
          <Route path="/hotels/:id" element={<Layout><HotelDetailPage /></Layout>} />
          <Route path="/investors" element={
            <Layout heroProps={{
              title: "Investor Relations",
              subtitle: "Manage relationships with your luxury hospitality investors",
              leftMetric: { value: "5", label: "Active Investors" },
              rightMetric: { value: "€940.0M", label: "Total Investment" },
              actionButton: { 
                text: "Add Investor", 
                icon: Users,
                onClick: () => console.log('Add investor')
              }
            }}>
              <InvestorsPage />
            </Layout>
          } />
          <Route path="/investors/:id" element={<Layout><InvestorDetailPage /></Layout>} />
          <Route path="/reports" element={
            <Layout heroProps={{
              title: "Investment Reports",
              subtitle: "Generate, manage, and distribute project reports to investors",
              leftMetric: { value: "15", label: "Total Reports" },
              rightMetric: { value: "393", label: "Downloads" },
              actionButton: { 
                text: "Generate Report", 
                icon: Plus,
                onClick: () => setShowReportModal(true)
              }
            }}>
              <ReportsPage />
            </Layout>
          } />
          <Route path="/reports/:id" element={<Layout><ReportViewerPage /></Layout>} />
          <Route path="/ai-bot" element={
            <Layout heroProps={{
              title: "FinGPT Assistant",
              subtitle: "AI-powered hospitality intelligence and analytics",
              leftMetric: { value: "12.4K", label: "Queries Processed" },
              rightMetric: { value: "98.7%", label: "Accuracy Rate" },
              actionButton: { 
                text: "New Analysis", 
                icon: Brain,
                onClick: () => console.log('New analysis')
              }
            }}>
              <AIBotPage />
            </Layout>
          } />
        </Routes>
      </Router>
  );
}

      <GenerateReportModal 
        isOpen={showReportModal} 
        onClose={() => setShowReportModal(false)} 
      />
    </>
export default App;