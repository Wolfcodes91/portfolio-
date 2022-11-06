var express = require('express');
var router = express.Router();
var dotenv = require("dotenv").config();
const chuckKey = process.env.CHUCK_KEY 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Dave Wolfberg's Portfolio", chuckKey: chuckKey });
});

module.exports = router;
