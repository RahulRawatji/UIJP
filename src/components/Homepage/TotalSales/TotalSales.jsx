import { Cell, Pie, PieChart } from "recharts";

import './totalSales.css';

const SALES_DATA = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
]


const COLORS = ['#BAEDBD', '#95A4FC', '#B1E3FF', '#1C1C1C'];

function TotalSales() {
    return (
        <>
            <h5 className="homepage_total_sales_container_title">Total Sales</h5>
            <div>
                <div className="homepage_total_sales_container_chart">
                    <PieChart width={120} height={120}>
                        <Pie
                            data={SALES_DATA}
                            cx={50}
                            cy={60}
                            innerRadius={40}
                            outerRadius={55}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {SALES_DATA.map((entry, index) => (
                                <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>

                    </PieChart>
                </div>
                <div style={{height:'124px',marginTop:'16px'}}>
                    <div style={{display:'flex',justifyContent:'space-between',marginBottom:'8px'}}>
                        <div>
                            <span></span>
                            <span style={{fontSize:'12px'}}>Direct</span>
                        </div>
                        <span style={{fontSize:'12px'}}>$300</span>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',marginBottom:'8px'}}>
                        <div>
                            <span></span>
                            <span style={{fontSize:'12px'}}>Direct</span>
                        </div>
                        <span style={{fontSize:'12px'}}>$300</span>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',marginBottom:'8px'}}>
                        <div>
                            <span></span>
                            <span style={{fontSize:'12px'}}>Direct</span>
                        </div>
                        <span style={{fontSize:'12px'}}>$300</span>
                    </div>
                     <div style={{display:'flex',justifyContent:'space-between',marginBottom:'8px'}}>
                        <div>
                            <span></span>
                            <span style={{fontSize:'12px'}}>Direct</span>
                        </div>
                        <span style={{fontSize:'12px'}}>$300</span>
                    </div>
                     <div style={{display:'flex',justifyContent:'space-between',marginBottom:'8px'}}>
                        <div>
                            <span></span>
                            <span style={{fontSize:'12px'}}>Direct</span>
                        </div>
                        <span style={{fontSize:'12px'}}>$300</span>
                    </div>
                </div>           
            </div>
        </>
    )
};


export default TotalSales;