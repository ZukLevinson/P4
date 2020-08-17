import React from 'react';
import './App.css';

function Item() {
    return (
        <div className="info_box" id="finance">
            <div className="info_box_content">
                <div className="title">
                    Finance
                </div>
                <div className="horizontal_line"></div>
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
                <div className="horizontal_line"></div>
                <div className="list_info" id="outcome">
                    <a className="cell_title">outcome</a>
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
                <div className="horizontal_line"></div>
                <div className="graph">
                    <img src="img/978c76de-15ac-4f1f-8a13-55cda19813e0.png" alt="GRAPH"></img>
                </div>
                <div className="horizontal_line"></div>
                <div className="list_info" id="performance">
                    <a className="cell_title">outcome</a>
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
                        <tr>
                            <td>
                                credit collections
                            </td>
                            <td>
                                1200$
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
);
}

export default Item;
