import React from 'react';
import HorizontalLine from "./HorizontalLine";

class TileSection extends React.Component {
    render() {
        const field = this.props.data;
        const data = [];
        for (let key in field) {
            if (key !== 'kind' && key !== 'categories') {
                data.push([key, field[key]]);
            }
        }

        return (
            <div style={listStyle} key={field.kind}>
                <p style={titleStyle}>{field.kind}</p>
                <table>
                    <tbody>
                    {
                        data.map((obj) => (
                            <tr key={obj[0]}>
                                <td>
                                    {obj[0]}
                                </td>
                                <td>
                                    {obj[1].toString() + '$'}
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                <HorizontalLine/>
            </div>
        );
    }
}

const listStyle = {
    marginBottom: '10px',
    textTransform: 'capitalize',
    fontSize: '1.5vh'
}
const titleStyle = {
    fontSize: '2vh',
    textTransform: 'capitalize'
}

export default TileSection;
