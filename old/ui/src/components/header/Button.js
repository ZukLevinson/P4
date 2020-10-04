import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";

class Button extends React.Component {
    render() {
        const {title, icon, hash} = this.props.data;
        return (
            <Link to={this.props.link + hash}>
                <div style={btnStyle} className="button">
                    <img src={icon} alt={title} style={imgStyle}/>
                    <p>{title}</p>
                </div>
            </Link>
        );
    }
}

const btnStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    color: 'black',
    width: '60%',
    overflow: 'hidden',
    textAlign: 'center',
    height: 'inherit',
    margin: 'auto',
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
