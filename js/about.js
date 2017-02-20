jQuery(document).ready(function($) {
 $('.dropdown-toggle').dropdown();
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