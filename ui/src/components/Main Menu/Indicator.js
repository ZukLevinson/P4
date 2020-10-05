import React from 'react';

class Indicator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: this.props.current,
            size: this.props.size
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.current !== this.props.current) {
            this.setState({
                current: this.props.current,
                size: this.props.size
            })
        }
    }


    render() {
        return (
            <div style={{width: 'calc(100% - 6px)', bottom: '0', position: 'absolute'}}>
                <div style={{
                    width: `calc(100%/${this.props.size})`,
                    marginLeft: `calc(25%*${this.state.current - 1})`, transition: '0.5s'
                }}>
                    <div style={{
                        width: '10%',
                        height: '1px',
                        background: 'rgba(0, 0, 0, 0.6)',
                        margin: 'auto',
                        bottom: '0'
                    }}/>
                </div>

            </div>
        );
    }
}

export default Indicator;
