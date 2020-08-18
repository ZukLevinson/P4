import React from 'react';
import TileSection from './TileSection';
import HorizontalLine from "./HorizontalLine";

class Tile extends React.Component {
    render() {
        const tileData = this.props.data;

        return (
            <div className="tile">
                {/*<div style={tileStyle} className="tile">*/}
                <div style={titleStyle}>
                    {this.props.title}
                </div>
                <HorizontalLine/>
                {tileData.map((field) => (
                    <TileSection data={field} key={field.kind}/>
                ))}
            </div>
        );
    }
}

// const tileStyle = {
//     width: 'calc(21vw - 20px)',
//     minWidth: 'calc(21vw - 20px)',
//     background: '#FBFBFB',
//     borderRadius: '10px',
//     boxShadow: '0 0 40px rgba(46, 46, 46, 0.11)',
//     overflow: 'hidden',
//     marginTop: '3vh',
//     marginLeft: '2%',
//     marginRight: '2%',
//     maxHeight: '82vh',
//     whiteSpace: 'normal',
//     /*text-overflow: ellipsis,*/
//     wordWrap: 'break-word',
//     flexBasis: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     padding: '10px'
// }
const titleStyle = {
    fontSize: '4vh',
    color: '#2E2E2E'
}
export default Tile;
