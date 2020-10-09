import React from "react";
import axios from "axios";

import Cluster from "./Cluster";
import Slider from "./Slider";

class LiveView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scale: 1,
            bubblesArray: []
        }
        this.loaded = false;


    }

    componentDidMount() {
        axios.get('/api/bubbles_gen').then((response) => {
            this.loaded = true;
            this.setState({bubblesArray: response.data.bubbles,arrowArray:response.data.arrows});
        }).catch(err => console.log(err))
    }

    zoomIn = () => {
        if (this.state.scale < 1)
            this.setState({scale: this.state.scale + 0.1});
    }

    zoomOut = () => {
        if (this.state.scale > 0.3)
            this.setState({scale: this.state.scale - 0.1});
    }

    sideBarStyle = {
        position: 'absolute',
        zIndex: '1000',
        right: '20px',
        width: '40px',
        height: '300px',
        background: 'rgb(243, 243, 243)',
        top: '0',
        bottom: '0',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '20px',
        boxShadow: '0 0 40px rgba(46, 46, 46, 0.11)',
        userSelect: 'none'
    }
    btnStyle = {
        height: '20px',
        margin: '13px',
        cursor: 'pointer'
    }

    render() {
        return (
            <div style={{width: '100%', height: '100%', overflow: 'hidden'}}>
                <div style={this.sideBarStyle}>
                    <div style={this.btnStyle} onClick={this.zoomIn}>
                        <svg viewBox={"0 0 40 40"}>
                            <polygon points="42,20 22,20 22,0 20,0 20,20 0,20 0,22 20,22 20,42 22,42 22,22 42,22 "/>
                        </svg>
                    </div>
                    <div id={'scroller'} style={{flex: '1'}}>
                        <Slider scale={this.state.scale} in={this.zoomIn.bind(this)} out={this.zoomOut}/>
                    </div>
                    <div style={this.btnStyle} onClick={this.zoomOut}>
                        <svg viewBox={"0 0 40 40"}>
                            <rect y="20" width="42" height="2"/>
                        </svg>
                    </div>
                </div>
                <div style={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    transform: `scale(${this.state.scale})`
                }}>
                    {this.loaded ? <Cluster bubbles={this.state.bubblesArray} arrows={this.state.arrowArray} scale={this.state.scale}/> : null}
                </div>
            </div>

        );
    }
}

export default LiveView;
