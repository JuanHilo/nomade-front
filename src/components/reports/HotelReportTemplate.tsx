import React from 'react';

interface HotelReportTemplateProps {
  hotel: any;
  reportData: any;
}

const HotelReportTemplate: React.FC<HotelReportTemplateProps> = ({ hotel, reportData }) => {
  const reportHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>NOMADE ${hotel?.name || 'Tulum'} - Asset Management Report</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                line-height: 1.6;
                color: #1a150d;
                background: #F7F5F0;
            }
            
            .report-container {
                max-width: 1200px;
                margin: 0 auto;
                background: white;
                box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            }
            
            .report-header {
                background: linear-gradient(135deg, #1a150d 0%, #2F3B2D 100%);
                color: #F7F5F0;
                padding: 60px 40px;
                text-align: center;
                position: relative;
            }
            
            .report-header::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23C7A34A" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="%23C7A34A" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="%23C7A34A" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>') repeat;
                opacity: 0.3;
            }
            
            .report-header h1 {
                font-size: 3.5rem;
                font-weight: 800;
                margin-bottom: 1rem;
                letter-spacing: -0.02em;
                position: relative;
                z-index: 1;
            }
            
            .report-header .subtitle {
                font-size: 1.5rem;
                opacity: 0.9;
                margin-bottom: 2rem;
                position: relative;
                z-index: 1;
            }
            
            .report-meta {
                display: flex;
                justify-content: center;
                gap: 3rem;
                margin-top: 2rem;
                position: relative;
                z-index: 1;
            }
            
            .meta-item {
                text-align: center;
            }
            
            .meta-value {
                font-size: 2rem;
                font-weight: 700;
                color: #C7A34A;
                display: block;
            }
            
            .meta-label {
                font-size: 0.9rem;
                opacity: 0.8;
                text-transform: uppercase;
                letter-spacing: 0.1em;
            }
            
            .report-content {
                padding: 0;
            }
            
            .section {
                padding: 50px 40px;
                border-bottom: 1px solid #E8E2D5;
            }
            
            .section:last-child {
                border-bottom: none;
            }
            
            .section-header {
                display: flex;
                align-items: center;
                margin-bottom: 2rem;
                padding-bottom: 1rem;
                border-bottom: 2px solid #C7A34A;
            }
            
            .section-icon {
                width: 50px;
                height: 50px;
                background: #C7A34A;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 1rem;
                color: white;
                font-size: 1.5rem;
            }
            
            .section-title {
                font-size: 2rem;
                font-weight: 700;
                color: #1a150d;
            }
            
            .kpi-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 2rem;
                margin: 2rem 0;
            }
            
            .kpi-card {
                background: #F7F5F0;
                border: 2px solid #E8E2D5;
                border-radius: 16px;
                padding: 2rem;
                text-align: center;
                transition: all 0.3s ease;
            }
            
            .kpi-card:hover {
                border-color: #C7A34A;
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(199, 163, 74, 0.15);
            }
            
            .kpi-value {
                font-size: 2.5rem;
                font-weight: 800;
                color: #1a150d;
                margin-bottom: 0.5rem;
            }
            
            .kpi-label {
                font-size: 0.9rem;
                color: #6D675E;
                text-transform: uppercase;
                letter-spacing: 0.1em;
                font-weight: 600;
            }
            
            .kpi-change {
                font-size: 0.9rem;
                margin-top: 0.5rem;
                font-weight: 600;
            }
            
            .kpi-change.positive {
                color: #2F3B2D;
            }
            
            .kpi-change.negative {
                color: #dc2626;
            }
            
            .info-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 2rem;
                margin: 2rem 0;
            }
            
            .info-card {
                background: white;
                border: 1px solid #E8E2D5;
                border-radius: 12px;
                padding: 2rem;
            }
            
            .info-card h3 {
                font-size: 1.3rem;
                font-weight: 700;
                color: #1a150d;
                margin-bottom: 1.5rem;
                padding-bottom: 0.5rem;
                border-bottom: 1px solid #E8E2D5;
            }
            
            .info-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.75rem 0;
                border-bottom: 1px solid #F7F5F0;
            }
            
            .info-row:last-child {
                border-bottom: none;
            }
            
            .info-label {
                color: #6D675E;
                font-weight: 500;
            }
            
            .info-value {
                color: #1a150d;
                font-weight: 600;
            }
            
            .table-container {
                margin: 2rem 0;
                border-radius: 12px;
                overflow: hidden;
                border: 1px solid #E8E2D5;
            }
            
            .data-table {
                width: 100%;
                border-collapse: collapse;
                background: white;
            }
            
            .data-table th {
                background: #1a150d;
                color: #F7F5F0;
                padding: 1rem;
                text-align: left;
                font-weight: 600;
                font-size: 0.9rem;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
            
            .data-table td {
                padding: 1rem;
                border-bottom: 1px solid #F7F5F0;
            }
            
            .data-table tr:hover {
                background: #F7F5F0;
            }
            
            .data-table .number {
                text-align: right;
                font-weight: 600;
                color: #1a150d;
            }
            
            .data-table .positive {
                color: #2F3B2D;
            }
            
            .data-table .negative {
                color: #dc2626;
            }
            
            .chart-placeholder {
                background: #F7F5F0;
                border: 2px dashed #C7A34A;
                border-radius: 12px;
                height: 300px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #6D675E;
                font-size: 1.1rem;
                font-weight: 600;
                margin: 2rem 0;
            }
            
            .highlight-box {
                background: linear-gradient(135deg, #C7A34A 0%, #B8954A 100%);
                color: white;
                padding: 2rem;
                border-radius: 16px;
                margin: 2rem 0;
            }
            
            .highlight-box h3 {
                font-size: 1.5rem;
                margin-bottom: 1rem;
            }
            
            .highlight-box p {
                opacity: 0.95;
                line-height: 1.7;
            }
            
            .room-types {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1.5rem;
                margin: 2rem 0;
            }
            
            .room-type {
                background: white;
                border: 1px solid #E8E2D5;
                border-radius: 12px;
                padding: 1.5rem;
            }
            
            .room-type h4 {
                color: #1a150d;
                font-size: 1.2rem;
                margin-bottom: 1rem;
            }
            
            .room-progress {
                background: #F7F5F0;
                height: 8px;
                border-radius: 4px;
                margin: 1rem 0;
                overflow: hidden;
            }
            
            .room-progress-fill {
                background: #C7A34A;
                height: 100%;
                border-radius: 4px;
                transition: width 0.3s ease;
            }
            
            .financial-summary {
                background: #1a150d;
                color: #F7F5F0;
                padding: 3rem 2rem;
                border-radius: 16px;
                margin: 2rem 0;
            }
            
            .financial-summary h3 {
                font-size: 2rem;
                margin-bottom: 2rem;
                text-align: center;
            }
            
            .financial-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 2rem;
            }
            
            .financial-item {
                text-align: center;
                padding: 1rem;
                border: 1px solid #2F3B2D;
                border-radius: 8px;
            }
            
            .financial-value {
                font-size: 1.8rem;
                font-weight: 700;
                color: #C7A34A;
                margin-bottom: 0.5rem;
            }
            
            .financial-label {
                font-size: 0.9rem;
                opacity: 0.8;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
            
            .report-footer {
                background: #1a150d;
                color: #F7F5F0;
                padding: 3rem 2rem;
                text-align: center;
            }
            
            .report-footer h3 {
                font-size: 1.5rem;
                margin-bottom: 1rem;
            }
            
            .report-footer p {
                opacity: 0.8;
                max-width: 600px;
                margin: 0 auto;
            }
            
            @media print {
                .report-container {
                    box-shadow: none;
                }
                
                .section {
                    page-break-inside: avoid;
                }
            }
        </style>
    </head>
    <body>
        <div class="report-container">
            <!-- Report Header -->
            <div class="report-header">
                <h1>NOMADE ${hotel?.name || 'Tulum'}</h1>
                <div class="subtitle">Asset Management & Development Report</div>
                <div class="report-meta">
                    <div class="meta-item">
                        <span class="meta-value">${hotel?.keys || '48'}</span>
                        <span class="meta-label">Keys</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-value">92.1%</span>
                        <span class="meta-label">Occupancy</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-value">€485</span>
                        <span class="meta-label">ADR</span>
                    </div>
                </div>
            </div>

            <div class="report-content">
                <!-- Executive Summary -->
                <div class="section">
                    <div class="section-header">
                        <div class="section-icon">📊</div>
                        <h2 class="section-title">Executive Summary</h2>
                    </div>
                    
                    <div class="highlight-box">
                        <h3>Performance Highlights</h3>
                        <p>NOMADE ${hotel?.name || 'Tulum'} continues to demonstrate exceptional performance in the luxury hospitality sector. With a current occupancy rate of 92.1% and an ADR of €485, the property significantly outperforms market benchmarks. The hotel's strategic positioning and operational excellence have resulted in a RevPAR of €446, representing a 13% increase year-over-year.</p>
                    </div>

                    <div class="kpi-grid">
                        <div class="kpi-card">
                            <div class="kpi-value">€485</div>
                            <div class="kpi-label">Average Daily Rate</div>
                            <div class="kpi-change positive">+8.2% vs LY</div>
                        </div>
                        <div class="kpi-card">
                            <div class="kpi-value">92.1%</div>
                            <div class="kpi-label">Occupancy Rate</div>
                            <div class="kpi-change positive">+5.8% vs LY</div>
                        </div>
                        <div class="kpi-card">
                            <div class="kpi-value">€446</div>
                            <div class="kpi-label">Revenue per Available Room</div>
                            <div class="kpi-change positive">+12.5% vs LY</div>
                        </div>
                        <div class="kpi-card">
                            <div class="kpi-value">€680K</div>
                            <div class="kpi-label">Gross Operating Profit</div>
                            <div class="kpi-change positive">+18.3% vs LY</div>
                        </div>
                    </div>
                </div>

                <!-- Hotel Overview -->
                <div class="section">
                    <div class="section-header">
                        <div class="section-icon">🏨</div>
                        <h2 class="section-title">Property Overview</h2>
                    </div>

                    <div class="info-grid">
                        <div class="info-card">
                            <h3>Hotel Information</h3>
                            <div class="info-row">
                                <span class="info-label">Hotel Name:</span>
                                <span class="info-value">NOMADE ${hotel?.name || 'Tulum'}</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Location:</span>
                                <span class="info-value">${hotel?.location || 'Carretera Tulum-Boca Paila Km 10, 77780 Tulum, Mexico'}</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Star Rating:</span>
                                <span class="info-value">${hotel?.rating || '5'} Stars</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Number of Keys:</span>
                                <span class="info-value">${hotel?.keys || '48'}</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Brand:</span>
                                <span class="info-value">${hotel?.brand || 'NOMADE Hotels'}</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Opening Date:</span>
                                <span class="info-value">${hotel?.openingDate || 'December 1, 2017'}</span>
                            </div>
                        </div>

                        <div class="info-card">
                            <h3>Property Details</h3>
                            <div class="info-row">
                                <span class="info-label">Construction Area:</span>
                                <span class="info-value">${hotel?.constructionArea || '12,000 m²'}</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Number of Floors:</span>
                                <span class="info-value">${hotel?.floors || '2'}</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Contract Type:</span>
                                <span class="info-value">${hotel?.contract || 'Management Agreement'}</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Management Term:</span>
                                <span class="info-value">25 years</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Base Fee:</span>
                                <span class="info-value">2.5% of Gross Revenue</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Incentive Fee:</span>
                                <span class="info-value">20% of AGOP</span>
                            </div>
                        </div>
                    </div>

                    <div class="room-types">
                        <div class="room-type">
                            <h4>Jungle Villa</h4>
                            <div class="info-row">
                                <span class="info-label">Count:</span>
                                <span class="info-value">20 rooms</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Size:</span>
                                <span class="info-value">85 m²</span>
                            </div>
                            <div class="room-progress">
                                <div class="room-progress-fill" style="width: 41.67%"></div>
                            </div>
                            <div style="text-align: center; font-weight: 600; color: #C7A34A;">41.67% of inventory</div>
                        </div>
                        
                        <div class="room-type">
                            <h4>Beach Villa</h4>
                            <div class="info-row">
                                <span class="info-label">Count:</span>
                                <span class="info-value">18 rooms</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Size:</span>
                                <span class="info-value">95 m²</span>
                            </div>
                            <div class="room-progress">
                                <div class="room-progress-fill" style="width: 37.5%"></div>
                            </div>
                            <div style="text-align: center; font-weight: 600; color: #C7A34A;">37.50% of inventory</div>
                        </div>
                        
                        <div class="room-type">
                            <h4>Oceanfront Suite</h4>
                            <div class="info-row">
                                <span class="info-label">Count:</span>
                                <span class="info-value">10 rooms</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Size:</span>
                                <span class="info-value">120 m²</span>
                            </div>
                            <div class="room-progress">
                                <div class="room-progress-fill" style="width: 20.83%"></div>
                            </div>
                            <div style="text-align: center; font-weight: 600; color: #C7A34A;">20.83% of inventory</div>
                        </div>
                    </div>
                </div>

                <!-- Financial Performance -->
                <div class="section">
                    <div class="section-header">
                        <div class="section-icon">💰</div>
                        <h2 class="section-title">Financial Performance</h2>
                    </div>

                    <div class="financial-summary">
                        <h3>Monthly P&L Summary - April 2024</h3>
                        <div class="financial-grid">
                            <div class="financial-item">
                                <div class="financial-value">€1,006K</div>
                                <div class="financial-label">Total Revenue</div>
                            </div>
                            <div class="financial-item">
                                <div class="financial-value">€727K</div>
                                <div class="financial-label">Rooms Revenue</div>
                            </div>
                            <div class="financial-item">
                                <div class="financial-value">€268K</div>
                                <div class="financial-label">F&B Revenue</div>
                            </div>
                            <div class="financial-item">
                                <div class="financial-value">€403K</div>
                                <div class="financial-label">GOP</div>
                            </div>
                        </div>
                    </div>

                    <div class="table-container">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>Revenue Category</th>
                                    <th>Real 24 (€000)</th>
                                    <th>Budget 24 (€000)</th>
                                    <th>Variance (€000)</th>
                                    <th>LY (€000)</th>
                                    <th>LY Variance (€000)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Rooms Revenue</td>
                                    <td class="number">727</td>
                                    <td class="number">707</td>
                                    <td class="number positive">+20</td>
                                    <td class="number">682</td>
                                    <td class="number positive">+45</td>
                                </tr>
                                <tr>
                                    <td>F&B Revenue</td>
                                    <td class="number">268</td>
                                    <td class="number">264</td>
                                    <td class="number positive">+4</td>
                                    <td class="number">318</td>
                                    <td class="number negative">-50</td>
                                </tr>
                                <tr>
                                    <td>Other Revenue</td>
                                    <td class="number">1</td>
                                    <td class="number">7</td>
                                    <td class="number negative">-6</td>
                                    <td class="number">10</td>
                                    <td class="number negative">-9</td>
                                </tr>
                                <tr style="background: #F7F5F0; font-weight: 600;">
                                    <td><strong>Total Revenue</strong></td>
                                    <td class="number"><strong>1,006</strong></td>
                                    <td class="number"><strong>979</strong></td>
                                    <td class="number positive"><strong>+27</strong></td>
                                    <td class="number"><strong>1,010</strong></td>
                                    <td class="number negative"><strong>-4</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Occupancy Analytics -->
                <div class="section">
                    <div class="section-header">
                        <div class="section-icon">📈</div>
                        <h2 class="section-title">Occupancy Analytics</h2>
                    </div>

                    <div class="kpi-grid">
                        <div class="kpi-card">
                            <div class="kpi-value">92.1%</div>
                            <div class="kpi-label">Current Occupancy</div>
                            <div class="kpi-change positive">+5.8% vs last month</div>
                        </div>
                        <div class="kpi-card">
                            <div class="kpi-value">€485</div>
                            <div class="kpi-label">Average ADR</div>
                            <div class="kpi-change positive">+8.2% vs last month</div>
                        </div>
                        <div class="kpi-card">
                            <div class="kpi-value">€446</div>
                            <div class="kpi-label">RevPAR</div>
                            <div class="kpi-change positive">+12.5% vs last month</div>
                        </div>
                        <div class="kpi-card">
                            <div class="kpi-value">48</div>
                            <div class="kpi-label">Available Rooms</div>
                            <div class="kpi-change">Total keys</div>
                        </div>
                    </div>

                    <div class="table-container">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>Month</th>
                                    <th>Occupancy %</th>
                                    <th>Rooms Sold</th>
                                    <th>ADR (€)</th>
                                    <th>RevPAR (€)</th>
                                    <th>Revenue (€)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>January</td>
                                    <td class="number">88.0%</td>
                                    <td class="number">1,305</td>
                                    <td class="number">€465</td>
                                    <td class="number">€409</td>
                                    <td class="number">€606,825</td>
                                </tr>
                                <tr>
                                    <td>February</td>
                                    <td class="number">91.2%</td>
                                    <td class="number">1,235</td>
                                    <td class="number">€478</td>
                                    <td class="number">€436</td>
                                    <td class="number">€590,430</td>
                                </tr>
                                <tr>
                                    <td>March</td>
                                    <td class="number">94.1%</td>
                                    <td class="number">1,398</td>
                                    <td class="number">€485</td>
                                    <td class="number">€456</td>
                                    <td class="number">€677,730</td>
                                </tr>
                                <tr>
                                    <td>April</td>
                                    <td class="number">92.8%</td>
                                    <td class="number">1,334</td>
                                    <td class="number">€492</td>
                                    <td class="number">€457</td>
                                    <td class="number">€656,328</td>
                                </tr>
                                <tr>
                                    <td>May</td>
                                    <td class="number">89.5%</td>
                                    <td class="number">1,329</td>
                                    <td class="number">€505</td>
                                    <td class="number">€452</td>
                                    <td class="number">€671,145</td>
                                </tr>
                                <tr>
                                    <td>June</td>
                                    <td class="number">85.2%</td>
                                    <td class="number">1,224</td>
                                    <td class="number">€468</td>
                                    <td class="number">€399</td>
                                    <td class="number">€572,832</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="chart-placeholder">
                        📊 Monthly Occupancy & Performance Trends Chart
                    </div>
                </div>

                <!-- Cash Flow Analysis -->
                <div class="section">
                    <div class="section-header">
                        <div class="section-icon">💸</div>
                        <h2 class="section-title">Cash Flow Analysis</h2>
                    </div>

                    <div class="kpi-grid">
                        <div class="kpi-card">
                            <div class="kpi-value">€1,800K</div>
                            <div class="kpi-label">Operational Cash Flow</div>
                            <div class="kpi-change positive">+3.2% YTD</div>
                        </div>
                        <div class="kpi-card">
                            <div class="kpi-value">-€300K</div>
                            <div class="kpi-label">Investment Cash Flow</div>
                            <div class="kpi-change negative">-2.1% YTD</div>
                        </div>
                        <div class="kpi-card">
                            <div class="kpi-value">-€1,400K</div>
                            <div class="kpi-label">Financing Cash Flow</div>
                            <div class="kpi-change positive">+1.8% YTD</div>
                        </div>
                        <div class="kpi-card">
                            <div class="kpi-value">€350K</div>
                            <div class="kpi-label">Net Cash Flow</div>
                            <div class="kpi-change positive">+5.4% YTD</div>
                        </div>
                    </div>

                    <div class="table-container">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>January</th>
                                    <th>February</th>
                                    <th>March</th>
                                    <th>April</th>
                                    <th>May</th>
                                    <th>June</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Operational Cash Flow</td>
                                    <td class="number positive">€70,000</td>
                                    <td class="number positive">€70,000</td>
                                    <td class="number positive">€70,000</td>
                                    <td class="number positive">€70,000</td>
                                    <td class="number positive">€70,000</td>
                                    <td class="number positive">€70,000</td>
                                    <td class="number positive"><strong>€1,800,000</strong></td>
                                </tr>
                                <tr>
                                    <td>Investment Cash Flow</td>
                                    <td class="number negative">-€50,000</td>
                                    <td class="number negative">-€50,000</td>
                                    <td class="number negative">-€50,000</td>
                                    <td class="number negative">-€50,000</td>
                                    <td class="number negative">-€50,000</td>
                                    <td class="number negative">-€50,000</td>
                                    <td class="number negative"><strong>-€300,000</strong></td>
                                </tr>
                                <tr>
                                    <td>Financing Cash Flow</td>
                                    <td class="number negative">-€233,333</td>
                                    <td class="number negative">-€233,333</td>
                                    <td class="number negative">-€233,333</td>
                                    <td class="number negative">-€233,333</td>
                                    <td class="number negative">-€233,333</td>
                                    <td class="number negative">-€233,333</td>
                                    <td class="number negative"><strong>-€1,400,000</strong></td>
                                </tr>
                                <tr style="background: #F7F5F0; font-weight: 600;">
                                    <td><strong>Net Cash Flow</strong></td>
                                    <td class="number positive"><strong>€70,000</strong></td>
                                    <td class="number positive"><strong>€70,000</strong></td>
                                    <td class="number positive"><strong>€70,000</strong></td>
                                    <td class="number positive"><strong>€70,000</strong></td>
                                    <td class="number positive"><strong>€70,000</strong></td>
                                    <td class="number positive"><strong>€70,000</strong></td>
                                    <td class="number positive"><strong>€350,000</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <h3>Cash Flow Analysis</h3>
                        <p>In 2025, the project showed healthy performance with a positive cash flow of €350,000, driven by stable rental income and controlled expenses. Strong operational cash flow of €1,800,000 demonstrates the property's ability to generate consistent returns while maintaining investment in capital expenditures and debt service obligations.</p>
                    </div>
                </div>

                <!-- Capital Structure -->
                <div class="section">
                    <div class="section-header">
                        <div class="section-icon">🏦</div>
                        <h2 class="section-title">Capital Structure & Financing</h2>
                    </div>

                    <div class="info-grid">
                        <div class="info-card">
                            <h3>Capital Stack</h3>
                            <div class="info-row">
                                <span class="info-label">Equity:</span>
                                <span class="info-value">€9.0M (14.8%)</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Financial Debt:</span>
                                <span class="info-value">€38.5M (63.1%)</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Other Debts:</span>
                                <span class="info-value">€13.5M (22.1%)</span>
                            </div>
                            <div class="info-row" style="border-top: 2px solid #C7A34A; margin-top: 1rem; padding-top: 1rem;">
                                <span class="info-label"><strong>Total Capital Stack:</strong></span>
                                <span class="info-value"><strong>€61.0M</strong></span>
                            </div>
                        </div>

                        <div class="info-card">
                            <h3>Debt Details</h3>
                            <div class="info-row">
                                <span class="info-label">Type:</span>
                                <span class="info-value">Development Loan</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Bank:</span>
                                <span class="info-value">BBVA Mexico</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Amount:</span>
                                <span class="info-value">€21.8M</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Interest Rate:</span>
                                <span class="info-value">2.25%</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Due Date:</span>
                                <span class="info-value">01/12/2037</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Amortization:</span>
                                <span class="info-value">Quarterly</span>
                            </div>
                        </div>
                    </div>

                    <div class="info-grid">
                        <div class="info-card">
                            <h3>Management Agreement Terms</h3>
                            <div class="info-row">
                                <span class="info-label">Term:</span>
                                <span class="info-value">25 years</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Base Fee:</span>
                                <span class="info-value">2.5% of Gross Revenue</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Marketing Fee:</span>
                                <span class="info-value">1.5% of Gross Revenue</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Incentive Fee:</span>
                                <span class="info-value">20% of AGOP</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">FF&E Reserve:</span>
                                <span class="info-value">3% (Year 3+)</span>
                            </div>
                        </div>

                        <div class="info-card">
                            <h3>Priority Return Structure</h3>
                            <div class="info-row">
                                <span class="info-label">Year 1:</span>
                                <span class="info-value">€18,000/key (€864,000)</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Year 2:</span>
                                <span class="info-value">€20,000/key (€960,000)</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Year 3:</span>
                                <span class="info-value">€22,000/key (€1,056,000)</span>
                            </div>
                            <div class="info-row" style="border-top: 2px solid #C7A34A; margin-top: 1rem; padding-top: 1rem;">
                                <span class="info-label"><strong>Year 4+:</strong></span>
                                <span class="info-value"><strong>€25,000/key (€1,200,000)</strong></span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Market Position & Competitive Analysis -->
                <div class="section">
                    <div class="section-header">
                        <div class="section-icon">🎯</div>
                        <h2 class="section-title">Market Position & Competitive Analysis</h2>
                    </div>

                    <div class="table-container">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>Metric</th>
                                    <th>My Hotel</th>
                                    <th>Comp Set</th>
                                    <th>Index</th>
                                    <th>Market Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Occupancy</td>
                                    <td class="number">86.9%</td>
                                    <td class="number">88.0%</td>
                                    <td class="number">98.7</td>
                                    <td class="number">5 of 6</td>
                                </tr>
                                <tr>
                                    <td>ADR</td>
                                    <td class="number">€299.6</td>
                                    <td class="number">€262.2</td>
                                    <td class="number positive">114.3</td>
                                    <td class="number">2 of 6</td>
                                </tr>
                                <tr>
                                    <td>RevPAR</td>
                                    <td class="number">€260.3</td>
                                    <td class="number">€230.7</td>
                                    <td class="number positive">112.8</td>
                                    <td class="number">2 of 6</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <h3>Competitive Positioning</h3>
                        <p>NOMADE ${hotel?.name || 'Tulum'} maintains a strong competitive position in the luxury segment, ranking 2nd in both ADR and RevPAR performance within its competitive set. While occupancy ranks 5th, the premium pricing strategy successfully captures higher revenue per available room, demonstrating the property's ability to command luxury rates in the market.</p>
                    </div>
                </div>

                <!-- Investment Summary -->
                <div class="section">
                    <div class="section-header">
                        <div class="section-icon">💼</div>
                        <h2 class="section-title">Investment Summary</h2>
                    </div>

                    <div class="kpi-grid">
                        <div class="kpi-card">
                            <div class="kpi-value">0</div>
                            <div class="kpi-label">Total Investors</div>
                        </div>
                        <div class="kpi-card">
                            <div class="kpi-value">0.0%</div>
                            <div class="kpi-label">Equity Allocated</div>
                        </div>
                        <div class="kpi-card">
                            <div class="kpi-value">€0.0M</div>
                            <div class="kpi-label">Total Invested</div>
                        </div>
                        <div class="kpi-card">
                            <div class="kpi-value">100.0%</div>
                            <div class="kpi-label">Available Equity</div>
                        </div>
                    </div>

                    <div class="highlight-box">
                        <h3>Investment Opportunity</h3>
                        <p>This property offers excellent investment opportunities with prime beachfront location in Tulum's hotel zone, established NOMADE Hotels brand management, strong operational performance metrics, projected ROI of 15-18% annually, and a 25-year management agreement in place. The entire equity structure remains available for strategic investors seeking exposure to the luxury hospitality sector.</p>
                    </div>
                </div>
            </div>

            <!-- Report Footer -->
            <div class="report-footer">
                <h3>NOMADE Hotels</h3>
                <p>This report contains confidential and proprietary information. Distribution is restricted to authorized parties only. All financial projections are estimates based on current market conditions and historical performance.</p>
                <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #2F3B2D; opacity: 0.6;">
                    <p>Report generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
            </div>
        </div>
    </body>
    </html>
  `;

  return (
    <div 
      className="w-full h-full border-0 rounded-xl overflow-hidden"
      dangerouslySetInnerHTML={{ __html: reportHTML }}
    />
  );
};

export default HotelReportTemplate;