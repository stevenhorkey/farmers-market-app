var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || "3001";
var apiRoutes = require('./routes/api-routes');
var app = express();
var auth = require('./routes/auth');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
if (process.env.NODE_ENV === 'production') {
  console.log('in the static express build');
  app.use(express.static(path.join(__dirname, '/client/build')));
}

app.use('/api', apiRoutes);
app.use('/api/auth', auth);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Send the error message
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
