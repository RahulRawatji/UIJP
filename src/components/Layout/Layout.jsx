import { NavLink, Outlet } from 'react-router';
import { Menu } from "antd";

const Layout = ({ children }) => {
    const menuItems = [
        { key: 'home', label: <NavLink to={'/'}>'Home'</NavLink> },
        { key: 'orders', label: <NavLink to={'/orders'}> 'Orders'</NavLink> },
    ];
    return (
        <div className="layout">
            <Menu 
                mode="horizontal"
                theme="dark" 
                items={menuItems} 
            />
            <Outlet />
        </div>
    );
};

export default Layout;