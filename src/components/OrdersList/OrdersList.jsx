import  { useState } from "react";
import { Table, Avatar, Input } from "antd";
import {
  SearchOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Ellipsis,Plus, ArrowUpDown,ListFilter } from 'lucide-react';

import "./ordersList.css";

export default function OrderList() {
  const [searchText, setSearchText] = useState("");

  const columns = [
    {
      title: <span className="order_list_col_heading">Order ID</span>,
      dataIndex: "id",
      key: "id",
      render: (id) => <span style={{fontSize:'12px'}}>{id}</span>,
      style: {width: '100%'},
    },
    {
      title: <span className="order_list_col_heading">User</span>,
      dataIndex: "user",
      key: "user",
      render: (user) => (
        <div className="user_cell">
          <Avatar src={user.avatar} style={{width:'24px',height:'24px'}} />
          <span style={{fontSize:'12px'}}>{user.name}</span>
        </div>
      ),
       style: {width: '100%'},
    },
    {
      title: <span className="order_list_col_heading">Project</span>,
      dataIndex: "project",
      key: "project",
      render: (text) => <span style={{fontSize:'12px'}}>{text}</span>,
      style: {width: '100%'},
    },
    {
      title: <span className="order_list_col_heading">Address</span>,
      dataIndex: "address",
      key: "address",
       render: (text) => <span style={{fontSize:'12px'}}>{text}</span>,
        style: {width: '100%'},
    },
    {
      title: <span className="order_list_col_heading">Date</span>,
      dataIndex: "date",
      key: "date",
      render: (text) => (
        <span>
          <CalendarOutlined style={{ marginRight: 6 }} />
          <span style={{fontSize:'12px'}}>{text}</span>
        </span>
      ),
       style: {width: '100%'},
    },
    {
      title:  <span className="order_list_col_heading">Status</span>,
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color =
          status === "In Progress"
            ? "#95A4FC"
            : status === "Complete"
            ? "#A1E3CB"
            : status === "Pending"
            ? "#B1E3FF"
            : status === "Approved"
            ? "#FFE999"
            : "#1C1C1C66";
        return<> 
             <div className="order_table_status_cell">
            <div style={{background:`${color}`,height:'6px',width:'6px',borderRadius:'50%',display:'inline-block',marginRight:'6px'}}></div>
            <span style={{fontSize:'11px',color:`${color}`}}>{status}</span>
            </div>
          </>;
      },
    },
    {
      title: "",
      key: "action",
      render: () =>  <Ellipsis size={11}/>,
    },
  ];

  const data = [
    {
      key: "1",
      id: "#CM9801",
      user: { name: "Natali Craig",
      avatar: "3D02.png" },
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress",
    },
    {
      key: "2",
      id: "#CM9802",
      user: { name: "Kate Morrison", 
        avatar: "3D05.png" },
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "Complete",
    },
    {
      key: "3",
      id: "#CM9803",
      user: { name: "Drew Cano", avatar: "3D08.png" },
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: "Pending",
    },
    {
      key: "4",
      id: "#CM9804",
      user: { name: "Orlando Diggs", avatar: "Female05.png" },
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "Approved",
    },
    {
      key: "5",
      id: "#CM9805",
      user: { name: "Andi Lane", avatar: "Male06.png" },
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "Rejected",
    },
     {
      key: "6",
      id: "#CM9805",
      user: { name: "Andi Lane", avatar: "Male06.png" },
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "Pending",
    },
     {
      key: "7",
      id: "#CM9805",
      user: { name: "Andi Lane", avatar: "Male06.png" },
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "Rejected",
    },
     {
      key: "8",
      id: "#CM9805",
      user: { name: "Andi Lane", avatar: "Male06.png" },
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "Approved",
    },
  ];

  const filteredData = data.filter((item) =>
    item.user.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="order_list_container">
      <div className="order_list_header">
        <h3 className="order_list_title">Order List</h3>
      </div>
      <div className="flex justify-between p-[8px] items-center bg-[#F7F9FB]" style={{marginTop:'16px'}}>
        <div className="flex gap-4">
          <Plus size={20} />
          <ListFilter size={20}/>
          <ArrowUpDown size={20}/>
        </div>
        <div className="w-[160px] h-[28px]">
        <Input
          placeholder="Search"
          prefix={<SearchOutlined />}
          onChange={(e) => setSearchText(e.target.value)}
          style={{padding:'4px 8px'}}
        />
        </div>
      </div>
      <div className="order_list_table_container">
        <Table
                rowSelection={{}}
                columns={columns}
                dataSource={filteredData}
                pagination={{ pageSize: 10 }}
                scroll={{x: "max-content"}}
                style={{marginTop:'12px'}}
                rowClassName={'order_list_table_row'}
              />
      </div>
     
    </div>
  );
}
