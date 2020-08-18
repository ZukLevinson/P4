import React from 'react';

import './formStyle.css';

class UpForm extends React.Component {
    render() {
        if (this.props.auth) {
            return (
                <form action="/api/users/sign-up" method="post" id="2" style={formStyle}>
                    <div style={inputStyle}>
                        <p>Name</p>
                        <input type="text" name="full_name" autoComplete="email"/>
                    </div>
                    <div style={inputStyle}>
                        <p>Phone</p>
                        <input type="text" name="short_name"/>
                    </div>
                    <div style={inputStyle}>
                        <p>Position</p>
                        <div style={rowStyle}>
                            <input type="text" name="title" value="Team Manager" disabled/>
                            <p style={{margin: '0 20px'}}>at</p>
                            <input type="text" name="department" value="Cyber Security" disabled/>
                        </div>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            );
        } else {
            return (
                <form action="/api/validate/user" method="post" id="1" style={formStyle}>
                    <div style={inputStyle}>
                        <p>Whats your email?</p>
                        <input type="email" name="email_in" autoComplete="email"/>
                    </div>
                    <div style={inputStyle}>
                        <p>Whats your employer short name?</p>
                        <input type="text" name="short_name"/>
                    </div>
                    <div style={inputStyle}>
                        <p>Whats your team id?</p>
                        <input type="text" name="team_id"/>
                    </div>
                    <input type="submit" value="Next"/>
                </form>
            );
        }
    }
}

const formStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}
const inputStyle = {
    width: '100%'
}
const rowStyle = {
    display: 'flex',
    flexDirection: 'row'
}

export default UpForm;
