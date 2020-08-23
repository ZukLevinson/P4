import React from 'react';
import Tile from "./Tile";

class Cluster extends React.Component {
    render() {
        const tilesData = this.props.tiles;
        return (
            <div style={containerStyle} id={this.props.cluster}>
                <div style={clusterStyle}>
                    {tilesData.map((tile) => (
                        <Tile title={tile.title} data={tile.data} key={tile.title}/>
                    ))}
                </div>
            </div>
        )
    }
}

const clusterStyle = {
    width: '100%',
    height: 'inherit',
    whiteSpace: 'nowrap',
    background: '#FBFBFB',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start'
}
const containerStyle = {
    display: 'inline-block',
    width: 'inherit',
    height: 'inherit'
}

export default Cluster;
