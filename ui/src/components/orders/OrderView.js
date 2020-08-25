import React from 'react';

import Type from "./Info/Type";

class OrderView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }

    render() {
        return (
            <tr style={orderStyle} height="200px">
                <td>
                    <Type data={this.state.data}/>
                </td>
                <td>
                    <Type data={this.state.data.products}/>
                </td>
                <td>
                    <Type data={this.state.data.status}/>
                </td>
                <td>
                    <Type data={this.state.data}/>
                </td>
            </tr>
        )
    }
}

const orderStyle = {
    borderBottom: '1px solid black',
    borderTop: '0',
}

const containerStyle = {
    width: '100%',
    height: '200px'
}
export default OrderView;
