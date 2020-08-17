import React from 'react';

class Button extends React.Component {
    render() {
        const {title, icon} = this.props.data;

        return (
            <div style={buttonStyle}>
                <img src={icon} alt={title} style={imgStyle}/>
                <a>{title}</a>
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
