import React from 'react';
import {BrowserRouter as Link} from "react-router-dom";

class Button extends React.Component {
    render() {
        const {title, icon, hash} = this.props.data;

        // if (window.location.pathname !== this.props.link) {
            return (
                <Link to={this.props.link + hash}>
                    <div style={btnStyle} className="button">
                        <img src={icon} alt={title} style={imgStyle}/>
                        <p>{title}</p>
                    </div>
                </Link>
            );
        // } else {
        //     return (
        //         <Link to={this.props.link + hash}>
        //             <div style={btnPrsdStyle} className="button">
        //                 <img src={icon} alt={title} style={imgStyle}/>
        //                 <p>{title}</p>
        //             </div>
        //         </Link>
        //
        //     );
        // }
    }
}

const btnStyle = {
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
const btnPrsdStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    color: 'Red',
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
