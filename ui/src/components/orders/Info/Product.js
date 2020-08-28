import React from 'react';
import axios from "axios";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            isLoaded: false,
            products_info: null,
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.data !== this.props.data) this.setState({data: this.props.data})
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/user/products', {
            params: {
                id: this.state.data.id
            }
        }).then(res => this.setState({
            ...this.state,
            isLoaded: true,
            products_info: res.data.result
        }))
    }

    render() {
        const product = this.state.data
        console.log(this.state.products_info)
        return (
            <div style={containerStyle}>
                <p id="title">{product.id}</p>
            </div>
        );
    }
}

const containerStyle={
    display: 'flex',
    flexDirection: 'column',
    borderRadius:'10px',
    padding: '5px',
    boxShadow: '0 0 10px rgba(46, 46, 46, 0.20)',
    textAlign: 'center',
    margin:'10px',
    flexBasis: '20%',
    overflow:'hidden'
}

export default Product;
