import React from "react";

import Line from "./Line";

class Arrows extends React.Component {
    constructor(props) {
        super(props)
        this.state = {locations: this.props.locations, arrows: this.props.arrows}
    }

    render() {
        return (
            <div style={{width: '100%', height: '100%', position: 'absolute'}}>
                {this.state.arrows.map((arrow) => (
                    <Line key={arrow.toString()} line={arrow.toString()}
                          x1={this.state.locations["'" + arrow[0] + "'"]['left'] + this.state.locations["'" + arrow[0] + "'"]['width'] / 6}
                          x2={this.state.locations["'" + arrow[1] + "'"]['left'] + this.state.locations["'" + arrow[1] + "'"]['width'] / 6}
                          y1={this.state.locations["'" + arrow[0] + "'"]['top'] + this.state.locations["'" + arrow[0] + "'"]['height'] / 2}
                          y2={this.state.locations["'" + arrow[1] + "'"]['top'] + this.state.locations["'" + arrow[1] + "'"]['height'] / 2}/>
                ))}
            </div>
        )
    }
}

export default Arrows;
