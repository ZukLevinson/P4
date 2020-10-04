const mongoose = require('mongoose');

const layout = new mongoose.Schema({
    user_id: {type: String},
    business_id: {type: String},
    layout: [{
        id: {type: String},
        buttons: [{
            title: {type: String},
            icon: {type: String},
            link: {type: String},
            hash: {type: String},
            id: {type: String}
        }]
    }]
})

module.exports = mongoose.model('layout', layout)
