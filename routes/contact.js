var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { 
    title: 'Contact Details - Essential Coaching',
    metaDescription: "Contact Nikki Thomas to learn how you can create the career you want.  Email:nicola@essentialcoaching.co.uk"
  });
});

module.exports = router;
