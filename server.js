var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var db = require('./Models');
var PORT = process.env.PORT || 5000;
var mysql2 = require('mysql2');
var apiRoutes = require('./routes/api-routes');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api', apiRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

db.sequelize.sync({force: true}).then(function () {
    app.listen(PORT, function () {
      console.log("App listening on PORT " + PORT);
    });
  });

module.exports = app;