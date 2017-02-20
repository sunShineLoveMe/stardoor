jQuery(document).ready(function($) {
 var param = getQueryString("param");
 $('.dropdown-toggle').dropdown();
 var mao = $("#" + param); //获得锚点
  if (mao.length > 0) {//判断对象是否存在
  var pos = mao.offset().top;
  var poshigh = mao.height();
  $("html,body").animate({ scrollTop: pos-poshigh-30 }, 1000);
 }
 
 $(".scroll").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
	});

 $('a[href*=#]').click(function(){
 	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	  var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
      if ($target.length) {
        var targetOffset = $target.offset().top - 55;
        $('html,body').animate({
          scrollTop: targetOffset
        },1000);
        return false;
      }
 	  }
 });

});


function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}

