var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var homeRouter = require('./routes/home');
var aboutmeRouter = require('./routes/aboutme');
var contactRouter = require('./routes/contact');
var blog1Router = require('./routes/blog1');
var blog2Router = require('./routes/blog2');
var blog3Router = require('./routes/blog3');
var blogmainRouter = require('./routes/blogmain');
var careerCoachingRouter = require('./routes/career-coaching');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//Using this to include the bootstrap js modules - to be replaced with webpack
//app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));

//In development use src
// app.use('/src', express.static(path.join(__dirname, 'src')));


// app.use('/index', indexRouter);
// app.use('/users', usersRouter);
app.use('/', homeRouter);
app.use('/aboutme', aboutmeRouter);
app.use('/contact', contactRouter);
app.use('/blog1', blog1Router);
app.use('/blog2', blog2Router);
app.use('/blog3', blog3Router);
app.use('/blogmain', blogmainRouter);
app.use('/career-coaching', careerCoachingRouter);

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
