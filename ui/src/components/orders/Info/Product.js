import React from 'react';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }

    render() {
        return (
            <div style={containerStyle}>
                <p>{this.props.title}</p>
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
    wordWrap: 'break-word',
    minWidth:'20%',
    margin:'10px'
}

export default Product;
