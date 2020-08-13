//Add scrolled class to navbar
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 1) {
      $("nav").addClass("scrolled");
      $("nav").removeClass("navbar-dark");
      $("nav").addClass("navbar-light");
    } else {
      $("nav").removeClass("scrolled");
      $("nav").removeClass("navbar-light");
      $("nav").addClass("navbar-dark");
    }
  });
});
//Add clicked class to navbar on mobile toggle

$(".navbar-toggler").click(function () {
  const div = document.querySelector('nav');
  if (div.classList.contains("activated") && !div.classList.contains("scrolled")) {
    $("nav").removeClass("activated");
    $("nav").removeClass("navbar-light");
    $("nav").addClass("navbar-dark");
  } else if (!div.classList.contains("scrolled")) {
    $("nav").addClass("activated");
    $("nav").removeClass("navbar-dark");
      $("nav").addClass("navbar-light");
  }
});