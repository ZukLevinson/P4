import React from "react";

class Line extends React.Component {
    constructor(props) {
        super(props)
        this.state = {x1: this.props.x1, x2: this.props.x2, y1: this.props.y1, y2: this.props.y2}

        this.slope = (this.state.y2 - this.state.y1) / (this.state.x2 - this.state.x1)
        if (this.state.x1 > this.state.x2) {
            if (this.state.y1 > this.state.y2) {
                this.mini = {
                    x1: (this.state.x1 + this.state.x2) / 2,
                    x2: ((this.state.x1 + this.state.x2) / 2) + (70 / Math.sqrt(Math.pow(this.slope, 2) + 1)),
                    y1: (this.state.y1 + this.state.y2) / 2,
                    y2: ((this.state.y1 + this.state.y2) / 2) + (this.slope * 70 / Math.sqrt(Math.pow(this.slope, 2) + 1))
                }
            } else {
                this.mini = {
                    x1: (this.state.x1 + this.state.x2) / 2,
                    x2: ((this.state.x1 + this.state.x2) / 2) + (70 / Math.sqrt(Math.pow(this.slope, 2) + 1)),
                    y1: (this.state.y1 + this.state.y2) / 2,
                    y2: ((this.state.y1 + this.state.y2) / 2) + (this.slope * 70 / Math.sqrt(Math.pow(this.slope, 2) + 1))
                }
            }
        } else {
            if (this.state.x1 < this.state.x2) {
                if (this.state.y1 > this.state.y2) {
                    this.mini = {
                        x1: (this.state.x1 + this.state.x2) / 2,
                        x2: ((this.state.x1 + this.state.x2) / 2) - (70 / Math.sqrt(Math.pow(this.slope, 2) + 1)),
                        y1: (this.state.y1 + this.state.y2) / 2,
                        y2: ((this.state.y1 + this.state.y2) / 2) - (this.slope * 70 / Math.sqrt(Math.pow(this.slope, 2) + 1))
                    }
                } else {
                    this.mini = {
                        x1: (this.state.x1 + this.state.x2) / 2,
                        x2: ((this.state.x1 + this.state.x2) / 2) - (70 / Math.sqrt(Math.pow(this.slope, 2) + 1)),
                        y1: (this.state.y1 + this.state.y2) / 2,
                        y2: ((this.state.y1 + this.state.y2) / 2) - (this.slope * 70 / Math.sqrt(Math.pow(this.slope, 2) + 1))
                    }
                }
            } else {
                this.mini = {
                    x1: (this.state.x1 + this.state.x2) / 2,
                    x2: (this.state.x1 + this.state.x2) / 2,
                    y1: (this.state.y1 + this.state.y2) / 2,
                    y2: (this.state.y1 + this.state.y2) / 2
                }
            }
        }
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextState !== this.state;
    }

    render() {
        return (
            <svg style={{position: 'absolute', width: '100%', height: '100%'}} id={this.props.line}>
                <line x1={this.state.x1 + 'px'} y1={this.state.y1 + 'px'} x2={this.state.x2 + 'px'}
                      y2={this.state.y2 + 'px'}
                      style={{stroke: 'rgb(61,61,61)', strokeWidth: '1px'}}/>
                <line x1={this.mini.x1} y1={this.mini.y1} x2={this.mini.x2} y2={this.mini.y2}
                      style={{stroke: 'rgb(0,0,0)', strokeWidth: '2px'}}/>
                <circle cx={this.mini.x1 + 'px'} cy={this.mini.y1 + 'px'} r={'3px'} fill={'rgb(0,0,0)'}/>
            </svg>
        )
    }
}

export default Line;
