const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler - last resort for unhandled middle err when next() is invoked
const errorHandler = function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    // Targets JWT
    res.status(401).json({
      message: 'App.js: Invalid token!',
      success: false
    })
  } else if (err.name === 'MongoServerError') {
    // Targets MongoServerError: E11000 duplicate key error collection:
    res.status(500).json({
      message: "App.js: Unhandled err",
      errName: err.name,
      error: err
    })
  } else {
    // Code 500 Internal Server Error
    res.status(500).json({
      message: "App.js: Unhandled err",
      errName: err.name
    })
  }

  console.log(err)
}
app.use(errorHandler)

module.exports = app;
