import React from 'react';
import axios from 'axios';

import Order from "./Order";
import HorizontalLine from "../dashboard/HorizontalLine";
import OrderView from "./OrderView";

import './style.css';

class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            timestamp: new Date()
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/user/orders').then(result => {
                this.setState({data: result.data.result,timestamp: new Date()})
            }
        ).catch(err => console.log(err));
    }

    render() {
        return (
            <div style={ordersStyle}>
                <div style={containerStyle}>
                    <div style={titleStyle}>
                        <p style={{marginBottom: '10px'}}>Orders</p>
                        <HorizontalLine/>
                    </div>
                    <div style={{flex: '1', height: '100%', overflow: 'hidden'}}>
                        <table className="orders" style={tblStyle}>
                            <tbody style={{
                                display: 'block',
                                overflowY: "scroll",
                                height: 'inherit',
                                width: 'inherit'
                            }}>
                            {this.state.data.map((order) => (
                                <Order data={order} key={order.order_id} func={this.togglePop}/>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <div style={footStyle}>
                        <p>
                            Data updated at {this.state.timestamp.toLocaleTimeString()}
                        </p>
                    </div>
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
    display: 'flex',
    flexDirection: 'row',
}

const containerStyle = {
    margin: '20px',
    flex: '1 1',
    display: 'flex',
    flexDirection: 'column'
}
const tblStyle = {
    borderCollapse: 'collapse',
    height: 'inherit',
    width: '100%'
}

const titleStyle = {
    fontSize: '40px',
    fontWeight: '200',
    height: '90px',
}
const footStyle = {
    color: 'gray',
    fontSize: '13px',
    marginTop: '20px',
    height: '20px'
}

export default Orders;
