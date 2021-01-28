## EssentialCoaching.co.uk

A small business website, designed to provide information, contact details and booking options for Essential Coaching, a small coaching business.

The site is built with HTML, SCSS, JS and Bootstrap.  Integrated with Google analytics, Mailchimp and Calendly to provide analytics, email and scheduling functionality.  Webpack used to bundle.  Hosted on Heroku.  Custom domain manged via Google Domains.

## Project Status

First phase is complete.  Next phase is to improve the blog to allow additional posts to be added by the client(admin), and to add a custom webpack config to bundle css, scss, images etc. It would also be good to add a feed to the client's instagram/linked in.  There will be additional tasks added by the client on an adhoc basis.

## Project Screen Shots

<img src="https://user-images.githubusercontent.com/64267174/106137346-7c98a580-6162-11eb-9755-ba2f57bb1844.png" height="500"> <img src="https://user-images.githubusercontent.com/64267174/106137598-d1d4b700-6162-11eb-98c5-a58fd574278e.png" height="500"> 

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`  

## Reflection

This was a great project to really get a handle on how Bootstrap and a number of other technologies worked, and I'm happy with the result which looks clean and not just like a bootstrapped template site.  The client has given extrememly positive feedback and has already had new clients booking through the scheduling feature.

I used Bootstrap primarily to make a responsive site, that would work on all browsers, and that I would be able to maintain easily.  I have other projects that I've made in vanilla HTML and CSS, this was a project that I had to think about longer term, rather than just being a showcase.  There are a number of different frameworks/libraries that I could have used, but as Bootstrap is so popular, that seemed to be a good reason to use it.  

In addition I used express and ejs templates to serve the site which made it easy to create a multipage site while maintaining continuity of certain elements such as the navbar.

This was a good project to balance the requirements of the client, with what could be done within a certain timeframe and without creating something difficult to maintain.  To that end I chose to add functionality from Bootstrap, [Mailchimp](https://mailchimp.com/) and [Calendly](https://calendly.com/) rather than trying to build features myself. 

The site is hosted on Heroku, where I've set up a pipeline to test new rollouts before going live.  In addition it is on a custom Domain where I have edited the DNS records to point at the Heroku deployment.

To develop the site further there are a few key areas I want to look at. 
- The blog is currently just 3 static pages and the client is keen to add to this.  I need to implement a solution that allows her to add to this and update the site with minimal input from me.  There are a few options, either Wordpress or an equivalent, or create a basic system myself. 
- At present the site has a basic webpack config but I'd like to go back and create a custom webpack config to deal with SCSS, images and caching. 
- In addition I need to look at more depth into the SEO performance and understand what can be added to improve the site's ranking on key terms such as 'Career Coaching'.   
