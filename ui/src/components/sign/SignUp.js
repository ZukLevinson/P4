import React from 'react';
import UpForm from "./UpForm";

import './formStyle.css';

class SignUp extends React.Component {
    render() {
        return (
            <div style={containerStyle}>
                <div style={titleStyle}>
                    <p>Sign up</p>
                </div>
                {<UpForm auth={authentication()}/>}
            </div>
        );
    }
}
function authentication() {
    console.log('//auth//')
    return false;
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


const titleStyle = {
    fontSize: '50px',
    fontWeight: '900',
}

export default SignUp;
