$("body").mousemove(function(event){
    var position = $("#coords").text(event.pageX + ", " + event.pageY);
    console.log(event.pageX);
    console.log(even.pageY);
});
