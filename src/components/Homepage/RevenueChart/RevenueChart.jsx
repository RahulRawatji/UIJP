import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import './revenueChart.css';

const data = [
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
];


function RevenueChart() {
    return (
        <>
            <div className='homepage_revenue_chart_top' >
                <h4 className='homepage_top_text'>Revenue</h4>
                <div style={{height:'14px',width:'1px',background:'#807676ff'}}></div>
                <div className='homepage_revenue_chart_top_subtext'>
                    <span className='homepage_top_text'>Current Week</span>
                    <span className='homepage_top_text'>$53,211</span>
                </div>
                <div className='homepage_revenue_chart_top_subtext'>
                     <span className='homepage_top_text'>Previous Week</span>
                    <span className='homepage_top_text'>$68,211</span>
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
                    <XAxis dataKey="name" style={{ color: '#1C1C1C66', fontSize: '12px' }} />
                    {/* <YAxis style={{color:'#1C1C1C66',fontSize:'12px'}}/> */}
                    {/* <Tooltip /> */}
                    {/* <Legend /> */}
                    <Line type="natural" dataKey="amt" stroke="#8884d8" dot={false} />
                    <Line type="natural" dataKey="uv" stroke="#82ca9d" dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}

export default RevenueChart;