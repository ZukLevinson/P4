import React from 'react';

class HorizontalLine extends React.Component {
    render() {
        return (
            <div style={lineStyle}/>
        );
    }
}

const lineStyle = {
    height: '1px',
    width: '100%',
    background: '#2E2E2E',
    margin: '10px auto'
}

export default HorizontalLine;
