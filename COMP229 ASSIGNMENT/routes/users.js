/*
Filename: users.js
Name: Jan Rodel Escareses
Student #: 301225122
Date: October 2nd, 2022
*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
