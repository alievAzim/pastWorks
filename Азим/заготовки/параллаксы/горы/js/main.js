$(document).ready(function () {
  $(window).scroll(function (event) {
    var s = $(this).scrollTop();
    var w = $(this).outerWidth();
    var h = $(".content").outerHeight();
    var h_b = $(".parallax").outerHeight();
    var p = (s / h) * 100;
    var p_b = (s / h_b) * 100;
    var o = 1 - (1 / 100) * p_b;

    var z_1 = 1 + (w / 10000) * p_b;
    $(".fog").css("transform", "scale(" + z_1 + ")");
    $(".fog").css("opacity", "o");

    var z_2 = 1 + (w / 4300000) * p;
    $(".mountain1").css("transform", "scale(" + z_2 + ")");

    var hr = (w / 2000) * p_b;
    var z_3 = 1 + w * 0.000005 * p_b;
    $(".mountain2").css(
      "transform",
      "translate3d(" + hr + "px,0,0) scale(" + z_3 + ")"
    );

    var hr_2 = (w / 1500) * p_b;
    var z_4 = 1 + w * 0.00001 * p_b;
    $(".mountain3").css(
      "transform",
      "translate3d(" + hr + "px,0,0) scale(" + z_4 + ")"
    );
  });
});
