$(document).ready(function() {
    $("#button").click(function() {
      $("#triangle-down, #triangle-up").addClass("usenand");
      $('content').addClass('krassInefade');
      $("#triangle-up, #triangle-down").delay(1500).fadeOut();
      $("#title").fadeOut(500);
      $("#button").addClass("toMenu");
      $("#button").text('+');
      setTimeout(function() {
        $("#button").attr("id", "menu");
      }, 1);
    });
  
    $("#menuClose, #menuContent a").click(function() {
      $("#menu").removeClass("menuTransition");
      $("#menuContent").fadeOut(300);
      $("#menu").text('+');
      $("#menu.toMenu").css('transition', '.5s ease-in-out');
    });
  
    $('a').click(function() {
      $('html, body').delay(500).animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 1000);
      return false;
    });
  
  });
  
  $(document).on("click", "#menu", function() {
    $("#menu").addClass("menuTransition");
    $("#menuContent").delay(500).fadeIn(1);
    $("#menu").text(' ');
  });