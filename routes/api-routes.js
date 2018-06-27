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
// Auth route - populate vendor dashboard based on their user id.
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


router.get('/populateDashboardMarket/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
  console.log('in');
  var userId = parseInt(req.params.id)
  var token = getToken(req.headers);
  if (token) {
    db.Market.findOne({
      where: { UserId: userId }
    }).then(function (market, err) {
      if (err) {
        return err;
      } else {
        res.json(market);
      }
    });
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized' });
  }
});

//Dashboard create product route

router.post('/newProduct',  passport.authenticate('jwt', { session: false }), function (req, res) {
  var token = getToken(req.headers);

  console.log(req.user.dataValues.id);
  console.log("here is the res.data:")
  console.log(req.user.dataValues);

  if (token) {
    console.log(req.user.dataValues.id);
    var newProduct = {
    item: req.body.item,
    image: req.body.image,
    UserId: req.user.dataValues.id
  }

    console.log("in if statement")

    db.Product.create(newProduct)
    .then(function (products, err) {
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

})

//Dashboard update a product route

router.put('/updateProduct/:id',  passport.authenticate('jwt', { session: false }), function (req, res) {
  var token = getToken(req.headers);
  let id = parseInt(req.params.id); 
  if(token){
    db.Product.update(
      { item: req.body.item,
        image: req.body.image},
      {where:{ id: id}})
      .then(function(product, err){
        if(err){
          return (err);
        }
        else{
          res.json(product)
        }
      });
  } else {
      return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
})

router.delete('/deleteProduct/:id', passport.authenticate('jwt', {session: false}), function (req, res) {
  let token = getToken(req.headers);
  let id = parseInt(req.params.id);
  if(token){
    db.Product.destroy({
      where: {id: id}
    }).then(function(product, err){
      if(err){
        return (err);
      } else {
        res.json(product);
      }
    });
  } else {
      return res.status(403).send({success: false, msg: 'Unauthorized'});
  }
})


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
  let id = parseInt(req.params.id);
  db.Product.findAll(
    { where: { UserId: id } })
    .then(function (products, err) {
      if (err) return (err);
      else {
        res.json(products);
      }
    });
});

module.exports = router;