$(document).ready(function () {
  var $demo = $(".card-menu");
  var numOfSections = $(".card-menu-section").length;

  $(document).on("click", ".card-menu-menu-btn", function () {
    $demo.addClass("menu-active");
  });

  $(document).on("click", ".card-menu-close-menu", function () {
    $demo.removeClass("menu-active");
  });

  $(document).on(
    "click",
    ".card-menu.menu-active .card-menu-section",
    function () {
      var $section = $(this);
      var index = +$section.data("section");

      $(".card-menu-section.active").removeClass("active");
      $(".card-menu-section.inactive").removeClass("inactive");
      $section.addClass("active");
      $demo.removeClass("menu-active");

      for (var i = index + 1; i <= numOfSections; i++) {
        $(".card-menu-section[data-section=" + i + "]").addClass("inactive");
      }
    }
  );
});
