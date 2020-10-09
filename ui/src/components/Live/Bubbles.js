import React from "react";
import Bubble from "./Bubble";

class Bubbles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bubblesArray: this.props.bubbles
        }
    }

    componentDidMount() {
        this.props.complete();
    }

    render() {
        return (
            <div style={{
                position: 'absolute',
                display: 'flex',
                margin: 'auto',
                marginLeft: `auto`,
                marginTop: `auto`,
                flexWrap: 'wrap',
                width: '90vw',
                height: '100%',
                justifyContent: 'space-evenly',
                flexDirection: 'column'
            }}>
                {this.state.bubblesArray.map((bubbles) => (
                        <div key={this.state.bubblesArray.indexOf(bubbles)}
                             style={{display: "flex", maxWidth: '100%', justifyContent: 'center'}}>
                            {bubbles.map((bubble) => (
                                    <Bubble key={bubble} keyReact={bubble}
                                            clicked={this.props.clicked}
                                            clickedId={this.props.clickedId}
                                            view={this.props.view}
                                            data={this.props.data}
                                            adapt={this.props.adapt}/>
                                )
                            )}
                        </div>
                    )
                )}
            </div>
        )
    }
}

export default Bubbles;
