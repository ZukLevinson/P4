const mongoose = require('mongoose');

const client = new mongoose.Schema({
    client_id: {type: String},
    business_id: {type: String},
    orders: {type: Array},
    info:{
        full_name: {type: String},
        phone:  {type: String},
        address: {type: String},
        business_name: {type: String},
        bn: {type: String},
    },
    timestamp: {type:String}
})

module.exports = mongoose.model('clients', client)
