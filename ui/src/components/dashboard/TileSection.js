import React from 'react';

class TileSection extends React.Component{
    render(){
        const data = this.props.data;
        console.log(data)
        return(
            <div className="list_info" id="income">
                <a className="cell_title">income</a>
                <table>
                    <tr>
                        <td>
                            collections by recite
                        </td>
                        <td>
                            1000$
                        </td>
                    </tr>
                    <tr>
                        <td>
                            credit collections
                        </td>
                        <td>
                            100$
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default TileSection;
