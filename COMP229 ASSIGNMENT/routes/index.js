/*
Filename: index.js
Name: Jan Rodel Escareses
Student #: 301225122
Date: October 2nd, 2022
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res){
  res.render('welcome', {
    title : "Home"
  })
});

/* GET About Me page. */
router.get('/about', function(req, res){
  res.render('about', {
    title : "About Me"
  })
});

/* GET Projects page. */
router.get('/projects', function(req, res){
  res.render('projects', {
    title : "Projects"
  })
});

/* GET Services page. */
router.get('/services', function(req, res){
  res.render('services', {
    title : "Services"
  })
});

/* GET Contact Me page. */
router.get('/contact-us', function(req, res){
  res.render('contact', {
    title : "Contact Me"
  })
});

/* Renders response from form */
router.post("/contact-us", function (req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var subject = req.body.subj;
  var message = req.body.msg;
  res.render("msg", { title: "Contact Me", name: name, email: email, subj: subject, msg: message});
});

module.exports = router;
