import React from 'react';

class Company extends React.Component {
    render() {
        const {name, icon} = this.props.data;

        return (
            <div style={containerStyle}>
                <img src={icon} alt={name} style={{width: '100%'}}/>
            </div>
        );
    }
}

const containerStyle = {
    margin: '10px 30px',
    width: '100%'
}
export default Company;
