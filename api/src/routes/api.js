const router = require('express').Router();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
let ObjectId = require('mongoose').Types.ObjectId;

//Models
const User = require('../models/User');
const Business = require('../models/Business');
const Layout = require('../models/Layout');
const Order = require('../models/Order')
const Client = require('../models/Client');
const Product = require('../models/Products')

//Validate User's cookie
module.exports.isUserExistsByToken = async function (req) {
    return authBusinessCookie(req).then(tkn => {
        if (tkn !== false) {
            return findUserByToken(tkn).then(result => {
                return result;
            }).catch(err => {
                console.log('FIND ERROR: ' + err);
                return false;
            });
        }
        return (tkn);
    }).catch(err => {
        console.log('AUTH ERROR: ' + err)
        return false;
    })
}

//Validate that User In Business
router.post('/validate/user', async (req, res) => {
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
                business_id: business[0]._id,
                worker_id: worker[0].id
            },
            process.env.BUSINESS_TOKEN_SECRET);
        return res.status(201).cookie('business_token', token).json({
            userValid: true, title: worker[0].title, department: team.department
        })
    } catch (err) {
        console.log(err);
    }
});

//Sign Up action
router.post('/sign-up', async (req, res) => {
    authBusinessCookie(req).then(tkn => {
        if (tkn !== false) {
            const user = new User(
                {
                    full_name: req.body.full_name,
                    password: bcrypt.hashSync(req.body.password, 10),
                    contact: {
                        email: req.body.email_in
                    },
                    position: {
                        department: tkn.department,
                        title: tkn.title,
                        team_id: tkn.team_id
                    },
                    business_id: tkn.business_id,
                    worker_id: tkn.worker_id
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
})

//Sign In action
router.post('/sign-in', async (req, res) => {
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
        if (req.body.password !== '') {
            if (await bcrypt.compare(req.body.password, user[0].password)) {
                const token = await jwt.sign({
                        email: user[0].contact.email,
                        team_id: user[0].position.team_id,
                        department: user[0].position.department,
                        title: user[0].position.title,
                        business_id: user[0].business_id,
                        worker_id: user[0].worker_id
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
        } else {
            return res.json({
                userValid: false,
                msg: 'Fill in password'
            }).end();
        }

    } catch (err) {
        console.log(err)
    }
})

//Get User Layout By URL
router.get('/user/layout', async (req, res) => {
    return authBusinessCookie(req).then(tkn => {
        return new Promise((resolve, reject) => {
            findUserLayoutByToken(tkn, "dashboard").then(result => res.json({result: result})).catch(err => res.json({error: err}));
        })
    }).catch(console.log)
})

//Get Business Orders By BusinessID
router.get('/user/orders', async (req, res) => {
    console.log('')

    return authBusinessCookie(req).then(tkn => {
        console.log(req.query.id)
        if (req.query.id === '') {
            Order.find(
                {
                    business_id: tkn.business_id
                }
            ).then(orders => {
                if (orders.length > 0) {
                    res.json({result: orders}).end()
                } else {
                    res.json({result: false})
                }
            })
        } else {
            Order.find(
                {
                    business_id: tkn.business_id,
                    order_id: {$regex: ".*" + req.query.id + ".*"}
                }
            ).then(orders => {
                if (orders.length > 0) {
                    res.json({result: orders}).end()
                } else {
                    res.json({result: false}).end()
                }
            })
        }
    }).catch(console.log)
})

//Get Client Orders By ClientID and BusinessID
router.get('/user/client/orders', async (req, res) => {
    return authBusinessCookie(req).then(tkn => {
        Order.find(
            {
                "source.client_id": req.query.client_id,
                business_id: tkn.business_id
            }
        ).then(orders => {
            if (orders.length > 0) {
                res.json({result: orders}).end()
            } else {
                res.json({result: false}).end()
            }
        })
    }).catch(console.log)
})

//Get Product Info By ProductID and BusinessID
router.get('/user/products', async (req, res) => {
    return authBusinessCookie(req).then(tkn => {
        console.log('ID: ', req.query.id)
        Product.findOne(
            {
                product_id: req.query.id,
                business_id: tkn.business_id
            }
        ).then(product => {
            if (product === null) {
                res.json({result: false}).end()
            } else {
                res.json({result: product}).end()
            }
        })
    }).catch(console.log)
})

//Find Client Info according to decoded token and clientID
router.get('/user/client', async (req, res) => {
    return authBusinessCookie(req).then(tkn => {
        Client.find(
            {client_id: req.query.client_id, business_id: tkn.business_id}
        ).then(client => {
            if (client.length > 0) {
                res.json({result: client}).end()
            } else {
                res.json({result: 'No Users Found'}).end()
            }
        })
    }).catch(console.log)
})


//Find User's Layout according to decoded token and title of layout component
function findUserLayoutByToken(token, title) {
    return new Promise((resolve, reject) => {
        Layout.find(
            {
                "user_id": token.worker_id,
                "business_id": token.business_id
            }
        ).then(business => {
            if (business.length > 0) {
                const layout = business[0].layout;
                for (let i = 0; i < layout.length; i++) {
                    if (layout[i].id === title) resolve(layout[i].buttons);
                }
            } else {
                reject('Layout not found');
            }
        }).catch(reject)
    })
}

//Authenticate BC
function authBusinessCookie(cookies) {
    return new Promise((resolve, reject) => {
        cookies = parseCookies(cookies);
        if ("business_token" in cookies) {
            if (cookies.business_token === '') resolve(false);
            jwt.verify(cookies.business_token.toString(), process.env.BUSINESS_TOKEN_SECRET, function (err, decoded) {
                if (err === null) {
                    resolve(decoded);
                } else {
                    reject(false);
                }
            });
        } else {
            reject(false);
        }
    })
}

//Find User according to decoded token
function findUserByToken(token) {
    return new Promise((resolve, reject) => {
        Business.find(
            {
                _id: new ObjectId(token.business_id),
                "workforce.team_id": token.team_id,
                'workforce.workers.email': token.email
            }
        ).then(business => {
            if (business.length > 0) {
                resolve(true);
            } else {
                reject('User not found');
            }
        }).catch(reject)
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
