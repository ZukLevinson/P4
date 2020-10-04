const mongoose = require('mongoose');

const product = new mongoose.Schema({
    business_id: {type: String},
    product_id: {type: String},
    inventory: [{
        status: {type: String},
        quantity: {type: String}
    }],
    info: {
        kind: {type: String},
        measures: {type: String}
    }
})

module.exports = mongoose.model('products', product)
