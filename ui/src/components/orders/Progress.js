import React from 'react';

class Progress extends React.Component {
    getColor = (status) => {
        if (status === 'manufacturing') return 'rgba(232, 207, 44, 0.56)'
        if (status === 'ordered') return 'rgba(44,151,232,0.56)'
        if (status === 'shipped') return 'rgba(110,232,44,0.56)'
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
            <div style={{position:'relative', height:"100%"}}>
                <div style={progStyle}>&nbsp;</div>
                <p style={{position:'absolute',padding:'0 10px'}}>{id + ' (' + percentage + '%)'}</p>
            </div>

        );
    }
}

export default Progress;
