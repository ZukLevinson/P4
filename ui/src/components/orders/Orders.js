import React from 'react';

import Order from "./Order";
import HorizontalLine from "../dashboard/HorizontalLine";

class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    business_id: '123',
                    order_id: '000',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'manufacturing',
                        percentage: '28'
                    }
                }, {
                    business_id: '123',
                    order_id: '001',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'manufacturing',
                        percentage: '0.28'
                    }
                }
            ],
            timestamp: new Date()
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div style={ordersStyle}>
                <div style={containerStyle}>
                    <p style={titleStyle}>Orders</p>
                    <HorizontalLine/>
                    <table style={tblStyle}>
                        <tbody>
                        <tr>
                            <th>Order ID</th>
                            <th>Products</th>
                            <th>Order Status</th>
                            <th>Expected</th>
                        </tr>
                        {this.state.data.map((order) => (
                            <Order data={order} key={order.order_id}/>
                        ))}
                        </tbody>
                    </table>
                    <p style={footStyle}>
                        Data updated at {this.state.timestamp.toLocaleTimeString()}
                    </p>
                </div>
            </div>
        );
    }
}

const ordersStyle = {
    height: '90vh',
    width: '100vw',
    overflow: 'hidden',
    background: '#FBFBFB',
    display:'flex',
    flexDirection: 'column'
}
const tblStyle = {
    width: '100%',
    flex:'1'
}
const containerStyle = {
    margin: '20px',
    display:'flex',
    flexDirection:'column',
    flex:'1'
}

const titleStyle = {
    fontSize: '40px',
    fontWeight: '200',
    marginBottom: '10px'
}
const footStyle = {
    color:'gray',
    fontSize: '13px',
    marginTop:'20px'
}

export default Orders;
