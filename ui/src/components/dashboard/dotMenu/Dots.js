import React from 'react';
import Dot from "./Dot";

class Dots extends React.Component {
    state = {
        hover: '',
        click: 'Summery'
    }

    handleHover = (title) => {
        if (title === '') {
            this.setState({title: ''})
        } else {
            this.setState({title: <div style={labelStyle}>{title}</div>})
        }
    }
    handleClick = (title) => {
        if(this.state.click !== title) this.setState({click:title});
    }

    render() {
        const clusters = this.props.clusters;

        if (clusters.length !== 1) {
            return (
                <div style={menuStyle}>
                    {this.state.title}
                    <div style={containerStyle}>
                        {clusters.map((cluster) => (
                            <Dot key={cluster.id} cluster={'cluster' + cluster.id} title={cluster.title}
                                 hovered={this.handleHover} clicked={this.state.click===cluster.title} current={this.handleClick}/>
                        ))}
                    </div>
                </div>

            );
        } else return null;
    }
}

const containerStyle = {
    background: '#FBFBFB',
    boxShadow: '0 0 40px rgba(46, 46, 46, 0.25)',

    width: '60px',
    height: '20px',
    borderRadius: '10px',

    marginLeft: 'auto',
    marginRight: 'auto',
    left:'0',
    right:'0',
    marginTop:'10px',

    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    position:'absolute',
    bottom:'1vh'
}

const labelStyle = {
    background: '#FBFBFB',
    boxShadow: '0 0 40px rgba(46, 46, 46, 0.25)',

    width: '100px',
    height: '30px',
    borderRadius: '15px',
    fontSize: '15px',
    textAlign: 'center',

    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom:'20px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}
const menuStyle = {
    position: 'absolute',
    width: '100px',
    height: '60px',
    left: '0',
    right: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
    bottom: '10vh',
    display:'flex',
    flexDirection: 'column'
}
export default Dots;
