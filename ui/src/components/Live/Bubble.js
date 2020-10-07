import React from "react";

class Bubble extends React.Component {
    constructor() {
        super()
        this.state = {
            title: 'פרזול',
            x: 0,
            y: 0
        }
        this.selector = React.createRef();
    }

    bubbleStyle = {
        width: '50%',
        height: '50%',
        background: '#F3F3F3',
        borderRadius: '5vw',
        boxShadow: '0 0 40px rgba(46, 46, 46, 0.22)',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer'
    }
    titleStyle = {
        margin: 'auto',
        textAlign: 'center'
    }

    render() {
        return (
            <div ref={this.selector} id={'container'}
                 style={{width: '15vw', height: '15vw', display: 'flex', position: 'relative'}}>
                <div style={this.bubbleStyle}>
                    <div style={this.titleStyle}>
                        {this.state.title}
                    </div>
                </div>
            </div>
        )
    }
}

export default Bubble;
