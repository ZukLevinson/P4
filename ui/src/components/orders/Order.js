import React from 'react';
import Progress from "./Progress";
class Order extends React.Component {
    render() {
        const {order_id, products, status} = this.props.data;

        return(
            <tr>
                <td id="name" style={{padding:'0 10px'}}>
                    {order_id}
                </td>
                <td id="products" style={{padding:'0 10px'}}>
                    {JSON.stringify(products)}
                </td>
                <td id="status">
                    <Progress data={status}/>
                </td>
                <td  id="expected" style={{padding:'0 10px'}}>
                    expected
                </td>
            </tr>
        );
    }
}

export default Order;
