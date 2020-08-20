require('dotenv').config();

const express = require('express');
const cors = require("cors");
const app = express();

const cookieParser = require('cookie-parser');
const mongoose = require('mongoose')

const port = 8080;

//Import Routes
const api = require('./src/routes/api');

//Middleware
app.use(cors({origin: true, credentials: true}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(process.cwd() + "/app/public/index.html"));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(cookieParser());

app.all("/api/user", async (req, res, next) => {
    api.authBusinessCookie(req).then((tkn) =>{
        res.json({auth:tkn}).end();
    })
})

//Routes Middleware
app.use('/api', api.router);


app.listen(port, function () {
    console.log(`Listening on http://localhost:` + port);
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log('Connected to DB!');
    });
});
