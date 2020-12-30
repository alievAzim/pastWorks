$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $('.bg-blur').css({
        filter: "blur(" + (scroll/50) + "px)"
    })
})