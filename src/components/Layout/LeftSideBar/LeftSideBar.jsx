import { Menu } from 'antd';
import { NavLink } from 'react-router';

import USERIMG from '../../../assets/userIcon.svg'

import './leftSideBar.css';

export default function LeftSideBar() {
    const menuItems = [
        { key: 'home', label: <NavLink to={'/'}>Home</NavLink> },
        { key: 'orders', label: <NavLink to={'/orders'}> Orders</NavLink> },
    ];

    return (
       <aside className='left_sidebar_menu'>
            <div className='user_info_container'>
                <div>
                    <img src={USERIMG}/>
                </div>
                <p>BiWind</p>
            </div>
            <div></div>
            <Menu 
                mode="inline"
                // style={{ width: 212 }}
                items={menuItems} 
            />
        </aside>
    )
}