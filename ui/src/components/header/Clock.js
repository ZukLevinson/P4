import React from "react";

class Clock extends React.Component {
    constructor() {
        super()
        this.state = {time: new Date()}
    }

    componentDidMount() {
        localStorage.setItem('interId',setInterval(() => this.currentTime(), 1000));
    }

    currentTime() {
        this.setState({
            time: new Date()
        })
    }

    componentWillUnmount() {
        clearInterval(localStorage.getItem('interId'))
    }

    render() {
        return (
            <p>{this.state.time.toLocaleTimeString()}</p>
        )
    }
}

export default Clock;
