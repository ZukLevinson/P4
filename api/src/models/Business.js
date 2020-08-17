const mongoose = require('mongoose');

const business = new mongoose.Schema({
    full_name: {type: String},
    short_name: {type: String},
    business: {
        kind: {type: String},
        size: {type: String},
        fields: {type: String}
    },
    workforce: [{
        team_id: {type: String},
        department: {type: String},
        workers: [{
            id: {type: String},
            email: {type:String},
            title: {type:String}
        }]
    }],
    main_contact: {
        mail: {type: String},
        phone: {type: String},
        web_address: {type: String},
        mail_address: {type: String},
        fax: {type: String}
    }
});

module.exports = mongoose.model('Business', business)