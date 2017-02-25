jQuery(document).ready(function($) {
	 var window_height = $(window).height() - 45;
	 var windwo_width = $(window).width() + 45;
	 $(".home-bg").css("width", windwo_width).css("height", window_height);
	 $('.dropdown-toggle').dropdown();
	 $('.tooltip').tooltipster({
	 	interactive: true,
	 	theme: ['tooltipster-noir', 'tooltipster-noir-customized'],
	 	arrow: false
	 	// multiple: true
	 	// contentCloning: true,
	 	// functionBefore: function(instance, helper){
	 	// 	var type = $(instance._$origin[0].attributes[2]).val();
	 	// 	if(type == "create"){
	 	// 		$("#tooltip_create_a").attr("href","about.html?param=atr3_12_b");
	 	// 		$("#tooltip_create_a").click();

	 	// 	}else if(type == "show"){
	 	// 		$("#tooltip_create_a").attr("href","show.html");
	 	// 	}
	 	// }
	 });
	 // $('#trigger_show').tooltipster();
	 // $('#trigger_show').tooltipster({
	 // 	interactive: true
	 // 	// functionInit: function(instance, helper){
  //  //      var content = $(helper.origin).find('#tooltip_show').detach();
  //  //      instance.content(content);
  //  //  	}
	 // });

	 // $('#trigger_show').tooltipster('open').tooltipster('content', 'My new content');
});