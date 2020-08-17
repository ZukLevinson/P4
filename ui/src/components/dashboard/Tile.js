import React from 'react';
import TileSection from './TileSection';
import HorizontalLine from "./HorizontalLine";

class Tile extends React.Component {
    render() {
        const tileData = this.props.data;

        return tileData.map((obj) => {
            obj.forEach((category) => (
                <h1>category</h1>
            ))
        })
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

export default Tile;
