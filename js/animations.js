
$(window).scroll(function(){
  var scroll = $(this).scrollTop();

  $("#head h1 hr").css("transform", "scale(" + (1 - scroll/6000) + ", 1)");
});
