var express = require('express');
var router = express.Router();
var sequelize = require('sequelize');
var User = require('../Models/user');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Express REST API');
});
/* GET ALL Users */

/* GET ALL Users */
 router.get('/db/', function(req, res, next) {
     User.findAll({})
     .then(function(dbUser){
         res.send("");
     })
 });

module.exports = router;