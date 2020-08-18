import React from 'react';
import {Link} from "react-router-dom";

import './formStyle.css';

class SignIn extends React.Component {
    render() {
        return (
            <div style={containerStyle}>
                <div style={titleStyle}>
                    <p>Sign in</p>
                </div>
                <form action="/api/users/sign-in" method="post" style={formStyle}>
                    <div style={inputStyle}>
                        <p>Email:</p>
                        <input type="email" name="email_in" autoComplete="username"/>
                    </div>
                    <div style={inputStyle}>
                        <p>Password:</p>
                        <input type="password" name="password_in" autoComplete="current-password"/>
                    </div>
                    <input type="submit" value="Log in"/>
                    <Link to="/sign-up">
                        <p>Need to sign up? Click here!</p>
                    </Link>
                </form>
            </div>
        );
    }
}

const containerStyle = {
    width: '60%',
    alignSelf: 'center',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}
const formStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}

const titleStyle = {
    fontSize: '50px',
    fontWeight: '900',
}

const inputStyle = {
    width: '100%'
}

export default SignIn;
