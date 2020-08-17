const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

//Import Routes
const api = require('./src/routes/api.js');

//Connect to DB
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Connected to DB!');
});

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(process.cwd() + "/src/my-app1/src"));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//Routes Middleware
app.use('/api', api);

//Start Server
const port = 3080;
app.listen(port, () => {
    console.log('Express server is running on http://localhost:' + port);
})
