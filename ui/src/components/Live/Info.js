import React from "react";

class Info extends React.Component {
    constructor(props) {
        super(props);
    }

    bgStyle = {
        width: '100vw',
        height: '100vh',
        background: 'rgba(249,249,249,1)',
        position: 'absolute'
    }

    render() {
        return (
            <div style={this.bgStyle}>
            </div>
        );
    }
}

export default Info;
