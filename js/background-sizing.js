function adjustBackgrounds(element){
  var bgURL = $(element).css("background-image").substring(5, ($(element).css("background-image").length - 2));
  var elementWidth = $(element).outerWidth(true);
  //var elementHeight = $(element).outerHeight(true);
  var windowHeight = $(window).height();
/*
  var img = new Image();
  img.src = bgURL;
  var imgWidth = img.width;
  var imgHeight = img.height;
  var aspect = imgHeight / imgWidth;
  console.log(elementWidth + ", " + elementHeight + ", " + bgURL + ", " + imgWidth + ", " + imgHeight);
  */

  if (elementWidth > windowHeight) {
    $(element).css("background-size", (elementWidth) + "px auto");
  } else {
    $(element).css("background-size", "auto " + (windowHeight) + "px");
  }
}

$(function() {
  adjustBackgrounds("#head");
  adjustBackgrounds("#education");
});

$(window).resize(function() {
  adjustBackgrounds("#head");
  adjustBackgrounds("#education");
});
