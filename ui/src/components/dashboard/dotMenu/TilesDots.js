import React from 'react';
import Dot from "./Dot";

class Dots extends React.Component {
    render() {
        const clusters = [];
        for (let i = 0; i < this.props.num; i++) {
            clusters.push(i);
        }
        if(clusters.length !== 1){
            return (
                <div style={containerStyle}>
                    {clusters.map((obj) => (
                        <Dot key={obj} cluster={'cluster' + obj}/>
                    ))}
                </div>
            );
        } else return null;
    }
}

const containerStyle = {
    position: 'absolute',
    background: '#FBFBFB',
    boxShadow: '0 0 40px rgba(46, 46, 46, 0.25)',

    minWidth: '50px',
    width: '50px',
    height: '20px',
    borderRadius: '10px',

    marginLeft: 'auto',
    marginRight: 'auto',
    left: '0',
    right: '0',
    bottom: '11vh',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
}
export default Dots;
