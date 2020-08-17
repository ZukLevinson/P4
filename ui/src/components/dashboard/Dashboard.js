import React from 'react';

class Dashboard extends React.Component {
    render() {
        return (
            <div style={dashStyle}>

            </div>
        );
    }
}

const dashStyle = {
    height: '90vh',
    width: '100vw',
    overflowX: 'hidden',
    whiteSpace: 'nowrap',
    background: '#FBFBFB',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start'
}

export default Dashboard;
