var t = n = 0,count;
jQuery(document).ready(function($) {
	$('.hiSlider').hiSlider({
		isFlexible: true,
		startSlide: 0,
		intervalTime: 3000,
		isFullScreen: true
	});
	count = $("#banner_list a").length;
	$('.dropdown-toggle').dropdown();
	$("#banner_list a:not(:first-child)").hide();
	$("#banner_info").html($("#banner_list a:first-child").find("img").attr('alt'));
	$("#banner_info").click(function() {
		window.open($("#banner_list a:first-child").attr('href'), "_blank")
	});
	$("#banner li").click(function() {
		var i = $(this).text() - 1; //获取Li元素内的值，即1，2，3，4
		n = i;
		if (i >= count) return;
		$("#banner_info").html($("#banner_list a").eq(i).find("img").attr('alt'));
		
		$("#banner_info").unbind().click(function() {
			window.open($("#banner_list a").eq(i).attr('href'), "_blank")
		});
		 $("#banner_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
		
		document.getElementById("banner").style.background = "";
		$(this).toggleClass("on");
		$(this).siblings().removeAttr("class");
	});

	t = setInterval("showAuto()", 4000);
	$("#banner").hover(function() {
			clearInterval(t)
		},
		function() {
			t = setInterval("showAuto()", 4000);
		});

	
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

	// $(".index_focus").slide({
	// 	titCell: ".slide_nav a ",
	// 	mainCell: ".bd ul",
	// 	delayTime: 500,
	// 	interTime: 3500,
	// 	prevCell: ".index_focus_pre",
	// 	nextCell: ".index_focus_next",
	// 	effect: "fold",
	// 	autoPlay: true,
	// 	trigger: "click",
	// 	startFun: function(i) {
	// 		$(".index_focus_info").eq(i).find("h3").css("display", "block").fadeTo(1000, 1);
	// 		$(".index_focus_info").eq(i).find(".text").css("display", "block").fadeTo(1000, 1);
	// 	}
	// });
});

function showAuto() {
		n = n >= (count - 1) ? 0 : ++n;
		$("#banner li").eq(n).trigger('click');
	}