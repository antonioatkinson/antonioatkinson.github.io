// $(document).ready(function(){
// 	//Highlights button 
// 	// $(".header-button").mouseenter(function(){
// 	// 	$(this).addClass('hovered');
// 	// });
// 	// $(".header-button").mouseleave(function(){
// 	// 	var parent = $(this).parent();
// 	// 	var URL = $(parent).prop("href");
// 	// 	if(URL!=document.URL){
// 	// 		$(this).removeClass('hovered');
// 	// 	}
// 	// });

// 	// //Changes header button color based on current page 
// 	// $(".header-button").each(function () {
// 	// 	var parent = $(this).parent();
// 	// 	var URL = $(parent).prop("href");
// 	// 	if (URL == document.URL) {
// 	// 		$(this).addClass('hovered');
// 	// 	}
// 	// });
	
// 	// //Carousel of photos for homepage
// 	// $(".project-carousel").slick({
// 	// 	dots:true,
// 	// 	autoplay:true,
// 	// 	variableWidth:true,
// 	// 	centerMode:true
// 	// });

//     $('[data-toggle="tooltip"]').tooltip();   
// });
$(document).ready(function(){

	// $(".tile").mouseenter(function(){
	// 	$(this).flip();
	// });

	$(".fa-footer").mouseenter(function(){
		$(this).addClass("footer-hover");
	});
	$(".fa-footer").mouseleave(function(){
		$(this).removeClass("footer-hover");
	});
	// $(".fa-github").mouseenter(function(){
	// 	$(this).addClass("footer-hover");
	// });
	// $(".fa-github").mouseleave(function(){
	// 	$(this).removeClass("footer-hover");
	// });

	// $(".fa-envelope").mouseenter(function(){
	// 	$(this).addClass("footer-hover");
	// });
	// $(".fa-envelope").mouseleave(function(){
	// 	$(this).removeClass("footer-hover");
	// });

	// $(".fa-linkedin-square").mouseenter(function(){
	// 	$(this).addClass("footer-hover");
	// });
	// $(".fa-linkedin-square").mouseleave(function(){
	// 	$(this).removeClass("footer-hover");
	// });

	// $(".fa-codepen").mouseenter(function(){
	// 	$(this).addClass("footer-hover");
	// });
	// $(".fa-codepen").mouseleave(function(){
	// 	$(this).removeClass("footer-hover");
	// });
      
});