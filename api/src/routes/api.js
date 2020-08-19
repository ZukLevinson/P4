const router = require('express').Router();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

//Models
const User = require('../models/User');
const Business = require('../models/Business');

//Validate User In Business
router.post('/validate/user', async (req, res, next) => {
    const business = await Business.find(
        {
            "short_name": req.body.short_name,
            "workforce.team_id": req.body.team_id,
            "workforce.workers.email": req.body.email_in
        }
    );
    console.log(req)
    if (business.length === 0) return res.json({
        userValid: false
    }).end();
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
        return res.status(201).cookie('business_token', token).json({
            userValid: true
        })
    } catch (err) {
        console.log(err);
    }
});

//Sign Up
router.post('/sign-up', async (req, res, next) => {
    const auth = authBusinessCookie(parseCookies(req));
    console.log(parseCookies(req))
    if (auth) {
        const user = new User(
            {
                full_name: req.body.full_name,
                password: bcrypt.hash(req.body.password, 10),
                contact: {
                    email: req.body.email_in
                },
                business_id: 0
            }
        )
    } else {
        res.status(400).end();
    }
})

router.get('/test', async (req, res) => {
    res.json({msg: 'hello'}).end();
})

//Authenticate Business Cookie
function authBusinessCookie(cookies) {
    if ("business_token" in cookies) {
        return jwt.verify(cookies.business_token, process.env.BUSINESS_TOKEN_SECRET);
    } else {
        return false;
    }
}

//Parse cookies
function parseCookies(request) {
    let list = {},
        rc = request.headers.cookie;

    rc && rc.split(';').forEach(function( cookie ) {
        let parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    return list;
}

module.exports = router;
