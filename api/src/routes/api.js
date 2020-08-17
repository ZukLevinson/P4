const router = require('express').Router();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

//Models
const User = require('../models/User');
const Business = require('../models/Business');

//Validate Business Id
router.post('/validate/user', async (req, res, next) => {
    const business = await Business.find(
        {
            "short_name": req.body.short_name,
            "workforce.team_id": req.body.team_id,
            "workforce.workers.email": req.body.email_in
        }
    );

    if (business.length === 0) return res.status(400).json({
        userValid: false
    });
    try {
        const team = business[0].workforce.filter(obj => {
            return obj.team_id === req.body.team_id;
        })[0];
        const worker = team.workers.filter(obj => {
            return obj.email === req.body.email_in;
        })
        const token = await jwt.sign(
            {
                email: req.body.email_in,
                team_id: team.team_id,
                department: team.department,
                title: worker[0].title,
                business_id: business[0]._id,
                worker_id: worker[0].id
            },
            process.env.BUSINESS_TOKEN_SECRET);
        return res.status(201).cookie('business-token', token).json({
            userValid: true
        })
    } catch (err) {
        console.log(err);
    }
});

//Sign Up
router.get('/users/sign-up', async (req, res) => {

})

//Parse cookies
function parseCookies(request) {
    let list = {},
        rc = request.headers.cookie;

    rc && rc.split(';').forEach(function (cookie) {
        let parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    return list;
}

module.exports = router;
