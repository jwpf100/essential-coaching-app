var express = require('express');
var router = express.Router();

/* GET blog1 page. */
router.get('/', function(req, res, next) {
  res.render('blogpost1', { title: 'What is Career Coaching? - Essential Coaching Blog',
  metaDescription: "What is the point of coaching and how is it different to mentoring or therapy?"
 });
});

module.exports = router;
