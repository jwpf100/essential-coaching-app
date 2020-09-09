var express = require('express');
var router = express.Router();

/* GET aboutme page. */
router.get('/', function(req, res, next) {
  res.render('career-coaching', { title: 'Essential Coaching Process - Essential Coaching',
  metaDescription: "What is career coaching and how can it help you?"
});
});

module.exports = router;
