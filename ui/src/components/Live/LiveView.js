import React from "react";

import Bubble from "./Bubble";

class LiveView extends React.Component {
    constructor() {
        super()
        this.state = {
            x: 0,
            y: 0
        }

        this.selector = React.createRef();
        this.selector1 = React.createRef()
    }

    boxStyle = {
        width: '100%',
        height: '100%', position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    containerStyle = {
        position: 'absolute',
        display: 'flex'
    }

    componentDidMount = () => {
        const rect = this.selector.current.getBoundingClientRect();
        const bubbles = document.getElementById('bubbles')
        this.setState({element: rect})
        this.setState({bubbles: [bubbles.offsetWidth, bubbles.offsetHeight]})
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const element = this.state.element
        const bubbles = this.state.bubbles

        this.containerStyle = {
            position: 'absolute',
            display: 'flex',
            left: `calc(${element.width / 2}px - ${bubbles[0] / 2}px - ${this.state.x}px)`,
            top: `calc(${element.height / 2}px - ${bubbles[1] / 2}px - ${this.state.y}px)`,
        }
    }

    handleMovement = (e) => {
        const element = this.state.element
        this.setState({
            x: (element.width / 2 - (element.right - e.clientX)) / 10,
            y: (element.height / 2 - (element.bottom - e.clientY)) / 10
        })
    }

    handleLeave = () => {
        this.setState({x: 0, y: 0})
        this.containerStyle = {
            position: 'absolute',
            display: 'flex',
            margin: 'auto',
            marginLeft: `auto`,
            marginTop: `auto`
        }
    }

    render() {
        return (
            <div style={this.boxStyle} ref={this.selector} onMouseMove={this.handleMovement.bind(this)}
                 onMouseLeave={this.handleLeave.bind(this)}>
                <div id={'bubbles'} style={this.containerStyle}>
                    <Bubble/>
                    <Bubble/>
                </div>
            </div>
        )
    }
}

export default LiveView;
