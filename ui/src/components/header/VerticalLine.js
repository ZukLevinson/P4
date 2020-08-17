import React from 'react';

class VerticalLine extends React.Component {
    render() {
        return (
            <div style={lineStyle}/>
        );
    }
}

const lineStyle = {
    height: '50%',
    width: '1px',
    background: 'rgb(213, 213, 213)'
}

export default VerticalLine;
