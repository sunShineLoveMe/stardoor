jQuery(document).ready(function($) {
	$(".scroll").click(function(event) {
		event.preventDefault();
		$('html,body').animate({
			scrollTop: $(this.hash).offset().top
		}, 1000);
	});

	$(".index_focus").hover(function() {
		$(this).find(".index_focus_pre,.index_focus_next").stop(true, true).fadeTo("show", 1)
	}, function() {
		$(this).find(".index_focus_pre,.index_focus_next").fadeOut()
	});

	$(".index_focus").slide({
		titCell: ".slide_nav a ",
		mainCell: ".bd ul",
		delayTime: 500,
		interTime: 3500,
		prevCell: ".index_focus_pre",
		nextCell: ".index_focus_next",
		effect: "fold",
		autoPlay: true,
		trigger: "click",
		startFun: function(i) {
			$(".index_focus_info").eq(i).find("h3").css("display", "block").fadeTo(1000, 1);
			$(".index_focus_info").eq(i).find(".text").css("display", "block").fadeTo(1000, 1);
		}
	});
});