import { Input, Breadcrumb } from "antd";
import Icon, {BellOutlined, StarOutlined, SunOutlined} from '@ant-design/icons';

import SideIcon from '../../../assets/sideIcon.svg'
import SideIconLight from '../../../assets/sideIconLight.svg'

import './centerNav.css';

export default function CenterNav({showLeftSideBarHandler,showNotificationBarHandler}) {

    return (
        <div className='center_nav_container'>
            <div className="center_nav_left">
                <button onClick={showLeftSideBarHandler}><img src={SideIconLight} className="menu_icon"  /></button>
                <StarOutlined />
                <Breadcrumb
                    items={[
                        {
                            title: 'Dashboards',
                        },
                        {
                            title: <a href="">Default</a>,
                        }
                    ]}
                />
            </div>
            <div className="center_nav_right">
                <Input placeholder="Search" />
                <SunOutlined />
                <BellOutlined />
                 <button onClick={showNotificationBarHandler}><img src={SideIconLight} className="menu_icon"  /></button>
            </div>
        </div>
    )
}
