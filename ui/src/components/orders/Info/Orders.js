import React from 'react';
import axios from 'axios';

import Progress from "../Progress";

class Orders extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: this.props.orders !== undefined ? this.props.orders : new Array(1)
        }
    }

    render() {
        const orders = this.state.orders !== undefined ? this.state.orders : new Array(1)

        return (
            <div style={containerStyle}>
                {orders.slice(0, 3).map(order=>(
                    <div style={{display:'flex', flexDirection:'column', border:'1px gray solid', padding:'5px', textAlign:'center'}}>
                        <p>{order}</p>
                        <p>28/08/2020</p>
                        <Progress size="auto" data={{id: '3',percentage:'89'}}/>
                    </div>
                ))}
            </div>
        );
    }
}

const containerStyle = {
    wordWrap: 'break-word',
    height: '50%',
    textAlign: 'left',
    width:'100%',
    display:'flex',
    justifyContent:'space-between'
}

export default Orders;
