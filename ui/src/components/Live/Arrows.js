import React from "react";

import Line from "./Line";

class Arrows extends React.Component {
    constructor(props) {
        super(props)
        this.state = {locations: this.props.locations !== undefined ? this.props.locations : null}
        this.locations = this.props.locations
        this.arrows = [[1, 3], [3, 3], [3, 4], [3, 7], [7, 4], [4, 5], [5, 9], [7, 6], [6, 9], [7, 8], [9, 8], [8, 10], [13, 13], [10, 11], [11, 13], [1, 10], [3, 10], [11, 12], [12, 13]]
    }

    render() {
        return (
            <div style={{width: '100%', height: '100%', position: 'absolute'}}>
                {this.arrows.map((arrow) => (
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
