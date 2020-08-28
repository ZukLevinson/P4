import React from 'react';

import Product from "./Product";

class OrderInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: this.props.products,
            x: 0
        }
    }

    upHandler = () => {
        if (this.state.x + 5 < this.state.products.length) {
            this.setState({x: this.state.x + 1})
        } else {
            this.setState({x: 0})
        }
    }

    render() {
        let x = this.state.x
        return (
            <div style={containerStyle}>
                {this.state.products.slice(x, x + 5).map(products => (
                    <Product data={products} title={x}/>
                ))}
                <div id="nextButton" style={btnStyle} onClick={this.upHandler}>
                    <p>Next...</p>
                </div>
            </div>
        );
    }
}

const containerStyle = {
    wordWrap: 'break-word',
    height: '100%',
    textAlign: 'left',
    overflow: 'hidden',
    // maxWidth:'300px',
    width: '100%',
    justifyContent: 'space-around',
    display: 'flex',
    flexWrap: 'wrap',
    flexBasis: '33.333333%'
}
const btnStyle={
    display: 'flex',
    flexDirection: 'column',
    borderRadius:'10px',
    padding: '5px',
    boxShadow: '0 0 10px rgba(46, 46, 46, 0.20)',
    textAlign: 'center',
    wordWrap: 'break-word',
    minWidth:'20%',
    margin:'10px'
}

export default OrderInfo;
