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
router.post('/api/auth/signup', function(req, res) {
    if (!req.body.email || !req.body.password || !req.body.phone || !req.body.company) {
      res.json({success: false, msg: 'Please pass email, password, phone number, and company name.'});
    } else {
        
      var newUser = new db.User({
        email: req.body.email,
        password: generateHash(req.body.password),
        phone: req.body.phone,
        company: req.body.company
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
router.post('/api/auth/login', function(req, res) {
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