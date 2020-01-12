$(document).ready(function() {
  $nav = $(".nav");
  $togglCollapse = $(".toggle-collapse");

  /* click event to handle icon-bar */

  $togglCollape.click(function() {
    $nav.$togglCollapse("collapse");
  });
});
