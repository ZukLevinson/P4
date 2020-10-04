import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

import './formStyle.css';

axios.defaults.withCredentials = true;

class UpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                email_in: '',
                short_name: '',
                team_id: '',
                full_name: '',
                password: '',
                auth: false,
                signed: false,
                msg: '',
                title: '',
                department: ''
            };
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleVerifySubmit = (event) => {
        const userData = this.state;
        axios.post(`http://localhost:8080/api/validate/user`, userData)
            .then(res => {
                if (res.data.userValid) {
                    this.setState({auth: true, msg: '', title: res.data.title, department: res.data.department});
                } else {
                    this.setState({auth: false, msg: 'No user found'});
                }
            })
        event.preventDefault();
    }
    handleSignUpSubmit = (event) => {
        const userData = this.state;
        axios.post(`http://localhost:8080/api/sign-up`, userData)
            .then(res => {
                if (res.data.signed) {
                    localStorage.setItem('fullName', res.data.full_name);
                    this.setState({signed: true, msg: ''});
                } else {
                    this.setState({signed: false, msg: 'Sign up failed'});
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
        if (this.state.auth) {
            return (
                <form onSubmit={this.handleSignUpSubmit} style={formStyle}>
                    {this.renderRedirect()}
                    <div style={inputStyle}>
                        <p>Name</p>
                        <input type="text" onChange={this.handleChange} name="full_name" autoComplete="name"/>
                    </div>
                    <div style={inputStyle}>
                        <p>Password</p>
                        <input type="password" onChange={this.handleChange} name="password"
                               autoComplete="new-password"/>
                    </div>
                    <div style={inputStyle}>
                        <p>Position</p>
                        <div style={rowStyle}>
                            <input type="text" name="title" value={this.state.title} disabled/>
                            <p style={{margin: '0 20px'}}>at</p>
                            <input type="text" name="department" value={this.state.department} disabled/>
                        </div>
                    </div>
                    <div style={errStyle}>
                        <p>{this.state.msg}</p>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            );
        } else {
            return (
                <form onSubmit={this.handleVerifySubmit} style={formStyle}>
                    <div style={inputStyle}>
                        <p>Whats your email?</p>
                        <input type="email" value={this.state.value} onChange={this.handleChange} name="email_in"
                               autoComplete="email"/>
                    </div>
                    <div style={inputStyle}>
                        <p>Whats your employer short name?</p>
                        <input type="text" value={this.state.value} onChange={this.handleChange} name="short_name"/>
                    </div>
                    <div style={inputStyle}>
                        <p>Whats your team id?</p>
                        <input type="text" value={this.state.value} onChange={this.handleChange} name="team_id"/>
                    </div>
                    <div style={errStyle}>
                        <p>{this.state.msg}</p>
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
const errStyle = {
    width: '100%',
    minHeight: '30px',
    color: '#B40A1B',
    textAlign: 'center'
}

export default UpForm;
