import React from 'react';
import RevenueMetrics from '../components/dashboard/RevenueMetrics';
import PerformanceMetrics from '../components/dashboard/PerformanceMetrics';
import PortfolioTable from '../components/dashboard/PortfolioTable';
import PerformanceCharts from '../components/dashboard/PerformanceCharts';
import AnalyticsCharts from '../components/dashboard/AnalyticsCharts';

const DashboardPage: React.FC = () => {
  return (
    <div className="px-8 py-8 max-w-7xl mx-auto space-y-8">
      {/* Revenue Metrics - Translucent Cards Like Hotel Portfolio */}
      <RevenueMetrics />

      {/* Performance Excellence */}
      <PerformanceMetrics />

      {/* Portfolio Table */}
      <PortfolioTable />

      {/* Performance Charts */}
      <PerformanceCharts />

      {/* Analytics Charts */}
      <AnalyticsCharts />
    </div>
  );
};

export default DashboardPage;