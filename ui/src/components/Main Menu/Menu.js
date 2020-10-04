import React from 'react';

import Greeting from "./Greeting";
import Clock from "./Clock";

function Menu() {
    return (
        <div style={containerStyle}>
            <div style={menuStyle}>
                <div style={{margin: '10px', flex: '1', display: 'flex'}}>
                    <div style={sideStyle}>
                        <Clock/>
                        <Greeting/>
                    </div>
                    <div style={centerStyle}>

                    </div>
                    <div style={sideStyle}>
                        <img src={require('')}/>
                    </div>
                </div>
            </div>
        </div>
    );
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
    display: 'flex'
}

const sideStyle = {
    flex: '1', padding:'3px', textAlign:'center'
}
const centerStyle = {
    flex: '1',flexGrow:'2.5',borderLeft:'1px solid grey',borderRight:'1px solid grey', padding:'3px'
}

export default Menu;
