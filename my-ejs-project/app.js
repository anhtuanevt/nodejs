var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var expressLayouts = require('express-ejs-layouts');
const configAdmin = require('./src/config/system')

var indexRouter = require('./src/routes/index');
const connectDB = require('./src/config/db');

var app = express();
connectDB();


// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'backend');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// local variable
app.locals.prefix = configAdmin;

app.use('/', indexRouter);
app.use(`/${configAdmin.prefixAdmin}`, require('./src/routes/backend'));
app.use(`/${configAdmin.prefixAdmin}/items`, require('./src/routes/items'));

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
  res.render('error', {  pageTitle: 'ERROR PAGE' });
});

module.exports = app;
