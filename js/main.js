$(document).ready(function() {
  $nav = $(".nav");
  $toggleCollapse = $(".toggle-collapse");

  /* click event to handle icon-bar */

  $toggleCollapse.click(function() {
    $nav.toggleClass("collapse");
  });
});
