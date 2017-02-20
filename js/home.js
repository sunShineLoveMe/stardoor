jQuery(document).ready(function($) {
	 var window_height = $(window).height() - 45;
	 var windwo_width = $(window).width();
	 $(".home-bg").css("width", windwo_width).css("height", window_height);
	 $('.dropdown-toggle').dropdown();
	 $('.tooltip').tooltipster({
	 	interactive: true,
	 });
});