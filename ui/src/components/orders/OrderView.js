import React from 'react';

import Client from "./Info/Client";
import Orders from "./Info/Orders";
import axios from "axios";

class OrderView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            orders: ''
        }

        axios.get('http://localhost:8080/api/user/client', {
            params: {
                client_id: this.props.id
            }
        }).then(user => {
            this.setState({orders: user.data.result[0]})
        })
    }

    render() {
        const {client_id} = this.state.data.source;
        return (
            <tr style={orderStyle} height="200px">
                <td style={tdStyle}>
                    <Client id={client_id} orders={this.state.orders}/>
                    <Orders id={client_id} orders={this.state.orders}/>
                </td>
                <td style={tdStyle}>
                    {/*<Type data={this.state.data}/>*/}
                </td>
                <td style={tdStyle}>
                    {/*<Type data={this.state.data}/>*/}
                </td>
                <td style={tdStyle}>
                    {/*<Type data={this.state.data}/>*/}
                </td>
            </tr>
        )
    }
}

const orderStyle = {
    borderBottom: '1px solid black',
    borderTop: '0',
}

const tdStyle = {
    padding:'10px'
}
export default OrderView;
