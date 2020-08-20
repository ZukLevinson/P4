import React from 'react';
import {Link, Redirect} from "react-router-dom";

import './formStyle.css';
import axios from "axios";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                email_in: '',
                password: '',
                signed: false,
                msg:''
            };
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSignInSubmit = (event) => {
        const userData = this.state;
        axios.post(`http://localhost:8080/api/sign-in`, userData)
            .then(res => {
                if (res.data.userValid) {
                    localStorage.setItem('fullName', res.data.full_name)
                    this.setState({signed: true, msg: ''});
                } else {
                    this.setState({signed: false, msg: res.data.msg});
                }
            })
        event.preventDefault();
    }

    renderRedirect() {
        if (this.state.signed) {
            return <Redirect to='/dashboard#cluster0'/>
        }
    }
    render() {
        return (
            <div style={containerStyle}>
                {this.renderRedirect()}
                <div style={titleStyle}>
                    <p>Sign in</p>
                </div>
                <form onSubmit={this.handleSignInSubmit} style={formStyle}>
                    <div style={inputStyle}>
                        <p>Email:</p>
                        <input type="email" onChange={this.handleChange} name="email_in" autoComplete="username"/>
                    </div>
                    <div style={inputStyle}>
                        <p>Password:</p>
                        <input type="password" onChange={this.handleChange} name="password" autoComplete="current-password"/>
                    </div>
                    <div style={errStyle}>
                        <p>{this.state.msg}</p>
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
const errStyle = {
    width: '100%',
    minHeight: '30px',
    color: '#B40A1B',
    textAlign: 'center'
}
export default SignIn;
