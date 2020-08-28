import React from 'react';
import axios from "axios";

import Client from "./Info/Client";
import Orders from "./Info/Orders";
import OrderInfo from "./Info/OrderInfo";

class OrderView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: null,
            orders: this.props.data
        }

    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/user/client', {
            params: {
                client_id: this.props.id
            }
        }).then(res => this.setState({
            ...this.state,
            isLoaded: true,
            data: res.data.result[0]
        }))
    }

    render() {
        const {isLoaded, data} = this.state;

        if(isLoaded) {
            const {client_id} = this.props.data.source;

            return (
                <tr style={orderStyle} height="200px">
                    <td style={tdStyle} id="client_info">
                        {/*<Client id={client_id}/>*/}
                        {/*<Orders id={client_id}/>*/}
                    </td>
                    <td style={tdStyle} id="order_info">
                        {/*<OrderInfo products={this.props.data.products}/>*/}
                    </td>
                    <td style={tdStyle}>
                        {/*<Type data={this.state.data}/>*/}
                    </td>
                    <td style={tdStyle}>
                        {/*<Type data={this.state.data}/>*/}
                    </td>
                </tr>
            )
        } else {
            return <tr><td colSpan={4}><p>Loading...</p></td></tr>;
        }
    }
}

const orderStyle = {
    borderBottom: '1px solid black',
    borderTop: '0',
}

const tdStyle = {
    padding: '10px'
}
export default OrderView;
