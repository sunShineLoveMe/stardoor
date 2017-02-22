jQuery(document).ready(function($) {
	 var window_height = $(window).height() - 45;
	 var windwo_width = $(window).width();
	 $(".home-bg").css("width", windwo_width).css("height", window_height);
	 $('.dropdown-toggle').dropdown();
	 $('.tooltip').tooltipster({
	 	interactive: true,
	 	contentCloning: true,
	 	functionBefore: function(instance, helper){
	 		var type = $(instance._$origin[0].attributes[2]).val();
	 		if(type == "create"){
	 			$("#tooltip_create_a").attr("href","about.html?param=atr3_12_b");
	 		}else if(type == "show"){
	 			$("#tooltip_create_a").attr("href","show.html");
	 		}
	 	}
	 });
});