import React from "react";

import Arrows from "./Arrows";
import Info from "./InfoView/Info.js";
import Bubbles from "./Bubbles";

class Cluster extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            x: 0,
            y: 0,
            view: this.props.scale >= 0.8
        };
        this.selector = React.createRef();

        this.flag = false;
        this.clickedId = null;

        this.bubblesArray = [['1', '0', '3', '4', '5', '6'], ['7', '8', '9'], ['10', '11', '12', '13']];
        this.bubblesArray = this.props.bubbles;
        this.arrows = this.props.arrows;
        this.locations = {}
    }

    boxStyle = {
        width: '100%',
        height: '93%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        transition: '1s'
    };
    containerStyle = {
        position: 'absolute',
        display: 'flex',
        flexWrap: 'wrap',
        width: '90vw',
        height: '100%',
        justifyContent: 'space-evenly',
        flexDirection: 'column'
    };

    componentDidMount = () => {
        const rect = this.selector.current.getBoundingClientRect();
        const bubbles = document.getElementById('bubbles')
        this.setState({element: rect})
        this.setState({bubbles: [bubbles.offsetWidth, bubbles.offsetHeight]})
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const element = this.state.element;
        const bubbles = this.state.bubbles;

        this.containerStyle = {
            position: 'absolute',
            display: 'flex',
            height: '100%',
            left: `calc(${element.width / 2}px - ${bubbles[0] / 2}px - ${this.state.x}px)`,
            top: `calc(${element.height / 2}px - ${bubbles[1] / 2}px - ${this.state.y}px)`,
            flexWrap: 'wrap',
            width: '90vw',
            justifyContent: 'space-evenly',
            flexDirection: 'column'
        };

        if (this.props.scale < 0.8 && prevState.view === true) this.setState({view: false})
        if (this.props.scale >= 0.8 && prevState.view === false) this.setState({view: true})
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
            height: '100%',
            justifyContent: 'space-evenly',
            flexDirection: 'column'
        };
    };

    updateLocation = (id, position) => {
        if (this.locations["'" + id + "'"] === undefined)
            this.locations["'" + id + "'"] = position
    };
    bubbleClicked = (id) => {
        if (this.clickedId === null || this.clickedId !== id) {
            this.clickedId = id;
        } else {
            this.clickedId = null;
        }
        this.forceUpdate();
    };

    complete = () => {
        this.flag = true;
        this.setState({locations: this.locations, arrows: this.arrows})
    }

    render() {
        if (this.props.scale > 0.5) {
            return (
                <div style={this.boxStyle} ref={this.selector} onMouseMove={this.handleMovement.bind(this)}
                     onMouseLeave={this.handleLeave}>
                    <div id={'bubbles'} style={this.containerStyle} onClick={this.handleClick}>
                        {this.state.view && this.clickedId === null ?
                            <div style={{
                                position: 'absolute',
                                bottom: '50px',
                                left: '0',
                                color: 'rgba(128,128,128,0.95)'
                            }}>
                                Cluster View: Floor
                            </div> : null}
                        {this.flag && this.clickedId === null ?
                            <Arrows locations={this.state.locations} arrows={this.state.arrows}/> : null}
                        {this.clickedId === null ? <Bubbles bubbles={this.bubblesArray} complete={this.complete}
                                                            clicked={this.bubbleClicked}
                                                            clickedId={this.clickedId}
                                                            view={this.state.view}
                                                            data={this.updateLocation}
                                                            adapt={false}/> : null}
                        {this.clickedId !== null ?
                            <Info keyId={this.clickedId} data={this.updateLocation} locations={this.locations}
                                  clicked={this.bubbleClicked}/> : null}
                    </div>
                </div>
            )
        } else {
            return (
                <div style={{
                    fontSize: '100px', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', height: '100%'
                }} ref={this.selector} onMouseMove={this.handleMovement.bind(this)}
                     onMouseLeave={this.handleLeave}>
                    <div>
                        FLOOR
                    </div>
                </div>
            )
        }
    }
}

export default Cluster;
