import React from 'react';
import axios from 'axios';

class Client extends React.Component {
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

    render() {
        const {isLoaded, data} = this.state;
        if (isLoaded) {
            const {full_name, address, business_name, phone, bn} = data.info;
            return (
                <div style={containerStyle}>
                    <p>Ordered by {full_name} from {business_name}.</p>
                    <p style={{userSelect: 'all',margin:'20px 0'}}>{address}</p>
                    <p>Tel: <a href={"tel:"+phone} style={{textDecoration:'underline'}}>{phone}</a> | BN: {bn}</p>
                </div>
            );
        } else return <p>Loading</p>;
    }
}

const containerStyle = {
    wordWrap: 'break-word',
    textAlign: 'left'
}

export default Client;
