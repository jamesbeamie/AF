$(document).ready(function() {
  $nav = $(".nav");
  $toggleCollapse = $(".toggle-collapse");

  /* click event to handle icon-bar */

  $toggleCollapse.click(function() {
    $nav.toggleClass("collapse");
  });

  // owl carousel for the cards

  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: false,
    nav: true,
    navText: [
      $(".owl-navigation .owl-nav-prev"),
      $(".owl-navigation .owl-nav-next")
    ]
  });

  // Click to scroll up
  $(".move-up span").click(function() {
    $("html,body").animate(
      {
        scrollTop: 0
      },
      1500
    );
  });
});
