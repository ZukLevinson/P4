const mongoose = require('mongoose');

const order = new mongoose.Schema({
    business_id: {type: String},
    order_id: {type: String},
    products: [{
        id: {type: String},
        quantity: {type: String},
    }],
    status: {
        id: {type: String},
        percentage: {type: String}
    },
    timestamp: {type: String}
})

module.exports = mongoose.model('orders', order)
