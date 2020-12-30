$(function(){
    $('nav .skew').each(function (i) { 
        $("nav .skew").eq(i).css({
            transform:"rotate("+ i * 33 + "deg)"
        });
     });
     $('.burger').on('click', function(){
         $('nav').toggleClass('showing');
     })
})