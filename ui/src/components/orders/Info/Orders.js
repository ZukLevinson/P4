import React from 'react';
import axios from 'axios';

import Progress from "../Progress";

class Orders extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: null
        }

    }
    componentDidMount() {
        axios.get('http://localhost:8080/api/user/client', {
            params: {
                client_id: this.props.id
            }
        }).then(
            res => this.setState({
                ...this.state,
                isLoaded: true,
                data: res.data.result[0]
            })
        );
    }
    getOrders = (client_id) =>{
        axios.get('http://localhost:8080/api/user/client', {
            params: {
                client_id: this.props.id
            }
        }).then(user => {
            this.setState({user: user.data.result[0]})
        })
    }

    render() {


        const orders = this.state.user.orders !== undefined ? this.state.user.orders : new Array(1)
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
