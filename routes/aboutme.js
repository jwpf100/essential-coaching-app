var express = require('express');
var router = express.Router();

/* GET aboutme page. */
router.get('/', function(req, res, next) {
  res.render('aboutme', { 
    title: 'Nikki Thomas - Essential Coaching',
    metaDescription: "Learn more about Nikki Thomas, career coach, workplace psychologist and founder of Essential Coaching."
  });
});

module.exports = router;
