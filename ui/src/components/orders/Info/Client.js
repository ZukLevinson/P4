import React from 'react';
import axios from 'axios';

class Client extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // user: ''
            orders: this.props.orders !== undefined ? this.props.orders : ''
        }
        // axios.get('http://localhost:8080/api/user/client', {
        //     params: {
        //         client_id: this.props.id
        //     }
        // }).then(user => {
        //     this.setState({user: user.data.result[0]})
        // })

    }

    render() {
        const {full_name, address, business_name, phone, bn} = this.state.orders !== undefined ? this.state.orders.info : '(Loading)'
        return (
            <div style={containerStyle}>
                <p>Ordered by {full_name} from {business_name}.</p>
                <p style={{userSelect: 'all'}}>{address}</p>
                <p>Tel: {phone} | BN: {bn}</p>
            </div>
        );
    }
}

const containerStyle = {
    wordWrap: 'break-word',
    height: '50%',
    textAlign: 'left'
}

export default Client;
