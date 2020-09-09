var express = require('express');
var router = express.Router();

/* GET blog2 page. */
router.get('/', function(req, res, next) {
  res.render('blogpost2', { title: 'Why do I need a careers coach? - Essential Coaching Blog',
  metaDescription: "Coaching can seem a bit of a dark art and it's hard to know whether or not a careers coach is right for you. At the very least it's a space to experiment, practice and learn about yourself with someone who will hold you accountable to action and give you immediate feedback."
 });
});

module.exports = router;
