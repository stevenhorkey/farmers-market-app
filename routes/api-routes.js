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
  //change the request parameter from a string to a number
  //gets the request token
  var userId = parseInt(req.params.id);
  var token = getToken(req.headers);
  if (token) {
    //find all of the products
    db.Product.findAll({
      //where the products foreign key is equal to the id passed as a parameter in the request
      where: { UserId: userId }
      //after info is grabbed from the database
    }).then(function (products, err) {
      console.log(products);
      console.log('success');
      console.log(err);
      //if there is an error, return the error
      if (err) {
        return (err);
      }
      //if there is no error, send the products back as json
      else {
        res.json(products);
      }
    });
    //if user is unauthorized return info back to the user
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }

});

//this route grabs the market associated with the market organizer
//this is a very similar route to populateDashboardVendor
//route is first ran through passport for authentication
router.get('/populateDashboardMarket/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
  console.log('in');
  //request parameter needs to be parsed to a number before searching the database
  var userId = parseInt(req.params.id)
  var token = getToken(req.headers);
  if (token) {
    //find one market
    db.Market.findOne({
      //where the markets foreign key matches the id passed as a request parameter
      where: { UserId: userId }
    }).then(function (market, err) {
      //if there is an error, return it
      if (err) {
        return err;
      //of there is no error, return the market's data as json
      } else {
        res.json(market);
      }
    });
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized' });
  }
});

//Dashboard create product route
router.post('/newProduct', passport.authenticate('jwt', { session: false }), function (req, res) {
  var token = getToken(req.headers);

  console.log(req.user.dataValues.id);
  console.log("here is the res.data:")
  console.log(req.user.dataValues);

  if (token) {
    console.log(req.user.dataValues.id);
    //create an object that contains all of the information we need from the request body
    //req.user.dataValues.id is attached to the request
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

router.post('/newMarket', passport.authenticate('jwt', { session: false }), function (req, res) {
  var token = getToken(req.headers);

  console.log(req.user.dataValues.id);
  console.log("here is the res.data:")
  console.log(req.user.dataValues);

  if (token) {
    console.log(req.user.dataValues.id);
    var newProduct = {
      marketName: req.body.marketName,
      marketAddress: req.body.marketAddress,
      marketImage: req.body.marketImage,
      marketTime: req.body.marketTime,
      marketZip: req.body.marketZip,
      UserId: req.user.dataValues.id
    }

    console.log("in if statement")

    db.Market.create(newProduct)
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

router.put('/updateProduct/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
  var token = getToken(req.headers);
  let id = parseInt(req.params.id);
  if (token) {
    db.Product.update(
      {
        item: req.body.item,
        image: req.body.image
      },
      { where: { id: id } })
      .then(function (product, err) {
        if (err) {
          return (err);
        }
        else {
          res.json(product)
        }
      });
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
})

//Dashboard update a market route

router.put('/updateMarket/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
  var token = getToken(req.headers);
  let id = parseInt(req.params.id);
  if (token) {
    db.Market.update(
      {
        marketName: req.body.marketName,
        marketAddress: req.body.marketAddress,
        marketTime: req.body.marketTime,
        marketImage: req.body.marketImage,
        marketZip: req.body.marketZip
      },
      { where: { UserId: id } })
      .then(function (market, err) {
        if (err) {
          return (err);
        }
        else {
          res.json(market)
        }
      });
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
})


router.delete('/deleteProduct/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
  let token = getToken(req.headers);
  let id = parseInt(req.params.id);
  if (token) {
    db.Product.destroy({
      where: { id: id }
    }).then(function (product, err) {
      if (err) {
        return (err);
      } else {
        res.json(product);
      }
    });
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized' });
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
router.get('/populateMarketCard', function (req, res) {
  db.Market.findAll({})
    .then(function (market, err) {
      if (err) return (err);
      else {
        res.json(market);
      }
    });
});

router.get('/populateMarketPage/:id', function (req, res) {
  let id = parseInt(req.params.id);
  db.Market.findOne(
    { where: { MarketID: id } })
    .then(function (market, err) {
      if (err) return (err);
      else {
        res.json(market);
      }
    });
});

router.get('/populateFarmers/:id', function (req, res) {
  let id = parseInt(req.params.id);
  db.User.findAll(
    { where: { MarketID: id } })
    .then(function (market, err) {
      if (err) return (err);
      else {
        res.json(market);
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

router.get('/nearbyMarkets', function (req, res) {
  db.Market.findAll({})
  .then(function (markets, err) {
    if(err) return (err);
    else {
      res.json(markets);
    }
  })
});

router.get('/sendRequest', passport.authenticate('jwt', { session: false }), function (req, res) {
  var newRequest = {
    UserId: req.user.dataValues.id,
    hasAccepted: false,
    MarketId: req.body.id  };
})

module.exports = router;