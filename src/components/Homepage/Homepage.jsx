import React from "react";
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

import './homepage.css';
import { TrendingDown, TrendingUp } from "lucide-react";
import { Progress } from "antd";
import TotalSales from "./TotalSales/TotalSales";
// Dummy data for demonstration
const stats = [
  { label: "Customers", value: "3,781", change: "+11.01%", up: true, background:'#E3F5FF'},
  { label: "Orders", value: "1,219", change: "-0.03%", up: false ,background:'#F7F9FB'},
  { label: "Revenue", value: "$695", change: "+15.03%", up: true , background:'#F7F9FB'},
  { label: "Growth", value: "30.1%", change: "+6.08%", up: true, background:'#E5ECF6' },
];

const locations = [
  { city: "New York", value: "72K" },
  { city: "San Francisco", value: "39K" },
  { city: "Sydney", value: "25K" },
  { city: "Singapore", value: "61K" },
];

const products = [
  { name: "ASOS Ridley High Waist", price: "$79.49", qty: 82, amount: "$6,518.18" },
  { name: "Marco Lightweight Shirt", price: "$128.50", qty: 37, amount: "$4,754.50" },
  { name: "Half Sleeve Shirt", price: "$39.99", qty: 64, amount: "$2,559.36" },
  { name: "Lightweight Jacket", price: "$20.00", qty: 184, amount: "$3,680.00" },
  { name: "Marco Shoes", price: "$79.49", qty: 64, amount: "$1,965.81" },
];

const sales = [
  { label: "Direct", value: 38.6, amount: "$300.56", color: "bg-green-400" },
  { label: "Affiliate", value: 17.4, amount: "$135.18", color: "bg-blue-400" },
  { label: "Sponsored", value: 15.2, amount: "$154.02", color: "bg-purple-400" },
  { label: "E-mail", value: 8.8, amount: "$48.96", color: "bg-yellow-400" },
];

const projectionData = [
   {
    name: 'Jan',
    uv: 4000,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
      amt: 2400,
  },
  {
    name: 'Mar',
    uv: 2000,
    amt: 2400,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  }
]

const salesData = [
  { location: "New York", percent: 70 },
  { location: "San Francisco", percent: 50 },
  { location: "Sydney", percent: 30 },
  { location: "Singapore", percent: 60 },
];

export default function Homepage() {
  return (
      <div className="">
        <h3>eCommerce</h3>
        {/* Top Stats */}
        <div className="homepage_top_stats_container">
        <div className="homepage_card_layout"  >
          {stats.map(item=><div style={{width:'202px',height:'112px',background:`${item.background}`,borderRadius:'16px',padding:'4%'}}>
            <p style={{fontSize:'14px',fontWeight:'600'}}>{item.label}</p>
            <div style={{display:'flex',alignItems:'center'}}>
              <span style={{fontSize:'24px',fontWeight:'600', display:'inline-block',marginRight:'28px'}}>{item.value}</span>
              <span style={{fontSize:'12px', display:'flex',alignItems:'center',gap:'4px'}}>{item.change}{item.up? <TrendingUp size={'11'}/>:<TrendingDown size={'11'}/>}</span>
          </div>
        </div>)}
        </div>
        {/* Projections vs Actuals */}
        
        <div  className="homepage_bar_chart_container">
          <h4 className="hompage_bar_chat_title">Projection vs Actuals</h4>
          <ResponsiveContainer width="100%" height="100%" className="homepage_bar_chart">
            <BarChart width={150} height={40} data={projectionData} barSize={20}>
              <XAxis dataKey="name" style={{marginTop:'8px'}} />
              {/* <YAxis width={24} axisLine={false} /> */}
              <Bar dataKey="amt" stackId="a" fill="#A8C5DA" />
              <Bar dataKey="uv" stackId="a" fill="#d7dee2ff" />
             </BarChart>
          </ResponsiveContainer>
            
        </div>
      </div>
      {/* <div className="homepage_bottom_line_chart_container">
        <div>
          <span>Revenue</span>
          <span>Revenue</span>
          <span>Revenue</span>
        </div>
                            
          <LineChart width={500} height={300} data={projectionData} style={{width:'150px',height:'100px'}}>
            <XAxis dataKey="name" />
            <YAxis />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
      
      </div> */}

      <div className="homepage_bottom_items_container">
        <div></div>
        <div style={{height:'318px',width:'202px',background:'#F7F9FB', padding:'24px',borderRadius:'16px'}}>
          <h5 className="homepage_revenue_container_title">Revenue by Location</h5>
           <div>
            <img src="WorldMapLight.png" alt="world map" style={{width:'100%',height:'100%'}} />
          </div>
          <div>
            {salesData.map(item=><div>
              <div style={{display:'flex',justifyContent:'space-between'}}>
                <span style={{fontSize:'12px'}}>{item.location}</span>
                <span style={{fontSize:'12px'}}>{item.percent}K</span>
              </div>
              <Progress percent={item.percent} strokeColor={"#A8C5DA"} size={4} showInfo={false} />
            </div>)}  
          </div>
        </div>
        <div></div>
        <div style={{height:'318px',width:'202px',background:'#F7F9FB',order:'2',padding:'24px',borderRadius:'16px'}}>
              <TotalSales/>
        </div>
        </div>
    </div>
  );
}