// $(function(){
// 	function wah(element){
// 		let w= $(element).width();
// 		let h = $(element).height();
// 		$(`.asd`).text(`Высота = `+ h +`, а ширина = `+w);
// 		}
// 		wah('button');

// });

$(function(){
	// $(`body`).html(`<h1>Новый заголовок</h1>`)//
	// $(`body p`).fadeOut(3000).fadeIn(2000)//
	// function sad(element,time){
	// 	if(time<1000 || time>5000 || isNaN(time)){
	// 		return false;
	// 	}
	// 	else{
	// 		$(element).fadeOut(time);
	// 	}
	// }
	// sad(`button`,1100)//

// 	$(`button`).fadeTo(3000,0.2,function(){
// 	$(`button`).hide(1000)
// }).fadeTo(5000,1,function(){
// 		$(`button`).show(1000)
// 	})//

	// $(`p:not(.asd)`).slideUp(2000).slideDown(100)//

// 	function addcl(element,Class){
// 		element="."+element
// 	$(element).addClass(Class);
// 	Class="."+Class;
// 	$(Class).slideUp(1000)
// }
// addcl(`vtoroy`,`logo`)

// $(`button`).css({
// 	'color':'green',
// 	'transform':'scale(2)'
// }) //

// $(`button`).animate({
// 	'color':'green',
// 	'transform':'scale(2)',
// 	'font-size':'40px',
// 	'padding':'20px'
// },3000,function(){
// 	alert(`Анимация успешно завершена!`)
// });//

$(`body p`).each(function(){
	if($(this).attr(`title`)!=`ns xj asim`){
		$(this).fadeOut(3000)
	}
})


})











