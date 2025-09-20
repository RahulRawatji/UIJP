import { Input, Breadcrumb } from "antd";
import {
  BellOutlined,
  StarOutlined,
  SunOutlined,
  ClockCircleOutlined,
  DesktopOutlined,
} from "@ant-design/icons";

import SideIconLight from "../../../assets/sideIconLight.svg";

import "./centerNav.css";

export default function CenterNav({
  showLeftSideBarHandler,
  showNotificationBarHandler,
}) {
  return (
    <div className="center_nav_container">
      {/* Left Section */}
      <div className="center_nav_left">
        <button className="icon_btn" onClick={showLeftSideBarHandler}>
          <img src={SideIconLight} className="menu_icon" alt="menu" />
        </button>
        <StarOutlined className="nav_icon" />
        <Breadcrumb
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
          prefix={<span className="shortcut">⌘/</span>}
        />
        <SunOutlined className="nav_icon" />
        <ClockCircleOutlined className="nav_icon" />
        <BellOutlined className="nav_icon" />
        <button className="icon_btn" onClick={showNotificationBarHandler}>
          <img src={SideIconLight} className="menu_icon" alt="menu" />
        </button>
      </div>
    </div>
  );
}
