require('dotenv').config();

const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

const port = process.env.PORT;

//Import Routes
const api = require('./api/routes/api');

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('ui/public/index.html'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(cookieParser());

//Routes Middleware
app.use('/api', api.router);

app.listen(port, function () {
    console.log('Listening on http://localhost:' + port);
});
