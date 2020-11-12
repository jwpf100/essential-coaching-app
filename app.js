var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const engine = require('ejs-locals');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

const router = require('./routes/index')

var app = express();

//Require middleware
const middleware = require('./middleware');
const { Router } = require('express');

//end of added code

// view engine setup
app.engine('ejs', engine);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Use middleware to force SSL
app.use(middleware.forceSSL)
app.use(express.static(path.join(__dirname, 'public')));

//Using this to include the bootstrap js modules - to be replaced with webpack
//app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));

//In development use src
// app.use('/src', express.static(path.join(__dirname, 'src')));


app.use('/', router)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
