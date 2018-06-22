var db = require('../Models');
var passport = require('passport');
var settings = require('../config/settings');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var bcrypt = require('bcrypt-nodejs');

// get jwt token:
// Auth Token
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

//Api get to check jwt token:

router.post('/', function(req, res) {
    console.log(passport);
    var token = getToken(req.headers);
    if (token) {
      db.User.findAll(function (err, users) {
        if (err) return next(err);
        res.json(users);
        console.log(res);
        console.log("hahah")
      });
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
    
});

module.exports = router;
