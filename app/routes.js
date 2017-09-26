//require express
var express = require('express');
var path = require('path');
// create router object
var router = express.Router();

// export router
module.exports = router;

// route our home page
router.get('/', function(req, res) {
  res.render('pages/index');
});

// route our about page
router.get('/about', function(req, res) {
  res.render('pages/about');
});

// route our contact page
router.get('/contact', function(req, res) {
  res.render('pages/contact');
});

router.post('/contact', function(req, res) {

});
