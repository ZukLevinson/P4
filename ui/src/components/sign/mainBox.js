import React from 'react';

class MainBox extends React.Component {
    render() {
        return (
            <div style={mainStyle}>
                <div style={boxStyle}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

const mainStyle = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Heebo, serif'
}
const boxStyle = {
    width: '60vw',
    height: '60vh',
    boxShadow: '0 0 40px rgba(46, 46, 46, 0.11)',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'stretch'
}

export default MainBox;
