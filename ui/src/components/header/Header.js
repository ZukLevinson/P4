import React from 'react';
import Button from "./Button";
import VerticalLine from "./VerticalLine";
import Company from "./Company";

class Header extends React.Component {
    constructor() {
        super()
        this.state = {time: new Date()}
    }

    currentTime() {
        this.setState({
            time: new Date()
        })
    }

    componentDidMount() {
        setInterval(() => this.currentTime(), 1000);
    }

    render() {
        const buttons = this.props.layout;

        const companyInfo = {
            icon: './img/Picture3.png',
            name: 'Example'
        }
        const userInfo = {
            name: localStorage.getItem('fullName')
        }

        return (
            <div className="bottom_menu" style={bottomStyle}>
                <div className="bottom_menu_left" style={bottomSidesStyle}>
                    <Company data={companyInfo}/>
                </div>
                <div className="bottom_menu_middle" style={bottomMiddleStyle}>
                    <VerticalLine/>
                    <div className="buttons" style={buttonsStyle}>
                        {buttons.map((btn) => (
                            <Button data={btn} key={btn.id} link={btn.link}/>
                        ))}
                    </div>
                    <VerticalLine/>
                </div>
                <div className="bottom_menu_right" style={bottomSidesStyle}>
                    <div className="user_info">
                        <p>{this.state.time.toLocaleTimeString()}</p>
                        <p>{userInfo.name}</p>
                    </div>
                </div>
            </div>
        );
    }
}

const bottomStyle = {
    width: '100vw',
    height: '10vh',
    background: '#FBFBFB',
    boxShadow: '0 0 4px rgba(46, 46, 46, 0.25)',
    display: 'flex',
    position: 'absolute',
    bottom: '0',
    '& div': {
        height: 'inherit',
        alignItems: 'center',
        display: 'flex'
    }
}

const bottomMiddleStyle = {
    width: '70%',
    alignItems: 'center'
}
const bottomSidesStyle = {
    width: '15%',
    textAlign: 'center'
}

const buttonsStyle = {
    justifyContent: 'space-evenly',
    width: '100%',
    display: 'flex'
}

export default Header;
