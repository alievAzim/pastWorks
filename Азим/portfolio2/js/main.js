$(document).ready(function () {
    $('.menu-toggler').on('click',function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open')
    });
    $('.top-nav .nav-link').on('click',function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').toggleClass('open')
    });
    $('nav a[href*="#"]').on('click',function(){
       $('html, body').animate({
           scrollTop: $($(this).attr('href')).offset().top 
       },2000)
    });
    $('#up').on('click',function(){
        $('html, body').animate({
            scrollTop: 0
        },2000)
    });
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once:true
    });
// form
    $(".close, .nope").on('click', function () {
        $('.modal').addClass('hidden');
        $('.open').addClass('active');
      })
      
      $(".open").on('click', function () {
        $(this).removeClass('active');
        $('.modal').removeClass('hidden');
      });
    //   end form
    // cursor
    let light = document.querySelector('.contact'),
on = false;
light.addEventListener('dblclick',function(e){
    on = !on;
    if(on){
        let x = e.clientX;
        let y = e.clientY;
        light.style.background = `radial-gradient(circle at ${x}px ${y}px,transparent 130px,rgba(0,0,0,1) 200px)`;
        light.style.cursor = "pointer",
        document.querySelector(".open.active").style.opacity = "1"
    }
    else{
        document.querySelector(".open.active").style.opacity = "0"
        light.style.cursor = "initial";
        light.style.background = "linear-gradient(0deg, #000, #272727)";
    }
});
light.addEventListener('mousemove',function(e){
    if(on){
        let x = e.clientX;
        let y = e.clientY;
        light.style.background = `radial-gradient(circle at ${x}px ${y}px,transparent 130px,rgba(0,0,0,0.95) 200px)`;
        light.style.cursor = "pointer"
        document.querySelector(".open.active").style.opacity = "1"
    }
    else{
        light.style.cursor = "initial"

    }
});
// end cursor
});