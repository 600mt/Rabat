$(document).ready(function() {
    
var w = Math.round($(document).width() / 255);
var h = Math.round($(document).height() / 255);
var body = $("body");
var rect = $("#uno");
var rect2 = $("#due");
var rect3 = $("#tre");
var rect4 = $("#quattro");

$(document).mousemove(function(e){
    var pageX = Math.round(e.pageX / w);
    var pageY = Math.round(e.pageY / h);
   // body.css("background-color", "rgb("+pageX+","+pageY+","+pageX+")");
    rect.css("padding-top", pageY);
    rect2.css("padding-top", pageY/1.5);
    rect3.css("padding-top", pageY/2);
    rect4.css("padding-top", pageY/3);
}); 
    
});
    