
const express = require('express');
const app = express();
var cors = require('cors')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const signal  = require("signale");
const  logger = require('morgan');
const PORT = process.env.PORT || 3000;

dotenv.config();   


// connect to DB
mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    signal.success('connected to db');
});

const authRoute = require('./routes/auth');


// Middlewares
app.use(cors());
app.use(logger('dev'))
app.use(express.json());
// app.use(express.static('public'));
app.use("/" ,express.static("../dist"));
// Route Middleware
app.use('/api/user', authRoute);


app.listen(PORT, () => {
    signal.info('Server running on http://localhost:3000');
});