$(document).ready(function(){

	$(".header-button").mouseenter(function(){
		$(this).css("color","#A9A9A9");
	});
	$(".header-button").mouseleave(function(){
		$(this).css("color","white");
	});
	
	$(".project-carousel").slick({
		dots:true,
		autoplay:true,
		variableWidth:true
	});
	
	// $('.project-carousel').slick({
	// 	alert("slick");
	// 	infinite: true,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1
	// });
});
