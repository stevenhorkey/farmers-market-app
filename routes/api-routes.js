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

//dashboard pages routes

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
  var token = getToken(req.headers);
  if (token) {
    db.User.findAll(function (users, err) {
      if (err) return next(err);
      res.json(users);
    });
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }

});


//farmer page routes

router.get('/populateFarmerPage/:id', function (req, res) {
  db.User.findOne({
    where: { id: req.params.id }
  })
    .then(function (farmer, err) {
      if (err) return (err);
      else {
        res.json(farmer);
      }
    });
});

//markets page routes 
//will need to be populated by location, use zipcode 

router.get('/populateMarketsCard', function (req, res) {
  db.Market.findAll({})
    .then(function (markets, err) {
      if (err) return (err);
      else {
        res.json(markets);
      }
    });
});


//products routes- associated with farmers 

router.get('/populateProducts/:id', function (req, res) {
  db.Product.findAll(
    { where: { UserId: req.params.id } })
    .then(function (products, err) {
      if (err) return (err);
      else {
        res.json(products);
      }
    });
});

//passport 

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