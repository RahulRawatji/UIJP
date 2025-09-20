import { useState } from 'react';
import { Outlet } from 'react-router';

import LeftSideBar from './LeftSideBar/LeftSideBar';
import NotificationBar from './NotificationBar/NotificationBar';
import CenterNav from './CenterNav/CenterNav';

import './layout.css';

const Layout = ({ children }) => {
    const [showNotification, setShowNotification] = useState(false);
    const [showLeftSideBar, setShowLeftSideBar] = useState(true);

    const showNotificationBarHandler = () => {
        setShowNotification(!showNotification);
    };

    const showLeftSideBarHandler = () => {
        setShowLeftSideBar(!showLeftSideBar);
    };

    return (
        <div className="main_layout_container">
            {showLeftSideBar ? <LeftSideBar />:null}
            <div style={{ flex: 1 }}>
                <CenterNav 
                    showNotificationBarHandler={showNotificationBarHandler}
                    showLeftSideBarHandler={showLeftSideBarHandler} 
                />
                <Outlet />
            </div>
            {showNotification ? <NotificationBar /> : null}
        </div>
    );
};

export default Layout;