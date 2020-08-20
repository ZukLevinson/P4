const router = require('express').Router();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

//Models
const User = require('../models/User');
const Business = require('../models/Business');

//Validate business token
router.get('/validate', async (req, res, next) => {
    authBusinessCookie(req) !== false ? res.json({bc: true}).end() : res.json({bc: false}).end();
})

//Validate User In Business
router.post('/validate/user', async (req, res, next) => {
    const business = await Business.find(
        {
            "short_name": req.body.short_name,
            "workforce.team_id": req.body.team_id,
            "workforce.workers.email": req.body.email_in
        }
    );

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
                business_id: business[0]._id
            },
            process.env.BUSINESS_TOKEN_SECRET);
        return res.status(201).cookie('business_token', token).json({
            userValid: true, title: worker[0].title, department: team.department
        })
    } catch (err) {
        console.log(err);
    }
});

//Sign Up
router.post('/sign-up', async (req, res, next) => {
    const token = authBusinessCookie(req)

    if (token !== false) {
        const user = new User(
            {
                full_name: req.body.full_name,
                password: bcrypt.hashSync(req.body.password, 10),
                contact: {
                    email: req.body.email_in
                },
                position: {
                    department: token.department,
                    title: token.title,
                    team_id: token.team_id
                },
                business_id: token.business_id
            }
        )

        user.save().then(() => {
            res.json({signed: true, full_name: req.body.full_name}).end()
        }).catch((err) => {
            res.json({signed: false});
            console.log(err)
        });
    } else {
        res.status(400).end();
    }
})

//Sign In
router.post('/sign-in', async (req, res, next) => {
    const user = await User.find(
        {
            "contact": {
                "email": req.body.email_in
            }
        }
    );

    if (user.length === 0) return res.json({
        userValid: false,
        msg: 'Email not found'
    }).end();

    try {
        if (await bcrypt.compare(req.body.password, user[0].password)) {
            const token = await jwt.sign({
                    email: user[0].contact.email_in,
                    team_id: user[0].position.team_id,
                    department: user[0].position.department,
                    title: user[0].position.title,
                    business_id: user[0].business_id
                },
                process.env.BUSINESS_TOKEN_SECRET);
            return res.status(201).cookie('business_token', token).json({
                userValid: true, full_name: user[0].full_name
            }).end();
        } else {
            return res.json({
                userValid: false,
                msg: 'Password incorrect'
            }).end();
        }
    } catch (err) {
        console.log(err)
    }
})

module.exports.authBusinessCookie = function (cookies) {
    return new Promise(resolve => {
        cookies = parseCookies(cookies);
        if ("business_token" in cookies) {
            if (cookies.business_token === '') resolve(false);
            jwt.verify(cookies.business_token.toString(), process.env.BUSINESS_TOKEN_SECRET, function (err, decoded) {
                resolve(err === null ? decoded : false);
            });
        } else {
            resolve(false);
        }
    })
}

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

module.exports.router = router;
