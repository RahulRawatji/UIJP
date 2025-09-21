import { Progress } from "antd";

const REVENUE_DATA = [
  { location: "New York", percent: 70 },
  { location: "San Francisco", percent: 50 },
  { location: "Sydney", percent: 30 },
  { location: "Singapore", percent: 60 },
];

function Revenue() {    
    return (    <>
    <h5 className="homepage_revenue_container_title">Revenue by Location</h5>
           <div>
            <img src="WorldMapLight.png" alt="world map" style={{width:'100%',height:'100%'}} />
          </div>
          <div>
            {REVENUE_DATA.map(item=><div>
              <div style={{display:'flex',justifyContent:'space-between'}}>
                <span style={{fontSize:'12px'}}>{item.location}</span>
                <span style={{fontSize:'12px'}}>{item.percent}K</span>
              </div>
              <Progress percent={item.percent} strokeColor={"#A8C5DA"} size={4} showInfo={false} />
            </div>)}  
          </div>
          </>
    )}  

export default Revenue;