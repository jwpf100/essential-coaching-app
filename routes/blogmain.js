var express = require('express');
var router = express.Router();

/* GET blog main page. */
router.get('/', function(req, res, next) {
  res.render('blogmain', { title: 'Essential Coaching - Blog' });
});

module.exports = router;
