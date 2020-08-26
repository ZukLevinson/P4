import React from 'react';

import Client from "./Info/Client";
import Orders from "./Info/Orders";
import axios from "axios";

class OrderView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: null,
            orders: ''
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
                    <td style={tdStyle}>
                        <Client id={client_id} orders={data}/>
                        <Orders id={client_id} orders={data}/>
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
        } else {
            return <a>Loading</a>;
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
