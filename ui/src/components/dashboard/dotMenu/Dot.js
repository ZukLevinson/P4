import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';

class Dot extends React.Component {
    render() {
        return (
            <Link to={`/dashboard#${this.props.cluster}`} style={btnStyle} className="dot_button">
                <div style={dotStyle} className="dot"/>
            </Link>
        );
    }
}

const btnStyle = {
    height: 'inherit',
    width: '100%',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center'
}

const dotStyle = {
    width: '6px',
    height: '6px',
    borderRadius: '3px',
    background: '#2E2E2E',
    marginLeft: 'auto',
    marginRight: 'auto'
}
export default Dot;
