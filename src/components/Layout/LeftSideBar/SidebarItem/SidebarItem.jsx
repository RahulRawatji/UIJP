import { useState } from "react";
import {
    ChevronRight,
    ChevronDown,
} from "lucide-react";

import './sidebarItem.css';

const SidebarItem = ({ icon: Icon, label, children, disabled=false }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="sidebar_item">
            <button
                onClick={() => children && setOpen(!open)}
                disabled ={disabled}
                className="sidebar_item_btn"
            >
                <span className="sidebar_item_chevron">
                    {children ? (open ? <ChevronDown color='rgba(28, 28, 28, 0.2)' size={16} /> : <ChevronRight  color='rgba(28, 28, 28, 0.2)' size={16} />) : null}
                </span>
                <span className="sidebar_item_icon">
                    <Icon size={18} />
                </span>
                <span className="sidebar_item_label">{label}</span>
            </button>

            {open && children && (
                <div className="sidebar_item_children">
                    {children.map((child, i) => (
                        <a key={i} href="#" className="sidebar_item_link">
                            {child}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SidebarItem;