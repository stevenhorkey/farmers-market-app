var db = require('../Models');
var passport = require('passport');
var settings = require('../config/settings');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var bcrypt = require('bcrypt-nodejs');

// Encrypt Password
var generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
}
// Validate password
var comparePassword = function(candidatePassword,password){
    return bcrypt.compareSync(candidatePassword, password)
}
// Api Post to signup 
router.post('/signup', function(req, res) {
    if (!req.body.email || !req.body.password) {
      res.json({success: false, msg: 'Please pass email, password, and your full name name.'});
    } else {
        
      var newUser = new db.User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: generateHash(req.body.password),
        email: req.body.email,
        userType: req.body.userType,
        profileImage: req.body.profileImage
      });
      // save the user
      newUser.save(function(err) {
        if (err) {
          return res.json({success: false, msg: 'Email already exists.'});
        }
        res.json({success: true, msg: 'Successful created new user.'});
      });
    }
});
// Api post to login
router.post('/login', function(req, res) {
    db.User.findOne({
      email: req.body.email
    }).then(function(user){
  
        if (!user) {
            res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
            // check if password matches
            if (comparePassword(req.body.password,user.password)){
                 // if user is found and password is right create a token
                 var token = jwt.sign(user.toJSON(), settings.secret);
                 // return the information including token as JSON
                 res.json({success: true, token: 'JWT ' + token});
            } else {
                res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
            }
        }
    }).catch(function(err){
        throw err;
    })
});

module.exports = router;