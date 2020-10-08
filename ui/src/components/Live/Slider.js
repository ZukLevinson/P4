import React from "react";

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.selector = React.createRef();
    }

    verticalStyle = {
        width: '4px',
        height: '80%',
        background: 'rgba(186,186,186,0.64)',
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        margin: 'auto',
        borderRadius: '2px'
    }
    circleStyle = {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        boxShadow: '0 0 40px rgba(46, 46, 46, 0.90)',
        background: 'rgb(220,220,220)',
        margin: 'auto',
        cursor: 'pointer'
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const element = this.selector.current.getBoundingClientRect();
        this.circleStyle = {
            width: '12px',
            height: '12px',
            borderRadius: '6px',
            boxShadow: '0 0 40px rgba(46, 46, 46, 0.90)',
            background: 'rgb(220,220,220)',
            margin: 'auto',
            cursor: 'pointer',
//TODO Fix the extra gap on the minus side
            marginTop: `${(element.height * (1 - (nextProps.scale - 0.2) * 1.125)) - 20}px`
        }
        return true
    }

    render() {
        return (
            <div style={{height: '100%', position: 'relative'}} onClick={this.props.in.bind(this, 1)}>
                <div style={this.verticalStyle}/>
                <div ref={this.selector}
                     style={{
                         height: '80%',
                         width: '100%',
                         position: 'absolute',
                         margin: 'auto',
                         top: '0',
                         bottom: '0'
                     }}>
                    <div style={this.circleStyle}/>
                </div>
            </div>
        );
    }
}

export default Slider;
