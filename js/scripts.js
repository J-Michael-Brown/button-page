$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });
  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
  });
  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
  $("button#default").click(function() {
    $("body").removeClass();
  });

});
