import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Button extends React.Component {
    render() {
        const {title, icon} = this.props.data;

        return (
            <div style={buttonStyle}>
                <Link to={this.props.link}>
                    <img src={icon} alt={title} style={imgStyle}/>
                    <p>{title}</p>
                </Link>
            </div>
        );
    }
}

const buttonStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    color: 'black',
    width: '10%',
    overflow: 'hidden',
    textAlign: 'center',
    height: 'inherit',
    margin: '0',
    '&:hover': {
        filter: 'invert(50%)',
        transition: '0.25s ease-in-out',
        cursor: 'pointer'
    }
}

const imgStyle = {
    width: '30%',
    marginBottom: '7px',
    pointerEvents: 'none',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
}

export default Button;
