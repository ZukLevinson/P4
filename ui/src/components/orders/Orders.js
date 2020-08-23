import React from 'react';

import Order from "./Order";
import HorizontalLine from "../dashboard/HorizontalLine";

import './style.css';

class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    business_id: '123',
                    order_id: '000',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'ordered',
                        percentage: '28'
                    }
                }, {
                    business_id: '123',
                    order_id: '000',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'ordered',
                        percentage: '28'
                    }
                }, {
                    business_id: '123',
                    order_id: '001',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'manufacturing',
                        percentage: '68'
                    }
                }, {
                    business_id: '123',
                    order_id: '000',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'ordered',
                        percentage: '28'
                    }
                }, {
                    business_id: '123',
                    order_id: '001',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'manufacturing',
                        percentage: '68'
                    }
                }, {
                    business_id: '123',
                    order_id: '000',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'ordered',
                        percentage: '28'
                    }
                }, {
                    business_id: '123',
                    order_id: '001',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'manufacturing',
                        percentage: '68'
                    }
                }, {
                    business_id: '123',
                    order_id: '000',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'ordered',
                        percentage: '28'
                    }
                }, {
                    business_id: '123',
                    order_id: '001',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'manufacturing',
                        percentage: '68'
                    }
                }, {
                    business_id: '123',
                    order_id: '000',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'ordered',
                        percentage: '28'
                    }
                }, {
                    business_id: '123',
                    order_id: '001',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'manufacturing',
                        percentage: '68'
                    }
                }, {
                    business_id: '123',
                    order_id: '000',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'ordered',
                        percentage: '28'
                    }
                }, {
                    business_id: '123',
                    order_id: '000',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'ordered',
                        percentage: '28'
                    }
                }, {
                    business_id: '123',
                    order_id: '000',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'ordered',
                        percentage: '28'
                    }
                }, {
                    business_id: '123',
                    order_id: '000',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'ordered',
                        percentage: '28'
                    }
                }, {
                    business_id: '123',
                    order_id: '000',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'ordered',
                        percentage: '28'
                    }
                }, {
                    business_id: '123',
                    order_id: '000',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'ordered',
                        percentage: '28'
                    }
                }, {
                    business_id: '123',
                    order_id: '000',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'ordered',
                        percentage: '28'
                    }
                }, {
                    business_id: '123',
                    order_id: '000',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'ordered',
                        percentage: '28'
                    }
                }, {
                    business_id: '123',
                    order_id: '000',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'ordered',
                        percentage: '28'
                    }
                }, {
                    business_id: '123',
                    order_id: '001',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'manufacturing',
                        percentage: '68'
                    }
                }, {
                    business_id: '123',
                    order_id: '000',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'ordered',
                        percentage: '28'
                    }
                }, {
                    business_id: '123',
                    order_id: '001',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'manufacturing',
                        percentage: '68'
                    }
                }, {
                    business_id: '123',
                    order_id: '000',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'ordered',
                        percentage: '28'
                    }
                }, {
                    business_id: '123',
                    order_id: '001',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'manufacturing',
                        percentage: '68'
                    }
                }, {
                    business_id: '123',
                    order_id: '000',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'ordered',
                        percentage: '28'
                    }
                }, {
                    business_id: '123',
                    order_id: '000',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'ordered',
                        percentage: '28'
                    }
                }, {
                    business_id: '123',
                    order_id: '000',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'ordered',
                        percentage: '28'
                    }
                }, {
                    business_id: '123',
                    order_id: '000',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'ordered',
                        percentage: '28'
                    }
                }, {
                    business_id: '123',
                    order_id: '000',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'ordered',
                        percentage: '28'
                    }
                }, {
                    business_id: '123',
                    order_id: '000',
                    products: [
                        {
                            id: '001',
                            quantity: '2'
                        },
                        {
                            id: '002',
                            quantity: '3'
                        }
                    ],
                    status: {
                        id: 'ordered',
                        percentage: '28'
                    }
                }
            ],
            timestamp: new Date()
        }
    }

    render() {
        return (
            <div style={ordersStyle}>
                <div style={containerStyle}>
                    <div style={titleStyle}>
                        <p style={{marginBottom: '10px'}}>Orders</p>
                        <HorizontalLine/>
                    </div>

                    <div style={{flex:'1', height:'100%'}}>
                        <table className="orders" style={tblStyle}>
                            {/*<thead>*/}
                            {/*<tr>*/}
                            {/*    <th>Order ID</th>*/}
                            {/*    <th>Products</th>*/}
                            {/*    <th>Order Status</th>*/}
                            {/*    <th>Expected</th>*/}
                            {/*</tr>*/}
                            {/*</thead>*/}
                            <tbody style={{display:'block',overflowY:"scroll",height:'inherit',width:'inherit'}}>
                            {this.state.data.map((order) => (
                                <Order data={order} key={Math.random().toString(36).substr(2, 9)}/>
                                // <Order data={order} key={order.order_id}/>
                            ))}
                            </tbody>

                        </table>
                    </div>
                    <div style={footStyle}>
                        <p>
                            Data updated at {this.state.timestamp.toLocaleTimeString()}
                        </p>
                    </div>

                </div>
            </div>
        );
    }
}

const ordersStyle = {
    height: '90vh',
    width: '100vw',
    overflow: 'hidden',
    background: '#FBFBFB',
    display: 'flex',
    flexDirection: 'row',
}

const containerStyle = {
    margin:'20px',
    flex:'1 1',
    display:'flex',
    flexDirection: 'column'
}
const tblStyle = {
    borderCollapse: 'collapse',
    height:'inherit',
    width:'100%',
}

const titleStyle = {
    fontSize: '40px',
    fontWeight: '200',
    height: '90px',
}
const footStyle = {
    color: 'gray',
    fontSize: '13px',
    marginTop: '20px',
    height: '20px'
}

export default Orders;
