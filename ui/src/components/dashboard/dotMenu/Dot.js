import React from 'react';

class Dot extends React.Component {
    render() {
        return (
            <div className="dot_button">
                <div className="dot"/>
            </div>
        );
    }
}

// const dotStyle = {
//     width: '6px',
//     height: '6px',
//     borderRadius: '3px',
//     background: '#2E2E2E',
//     marginLeft: 'auto',
//     marginRight: 'auto'
// }
// const btnStyle = {
//     height: 'inherit',
//     width: '100%',
//     borderRadius: '10px',
//     display: 'flex',
//     alignItems: 'center'
// }
export default Dot;
