jQuery(document).ready(function($) {
  var hash = getCookie("hash");
   if(hash == "new"){
    $("#about_html").css("color", "#3AB199");
   }else {
    setCookie("hash", "new");
   }
 $('.dropdown-toggle').dropdown();
 $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
      });
 $('a[href*=#]').click(function() {
   	$(".flag-icon").each(function(){
   		$(this).removeClass("flag-icon");
   	});
    console.log($(this).find('span')[0]);
   	$($(this).find('span')[0]).addClass("flag-icon");
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
        if ($target.length) {
          var targetOffset = $target.offset().top - 55;
          $('html,body').animate({
            scrollTop: targetOffset
          }, 1000);
          return false;
        }
      }
    });
});