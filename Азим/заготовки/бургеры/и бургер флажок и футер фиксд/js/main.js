$(document).ready(function () { 
    $('.ribbon').click(function(){
        $('#nav-icon').toggleClass('open');
    $('#nav-icon span').toggleClass('red');
    $('nav').toggleClass('visible');
    });
    
 })