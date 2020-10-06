import React from 'react';

import Greeting from "./Greeting";
import Clock from "./Clock";
import Button from "./Button";
import Indicator from "./Indicator";

class Menu extends React.Component {
    state = {
        buttons: [{id: '1', title: 'live'}, {id: '2', title: 'love'}, {id: '3', title: 'unite'}, {
            id: '4',
            title: 'forever'
        }],
        clicked: {id: '1', title: 'live'},
        location: this.props.location
    }
    handleClick = (clicked) => {
        if (this.state.clicked !== clicked.title) this.setState({clicked});
    }

    componentDidMount() {
        this.state.buttons.map(button => {
            if (('/' + button.title) === this.state.location) {
                this.setState({clicked: {id: button.id, title: button.title}})
            }
        })
    }

    render() {
        return (
            <div style={containerStyle}>
                <div style={menuStyle}>
                    <div style={{margin: '10px', flex: '1', display: 'flex'}}>
                        <div style={sideStyle}>
                            <Clock/>
                            {}
                            <Greeting/>
                        </div>
                        <div style={centerStyle}>
                            {this.state.buttons.map((button) => (
                                <Button key={button.id} button={button}
                                        current={this.state.clicked.title === button.title}
                                        clicked={this.handleClick}/>
                            ))}
                            <Indicator size={this.state.buttons.length} current={this.state.clicked.id}/>
                        </div>
                        <div style={sideStyle}>
                            <img alt='Company Logo' src={process.env.PUBLIC_URL + '/images/logo-generic.png'}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const containerStyle = {
    bottom: '0',
    width: '100vw',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center'
}

const menuStyle = {
    boxShadow: '0 0 40px rgba(46, 46, 46, 0.11)',
    background: '#F3F3F3',
    fontFamily: "'Assistant', sans-serif",
    margin: '3vh 6vw',
    minWidth: '60vw',
    maxWidth: '88vw',
    height: '7vh',
    borderRadius: '10px',
    display: 'flex',
    userSelect: 'none'
}

const sideStyle = {
    flex: '1', padding: '3px', textAlign: 'center'
}
const centerStyle = {
    flex: '1',
    flexGrow: '2.5',
    borderLeft: '1px solid grey',
    borderRight: '1px solid grey',
    padding: '3px',
    display: 'flex',
    justifyContent: 'space-around',
    position: 'relative'
}

export default Menu;
