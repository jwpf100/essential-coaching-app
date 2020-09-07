var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { 
    title: 'Essential Coaching - Great Careers Start Here!',
    metaDescription: "Career coaching for people who want to create a career they love."
  });
});

module.exports = router;
