import React from 'react';
import Cluster from "./Cluster";
import Dots from "./dotMenu/TilesDots";

class Dashboard extends React.Component {
    render() {
        const clusters = [
            {
                id: '0',
                title: 'Summery',
                tiles: [
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
                    }
                ]
            }
            ,
            {
                id: '1',
                title: 'Finances',
                tiles: [
                    {
                        title: 'Income',
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
                        title: 'Outcome',
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
                        title: 'E4',
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
                        title: 'E5',
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
            }
            ,
            {
                id: '2',
                title: 'Finances',
                tiles: [
                    {
                        title: 'Income',
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
                        title: 'Outcome',
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
                        title: 'E4',
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
                        title: 'E5',
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
            }
        ]

        return (
            <div style={dashStyle}>
                {clusters.map((cluster) => (
                    <Cluster cluster={'cluster' + cluster.id} key={cluster.id} title={cluster.title} tiles={cluster.tiles}/>
                ))}
                <Dots num={clusters.length} clusters={clusters}/>
            </div>
        )
    }
}

const dashStyle = {
    height: '90vh',
    width: '100vw',
    overflow: 'hidden',
    background: '#FBFBFB',
    whiteSpace: 'nowrap',
    scrollBehavior:'smooth'
}

export default Dashboard;
