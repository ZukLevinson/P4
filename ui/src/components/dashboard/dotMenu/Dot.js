import React from 'react';

class Dot extends React.Component {
    render() {
        return (
            <div style={btnStyle} className="dot_button">
                <div style={dotStyle} className="dot"/>
            </div>
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
