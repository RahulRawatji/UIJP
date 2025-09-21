import { useState } from "react";
import {
    User,
    Users,
    FileText,
    BookOpen,
    Briefcase,
    Share2,
    Folder,
    ShoppingBag,
    ChartPie
} from "lucide-react";


import USERIMG from '../../../assets/userIcon.svg'

import './leftSideBar.css';
import SidebarItem from './SidebarItem/SidebarItem';

const MENUITEMONE = [
        {
            label: "Default",
            icon: ChartPie,
            disabled: true,
        },
        {
            label: "eCommerce",
            icon: ShoppingBag,
            children: ["Settings", "Security"],
            disabled: true,
        },
        {
            label: "Projects",
            icon: Folder,
            children: ["Settings", "Security"],
             disabled: true,
        },
        {
            label: "Online Courses",
            icon: BookOpen,
            children: ["Articles", "Categories"],
            disabled: true,
        },
    ];

const MENUITEMTWO = [
        {
            label: "User Profile",
            icon: User,
            children: ["Overview", "Projects", "Campaigns", "Documents", "Followers"],
        },
        {
            label: "Account",
            icon: Users,
            children: ["Settings", "Security"],
        },
        {
            label: "Corporate",
            icon: Briefcase,
            children: ["Settings", "Security"],
        },
        {
            label: "Blog",
            icon: FileText,
            children: ["Articles", "Categories"],
        },
        {
            label: "Social",
            icon: Share2,
            children: ["Settings", "Security"],
        },
    ];


export default function LeftSideBar() {
    const [activeTab, setActiveTab] = useState("favorites");

   
    return (
        <aside className='left_sidebar_menu'>
          
             <div className="sidebar_profile">
      {/* Profile Header */}
      <div className="profile_header">
        <img
         src={USERIMG} 
          alt="avatar"
          className="profile_avatar"
        />
        <span className="profile_name">ByeWind</span>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === "favorites" ? "active" : ""}`}
          onClick={() => setActiveTab("favorites")}
        >
          Favorites
        </button>
        <button
          className={`tab ${activeTab === "recently" ? "active" : ""}`}
          onClick={() => setActiveTab("recently")}
        >
          Recently
        </button>
      </div>

      {/* Nav List */}
      <ul className="nav_list">
        <li className="nav_item">Overview</li>
        <li className="nav_item">Projects</li>
      </ul>
    </div>


            <div>

            </div>
            <div style={{ padding: '16px 0' }}>
                <p className='left_sidebar_sub_heading' >Dashboard</p>
                {MENUITEMONE.map((item, i) => (
                    <SidebarItem key={i} icon={item.icon} label={item.label} children={item.children}  disabled={item.disabled} />

                ))}
            </div>
            <div>
                <p className='left_sidebar_sub_heading'>Pages</p>
                {MENUITEMTWO.map((item, i) => (
                    <SidebarItem key={i} icon={item.icon} label={item.label} children={item.children} />

                ))}
            </div>
        </aside>
    )
}

