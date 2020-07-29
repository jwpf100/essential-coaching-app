var express = require('express');
var router = express.Router();

/* GET blog2 page. */
router.get('/', function(req, res, next) {
  res.render('blogpost2', { title: 'Essential Coaching - Blog' });
});

module.exports = router;
