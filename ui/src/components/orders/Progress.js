import React from 'react';

class Progress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status_kinds: ['Ordered', 'Handled', 'Waiting for Manufacturing', 'Manufactured', 'Waiting for Packaging', 'Packaging', 'Waiting for Shipping', 'Shipped', 'Arrived', 'Other'],
            percentageYes: ['3', '5'],
            size: this.props.size,
            color: this.props.color === undefined
        }
    }

    getColor = (status) => {
        if (status === '0') return 'rgba(192,9,255,0.56)'
        if (status === '1') return 'rgba(239,156,12,0.56)'
        if (status === '2') return 'rgba(255,214,9,0.56)'
        if (status === '3') return 'rgba(18,111,252,0.56)'
        if (status === '4') return 'rgba(255,214,9,0.56)'
        if (status === '5') return 'rgba(127,232,123,0.56)'
        if (status === '6') return 'rgba(255,214,9,0.56)'
        if (status === '7') return 'rgba(44,232,204,0.56)'
        if (status === '8') return 'rgba(232,82,44,0.56)'
        if (status === '9') return 'rgba(232,82,44,0.56)'
    }
    getStyle = () => {
        if (this.state.size === "auto") {
            return (
                {
                    position: 'absolute', fontSize: '50%', width: '100%', height: 'inherit',fontWeight:'500',letterSpacing:'1px'
                }
            )
        } else {
            if(this.state.color===false){
                return(
                    {
                        color:this.getColor(this.props.data.id),position: 'absolute',fontWeight:'900'
                    }
                )
            }
            return (
                {
                    position: 'absolute'
                }
            )
        }
    }

    render() {
        const {id, percentage} = this.props.data;
        const percentageStatus = this.state.percentageYes.includes(id) && this.props.percentage ? ' (' + percentage + '%)' : '';
        const progressStyle = {
            width: percentage + '%',
            background: this.getColor(id),
            textTransform: 'capitalize',
            position: 'absolute'
        }

        return (
            <div style={{position: 'relative', height: "100%", wordWrap: 'break-word', overflow: 'hidden'}}>
                {this.state.color ? <div style={progressStyle}>&nbsp;</div> : null}
                <p style={this.getStyle()}>{this.state.status_kinds[id] + percentageStatus}</p>
            </div>

        );
    }
}

export default Progress;
