import { Bar, BarChart, ResponsiveContainer, XAxis, } from "recharts";
import { TrendingDown, TrendingUp } from "lucide-react";

import TotalSales from "./TotalSales/TotalSales";
import TopSelling from "./TopSelling/TopSelling";
import Revenue from "./Revenue/Revenue";
import ProjectionChart from "./ProjectionChart/ProjectionChart";

import './homepage.css';
import RevenueChart from "./RevenueChart/RevenueChart";

// Dummy data for demonstration
const stats = [
  { label: "Customers", value: "3,781", change: "+11.01%", up: true, background: '#E3F5FF' },
  { label: "Orders", value: "1,219", change: "-0.03%", up: false, background: '#F7F9FB' },
  { label: "Revenue", value: "$695", change: "+15.03%", up: true, background: '#F7F9FB' },
  { label: "Growth", value: "30.1%", change: "+6.08%", up: true, background: '#E5ECF6' },
];

export default function Homepage() {
  return (
    <div className="homepage_main_container">
      <h3 className="homepage_main_title">eCommerce</h3>
      {/* Top Stats */}
      <div className="homepage_top_stats_container">
        <div className="homepage_card_layout"  >
          {stats.map(item => <div style={{ width: '202px', height: '112px', background: `${item.background}`, borderRadius: '16px', padding: '4%' }}>
            <p style={{ fontSize: '14px', fontWeight: '600' }}>{item.label}</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '24px', fontWeight: '600', display: 'inline-block', marginRight: '28px' }}>{item.value}</span>
              <span style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>{item.change}{item.up ? <TrendingUp size={'11'} /> : <TrendingDown size={'11'} />}</span>
            </div>
          </div>)}
        </div>
        <div className="homepage_bar_chart_container">
          <ProjectionChart />
        </div>
      </div>

      <div className="homepage_bottom_items_container">
        <div className="homepage_revenue_chart_container">
          <RevenueChart/>
        </div>
        <div className="homepage_review_item_container">
          <Revenue />
        </div>
        <div className="homepage_top_selling_tabel_container" >
          <TopSelling />
        </div>
        <div className="homepage_total_sales_item_container">
          <TotalSales />
        </div>
      </div>
    </div>
  );
}