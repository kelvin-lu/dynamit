var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'dynaMIT' });
});

router.get('/aboutus', function(req, res, next) {
	res.render('aboutus', { title: 'dynaMIT: About Us'});
});

module.exports = router;
