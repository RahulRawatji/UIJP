import { useState } from 'react';
import { Outlet } from 'react-router';

import LeftSideBar from './LeftSideBar/LeftSideBar';
import NotificationBar from './NotificationBar/NotificationBar';
import CenterNav from './CenterNav/CenterNav';

import './layout.css';

const Layout = ({ children }) => {
    const [showNotification, setShowNotification] = useState(false);
    const [showLeftSideBar, setShowLeftSideBar] = useState(false);

    const showNotificationBarHandler = () => {
        setShowNotification(!showNotification);
    };

    const showLeftSideBarHandler = () => {
        setShowLeftSideBar(!showLeftSideBar);
    };

    function handleClick(){
        if(window.innerWidth <= 768 && showLeftSideBar){
            setShowLeftSideBar(false);
        }
        if(window.innerWidth <= 768 && showNotification){
            setShowNotification(false);
        }
    }

    return (
        <div className="main_layout_container">
            {showLeftSideBar ? <LeftSideBar />:null}
            <div style={{ flex: 1 }} onClick={handleClick}>
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