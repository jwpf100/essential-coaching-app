var express = require('express');
var router = express.Router();

/* GET aboutme page. */
router.get('/', function(req, res, next) {
  res.render('career-coaching', { title: 'Essential Coaching - Career Coaching' });
});

module.exports = router;
