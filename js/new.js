jQuery(document).ready(function($) {
 $('.gallery a').Chocolat();
 $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
      });
});