var express = require('express');
var router = express.Router();

/* GET blog1 page. */
router.get('/', function(req, res, next) {
  res.render('blogpost3', { title: 'What kind of careers coach do I need? - Essential Coaching Blog',
  metaDescription: "One of the most important things to find out when you’re searching for a coach is whether or not you think you’ll work well with them. A good coach will be clear with you on their style and ways of working so that you can decide whether or not you’ll be a good fit."
 });
});

module.exports = router;
