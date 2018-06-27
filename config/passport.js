var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

// load up the user model
var db = require('../Models');
var settings = require('../config/settings'); // get settings file

module.exports = function(passport) {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = settings.secret;
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
      console.log("inside passport.use")
    db.User.findOne({where: {id: jwt_payload.id}})
        .then( function(user) {
          if (!user) {
              return done(null, false);
              console.log("there's an error")
          }
          if (user) {
              return done(null, user);
              console.log('in user')
          } else {
              return done(null, false);
              console.log("bad password")
          }
      });
  }));
};