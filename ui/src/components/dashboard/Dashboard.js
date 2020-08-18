import React from 'react';
import Cluster from "./Cluster";
import Dots from "./dotMenu/TilesDots";

class Dashboard extends React.Component {
    render() {
        const tiles = [
            {
                title: 'Finance',
                data: [
                    {
                        kind: 'Income',
                        cash: 1000,
                        credit: 1030,
                        categories: {
                            kitchens: 0.232,
                            windows: 0.389,
                            other: 0.379
                        }
                    },
                    {
                        kind: 'Outcome',
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
            },
            {
                title: 'Workers',
                data: [
                    {
                        kind: 'Income',
                        cash: 1000,
                        credit: 1030,
                        categories: {
                            kitchens: 0.232,
                            windows: 0.389,
                            other: 0.379
                        }
                    },
                    {
                        kind: 'Outcome',
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
            },
            {
                title: 'E1',
                data: [
                    {
                        kind: 'Income',
                        cash: 1000,
                        credit: 1030,
                        categories: {
                            kitchens: 0.232,
                            windows: 0.389,
                            other: 0.379
                        }
                    }
                ]
            },
            {
                title: 'E2',
                data: [
                    {
                        kind: 'Income',
                        cash: 1000,
                        credit: 1030,
                        categories: {
                            kitchens: 0.232,
                            windows: 0.389,
                            other: 0.379
                        }
                    },
                    {
                        kind: 'Outcome',
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
            },
            {
                title: 'E3',
                data: [
                    {
                        kind: 'Income',
                        cash: 1000,
                        credit: 1030,
                        categories: {
                            kitchens: 0.232,
                            windows: 0.389,
                            other: 0.379
                        }
                    },
                    {
                        kind: 'Outcome',
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

        return (
            <div style={dashStyle}>
                <Cluster tiles={tiles}/>
                <Dots num={tiles.length}/>
            </div>
        )
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
