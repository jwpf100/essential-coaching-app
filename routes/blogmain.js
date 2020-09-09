var express = require('express');
var router = express.Router();

/* GET blog main page. */
router.get('/', function(req, res, next) {
  res.render('blogmain', { title: 'The Essential Career Blog - Essential Coaching',
  metaDescription: "Everything you need to know about career coaching, and how to make your career the best it can be."
});
});

module.exports = router;
