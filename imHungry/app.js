var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
require('handlebars/runtime');

//Set up Mongoose
var mongoose = require('mongoose');
// Connect to either the MONGOLAB_URI or to the local database.
//mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/mymongodb');
// connects to the ImHungry database
mongoose.connect('mongodb://localhost/imHungry')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log("database connected");
});

// Import route handlers
var index = require('./routes/index');
var users = require('./routes/users');

// Import imHungry model
var User = require('./models/User');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret : '6170', resave : true, saveUninitialized : true }));




// Authentication middleware. This function
// is called on _every_ request and populates
// the req.currentUser field with the logged-in
// user object based off the username provided
// in the session variable (accessed by the
// encrypted cookied).
app.use(function(req, res, next) {
  if (req.session.username) {
    User.findByUsername(req.session.username, 
      function(err, user) {
        if (user) {
          req.currentUser = user;
        } else {
          req.session.destroy();
        }
        next();
      });
  } else {
      next();
  }
});

// Map paths to imported route handlers
app.use('/', index);
app.use('/users', users);


<<<<<<< HEAD
// use middleware for getting pantry and stuff and logged in user

// catch 404 and forward to error handler
=======
// Catch 404 and forward to error handler.
>>>>>>> 1bbcaa6613099633801512ff614af64fe3cd4115
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});



// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
