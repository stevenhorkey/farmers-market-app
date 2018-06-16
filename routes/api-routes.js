var express = require('express');
var router = express.Router();
var sequelize = require('sequelize');
var db = require('../Models');
var passport = require('passport');
require('../config/passport')(passport);

// ****************** GET TOKEN FOR PASSPORT ************
getToken = function (headers) {
    if (headers && headers.authorization) {
      var parted = headers.authorization.split(' ');
      if (parted.length === 2) {
        return parted[1];
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

//**************** GET ROUTES ****************************

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Express REST API');
});

/* GET ALL Users (REPLACED BY PASSWORD-PROTECTED ROUTE BELOW) */
//  router.get('/db/', function(req, res, next) {
//      db.User.findAll({})
//      .then(function(dbUser){
//          res.json(dbUser);
//      })
//  });

router.get('/db/', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      db.User.findAll({})
      .then(function(dbUser){
          res.json(dbUser);
      })
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });

 //Used to test vegetable db in mySQL:
 router.get('/test/', function(req, res, next) {
    db.Vegetable.findAll({})
     .then(function(dbUser){
         res.json(dbUser);
     })
});

//**************** POST ROUTES ****************************

router.post('/', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      db.Vegetable.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
      });
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });

module.exports = router;