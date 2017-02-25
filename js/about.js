jQuery(document).ready(function($) {

  var param = getQueryString("param");
  if(param){
    $('div[data-index]').each(function(i, item){
       var index = i+1;
       if(index == param){
        $(item).fadeIn("slow").fadeIn(500);
       }else {
        $(item).fadeOut("slow").fadeOut(500);
       }
    });
  }
  // $('.dropdown-toggle').dropdown();
  // var mao = $("#" + param); //获得锚点
  // if (mao.length > 0) { //判断对象是否存在
  //   var pos = mao.offset().top;
  //   var poshigh = mao.height();
  //   $("html,body").animate({
  //     scrollTop: pos - poshigh - 30
  //   }, 1000);
  // }

  $(".scroll").click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });

  $(document).scroll(function(){
    var scrollTop = $(this).scrollTop();
    if(scrollTop >=45){
      $("body >.div1").addClass("keep-top");
    }else {
      $("body >.div1").removeClass("keep-top");
    }
  });

  $('a[href*=#]').click(function() {
    var indexStr = $(this)[0].hash.split("#atr")[1];
    $('div[data-index]').each(function(i, item){
       var index = i+1;
       if(index == indexStr){
        // $(item).show();
        $(item).fadeIn("slow").fadeIn(500);
       }else {
        // $(item).hide();
        $(item).fadeOut("slow").fadeOut(500);
       }
    });
    //   var $target = $(this.hash);
    //   $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
    //   if ($target.length) {
    //     var targetOffset = $target.offset().top - 55;
    //     $('html,body').animate({
    //       scrollTop: targetOffset
    //     }, 1000);
    //     return false;
    //   }
    // }
  });

  $('a[class="nav"]').click(function() {
    // 现将所有的去掉
    $('a[class="nav"]').each(function(index, item){
      $(item).find('span').removeClass("checked");
    });
    // 如果没有选中
    if(!$(this).find('span').hasClass("checked")){
      $(this).find('span').addClass("checked");
    }
  });
});

function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}