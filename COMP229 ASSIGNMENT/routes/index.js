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
  res.render('index', {
    title : "Services"
  })
});

/* GET Contact Me page. */
router.get('/contact-us', function(req, res){
  res.render('index', {
    title : "Contact Me"
  })
});

module.exports = router;
