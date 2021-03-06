import React from 'react';
import axios from 'axios';
import * as qs from 'query-string';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Order from "./Order";
import HorizontalLine from "../dashboard/HorizontalLine";
import './style.css';

class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            timestamp: new Date(),
            redirect: null
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/user/orders', {
            params: {
                id: qs.parse(window.location.search).id === undefined ? '' : qs.parse(window.location.search).id
            }
        }).then(result => {
                this.setState({data: result.data.result, timestamp: new Date()})
            }
        ).catch(err => console.log(err));
    }


    handleChange = (event) => {
        const value = event.target.value;
        this.setState({data:[]});
        axios.get('http://localhost:8080/api/user/orders', {
            params: {
                id: value
            }
        }).then(result => {
                this.setState({
                    data: result.data.result,
                    timestamp: new Date(),
                    redirect: <Redirect to={`/orders?id=${value}`}/>
                })
            }
        ).catch(err => console.log(err));
    }

    render() {
        return (
            <div style={ordersStyle}>
                <Router>
                    <Route path=":id"/>
                    {this.state.redirect}
                </Router>
                <div style={containerStyle}>
                    <div style={titleStyle}>
                        <div style={{display: 'flex'}}>
                            <p style={{marginBottom: '10px'}}>Orders</p>
                            <input type="text" style={inputStyle} onChange={this.handleChange} placeholder="OrderID"/>
                        </div>
                        <HorizontalLine/>
                    </div>
                    <div style={{
                        maxHeight: '100%',
                        overflowY: 'scroll',
                        display: 'flex',
                        alignItems: 'stretch',
                        flexDirection: 'column'
                    }}>
                        <table className="orders" style={tblStyle}>
                            <tbody style={{
                                display: 'block',
                                width: '100%'
                            }}>
                            {this.state.data !== false ? this.state.data.map((order) => (
                                <Order data={order} key={order.order_id} func={this.togglePop}/>
                            )) : null}
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
    flex: '1 0',
    display: 'flex',
    flexDirection: 'column',
}
const tblStyle = {
    borderCollapse: 'collapse',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
}
const headStyle = {
    position: 'absolute',
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
    height: '20px',
    // flex: '0 1',
}
const inputStyle = {
    width: '200px',
    margin: 'auto 20px auto auto',
    float: 'right'
}

export default Orders;
