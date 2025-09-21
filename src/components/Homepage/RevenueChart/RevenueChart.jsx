import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';

import './revenueChart.css';

const data = [
    {
        name: 'Jan',
        uv: 1000,
        amt: 1800,
    },
    {
        name: 'Feb',
        uv: 1200,
        amt: 2400,
    },
    {
        name: 'Mar',
        uv: 2000,
        amt: 1200,
    },
    {
        name: 'Apr',
        uv: 2780,
        amt: 2000,
    },
    {
        name: 'May',
        uv: 1890,
        amt: 2181,
    },
    {
        name: 'June',
        uv: 990,
        amt: 1800,
    }
];


function RevenueChart() {
    return (
        <>
            <div className='homepage_revenue_chart_top' >
                <h4 className='homepage_top_text'>Revenue</h4>
                <div style={{height:'14px',width:'1px',background:'#807676ff'}}></div>
                <div className='homepage_revenue_chart_top_subtext'>
                     <div style={{width:'8px', height:'8px',background:'#1C1C1C',borderRadius:'50%'}}></div>
                    <span className='homepage_top_text'>Current Week</span>
                    <span className='homepage_top_text' style={{fontWeight:'600'}}>$53,211</span>
                </div>
                <div className='homepage_revenue_chart_top_subtext'>
                    <div style={{width:'8px', height:'8px',background:'#A8C5DA',borderRadius:'50%'}}></div>
                     <span className='homepage_top_text' >Previous Week</span>
                    <span className='homepage_top_text' style={{fontWeight:'600'}}>$68,211</span>
                </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid  vertical={false} fillOpacity={0.1} fill="#F7F9FB"/>
                    <XAxis dataKey="name" style={{ color: '#1C1C1C66', fontSize: '12px' }} />
                    {/* <YAxis style={{color:'#1C1C1C66',fontSize:'12px'}}/> */}
                    <Tooltip />
                    <Line type="natural" dataKey="amt" stroke="#8884d8" dot={false} strokeWidth={3} />
                    <Line type="natural" dataKey="uv" stroke="#1C1C1C" dot={false}  strokeWidth={3}/>
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}

export default RevenueChart;