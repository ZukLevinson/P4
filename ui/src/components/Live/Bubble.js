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
            key: this.props.keyReact,
            view: this.props.view === 1,
            adapt: this.props.adapt
        }
        this.data = [];
        this.selector = React.createRef();
        this.jsonToData();

        //Adapt bubble style if needed
        if (this.props.adapt) {
            this.styles.containerStyle = {
                width: '100px',
                height: 'inherit',
                display: 'flex',
                position: 'relative',
            }
            this.styles.bubbleStyle = {
                height: '100%',
                background: 'rgba(249,249,249,0.95)',
                borderRadius: '5vw',
                boxShadow: '0 0 20px rgba(46, 46, 46, 0.11)',
                margin: 'auto',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: '0.5s',
                userSelect: 'none'
            }
        }

        this.titleSize = 18;
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
        this.props.data(this.props.keyReact, this.selector.current.getBoundingClientRect())

        if (this.props.adapt) {
            this.titleSize = 14;
            const element = this.selector.current.getBoundingClientRect()
            this.styles.containerStyle = {
                width: `${element.height}px`,
                height: `${element.height}px`,
                display: 'flex',
                position: 'relative',
            }
            this.styles.bubbleStyle = {
                width: '100%',
                height: '100%',
                background: 'rgba(249,249,249,0.95)',
                borderRadius: '5vw',
                boxShadow: '0 0 10px rgba(46, 46, 46, 0.07)',
                margin: 'auto',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: '0.5s',
                userSelect: 'none'
            }
            this.forceUpdate()
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.keyReact !== this.props.keyReact) this.setState({key: this.props.keyReact})
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
                     onMouseOver={!this.state.adapt ? this.handleHover.bind(this) : null}
                     onMouseLeave={!this.state.adapt ? this.handleLeave.bind(this) : null}
                     onClick={this.props.clicked.bind(this, this.state.key)}>
                    <div style={this.styles.bubbleStyle}>
                        <div style={this.styles.titleStyle}>
                            <div style={{
                                fontSize: `${this.titleSize}px`,
                                marginBottom: '4px'
                            }}>{this.state.title} {this.props.keyReact}</div>
                            <div>
                                {this.props.view ? this.data.map((item) => (
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
