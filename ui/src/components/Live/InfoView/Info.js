import React from "react";

import Bubble from ".././Bubble";
import Team from "./Team";
import Project from "./Project";

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

        this.teams = [
            {
                name: 'Team1',
                employees: ['111', '222', '333']
            }, {
                name: 'Team2',
                employees: ['111', '222', '333']
            }, {
                name: 'Team3',
                employees: ['111', '222', '333']
            }, {
                name: 'Team4',
                employees: ['111', '222', '333']
            }

        ];
        this.current = ['111', '222', '333', '444', '555', '666', '777', '888', '999', '101010', '111111']
        this.related = ['1', '3', '4', '5', '6']

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
            marginLeft: '30px',
            marginTop: '30px',
            display: 'flex'
        },
        quickInfo: {
            display: 'flex',
            flexWrap: 'wrap',
            width: '90px',
            borderLeft: '1px solid black',
            paddingLeft: '10px',
            marginLeft: '10px',
            textTransform: 'uppercase'
        },
        cluster: {
            fontSize: '18px',
            color: 'gray',
            marginLeft: '30px',
            marginBottom: '40px'
        },
        data: {
            display: 'flex',
            width: '100%',
            height: '100%'
        },
        tabs: {
            width: '70%',
            height: '100%'
        },
        events: {
            width: '28%',
            height: '91%',
            marginTop:'2%',
            borderRadius:'15px',
            boxShadow: 'rgba(46, 46, 46, 0.11) 0px 0px 20px'
        },
        miniTitle: {
            fontSize: '25px',
            fontWeight: '500'
        },
        tab: {
            padding: '10px 30px'
        },
        bubblesTab: {
            padding: '10px 30px',
            display: 'flex',
            maxHeight: '80px'
        }
    }

    render() {
        return (
            <div style={this.bgStyle} ref={this.selector}>
                <div style={this.bubbleContainerStyle}>
                    <Bubble keyReact={this.props.keyId} clicked={this.props.clicked} adapt={false}
                            data={(id, location) => null}/>
                </div>
                <div style={this.infoBox}>
                    <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column'}}>
                        <div style={this.styles.title}>
                            Shoeing
                            <div style={this.styles.quickInfo}>
                                {this.data.map((item) => (
                                    <div key={item[0]}
                                         style={{fontSize: '12px', marginBottom: '2px'}}>{item[0]}: {item[1]}</div>
                                ))}
                            </div>
                        </div>
                        <div style={this.styles.cluster}>
                            Floor Cluster
                        </div>
                        <div style={this.styles.data}>
                            <div style={this.styles.tabs}>
                                <div style={this.styles.tab}>
                                    <div style={this.styles.miniTitle}>
                                        Teams
                                    </div>
                                    <div style={{maxHeight: '150px', overflow: 'auto'}}>
                                        {this.teams.map((team) => (
                                            <Team key={team.name} data={team}/>
                                        ))}
                                    </div>
                                </div>
                                <div style={this.styles.tab}>
                                    <div style={this.styles.miniTitle}>
                                        Current Projects
                                    </div>
                                    <div style={{maxHeight: '150px', overflow: 'auto'}}>
                                        {this.current.map((project) => (
                                            <Project key={project} id={project}/>
                                        ))}
                                    </div>
                                </div>
                                <div style={this.styles.tab}>
                                    <div style={this.styles.miniTitle}>
                                        Upcoming Projects
                                    </div>
                                    <div style={{maxHeight: '150px', overflow: 'auto'}}>
                                        {this.current.map((project) => (
                                            <Project key={project} id={project}/>
                                        ))}
                                    </div>
                                </div>
                                <div style={this.styles.bubblesTab}>
                                    <div style={{
                                        width: '100px',
                                        fontSize: '25px',
                                        fontWeight: '500',
                                        display: 'inline-block'
                                    }}>
                                        Related Bubbles
                                    </div>
                                    <div style={{
                                        display: 'inline-block',
                                        width: '100%',
                                        height: 'inherit',
                                        marginLeft: '20px'
                                    }}>
                                        <div style={{display: 'flex', width: '100%', height: '100%'}}>
                                            {this.related.map((bubble) => (
                                                <div style={{width: 'inherit', height: 'inherit', marginRight: '10px'}}>
                                                    <Bubble keyReact={bubble} key={bubble} clicked={this.props.clicked}
                                                            adapt={true} view={2} data={(id, location) => null}/>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={this.styles.events}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Info;
