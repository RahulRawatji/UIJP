import { Table } from 'antd';
import './topSelling.css';

const TOP_SELLING_DATA = [
    { key: '1', name: "ASOS Ridley High Waist", price: "$79.49", qty: 82, amount: "$6,518.18" },
    { key: '2', name: "Marco Lightweight Shirt", price: "$128.50", qty: 37, amount: "$4,754.50" },
    { key: '3', name: "Half Sleeve Shirt", price: "$39.99", qty: 64, amount: "$2,559.36" },
    { key: '4', name: "Lightweight Jacket", price: "$20.00", qty: 184, amount: "$3,680.00" },
    { key: '5', name: "Marco Shoes", price: "$79.49", qty: 64, amount: "$1,965.81" },
];

const COLUMNS = [
    {
        title: <span className='top_selling_product_coloumn_title'>Name</span>,
        dataIndex: 'name',
        key: 'name',
        render: text => <span className='top_selling_product_row'>{text}</span>,
        onCell: () => ({ style: { padding: '10px' } })
    },
    { title: <span className='top_selling_product_coloumn_title'>Price</span>, dataIndex: 'price', key: 'price', render: text => <span className='top_selling_product_row'>{text}</span> , onCell: () => ({ style: { padding: '10px' } })},
    { title: <span className='top_selling_product_coloumn_title'>Qty</span>, dataIndex: 'qty', key: 'qty', render: text => <span className='top_selling_product_row'>{text}</span> , onCell: () => ({ style: { padding: '10px' } })},
    { title: <span className='top_selling_product_coloumn_title'>Amount</span>, dataIndex: 'amount', key: 'amount', render: text => <span className='top_selling_product_row'>{text}</span> , onCell: () => ({ style: { padding: '10px' } })},
];

function TopSelling() {
    return <>
        <h5 className='homepage_top_selling_container_title'>Top Selling Products</h5>
        <div style={{ marginTop: '16px' }}>
            <Table
                columns={COLUMNS}
                dataSource={TOP_SELLING_DATA} 
                pagination={false}
                />
        </div>
    </>

}

export default TopSelling;