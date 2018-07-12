$(window).scroll(function(){
  var scroll = $(this).scrollTop();
  //console.log(scroll)

  $("#head h1").css({
    "transform" : "translate(-50%, " + scroll/2 + "px)",
    "text-shadow" : ".12rem " + (.12 - scroll/5000) + "rem rgba(0,0,0,0.2)"
  })
  $("#head .birds").css({
    "transform" : "translate(" + scroll/1.4 + "px, " + scroll/2 + "px)",
    "background-size" : "" + (80 - scroll/25) + "% auto"
  })
});
