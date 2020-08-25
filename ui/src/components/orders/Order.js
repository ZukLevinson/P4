import React from 'react';
import OrderView from "./OrderView";

import Progress from "./Progress";


class Order extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            seen: true,
            hover: false
        }
    }

    togglePop = () => {
        this.setState({seen: !this.state.seen})
    }
    hoverHandler = () => {
        this.setState({hover: !this.state.hover})
    }
    getStyle = () => {
        if (this.state.hover) {
            return (
                {
                    background: 'rgba(0,0,0,0.1)',
                    cursor: 'pointer'
                }
            )
        }
    }

    render() {
        const {order_id, products, status} = this.props.data;

        return (
            <tbody style={this.getStyle()}>
            <tr onClick={this.togglePop} onMouseLeave={this.hoverHandler} onMouseEnter={this.hoverHandler}>
                <td id="name" style={{padding: '0 10px'}}>
                    {order_id}
                </td>
                <td id="products" style={{padding: '0 10px'}}>
                    {JSON.stringify(products)}
                </td>
                <td id="status">
                    <Progress data={status} percentage={true}/>
                </td>
                <td id="expected" style={{padding: '0 10px'}}>
                    expected
                </td>
            </tr>
            {this.state.seen ? <OrderView data={this.props.data}/> : null}
            </tbody>
        );
    }
}

export default Order;
