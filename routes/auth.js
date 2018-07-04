var db = require('../Models');
var passport = require('passport');
var settings = require('../config/settings');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var bcrypt = require('bcrypt-nodejs');

// Encrypt Password
var generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
}

// Validate password
var comparePassword = function (candidatePassword, password) {
    return bcrypt.compareSync(candidatePassword, password)
}

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

router.post('/jwt', passport.authenticate('jwt', { session: false }), function (req, res) {
    console.log("inside router jwt route")
    var token = getToken(req.headers);
    if (token) {
        console.log(req.user)
        res.status(200).send({
            success: true,
            user: {
                id: req.user.dataValues.id,
                firstName: req.user.dataValues.firstName,
                lastName: req.user.dataValues.lastName,
                email: req.user.dataValues.email,
                userType: req.user.dataValues.userType,
                profileImage: req.user.dataValues.profileImage,
                email: req.user.dataValues.email,
                businessName: req.user.dataValues.businessName,
                zipcode: req.user.dataValues.zipcode,
                bio: req.user.dataValues.bio
            }
        })
    }
    else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }

});

// Api Post to signup 
router.post('/signup', function (req, res) {
    if (!req.body.email || !req.body.password) {
        res.json({ success: false, msg: 'Please pass email, password, and your full name name.' });
    } else {
 
        var newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: generateHash(req.body.password),
            email: req.body.email,
            userType: req.body.userType,
            zipcode: req.body.zipcode,
            profileImage: req.body.profileImage
        };
        // save the user
        db.User.findOne({
            where:{
                email: req.body.email
            }
        }).then(function(exists){
            console.log(exists);
            if (exists === null){
                db.User.create(newUser).then(function(dbUser){
                    res.json({
                        success: true,
                        message: 'Successfully signed up!'
                    })
                }).catch(function(err){
                    console.log(err);
                })
            } else {
                console.log('already exists')
                res.json({
                    success: false,
                    message: 'Email already in use!'
                });
            }
        }).catch(function(err){
            console.log(err);
        })
    }
});
// Api post to login
router.post('/login', function (req, res) {
    db.User.findOne({
        where: {
            email: req.body.email
        }
    }).then(function (user) {
        if (!user) {
            res.send({ success: false, eMessage: 'Authentication failed. User not found.' });
            console.log("made it inside if statement")
        } else {
            // check if password matches
            if (comparePassword(req.body.password, user.password)) {
                // if user is found and password is right create a token
                var token = jwt.sign(user.toJSON(), settings.secret);
                // return the information including token as JSON
                res.json({ success: true, token: 'JWT ' + token });
            } else {
                console.log('test')
                res.json({ success: false, pMessage: 'Authentication failed. Wrong password.' });
            }
        }
    }).catch(function (err) {
        throw err;
    })
});

module.exports = router;