jQuery(document).ready(function($) {
	var hash = getCookie("hash");
	 if(hash == "show"){
	 	$("#about_html").css("color", "#3AB199");
	 }else {
	 	setCookie("hash", "show");
	 }

	 $('.DB_tab25').DB_tabMotionBanner({
		key:'b28551',
		autoRollingTime:2000,
		bgSpeed:500
	});

	// $('.hiSlider').hiSlider({
	// 	isFlexible: true,
	// 	startSlide: 0,
	// 	intervalTime: 3000,
	// 	isFullScreen: true
	// });

	$(".scroll").click(function(event) {
		event.preventDefault();
		$('html,body').animate({
			scrollTop: $(this.hash).offset().top
		}, 1000);
	});

});
