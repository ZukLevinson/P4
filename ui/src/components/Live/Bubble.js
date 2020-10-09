import React from "react";

class Bubble extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'shoeing',
            x: 0,
            y: 0,
            data: {
                production: '3',
                capacity: '93%',
                future: '8'
            },
            key: this.props.keyReact
        }
        this.data = [];
        this.selector = React.createRef();
    }

    styles = {
        bubbleStyle: {
            width: '50%',
            height: '50%',
            background: 'rgba(249,249,249,0.95)',
            borderRadius: '5vw',
            boxShadow: '0 0 20px rgba(46, 46, 46, 0.11)',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer',
            transition: '0.5s',
            userSelect: 'none'
        },
        titleStyle: {
            margin: 'auto',
            textTransform: 'capitalize',
            textAlign: 'center'
        },
        containerStyle: {
            width: '15vw',
            height: '15vw',
            display: 'flex',
            position: 'relative'
        }
    }

    componentDidMount() {
        this.jsonToData();
        this.props.data(this.props.keyReact, this.selector.current.getBoundingClientRect())
    }

    jsonToData = () => {
        for (let x in this.state.data) {
            if (this.state.data.hasOwnProperty(x)) {
                this.data.push([x, this.state.data[x]])
            }
        }
    }
    handleHover = () => {
        this.styles.bubbleStyle = {
            width: '55%',
            height: '55%',
            background: 'rgba(249,249,249,0.95)',
            borderRadius: '5vw',
            boxShadow: '0 0 20px rgba(46, 46, 46, 0.22)',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer',
            transition: '0.5s',
            userSelect: 'none'
        }
    }
    handleLeave = () => {
        this.styles.bubbleStyle = {
            width: '50%',
            height: '50%',
            background: 'rgba(249,249,249,0.95)',
            borderRadius: '5vw',
            boxShadow: '0 0 40px rgba(46, 46, 46, 0.11)',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer',
            transition: '0.5s',
            userSelect: 'none'
        }
    }

    render() {
        if (this.state.key !== '0') {
            return (
                <div className={'bubble'} ref={this.selector} id={this.props.keyReact}
                     style={this.styles.containerStyle}
                     onMouseOver={this.handleHover.bind(this)}
                     onMouseLeave={this.handleLeave.bind(this)}
                     onClick={this.props.clicked.bind(this, this.state.key)}>
                    <div style={this.styles.bubbleStyle}>
                        <div style={this.styles.titleStyle}>
                            <div style={{fontSize: '18px', marginBottom: '4px'}}>{this.state.title}</div>
                            <div>
                                {this.props.view !== 2 ? this.data.map((item) => (
                                    <div key={item[0]}
                                         style={{fontSize: '12px', marginBottom: '2px'}}>{item[0]}: {item[1]}</div>
                                )) : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={'bubble'} ref={this.selector} id={this.props.keyReact}
                     style={{width: '15vw', height: '15vw', display: 'flex', position: 'relative'}}>
                </div>
            )
        }
    }
}

export default Bubble;
