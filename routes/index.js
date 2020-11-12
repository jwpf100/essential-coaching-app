var express = require('express');
var router = express.Router();

/* GET aboutme page. */
router.get('/aboutme', function(req, res, next) {
  res.render('app/aboutme', { 
    title: 'Nikki Thomas - Essential Coaching',
    metaDescription: "Learn more about Nikki Thomas, career coach, workplace psychologist and founder of Essential Coaching."
  });
});

/* GET blog1 page. */
router.get('/what-is-career-coaching', function(req, res, next) {
  res.render('app/blogpost1', { title: 'What is Career Coaching? - Essential Coaching Blog',
  metaDescription: "What is the point of coaching and how is it different to mentoring or therapy?"
 });
});

/* GET blog2 page. */
router.get('/why-do-i-need-a-careers-coach', function(req, res, next) {
  res.render('app/blogpost2', { title: 'Why do I need a careers coach? - Essential Coaching Blog',
  metaDescription: "Coaching can seem a bit of a dark art and it's hard to know whether or not a careers coach is right for you. At the very least it's a space to experiment, practice and learn about yourself with someone who will hold you accountable to action and give you immediate feedback."
 });
});

/* GET blog3 page. */
router.get('/what-kind-of-careers-coach-do-i-need', function(req, res, next) {
  res.render('app/blogpost3', { title: 'What kind of careers coach do I need? - Essential Coaching Blog',
  metaDescription: "One of the most important things to find out when you’re searching for a coach is whether or not you think you’ll work well with them. A good coach will be clear with you on their style and ways of working so that you can decide whether or not you’ll be a good fit."
 });
});

/* GET blog main page. */
router.get('/the-essential-career-blog', function(req, res, next) {
  res.render('app/blogmain', { title: 'The Essential Career Blog - Essential Coaching',
  metaDescription: "Everything you need to know about career coaching, and how to make your career the best it can be."
});
});

/* GET career coaching page. */
router.get('/career-coaching', function(req, res, next) {
  res.render('app/career-coaching', { title: 'Essential Coaching Process - Essential Coaching',
  metaDescription: "What is career coaching and how can it help you?"
});
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('app/contact', { 
    title: 'Contact Details - Essential Coaching',
    metaDescription: "Contact Nikki Thomas to learn how you can create the career you want.  Email:nicola@essentialcoaching.co.uk"
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('app/home', {
    title: 'Essential Coaching - Great Careers Start Here!',
    metaDescription: "Career coaching for people who want to create a career they love."
  });
});


module.exports = router;