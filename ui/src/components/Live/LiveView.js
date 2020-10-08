import React from "react";

import Bubble from "./Bubble";
import Arrows from "./Arrows";

class LiveView extends React.Component {
    constructor() {
        super()
        this.state = {
            x: 0,
            y: 0
        };
        this.selector = React.createRef();

        this.flag = false;

        this.bubblesArray = [['1', '0', '3', '4', '5', '6'], ['7', '8', '9'], ['10', '11', '12', '13']];
        this.locations = {}
    }

    boxStyle = {
        width: '100%',
        height: '93%', position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    };
    containerStyle = {
        position: 'absolute',
        display: 'flex',
        flexWrap: 'wrap',
        width: '90vw',
        justifyContent: 'space-evenly'
    };

    componentDidMount = () => {
        const rect = this.selector.current.getBoundingClientRect();
        const bubbles = document.getElementById('bubbles')
        this.setState({element: rect})
        this.setState({bubbles: [bubbles.offsetWidth, bubbles.offsetHeight]})
        this.launchArrows().then()
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const element = this.state.element;
        const bubbles = this.state.bubbles;

        this.containerStyle = {
            position: 'absolute',
            display: 'flex',
            left: `calc(${element.width / 2}px - ${bubbles[0] / 2}px - ${this.state.x}px)`,
            top: `calc(${element.height / 2}px - ${bubbles[1] / 2}px - ${this.state.y}px)`,
            flexWrap: 'wrap',
            width: '90vw',
            justifyContent: 'space-evenly'
        };
    };

    handleMovement = (e) => {
        const element = this.state.element;
        if (Math.abs(this.state.x - ((element.width / 2 - (element.right - e.clientX)) / 50)) >= 1 || Math.abs(this.state.y - ((element.height / 2 - (element.bottom - e.clientY)) / 50)) >= 1) {
            this.setState({
                x: (element.width / 2 - (element.right - e.clientX)) / 50,
                y: (element.height / 2 - (element.bottom - e.clientY)) / 50
            });
        }
    };
    handleLeave = () => {
        this.setState({x: 0, y: 0});
        this.containerStyle = {
            position: 'absolute',
            display: 'flex',
            margin: 'auto',
            marginLeft: `auto`,
            marginTop: `auto`,
            flexWrap: 'wrap',
            width: '90vw',
            justifyContent: 'space-evenly'
        };
    };
    updateLocation = (id, position) => {
        this.locations["'"+id+"'"] = position
    }

    launchArrows = async () => {
        if (this.locations !== null) return this.flag = true
    }

    render() {
        return (
            <div style={this.boxStyle} ref={this.selector} onMouseMove={this.handleMovement.bind(this)}
                 onMouseLeave={this.handleLeave.bind(this)}>
                <div id={'bubbles'} style={this.containerStyle}>
                    {this.flag ? <Arrows locations={this.locations}/> : null}
                    {this.bubblesArray.map((bubbles) => (
                            <div key={this.bubblesArray.indexOf(bubbles)} style={{display: "flex", maxWidth: '100%'}}>
                                {bubbles.map((bubble) => (
                                        <Bubble key={bubble} keyReact={bubble} data={this.updateLocation}/>
                                    )
                                )}
                            </div>
                        )
                    )}
                </div>
            </div>
        )
    }
}

export default LiveView;
