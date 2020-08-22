import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';

class Dot extends React.Component {
    state = {
        hovered: false,
        clicked: false
    }
    handleMouseOver = (title) => {
        this.props.hovered(title);
        this.setState({hovered: title !== ''});
    };

    handleClick = (title) => {
        this.props.current(title);
    }

    dotStyle = () => {
        if (this.state.hovered) {
            return {
                width: '6px',
                height: '6px',
                borderRadius: '3px',
                background: '#2E2E2E',
                marginLeft: 'auto',
                marginRight: 'auto',
                transition: '0.1s ease-in-out'
            }


        } else {
            if (this.props.clicked) {
                return {
                    width: '9px',
                    height: '9px',
                    borderRadius: '4px',
                    background: '#2E2E2E',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    transition: '0.1s ease-in-out'
                }

            } else {
                return {
                    width: '6px',
                    height: '6px',
                    borderRadius: '3px',
                    background: '#2E2E2E',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    transition: '0.1s ease-in-out'
                }
            }
        }

    }

    render() {
        return (
            <Link to={`/dashboard#${this.props.cluster}`} className="dot_button" style={btnStyle}>
                <div onMouseEnter={() => this.handleMouseOver(this.props.title)}
                     onMouseLeave={() => this.handleMouseOver('')}
                     onClick={() => this.handleClick(this.props.title)}
                     style={btnStyle}>
                    <div style={this.dotStyle()} className="dot"/>
                </div>
            </Link>

        );
    }
}

const btnStyle = {
    height: 'inherit',
    width: '100%',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center'
}

export default Dot;
