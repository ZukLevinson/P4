import React from 'react';
import TileSection from './TileSection';
import HorizontalLine from "./HorizontalLine";

class Tile extends React.Component {
    render() {
        const tileData = this.props.data;

        return (

            <div style={tileStyle}>
                <div style={titleStyle}>
                    {this.props.title}
                </div>
                <HorizontalLine/>

                {tileData.map((field) => (
                    <TileSection data={field} key={field.kind}/>
                ))}

            </div>
        );
        // return (
        //     <div className="info_box" id="finance">
        //         <div className="info_box_content">
        //             <div className="title">
        //                 {tileData.title}
        //             </div>
        //             <HorizontalLine/>
        //
        //             <TileSection data={tileData.outcome}/>
        //             <div className="list_info" id="income">
        //                 <a className="cell_title">income</a>
        //                 <table>
        //                     <tr>
        //                         <td>
        //                             collections by recite
        //                         </td>
        //                         <td>
        //                             1000$
        //                         </td>
        //                     </tr>
        //                     <tr>
        //                         <td>
        //                             credit collections
        //                         </td>
        //                         <td>
        //                             100$
        //                         </td>
        //                     </tr>
        //                 </table>
        //             </div>
        //             <HorizontalLine/>
        //             <div className="list_info" id="outcome">
        //                 <a className="cell_title">outcome</a>
        //                 <table>
        //                     <tr>
        //                         <td>
        //                             collections by recite
        //                         </td>
        //                         <td>
        //                             1000$
        //                         </td>
        //                     </tr>
        //                     <tr>
        //                         <td>
        //                             credit collections
        //                         </td>
        //                         <td>
        //                             100$
        //                         </td>
        //                     </tr>
        //                 </table>
        //             </div>
        //             <HorizontalLine/>
        //             <div className="graph">
        //                 <img src="img/978c76de-15ac-4f1f-8a13-55cda19813e0.png" alt="GRAPH"/>
        //             </div>
        //             <HorizontalLine/>
        //             <div className="list_info" id="performance">
        //                 <a className="cell_title">outcome</a>
        //                 <table>
        //                     <tr>
        //                         <td>
        //                             collections by recite
        //                         </td>
        //                         <td>
        //                             1000$
        //                         </td>
        //                     </tr>
        //                     <tr>
        //                         <td>
        //                             credit collections
        //                         </td>
        //                         <td>
        //                             100$
        //                         </td>
        //                     </tr>
        //                     <tr>
        //                         <td>
        //                             credit collections
        //                         </td>
        //                         <td>
        //                             1200$
        //                         </td>
        //                     </tr>
        //                 </table>
        //             </div>
        //         </div>
        //     </div>
        // );
    }
}

const tileStyle = {
    width: 'calc(21vw - 20px)',
    minWidth: 'calc(21vw - 20px)',
    background: '#FBFBFB',
    borderRadius: '10px',
    boxShadow: '0 0 40px rgba(46, 46, 46, 0.11)',
    overflow: 'hidden',
    marginTop: '3vh',
    marginLeft: '2%',
    marginRight: '2%',
    maxHeight: '82vh',
    whiteSpace: 'normal',
    /*text-overflow: ellipsis,*/
    wordWrap: 'break-word',
    flexBasis: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px'
}
const titleStyle = {
    fontSize: '4vh',
    color: '#2E2E2E'
}
export default Tile;
