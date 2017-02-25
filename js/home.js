jQuery(document).ready(function($) {
	 // #3AB199
	 var hash = getCookie("hash");
	 if(hash == "home"){
	 	$("#about_html").css("color", "#3AB199");
	 }else {
	 	setCookie("hash", "home");
	 }
	 $('.dropdown-toggle').dropdown();
	 var window_height = $(window).height() - 45;
	 var windwo_width = $(window).width();
	 $(".home-bg").css("width", windwo_width).css("height", window_height);
	 
	 $('.tooltip').tooltipster({
	 	interactive: true,
	 	theme: ['tooltipster-noir', 'tooltipster-noir-customized'],
	 	arrow: false
	 });
});