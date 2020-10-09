import React from "react";

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }

    containerStyle = {
        display:'inline-block',
        width:'20%',
        margin:'10px',
        borderRadius:'10px',
        boxShadow: '0 0 10px rgba(46, 46, 46, 0.07)',
    }
    titleStyle = {
        fontWeight:'600',
        textAlign:'center'
    }
    employeesStyle = {}
    employeeStyle = {
        display:'inline-block',
        margin:'5px'
    }

    render() {
        return (
            <div style={this.containerStyle}>
                <div style={this.titleStyle}>
                    {this.state.data.name}
                </div>
                <div style={this.employeesStyle}>
                    {this.state.data.employees.map((employee) => (
                        <div key={employee} style={this.employeeStyle}>
                            {employee}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Team;
