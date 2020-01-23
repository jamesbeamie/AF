const responsive = {
  0: {
    items: 1
  },
  320: {
    items: 1
  },
  560: {
    items: 2
  },
  960: {
    items: 3
  }
};
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
    ],
    responsive: responsive
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
