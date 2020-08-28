import React from 'react';
import axios from 'axios';

import Progress from "../Progress";

class Orders extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            orders: null
        }

    }
    componentDidMount() {
        axios.get('http://localhost:8080/api/user/client/orders', {
            params: {
                client_id: this.props.id
            }
        }).then(
            res => this.setState({
                ...this.state,
                isLoaded: true,
                orders: res.data.result
            })
        );
    }

    render() {
        const {isLoaded, orders} = this.state;
        if (isLoaded) {
            return (
                <div style={containerStyle}>
                    {orders.slice(0,3).map(order => (
                        <div key={order.order_id} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            borderRadius:'10px',
                            padding: '5px',
                            boxShadow: '0 0 10px rgba(46, 46, 46, 0.20)',
                            textAlign: 'center',
                            wordWrap: 'break-word',
                            minWidth:'20%'
                        }}>
                            <p>{order.order_id}</p>
                            <p>{new Date(order.date).toLocaleDateString()}</p>
                            <Progress size="auto" data={order.status}/>
                        </div>
                    ))}
                </div>
            );
        } else return <p>Loading</p>;
    }
}

const containerStyle = {
    wordWrap: 'break-word',
    height: '50%',
    textAlign: 'left',
    width:'100%',
    display:'flex',
    justifyContent:'space-around'
}

export default Orders;
