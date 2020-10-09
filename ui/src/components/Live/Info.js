import React from "react";

import Bubble from "./Bubble";

class Info extends React.Component {
    //TODO Fix width animation's extra pixels
    constructor(props) {
        super(props);
        this.state = {
            data: {
                production: '3',
                capacity: '93%',
                future: '8'
            }
        }

        this.selector = React.createRef();
        this.location = this.props.locations["'" + this.props.keyId + "'"];
        this.side = '';
        this.data = [];

        this.bgStyle = {
            width: '100%',
            height: '100%',
            background: 'rgba(249,249,249,0)',
            position: 'absolute',
        };
        this.bubbleContainerStyle = {
            width: '15vw',
            height: '15vw',
            top: `${this.location.top}px`,
            left: `${this.location.left - this.location.width / 3}px`,
            right: `${window.innerWidth - (this.location.left + this.location.width * (1 + 1 / 3))}px`,
            position: 'absolute',
            transition: '0.75s'
        };
    }

    infoBox = {
        width: '85%',
        height: '86%',
        background: 'rgba(249,249,249,0.80)',
    }

    componentDidMount() {
        this.jsonToData();
        if (this.location.left > window.innerWidth / 2) {
            this.side = 'right';
            this.bubbleContainerStyle = {
                width: '15vw',
                height: '15vw',
                top: `0px`,
                right: `0px`,
                left: 'initial',
                position: 'absolute',
                transition: '0.75s'
            }
            this.infoBox = {
                left: '0',
                width: '85%',
                height: '86%',
                background: 'rgba(249,249,249,0.80)',
                position: 'absolute',
                top: '0',
                bottom: '0',
                margin: 'auto',
                boxShadow: '0 0 20px rgba(46, 46, 46, 0.11)',
                borderRadius: '20px'
            }
        } else {
            this.side = 'left';
            this.bubbleContainerStyle = {
                width: '15vw',
                height: '15vw',
                top: `0px`,
                left: `0px`,
                position: 'absolute',
                transition: '0.75s',
                right: '0',
            }
            this.infoBox = {
                right: '0',
                width: '85%',
                height: '86%',
                background: 'rgba(249,249,249,0.80)',
                position: 'absolute',
                top: '0',
                bottom: '0',
                margin: 'auto',
                boxShadow: '0 0 20px rgba(46, 46, 46, 0.11)',
                borderRadius: '20px'
            }
        }
        this.forceUpdate()
    }
    jsonToData = () => {
        for (let x in this.state.data) {
            if (this.state.data.hasOwnProperty(x)) {
                this.data.push([x, this.state.data[x]])
            }
        }
    }

    styles = {
        title: {
            fontSize: '50px',
            margin: '30px',
            display:'flex'
        },
        quickInfo: {
            display:'flex',
            flexWrap:'wrap',
            width:'90px',
            borderLeft:'1px solid black',
            paddingLeft:'10px',
            marginLeft:'10px',
            textTransform:'uppercase'
        }
    }

    render() {
        return (
            <div style={this.bgStyle} ref={this.selector}>
                <div style={this.bubbleContainerStyle}>
                    <Bubble keyReact={this.props.keyId} clicked={this.props.clicked} data={(id, location) => null}/>
                </div>
                <div style={this.infoBox}>
                    <div style={{width: '100%', height: '100%'}}>
                        <div style={this.styles.title}>
                            Shoeing
                            <div style={this.styles.quickInfo}>
                                {this.data.map((item) => (
                                    <div key={item[0]}
                                         style={{fontSize: '12px', marginBottom: '2px'}}>{item[0]}: {item[1]}</div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Info;
