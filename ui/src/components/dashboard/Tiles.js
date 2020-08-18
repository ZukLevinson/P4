import React from 'react';
import Tile from "./Tile";

class Tiles extends React.Component {
    render() {
        const tilesData = this.props.tiles;

        return tilesData.map((tile) =>(
            <Tile title={tile.title} data={tile.data} key={tile.title}/>
        ))
    }
}

export default Tiles;