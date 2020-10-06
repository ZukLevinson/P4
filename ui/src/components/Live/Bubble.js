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

    componentDidMount = () => {
        const rect = this.selector.current.getBoundingClientRect();
        this.setState({element: rect})
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const element = this.state.element
        this.bubbleStyle = {
            width: '50%',
            height: '50%',
            background: '#F3F3F3',
            borderRadius: '5vw',
            boxShadow: '0 0 40px rgba(46, 46, 46, 0.22)',
            left: `calc(${element.width / 2}px - 33% - ${this.state.x}px)`,
            top: `calc(${element.height / 2}px - 33% - ${this.state.y}px)`,
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer',
            position: 'absolute'
        }
    }

    handleMovement = (e) => {
        const element = this.state.element
        this.setState({
            x: (element.width / 2 - (element.right - e.clientX))/10,
            y: (element.height / 2 - (element.bottom - e.clientY))/10
        })
    }

    handleLeave = () => {
        this.setState({x: 0, y: 0})
        this.bubbleStyle = {
            width: '50%',
            height: '50%',
            borderRadius: '5vw',
            boxShadow: '0 0 40px rgba(46, 46, 46, 0.22)',
            margin: 'auto',
            marginLeft: `auto`,
            marginTop: `auto`,
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer',
            transition: '1s'
        }
    }

    render() {
        return (
            <div ref={this.selector} id={'container'}
                 style={{width: '15vw', height: '15vw', display: 'flex', position: 'relative'}}
                 onMouseMove={this.handleMovement.bind(this)} onMouseLeave={this.handleLeave.bind(this)}>
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
