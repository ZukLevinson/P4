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
        if (this.state.x + 9 < this.state.products.length) {
            this.setState({x: this.state.x + 1})
        } else {
            this.setState({x: 0})
        }
        console.log(this.state.x)
    }

    render() {
        let x = this.state.x

        return (
            <div style={containerStyle}>
                {this.state.products.slice(x, x + 9).map(product => (
                    <Product key={product.id} data={product}/>
                ))}
                {this.state.products.length > 9 ? <div id="nextButton" style={btnStyle} onClick={this.upHandler}>
                    <p>Next...</p>
                </div> : null}
            </div>
        );
    }
}

const containerStyle = {
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'wrap',
    flex: '1'
}
const btnStyle = {
    display: 'flex',
    flexDirection: 'column',
    borderRadius:'10px',
    padding: '5px',
    boxShadow: '0 0 10px rgba(46, 46, 46, 0.20)',
    textAlign: 'center',
    margin:'10px',
    flex:'0 0 14%',
    overflow:'hidden'
}

export default OrderInfo;
