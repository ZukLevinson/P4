import React from 'react';
import Progress from "./Progress";
class Order extends React.Component {
    render() {
        const {order_id, products, status} = this.props.data;

        return(
            <tr>
                <td id="name">
                    {order_id}
                </td>
                <td id="products">
                    {JSON.stringify(status)}
                </td>
                <td id="status">
                    <Progress data={status}/>
                </td>
                <td  id="expected">
                    expected
                </td>
            </tr>
        );
    }
}

const progStyle = {
    background:'blue',
    height:'inherit',
    width:'calc(inherit * )'

}

export default Order;
