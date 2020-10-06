import React from "react";

import Bubble from "./Bubble";

class LiveView extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    boxStyle={
        width:'100%',
        height:'100%',
        display:'flex'
    }

    render() {
        return (
            <div style={this.boxStyle}>
                <Bubble/>
                <Bubble/>
            </div>
        )
    }
}

export default LiveView;
