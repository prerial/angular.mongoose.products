var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AngularJS-index' });
});

/* GET admin page. */
router.get('/users', function(req, res, next) {
  res.render('admin', { title: 'AngularJS-index' });
});

/* GET examples page. */
router.get('/examples', function(req, res, next) {
  res.render('examples', { title: 'AngularJS-index' });
});

module.exports = router;
