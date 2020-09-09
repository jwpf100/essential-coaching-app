var express = require('express');
var router = express.Router();

/* GET aboutme page. */
router.get('/', function(req, res, next) {
  res.render('robots', { title: 'Essential Coaching - About Me' });
});

module.exports = router;
