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
                background: #F7F5F0;
            }
            
            .report-header {
                background: #1a150d;
                color: #F7F5F0;
                padding: 60px 40px;
                text-align: center;
            }
            
            .report-header h1 {
                font-size: 3rem;
                font-weight: 700;
                margin-bottom: 1rem;
                letter-spacing: -0.02em;
                color: #F7F5F0;
            }
            
            .report-header .subtitle {
                font-size: 1.25rem;
                opacity: 0.9;
                margin-bottom: 2rem;
                color: #b39d8c;
            }
            
            .report-meta {
                display: flex;
                justify-content: center;
                gap: 3rem;
                margin-top: 2rem;
            }
            
            .meta-item {
                text-align: center;
            }
            
            .meta-value {
                font-size: 2rem;
                font-weight: 700;
                color: #b39d8c;
                display: block;
            }
            
            .meta-label {
                font-size: 0.75rem;
                opacity: 0.8;
                text-transform: uppercase;
                letter-spacing: 0.1em;
                color: #F7F5F0;
            }
            
            .report-content {
                padding: 0;
            }
            
            .section {
                padding: 40px;
                margin-bottom: 0;
                background: white;
                border-bottom: 1px solid #E8E2D5;
            }
            
            .section:nth-child(even) {
                background: #F7F5F0;
            }
            
            .section:last-child {
                border-bottom: none;
            }
            
            .section-header {
                display: flex;
                align-items: center;
                margin-bottom: 2rem;
                padding-bottom: 1rem;
                border-bottom: 2px solid #b39d8c;
            }
            
            .section-icon {
                width: 40px;
                height: 40px;
                background: #1a150d;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 1rem;
                color: #b39d8c;
                font-size: 1.2rem;
                font-weight: 600;
            }
            
            .section-title {
                font-size: 1.75rem;
                font-weight: 700;
                color: #1a150d;
            }
            
            .kpi-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1.5rem;
                margin: 2rem 0;
            }
            
            .kpi-card {
                background: #1a150d;
                border: 1px solid #b39d8c;
                border-radius: 16px;
                padding: 2rem;
                text-align: center;
                box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            }
            
            .kpi-value {
                font-size: 2rem;
                font-weight: 700;
                color: #F7F5F0;
                margin-bottom: 0.5rem;
            }
            
            .kpi-label {
                font-size: 0.75rem;
                color: #b39d8c;
                text-transform: uppercase;
                letter-spacing: 0.1em;
                font-weight: 600;
                margin-bottom: 0.5rem;
            }
            
            .kpi-change {
                font-size: 0.875rem;
                font-weight: 600;
            }
            
            .kpi-change.positive {
                color: #5d681d;
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
                background: #1a150d;
                border: 1px solid #b39d8c;
                border-radius: 12px;
                padding: 2rem;
            }
            
            .info-card h3 {
                font-size: 1.25rem;
                font-weight: 700;
                color: #F7F5F0;
                margin-bottom: 1.5rem;
                padding-bottom: 0.5rem;
                border-bottom: 1px solid #b39d8c;
            }
            
            .info-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.75rem 0;
                border-bottom: 1px solid #2F3B2D;
            }
            
            .info-row:last-child {
                border-bottom: none;
            }
            
            .info-label {
                color: #b39d8c;
                font-weight: 500;
                font-size: 0.875rem;
            }
            
            .info-value {
                color: #F7F5F0;
                font-weight: 600;
                font-size: 0.875rem;
            }
            
            .table-container {
                margin: 2rem 0;
                border-radius: 12px;
                overflow: hidden;
                border: 1px solid #b39d8c;
            }
            
            .data-table {
                width: 100%;
                border-collapse: collapse;
                background: #1a150d;
            }
            
            .data-table th {
                background: #1a150d;
                color: #b39d8c;
                padding: 1rem;
                text-align: left;
                font-weight: 600;
                font-size: 0.75rem;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                border-bottom: 2px solid #b39d8c;
            }
            
            .data-table td {
                padding: 1rem;
                border-bottom: 1px solid #2F3B2D;
                color: #F7F5F0;
                font-size: 0.875rem;
            }
            
            .data-table tr:hover {
                background: #2F3B2D;
            }
            
            .data-table .number {
                text-align: right;
                font-weight: 600;
            }
            
            .data-table .positive {
                color: #5d681d;
            }
            
            .data-table .negative {
                color: #dc2626;
            }
            
            .highlight-box {
                background: #1a150d;
                color: #F7F5F0;
                padding: 2rem;
                border-radius: 16px;
                margin: 2rem 0;
                border: 1px solid #b39d8c;
            }
            
            .highlight-box h3 {
                font-size: 1.25rem;
                margin-bottom: 1rem;
                color: #b39d8c;
            }
            
            .highlight-box p {
                line-height: 1.7;
                color: #F7F5F0;
            }
            
            .analysis-section {
                background: #1a150d;
                color: #F7F5F0;
                padding: 2rem;
                border-radius: 16px;
                margin: 2rem 0;
                border: 1px solid #b39d8c;
            }
            
            .analysis-section h3 {
                color: #b39d8c;
                font-size: 1.25rem;
                margin-bottom: 1rem;
                font-weight: 700;
            }
            
            .analysis-section h4 {
                color: #F7F5F0;
                font-size: 1rem;
                margin: 1.5rem 0 0.75rem 0;
                font-weight: 600;
            }
            
            .analysis-section p {
                margin-bottom: 1rem;
                line-height: 1.7;
            }
            
            .analysis-section ul {
                margin: 1rem 0;
                padding-left: 1.5rem;
            }
            
            .analysis-section li {
                margin-bottom: 0.5rem;
                line-height: 1.6;
            }
            
            .room-types {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1.5rem;
                margin: 2rem 0;
            }
            
            .room-type {
                background: #1a150d;
                border: 1px solid #b39d8c;
                border-radius: 12px;
                padding: 1.5rem;
            }
            
            .room-type h4 {
                color: #F7F5F0;
                font-size: 1.125rem;
                margin-bottom: 1rem;
                font-weight: 600;
            }
            
            .room-progress {
                background: #2F3B2D;
                height: 8px;
                border-radius: 4px;
                margin: 1rem 0;
                overflow: hidden;
            }
            
            .room-progress-fill {
                background: #b39d8c;
                height: 100%;
                border-radius: 4px;
                transition: width 0.3s ease;
            }
            
            .financial-summary {
                background: #1a150d;
                color: #F7F5F0;
                padding: 2rem;
                border-radius: 16px;
                margin: 2rem 0;
                border: 1px solid #b39d8c;
            }
            
            .financial-summary h3 {
                font-size: 1.5rem;
                margin-bottom: 2rem;
                text-align: center;
                color: #b39d8c;
            }
            
            .financial-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 2rem;
            }
            
            .financial-item {
                text-align: center;
                padding: 1rem;
                border: 1px solid #b39d8c;
                border-radius: 8px;
                background: #2F3B2D;
            }
            
            .financial-value {
                font-size: 1.5rem;
                font-weight: 700;
                color: #F7F5F0;
                margin-bottom: 0.5rem;
            }
            
            .financial-label {
                font-size: 0.75rem;
                color: #b39d8c;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                font-weight: 600;
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
                color: #b39d8c;
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
                        <div class="section-icon">ES</div>
                        <h2 class="section-title">Executive Summary</h2>
                    </div>
                    
                    <div class="analysis-section">
                        <h3>Performance Overview</h3>
                        <p>NOMADE ${hotel?.name || 'Tulum'} continues to demonstrate exceptional performance in the luxury hospitality sector. The property has achieved remarkable operational excellence with a current occupancy rate of 92.1% and an ADR of €485, significantly outperforming market benchmarks.</p>
                        
                        <h4>Key Performance Highlights:</h4>
                        <ul>
                            <li><strong>Revenue Growth:</strong> 13% increase in RevPAR year-over-year, reaching €446</li>
                            <li><strong>Operational Excellence:</strong> GOP increased by 18.3% to €680K, demonstrating strong cost management</li>
                            <li><strong>Market Position:</strong> Maintaining premium positioning in luxury segment with superior ADR performance</li>
                            <li><strong>Financial Stability:</strong> Positive cash flow of €350K with strong operational fundamentals</li>
                        </ul>
                        
                        <h4>Strategic Outlook:</h4>
                        <p>The property's strategic positioning in the luxury market, combined with the established NOMADE brand strength and operational excellence, positions it well for continued growth. The management team's focus on maintaining service standards while optimizing revenue streams has resulted in sustainable performance improvements.</p>
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
                        <div class="section-icon">HO</div>
                        <h2 class="section-title">Property Overview</h2>
                    </div>

                    <div class="analysis-section">
                        <h3>Property Analysis</h3>
                        <p>NOMADE ${hotel?.name || 'Tulum'} represents a premier luxury hospitality asset strategically positioned in one of the world's most desirable destinations. The property combines architectural excellence with operational sophistication to deliver exceptional guest experiences.</p>
                        
                        <h4>Location Advantages:</h4>
                        <ul>
                            <li>Prime beachfront location with direct access to pristine beaches</li>
                            <li>Proximity to cultural attractions and archaeological sites</li>
                            <li>Strategic positioning within the luxury hotel corridor</li>
                            <li>Excellent accessibility from major transportation hubs</li>
                        </ul>
                        
                        <h4>Asset Quality:</h4>
                        <p>The property features 48 carefully designed accommodations across three distinct categories, each offering unique experiences while maintaining the highest standards of luxury. The architectural design seamlessly integrates with the natural environment, creating an authentic sense of place that resonates with discerning travelers.</p>
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
                            <div style="text-align: center; font-weight: 600; color: #b39d8c; font-size: 0.875rem;">41.67% of inventory</div>
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
                            <div style="text-align: center; font-weight: 600; color: #b39d8c; font-size: 0.875rem;">37.50% of inventory</div>
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
                            <div style="text-align: center; font-weight: 600; color: #b39d8c; font-size: 0.875rem;">20.83% of inventory</div>
                        </div>
                    </div>
                </div>

                <!-- Financial Performance -->
                <div class="section">
                    <div class="section-header">
                        <div class="section-icon">FP</div>
                        <h2 class="section-title">Financial Performance Analysis</h2>
                    </div>

                    <div class="analysis-section">
                        <h3>Financial Performance Review</h3>
                        <p>The financial performance for April 2024 demonstrates strong operational execution and effective revenue management strategies. Total revenue reached €1,006K, exceeding budget by €27K and showing resilient performance despite market challenges.</p>
                        
                        <h4>Revenue Analysis:</h4>
                        <ul>
                            <li><strong>Rooms Revenue:</strong> €727K (+€20K vs budget, +€45K vs LY) - Strong ADR performance driving revenue growth</li>
                            <li><strong>F&B Revenue:</strong> €268K (+€4K vs budget, -€50K vs LY) - Stable performance with room for optimization</li>
                            <li><strong>Total Revenue:</strong> €1,006K (+2.8% vs budget, -0.4% vs LY) - Solid overall performance</li>
                        </ul>
                        
                        <h4>Profitability Metrics:</h4>
                        <p>Gross Operating Profit reached €403K, representing a 40% GOP margin, which is €9K over budget and €12K over last year. This demonstrates effective cost management and operational efficiency improvements.</p>
                        
                        <h4>Key Performance Drivers:</h4>
                        <ul>
                            <li>ADR optimization strategies yielding 4% improvement over budget</li>
                            <li>Effective cost control measures maintaining healthy margins</li>
                            <li>Strong operational fundamentals supporting consistent profitability</li>
                        </ul>
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
                                <tr style="background: #2F3B2D; font-weight: 600;">
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
                        <div class="section-icon">OA</div>
                        <h2 class="section-title">Occupancy Analytics</h2>
                    </div>

                    <div class="analysis-section">
                        <h3>Occupancy Performance Analysis</h3>
                        <p>The occupancy analytics reveal strong performance across key metrics, with the property maintaining high occupancy levels while achieving premium ADR positioning. The current occupancy rate of 92.1% represents exceptional performance in the luxury segment.</p>
                        
                        <h4>Occupancy Trends:</h4>
                        <ul>
                            <li><strong>Peak Performance:</strong> March achieved 94.1% occupancy, demonstrating strong demand patterns</li>
                            <li><strong>Seasonal Stability:</strong> Consistent performance across months with minimal volatility</li>
                            <li><strong>Revenue Optimization:</strong> ADR growth of 8.2% while maintaining high occupancy levels</li>
                            <li><strong>Market Leadership:</strong> RevPAR performance significantly above market averages</li>
                        </ul>
                        
                        <h4>Strategic Insights:</h4>
                        <p>The property's ability to maintain high occupancy while achieving premium pricing demonstrates strong brand positioning and effective revenue management. The consistent performance across different months indicates robust demand fundamentals and effective marketing strategies.</p>
                        
                        <h4>Competitive Position:</h4>
                        <ul>
                            <li>Superior ADR performance vs competitive set</li>
                            <li>Strong RevPAR index indicating market share gains</li>
                            <li>Effective yield management strategies</li>
                        </ul>
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
                </div>

                <!-- Cash Flow Analysis -->
                <div class="section">
                    <div class="section-header">
                        <div class="section-icon">CF</div>
                        <h2 class="section-title">Cash Flow Analysis</h2>
                    </div>

                    <div class="analysis-section">
                        <h3>Cash Flow Performance Review</h3>
                        <p>The cash flow analysis for 2025 demonstrates healthy financial performance with a positive net cash flow of €350,000. This performance is driven by strong operational cash generation, controlled capital expenditures, and disciplined debt service management.</p>
                        
                        <h4>Operational Cash Flow Analysis:</h4>
                        <ul>
                            <li><strong>Strong Generation:</strong> €1,800,000 in operational cash flow demonstrates robust business fundamentals</li>
                            <li><strong>Consistent Performance:</strong> Monthly operational cash flow of €70,000 shows stability</li>
                            <li><strong>Margin Improvement:</strong> 3.2% year-to-date improvement in operational efficiency</li>
                        </ul>
                        
                        <h4>Investment Activities:</h4>
                        <p>Investment cash outflows of €300,000 represent strategic capital expenditures focused on maintaining and enhancing the property's competitive position. These investments are essential for preserving asset value and guest satisfaction standards.</p>
                        
                        <h4>Financing Structure:</h4>
                        <p>Financing activities generated -€1,400,000, primarily related to debt service obligations. The structured approach to debt management ensures sustainable leverage levels while maintaining financial flexibility.</p>
                        
                        <h4>Liquidity Position:</h4>
                        <p>The final cash position of €3,116,361 provides strong liquidity for operational needs and strategic opportunities. This robust cash position supports the property's ability to navigate market fluctuations and invest in growth initiatives.</p>
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
                                <tr style="background: #2F3B2D; font-weight: 600;">
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
                </div>

                <!-- Capital Structure -->
                <div class="section">
                    <div class="section-header">
                        <div class="section-icon">CS</div>
                        <h2 class="section-title">Capital Structure & Financing</h2>
                    </div>

                    <div class="analysis-section">
                        <h3>Capital Structure Analysis</h3>
                        <p>The capital structure of €61.0M is strategically designed to optimize returns while maintaining financial stability. The financing structure balances equity participation with debt leverage to maximize investor returns while ensuring operational flexibility.</p>
                        
                        <h4>Capital Stack Composition:</h4>
                        <ul>
                            <li><strong>Equity (14.8%):</strong> €9.0M providing ownership participation and upside potential</li>
                            <li><strong>Financial Debt (63.1%):</strong> €38.5M secured mortgage with favorable terms</li>
                            <li><strong>Other Debts (22.1%):</strong> €13.5M supporting development and working capital needs</li>
                        </ul>
                        
                        <h4>Debt Structure Analysis:</h4>
                        <p>The primary debt facility is a €21.8M development loan from BBVA Mexico at 2.25% interest rate, maturing December 1, 2037. The quarterly amortization schedule provides predictable debt service while the competitive interest rate supports strong cash flow generation.</p>
                        
                        <h4>Management Agreement Structure:</h4>
                        <p>The 25-year management agreement with NOMADE Hotels provides operational stability and brand strength. The fee structure includes a 2.5% base fee, 1.5% marketing fee, and 20% incentive fee on AGOP, aligning management interests with property performance.</p>
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
                            <div class="info-row" style="border-top: 2px solid #b39d8c; margin-top: 1rem; padding-top: 1rem;">
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
                            <div class="info-row" style="border-top: 2px solid #b39d8c; margin-top: 1rem; padding-top: 1rem;">
                                <span class="info-label"><strong>Year 4+:</strong></span>
                                <span class="info-value"><strong>€25,000/key (€1,200,000)</strong></span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Market Position & Competitive Analysis -->
                <div class="section">
                    <div class="section-header">
                        <div class="section-icon">MP</div>
                        <h2 class="section-title">Market Position & Competitive Analysis</h2>
                    </div>

                    <div class="analysis-section">
                        <h3>Competitive Market Analysis</h3>
                        <p>NOMADE ${hotel?.name || 'Tulum'} maintains a strong competitive position within the luxury hospitality segment, demonstrating superior pricing power and revenue generation capabilities compared to the competitive set.</p>
                        
                        <h4>Market Position Strengths:</h4>
                        <ul>
                            <li><strong>Premium Pricing:</strong> ADR index of 114.3 demonstrates ability to command premium rates</li>
                            <li><strong>Revenue Leadership:</strong> RevPAR index of 112.8 indicates superior revenue generation</li>
                            <li><strong>Brand Strength:</strong> NOMADE brand positioning supports rate premiums</li>
                            <li><strong>Market Share:</strong> Ranking 2nd in both ADR and RevPAR within competitive set</li>
                        </ul>
                        
                        <h4>Strategic Positioning:</h4>
                        <p>The property's strategy focuses on maintaining premium positioning through exceptional service delivery and unique guest experiences. While occupancy ranks 5th in the competitive set, the superior ADR performance more than compensates, resulting in strong RevPAR leadership.</p>
                        
                        <h4>Competitive Advantages:</h4>
                        <ul>
                            <li>Distinctive brand identity and positioning</li>
                            <li>Superior guest experience and service standards</li>
                            <li>Strategic location and property design</li>
                            <li>Effective revenue management and pricing strategies</li>
                        </ul>
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
                </div>

                <!-- Investment Summary -->
                <div class="section">
                    <div class="section-header">
                        <div class="section-icon">IS</div>
                        <h2 class="section-title">Investment Summary & Outlook</h2>
                    </div>

                    <div class="analysis-section">
                        <h3>Investment Opportunity Analysis</h3>
                        <p>NOMADE ${hotel?.name || 'Tulum'} represents an exceptional investment opportunity in the luxury hospitality sector, combining strong operational performance with significant growth potential and strategic positioning in a premier destination.</p>
                        
                        <h4>Investment Highlights:</h4>
                        <ul>
                            <li><strong>Prime Location:</strong> Beachfront positioning in Tulum's exclusive hotel zone</li>
                            <li><strong>Proven Performance:</strong> Strong operational metrics with consistent profitability</li>
                            <li><strong>Brand Strength:</strong> Established NOMADE Hotels management with 25-year agreement</li>
                            <li><strong>Growth Potential:</strong> Projected ROI of 15-18% annually with upside potential</li>
                            <li><strong>Market Leadership:</strong> Superior competitive positioning and pricing power</li>
                        </ul>
                        
                        <h4>Financial Projections:</h4>
                        <p>Based on current performance trends and market conditions, the property is positioned to deliver strong returns to investors. The combination of revenue growth, operational efficiency improvements, and strategic positioning supports attractive risk-adjusted returns.</p>
                        
                        <h4>Risk Considerations:</h4>
                        <ul>
                            <li>Market cyclicality and seasonal demand variations</li>
                            <li>Competitive landscape evolution</li>
                            <li>Regulatory and environmental considerations</li>
                            <li>Currency and economic factors</li>
                        </ul>
                        
                        <h4>Strategic Outlook:</h4>
                        <p>The property is well-positioned for continued success, with strong fundamentals, effective management, and strategic positioning supporting long-term value creation. The investment opportunity offers exposure to the growing luxury travel segment with downside protection through strong asset quality and operational performance.</p>
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
                        <h3>Investment Conclusion</h3>
                        <p>NOMADE ${hotel?.name || 'Tulum'} offers a compelling investment opportunity combining operational excellence, strategic positioning, and growth potential. The property's strong performance metrics, competitive advantages, and experienced management team position it well for continued success in the luxury hospitality sector. With 100% equity availability, investors have the opportunity to participate in a proven asset with attractive return potential and downside protection through strong operational fundamentals.</p>
                    </div>
                </div>
            </div>

            <!-- Report Footer -->
            <div class="report-footer">
                <h3>NOMADE Hotels</h3>
                <p>This report contains confidential and proprietary information. Distribution is restricted to authorized parties only. All financial projections are estimates based on current market conditions and historical performance.</p>
                <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #b39d8c; opacity: 0.6;">
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