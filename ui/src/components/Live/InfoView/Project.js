import React from "react";

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id
        }
    }

    containerStyle = {
        display:'inline-block',
        width:'10%',
        margin:'10px',
        borderRadius:'10px',
        boxShadow: '0 0 20px rgba(46, 46, 46, 0.11)',
    }
    titleStyle = {
        fontWeight:'600',
        textAlign:'center'
    }

    render() {
        return (
            <div style={this.containerStyle}>
                <div style={this.titleStyle}>
                    {this.state.id}
                </div>
                    <div style={{color:'green', textAlign:'center'}}>
                        On Time
                    </div>
            </div>
        )
    }
}

export default Project;
