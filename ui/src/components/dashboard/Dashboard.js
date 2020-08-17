import React from 'react';
import Tile from "./Tile";

class Dashboard extends React.Component {
    render() {
        const tiles = [
            {
                title: 'Finance',
                data:[
                    {
                        kind:'Income',
                        cash: 1000,
                        credit: 1030,
                        categories: {
                            kitchens: 0.232,
                            windows: 0.389,
                            other: 0.379
                        }
                    },
                    {
                        kind:'Outcome',
                        cash: 100,
                        credit: 78,
                        categories: {
                            wood: 0.232,
                            glass: 0.389,
                            metal: 0.279,
                            other: 0.100
                        }
                    }
                ]
            }
        ]

        return tiles.map((tile) =>(
            <Tile title={tile.title} data={tile.data} key={tile.title}/>
        ))
    }
}

const dashStyle = {
    height: '90vh',
    width: '100vw',
    overflowX: 'hidden',
    whiteSpace: 'nowrap',
    background: '#FBFBFB',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start'
}

export default Dashboard;
