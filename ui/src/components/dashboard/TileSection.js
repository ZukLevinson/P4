import React from 'react';
import HorizontalLine from "./HorizontalLine";
import axios from 'axios';

class TileSection extends React.Component {
    onClickHandler = () => {
        axios.get('http://localhost:8080/api/user').then(console.log);
    }

    render() {
        const field = this.props.data;
        const data = [];
        for (let key in field) {
            if (key !== 'kind' && key !== 'categories') {
                data.push([key, field[key]]);
            }
        }

        return (

            <div style={listStyle} key={field.kind} onClick={this.onClickHandler}>
                <p style={titleStyle}>{field.kind}</p>
                <table style={tblStyle}>
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
const tblStyle = {
    width: '100%',
    margin: '10px 0',
    tableLayout: 'fixed'
}
export default TileSection;
