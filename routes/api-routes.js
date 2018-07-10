var express = require('express');
var router = express.Router();
var db = require('../Models');
var passport = require('passport');
require('../config/passport')(passport);
var bcrypt = require('bcrypt-nodejs');
const Op = require('sequelize').Op;
var Sequelize = require('sequelize');



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

// Encrypt Password
var generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
}



router.get('/populateProducts', function (req, res) {
  db.Product.findAll({
    where: {

    }
  }).then(function (products, err) {
    if (err) {
      console.log(err);
      return (err);
    }
    console.log(products);
    res.json(products);
  })
})

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

router.put('/updateUser/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
  var token = getToken(req.headers);
  let id = parseInt(req.params.id);
  if (token) {
    db.User.update(
      {
        profileImage: req.body.profileImage,
        email: req.body.email,
        businessName: req.body.businessName,
        bio: req.body.bio
      },
      { where: { id: id } })
      .then(function (user, err) {
        if (err) {
          return (err);
        }
        else {
          res.json(user)
        }
      });
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
})
// Api route to update password from profile form
router.put('/updatePassword/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
  var token = getToken(req.headers);
  let id = parseInt(req.params.id);
  console.log(token, id, req.body.password);
  if (token) {
    db.User.update(
      {
        password: generateHash(req.body.password),
      },
      { where: { id: id } })
      .then(function (user, err) {
        if (err) {
          return (err);
          console.log('failed')
        }
        else {
          res.json(user)
          console.log('success')
        }
      });
  } else {
    console.log('errrrr')
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
    where: { id: req.params.id, userType: 'Vendor' }
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

router.get('/populateMarketPage', function (req, res) {
  db.Market.findAll({})
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
    { where: { MarketId: id } })
    .then(function (farmers, err) {
      if (err) return (err);
      else {
        res(farmers);
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

router.get('/nearbyMarkets/:id', function (req, res) {
  let id = parseInt(req.params.id)
  db.Request.findAll(
    { where: { UserId: id } }
  ).then(function (requests, error) {
    if (error) return (error);
    else {
      // console.log('test');
      // console.log(requests);
      let marketIds = [];
      requests.map(request => {
        console.log(request);
        marketIds.push(request.dataValues.MarketId)
      })
      console.log("these are the market ids:" + marketIds);
      db.Market.findAll({
        where: {
          id: {
            [Op.notIn]: marketIds
          }
        }
      })
        .then(function (markets, err) {
          if (err) return (err);
          else {
            res.json(markets);
          }
        })
    }
  })
});

router.post('/sendRequest', passport.authenticate('jwt', { session: false }), function (req, res) {
  console.log("inside send request")
  var marketIds = req.body.marketIds;
  console.log(req.body.marketIds)

  var requests = marketIds.map((id) => {
    request = {
      farmerName: req.user.dataValues.firstName + ' ' + req.user.dataValues.lastName,
      businessName: req.user.dataValues.businessName,
      UserId: req.user.dataValues.id,
      hadAccepted: false,
      MarketId: id
    }
    return request;
  })
  // console.log(requests)
  db.Request.bulkCreate(requests)
    .then(function (requests, error) {
      if (error) {
        throw error
      }
      else {
        res.send('success')
      }
    });
})

router.get('/retrieveRequests/:id', function (req, res) {
  let id = req.params.id;

  db.Market.findOne({
    where: { UserId: id }
  }).then(function (market, error) {
    if (error) throw error;
    else {
      if (market === null) {
        console.log('oops')
        res.send([]);
      } else {
        db.Request.findAll({
          where: {
            MarketId: market.dataValues.id,
            hasAccepted: false
          }
        }).then(function (request, error) {
          if (error) throw error;
          else {
            console.log(request);
            res.json(request);
          }
        })
      }
    }
  })
});

router.put('/acceptRequest', passport.authenticate('jwt', { session: false }), function (req, res) {
  let requestIds = req.body.requestIds;
  db.Request.update({
    hasAccepted: true
  },
    {
      where: { id: { [Op.in]: requestIds } }
    }).then(function (request, error) {
      if (error) throw error;
      else {
        res.json(request)
      }
    })
})

router.get('/getSidebarMarkets/', function (req, res) {
  db.Market.findAll({
    limit: 5
  }).then(function (markets, error) {
    if (error) throw error;
    else {
      res.json(markets);
    }
  })
})

router.get('/filterProductsByMarket/:id', function (req, res) {
  let marketId = parseInt(req.params.id);
  db.Request.findAll({
    where: {
      MarketId: marketId,
      hasAccepted: true
    }
  }).then(function (requests, error) {
    if (error) throw error;
    else {
      let farmerIds = [];
      console.log(requests);
      requests.map((request) => {
        farmerIds.push(request.dataValues.UserId);
      });
      db.Product.findAll({
        where: {
          UserId: {
            [Op.in]: farmerIds
          }
        }
      }).then(function (products, error) {
        if (error) throw error;
        else {
          res.json(products);
        }
      })
    }
  })
})

router.get('/getAssociatedMarkets/:id', function (req, res) {
  let farmerId = parseInt(req.params.id);
  db.Request.findAll({
    where: {
      UserId: farmerId,
      hasAccepted: true
    }
  }).then(function (requests, error) {
    if (error) throw error;
    else {
      let marketIds = [];
      requests.map((request) => {
        marketIds.push(request.dataValues.MarketId);
      });
      db.Market.findAll({
        where: {
          id: {
            [Op.in]: marketIds
          }
        }
      }).then(function (markets, error) {
        if (error) throw error;
        else {
          res.json(markets)
        }
      })
    }
  })
})

router.get('/findMarketByZip/:id', function (req, res) {
  console.log("inside find markets by zip")
  let zipcode = parseInt(req.params.id);
  db.Market.findAll({
    where: {
      marketZip: zipcode
    }
  }).then(function (markets, error) {
    if (error) throw error;
    else {
      res.json(markets)
    }
  })
})


module.exports = router;