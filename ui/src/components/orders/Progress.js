import React from 'react';

class Progress extends React.Component {
    getColor = (status) => {
        if (status === 'manufacturing') return 'rgba(232, 207, 44, 0.56)'
    }

    render() {
        const {id, percentage} = this.props.data;
        const progStyle = {
            height: 'inherit',
            width: percentage + '%',
            background: this.getColor(id),
            textTransform: 'capitalize',
            position: 'absolute'
        }

        return (
            <div style={{height: 'inherit'}}>
                <div style={progStyle}>&nbsp;</div>
                <p style={{zIndex: '10'}}>{id + ' (' + percentage + '%)'}</p>
            </div>

        );
    }
}

export default Progress;
