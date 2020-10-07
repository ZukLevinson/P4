import React from "react";
import moment from "moment";

class Clock extends React.Component {
    constructor() {
        super()
        this.state = {time: moment().utcOffset('+03:00').format('YYYY/MM/DD, HH:mm:ss')}
    }

    componentDidMount() {
        localStorage.setItem('interId', setInterval(() => this.currentTime(), 1000));
    }

    currentTime() {
        this.setState({
            time: moment().utcOffset('+03:00').format('YYYY/MM/DD, HH:mm:ss')
        })
    }
    componentWillUnmount() {
        clearInterval(localStorage.getItem('interId'))
    }

    render() {
        return (
            <div>{this.state.time}</div>
        )
    }
}

export default Clock;
