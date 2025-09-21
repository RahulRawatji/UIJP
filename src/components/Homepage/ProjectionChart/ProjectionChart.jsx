import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis } from "recharts";


const PROJECTION_DATA = [
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

function ProjectionChart() {
    return <>
      <h4 className="hompage_bar_chat_title">Projection vs Actuals</h4>
        <ResponsiveContainer width="100%" height="100%" className="homepage_bar_chart">
        <BarChart width={150} height={40} data={PROJECTION_DATA} barSize={20}>
          <CartesianGrid  vertical={false} fillOpacity={0.1} fill="#F7F9FB"/>
            <XAxis dataKey="name" style={{marginTop:'12px',fontSize:'12px'}}  />

            {/* <YAxis width={24} axisLine={false} /> */}
            <Bar dataKey="amt" stackId="a" fill="#A8C5DA" />
            <Bar dataKey="uv" stackId="a" fill="#d7dee2ff" />
            </BarChart>
        </ResponsiveContainer>      
    </>;
    }   

    export default ProjectionChart;