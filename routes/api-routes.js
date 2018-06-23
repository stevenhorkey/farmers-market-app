var express = require('express');
var router = express.Router();
var db = require('../Models');
var passport = require('passport');
require('../config/passport')(passport);

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

router.get('/populateDashboardVendor/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
  var userId = parseInt(req.params.id);
  var token = getToken(req.headers);
  if (token) {
    db.Product.findAll({
      where: { UserId: userId }
    }).then(function (products, err) {
      console.log(products);
      console.log('success');
      console.log(err);
      if (err) {
        return (err);
      }
      else {
        res.json(products);
      }
    });
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }

});


router.get('/populateDashboardMarket', passport.authenticate('jwt', { session: false }), function (req, res) {
  var userId = parseInt(req.params.id)
  var token = getToken(req.headers);
  if (token) {
    db.Market.findOne({
      where: {UserId: userId}
    }).then(function(market, err){
      if(err){
        return err;
      } else {
        res.json(market);
      }
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized'});
  }
});

router.post('/', passport.authenticate('jwt', { session: false }), function (req, res) {
  var token = getToken(req.headers);
  if (token) {
    db.User.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
});

module.exports = router;