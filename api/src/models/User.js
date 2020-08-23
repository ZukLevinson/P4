const mongoose = require('mongoose');

const user = new mongoose.Schema({
    full_name: {type: String, trim: true},
    password: {type: String},
    contact: {
        email: {type: String, trim: true, required: true},
        phone: {type: String, trim: true}
    },
    position: {
        department: {type: String},
        title: {type: String},
        team_id: {type: String}
    },
    business_id: {type: String},
    worker_id: {type: String}
})

module.exports = mongoose.model('users', user)
