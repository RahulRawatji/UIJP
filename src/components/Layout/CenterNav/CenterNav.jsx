import { Input, Breadcrumb } from "antd";
import { Search, Bell, Clock4, Sun, Star, PanelRight, PanelLeft } from "lucide-react";

import "./centerNav.css";

function CenterNav({
  showLeftSideBarHandler,
  showNotificationBarHandler,
}) {

  const switchThemeHandler = () => {
    document.body.classList.toggle('dark')
  };

  return (
    <div className="center_nav_container">
      {/* Left Section */}
      <div className="center_nav_left">
        <button className="icon_btn" onClick={showLeftSideBarHandler}>
          <PanelLeft size={20} className="menu_icon" />
        </button>
        <Star size={20} className="nav_icon" />
        <Breadcrumb
          className="nav_breadcrumb"
          separator="/"
          items={[
            {
              title: "Dashboards",
            },
            {
              title: "Default",
            },
          ]}
        />
      </div>

      {/* Right Section */}
      <div className="center_nav_right">
        <Input
          className="nav_search"
          placeholder="Search"
          suffix={<span className="shortcut">⌘/</span>}
          prefix={<Search size={12} style={{ color: "#A8C5DA" }} />}
        />
        <Sun size={20} className="nav_icon" onClick={switchThemeHandler} />
        <Clock4 size={20} className="nav_icon " />
        <Bell size={20} className="nav_icon " />
        <button className="icon_btn" onClick={showNotificationBarHandler}>
          <PanelRight size={20} className="menu_icon" />
        </button>
      </div>
    </div>
  );
}

export default CenterNav;