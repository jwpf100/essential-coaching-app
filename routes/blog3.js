var express = require('express');
var router = express.Router();

/* GET blog1 page. */
router.get('/', function(req, res, next) {
  res.render('blogpost3', { title: 'Essential Coaching - Blog' });
});

module.exports = router;
