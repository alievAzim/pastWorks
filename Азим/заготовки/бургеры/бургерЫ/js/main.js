// $(function(){

// $(".burger").on("click",function(){
// 	$(this).toggleClass("burger-active");
// 	if ($(".burger").hasClass("burger-active")) {
// 	$("body").css("overflow","hidden")
// 	}else{
// 	$("body").css("overflow","initial")
// 	}
// });
// $(".burger").on("click",function(){
// 	$("nav").toggleClass("nav-active")
// });
// $("[data-scroll]").on('click',function(event){
// 	event.preventDefault();
// 	let elementId=$(this).data('scroll');
// 	let elementOffset=$(elementId).offset().top;
// 	$("html,body").animate({
// 		scrollTop:elementOffset
// 	},400)
// })

// })




















$(function(){

	$(".burger").on('click',function(){
		$("nav").toggleClass("nav-active");
		$(this).toggleClass("burger-active");
	});
	$("[data-scroll]").on('click',function(e){
		e.preventDefault();
		let elementId=$(this).data('scroll');
		let elementOffset=$(elementId).offset().top;
		$('html,body').animate({
			scrollTop:elementOffset
		},300);
	});


})