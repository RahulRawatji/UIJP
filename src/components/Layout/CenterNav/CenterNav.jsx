import { Input, Breadcrumb } from "antd";
import {
  BellOutlined,
  StarOutlined,
  SunOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import{ Search } from "lucide-react";

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
