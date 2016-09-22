$("body").mousemove(function(event){
    var position = $("#coords").text(event.pageX + ", " + event.pageY);
    var x = event.pageX;
    var y = event.pageY;
    console.log(x,y);
    $jordan.css({
      'margin-left': x / 2,
      'margin-top': y / 2
    })
});

var $jordan = $(".jordan");
var $dog = $(".dog");
var $panda = $(".panda");
