import React from "react";

import Line from "./Line";

class Arrows extends React.Component {
    constructor(props) {
        super(props)
        this.state = {locations: this.props.locations !== undefined ? this.props.locations : null}
        this.locations = this.props.locations
        this.arrows = [[1,3],[3,3],[3,4],[3,7],[7,4],[4,5],[5,9],[7,6],[6,9],[7,8],[9,8],[8,10],[13,13],[10,11],[11,13],[1,10]]
console.log(this.locations)
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    render() {
        return (
            <div style={{width: '100%', height: '100%', position: 'absolute'}}>
                {this.arrows.map((arrow) => (
                    <Line key={arrow.toString()} line={arrow.toString()}
                          x1={this.state.locations["'"+arrow[0]+"'"]['left']+this.state.locations["'"+arrow[0]+"'"]['width']/6}
                          x2={this.state.locations["'"+arrow[1]+"'"]['left']+this.state.locations["'"+arrow[1]+"'"]['width']/6}
                          y1={this.state.locations["'"+arrow[0]+"'"]['top']}
                          y2={this.state.locations["'"+arrow[1]+"'"]['top']}/>
                ))}
            </div>
        )
    }
}

export default Arrows;
