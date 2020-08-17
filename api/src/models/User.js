const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    full_name: {
        first_name: {type: String, trim: true},
        last_name: {type: String, trim: true}
    },
    password: {type:String},
    contact: {
        email: {type: String, trim: true, required:true},
        phone: {type: String, trim: true},
        address: {
            in_street: {
                street: {type: String},
                number: {type: String, trim: true},
                apartment: {type: String, trim: true},
                entrance: {type: String, trim: true}
            },
            city: {type: String},
            region: {type: String},
            country: {type: String}
        }
    },
    position: {
        department: {type: String},
        title: {type: String},
        team_id: {type: String}
    },
    business_id:{type: String}
})

module.exports = mongoose.model('Users', userSchema)